
import {  RainbowKitProvider } from "@rainbow-me/rainbowkit";

import { WagmiConfig } from "wagmi";
import Nav from '../components/Nav';
import { Outlet } from "react-router-dom";

import { chains, wagmiConfig } from "../wagmi";

export default function Root() {
    return (

<WagmiConfig config={wagmiConfig}>
    <RainbowKitProvider chains={chains}>

    <div id = "navbar">
        <Nav/>
    </div>
    <div id="main">
        <Outlet/>
    </div>
    </RainbowKitProvider>
</WagmiConfig>

    );
  }