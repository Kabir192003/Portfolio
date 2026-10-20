// Privacy-friendly visit counting for the portfolio.
//
// No cookies and no stored IP address. Each page view is sent to a small database
// function that keeps a daily salted hash of the visitor (so one person counts once a
// day) plus the page, the country and the kind of device. The salt is random and is
// deleted after two days, so a hash can never be traced back to an address.
//
// The key below is Supabase's public (publishable) key. It can only call the two
// functions the site needs, and the raw tables are not reachable with it.
const ENDPOINT = 'https://yyqyejpzgqsldfxaxlbv.supabase.co/rest/v1/rpc';
const KEY = 'sb_publishable_ZIH7_DwOMCX9-WjPsIqQqA_zQm77ayh';

// Only the real site is counted, never localhost or preview builds.
const HOSTS = ['kabiroscope.site', 'www.kabiroscope.site', 'kabir192003.github.io'];

export const IGNORE_KEY = 'kabiroscope:ignore';
const KEY_STORE = 'kabiroscope:stats-key';
const DEBUG_KEY = 'analytics:debug'; // set to "1" in localStorage to count from localhost
const ENTRY_KEY = 'kabiroscope:entry';

const safe = (fn, fallback = null) => {
    try {
        return fn();
    } catch {
        return fallback;
    }
};

const rpc = (fn, body, options = {}) =>
    fetch(`${ENDPOINT}/${fn}`, {
        method: 'POST',
        headers: { apikey: KEY, 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        ...options,
    });

export const isIgnored = () => safe(() => localStorage.getItem(IGNORE_KEY) === '1', false);
export const setIgnored = (on) => safe(() => (on ? localStorage.setItem(IGNORE_KEY, '1') : localStorage.removeItem(IGNORE_KEY)));

export const getStatsKey = () => safe(() => localStorage.getItem(KEY_STORE), '') || '';
export const setStatsKey = (key) => safe(() => (key ? localStorage.setItem(KEY_STORE, key) : localStorage.removeItem(KEY_STORE)));

let enteredThisPage = false;
let lastSent = { path: '', at: 0 };

/** Where this visit came from. Sent once per browser tab session, on the first page view. */
function entrySource() {
    const seen = safe(() => sessionStorage.getItem(ENTRY_KEY) === '1', enteredThisPage);
    if (seen || enteredThisPage) return null;
    enteredThisPage = true;
    safe(() => sessionStorage.setItem(ENTRY_KEY, '1'));

    // A tagged link, e.g. kabiroscope.site/?ref=resume, shows up as "ref:resume".
    const params = new URLSearchParams(window.location.search);
    const tag = (params.get('ref') || params.get('utm_source') || '').toLowerCase().replace(/[^a-z0-9_-]/g, '').slice(0, 40);
    if (tag) return `ref:${tag}`;

    const host = safe(() => new URL(document.referrer).hostname.replace(/^www\./, '').toLowerCase(), '');
    if (!host || HOSTS.includes(host) || HOSTS.includes(`www.${host}`)) return 'direct';
    return host;
}

/** Counts one page view. Safe to call on every route change; it never throws. */
export function trackPageview(path) {
    if (typeof window === 'undefined') return;
    const debug = safe(() => localStorage.getItem(DEBUG_KEY) === '1', false);
    if (!debug && !HOSTS.includes(window.location.hostname)) return;
    if (isIgnored()) return;
    if (!path || path.startsWith('/stats')) return;

    // React can fire an effect twice in a row (development, fast remounts). The first call
    // carries the visit's source, so drop the repeat instead of racing it.
    const now = Date.now();
    if (path === lastSent.path && now - lastSent.at < 2000) return;
    lastSent = { path, at: now };

    const body = { p_path: path };
    const source = entrySource();
    if (source) body.p_source = source;
    rpc('track_visit', body, { keepalive: true }).catch(() => {});
}

/** The numbers behind the private stats page. Resolves to { ok: false } for a wrong key. */
export async function fetchStats(key, days = 30) {
    const res = await rpc('site_stats', { p_key: key, p_days: days });
    if (!res.ok) throw new Error(`Stats request failed (${res.status})`);
    return res.json();
}
