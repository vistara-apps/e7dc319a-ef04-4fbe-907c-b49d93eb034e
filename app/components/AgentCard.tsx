'use client';

import { Heart, Zap, TrendingUp } from 'lucide-react';
import Link from 'next/link';

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

interface AgentCardProps {
  agent: Agent;
}

export function AgentCard({ agent }: AgentCardProps) {
  return (
    <Link href={`/agent/${agent.id}`}>
      <div className="agent-card bg-surface p-6 cursor-pointer group">
        {/* Agent Avatar */}
        <div className="relative mb-4 overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-base-light/20">
          <div className="aspect-square flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-base-light flex items-center justify-center text-4xl font-bold text-white">
              {agent.name.charAt(0)}
            </div>
          </div>
          <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold text-white">{agent.reputationScore}</span>
          </div>
        </div>

        {/* Agent Info */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-fg mb-1 font-mono tracking-wide">
            {agent.name}
          </h3>
          <p className="text-sm text-fg/60">Owner: {agent.owner}</p>
        </div>

        {/* Traits */}
        <div className="space-y-2 mb-4">
          <TraitBar label="Strength" value={agent.traits.strength} color="bg-red-500" />
          <TraitBar label="Intelligence" value={agent.traits.intelligence} color="bg-blue-500" />
          <TraitBar label="Charisma" value={agent.traits.charisma} color="bg-purple-500" />
          <TraitBar label="Creativity" value={agent.traits.creativity} color="bg-green-500" />
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button className="flex-1 bg-primary/20 hover:bg-primary/30 text-primary rounded-lg py-2 px-4 text-sm font-semibold transition-all flex items-center justify-center gap-2">
            <Heart className="w-4 h-4" />
            Interact
          </button>
          <button className="flex-1 bg-surface hover:bg-white/10 text-fg rounded-lg py-2 px-4 text-sm font-semibold transition-all flex items-center justify-center gap-2 border border-white/10">
            <Zap className="w-4 h-4" />
            Mission
          </button>
        </div>
      </div>
    </Link>
  );
}

function TraitBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div>
      <div className="flex justify-between text-xs text-fg/70 mb-1">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} transition-all duration-500`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
