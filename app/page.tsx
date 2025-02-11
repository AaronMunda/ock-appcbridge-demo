'use client';

import { WalletDefault } from '@coinbase/onchainkit/wallet';
import EarnComponents from './components/EarnComponents';
import FundComponents from './components/FundComponents';
import { useState } from 'react';

export default function App() {
  const [showFundCard, setShowFundCard] = useState(false);

  return (
    <div className="flex flex-col min-h-screen font-sans dark:bg-background dark:text-white bg-white text-black">
      <header className="w-full border-b border-white/10">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex flex-col w-full sm:w-auto">
            <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-0">
              Top Vaults on Base
            </h1>
            <nav className="flex flex-col w-full gap-2 sm:hidden">
              <a 
                href="https://onchainkit.xyz/earn/earn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm hover:text-gray-500 transition-colors w-full text-center py-2"
              >
                Docs
              </a>
              <div className="relative w-full">
                <button 
                  type="button"
                  onClick={() => setShowFundCard(!showFundCard)}
                  className="text-sm flex items-center gap-2 px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 w-full justify-between"
                >
                  <div className="flex items-center gap-2">
                    <svg 
                      className="w-4 h-4" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor"
                      role="img"
                      aria-labelledby="currencyIcon"
                    >
                      <title id="currencyIcon">Currency icon</title>
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1} 
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="font-medium">Buy USDC</span>
                  </div>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${showFundCard ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    role="img"
                    aria-labelledby="onrampToggleTitle"
                  >
                    <title id="onrampToggleTitle">Toggle onramp</title>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showFundCard && (
                  <div className="fixed sm:absolute left-2 sm:left-auto right-2 sm:right-0 top-auto mt-2 w-[calc(100%-16px)] sm:w-[400px] z-[100] rounded-lg overflow-hidden shadow-lg">
                    <FundComponents />
                  </div>
                )}
              </div>
              <a
                href="https://github.com/coinbase/onchainkit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-4 w-4 fill-current"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                <span className="font-medium">Star on GitHub</span>
              </a>
              <div className="wallet-container w-full">
                <WalletDefault />
              </div>
            </nav>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center space-x-6">
            <a 
              href="https://onchainkit.xyz/earn/earn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm hover:text-gray-500 transition-colors"
            >
              Docs
            </a>
            <div className="relative">
              <button 
                type="button"
                onClick={() => setShowFundCard(!showFundCard)}
                className="text-sm flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
              >
                <div className="flex items-center gap-2">
                  <svg 
                    className="w-5 h-5" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor"
                    role="img"
                    aria-labelledby="currencyIcon"
                  >
                    <title id="currencyIcon">Currency icon</title>
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1} 
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="font-medium">Buy USDC</span>
                </div>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${showFundCard ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-labelledby="onrampToggleTitle"
                >
                  <title id="onrampToggleTitle">Toggle onramp</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showFundCard && (
                <div className="fixed sm:absolute left-2 sm:left-auto right-2 sm:right-0 top-auto mt-2 w-[calc(100%-16px)] sm:w-[400px] z-[100] rounded-lg overflow-hidden shadow-lg">
                  <FundComponents />
                </div>
              )}
            </div>
            <a
              href="https://github.com/coinbase/onchainkit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5 fill-current"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              <span className="text-sm font-medium">Star on GitHub</span>
            </a>
            <div className="wallet-container">
              <WalletDefault />
            </div>
          </nav>
        </div>
      </header>
      
      <main className="flex-grow p-2 sm:p-4">
        <EarnComponents />
      </main>
    </div>
  );
}
