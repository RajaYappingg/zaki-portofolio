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
        title: "Fullstack Development",
        icon: Layout,
        skills: [
            { name: "Laravel", icon: Flame, color: "#FF2D20", rotate: 15, scale: 1.35 },
            { name: "PHP", icon: Code2, color: "#777BB4", rotate: -15, scale: 1.3 },
            { name: "React", icon: Atom, color: "#61DAFB", rotate: 180, scale: 1.25, isSpin: true },
            { name: "TypeScript", icon: Code2, color: "#3178C6", rotate: -12, scale: 1.3 },
            { name: "Tailwind CSS", icon: Wind, color: "#38BDF8", rotate: 15, scale: 1.25 },
            { name: "Next.js", icon: Layers, color: "#FFFFFF", rotate: -15, scale: 1.2 }
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
            { name: "Laravel", icon: Flame, color: "#FF2D20", rotate: 15, scale: 1.35 },
            { name: "PHP", icon: Code2, color: "#777BB4", rotate: -15, scale: 1.3 },
            { name: "Node.js", icon: Server, color: "#5FA04E", rotate: -12, scale: 1.25 },
            { name: "Git", icon: GitBranch, color: "#F05032", rotate: 30, scale: 1.3 },
            { name: "PostgreSQL", icon: Database, color: "#4169E1", rotate: -15, scale: 1.25 },
            { name: "Firebase", icon: Flame, color: "#FFCA28", rotate: 12, scale: 1.35 }
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
            whileHover={{ scale: 1.2, y: -3 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative w-9 h-9 rounded-xl bg-zinc-900/90 border border-zinc-800/90 flex items-center justify-center shadow-md cursor-pointer flex-shrink-0 transition-colors duration-300 hover:bg-white hover:border-white"
            style={{
                boxShadow: isHovered ? '0 4px 18px rgba(255,255,255,0.4)' : `0 0 12px ${skill.color}25`
            }}
            title={skill.name}
        >
            <motion.div
                animate={isHovered ? { rotate: skill.rotate || 15, scale: skill.scale || 1.2 } : { rotate: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 350, damping: 12 }}
            >
                <SkillIcon
                    size={17}
                    style={{ color: isHovered ? '#000000' : skill.color }}
                    className={skill.isSpin ? 'animate-spin-slow' : ''}
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
            whileHover={{ scale: 1.05, y: -2 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold text-zinc-200 bg-zinc-900/90 rounded-lg border border-zinc-800/90 hover:border-white hover:bg-white hover:text-black transition-colors duration-200 shadow-sm cursor-pointer"
        >
            <motion.div
                animate={isHovered ? { rotate: skill.rotate || 15, scale: skill.scale || 1.2 } : { rotate: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 350, damping: 12 }}
            >
                <SkillIcon
                    size={13}
                    style={{ color: isHovered ? '#000000' : skill.color }}
                    className={skill.isSpin ? 'animate-spin-slow' : ''}
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
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, delay, ease: [0.215, 0.61, 0.355, 1] }}
            className="relative w-full h-full overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-950/90 backdrop-blur-xl group hover:border-zinc-400 hover:shadow-[0_0_30px_rgba(255,255,255,0.06)] transition-[border-color,box-shadow] duration-300"
        >
            {/* White Monochrome Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              500px circle at ${position.x}px ${position.y}px,
              rgba(255, 255, 255, 0.1),
              transparent 80%
            )
          `
                }}
            />

            <div className="relative h-full p-4 sm:p-5 flex flex-col z-10">
                {/* Header Row: Icon & Index Badge */}
                <div className="flex items-center justify-between mb-3">
                    <motion.div
                        initial={{ scale: 0, rotate: -30 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: delay + 0.1, type: 'spring', stiffness: 350, damping: 16 }}
                        className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 text-white flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:border-white shadow-md transition-colors duration-300"
                    >
                        <Icon size={20} />
                    </motion.div>
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: delay + 0.15 }}
                        className="font-mono text-[10px] font-bold tracking-widest text-zinc-500 group-hover:text-zinc-300 transition-colors border border-zinc-800/80 px-2 py-0.5 rounded-full bg-zinc-900/50"
                    >
                        {formattedIndex}
                    </motion.span>
                </div>

                <motion.h3
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: delay + 0.12, duration: 0.4 }}
                    className="text-lg font-bold text-white mb-3 group-hover:text-zinc-100 transition-colors tracking-tight"
                >
                    {title}
                </motion.h3>

                {/* Animated Tech Stack Visual Badges Row with Staggered Entrance */}
                <div className="flex items-center gap-2 mb-3 overflow-x-auto py-1 no-scrollbar">
                    {skills.map((skill, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{
                                delay: delay + 0.18 + idx * 0.04,
                                type: 'spring',
                                stiffness: 380,
                                damping: 18
                            }}
                        >
                            <TechIconBadge skill={skill} />
                        </motion.div>
                    ))}
                </div>

                {/* Skill Tags with Staggered Entrance */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-zinc-800/60">
                    {skills.map((skill, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: delay + 0.28 + idx * 0.03,
                                duration: 0.3
                            }}
                        >
                            <SkillTag skill={skill} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <section className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden min-h-[calc(100vh-4rem)] flex flex-col justify-center">
            <div className="relative z-10 space-y-6">
                <div className="text-center max-w-2xl mx-auto space-y-1.5">
                    <motion.h2
                        initial={{ opacity: 0, y: 25, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="text-2xl sm:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-500 tracking-tight"
                    >
                        Technical Proficiency
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.5 }}
                        className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed"
                    >
                        A comprehensive look at the technologies, tools, and methodologies I use to build scalable digital solutions.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4.5">
                    {skillsData.map((category, index) => (
                        <SpotlightCard
                            key={index}
                            index={index}
                            {...category}
                            delay={index * 0.08}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
