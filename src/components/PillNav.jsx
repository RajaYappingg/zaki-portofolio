import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
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

    // State: 'idle' = active tab; 'hover' = hovered tab.
    const [navState, setNavState] = useState({ type: 'idle', hoveredIndex: null });

    const navRef = useRef(null);
    const logoRef = useRef(null);
    const logoImgRef = useRef(null);
    const navItemsRef = useRef(null);

    const logoRotationRef = useRef(0);

    const handleLogoEnter = () => {
        logoRotationRef.current += 360;
        if (logoImgRef.current) {
            gsap.to(logoImgRef.current, {
                rotate: logoRotationRef.current,
                duration: 0.75,
                ease: 'back.out(1.4)',
                overwrite: 'auto'
            });
        }
    };

    // Helper: Normalize
    const normalizePath = (path) => path?.replace(/\/+$/, '') || '/';

    const getActiveIndex = () => {
        const currentPath = normalizePath(activeHref);
        return items.findIndex(item => normalizePath(item.href) === currentPath);
    };

    // Event Handlers
    const handleNavEnter = () => setNavState(prev => ({ ...prev, type: 'hover' }));
    const handleNavLeave = () => setNavState({ type: 'idle', hoveredIndex: null });
    const handleItemEnter = (i) => setNavState({ type: 'hover', hoveredIndex: i });
    const handleItemLeave = () => setNavState(prev => ({ ...prev, hoveredIndex: null }));

    // Initial Load Animation
    useLayoutEffect(() => {
        if (initialLoadAnimation) {
            const ctx = gsap.context(() => {
                if (logoRef.current) gsap.from(logoRef.current, { scale: 0, duration: 0.6, ease });
                if (navItemsRef.current) gsap.from(navItemsRef.current, { opacity: 0, scale: 0.95, duration: 0.6, ease });
            }, navRef);
            return () => ctx.revert();
        }
    }, [initialLoadAnimation]);

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

    return (
        <div className="pill-nav-container" ref={navRef}>
            <nav
                className={`pill-nav ${className}`}
                style={cssVars}
                onMouseEnter={handleNavEnter}
                onMouseLeave={handleNavLeave}
            >
                {logo && (
                    <Link
                        className="pill-logo"
                        to="/"
                        ref={logoRef}
                        onMouseEnter={handleLogoEnter}
                    >
                        <img src={logo} alt={logoAlt} ref={logoImgRef} />
                    </Link>
                )}
                <div className="pill-nav-items desktop-only" ref={navItemsRef}>
                    <ul className="pill-list">
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
                    </ul>
                </div>
                <button className="mobile-menu-button mobile-only" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <span className="hamburger-line" />
                    <span className="hamburger-line" />
                </button>
            </nav>

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
};
export default PillNav;
