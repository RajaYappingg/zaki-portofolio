import React from 'react';
import { Mail, Github, Linkedin, Instagram, MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import BounceCards from './BounceCards';

import { SOCIAL_LINKS } from '../constants';

const Contact = () => {
    // Social Cards Content
    const socialCards = [
        (
            <a href={SOCIAL_LINKS.GITHUB} target="_blank" rel="noopener noreferrer" key="github" className="block w-full h-full bg-[#181717] flex flex-col items-center justify-center p-6 text-white border border-white/10 relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-5 h-5" />
                </div>
                <Github className="w-20 h-20 mb-6 text-white group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-2">GitHub</h3>
                <p className="text-gray-400 text-sm text-center mb-6">Check out my open source contributions.</p>
                <div className="px-6 py-2 bg-white text-black font-semibold rounded-full group-hover:bg-gray-200 transition-colors z-10">
                    Follow
                </div>
            </a>
        ),
        (
            <a href={SOCIAL_LINKS.LINKEDIN} target="_blank" rel="noopener noreferrer" key="linkedin" className="block w-full h-full bg-[#0077b5] flex flex-col items-center justify-center p-6 text-white border border-white/10 relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-5 h-5" />
                </div>
                <Linkedin className="w-20 h-20 mb-6 text-white group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-2">LinkedIn</h3>
                <p className="text-gray-100 text-sm text-center mb-6">Connect for professional opportunities.</p>
                <div className="px-6 py-2 bg-white text-[#0077b5] font-semibold rounded-full group-hover:bg-gray-100 transition-colors z-10">
                    Connect
                </div>
            </a>
        ),
        (
            <a href={SOCIAL_LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer" key="instagram" className="block w-full h-full bg-black flex flex-col items-center justify-center p-6 text-white border border-white/10 relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-5 h-5" />
                </div>
                <Instagram className="w-20 h-20 mb-6 text-[#E1306C] group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-2">Instagram</h3>
                <p className="text-gray-400 text-sm text-center mb-6">Follow my visual journey & updates.</p>
                <div className="px-6 py-2 bg-[#E1306C] text-white font-semibold rounded-full group-hover:bg-[#c13584] transition-colors z-10">
                    Follow
                </div>
            </a>
        )
    ];

    const transformStyles = [
        "rotate(-5deg) translate(-150px)",
        "rotate(0deg)",
        "rotate(5deg) translate(150px)"
    ];

    return (
        <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden">
            <div className="max-w-4xl w-full flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-white mb-6">Let's Connect</h2>
                    <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                        Check out my social profiles below to connect, or send me an email directly.
                    </p>
                </motion.div>

                {/* BounceCards Component Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative w-full flex justify-center mb-16"
                >
                    <BounceCards
                        className="custom-bounce-cards"
                        items={socialCards}
                        containerWidth={600}
                        containerHeight={400}
                        animationDelay={0.5}
                        animationStagger={0.1}
                        easeType="elastic.out(1, 0.5)"
                        transformStyles={transformStyles}
                        enableHover={true}
                    />
                </motion.div>

                {/* Email Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="w-full max-w-md"
                >
                    <a
                        href={SOCIAL_LINKS.EMAIL_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-6 rounded-2xl bg-neutral-900/50 hover:bg-neutral-900 border border-white/10 hover:border-indigo-500/50 transition-all group duration-300 backdrop-blur-sm"
                    >
                        <div className="flex items-center gap-4">
                            <div className="bg-indigo-500/10 p-3 rounded-xl group-hover:bg-indigo-500/20 transition-colors">
                                <Mail className="h-6 w-6 text-indigo-400 group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="text-left">
                                <h3 className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-1">Compose in Gmail</h3>
                                <span className="text-lg text-white font-semibold">{SOCIAL_LINKS.EMAIL}</span>
                            </div>
                        </div>
                        <div className="text-gray-500 group-hover:text-white transition-colors">
                            <ExternalLink className="w-5 h-5" />
                        </div>
                    </a>

                    <div className="mt-12 flex items-center justify-center gap-2 text-gray-500 text-sm">
                        <MapPin className="h-4 w-4" />
                        <span>Based in Indonesia • Available for remote work</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
