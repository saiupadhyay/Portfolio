import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 text-center text-gray-500 text-sm relative z-10 bg-black/20 backdrop-blur-sm border-t border-white/5">
            <p>&copy; {new Date().getFullYear()} Sai Upadhyay. All rights reserved.</p>
            <p className="mt-2 text-xs">Built with React, Tailwind CSS & Framer Motion</p>
        </footer>
    );
};

export default Footer;
