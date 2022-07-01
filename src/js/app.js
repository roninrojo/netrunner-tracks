// init App
import App from "./clases/app.js";
import Player from "./clases/player.js";

const defaultPlayer = "coorp";

export const player = new Player(defaultPlayer);
export const app = new App(player.type);