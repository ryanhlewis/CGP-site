import React from 'react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="pt-24 pb-20 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
                <div className="animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        PROTOCOL SPECIFICATION 0.1
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                        Sovereign communities, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">cryptographically secured.</span>
                    </h1>

                    <p className="text-xl text-gray-400 mb-8 max-w-[54ch] leading-relaxed">
                        CGP treats a community server like a mini‑ledger: every action is an event in a hash‑linked log.
                        Sync what you care about, verify integrity locally, and fork cleanly without permission.
                    </p>

                    <div className="flex gap-4 flex-wrap items-center mb-12">
                        <a href="#omni">
                            <Button variant="primary" className="h-12 px-8">
                                Explore Architecture <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </a>
                        <a href="#compare">
                            <Button variant="ghost" className="h-12 px-6">
                                View Comparisons
                            </Button>
                        </a>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <div className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-3">Core Primitives</div>
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="neutral">Guilds</Badge>
                                <Badge variant="neutral">Channels</Badge>
                                <Badge variant="neutral">Roles</Badge>
                            </div>
                        </div>
                        <div>
                            <div className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-3">Data Model</div>
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="neutral">Hash Chain</Badge>
                                <Badge variant="neutral">Signed Events</Badge>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative group animate-fade-in-up [animation-delay:200ms]">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-2xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                    <div className="relative p-8 rounded-2xl bg-[#0F0F0F] border border-white/10 shadow-2xl">
                        <h3 className="text-2xl font-bold text-white mb-4">The CGP Standard</h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            We borrow the <em>ledger concept</em> for tamper‑evident history and forkable governance —
                            while keeping the transport fast, cheap, and web‑native.
                        </p>

                        <div className="flex flex-wrap gap-3 mb-8">
                            <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm font-medium">
                                Tokenless
                            </div>
                            <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm font-medium">
                                No "Gas" Fees
                            </div>
                            <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm font-medium">
                                No Global Chain
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex gap-4 items-start">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0"></div>
                                <div>
                                    <strong className="text-white block mb-0.5">Identity</strong>
                                    <span className="text-sm text-gray-400">Secp256k1 public keys. No phone numbers or central accounts.</span>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0"></div>
                                <div>
                                    <strong className="text-white block mb-0.5">Transport</strong>
                                    <span className="text-sm text-gray-400">Relays serve logs over WebSockets. Browser-friendly.</span>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0"></div>
                                <div>
                                    <strong className="text-white block mb-0.5">Discovery</strong>
                                    <span className="text-sm text-gray-400">Directories map handles to guild IDs via Merkle transparency logs.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
