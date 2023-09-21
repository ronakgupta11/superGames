

import Phaser from "phaser";


import { useState, useEffect } from "react";
import Boot from "../scenes/bank-panik/Boot";
import Preloader from "../scenes/bank-panik/Preloader";
import MainGame from "../scenes/bank-panik/Game";
import MainMenu from "../scenes/bank-panik/MainMenu";

let game = null;
function Bankpanic() {
  const [loaded, setLoaded] = useState(false);
  if (!loaded) {
    setLoaded(true);
    const config = {
      type: Phaser.AUTO,
      gameTitle: "P2E Bank Panic | Phaser x Moralis",
      parent: "game-container",
      autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
      autoFocus: true,
      fps: {
        target: 60,
      },
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 200 },
          debug: false,
        },
      },
      backgroundColor: "#282c34",
      scale: {
        mode: Phaser.Scale.ScaleModes.NONE,
      },
      scene: [Boot, Preloader, MainMenu, MainGame],
    };
    // init 2d game (Phaser canvas element)
    if (game === null) {
      // init instance of phaser game as per config
      game = new Phaser.Game(config);

      // console.log(Store);
      // const unsubscribe = Store.subscribe(() => handleStateChange());
    }
  }
  return (
<>

</>
  )
}

export default Bankpanic
