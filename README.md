# OnchainKit Appchain Bridge Demo

A demo application demonstrating OnchainKit's Appchain Bridge component, making it easy to move assets between Base and a Base Appchain.

![App Demo](public/appdemo.gif)

## Features

- **Vault Display**: Grid layout showcasing multiple Base vaults with real-time data via [Earn component](https://onchainkit.xyz/earn/earn)
- **Onramp Integration**: Built-in WETH purchase functionality via [Fund component](https://onchainkit.xyz/fund/fund-card)
- **Wallet Connection**: Seamless wallet integration with Coinbase's [WalletDefault component](https://onchainkit.xyz/wallet/wallet)
- **Responsive Design**: Optimized for all screen sizes with elegant dark/light mode support

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- [OnchainKit](https://github.com/coinbase/onchainkit)
- Base Network

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm/yarn
- A Web3 wallet (e.g., Coinbase Wallet)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ock-earn-demo.git
cd ock-earn-demo
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory:
```env
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_project_id
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000` to see the application.

## Components

### EarnComponents
Displays a grid of vaults on Base network, showing:
- APY rates
- Total Value Locked (TVL)
- Deposit/Withdraw functionality

### FundComponents
Provides onramp capabilities:
- Direct WETH purchases
- Multiple currency support
- Region-specific compliance

## Network Support

Currently supports Base mainnet with the following vaults:
- WETH Vault
- USDC Vault
- Other supported assets

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Coinbase](https://coinbase.com) for OnchainKit
- [Base](https://base.org) for network infrastructure
- Community contributors and testers
