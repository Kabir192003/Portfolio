import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const INK = '#141414';
const RULE = '#2e2bef';
const MUTED = '#3a3833';

const GALLERY = [
    { src: './project4/img_6084.jpg', alt: 'A lit timber house at dusk' },
    { src: './project4/img_5879.jpg', alt: 'Detail shot, glossy reflection' },
    { src: './swiss.jpg', alt: 'Swiss alpine mountain panorama' },
    { src: './project4/img_6146.jpg', alt: 'Urban architecture against the sky' },
    { src: './project4/img_5461.jpg', alt: 'Black-and-white perspective shot' },
    { src: './project4/img_5590.jpg', alt: 'A stone-walled canal lined with trees' },
    { src: './project4/img_5597.jpg', alt: 'Street scene with layered architecture' },
    { src: './project4/img_e5820.jpg', alt: 'Travel frame with cinematic light' },
    { src: './project4/img_e5901.jpg', alt: 'Architectural lines, contrast and shadow' },
    { src: './project4/img_5730.jpg', alt: 'A cobbled courtyard' },
    { src: './project4/img_5449.jpg', alt: 'Tower geometry from a low angle' },
    { src: './project4/img_e6093.jpg', alt: 'A red funicular tram on its track' },
];

const QUOTES = [
    'Photography is the pause button of life.',
    'A picture is a poem without words.',
    'Light, shadow, and silence tell stories better than noise.',
];

const Project4 = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '3.5rem clamp(1.25rem,3vw,2rem) 2rem' }}>
                <Link to="/about" style={{ display: 'inline-block', marginBottom: '1.5rem', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: MUTED, textDecoration: 'none' }}>← Back to about</Link>
                <span style={{ display: 'block', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: RULE }}>Design foundation</span>
                <h1 style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(2.4rem, 6vw, 4.2rem)', textTransform: 'uppercase', lineHeight: 1.02, margin: '0.8rem 0 1.25rem' }}>
                    Lens &amp; Light
                </h1>
                <p style={{ fontSize: '1.1rem', color: MUTED, maxWidth: '640px', lineHeight: 1.7 }}>
                    Nothing formal, a running collection of whatever the road, the cars or the trip in front of me looked like that day. The same eye for composition ends up in how I lay out an interface.
                </p>
            </div>

            <div style={{ borderTop: `1px solid ${INK}` }} />

            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '3.5rem clamp(1.25rem,3vw,2rem)' }}>
                <p style={{ fontSize: '1.08rem', lineHeight: 1.8, marginBottom: '1.1rem' }}>
                    Long before I started designing digital interfaces, I was training my eye through a camera lens. A compelling composition is about what you leave out as much as what you include, negative space, focal points, visual hierarchy are not abstract concepts to me, they're instincts built up over years of just looking.
                </p>
                <p style={{ fontSize: '1.08rem', lineHeight: 1.8 }}>
                    That discipline shows up directly in how I design an interface. I treat a screen the same way I treat a viewfinder: establishing hierarchy, protecting whitespace, and guiding the eye exactly where it needs to go.
                </p>
            </div>

            <div style={{ borderTop: `1px solid ${INK}`, borderBottom: `1px solid ${INK}`, maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
                {QUOTES.map((q, i) => (
                    <div key={q} style={{ padding: '1.75rem', borderLeft: i > 0 ? `1px solid ${INK}` : 'none' }} className="photo-quote-cell">
                        <span style={{ fontFamily: "'Caveat', cursive", fontSize: '1.5rem', color: INK, lineHeight: 1.3 }}>&ldquo;{q}&rdquo;</span>
                    </div>
                ))}
            </div>

            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '3.5rem clamp(1.25rem,3vw,3rem) 5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
                    {GALLERY.map((photo) => (
                        <motion.div
                            key={photo.src}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.5 }}
                            style={{ backgroundImage: 'radial-gradient(circle, rgba(20,20,20,0.14) 1px, transparent 1.6px)', backgroundSize: '7px 7px', padding: '0.75rem' }}
                        >
                            <img
                                src={photo.src}
                                alt={photo.alt}
                                loading="lazy"
                                style={{ width: '100%', display: 'block', border: `1px solid ${INK}`, aspectRatio: '4/5', objectFit: 'cover' }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 640px) {
                    .photo-quote-cell {
                        border-left: none !important;
                        border-top: 1px solid ${INK};
                    }
                }
            `}</style>
        </motion.div>
    );
};

export default Project4;
