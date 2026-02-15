import { ImageManager } from './ImageManager';
import { Zombie } from './Zombie';

export class ZombieManager {
  private zombies: Zombie[];

  constructor(imageManager: ImageManager) {
    this.zombies = Array.from(
      Array(5000),
      () =>
        new Zombie(
          imageManager,
          [Math.random() * 500 - 250, Math.random() * 500 - 250],
          Math.floor(Math.random() * 360)
        )
    );
  }

  draw(
    ctx: CanvasRenderingContext2D,
    getViewCoordinates: ([x, y]: [number, number]) => [number, number]
  ) {
    for (const zombie of this.zombies) {
      zombie.draw(ctx, getViewCoordinates);
    }
  }
}
