import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const LINKS = [
    { to: '/projects', label: 'Work' },
    { to: '/about', label: 'About' },
    { to: '/experience', label: 'Experience' },
    { to: '/education', label: 'Education' },
    { to: '/research', label: 'Research' },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    // Close the mobile menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    // Lock body scroll while the mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    return (
        <nav style={styles.nav} className="site-nav">
            <div style={styles.container} className="container site-nav-inner">
                <NavLink to="/" style={styles.logoLink}>
                    <span style={styles.logoText}>KABIROSCOPE</span>
                </NavLink>

                {/* Desktop links */}
                <div style={styles.links} className="site-nav-links-desktop">
                    {LINKS.map((l) => (
                        <NavLink
                            key={l.to}
                            to={l.to}
                            className="site-nav-link"
                            style={({ isActive }) => isActive ? styles.activeLink : styles.link}
                        >
                            {l.label.toUpperCase()}
                        </NavLink>
                    ))}
                    <NavLink to="/contact" className="glass-button btn-primary" style={styles.cta}>
                        Contact
                    </NavLink>
                </div>

                {/* Mobile toggle */}
                <button
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((v) => !v)}
                    style={styles.menuBtn}
                    className="site-nav-toggle"
                >
                    <span style={{ ...styles.menuBar, transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none' }} />
                    <span style={{ ...styles.menuBar, opacity: menuOpen ? 0 : 1 }} />
                    <span style={{ ...styles.menuBar, transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none' }} />
                </button>
            </div>

            {/* Mobile panel */}
            <div
                className="site-nav-mobile-panel"
                style={{
                    ...styles.mobilePanel,
                    maxHeight: menuOpen ? '420px' : '0px',
                    opacity: menuOpen ? 1 : 0,
                }}
            >
                <div className="container" style={styles.mobileLinks}>
                    {LINKS.map((l) => (
                        <NavLink
                            key={l.to}
                            to={l.to}
                            style={({ isActive }) => ({ ...styles.mobileLink, color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)' })}
                        >
                            {l.label.toUpperCase()}
                        </NavLink>
                    ))}
                    <NavLink to="/contact" className="glass-button btn-primary" style={{ ...styles.cta, alignSelf: 'flex-start', marginTop: '0.5rem' }}>
                        Contact
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

const styles = {
    nav: {
        position: 'sticky',
        top: 0,
        width: '100%',
        background: 'var(--bg-color)',
        zIndex: 100,
        borderBottom: '1px solid var(--border-strong)',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.1rem 0',
    },
    logoLink: {
        display: 'inline-flex',
        alignItems: 'center',
        textDecoration: 'none',
    },
    logoText: {
        fontFamily: 'var(--font-logo)',
        fontSize: '1.15rem',
        letterSpacing: '0.02em',
        color: 'var(--text-primary)',
    },
    links: {
        display: 'flex',
        alignItems: 'center',
        gap: '2.25rem',
    },
    link: {
        fontFamily: 'var(--font-mono)',
        fontSize: '0.78rem',
        letterSpacing: '0.08em',
        fontWeight: '500',
        color: 'var(--text-secondary)',
        transition: 'color var(--transition-fast)',
    },
    activeLink: {
        fontFamily: 'var(--font-mono)',
        fontSize: '0.78rem',
        letterSpacing: '0.08em',
        fontWeight: '500',
        color: 'var(--text-primary)',
    },
    cta: {
        padding: '9px 20px',
        fontSize: '0.88rem',
    },
    menuBtn: {
        display: 'none',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5px',
        width: '36px',
        height: '36px',
        background: 'transparent',
        border: '1px solid var(--border-strong)',
        borderRadius: 'var(--radius-sm)',
        cursor: 'pointer',
        flex: 'none',
    },
    menuBar: {
        display: 'block',
        width: '16px',
        height: '1.5px',
        background: 'var(--text-primary)',
        transition: 'transform var(--transition-fast), opacity var(--transition-fast)',
    },
    mobilePanel: {
        overflow: 'hidden',
        transition: 'max-height var(--transition-slow), opacity var(--transition-fast)',
        borderBottom: '1px solid var(--border)',
    },
    mobileLinks: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.1rem',
        padding: '0.5rem 0 1.75rem',
    },
    mobileLink: {
        fontSize: '1rem',
        fontWeight: '500',
    },
};

export default Navbar;
