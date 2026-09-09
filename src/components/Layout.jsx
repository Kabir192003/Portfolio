import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';

const Layout = () => {
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
