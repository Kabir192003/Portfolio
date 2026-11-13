import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';

const BASE_TITLE = 'Kabir Sharma · Product Design Engineer';
const PAGE_TITLES = {
    '/projects': 'Work',
    '/projects/settld': 'Settld case study',
    '/projects/6': 'StyleBook AI case study',
    '/projects/pawfect': 'PawFect case study',
    '/projects/2': 'Work Hive case study',
    '/projects/1': 'Trek Mate case study',
    '/projects/3': 'The Hunger Games case study',
    '/projects/5': 'This or That case study',
    '/projects/data-viz': 'Global Health & Wealth',
    '/msc': 'Studio work',
    '/photography': 'Photography',
    '/about': 'About',
    '/experience': 'Experience',
    '/education': 'Education',
    '/research': 'Research',
    '/contact': 'Contact',
};

const Layout = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        const page = PAGE_TITLES[pathname];
        document.title = page ? `${page} · Kabir Sharma` : BASE_TITLE;
    }, [pathname]);

    return (
        <>
            <CustomCursor />
            <div className="content-wrapper">
                <Navbar />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
