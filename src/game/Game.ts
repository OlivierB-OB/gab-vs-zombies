import { Controler } from './Controler';
import { GameLoop } from './GameLoop';
import { ImageManager } from './ImageManager';
import { Player } from './Player';
import { Renderer } from './Renderer';
import { ZombieManager } from './ZombieManager';

export class Game {
  public readonly imageManager = new ImageManager();
  public readonly player = new Player(this.imageManager);
  public readonly zombieManager = new ZombieManager(this.imageManager);
  public readonly renderer = new Renderer(this.player, this.zombieManager);
  public readonly controler = new Controler(this.player);
  public readonly loop = new GameLoop(this.renderer);

  async start(window: Window, canvas: HTMLCanvasElement) {
    await this.imageManager.initialise();
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
