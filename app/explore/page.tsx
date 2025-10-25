'use client';

import { useState, useEffect } from 'react';
import { Search, Filter, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { AgentCard } from '../components/AgentCard';

interface Agent {
  id: string;
  name: string;
  owner: string;
  traits: {
    strength: number;
    intelligence: number;
    charisma: number;
    creativity: number;
  };
  imageUrl: string;
  reputationScore: number;
}

export default function Explore() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Simulate loading agents
    setTimeout(() => {
      setAgents([
        {
          id: '1',
          name: 'CyberSage',
          owner: '0x1234...5678',
          traits: { strength: 75, intelligence: 92, charisma: 68, creativity: 85 },
          imageUrl: '/agents/cybersage.png',
          reputationScore: 1250,
        },
        {
          id: '2',
          name: 'NeonDreamer',
          owner: '0x8765...4321',
          traits: { strength: 60, intelligence: 78, charisma: 95, creativity: 88 },
          imageUrl: '/agents/neondreamer.png',
          reputationScore: 980,
        },
        {
          id: '3',
          name: 'QuantumGuard',
          owner: '0xabcd...efgh',
          traits: { strength: 88, intelligence: 85, charisma: 72, creativity: 65 },
          imageUrl: '/agents/quantumguard.png',
          reputationScore: 1450,
        },
        {
          id: '4',
          name: 'SolarFlare',
          owner: '0xdef0...1234',
          traits: { strength: 82, intelligence: 70, charisma: 88, creativity: 92 },
          imageUrl: '/agents/solarflare.png',
          reputationScore: 1120,
        },
        {
          id: '5',
          name: 'MysticOracle',
          owner: '0x5678...9abc',
          traits: { strength: 55, intelligence: 95, charisma: 78, creativity: 90 },
          imageUrl: '/agents/mysticoracle.png',
          reputationScore: 1380,
        },
        {
          id: '6',
          name: 'TechnoKnight',
          owner: '0x9876...5432',
          traits: { strength: 90, intelligence: 75, charisma: 65, creativity: 70 },
          imageUrl: '/agents/technoknight.png',
          reputationScore: 1290,
        },
      ]);
      setIsLoading(false);
    }, 800);
  }, []);

  const filteredAgents = agents.filter(agent =>
    agent.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="border-b border-white/10 bg-surface/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-fg hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Back</span>
          </Link>
          <h1 className="text-xl font-bold text-fg">Explore Agents</h1>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Search and Filter */}
        <div className="mb-8 flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-fg/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search agents..."
              className="w-full bg-surface border border-white/10 rounded-lg pl-12 pr-4 py-3 text-fg placeholder:text-fg/40 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <button className="btn-secondary inline-flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Filter
          </button>
        </div>

        {/* Agents Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-surface rounded-agent p-6 border border-white/10 animate-pulse">
                <div className="w-full h-48 bg-white/10 rounded-lg mb-4"></div>
                <div className="h-6 bg-white/10 rounded mb-2"></div>
                <div className="h-4 bg-white/10 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        ) : filteredAgents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAgents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-fg/60 text-lg">No agents found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
