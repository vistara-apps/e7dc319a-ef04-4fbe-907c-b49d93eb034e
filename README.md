# AgentForge - Your NFT Agent Creator

Mint, customize, and socially interact with your unique NFT agents on Base.

## Features

- 🎨 **Create Unique Agents**: Mint NFT agents with customizable persona traits
- ⚡ **Gasless Transactions**: Powered by Coinbase Paymaster for seamless UX
- 🤝 **Social Integration**: Share and interact via Farcaster Frames
- 🔗 **Base Network**: Built on Base L2 for fast, low-cost transactions
- 🎯 **OnchainKit**: Leveraging Coinbase's OnchainKit for wallet and identity

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Coinbase Developer Platform account for API keys

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy `.env.local.example` to `.env.local` and add your API keys:
   ```bash
   cp .env.local.example .env.local
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (Ethereum L2)
- **Wallet**: OnchainKit + Wagmi
- **Social**: Farcaster Mini Apps SDK
- **Styling**: Tailwind CSS with Coinbase theme
- **Language**: TypeScript

## Project Structure

```
app/
├── page.tsx              # Home page with featured agents
├── create/               # Agent creation flow
├── agent/[id]/          # Agent detail pages
├── explore/             # Browse all agents
├── components/          # Reusable UI components
└── providers.tsx        # OnchainKit and React Query setup

public/
└── .well-known/
    └── farcaster.json   # Farcaster Mini App manifest
```

## Key Features

### Agent Creation
- Customize persona traits (Strength, Intelligence, Charisma, Creativity)
- Real-time preview of agent appearance
- Gasless minting via Paymaster

### Social Interactions
- Share agents via Farcaster Frames
- Interact with other users' agents
- Co-creation and collaborative missions

### On-chain Identity
- Basename integration for agent naming
- Verifiable traits stored on Base
- Reputation system for social engagement

## Environment Variables

```env
NEXT_PUBLIC_ONCHAINKIT_API_KEY=     # From Coinbase Developer Platform
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID= # From WalletConnect Cloud
NEXT_PUBLIC_BASE_RPC_URL=            # Base mainnet RPC
NEXT_PUBLIC_BASE_TESTNET_RPC_URL=    # Base testnet RPC
```

## Deployment

This app is optimized for deployment on Vercel:

```bash
npm run build
```

Ensure all environment variables are set in your deployment platform.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details

## Resources

- [Base Documentation](https://docs.base.org)
- [OnchainKit Docs](https://onchainkit.xyz)
- [Farcaster Mini Apps](https://miniapps.farcaster.xyz)
- [Next.js Documentation](https://nextjs.org/docs)
