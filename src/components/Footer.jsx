import React from 'react';
import { Github, Instagram, Linkedin } from 'lucide-react';
import { SOCIAL_LINKS, SITE_CONFIG } from '../constants';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-zinc-900 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-bold tracking-tight text-white">{SITE_CONFIG.NAME}</span>
                        <span className="text-zinc-700">•</span>
                        <span className="text-zinc-500 text-xs font-light">{SITE_CONFIG.COPYRIGHT}</span>
                    </div>

                    <div className="flex items-center space-x-5">
                        <a href={SOCIAL_LINKS.GITHUB} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors" title="GitHub">
                            <Github className="h-4 w-4" />
                        </a>
                        <a href={SOCIAL_LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors" title="Instagram">
                            <Instagram className="h-4 w-4" />
                        </a>
                        <a href={SOCIAL_LINKS.LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors" title="LinkedIn">
                            <Linkedin className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
