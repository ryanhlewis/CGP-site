import React from 'react';
import { ChevronDown } from 'lucide-react';

const Comparison = () => {
    const items = [
        {
            title: "CGP (Commons Guild Protocol)",
            sub: "P2P Relay + Optional Storage",
            desc: "The best of both worlds. Like Nostr, it uses relays for always-online availability. Like Scuttlebutt, it supports full offline sync. Unlike Federation, you own your community data completely—no admin can deplatform you. Your community is finally an asset you own, not a service you rent."
        },
        {
            title: "Federated Protocols (e.g. Matrix)",
            sub: "Complex Federation",
            desc: "Federated protocols excel at cross-server connectivity but often incur high complexity. CGP chooses a simpler model: sequenced, append-only guild logs served by relays. This makes forks a first-class governance primitive instead of a social process."
        },
        {
            title: "P2P Gossip Protocols (e.g. SSB)",
            sub: "Offline-First / Gossip",
            desc: "Pure P2P protocols are excellent for offline resilience, but their user-feed models can be difficult to map to structured community servers. CGP starts with Guilds & Channels as native primitives, making it easier to build familiar community tools."
        },
        {
            title: "Social Graph Protocols (e.g. AT Protocol)",
            sub: "Global Feed Distribution",
            desc: "Social graph protocols are optimized for global feeds and algorithmic distribution. CGP is optimized for distinct community servers, real-time channels, and moderation events. If your product relies on structured communities, CGP fits the mental model better."
        },
        {
            title: "Event Relay Protocols (e.g. Nostr)",
            sub: "Minimal Event Relaying",
            desc: "Minimal relay protocols are powerful but often lack inherent structure. CGP builds on similar relay concepts but adds strict definitions for Guilds, Channels, and M-of-K Directories as core primitives, ensuring consistent state across clients."
        }
    ];

    return (
        <section id="compare" className="py-32 bg-[#080808] border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Architectural Comparison</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Optimized for <strong>guild-centric chat</strong> with <strong>forkable governance</strong>.
                    </p>
                </div>

                <div className="grid gap-4 max-w-3xl mx-auto">
                    {items.map((item, i) => (
                        <details key={i} className="group rounded-xl bg-[#0A0A0A] border border-white/5 open:bg-[#111] open:border-white/10 transition-all duration-200" open={i === 0}>
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none select-none">
                                <div className="flex items-center gap-4">
                                    <span className="font-bold text-white text-lg">{item.title}</span>
                                    <span className="text-sm text-gray-500 font-mono hidden sm:inline-block">{item.sub}</span>
                                </div>
                                <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" />
                            </summary>
                            <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4 mt-2">
                                {item.desc}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Comparison;
