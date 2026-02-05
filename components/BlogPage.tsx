import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Share2, Tag, ChevronRight } from 'lucide-react';

interface BlogPost {
  id: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  content: React.ReactNode;
}

const BlogPage: React.FC = () => {
  const [activePost, setActivePost] = useState<string | null>(null);

  const handleRestricted = () => {
    window.dispatchEvent(new CustomEvent('show-toast', { detail: { message: "Feature available in full member version." } }));
  };

  const handleConsultation = () => {
    window.dispatchEvent(new CustomEvent('navigate', { detail: 'contact' }));
  };

  const posts: BlogPost[] = [
    {
      id: 'unidirectional',
      category: 'SOVEREIGN HAZE',
      date: 'OCT 14, 2024',
      readTime: '8 MIN READ',
      title: 'Unidirectional Connectivity: The End of SOC Cost Inflation',
      excerpt: "Why traditional monitoring burns budget on false positives and how physical isolation restores economic sanity to cyber defense.",
      content: (
        <div className="relative space-y-8 text-slate-300 leading-relaxed font-sans text-lg">
          
          <p className="font-serif text-xl italic text-slate-400 border-l-2 border-neon-purple pl-6 relative z-10">
            "We have spent the last decade building faster alarms for fires we allow to start. It is time to build walls that fire cannot cross."
          </p>
          
          <h3 className="font-serif text-2xl text-white font-bold mt-8 mb-4 relative z-10">The Infinite Loop of Detection</h3>
          <p className="relative z-10">
            The modern Security Operations Center (SOC) is an economic failure. The premise is seductive: ingest all logs, apply machine learning, detect the anomaly, and respond before impact. In practice, this model creates a <strong>cost-asymmetry</strong> that favors the attacker.
          </p>
          <p className="relative z-10">
            For every $1 the attacker spends on obfuscation, the defender spends $100 on ingestion, storage, correlation, and analyst fatigue. We are trying to find a needle in a haystack, but we are also paying for the storage of the hay.
          </p>

          <h3 className="font-serif text-2xl text-white font-bold mt-8 mb-4 relative z-10">The Physics of the Data Diode</h3>
          <p className="relative z-10">
            TripleDefence advocates for a return to physics. <strong>Unidirectional Gateways (Data Diodes)</strong> are not new, but their application in commercial compliance is the paradigm shift required by the Cyber Resilience Act.
          </p>
          <p className="relative z-10">
            A data diode enforces a simple physical law: light can flow in only one direction. By placing a diode between the Critical Manufacturing Zone (OT) and the Corporate Network (IT), we achieve two absolute truths:
          </p>
          <ul className="list-disc pl-6 space-y-2 marker:text-neon-purple relative z-10">
            <li><strong>Visibility is preserved:</strong> Performance data, logs, and telemetry flow out to the cloud for analysis.</li>
            <li><strong>Control is isolated:</strong> No packet, no matter how malicious, can physically travel back into the OT network to execute a command.</li>
          </ul>

          <h3 className="font-serif text-2xl text-white font-bold mt-8 mb-4 relative z-10">Economic Sanity</h3>
          <p className="relative z-10">
            When the "return path" is physically severed, the definition of a "threat" changes. We no longer care about a malware infection in the monitoring layer because it cannot laterally move to the control layer.
          </p>
          <p className="relative z-10">
            This eliminates 90% of Tier-1 SOC alerts related to OT. We stop paying analysts to triage false positives on the edge, because the edge can no longer kill the core. This is not just security; it is <strong>Inflation Control</strong> for the CISO's budget.
          </p>
          
          <div className="bg-slate-900/50 p-6 rounded-lg border border-white/5 mt-8 relative z-10 backdrop-blur-sm">
            <h4 className="font-serif text-white font-bold mb-2">The Doctrine Conclusion</h4>
            <p className="text-sm">
              Stop trying to out-think the attacker with software. Out-build them with architecture.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'sharepoint',
      category: 'COMPLIANCE',
      date: 'SEP 28, 2024',
      readTime: '5 MIN READ',
      title: 'Why SharePoint is a Liability in the CRA Era',
      excerpt: "The architectural flaws of collaborative platforms when facing strict Article 14 reporting requirements and data sovereignty mandates.",
      content: (
        <div className="space-y-6 text-slate-300 leading-relaxed font-sans text-lg">
          <p><em>Access Restricted to Full Member status. Please contact sales to unlock the full Intelligence Feed.</em></p>
        </div>
      )
    },
    {
      id: 'byzantine',
      category: 'TECHNICAL',
      date: 'AUG 02, 2024',
      readTime: '12 MIN READ',
      title: 'The Byzantine Fault Problem in Modern Detection Systems',
      excerpt: "Mathematical proof that probabilistic detection cannot guarantee security in distributed critical infrastructure.",
      content: (
        <div className="space-y-6 text-slate-300 leading-relaxed font-sans text-lg">
          <p><em>Access Restricted to Full Member status. Please contact sales to unlock the full Intelligence Feed.</em></p>
        </div>
      )
    }
  ];

  const currentPost = posts.find(p => p.id === activePost);

  return (
    <div className="relative min-h-screen pt-32 pb-24 px-6 bg-charcoal overflow-hidden">
      
      {/* "Haze" Gradient Effect */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,rgba(139,92,246,0.03)_100%)]" />
      <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-transparent via-transparent to-neon-purple/5 opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        <AnimatePresence mode="wait">
          {!activePost ? (
            /* FEED VIEW */
            <motion.div
              key="feed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Back to Home Button */}
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'home' }))}
                className="group flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors mb-12 font-mono uppercase tracking-widest"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </button>

              {/* Header */}
              <div className="border-b border-white/10 pb-12 mb-16 relative">
                <span className="font-mono text-xs text-neon-purple font-bold tracking-widest uppercase mb-4 block">
                  TripleDefence Knowledge Base
                </span>
                <h1 className="font-serif text-5xl md:text-7xl text-white font-bold mb-6 tracking-tight">
                  Executive Insights
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl font-light">
                  Deep dives into sovereign architecture, CRA doctrine, and the economics of defense.
                </p>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, idx) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => setActivePost(post.id)}
                    className="group cursor-pointer flex flex-col h-full bg-[#050505] border border-white/10 hover:border-neon-purple/50 transition-all duration-300 p-8 rounded-sm relative overflow-hidden"
                  >
                    {/* Card Haze Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 flex justify-between items-center mb-6">
                      <span className={`px-2 py-1 bg-white/5 text-[10px] font-mono font-bold tracking-widest uppercase rounded ${post.category === 'SOVEREIGN HAZE' ? 'text-neon-purple border border-neon-purple/20' : 'text-slate-400'}`}>
                        {post.category}
                      </span>
                      <span className="text-[10px] font-mono text-slate-600 uppercase">
                        {post.date}
                      </span>
                    </div>

                    <h2 className="relative z-10 font-serif text-2xl text-white font-bold leading-tight mb-4 group-hover:text-neon-purple transition-colors">
                      {post.title}
                    </h2>

                    <p className="relative z-10 text-slate-400 text-sm leading-relaxed mb-8 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="relative z-10 mt-auto flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                      Read Article <ChevronRight size={14} className="text-neon-purple" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            /* ARTICLE VIEW */
            <motion.div
              key="article"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              {/* Back Button */}
              <button 
                onClick={() => setActivePost(null)}
                className="group flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors mb-12 font-mono uppercase tracking-widest"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Back to Intelligence
              </button>

              {/* Article Header */}
              <header className="mb-12 border-b border-white/10 pb-12 relative">
                <div className="flex flex-wrap gap-4 mb-8 text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">
                  <span className={currentPost?.category === 'SOVEREIGN HAZE' ? 'text-neon-purple' : ''}>[{currentPost?.category}]</span>
                  <span className="flex items-center gap-2"><Calendar size={12} /> {currentPost?.date}</span>
                  <span className="flex items-center gap-2"><Clock size={12} /> {currentPost?.readTime}</span>
                </div>
                
                <h1 className="font-serif text-4xl md:text-6xl text-white font-bold leading-tight mb-8">
                  {currentPost?.title}
                </h1>

                <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed">
                  {currentPost?.excerpt}
                </p>
              </header>

              {/* Article Content */}
              <article className="prose prose-invert prose-lg max-w-none">
                {currentPost?.content}
              </article>

              {/* Article Footer */}
              <div className="mt-20 pt-10 border-t border-white/10 flex justify-between items-center">
                <div className="flex gap-2">
                  <button onClick={handleRestricted} className="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-400 hover:bg-white/10 transition-colors">#CRA</button>
                  <button onClick={handleRestricted} className="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-400 hover:bg-white/10 transition-colors">#Architecture</button>
                  <button onClick={handleRestricted} className="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-400 hover:bg-white/10 transition-colors">#Sovereignty</button>
                </div>
                <button onClick={handleRestricted} className="text-slate-500 hover:text-white transition-colors">
                  <Share2 size={20} />
                </button>
              </div>

              {/* Next Read CTA */}
              <div className="mt-16 p-8 bg-[#050505] border border-white/10 rounded-sm text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-neon-purple/5 opacity-50" />
                <div className="relative z-10">
                    <h4 className="font-serif text-2xl text-white mb-4">Ready to implement this doctrine?</h4>
                    <button 
                    onClick={handleConsultation}
                    className="px-8 py-3 bg-neon-purple text-white text-sm font-bold tracking-widest uppercase hover:bg-neon-purple/80 transition-colors"
                    >
                    Schedule Consultation
                    </button>
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default BlogPage;