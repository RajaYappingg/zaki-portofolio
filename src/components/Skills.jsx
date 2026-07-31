import React, { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import {
    Code,
    Layout,
    Server,
    Smartphone,
    Database,
    PenTool,
    Terminal,
    Cpu,
    Globe,
    Layers,
    Box,
    Zap
} from 'lucide-react';

const skillsData = [
    {
        title: "Frontend Development",
        icon: Layout,
        description: "Building immersive and responsive user interfaces with modern React ecosystem.",
        skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion", "Three.js"]
    },
    {
        title: "UI/UX Design",
        icon: PenTool,
        description: "Crafting intuitive and accessible digital experiences with a focus on aesthetics.",
        skills: ["Figma", "Responsive Design", "Prototyping", "Wireframing", "Accessibility", "Design Systems"]
    },
    {
        title: "Backend & Tools",
        icon: Server,
        description: "Robust server-side logic and efficient development workflows.",
        skills: ["Node.js", "Git", "VS Code", "PostgreSQL", "Firebase", "Vercel"]
    },
    {
        title: "Mobile Development",
        icon: Smartphone,
        description: "Extending web capabilities to mobile platforms.",
        skills: ["React Native", "Expo", "PWA", "Mobile-First Design"]
    },
    {
        title: "Performance",
        icon: Zap,
        description: "Optimizing applications for speed, SEO, and user retention.",
        skills: ["Core Web Vitals", "SEO Optimization", "Lazy Loading", "Code Splitting"]
    },
    {
        title: "Currently Learning",
        icon: Cpu,
        description: "Expanding horizons with low-level programming and new paradigms.",
        skills: ["Rust", "WebAssembly", "System Architecture"]
    }
];

const SpotlightCard = ({ title, icon: Icon, description, skills, delay }) => {
    const divRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const position = { x: useMotionValue(0), y: useMotionValue(0) };

    const handleMouseMove = (e) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        position.x.set(e.clientX - rect.left);
        position.y.set(e.clientY - rect.top);
    };

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onMouseEnter={() => setIsFocused(true)}
            onMouseLeave={() => setIsFocused(false)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="relative w-full h-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/80 backdrop-blur-xl group hover:border-zinc-600 transition-colors duration-300"
        >
            {/* White Monochrome Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${position.x}px ${position.y}px,
              rgba(255, 255, 255, 0.1),
              transparent 80%
            )
          `
                }}
            />

            <div className="relative h-full p-6 flex flex-col z-10">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 text-white group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
                    <Icon size={24} />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zinc-200 transition-colors">
                    {title}
                </h3>

                <p className="text-zinc-400 text-sm mb-6 flex-grow leading-relaxed font-light">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {skills.map((skill, idx) => (
                        <span
                            key={idx}
                            className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-900 rounded-full border border-zinc-800 group-hover:bg-zinc-800 group-hover:border-zinc-700 group-hover:text-white transition-all duration-300"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
            <div className="relative z-10 space-y-16">
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-500"
                    >
                        Technical Proficiency
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-zinc-400 font-light"
                    >
                        A comprehensive look at the technologies, tools, and methodologies I use to build scalable digital solutions.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillsData.map((category, index) => (
                        <SpotlightCard
                            key={index}
                            {...category}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
