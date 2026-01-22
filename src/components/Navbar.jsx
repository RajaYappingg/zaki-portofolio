import React from 'react';
import { useLocation } from 'react-router-dom';
import PillNav from './PillNav';
import { NAV_ITEMS } from '../constants';
const Navbar = () => {
    const location = useLocation();

    return (
        <PillNav
            items={NAV_ITEMS}
            activeHref={location.pathname}
            baseColor="#fff" // The circle color
            pillColor="rgba(10, 10, 10, 0.6)" // The pill background
            pillTextColor="#a5b4fc" // Indigo-300ish for text
            hoveredPillTextColor="#000" // Text color when hovered (inside white circle)
            hideActiveOnIdle={true}
        />
    );
};

export default Navbar;
