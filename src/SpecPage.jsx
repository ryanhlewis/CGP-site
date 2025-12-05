import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Hero from './components/sections/Hero';
import Why from './components/sections/Why';
import Architecture from './components/sections/Architecture';
import OmniFrontend from './components/sections/OmniFrontend';
import Plugins from './components/sections/Plugins';
import Comparison from './components/sections/Comparison';
import Footer from './components/sections/Footer';
import Button from './components/ui/Button';

const SpecPage = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-cyan-500/30">
            {/* Background Ambience */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-900/10 rounded-full blur-[120px]" />
                <div className="absolute top-[20%] right-[20%] w-[20%] h-[20%] bg-emerald-900/10 rounded-full blur-[120px]" />
            </div>

            <header className={`sticky top-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-[#050505]/80 backdrop-blur-md border-white/5 py-4' : 'bg-transparent border-transparent py-6'}`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Link to="/" className="flex items-center gap-2 group">
                            <img src="/logo.svg" alt="CGP Logo" className="w-8 h-8 group-hover:scale-105 transition-transform" />
                            <span className="font-bold tracking-tight text-white text-lg">CGP <span className="text-gray-500 font-normal">Spec</span></span>
                        </Link>
                    </div>

                    <nav className="hidden lg:flex gap-8 text-sm font-medium text-gray-400">
                        <a href="#why" className="hover:text-cyan-400 transition-colors">Why</a>
                        <a href="#architecture" className="hover:text-cyan-400 transition-colors">Architecture</a>
                        <a href="#omni" className="hover:text-cyan-400 transition-colors">Omni‑frontend</a>
                        <a href="#plugins" className="hover:text-cyan-400 transition-colors">Plugins</a>
                        <a href="#compare" className="hover:text-cyan-400 transition-colors">Compare</a>
                    </nav>

                    <div className="flex items-center gap-4">
                        <Link to="/">
                            <Button variant="ghost" className="text-sm">
                                <ArrowLeft className="w-4 h-4 mr-2" /> Back
                            </Button>
                        </Link>
                        <a href="https://github.com/ryanhlewis/commons-guild-protocol" target="_blank" rel="noopener noreferrer">
                            <Button variant="default" className="text-sm">
                                GitHub
                            </Button>
                        </a>
                    </div>
                </div>
            </header>

            <main className="relative z-10">
                <Hero />
                <Why />
                <Architecture />
                <OmniFrontend />
                <Plugins />
                <Comparison />
                <Footer />
            </main>
        </div>
    );
};

export default SpecPage;
