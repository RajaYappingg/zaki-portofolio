import React, { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import {
    Layout,
    PenTool,
    Server,
    Smartphone,
    Zap,
    Cpu,
    Atom,
    Code2,
    Wind,
    Layers,
    Sparkles,
    Box,
    Figma,
    MonitorSmartphone,
    Component,
    GitBranch,
    Terminal,
    Database,
    Flame,
    Globe,
    Gauge,
    Search,
    Binary,
    Blocks,
    Activity,
    SmartphoneNfc,
    Workflow,
    ShieldCheck
} from 'lucide-react';

const skillsData = [
    {
        title: "Frontend Development",
        icon: Layout,
        skills: [
            { name: "React", icon: Atom, color: "#61DAFB", rotate: 180, scale: 1.25, isSpin: true },
            { name: "TypeScript", icon: Code2, color: "#3178C6", rotate: -12, scale: 1.3 },
            { name: "Tailwind CSS", icon: Wind, color: "#38BDF8", rotate: 15, scale: 1.25 },
            { name: "Next.js", icon: Layers, color: "#FFFFFF", rotate: -15, scale: 1.2 },
            { name: "Framer Motion", icon: Sparkles, color: "#FF0055", rotate: 45, scale: 1.3 },
            { name: "Three.js", icon: Box, color: "#A855F7", rotate: 90, scale: 1.25 }
        ]
    },
    {
        title: "UI/UX Design",
        icon: PenTool,
        skills: [
            { name: "Figma", icon: Figma, color: "#F24E1E", rotate: 20, scale: 1.3 },
            { name: "Responsive Design", icon: MonitorSmartphone, color: "#3B82F6", rotate: -10, scale: 1.2 },
            { name: "Prototyping", icon: PenTool, color: "#EC4899", rotate: -25, scale: 1.25 },
            { name: "Wireframing", icon: Workflow, color: "#06B6D4", rotate: 15, scale: 1.2 },
            { name: "Accessibility", icon: ShieldCheck, color: "#10B981", rotate: -15, scale: 1.3 },
            { name: "Design Systems", icon: Component, color: "#8B5CF6", rotate: 90, scale: 1.25 }
        ]
    },
    {
        title: "Backend & Tools",
        icon: Server,
        skills: [
            { name: "Node.js", icon: Server, color: "#5FA04E", rotate: -12, scale: 1.25 },
            { name: "Git", icon: GitBranch, color: "#F05032", rotate: 30, scale: 1.3 },
            { name: "VS Code", icon: Terminal, color: "#007ACC", rotate: 15, scale: 1.2 },
            { name: "PostgreSQL", icon: Database, color: "#4169E1", rotate: -15, scale: 1.25 },
            { name: "Firebase", icon: Flame, color: "#FFCA28", rotate: 12, scale: 1.35 },
            { name: "Vercel", icon: Globe, color: "#FFFFFF", rotate: 180, scale: 1.25 }
        ]
    },
    {
        title: "Mobile Development",
        icon: Smartphone,
        skills: [
            { name: "React Native", icon: Atom, color: "#61DAFB", rotate: 180, scale: 1.25, isSpin: true },
            { name: "Expo", icon: Zap, color: "#FFFFFF", rotate: 25, scale: 1.3 },
            { name: "PWA", icon: SmartphoneNfc, color: "#A855F7", rotate: -15, scale: 1.25 },
            { name: "Mobile-First Design", icon: Smartphone, color: "#3B82F6", rotate: 12, scale: 1.2 }
        ]
    },
    {
        title: "Performance",
        icon: Zap,
        skills: [
            { name: "Core Web Vitals", icon: Gauge, color: "#10B981", rotate: 45, scale: 1.25 },
            { name: "SEO Optimization", icon: Search, color: "#F59E0B", rotate: -20, scale: 1.3 },
            { name: "Lazy Loading", icon: Activity, color: "#EC4899", rotate: 15, scale: 1.2 },
            { name: "Code Splitting", icon: Blocks, color: "#6366F1", rotate: -30, scale: 1.25 }
        ]
    },
    {
        title: "Currently Learning",
        icon: Cpu,
        skills: [
            { name: "Rust", icon: Cpu, color: "#DEA584", rotate: 90, scale: 1.3 },
            { name: "WebAssembly", icon: Binary, color: "#654FF0", rotate: -20, scale: 1.25 },
            { name: "System Architecture", icon: Blocks, color: "#06B6D4", rotate: 30, scale: 1.25 }
        ]
    }
];

const TechIconBadge = ({ skill }) => {
    const [isHovered, setIsHovered] = useState(false);
    const SkillIcon = skill.icon;
    return (
        <motion.div
            whileHover={{ scale: 1.22, y: -4 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative w-11 h-11 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 flex items-center justify-center shadow-lg cursor-pointer flex-shrink-0 transition-all duration-300 hover:bg-white hover:border-white"
            style={{
                boxShadow: isHovered ? '0 6px 22px rgba(255,255,255,0.45)' : `0 0 15px ${skill.color}25`
            }}
            title={skill.name}
        >
            <motion.div
                animate={isHovered ? { rotate: skill.rotate || 15, scale: skill.scale || 1.2 } : { rotate: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 350, damping: 12 }}
            >
                <SkillIcon
                    size={20}
                    style={{ color: isHovered ? '#000000' : skill.color }}
                    className={`transition-colors duration-200 ${skill.isSpin ? 'animate-spin-slow' : ''}`}
                />
            </motion.div>
        </motion.div>
    );
};

const SkillTag = ({ skill }) => {
    const [isHovered, setIsHovered] = useState(false);
    const SkillIcon = skill.icon;
    return (
        <motion.div
            whileHover={{ scale: 1.06, y: -2 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-zinc-200 bg-zinc-900/90 rounded-xl border border-zinc-800/90 hover:border-white hover:bg-white hover:text-black transition-all duration-200 shadow-sm cursor-pointer"
        >
            <motion.div
                animate={isHovered ? { rotate: skill.rotate || 15, scale: skill.scale || 1.2 } : { rotate: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 350, damping: 12 }}
            >
                <SkillIcon
                    size={15}
                    style={{ color: isHovered ? '#000000' : skill.color }}
                    className={`transition-colors duration-200 ${skill.isSpin ? 'animate-spin-slow' : ''}`}
                />
            </motion.div>
            <span>{skill.name}</span>
        </motion.div>
    );
};

const SpotlightCard = ({ title, icon: Icon, description, skills, index, delay }) => {
    const divRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const position = { x: useMotionValue(0), y: useMotionValue(0) };

    const handleMouseMove = (e) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        position.x.set(e.clientX - rect.left);
        position.y.set(e.clientY - rect.top);
    };

    const formattedIndex = String(index + 1).padStart(2, '0');

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
            className="relative w-full h-full overflow-hidden rounded-3xl border border-zinc-800/90 bg-zinc-950/90 backdrop-blur-xl group hover:border-zinc-400 hover:shadow-[0_0_35px_rgba(255,255,255,0.07)] transition-all duration-500"
        >
            {/* White Monochrome Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              600px circle at ${position.x}px ${position.y}px,
              rgba(255, 255, 255, 0.12),
              transparent 80%
            )
          `
                }}
            />

            <div className="relative h-full p-7 flex flex-col z-10">
                {/* Header Row: Icon & Index Badge */}
                <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 text-white flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:border-white group-hover:scale-110 shadow-lg transition-all duration-300">
                        <Icon size={26} />
                    </div>
                    <span className="font-mono text-xs font-bold tracking-widest text-zinc-500 group-hover:text-zinc-300 transition-colors border border-zinc-800/80 px-2.5 py-1 rounded-full bg-zinc-900/50">
                        {formattedIndex}
                    </span>
                </div>

                <h3 className="text-2xl font-extrabold text-white mb-6 group-hover:text-zinc-100 transition-colors tracking-tight">
                    {title}
                </h3>

                {/* Animated Tech Stack Visual Badges Row with Vivid Colors & Smart Hover Contrast */}
                <div className="flex items-center gap-3 mb-6 overflow-x-auto py-2 no-scrollbar">
                    {skills.map((skill, idx) => (
                        <TechIconBadge key={idx} skill={skill} />
                    ))}
                </div>

                {/* Skill Tags with Animated Tech Icons & Smart Hover Contrast */}
                <div className="flex flex-wrap gap-2.5 mt-auto pt-5 border-t border-zinc-800/60">
                    {skills.map((skill, idx) => (
                        <SkillTag key={idx} skill={skill} />
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
                        className="text-4xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-500 tracking-tight"
                    >
                        Technical Proficiency
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed"
                    >
                        A comprehensive look at the technologies, tools, and methodologies I use to build scalable digital solutions.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData.map((category, index) => (
                        <SpotlightCard
                            key={index}
                            index={index}
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
