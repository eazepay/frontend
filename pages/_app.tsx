import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  injectedWallet,
  rainbowWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';

import {ContextProvider} from '../context/index'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  sepolia,
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';


export default function App({ Component, pageProps }: AppProps) {
  const { chains, publicClient } = configureChains(
    [
      sepolia,
    ],
    [
      alchemyProvider({ apiKey: "OX3RapyydEnhd6AdL2nCS68RUpI1pV5t" }),
      publicProvider()
    ]
  );
  
  const { connectors } = getDefaultWallets({
    appName: 'Eaze',
    projectId: '8a929aebabc3d63fc70ba30c3405b0dd',
    chains
  });

  // const connectors = connectorsForWallets([
  //   {
  //     groupName: 'Recommended',
  //     // appName: 'Eaze',
  //     // projectId: 'YOUR_PROJECT_ID',
  //     wallets: [
  //       injectedWallet({ chains }),
  //       rainbowWallet({ chains }),
  //     ],
  //   },
  // ]);

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
  })

  return (
    
    <ContextProvider>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
    </ContextProvider>
    )}
