import React from 'react';
import { Github, Instagram, Linkedin } from 'lucide-react';
import { SOCIAL_LINKS, SITE_CONFIG } from '../constants';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-zinc-800/80 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <span className="text-xl font-extrabold tracking-wider text-white hover:text-zinc-300 transition-colors">{SITE_CONFIG.NAME}</span>
                        <p className="text-zinc-500 mt-1 text-sm font-light">{SITE_CONFIG.COPYRIGHT}</p>
                    </div>

                    <div className="flex space-x-6">
                        <a href={SOCIAL_LINKS.GITHUB} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                            <Github className="h-5 w-5" />
                        </a>
                        <a href={SOCIAL_LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                            <Instagram className="h-5 w-5" />
                        </a>
                        <a href={SOCIAL_LINKS.LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                            <Linkedin className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
