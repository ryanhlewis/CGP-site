import React from 'react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { GitFork, Shield, Zap, Database, Globe, Lock } from 'lucide-react';

const Why = () => {
    const features = [
        {
            icon: <Zap className="w-5 h-5 text-yellow-400" />,
            title: "Server-Centric Primitives",
            desc: "Guilds, channels, roles, and ephemeral channels are native objects. Designed for structured communities, not just 1:1 chat.",
            tags: ["Server → Guild", "Room → Channel"]
        },
        {
            icon: <Shield className="w-5 h-5 text-green-400" />,
            title: "Tamper‑Evident Logs",
            desc: "Every guild is an append‑only, hash‑linked log of signed events. If history is rewritten, clients detect it immediately.",
            tags: ["Hash chain", "ECDSA/Schnorr"]
        },
        {
            icon: <GitFork className="w-5 h-5 text-purple-400" />,
            title: "Forkable Governance",
            desc: "Forks are explicit events. Communities can split cleanly at a chosen checkpoint without global platform arbitration.",
            tags: ["Revolt & fork", "Visible lineage"]
        },
        {
            icon: <Database className="w-5 h-5 text-blue-400" />,
            title: "No Chain Required",
            desc: "CGP doesn’t require an L1 blockchain. If extra hardening is needed, directories can optionally anchor hashes to Bitcoin.",
            tags: ["Tokenless", "No fees"]
        },
        {
            icon: <Globe className="w-5 h-5 text-cyan-400" />,
            title: "Thin Clients Default",
            desc: "Sync only the guilds you care about, with history windows and retention policies. Works efficiently in browsers and workers.",
            tags: ["WebSockets", "IndexedDB"]
        },
        {
            icon: <Lock className="w-5 h-5 text-red-400" />,
            title: "Extensible Norms",
            desc: "Spam control and proofs are handled by relay policies or plugins. The standard stays agnostic so communities can choose.",
            tags: ["Ephemeral TTL", "PoW gates"]
        }
    ];

    return (
        <section id="why" className="py-32 bg-[#080808] border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why CGP?</h2>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        The protocol is intentionally broad: it standardizes <strong>verifiable data</strong> and a simple
                        <strong>web-native transport</strong>, while leaving room for relays and communities to choose their own operating norms.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((f, i) => (
                        <Card key={i} className="group hover:bg-[#111] transition-all duration-300 h-full flex flex-col">
                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                                {f.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3">{f.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">{f.desc}</p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {f.tags.map(tag => (
                                    <Badge key={tag} variant="neutral" className="text-[10px]">{tag}</Badge>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Why;
