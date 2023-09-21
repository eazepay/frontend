// require('dotenv').config()

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  injectedWallet,
  rainbowWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { goerli } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { ContextProvider } from "@/context";



export default function App({ Component, pageProps }: AppProps) {
  // const API_KEY = process.env.ALCHEMY_KEY;
  // const PROJECT_ID = process.env.PROJECT_ID;

  const { chains, publicClient, webSocketPublicClient } = configureChains(
    [goerli],
    [
      alchemyProvider({ apiKey: "FVhKzRogIAlI_zgqGdtgyVzZYTL9_yct"}),
      publicProvider(),
    ]
  );

  const { connectors } = getDefaultWallets({
    appName: "Eaze",
    projectId: "8a929aebabc3d63fc70ba30c3405b0dd",
    chains,
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
    publicClient,
    webSocketPublicClient,
  });

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <ContextProvider>
          <Component {...pageProps} />
        </ContextProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
