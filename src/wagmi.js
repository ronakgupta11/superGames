
import {
  getDefaultWallets,

} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
  baseGoerli
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

export const { chains, publicClient,webSocketPublicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora,baseGoerli],
  [
    
    publicProvider()
  ]
);
const { connectors } = getDefaultWallets({
  appName: 'SuperGames',
  projectId: '7270b28730bd3116e24f7a5aab9a6e8f',
  chains
});
export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})
