
import {  RainbowKitProvider } from "@rainbow-me/rainbowkit";

import { WagmiConfig } from "wagmi";
import Nav from '../components/Nav';
import { Outlet } from "react-router-dom";

import { chains, wagmiConfig } from "../wagmi";
import { createReactClient, studioProvider,  LivepeerConfig } from '@livepeer/react';
const client = createReactClient({
    provider: studioProvider({ apiKey: '29d3b6bc-523c-46bc-86e6-8a6d1fe02207' }),
  })

export default function Root() {
    return (

<WagmiConfig config={wagmiConfig}>
    <RainbowKitProvider chains={chains}>
    <LivepeerConfig client={client}>

    <div id = "navbar">
        <Nav/>
    </div>
    <div id="main">
        <Outlet/>
    </div>
    </LivepeerConfig>
    </RainbowKitProvider>
</WagmiConfig>

    );
  }