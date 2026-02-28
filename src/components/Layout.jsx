import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import GeometricBackground from './GeometricBackground';

const Layout = () => {
    const { pathname } = useLocation();
    const isHome = pathname === '/';

    return (
        <>
            <CustomCursor />
            {!isHome && <GeometricBackground />}

            {/* Main content wrapper */}
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
