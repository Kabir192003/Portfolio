import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer} className="site-footer">
            <div className="container site-footer-inner" style={styles.container}>
                <p style={styles.text} className="site-footer-text">© {new Date().getFullYear()} kabiroscope. All rights reserved.</p>
                <div style={styles.links} className="site-footer-links">
                    <a href="#" style={styles.link}>LinkedIn</a>
                    <a href="#" style={styles.link}>Twitter</a>
                    <a href="#" style={styles.link}>Dribbble</a>
                </div>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        padding: '3rem 0',
        borderTop: '1px solid var(--glass-border)',
        marginTop: 'auto',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
    },
    text: {
        color: 'var(--text-secondary)',
        fontSize: '0.875rem',
    },
    links: {
        display: 'flex',
        gap: '1.5rem',
    },
    link: {
        color: 'var(--text-secondary)',
        fontSize: '0.875rem',
        transition: 'color var(--transition-fast)',
    }
};

export default Footer;
