import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';



import SplitText from './SplitText';

const Hero = () => {
    return (
        <div className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden min-h-[600px] flex items-center justify-center">


            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="pointer-events-auto"
                >
                    <span className="inline-flex items-center space-x-2 bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-xs font-medium mb-8 border border-emerald-500/20 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2 mr-1">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span>Available for projects</span>
                    </span>
                </motion.div>

                <div className="text-5xl sm:text-7xl font-bold tracking-tight text-white mb-8 pointer-events-auto leading-tight">
                    <SplitText
                        text="Frontend Developer"
                        className=""
                        delay={60}
                        from={{ opacity: 0, y: 50 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-50px"
                    />
                    <br className="hidden sm:block" />
                    <SplitText
                        text="crafting digital experiences"
                        className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-300"
                        delay={60}
                        from={{ opacity: 0, y: 50 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-50px"
                    />
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-2 text-xl text-gray-400 max-w-2xl mx-auto mb-12 pointer-events-auto leading-relaxed"
                >
                    I build accessible, pixel-perfect, and performant web applications. Passionate about blending aesthetics with robust engineering to create software that feels right.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 pointer-events-auto"
                >
                    <Link to="/projects" className="group flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-200 px-8 py-3.5 rounded-full font-medium transition-all shadow-lg hover:shadow-white/20">
                        View My Work
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                    <Link to="/contact" className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white px-8 py-3.5 rounded-full font-medium transition-all border border-white/10 backdrop-blur-md">
                        Contact Me
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
