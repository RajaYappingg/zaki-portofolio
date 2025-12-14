import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { gsap } from 'gsap';

const projects = [
    {
        title: "Skanida Apps Mobile",
        description: "Mobile application for student online presence using camera and location services. Streamlines attendance tracking with geospatial verification.",
        tags: ["React Native", "Expo", "Geolocation", "Camera API"],
        link: "#",
        github: "https://github.com/RajaYappingg/skanida-apps-mobile",
        featured: true,
        borderColor: '#4F46E5', // Indigo
        gradient: 'linear-gradient(145deg, #1e1b4b, #000)', // Dark Indigo to Black
        image: "/skanida-preview.png"
    },
    {
        title: "Coming Soon",
        description: "Exciting new project currently in development. Stay tuned for updates!",
        tags: ["In Progress"],
        link: "#",
        github: "#",
        featured: false,
        borderColor: '#10B981', // Emerald
        gradient: 'linear-gradient(145deg, #064e3b, #000)', // Dark Emerald to Black
    },
    {
        title: "Coming Soon",
        description: "Something amazing is being built. Check back later!",
        tags: ["Planning"],
        link: "#",
        github: "#",
        featured: false,
        borderColor: '#F59E0B', // Amber
        gradient: 'linear-gradient(145deg, #78350f, #000)', // Dark Amber to Black
    }
];

const Projects = () => {
    // ChromaGrid Refs and State
    const rootRef = useRef(null);
    const fadeRef = useRef(null);
    const setX = useRef(null);
    const setY = useRef(null);
    const pos = useRef({ x: 0, y: 0 });
    const radius = 300; // Spotlight radius
    const damping = 0.45;
    const fadeOut = 0.6;
    const ease = 'power3.out';

    useEffect(() => {
        const el = rootRef.current;
        if (!el) return;
        setX.current = gsap.quickSetter(el, '--x', 'px');
        setY.current = gsap.quickSetter(el, '--y', 'px');

        // Initial position center
        const { width, height } = el.getBoundingClientRect();
        pos.current = { x: width / 2, y: height / 2 };
        setX.current(pos.current.x);
        setY.current(pos.current.y);
    }, []);

    const moveTo = (x, y) => {
        gsap.to(pos.current, {
            x,
            y,
            duration: damping,
            ease,
            onUpdate: () => {
                setX.current?.(pos.current.x);
                setY.current?.(pos.current.y);
            },
            overwrite: true
        });
    };

    const handleMove = e => {
        if (!rootRef.current) return;
        const r = rootRef.current.getBoundingClientRect();
        moveTo(e.clientX - r.left, e.clientY - r.top);
        gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
    };

    const handleLeave = () => {
        gsap.to(fadeRef.current, {
            opacity: 1,
            duration: fadeOut,
            overwrite: true
        });
    };

    const handleCardMove = e => {
        const c = e.currentTarget;
        const rect = c.getBoundingClientRect();
        c.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        c.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    };

    return (
        <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-16"
            >
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Selected Works</h2>
                <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                    A collection of projects exploring performance, interaction design, and robust engineering.
                </p>
            </motion.div>

            {/* ChromaGrid Container */}
            <div
                ref={rootRef}
                onPointerMove={handleMove}
                onPointerLeave={handleLeave}
                className="relative group/grid"
                style={{
                    '--r': `${radius}px`,
                    '--x': '50%',
                    '--y': '50%'
                }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onMouseMove={handleCardMove}
                            style={{
                                '--card-border': project.borderColor,
                                '--spotlight-color': 'rgba(255,255,255,0.2)'
                            }}
                            className="group flex flex-col bg-white/5 border-2 border-transparent rounded-2xl overflow-hidden hover:border-[var(--card-border)] transition-colors duration-500 relative"
                        >
                            {/* Card Background Gradient */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                                style={{ background: project.gradient }}
                            />

                            {/* Inner Spotlight */}
                            <div
                                className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-0 opacity-0 group-hover:opacity-100 mix-blend-overlay"
                                style={{
                                    background: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)'
                                }}
                            />

                            {/* Project Preview Area */}
                            <div className="aspect-video bg-neutral-900/50 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 border-b border-white/5">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-white/20 text-lg font-medium tracking-widest uppercase">Preview</span>
                                    </div>
                                )}
                            </div>

                            <div className="p-8 flex flex-col flex-grow relative z-10">
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-indigo-200 transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-3">
                                        <a href={project.github} className="text-gray-400 hover:text-white transition-colors" title="View Code">
                                            <Github className="w-5 h-5" />
                                        </a>
                                        <a href={project.link} className="text-gray-400 hover:text-white transition-colors" title="Live Demo">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-gray-400 leading-relaxed mb-6 flex-grow group-hover:text-gray-200 transition-colors">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-gray-300 border border-white/5 group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Grayscale Overlay - The Magic Sauce */}
                <div
                    className="absolute inset-0 pointer-events-none z-20 rounded-3xl"
                    style={{
                        backdropFilter: 'grayscale(1) brightness(0.6)',
                        WebkitBackdropFilter: 'grayscale(1) brightness(0.6)',
                        background: 'rgba(0,0,0,0.01)',
                        maskImage: 'radial-gradient(circle var(--r) at var(--x) var(--y), transparent 0%, transparent 10%, rgba(0,0,0,0.5) 30%, white 100%)',
                        WebkitMaskImage: 'radial-gradient(circle var(--r) at var(--x) var(--y), transparent 0%, transparent 10%, rgba(0,0,0,0.5) 30%, white 100%)',
                        inset: '-20px' // Expand slightly to cover gaps
                    }}
                />

                <div
                    ref={fadeRef}
                    className="absolute inset-0 pointer-events-none transition-opacity duration-[250ms] z-30 rounded-3xl"
                    style={{
                        backdropFilter: 'grayscale(1) brightness(0.6)',
                        WebkitBackdropFilter: 'grayscale(1) brightness(0.6)',
                        background: 'rgba(0,0,0,0.01)',
                        maskImage: 'radial-gradient(circle var(--r) at var(--x) var(--y), white 0%, white 100%)', // Fully plain mask to cover everything when mouse leaves
                        WebkitMaskImage: 'radial-gradient(circle var(--r) at var(--x) var(--y), white 0%, white 100%)',
                        opacity: 1,
                        inset: '-20px'
                    }}
                />
            </div>
        </section>
    );
};

export default Projects;
