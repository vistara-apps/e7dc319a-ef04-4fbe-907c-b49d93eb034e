'use client';

import { useState } from 'react';
import { Wallet } from 'lucide-react';

export function ConnectWallet() {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState('');

  const handleConnect = () => {
    // Simulate wallet connection
    setIsConnected(true);
    setAddress('0x1234...5678');
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setAddress('');
  };

  if (isConnected) {
    return (
      <button
        onClick={handleDisconnect}
        className="flex items-center gap-2 bg-surface hover:bg-white/10 text-fg rounded-lg px-4 py-2 text-sm font-semibold transition-all border border-white/10"
      >
        <div className="w-2 h-2 rounded-full bg-green-500"></div>
        {address}
      </button>
    );
  }

  return (
    <button
      onClick={handleConnect}
      className="btn-primary inline-flex items-center gap-2"
    >
      <Wallet className="w-4 h-4" />
      Connect Wallet
    </button>
  );
}
