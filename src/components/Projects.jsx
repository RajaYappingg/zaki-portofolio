import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { gsap } from 'gsap';
import skanidaPreview from '../assets/skanida-preview.png';

const projects = [
    {
        title: "Skanida Apps Mobile",
        description: "Mobile application for student online presence using camera and location services. Streamlines attendance tracking with geospatial verification.",
        tags: ["React Native", "Expo", "Geolocation", "Camera API"],
        link: "#",
        github: "https://github.com/RajaYappingg/skanida-apps-mobile",
        featured: true,
        borderColor: '#ffffff',
        gradient: 'linear-gradient(145deg, #18181b, #000000)',
        image: skanidaPreview
    },
    {
        title: "Coming Soon",
        description: "Exciting new project currently in development. Stay tuned for updates!",
        tags: ["In Progress"],
        link: "#",
        github: "#",
        featured: false,
        borderColor: '#d4d4d8',
        gradient: 'linear-gradient(145deg, #18181b, #000000)',
    },
    {
        title: "Coming Soon",
        description: "Something amazing is being built. Check back later!",
        tags: ["Planning"],
        link: "#",
        github: "#",
        featured: false,
        borderColor: '#a1a1aa',
        gradient: 'linear-gradient(145deg, #18181b, #000000)',
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
                <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-500">Selected Works</h2>
                <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed font-light">
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
                                '--spotlight-color': 'rgba(255,255,255,0.15)'
                            }}
                            className="group flex flex-col bg-zinc-950/90 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-500 transition-colors duration-500 relative"
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
                            <div className="aspect-video bg-black relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 border-b border-zinc-800">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-zinc-600 text-lg font-medium tracking-widest uppercase">Preview</span>
                                    </div>
                                )}
                            </div>

                            <div className="p-8 flex flex-col flex-grow relative z-10">
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-zinc-200 transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-3">
                                        <a href={project.github} className="text-zinc-400 hover:text-white transition-colors" title="View Code">
                                            <Github className="w-5 h-5" />
                                        </a>
                                        <a href={project.link} className="text-zinc-400 hover:text-white transition-colors" title="Live Demo">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-zinc-400 font-light leading-relaxed mb-6 flex-grow group-hover:text-zinc-300 transition-colors">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-900 text-zinc-300 border border-zinc-800 group-hover:bg-zinc-800 group-hover:border-zinc-700 transition-all">
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
