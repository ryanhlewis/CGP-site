import React from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { Copy, Globe, Server, User } from 'lucide-react';

const Architecture = () => {
    const copyToClipboard = (id, btnId) => {
        const el = document.getElementById(id);
        const text = el.innerText;
        navigator.clipboard.writeText(text).then(() => {
            const btn = document.getElementById(btnId);
            btn.classList.add('text-green-400');
            setTimeout(() => btn.classList.remove('text-green-400'), 1200);
        });
    };

    return (
        <section id="architecture" className="py-32 max-w-7xl mx-auto px-6">
            <div className="mb-16 max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Double‑Relay Architecture</h2>
                <p className="text-xl text-gray-400 leading-relaxed">
                    CGP separates <strong>discovery</strong> from <strong>data hosting</strong> to prevent single points of control.
                </p>
            </div>

            {/* Two-Layer Explanation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <Card className="p-8">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-xl border border-purple-500/20 flex items-center justify-center mb-6">
                        <Globe className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Directory Layer</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                        Transparency logs that map human handles to Guild IDs. Multiple independent operators maintain these logs, verified via Merkle Trees.
                    </p>
                    <div className="p-3 rounded-lg bg-[#050505] border border-white/5 font-mono text-xs text-gray-400">
                        @solarpunk/dao → 0x8a...
                    </div>
                </Card>

                <Card className="p-8">
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-xl border border-cyan-500/20 flex items-center justify-center mb-6">
                        <Server className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Guild Layer</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                        Append-only hash chains storing chat history. Relays verify signatures and sequence events without holding private keys.
                    </p>
                    <div className="p-3 rounded-lg bg-[#050505] border border-white/5 font-mono text-xs text-gray-400">
                        ["EVENT", &#123; type: "MESSAGE" &#125;]
                    </div>
                </Card>
            </div>

            {/* Why Split Architecture */}
            <div className="mb-16">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">Why Split Them?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    <div className="p-6 rounded-xl bg-[#0A0A0A] border border-purple-500/20">
                        <div className="text-purple-400 font-bold mb-2 text-sm uppercase tracking-wider">Directories</div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Clients query multiple sources to verify identity data. If one directory censors a guild, others reveal it.
                        </p>
                    </div>
                    <div className="p-6 rounded-xl bg-[#0A0A0A] border border-cyan-500/20">
                        <div className="text-cyan-400 font-bold mb-2 text-sm uppercase tracking-wider">Relays</div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Relays can't forge messages because they don't hold signing keys. They sequence events but can't rewrite history.
                        </p>
                    </div>
                </div>
            </div>

            {/* Visual Diagram */}
            <div className="mb-16">
                <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/5 shadow-2xl overflow-hidden">
                    <svg viewBox="0 0 980 520" role="img" className="w-full h-auto block">
                        <defs>
                            <linearGradient id="gA" x1="0" x2="1" y1="0" y2="1">
                                <stop offset="0" stopColor="#1a1a1a" stopOpacity="1" />
                                <stop offset="1" stopColor="#0a0a0a" stopOpacity="1" />
                            </linearGradient>
                            <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
                                <path d="M 0 0 L 10 5 L 0 10 z" fill="#4b5563"></path>
                            </marker>
                        </defs>

                        <rect x="14" y="14" width="952" height="492" rx="22" fill="url(#gA)" stroke="#333" strokeWidth="1"></rect>

                        {/* Directories */}
                        <g fill="none" stroke="#444" strokeWidth="1">
                            <rect x="62" y="70" width="260" height="86" rx="12" fill="#111"></rect>
                            <rect x="62" y="178" width="260" height="86" rx="12" fill="#111"></rect>
                            <rect x="62" y="286" width="260" height="86" rx="12" fill="#111"></rect>
                        </g>
                        <g fill="#e5e7eb" fontFamily="sans-serif" fontSize="16" fontWeight="bold">
                            <text x="86" y="110">Directory A</text>
                            <text x="86" y="218">Directory B</text>
                            <text x="86" y="326">Directory C</text>
                        </g>
                        <g fill="#9ca3af" fontFamily="monospace" fontSize="12">
                            <text x="86" y="132">Merkle Log</text>
                            <text x="86" y="240">M‑of‑K</text>
                            <text x="86" y="348">Proofs</text>
                        </g>

                        {/* Client */}
                        <g>
                            {/* Client Window UI */}
                            <rect x="382" y="170" width="216" height="160" rx="8"
                                fill="#111" stroke="#22d3ee" strokeWidth="2"></rect>
                            {/* Title Bar */}
                            <line x1="382" y1="200" x2="598" y2="200" stroke="#22d3ee" strokeWidth="1" strokeOpacity="0.3" />
                            {/* Window Controls */}
                            <circle cx="400" cy="185" r="3" fill="#22d3ee" />
                            <circle cx="412" cy="185" r="3" fill="#22d3ee" fillOpacity="0.5" />
                            <circle cx="424" cy="185" r="3" fill="#22d3ee" fillOpacity="0.5" />

                            {/* User Icon */}
                            <User x={466} y={205} width={48} height={48} color="#22d3ee" strokeWidth={1.5} />
                        </g>
                        <g fill="#fff" fontSize="16" fontFamily="sans-serif" fontWeight="bold">
                            <text x="410" y="275">Thin Client</text>
                        </g>
                        <g fill="#22d3ee" fontSize="11" fontFamily="monospace">
                            <text x="410" y="295">verify + cache</text>
                            <text x="410" y="310">sync guilds</text>
                        </g>

                        {/* Relays */}
                        <g fill="#111" stroke="#444" strokeWidth="1">
                            <rect x="690" y="124" width="240" height="106" rx="16"></rect>
                            <rect x="690" y="256" width="240" height="106" rx="16"></rect>
                        </g>
                        <g fill="#e5e7eb" fontFamily="sans-serif" fontSize="16" fontWeight="bold">
                            <text x="712" y="164">Guild Relay 1</text>
                            <text x="712" y="296">Guild Relay 2</text>
                        </g>
                        <g fill="#9ca3af" fontFamily="monospace" fontSize="12">
                            <text x="712" y="188">logs + sequence</text>
                            <text x="712" y="210">verify sigs</text>

                            <text x="712" y="320">with policies</text>
                            <text x="712" y="342">optional</text>
                        </g>

                        {/* Arrows */}
                        <g stroke="#4b5563" fill="none" markerEnd="url(#arrow)">
                            <path d="M 322 113 C 352 120, 356 170, 382 196" strokeWidth="2"></path>
                            <path d="M 322 221 C 352 228, 356 240, 382 242" strokeWidth="2"></path>
                            <path d="M 322 329 C 352 336, 356 310, 382 292" strokeWidth="2"></path>

                            <path d="M 598 232 C 650 226, 660 192, 690 176" strokeWidth="2"></path>
                            <path d="M 598 258 C 650 266, 660 304, 690 310" strokeWidth="2"></path>
                        </g>
                    </svg>
                </div>
            </div>

            {/* Code Example */}
            <div className="max-w-2xl mx-auto">
                <div className="p-8 rounded-2xl bg-[#0F0F0F] border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-white">Event Structure</h3>
                        <Button variant="ghost" id="btnCopyModel" onClick={() => copyToClipboard('modelCode', 'btnCopyModel')} className="h-8 px-2 text-xs">
                            <Copy className="w-3 h-3 mr-2" /> Copy
                        </Button>
                    </div>
                    <pre className="p-4 rounded-lg bg-[#050505] border border-white/5 overflow-x-auto font-mono text-xs text-gray-300 leading-relaxed" id="modelCode"><code>{`// Hash-linked, signed events
event = {
  seq: 128,
  prevHash: "0x8f2a...",
  author: "0x71b...",
  body: { type: "MESSAGE", content: "..." },
  id: sha256(canonical(event)),
  sig: sign(privKey, id)
}`}</code></pre>
                </div>
            </div>
        </section>
    );
};

export default Architecture;
