'use client';

import { useState } from 'react';
import { ArrowLeft, Sparkles, Save } from 'lucide-react';
import Link from 'next/link';
import { PersonaSlider } from '../components/PersonaSlider';

export default function CreateAgent() {
  const [agentName, setAgentName] = useState('');
  const [traits, setTraits] = useState({
    strength: 50,
    intelligence: 50,
    charisma: 50,
    creativity: 50,
  });
  const [isMinting, setIsMinting] = useState(false);

  const handleMint = async () => {
    setIsMinting(true);
    // Simulate minting transaction
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsMinting(false);
    // Redirect to agent page
    window.location.href = '/';
  };

  const totalPoints = Object.values(traits).reduce((sum, val) => sum + val, 0);
  const maxPoints = 300;

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="border-b border-white/10 bg-surface/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-fg hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Back</span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-fg">Create Agent</span>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Agent Preview */}
        <div className="bg-surface rounded-agent p-8 border border-white/10 mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0">
              <div className="w-48 h-48 rounded-lg bg-gradient-to-br from-primary to-base-light flex items-center justify-center text-6xl font-bold text-white">
                {agentName ? agentName.charAt(0).toUpperCase() : '?'}
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-fg mb-4">Agent Preview</h2>
              <div className="space-y-3">
                <div>
                  <label className="text-sm text-fg/60 mb-1 block">Agent Name</label>
                  <input
                    type="text"
                    value={agentName}
                    onChange={(e) => setAgentName(e.target.value)}
                    placeholder="Enter agent name..."
                    className="w-full bg-bg border border-white/10 rounded-lg px-4 py-3 text-fg placeholder:text-fg/40 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="bg-bg rounded-lg p-4 border border-white/10">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-fg/60">Total Points Used</span>
                    <span className={`text-lg font-bold ${totalPoints > maxPoints ? 'text-red-500' : 'text-primary'}`}>
                      {totalPoints} / {maxPoints}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Persona Traits */}
        <div className="bg-surface rounded-agent p-8 border border-white/10 mb-8">
          <h3 className="text-xl font-bold text-fg mb-6 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Virtual Persona
          </h3>
          <div className="space-y-6">
            <PersonaSlider
              label="Strength"
              value={traits.strength}
              onChange={(value) => setTraits({ ...traits, strength: value })}
              color="bg-red-500"
            />
            <PersonaSlider
              label="Intelligence"
              value={traits.intelligence}
              onChange={(value) => setTraits({ ...traits, intelligence: value })}
              color="bg-blue-500"
            />
            <PersonaSlider
              label="Charisma"
              value={traits.charisma}
              onChange={(value) => setTraits({ ...traits, charisma: value })}
              color="bg-purple-500"
            />
            <PersonaSlider
              label="Creativity"
              value={traits.creativity}
              onChange={(value) => setTraits({ ...traits, creativity: value })}
              color="bg-green-500"
            />
          </div>
        </div>

        {/* Mint Button */}
        <div className="flex gap-4">
          <button
            onClick={handleMint}
            disabled={!agentName || totalPoints > maxPoints || isMinting}
            className="flex-1 btn-primary inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isMinting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Minting...
              </>
            ) : (
              <>
                <Save className="w-5 h-5" />
                Mint Agent (Gasless)
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
