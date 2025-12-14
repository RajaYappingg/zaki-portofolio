import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GooeyNav from './GooeyNav';
import { Menu, Zap } from 'lucide-react';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
    SheetClose
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

const Navbar = () => {
    return (
        <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#" className="flex items-center gap-2 text-indigo-400 font-bold text-xl">
                            <Zap className="h-6 w-6" />
                            <span>Zaki.dev</span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block h-full flex items-center">
                        <GooeyNav
                            items={[
                                { label: 'Home', href: '/' },
                                { label: 'Projects', href: '/projects' },
                                { label: 'Skills', href: '/skills' },
                                { label: 'About', href: '/about' },
                                { label: 'Contact', href: '/contact' },
                            ]}
                        />
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-all shadow-lg hover:shadow-indigo-500/30">
                            <Link to="/contact">Hire Me</Link>
                        </Button>
                    </div>

                    {/* Mobile Navigation (Sheet) */}
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-white/10">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="bg-black/95 border-l border-white/10 text-white w-[300px]">
                                <SheetHeader>
                                    <SheetTitle className="text-left flex items-center gap-2 text-indigo-400">
                                        <Zap className="h-5 w-5" />
                                        Zaki.dev
                                    </SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col gap-4 mt-8">
                                    {['Home', 'Projects', 'Skills', 'About', 'Contact'].map((item) => (
                                        <SheetClose key={item} asChild>
                                            <Link
                                                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                                className="text-lg font-medium text-gray-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-md transition-colors"
                                            >
                                                {item}
                                            </Link>
                                        </SheetClose>
                                    ))}
                                    <SheetClose asChild>
                                        <Button asChild className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white w-full rounded-full">
                                            <Link to="/contact">Hire Me</Link>
                                        </Button>
                                    </SheetClose>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
