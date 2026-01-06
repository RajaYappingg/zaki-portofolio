import React from 'react';
import { Github, Instagram, Linkedin } from 'lucide-react';
import { SOCIAL_LINKS, SITE_CONFIG } from '../constants';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10 py-6 sm:py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <span className="text-xl font-bold text-indigo-500">{SITE_CONFIG.NAME}</span>
                        <p className="text-gray-500 mt-1 text-sm">{SITE_CONFIG.COPYRIGHT}</p>
                    </div>

                    <div className="flex space-x-4">
                        <a href={SOCIAL_LINKS.GITHUB} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                            <Github className="h-5 w-5" />
                        </a>
                        <a href={SOCIAL_LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                            <Instagram className="h-5 w-5" />
                        </a>
                        <a href={SOCIAL_LINKS.LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                            <Linkedin className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
