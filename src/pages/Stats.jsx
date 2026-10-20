import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { fetchStats, getStatsKey, isIgnored, setIgnored, setStatsKey } from '../lib/analytics';

// A private page for the site owner: visitors per day, the pages people read, where they
// came from. It lives at /#/stats, is not linked anywhere, and needs a key to show numbers.
const INK = '#141414';
const PAPER = '#f2f0ea';
const RULE = '#2e2bef';
const MUTED = '#3a3833';
const MONO = "'JetBrains Mono', monospace";
const ANTON = "'Anton', sans-serif";

const PAGE_NAMES = {
    '/': 'Home',
    '/projects': 'Work index',
    '/projects/1': 'Trek Mate',
    '/projects/2': 'Work Hive',
    '/projects/3': 'The Hunger Games',
    '/projects/5': 'This or That',
    '/projects/6': 'StyleBook AI',
    '/projects/pawfect': 'PawFect',
    '/projects/data-viz': 'Global Health & Wealth',
    '/msc': 'Studio',
    '/photography': 'Photography',
    '/about': 'About',
    '/experience': 'Experience',
    '/education': 'Education',
    '/research': 'Research',
    '/contact': 'Contact',
};

const pageName = (path) => {
    if (PAGE_NAMES[path]) return PAGE_NAMES[path];
    if (path.startsWith('/msc/')) return `Studio: ${path.slice(5).replace(/-/g, ' ')}`;
    return path;
};

const sourceName = (s) => {
    if (s === 'direct') return 'Direct or unknown';
    if (s.startsWith('ref:')) return `Tagged link: ${s.slice(4)}`;
    return s;
};

const regionNames = typeof Intl !== 'undefined' && Intl.DisplayNames ? new Intl.DisplayNames(['en'], { type: 'region' }) : null;
const countryName = (code) => {
    if (code === '??') return 'Unknown';
    try {
        return regionNames?.of(code) || code;
    } catch {
        return code;
    }
};
const flag = (code) => (code && code !== '??' ? String.fromCodePoint(...[...code].map((c) => 127397 + c.charCodeAt(0))) : '');

