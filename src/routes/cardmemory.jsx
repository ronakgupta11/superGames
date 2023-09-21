
import Phaser from "phaser";
import { useState, useEffect } from "react";
import {Play} from "../scenes/card-memory/Play"
import {Preloader} from "../scenes/card-memory/Preloader"
let game = null;
function CardMemory() {
  const [loaded, setLoaded] = useState(false);
  if (!loaded) {
    setLoaded(true);
    const config = {
      type: Phaser.AUTO,
      gameTitle: "Card Memory",
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
      scene: [ Preloader, Play],
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

export default CardMemory