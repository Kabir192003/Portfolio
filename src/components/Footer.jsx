import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={styles.footer} className="site-footer">
            <div className="container site-footer-inner" style={styles.container}>
                <div style={styles.left}>
                    <p style={styles.wordmark}>kabiroscope</p>
                    <p style={styles.text}>Product & interaction design, looked at closely.</p>
                </div>
                <div style={styles.links} className="site-footer-links">
                    <Link to="/contact" style={styles.link}>Contact</Link>
                    <a
                        href="https://www.linkedin.com/in/kabirsharma192003/"
                        style={styles.link}
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>
                    <span style={styles.copyright}>© {new Date().getFullYear()}</span>
                </div>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        padding: '2.5rem 0',
        borderTop: '1px solid var(--border)',
        marginTop: 'auto',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        gap: '1.5rem',
    },
    left: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.35rem',
    },
    wordmark: {
        fontFamily: 'var(--font-logo)',
        fontSize: '1rem',
        fontWeight: 600,
        color: 'var(--text-primary)',
    },
    text: {
        color: 'var(--text-tertiary)',
        fontSize: '0.85rem',
    },
    links: {
        display: 'flex',
        alignItems: 'center',
        gap: '1.75rem',
    },
    link: {
        color: 'var(--text-secondary)',
        fontSize: '0.875rem',
        transition: 'color var(--transition-fast)',
    },
    copyright: {
        color: 'var(--text-tertiary)',
        fontSize: '0.8rem',
        fontFamily: 'var(--font-mono)',
    }
};

export default Footer;
