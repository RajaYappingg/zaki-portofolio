import React from 'react';
import { useLocation } from 'react-router-dom';
import PillNav from './PillNav';
import { NAV_ITEMS } from '../constants';
import logo from '../assets/react.svg'; // Using React logo as placeholder

const Navbar = () => {
    const location = useLocation();

    return (
        <PillNav
            items={NAV_ITEMS}
            logo={logo}
            logoAlt="Zaki.dev Logo"
            activeHref={location.pathname}
            baseColor="#fff" // The circle color
            pillColor="#000000" // The pill background
            pillTextColor="#a5b4fc" // Indigo-300ish for text
            hoveredPillTextColor="#000" // Text color when hovered (inside white circle)
        />
    );
};

export default Navbar;
