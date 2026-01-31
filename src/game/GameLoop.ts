import { Renderer } from './Renderer';

export class GameLoop {
  isRunning = false;
  animationFrame: number | null = null;

  constructor(private readonly renderer: Renderer) {}

  start() {
    this.isRunning = true;
    this.tick();
  }

  stop() {
    if (this.animationFrame) cancelAnimationFrame(this.animationFrame);
    this.animationFrame = null;
    this.isRunning = false;
  }

  tick() {
    if (!this.isRunning) return;
    this.renderer.refreshView();
    this.animationFrame = requestAnimationFrame(() => this.tick());
  }
}
