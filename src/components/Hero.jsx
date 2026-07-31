import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';



import SplitText from './SplitText';

const Hero = () => {
    return (
        <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden min-h-[600px] flex items-center justify-center">


            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="pointer-events-auto"
                >
                    <span className="inline-flex items-center space-x-2 bg-zinc-900/90 text-zinc-300 px-4 py-1.5 rounded-full text-xs font-medium mb-8 border border-zinc-700/60 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                        <span className="relative flex h-2 w-2 mr-1">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
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
                        className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-500 font-extrabold"
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
                    className="mt-2 text-xl text-zinc-400 max-w-2xl mx-auto mb-12 pointer-events-auto leading-relaxed font-light"
                >
                    I build accessible, pixel-perfect, and performant web applications. Passionate about blending aesthetics with robust engineering to create software that feels right.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 pointer-events-auto"
                >
                    <Link to="/projects" className="group flex items-center justify-center gap-2 bg-white text-black hover:bg-zinc-200 px-8 py-3.5 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                        View My Work
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                    <Link to="/contact" className="flex items-center justify-center gap-2 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-white px-8 py-3.5 rounded-full font-medium transition-all border border-zinc-700/80 hover:border-zinc-500 backdrop-blur-md">
                        Contact Me
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
