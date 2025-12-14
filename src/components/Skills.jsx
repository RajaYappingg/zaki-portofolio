import React from 'react';
import ProfileCard from './ProfileCard';
import { motion } from 'framer-motion';
import { Code, Layout, Zap, Smartphone, CheckCircle, Database, Server, PenTool, GitBranch, Terminal } from 'lucide-react';

const skillCategories = [
    {
        title: "Frontend Ecosystem",
        description: "My primary area of expertise. I love the React ecosystem.",
        skills: [
            { name: "React", level: "Expert" },
            { name: "TypeScript", level: "Advanced" },
            { name: "Tailwind CSS", level: "Expert" },
            { name: "Next.js", level: "Advanced" },
            { name: "Framer Motion", level: "Advanced" },
            { name: "WebGL / Three.js", level: "Intermediate" }
        ]
    },

    {
        title: "Design & Architecture",
        description: "Bridging the gap between engineering and design.",
        skills: [
            { name: "UI/UX Design", level: "Advanced" },
            { name: "Figma", level: "Advanced" },
            { name: "Responsive Design", level: "Expert" },
            { name: "Accessibility (a11y)", level: "Advanced" },
            { name: "System Design", level: "Intermediate" },
            { name: "Performance Opt.", level: "Advanced" }
        ]
    }
];

const Skills = () => {
    return (
        <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-16"
            >
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Technical Expertise</h2>
                <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                    A breakdown of my toolkit and the technologies I use to bring ideas to life.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {skillCategories.map((category, index) => (
                    <ProfileCard
                        key={index}
                        title={category.title}
                        description={category.description}
                        delay={index * 0.1 + 0.2}
                    >
                        <div className="space-y-4">
                            {category.skills.map((skill, i) => (
                                <div key={i} className="flex items-center justify-between group">
                                    <span className="text-gray-300 font-medium group-hover:text-indigo-300 transition-colors">{skill.name}</span>
                                    <span className="text-xs text-gray-500 font-mono border border-white/10 px-2 py-1 rounded bg-black/20 group-hover:border-indigo-500/30 transition-colors">
                                        {skill.level}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </ProfileCard>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-20 p-8 rounded-2xl bg-black border border-indigo-500/20 text-center relative z-10"
            >
                <h4 className="text-xl font-semibold text-white mb-4">Always Learning</h4>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    I am currently exploring <strong>Rust</strong> and <strong>WebAssembly</strong> to further optimize web performance.
                    I believe in continuous learning and staying adaptable in this fast-paced industry.
                </p>
            </motion.div>
        </section>
    );
};

export default Skills;
