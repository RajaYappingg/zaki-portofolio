import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <span className="text-2xl font-bold text-indigo-500">Zaki.dev</span>
                        <p className="text-gray-500 mt-2 text-sm">© 2025 Zaki.dev. All rights reserved.</p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://github.com/RajaYappingg" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                            <Github className="h-6 w-6" />
                        </a>
                        <a href="https://twitter.com/Zaki_Rio" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                            <Twitter className="h-6 w-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/zakirio" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                            <Linkedin className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
