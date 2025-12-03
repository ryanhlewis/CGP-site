import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/5 bg-[#020202]">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-600 rounded flex items-center justify-center">
                        <span className="font-bold text-black text-xs">C</span>
                    </div>
                    <span className="font-bold text-gray-500 text-sm">Commons Guild Protocol</span>
                </div>

                <div className="flex gap-8 text-sm text-gray-500">
                    <a href="#why" className="hover:text-white transition-colors">Why</a>
                    <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>
                    <a href="#omni" className="hover:text-white transition-colors">Omni</a>
                    <a href="#compare" className="hover:text-white transition-colors">Compare</a>
                </div>

                <div className="text-xs text-gray-600">
                    Open Source. Sovereign. Forever.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
