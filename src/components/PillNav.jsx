import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ChevronLeft } from 'lucide-react';
import './PillNav.css';

const PillNav = ({
    logo,
    logoAlt = 'Logo',
    items,
    activeHref,
    className = '',
    ease = 'power3.easeOut',
    baseColor = '#fff',
    pillColor = '#060010',
    hoveredPillTextColor = '#060010',
    pillTextColor,
    initialLoadAnimation = true,
    hideActiveOnIdle = false
}) => {
    const resolvedPillTextColor = pillTextColor ?? baseColor;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    // State: 'idle' = active tab; 'hover' = hovered tab.
    const [navState, setNavState] = useState({ type: 'idle', hoveredIndex: null });

    const navRef = useRef(null);
    const logoRef = useRef(null);
    const logoImgRef = useRef(null);
    const logoRotationRef = useRef(0);

    const spinLogo = () => {
        logoRotationRef.current += 360;
        if (logoImgRef.current) {
            gsap.to(logoImgRef.current, {
                rotate: logoRotationRef.current,
                duration: 1.1,
                ease: 'back.out(1.2)',
                overwrite: 'auto'
            });
        }
    };

    const handleLogoClick = (e) => {
        e.preventDefault();
        spinLogo();
        setIsNavExpanded(prev => !prev);
    };

    const handleLogoEnter = () => {
        if (!isNavExpanded) {
            spinLogo();
            setIsNavExpanded(true);
        }
    };

    const handleCloseClick = (e) => {
        e.stopPropagation();
        spinLogo();
        setIsNavExpanded(false);
    };

    const handleItemEnter = (i) => setNavState({ type: 'hover', hoveredIndex: i });
    const handleItemLeave = () => setNavState(prev => ({ ...prev, hoveredIndex: null }));

    // Helper: Normalize
    const normalizePath = (path) => path?.replace(/\/+$/, '') || '/';

    const getActiveIndex = () => {
        const currentPath = normalizePath(activeHref);
        return items.findIndex(item => normalizePath(item.href) === currentPath);
    };

    const cssVars = {
        ['--base']: baseColor,
        ['--pill-bg']: pillColor,
        ['--hover-text']: hoveredPillTextColor,
        ['--pill-text']: resolvedPillTextColor
    };

    const activeIdx = getActiveIndex();
    const currentHighlightedIdx = navState.type === 'hover' && navState.hoveredIndex !== null 
        ? navState.hoveredIndex 
        : (hideActiveOnIdle ? -1 : activeIdx);

    const navContent = (
        <div className="pill-nav-container" ref={navRef}>
            <motion.nav
                className={`pill-nav ${className} ${isNavExpanded ? 'is-expanded' : 'is-collapsed'}`}
                style={cssVars}
                animate={{
                    paddingRight: isNavExpanded ? '0.8rem' : '0.45rem'
                }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
                {logo && (
                    <a
                        className="pill-logo cursor-pointer"
                        href="/"
                        ref={logoRef}
                        onClick={handleLogoClick}
                        onMouseEnter={handleLogoEnter}
                        title="Toggle Navigation Menu"
                    >
                        <img src={logo} alt={logoAlt} ref={logoImgRef} />
                    </a>
                )}

                <motion.div
                    className="pill-nav-items desktop-only overflow-hidden flex items-center"
                    initial={false}
                    animate={{
                        width: isNavExpanded ? 'auto' : 0,
                        opacity: isNavExpanded ? 1 : 0,
                        x: isNavExpanded ? 0 : -20,
                        scale: isNavExpanded ? 1 : 0.95
                    }}
                    transition={{
                        duration: 0.75,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                >
                    <ul className="pill-list pl-2 items-center">
                        {items.map((item, i) => {
                            const isHighlighted = (currentHighlightedIdx === i);
                            return (
                                <li key={i}>
                                    <Link
                                        to={item.href}
                                        className={`pill ${isHighlighted ? 'is-active' : ''}`}
                                        onMouseEnter={() => handleItemEnter(i)}
                                        onMouseLeave={handleItemLeave}
                                    >
                                        <span className="pill-label">{item.label}</span>
                                    </Link>
                                </li>
                            );
                        })}
                        <li>
                            <button
                                onClick={handleCloseClick}
                                className="ml-1 p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors flex items-center justify-center cursor-pointer"
                                title="Collapse Menu"
                            >
                                <ChevronLeft size={18} />
                            </button>
                        </li>
                    </ul>
                </motion.div>

                <button className="mobile-menu-button mobile-only" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <span className="hamburger-line" />
                    <span className="hamburger-line" />
                </button>
            </motion.nav>

            <div className="mobile-menu-popover mobile-only" style={{ ...cssVars, visibility: isMobileMenuOpen ? 'visible' : 'hidden', opacity: isMobileMenuOpen ? 1 : 0 }}>
                <ul className="mobile-menu-list">
                    {items.map((item, i) => (
                        <li key={i}>
                            <Link
                                to={item.href}
                                className="mobile-menu-link"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

    return navContent;
};

export default PillNav;
