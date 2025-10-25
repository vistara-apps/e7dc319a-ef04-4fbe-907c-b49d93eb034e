'use client';

import { useEffect, useState } from 'react';
import { Sparkles, Plus, Users, Zap } from 'lucide-react';
import Link from 'next/link';
import { AgentCard } from './components/AgentCard';
import { ConnectWallet } from './components/ConnectWallet';

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

export default function Home() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="border-b border-white/10 bg-surface/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-fg">AgentForge</h1>
              <p className="text-xs text-fg/60">Your NFT Agent Creator</p>
            </div>
          </div>
          <ConnectWallet />
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-fg mb-4">
            Create Your Unique NFT Agent
          </h2>
          <p className="text-lg text-fg/70 mb-8 max-w-2xl mx-auto">
            Mint, customize, and socially interact with personalized NFT agents on Base.
            Build your digital companion with unique traits and personality.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/create" className="btn-primary inline-flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Create New Agent
            </Link>
            <Link href="/explore" className="btn-secondary inline-flex items-center gap-2">
              <Users className="w-5 h-5" />
              Explore Agents
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-surface rounded-lg p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-fg">1,234</p>
                <p className="text-sm text-fg/60">Agents Created</p>
              </div>
            </div>
          </div>
          <div className="bg-surface rounded-lg p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-fg">856</p>
                <p className="text-sm text-fg/60">Active Users</p>
              </div>
            </div>
          </div>
          <div className="bg-surface rounded-lg p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-fg">5,678</p>
                <p className="text-sm text-fg/60">Interactions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Agents */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-fg mb-6">Featured Agents</h3>
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-surface rounded-agent p-6 border border-white/10 animate-pulse">
                  <div className="w-full h-48 bg-white/10 rounded-lg mb-4"></div>
                  <div className="h-6 bg-white/10 rounded mb-2"></div>
                  <div className="h-4 bg-white/10 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agents.map((agent) => (
                <AgentCard key={agent.id} agent={agent} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-surface/50 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-fg font-semibold">AgentForge</span>
            </div>
            <p className="text-sm text-fg/60">
              Built on Base • Powered by OnchainKit
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
