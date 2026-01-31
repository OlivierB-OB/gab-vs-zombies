import { Player } from './Player';

export class Renderer {
  public canvas: HTMLCanvasElement | null = null;
  public context: CanvasRenderingContext2D | null = null;

  constructor(private readonly player: Player) {}

  start(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
  }

  stop() {
    this.canvas = null;
  }

  refreshView() {
    if (!this.context || !this.canvas) return;
    const width = this.canvas.width;
    const height = this.canvas.height;
    this.context.clearRect(0, 0, width, height);
    this.player.draw(this.context);
  }
}
