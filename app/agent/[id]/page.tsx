'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, Heart, Zap, Share2, Settings2, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

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
  description: string;
  interactions: number;
  missions: number;
}

export default function AgentDetail() {
  const params = useParams();
  const [agent, setAgent] = useState<Agent | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading agent data
    setTimeout(() => {
      setAgent({
        id: params.id as string,
        name: 'CyberSage',
        owner: '0x1234...5678',
        traits: { strength: 75, intelligence: 92, charisma: 68, creativity: 85 },
        imageUrl: '/agents/cybersage.png',
        reputationScore: 1250,
        description: 'A wise digital companion with exceptional intelligence and creative problem-solving abilities.',
        interactions: 234,
        missions: 45,
      });
      setIsLoading(false);
    }, 500);
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!agent) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-fg mb-4">Agent not found</h2>
          <Link href="/" className="btn-primary">
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="border-b border-white/10 bg-surface/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-fg hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Back</span>
          </Link>
          <Link href={`/agent/${agent.id}/customize`} className="btn-secondary inline-flex items-center gap-2">
            <Settings2 className="w-4 h-4" />
            Customize
          </Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Agent Visual */}
          <div className="bg-surface rounded-agent p-8 border border-white/10">
            <div className="relative mb-6">
              <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-base-light/20 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary to-base-light flex items-center justify-center text-8xl font-bold text-white">
                  {agent.name.charAt(0)}
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-white">{agent.reputationScore}</span>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 btn-primary inline-flex items-center justify-center gap-2">
                <Heart className="w-5 h-5" />
                Interact
              </button>
              <button className="flex-1 btn-secondary inline-flex items-center justify-center gap-2">
                <Zap className="w-5 h-5" />
                Mission
              </button>
              <button className="btn-secondary inline-flex items-center justify-center">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Agent Info */}
          <div className="space-y-6">
            <div className="bg-surface rounded-agent p-8 border border-white/10">
              <h1 className="text-3xl font-bold text-fg mb-2 font-mono tracking-wide">
                {agent.name}
              </h1>
              <p className="text-fg/60 mb-4">Owned by {agent.owner}</p>
              <p className="text-fg/80 leading-relaxed">{agent.description}</p>
            </div>

            <div className="bg-surface rounded-agent p-8 border border-white/10">
              <h2 className="text-xl font-bold text-fg mb-6">Persona Traits</h2>
              <div className="space-y-4">
                <TraitDisplay label="Strength" value={agent.traits.strength} color="bg-red-500" />
                <TraitDisplay label="Intelligence" value={agent.traits.intelligence} color="bg-blue-500" />
                <TraitDisplay label="Charisma" value={agent.traits.charisma} color="bg-purple-500" />
                <TraitDisplay label="Creativity" value={agent.traits.creativity} color="bg-green-500" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface rounded-agent p-6 border border-white/10">
                <p className="text-fg/60 text-sm mb-1">Interactions</p>
                <p className="text-3xl font-bold text-primary">{agent.interactions}</p>
              </div>
              <div className="bg-surface rounded-agent p-6 border border-white/10">
                <p className="text-fg/60 text-sm mb-1">Missions</p>
                <p className="text-3xl font-bold text-primary">{agent.missions}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TraitDisplay({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div>
      <div className="flex justify-between text-sm text-fg/70 mb-2">
        <span className="font-semibold">{label}</span>
        <span className="font-bold text-primary">{value}%</span>
      </div>
      <div className="h-3 bg-white/10 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} transition-all duration-500`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
