import React from 'react';
import { useLocation } from 'react-router-dom';
import PillNav from './PillNav';
import { NAV_ITEMS } from '../constants';
import logoImg from '../assets/logo.png';

const Navbar = () => {
    const location = useLocation();

    return (
        <PillNav
            logo={logoImg}
            logoAlt="Zaki Portfolio Logo"
            items={NAV_ITEMS}
            activeHref={location.pathname}
            baseColor="#ffffff" // Expanding hover circle (pure white)
            pillColor="rgba(12, 12, 12, 0.9)" // Black AMOLED background
            pillTextColor="#d4d4d8" // Zinc-300 text
            hoveredPillTextColor="#000000" // Black text when hovered
            hideActiveOnIdle={true}
        />
    );
};

export default Navbar;
