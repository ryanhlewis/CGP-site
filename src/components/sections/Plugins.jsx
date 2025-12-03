import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { Copy, Check } from 'lucide-react';

const Plugins = () => {
    const [plugins, setPlugins] = useState({
        ephemeral: true,
        pow: true,
        poc: false,
        checkpoints: true,
        e2ee: false,
    });

    const [helloCode, setHelloCode] = useState('');

    useEffect(() => {
        const f = [];
        if (plugins.ephemeral) f.push("ephemeral");
        if (plugins.checkpoints) f.push("checkpoints");
        if (plugins.pow) f.push("antispam-pow");
        if (plugins.poc) f.push("proof-of-compression");
        if (plugins.e2ee) f.push("e2ee-envelopes");

        const code = `["HELLO_OK", {
  "protocol": "cgp/0.1",
  "relayName": "river-relay-v2",
  "features": [
    ${f.map(x => `"${x}"`).join(",\n    ")}
  ]
}]`;
        setHelloCode(code);
    }, [plugins]);

    const togglePlugin = (key) => {
        setPlugins(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const copyHello = () => {
        navigator.clipboard.writeText(helloCode);
        const btn = document.getElementById('copyHelloBtn');
        if (btn) {
            btn.classList.add('text-green-400');
            setTimeout(() => btn.classList.remove('text-green-400'), 1200);
        }
    };

    const pluginItems = [
        { key: 'ephemeral', name: 'Ephemeral', desc: 'TTL / rolling-window retention for channels.' },
        { key: 'pow', name: 'PoW Anti‑Spam', desc: 'Small proof-of-work for publishing under load.' },
        { key: 'poc', name: 'Proof‑of‑Compression', desc: 'Rewards compact payloads to prevent griefing.' },
        { key: 'checkpoints', name: 'Checkpoints', desc: 'Periodic CHECKPOINT events for faster auditing.' },
        { key: 'e2ee', name: 'E2EE Envelopes', desc: 'Client encrypts payloads; relay stores opaque blobs.' },
    ];

    return (
        <section id="plugins" className="py-32 bg-[#080808] border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Relay Plugins & Policies</h2>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        CGP's core spec doesn't mandate fees or proofs. Relays advertise features and enforce local policies—letting communities choose their norms.
                    </p>
                </div>

                {/* Plugin Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {pluginItems.map(item => (
                        <div
                            key={item.key}
                            onClick={() => togglePlugin(item.key)}
                            className={`p-6 rounded-xl border cursor-pointer transition-all duration-200 ${plugins[item.key] ? 'bg-cyan-900/10 border-cyan-500/30 shadow-lg shadow-cyan-500/5' : 'bg-[#0A0A0A] border-white/5 hover:bg-[#111] hover:border-white/10'}`}
                        >
                            <div className="flex items-start justify-between mb-3">
                                <h4 className={`font-bold text-lg ${plugins[item.key] ? 'text-cyan-400' : 'text-white'}`}>{item.name}</h4>
                                <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors flex-shrink-0 ${plugins[item.key] ? 'bg-cyan-500 border-cyan-500' : 'border-gray-600'}`}>
                                    {plugins[item.key] && <Check className="w-3.5 h-3.5 text-black" />}
                                </div>
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* HELLO_OK Example */}
                <div className="max-w-2xl mx-auto">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl blur-xl opacity-50"></div>
                        <div className="relative p-8 rounded-2xl bg-[#0F0F0F] border border-white/10 shadow-2xl">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-bold text-white">Capability Negotiation</h3>
                                <Button variant="ghost" id="copyHelloBtn" onClick={copyHello} className="h-8 px-2 text-xs">
                                    <Copy className="w-3 h-3 mr-2" /> Copy
                                </Button>
                            </div>

                            <pre className="p-6 rounded-xl bg-[#050505] border border-white/5 overflow-x-auto font-mono text-sm text-gray-300 leading-relaxed custom-scrollbar"><code>{helloCode}</code></pre>

                            <div className="mt-6 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                                <p className="text-sm text-blue-300 leading-relaxed">
                                    <strong>Note:</strong> Clients automatically route to relays that match a community's required features.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Plugins;
