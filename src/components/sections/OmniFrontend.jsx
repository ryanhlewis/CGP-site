import React, { useState } from 'react';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

const OmniFrontend = () => {
    const [uiMode, setUiMode] = useState('guild');
    const [activeItem, setActiveItem] = useState(uiMode === 'chat' ? 'Ada' : 'protocol');

    const isChat = uiMode === 'chat';

    // Update active item when mode changes if needed
    React.useEffect(() => {
        setActiveItem(isChat ? 'Ada' : 'protocol');
    }, [isChat]);

    const leftItems = isChat ? [
        { id: 'Ada', sub: 'E2EE optional • pubkey identity', right: 'now' },
        { id: 'Builders', sub: 'Guild channel rendered as chat list', right: '2m' },
        { id: 'Relays', sub: 'Policy negotiation via HELLO_OK', right: '1h' },
        { id: 'Fork Club', sub: 'Splits are explicit & auditable', right: 'yday' }
    ] : [
        { id: 'protocol', sub: 'Append‑only events • signed history', right: '128' },
        { id: 'governance', sub: 'Forks • bans • roles • checkpoints', right: '64' },
        { id: 'ephemeral', sub: 'TTL channels • rolling windows', right: '24' },
        { id: 'relays', sub: 'Open operators • optional policies', right: '12' }
    ];

    const currentTitle = isChat ? activeItem : `# ${activeItem}`;
    const currentSub = isChat ? "Same protocol objects, different presentation." : leftItems.find(i => i.id === activeItem)?.sub;

    return (
        <section id="omni" className="py-32 border-t border-white/5 bg-[#080808]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Omni‑Frontend</h2>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            CGP doesn’t dictate UI. The same underlying objects (guilds/channels/messages) can render as a server‑centric layout,
                            a direct-message layout, or anything in between.
                        </p>
                    </div>

                    {/* Local UI Mode Switcher */}
                    <div className="bg-[#111] p-1 rounded-lg border border-white/10 flex flex-shrink-0">
                        <button
                            onClick={() => setUiMode('guild')}
                            className={`px-5 py-2.5 rounded-md text-sm font-medium transition-all ${!isChat ? 'bg-cyan-500/10 text-cyan-400 shadow-sm' : 'text-gray-500 hover:text-gray-300'}`}
                        >
                            Guild Mode
                        </button>
                        <button
                            onClick={() => setUiMode('chat')}
                            className={`px-5 py-2.5 rounded-md text-sm font-medium transition-all ${isChat ? 'bg-blue-500/10 text-blue-400 shadow-sm' : 'text-gray-500 hover:text-gray-300'}`}
                        >
                            Stream Mode
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
                    {/* Interactive Mock UI */}
                    <div className="rounded-xl border border-white/10 bg-[#0F0F0F] shadow-2xl overflow-hidden relative">
                        {/* Mock Window Header */}
                        <div className="flex items-center justify-between gap-4 p-4 border-b border-white/5 bg-[#141414]">
                            <div className="flex items-center gap-3 min-w-[200px]">
                                <div className="flex gap-2">
                                    <span className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30"></span>
                                    <span className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/30"></span>
                                    <span className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/30"></span>
                                </div>
                                <div className="font-mono text-sm text-gray-400">{isChat ? 'Commons Chat' : 'Commons Guild'}</div>
                            </div>
                            <div className="text-xs font-mono text-gray-600 flex gap-4">
                                <span>Directory: 3/5</span>
                                <span>Relays: 2</span>
                            </div>
                        </div>

                        <div className={`grid ${isChat ? 'grid-cols-[280px_1fr]' : 'grid-cols-[70px_240px_1fr]'} min-h-[500px] max-md:grid-cols-[70px_1fr]`}>
                            {/* Servers Pane - Hidden in Chat Mode */}
                            {!isChat && (
                                <div className="border-r border-white/5 bg-[#0A0A0A] max-md:hidden flex flex-col items-center py-4 gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 grid place-items-center font-bold text-black shadow-lg shadow-cyan-500/20 cursor-pointer">CG</div>
                                    <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-white/5 grid place-items-center font-bold text-gray-500 hover:text-gray-300 hover:bg-[#222] transition-colors cursor-pointer">F2</div>
                                    <div className="w-8 h-[1px] bg-white/10 my-1"></div>
                                    <div className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-dashed border-white/20 grid place-items-center text-gray-600 hover:text-gray-400 hover:border-white/40 transition-all cursor-pointer">+</div>
                                </div>
                            )}

                            {/* Channels/Chats Pane */}
                            <div className="border-r border-white/5 bg-[#0F0F0F] max-md:hidden">
                                <div className="p-4 border-b border-white/5 text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center justify-between">
                                    {isChat ? 'Chats' : 'Channels'} <Badge variant="neutral">{isChat ? 'omni' : 'log'}</Badge>
                                </div>
                                <div className="p-2 flex flex-col gap-1">
                                    {leftItems.map(item => (
                                        <div
                                            key={item.id}
                                            onClick={() => setActiveItem(item.id)}
                                            className={`p-3 rounded-lg flex items-center justify-between gap-3 cursor-pointer transition-all ${activeItem === item.id ? 'bg-white/5 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-gray-300'}`}
                                        >
                                            <div className="overflow-hidden">
                                                <div className="font-medium truncate">{item.id}</div>
                                                <div className="text-xs text-gray-600 truncate mt-0.5">{item.sub}</div>
                                            </div>
                                            <div className="text-xs font-mono text-gray-700 whitespace-nowrap">{item.right}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Message Pane */}
                            <div className="bg-[#111] flex flex-col col-span-1 max-md:col-span-2 relative">
                                {/* Chat Header */}
                                <div className="p-4 border-b border-white/5 flex items-center justify-between bg-[#141414]">
                                    <div>
                                        <div className="font-bold text-white flex items-center gap-2">
                                            {currentTitle}
                                            {isChat && <span className="w-2 h-2 rounded-full bg-green-500"></span>}
                                        </div>
                                        <div className="text-xs text-gray-500 truncate max-w-[300px]">{currentSub}</div>
                                    </div>
                                    <div className="flex gap-2">
                                        <Button variant="ghost" className="h-8 px-3 text-xs">Search</Button>
                                        <Button variant="ghost" className="h-8 px-3 text-xs">Pins</Button>
                                    </div>
                                </div>

                                {/* Chat Area */}
                                <div className="p-6 flex flex-col gap-6 flex-1 overflow-y-auto custom-scrollbar">
                                    <div className="flex gap-4 max-w-[85%]">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex-shrink-0"></div>
                                        <div>
                                            <div className="flex items-baseline gap-2 mb-1">
                                                <span className="font-bold text-white text-sm">alice.eth</span>
                                                <span className="text-xs text-gray-600 font-mono">09:41 AM</span>
                                            </div>
                                            <div className="p-3 rounded-2xl rounded-tl-none bg-[#1A1A1A] border border-white/5 text-gray-300 text-sm leading-relaxed shadow-sm">
                                                <div className="text-[10px] font-mono text-gray-600 mb-2 border-b border-white/5 pb-1">seq: 128 • id: 9c3e...</div>
                                                CGP keeps the standard minimal: it specifies logs + signatures + proofs, but leaves policies to communities.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 max-w-[85%] ml-auto flex-row-reverse">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 flex-shrink-0"></div>
                                        <div className="text-right">
                                            <div className="flex items-baseline gap-2 mb-1 justify-end">
                                                <span className="text-xs text-gray-600 font-mono">09:42 AM</span>
                                                <span className="font-bold text-white text-sm">bob.sol</span>
                                            </div>
                                            <div className="p-3 rounded-2xl rounded-tr-none bg-cyan-900/10 border border-cyan-500/20 text-cyan-100 text-sm leading-relaxed shadow-sm text-left">
                                                <div className="text-[10px] font-mono text-cyan-700 mb-2 border-b border-cyan-500/10 pb-1">seq: 129 • id: 41ad...</div>
                                                Exactly. Want PoW anti‑spam? Run a relay policy plugin. Don’t want it? Choose another relay.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 max-w-[85%]">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex-shrink-0"></div>
                                        <div>
                                            <div className="flex items-baseline gap-2 mb-1">
                                                <span className="font-bold text-white text-sm">alice.eth</span>
                                                <span className="text-xs text-gray-600 font-mono">09:45 AM</span>
                                            </div>
                                            <div className="p-3 rounded-2xl rounded-tl-none bg-[#1A1A1A] border border-white/5 text-gray-300 text-sm leading-relaxed shadow-sm">
                                                <div className="text-[10px] font-mono text-gray-600 mb-2 border-b border-white/5 pb-1">seq: 130 • id: 0d22...</div>
                                                And forks are explicit — no shadow moderation. Competing histories stay visible.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Input Area */}
                                <div className="p-4 border-t border-white/5 bg-[#141414]">
                                    <div className="bg-[#0A0A0A] border border-white/10 rounded-lg p-3 flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-white/10 grid place-items-center text-gray-500 text-xs cursor-pointer hover:bg-white/20">+</div>
                                        <div className="flex-1 text-gray-500 text-sm">Type a message...</div>
                                        <div className="text-xs font-bold text-cyan-600 cursor-pointer hover:text-cyan-400">SEND</div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                    {/* Context / Explanation */}
                    <div className="flex flex-col gap-8">
                        <div className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/5">
                            <h3 className="text-xl font-bold text-white mb-4">Protocol ≠ Product</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                "Omni‑frontend" means you can ship multiple branded experiences without forking the protocol.
                                A guild can feel like a community server, a private chat list, or a minimalist feed—while staying compatible at the data layer.
                            </p>
                            <ul className="space-y-4 text-sm text-gray-400">
                                <li className="flex gap-3">
                                    <span className="text-cyan-400 mt-0.5">•</span>
                                    <span><strong>Guild View</strong>: Sidebar hierarchy, channels, roles, mod events front-and-center.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-blue-400 mt-0.5">•</span>
                                    <span><strong>Stream View</strong>: Chat list + conversation pane (still backed by guild/channel events).</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-purple-400 mt-0.5">•</span>
                                    <span><strong>Power-User View</strong>: Raw log view, checkpoints, forks, proofs, relay policies.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-900/10 to-blue-900/10 border border-cyan-500/10">
                            <div className="text-cyan-400 font-bold mb-2">Key Concept</div>
                            <p className="text-cyan-100/80 text-sm leading-relaxed">
                                CGP standardizes <em>what happened</em> (the log); your frontend decides <em>how it feels</em> (the view).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OmniFrontend;
