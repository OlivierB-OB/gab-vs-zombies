import { Controler } from './Controler';
import { GameLoop } from './GameLoop';
import { Player } from './Player';
import { Renderer } from './Renderer';

export class Game {
  public readonly player: Player = new Player();
  public readonly renderer: Renderer = new Renderer(this.player);
  public readonly controler: Controler = new Controler(this.player);
  public readonly loop: GameLoop = new GameLoop(this.renderer);

  start(window: Window, canvas: HTMLCanvasElement) {
    this.controler.start(window);
    this.renderer.start(canvas);
    this.loop.start();
  }

  stop() {
    this.controler.stop();
    this.renderer.stop();
    this.loop.stop();
  }
}
