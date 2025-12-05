import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import {
  Shield,
  Zap,
  GitFork,
  Database,
  Terminal,
  Globe,
  Server,
  Code2,
  Check,
  X,
  ArrowRight,
  Menu,
  Box
} from 'lucide-react';
import SpecPage from './SpecPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const LandingPage = () => {
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

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-[#050505]/80 backdrop-blur-md border-white/5 py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="CGP Logo" className="w-8 h-8" />
            <span className="font-bold tracking-tight text-white text-lg">Commons Guild <span className="text-gray-500 font-normal">Protocol</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#architecture" className="hover:text-cyan-400 transition-colors">Architecture</a>
            <a href="#comparison" className="hover:text-cyan-400 transition-colors">Comparison</a>
            <a href="#developers" className="hover:text-cyan-400 transition-colors">Developers</a>
            <Link to="/spec" className="text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all border border-white/5">
              Read the Spec
            </Link>
          </div>
          <button className="md:hidden text-gray-300">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative z-10 pt-40 pb-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            DRAFT SPEC 0.1 LIVE
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 mb-6 tracking-tight leading-tight">
            Sovereign Communities. <span className="italic font-serif text-cyan-400">Unstoppable</span> Chat.
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            A tokenless, forkable chat protocol inspired by Bitcoin’s data integrity
            but built for structured communities. No global state. No blockchain fees.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/spec" className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group">
              Start Building
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="px-8 py-4 bg-[#111] text-white border border-white/10 font-medium rounded-lg hover:border-white/30 transition-all flex items-center justify-center gap-2">
              <Terminal className="w-4 h-4 text-gray-400" />
              npm install @cgp/core
            </button>
          </div>
        </div>
      </header>

      {/* Omni-Frontend Concept */}
      <section className="relative z-10 py-24 bg-[#080808] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">One Protocol. <br /><span className="text-cyan-400">Infinite Interfaces.</span></h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                CGP is the foundation. It separates <strong>State</strong> (the signed logs) from <strong>View</strong> (the client).
              </p>
              <ul className="space-y-6">
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">For Gamers</h4>
                    <p className="text-sm text-gray-500">Renders as high-density, dark-mode voice channels.</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">For Families</h4>
                    <p className="text-sm text-gray-500">Renders as simple, encrypted bubbles.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Visual Representation of Omni-Frontend */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-[#0F0F0F] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                <div className="flex border-b border-white/5 bg-[#141414]">
                  <button className="flex-1 py-3 text-xs font-mono text-center border-r border-white/5 text-green-400 bg-green-900/10">MODE: GUILD</button>
                  <button className="flex-1 py-3 text-xs font-mono text-center text-blue-400 bg-blue-900/10">MODE: STREAM</button>
                </div>
                <div className="p-6 h-[300px] flex flex-col justify-between font-mono text-sm relative">
                  {/* Mock Chat Content */}
                  <div className="space-y-4 opacity-50">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                      <div className="space-y-2">
                        <div className="h-2 w-20 bg-gray-700 rounded"></div>
                        <div className="h-2 w-48 bg-gray-800 rounded"></div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                      <div className="space-y-2">
                        <div className="h-2 w-20 bg-gray-700 rounded"></div>
                        <div className="h-2 w-32 bg-gray-800 rounded"></div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Data Badge */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 backdrop-blur border border-cyan-500/30 px-6 py-4 rounded-lg text-center">
                    <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Underlying Data</div>
                    <div className="text-cyan-400 font-bold">Hash: 8f2a...c91b</div>
                    <div className="text-xs text-gray-400">Signed by: 0x71...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Double-Relay Architecture</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We solve the discovery vs. sovereignty paradox by decoupling global discovery from sovereign community hosting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Directory Layer */}
          <div className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6">
              <Globe className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">1. Directory Layer</h3>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Transparency logs that map human handles like <span className="text-purple-300 font-mono">@solarpunk/dao</span> to Guild IDs.
              Maintained by independent operators and verified via Merkle Trees.
            </p>
            <div className="text-xs font-mono text-gray-500 bg-black p-3 rounded border border-white/5">
              GET /lookup?handle=@solarpunk
              <br />
              &gt; &#123; guildId: "0x8a...", relays: ["wss://..."] &#125;
            </div>
          </div>

          {/* Guild Layer */}
          <div className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6">
              <Server className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">2. Guild Layer</h3>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Append-only hash chains storing the actual chat history. Relays are "dumb pipes" that verify signatures
              and sequence events.
            </p>
            <div className="text-xs font-mono text-gray-500 bg-black p-3 rounded border border-white/5">
              wss://relay.node
              <br />
              &lt; ["EVENT", &#123; type: "MESSAGE", sig: "..." &#125;]
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="py-24 bg-[#080808] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why CGP?</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-4 text-gray-400 font-medium text-sm">Feature</th>
                  <th className="p-4 text-cyan-400 font-bold text-lg bg-cyan-900/5">CGP (Commons)</th>
                  <th className="p-4 text-gray-500 font-medium">Federated</th>
                  <th className="p-4 text-gray-500 font-medium">Social Graph</th>
                  <th className="p-4 text-gray-500 font-medium">P2P Gossip</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="p-4 text-gray-300 font-medium">Atomic Unit</td>
                  <td className="p-4 text-white bg-cyan-900/5">Guild (Server)</td>
                  <td className="p-4 text-gray-500">Room</td>
                  <td className="p-4 text-gray-500">Global Feed</td>
                  <td className="p-4 text-gray-500">User Diary</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-300 font-medium">History</td>
                  <td className="p-4 text-white bg-cyan-900/5">Hash Chain Log</td>
                  <td className="p-4 text-gray-500">DAG</td>
                  <td className="p-4 text-gray-500">Merkle Repo</td>
                  <td className="p-4 text-gray-500">Linked List</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-300 font-medium">Forkability</td>
                  <td className="p-4 text-white bg-cyan-900/5 flex items-center gap-2">
                    <Check className="w-4 h-4 text-cyan-400" /> Native (1-Click)
                  </td>
                  <td className="p-4 text-gray-500">Difficult</td>
                  <td className="p-4 text-gray-500">N/A</td>
                  <td className="p-4 text-gray-500">Hard</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-300 font-medium">Token/Coin</td>
                  <td className="p-4 text-white bg-cyan-900/5 flex items-center gap-2">
                    <X className="w-4 h-4 text-green-400" /> None
                  </td>
                  <td className="p-4 text-gray-500">None</td>
                  <td className="p-4 text-gray-500">None</td>
                  <td className="p-4 text-gray-500">None</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section id="developers" className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            {/* Code Block */}
            <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0F0F0F] shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#1A1A1A] border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                <span className="ml-2 text-xs text-gray-500 font-mono">fork.ts</span>
              </div>
              <div className="p-6 overflow-x-auto">
                <pre className="text-sm font-mono leading-relaxed">
                  <span className="text-purple-400">const</span> <span className="text-blue-400">forkEvent</span> = &#123;{'\n'}
                  {'  '}type: <span className="text-green-400">"FORK_FROM"</span>,{'\n'}
                  {'  '}parentGuildId: <span className="text-yellow-400">"0xabc123..."</span>,{'\n'}
                  {'  '}parentSeq: <span className="text-orange-400">4509</span>, <span className="text-gray-500">// Last good block</span>{'\n'}
                  {'  '}note: <span className="text-green-400">"We are the true community."</span>{'\n'}
                  &#125;;{'\n'}{'\n'}
                  <span className="text-gray-500">// Sign & Broadcast to new Relay</span>{'\n'}
                  client.<span className="text-cyan-400">publish</span>(newRelay, forkEvent);
                </pre>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-6">
              <Code2 className="w-3 h-3" />
              DEVELOPER PREVIEW
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Code the Rules. <br />Not the Content.</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              CGP defines the shape of data, but allows individual relays to enforce <strong>"Plugins"</strong>.
              Want a Proof-of-Work anti-spam filter? Or an ephemeral 24-hour log?
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              You don't need to change the protocol. You just write a Relay Plugin that rejects events not meeting your criteria.
            </p>
            <Link to="/spec#plugins" className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2 font-medium">
              Explore the Plugin API <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-[#020202]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="CGP Logo" className="w-6 h-6" />
            <span className="font-bold text-gray-500 text-sm">Commons Guild Protocol</span>
          </div>

          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="/spec" className="hover:text-white transition-colors">Spec</Link>
            <a href="https://github.com/ryanhlewis/commons-guild-protocol" className="hover:text-white transition-colors">Github</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>

          <div className="text-xs text-gray-600">
            Open Source. Sovereign. Forever.
          </div>
        </div>
      </footer>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/spec" element={<SpecPage />} />
      </Routes>
    </Router>
  );
};

export default App;