const parseDay = (d) => new Date(`${d}T12:00:00`);
const shortDay = (d) => parseDay(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
const longDay = (d) => parseDay(d).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' });
const n = (v) => Number(v || 0).toLocaleString('en-GB');

const label = { fontFamily: MONO, fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: MUTED };

const Stats = () => {
    const [key, setKey] = useState(getStatsKey);
    const [draft, setDraft] = useState('');
    const [days, setDays] = useState(30);
    const [data, setData] = useState(null);
    const [status, setStatus] = useState(key ? 'loading' : 'locked'); // locked | loading | ready | wrong | error
    const [ignoreMe, setIgnoreMe] = useState(isIgnored);

    const load = useCallback(
        async (k, d) => {
            setStatus('loading');
            try {
                const res = await fetchStats(k, d);
                if (!res.ok) {
                    setStatsKey('');
                    setKey('');
                    setStatus('wrong');
                    return;
                }
                setData(res);
                setStatus('ready');
            } catch {
                setStatus('error');
            }
        },
        [],
    );

    useEffect(() => {
        if (key) load(key, days);
    }, [key, days, load]);

    const submit = (e) => {
        e.preventDefault();
        const k = draft.trim();
        if (!k) return;
        setStatsKey(k);
        setKey(k);
        setDraft('');
    };

    const daily = data?.daily || [];
    const last = daily[daily.length - 1];
    const prev = daily[daily.length - 2];
    const sum = (arr) => arr.reduce((t, d) => t + d.visitors, 0);
    const week = useMemo(() => sum(daily.slice(-7)), [daily]);
    const best = useMemo(() => daily.reduce((b, d) => (d.visitors > (b?.visitors ?? -1) ? d : b), null), [daily]);
    const max = Math.max(1, ...daily.map((d) => d.visitors));

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} style={{ background: PAPER, color: INK, fontFamily: "'Source Serif 4', serif" }}>
            <div style={{ borderTop: `4px solid ${INK}` }} />
            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2.5rem clamp(1.25rem, 3vw, 2rem) 4rem' }}>
                <span style={{ ...label, color: RULE, letterSpacing: '0.16em' }}>Private · site analytics</span>
                <h1 style={{ fontFamily: ANTON, fontSize: 'clamp(2.6rem, 7vw, 5rem)', textTransform: 'uppercase', lineHeight: 0.98, margin: '0.8rem 0 1.1rem' }}>Visitors</h1>

                {(status === 'locked' || status === 'wrong') && (
                    <form onSubmit={submit} style={{ maxWidth: 460, borderLeft: `4px solid ${RULE}`, paddingLeft: '1.25rem' }}>
                        <p style={{ fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1rem' }}>This page is for the site owner. Enter the stats key to see the numbers.</p>
                        <label style={label} htmlFor="stats-key">
                            Stats key
                        </label>
                        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.4rem', flexWrap: 'wrap' }}>
                            <input
                                id="stats-key"
                                type="password"
                                autoComplete="off"
                                value={draft}
                                onChange={(e) => setDraft(e.target.value)}
                                style={{ flex: 1, minWidth: 200, border: `1px solid ${INK}`, background: 'transparent', padding: '0.8rem 1rem', fontFamily: MONO, fontSize: '0.9rem', color: INK }}
                            />
                            <button type="submit" style={{ background: RULE, color: PAPER, border: 0, fontFamily: MONO, fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.04em', padding: '0.85rem 1.5rem', cursor: 'pointer' }}>
                                Open
                            </button>
                        </div>
                        {status === 'wrong' && <p style={{ fontFamily: MONO, fontSize: '0.78rem', color: '#b3261e', marginTop: '0.75rem' }}>That key didn't match. Try again.</p>}
                    </form>
                )}

                {status === 'error' && (
                    <p style={{ fontFamily: MONO, fontSize: '0.85rem', marginTop: '1rem' }}>
                        Couldn't reach the stats service.{' '}
                        <button onClick={() => load(key, days)} style={{ background: 'none', border: 0, color: RULE, textDecoration: 'underline', cursor: 'pointer', font: 'inherit' }}>
                            Try again
                        </button>
                    </p>
                )}

                {key && status === 'loading' && !data && <p style={{ fontFamily: MONO, fontSize: '0.85rem', marginTop: '1rem' }}>Loading…</p>}

                {key && data && (status === 'ready' || status === 'loading') && (
                    <div style={{ opacity: status === 'loading' ? 0.55 : 1, transition: 'opacity 0.2s' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
                            <p style={{ ...label, maxWidth: 560, lineHeight: 1.7 }}>
                                {data.since ? `Counting since ${longDay(data.since)}` : 'No visits recorded yet'} · each day runs midnight to midnight, {String(data.tz || '').replace('_', ' ')}
                            </p>
                            <div role="tablist" aria-label="Date range" style={{ display: 'flex', border: `1px solid ${INK}` }}>
                                {[7, 30, 90].map((d, i) => (
                                    <button
                                        key={d}
                                        role="tab"
                                        aria-selected={days === d}
                                        onClick={() => setDays(d)}
                                        style={{ background: days === d ? INK : 'transparent', color: days === d ? PAPER : INK, border: 0, borderLeft: i ? `1px solid ${INK}` : 0, fontFamily: MONO, fontSize: '0.78rem', fontWeight: 700, padding: '0.55rem 1rem', cursor: 'pointer' }}
                                    >
                                        {d} days
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="stats-kpis" style={{ borderTop: `1px solid ${INK}`, borderBottom: `1px solid ${INK}`, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
                            {[
                                { value: n(last?.visitors), caption: 'Visitors today', note: last ? `${n(last.views)} page views` : '' },
                                { value: n(prev?.visitors), caption: 'Yesterday', note: prev ? `${n(prev.views)} page views` : '' },
                                { value: n(week), caption: 'Last 7 days', note: 'daily visitors added up' },
                                { value: n(data.totals?.views), caption: `Page views, ${days} days`, note: best?.visitors ? `best day ${shortDay(best.day)}: ${best.visitors}` : '' },
                            ].map((k, i) => (
                                <div key={k.caption} style={{ padding: '1.6rem clamp(0.9rem, 2vw, 1.6rem)', borderRight: i < 3 ? `1px solid ${INK}` : 'none' }}>
                                    <span style={{ fontFamily: ANTON, fontSize: 'clamp(2rem, 4vw, 3.2rem)', display: 'block', lineHeight: 1 }}>{k.value}</span>
                                    <span style={label}>{k.caption}</span>
                                    {k.note && <span style={{ ...label, display: 'block', marginTop: '0.35rem', textTransform: 'none', letterSpacing: 0, color: '#6b675d' }}>{k.note}</span>}
                                </div>
                            ))}
                        </div>

                        <section style={{ marginTop: '3rem' }}>
                            <h2 style={{ fontFamily: ANTON, fontSize: '1.5rem', textTransform: 'uppercase', marginBottom: '1rem' }}>Visitors per day</h2>
                            <Chart daily={daily} max={max} />
                            <p style={{ ...label, textTransform: 'none', letterSpacing: 0, marginTop: '0.9rem', maxWidth: 720, lineHeight: 1.7 }}>
                                A visitor counts once per day. Someone who comes back tomorrow counts again, because the site deliberately doesn't recognise people across days.
                            </p>
                        </section>

                        <div className="stats-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '3rem 3rem', marginTop: '3rem' }}>
                            <Table title="Pages people read" empty="No page views yet." head={['Page', 'Views', 'Visitors']} rows={(data.pages || []).map((p) => [pageName(p.path), n(p.views), n(p.visitors)])} />
                            <Table title="Where visitors came from" empty="Sources appear once people arrive." head={['Source', 'Visits']} rows={(data.sources || []).map((s) => [sourceName(s.source), n(s.visits)])} />
                            <Table title="Countries" empty="No visitors yet." head={['Country', 'Visitors']} rows={(data.countries || []).map((c) => [`${flag(c.country)} ${countryName(c.country)}`.trim(), n(c.visitors)])} />
                            <Devices devices={data.devices || []} />
                        </div>

                        <section style={{ marginTop: '3.5rem', borderTop: `1px solid ${INK}`, paddingTop: '1.75rem', display: 'grid', gap: '1.25rem', maxWidth: 720 }}>
                            <label style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start', cursor: 'pointer' }}>
                                <input
                                    type="checkbox"
                                    checked={ignoreMe}
                                    onChange={(e) => {
                                        setIgnored(e.target.checked);
                                        setIgnoreMe(e.target.checked);
                                    }}
                                    style={{ marginTop: '0.3rem', accentColor: RULE }}
                                />
                                <span style={{ fontSize: '1rem', lineHeight: 1.55 }}>
                                    <b>Don't count my own visits on this browser.</b> Switch this on in each browser you browse your site from, so your own clicks don't inflate the numbers.
                                </span>
                            </label>
                            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                                <button onClick={() => load(key, days)} style={linkButton}>
                                    Refresh
                                </button>
                                <button
                                    onClick={() => {
                                        setStatsKey('');
                                        setKey('');
                                        setData(null);
                                        setStatus('locked');
                                    }}
                                    style={linkButton}
                                >
                                    Forget the key on this browser
                                </button>
                            </div>
                        </section>
                    </div>
                )}
            </div>
            <div style={{ borderTop: `4px solid ${INK}` }} />
            <style>{`
                @media (max-width: 760px) {
                    .stats-kpis { grid-template-columns: repeat(2, 1fr) !important; }
                    .stats-kpis > div:nth-child(2) { border-right: none !important; }
                    .stats-kpis > div:nth-child(-n+2) { border-bottom: 1px solid ${INK}; }
                    .stats-cols { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </motion.div>
    );
};

const linkButton = { background: 'none', border: 0, padding: 0, color: RULE, fontFamily: MONO, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.06em', textDecoration: 'underline', cursor: 'pointer' };

function Chart({ daily, max }) {
    // Measure the real width so labels stay a readable size on a phone, rather than
    // shrinking along with a fixed-size picture.
    const box = useRef(null);
    const [W, setW] = useState(1000);
    useEffect(() => {
        const el = box.current;
        if (!el) return undefined;
        const update = () => setW(Math.max(280, Math.round(el.clientWidth)));
        update();
        const ro = new ResizeObserver(update);
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    const H = 260;
    const pad = { l: 30, r: 6, t: 22, b: 34 };
    const iw = W - pad.l - pad.r;
    const ih = H - pad.t - pad.b;
    const count = daily.length || 1;
    const slot = iw / count;
    const bar = Math.max(2, Math.min(34, slot * 0.68));
    const top = niceMax(max);
    const ticks = [0, Math.round(top / 2), top].filter((v, i, a) => a.indexOf(v) === i);
    const every = Math.max(1, Math.ceil(70 / slot)); // keep date labels about 70px apart
    const showValues = slot >= 20;
    const empty = daily.every((d) => d.visitors === 0);

    return (
        <div ref={box} style={{ border: `1px solid ${INK}`, padding: '1.25rem 0 0.5rem', background: 'rgba(255,255,255,0.25)' }}>
            <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Bar chart of visitors per day" style={{ display: 'block' }}>
                {ticks.map((t) => {
                    const y = pad.t + ih - (t / top) * ih;
                    return (
                        <g key={t}>
                            <line x1={pad.l} x2={W - pad.r} y1={y} y2={y} stroke={INK} strokeOpacity={t === 0 ? 0.9 : 0.15} strokeDasharray={t === 0 ? '0' : '3 5'} />
                            <text x={pad.l - 6} y={y + 4} textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="11" fill={MUTED}>
                                {t}
                            </text>
                        </g>
                    );
                })}
                {daily.map((d, i) => {
                    const h = (d.visitors / top) * ih;
                    const x = pad.l + i * slot + (slot - bar) / 2;
                    const isToday = i === daily.length - 1;
                    return (
                        <g key={d.day}>
                            <title>{`${longDay(d.day)}: ${d.visitors} visitor${d.visitors === 1 ? '' : 's'}, ${d.views} page view${d.views === 1 ? '' : 's'}`}</title>
                            <rect x={x} y={pad.t + ih - Math.max(h, d.visitors ? 2 : 0)} width={bar} height={Math.max(h, d.visitors ? 2 : 0)} fill={isToday ? INK : RULE} />
                            {d.visitors > 0 && showValues && (
                                <text x={x + bar / 2} y={pad.t + ih - h - 6} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="11" fontWeight="700" fill={INK}>
                                    {d.visitors}
                                </text>
                            )}
                            {(daily.length - 1 - i) % every === 0 && (
                                <text x={Math.min(Math.max(x + bar / 2, pad.l + 18), W - 22)} y={H - 10} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="11" fill={MUTED}>
                                    {shortDay(d.day)}
                                </text>
                            )}
                        </g>
                    );
                })}
            </svg>
            {empty && <p style={{ ...label, textAlign: 'center', padding: '0.5rem 0 1rem' }}>No visits in this range yet.</p>}
        </div>
    );
}

const niceMax = (v) => {
    if (v <= 4) return 4;
    const step = v <= 20 ? 5 : v <= 100 ? 10 : v <= 500 ? 50 : 100;
    return Math.ceil(v / step) * step;
};

function Table({ title, head, rows, empty }) {
    return (
        <section>
            <h2 style={{ fontFamily: ANTON, fontSize: '1.5rem', textTransform: 'uppercase', marginBottom: '0.6rem' }}>{title}</h2>
            {rows.length === 0 ? (
                <p style={{ ...label, textTransform: 'none', letterSpacing: 0, padding: '1rem 0', borderTop: `1px solid ${INK}` }}>{empty}</p>
            ) : (
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            {head.map((h, i) => (
                                <th key={h} style={{ ...label, textAlign: i ? 'right' : 'left', padding: '0.5rem 0', borderBottom: `1px solid ${INK}`, fontWeight: 400 }}>
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((r) => (
                            <tr key={r[0]}>
                                {r.map((c, i) => (
                                    <td key={i} style={{ padding: '0.65rem 0', borderBottom: '1px solid rgba(20,20,20,0.18)', textAlign: i ? 'right' : 'left', fontFamily: i ? MONO : 'inherit', fontSize: i ? '0.88rem' : '1rem', fontWeight: i ? 700 : 400, paddingRight: i === 0 ? '1rem' : 0 }}>
                                        {c}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </section>
    );
}

function Devices({ devices }) {
    const total = devices.reduce((t, d) => t + d.visitors, 0);
    return (
        <section>
            <h2 style={{ fontFamily: ANTON, fontSize: '1.5rem', textTransform: 'uppercase', marginBottom: '0.6rem' }}>Phone or laptop</h2>
            {total === 0 ? (
                <p style={{ ...label, textTransform: 'none', letterSpacing: 0, padding: '1rem 0', borderTop: `1px solid ${INK}` }}>No visitors yet.</p>
            ) : (
                <div style={{ borderTop: `1px solid ${INK}`, paddingTop: '1rem', display: 'grid', gap: '1rem' }}>
                    {devices.map((d) => {
                        const pct = Math.round((d.visitors / total) * 100);
                        return (
                            <div key={d.device}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                                    <span style={{ fontSize: '1rem' }}>{d.device === 'mobile' ? 'Phone' : 'Laptop or desktop'}</span>
                                    <span style={{ fontFamily: MONO, fontSize: '0.88rem', fontWeight: 700 }}>
                                        {pct}% · {n(d.visitors)}
                                    </span>
                                </div>
                                <div style={{ height: 10, border: `1px solid ${INK}` }}>
                                    <div style={{ height: '100%', width: `${pct}%`, background: RULE }} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </section>
    );
}

export default Stats;
