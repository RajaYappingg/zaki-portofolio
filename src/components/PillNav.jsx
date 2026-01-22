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
    onMobileMenuClick,
    initialLoadAnimation = true,
    hideActiveOnIdle = false
}) => {
    const resolvedPillTextColor = pillTextColor ?? baseColor;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // State: 'idle' = active tab; 'hover' = hovered tab.
    const [navState, setNavState] = useState({ type: 'idle', hoveredIndex: null });

    const navRef = useRef(null);
    const circleRefs = useRef([]);
    const labelRefs = useRef([]);
    const hoverLabelRefs = useRef([]);
    const logoRef = useRef(null);
    const logoImgRef = useRef(null);
    const navItemsRef = useRef(null);

    // Track previous target to prevent redundant animations (double-trigger fix)
    const prevTargetRef = useRef(-1);

    // Helper: Normalize
    const normalizePath = (path) => path?.replace(/\/+$/, '') || '/';

    const getActiveIndex = () => {
        const currentPath = normalizePath(activeHref);
        return items.findIndex(item => normalizePath(item.href) === currentPath);
    };

    // Layout & Geometry
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            circleRefs.current.forEach((circle, i) => {
                if (!circle) return;
                const pill = circle.parentElement;
                if (!pill) return;

                const rect = pill.getBoundingClientRect();
                const { width: w, height: h } = rect;

                // Calculate Circle Geometry
                const R = ((w * w) / 4 + h * h) / (2 * h);
                const D = Math.ceil(2 * R) + 2;
                const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
                const originY = D - delta;

                // Set initial geometric styles directly
                gsap.set(circle, {
                    width: D,
                    height: D,
                    bottom: -delta,
                    xPercent: -50,
                    transformOrigin: `50% ${originY}px`,
                    scale: 0
                });

                if (labelRefs.current[i]) {
                    gsap.set(labelRefs.current[i], { y: 0 });
                }
                if (hoverLabelRefs.current[i]) {
                    gsap.set(hoverLabelRefs.current[i], { y: h + 12, opacity: 0 });
                }
            });
        }, navRef);

        return () => ctx.revert();
    }, [items]);

    // Centralized Animation Logic (State-Based)
    useEffect(() => {
        const ctx = gsap.context(() => {
            let targetIndex = -1;

            if (navState.type === 'hover') {
                targetIndex = navState.hoveredIndex !== null ? navState.hoveredIndex : -1;
            } else {
                targetIndex = hideActiveOnIdle ? -1 : getActiveIndex();
            }

            // Optimization: Skip if target hasn't changed.
            // This prevents the "double animation" glitch when clicking (active state matches hover state).
            if (targetIndex === prevTargetRef.current) return;
            prevTargetRef.current = targetIndex;

            items.forEach((_, i) => {
                const isActive = (i === targetIndex);

                const circle = circleRefs.current[i];
                const label = labelRefs.current[i];
                const hoverLabel = hoverLabelRefs.current[i];

                if (!circle) return;

                const h = circle.parentElement?.offsetHeight || 40;

                if (isActive) {
                    // Expand
                    gsap.to(circle, {
                        scale: 2.5,
                        duration: 0.5,
                        ease,
                        overwrite: 'auto'
                    });

                    if (label) {
                        gsap.to(label, {
                            y: -(h + 8),
                            duration: 0.5,
                            ease,
                            overwrite: 'auto'
                        });
                    }

                    if (hoverLabel) {
                        gsap.to(hoverLabel, {
                            y: 0,
                            opacity: 1,
                            duration: 0.5,
                            ease,
                            overwrite: 'auto'
                        });
                    }
                } else {
                    // Collapse
                    gsap.to(circle, {
                        scale: 0,
                        duration: 0.4,
                        ease,
                        overwrite: 'auto'
                    });

                    if (label) {
                        gsap.to(label, {
                            y: 0,
                            duration: 0.4,
                            ease,
                            overwrite: 'auto'
                        });
                    }

                    if (hoverLabel) {
                        gsap.to(hoverLabel, {
                            y: h + 12,
                            opacity: 0,
                            duration: 0.4,
                            ease,
                            overwrite: 'auto'
                        });
                    }
                }
            });
        }, navRef);

        return () => ctx.revert();
    }, [navState, activeHref, items, ease, hideActiveOnIdle]);

    // Event Handlers
    const handleNavEnter = () => setNavState(prev => ({ ...prev, type: 'hover' }));
    const handleNavLeave = () => setNavState({ type: 'idle', hoveredIndex: null });
    const handleItemEnter = (i) => setNavState({ type: 'hover', hoveredIndex: i });
    const handleItemLeave = () => setNavState(prev => ({ ...prev, hoveredIndex: null }));

    const handleLogoEnter = () => {
        if (logoImgRef.current) {
            gsap.to(logoImgRef.current, { rotate: 360, duration: 0.4, ease, overwrite: true });
        }
    };

    // Initial Load Animation
    useLayoutEffect(() => {
        if (initialLoadAnimation) {
            const ctx = gsap.context(() => {
                if (logoRef.current) gsap.from(logoRef.current, { scale: 0, duration: 0.6, ease });
                if (navItemsRef.current) gsap.from(navItemsRef.current, { width: 0, duration: 0.6, ease });
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

    return (
        <div className="pill-nav-container" ref={navRef}>
            <nav
                className={`pill-nav ${className}`}
                style={cssVars}
                onMouseEnter={handleNavEnter}
                onMouseLeave={handleNavLeave}
            >
                {logo && (
                    <Link className="pill-logo" to="/" onMouseEnter={handleLogoEnter} ref={logoRef}>
                        <img src={logo} alt={logoAlt} ref={logoImgRef} />
                    </Link>
                )}
                <div className="pill-nav-items desktop-only" ref={navItemsRef}>
                    <ul className="pill-list">
                        {items.map((item, i) => (
                            <li key={i}>
                                <Link
                                    to={item.href}
                                    className="pill"
                                    onMouseEnter={() => handleItemEnter(i)}
                                    onMouseLeave={handleItemLeave}
                                >
                                    <span className="hover-circle" ref={el => circleRefs.current[i] = el} />
                                    <span className="label-stack">
                                        <span className="pill-label" ref={el => labelRefs.current[i] = el}>{item.label}</span>
                                        <span className="pill-label-hover" ref={el => hoverLabelRefs.current[i] = el}>{item.label}</span>
                                    </span>
                                </Link>
                            </li>
                        ))}
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
