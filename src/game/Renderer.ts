import { Player } from './Player';

export class Renderer {
  public canvas: HTMLCanvasElement | null = null;
  public context: CanvasRenderingContext2D | null = null;
  public width: number = 0;
  public height: number = 0;

  constructor(private readonly player: Player) {}

  start(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.width = this.canvas.width;
    this.height = this.canvas.height;
  }

  stop() {
    this.canvas = null;
  }

  refreshView() {
    if (!this.context || !this.canvas) return;
    const { width, height } = this;
    this.context.clearRect(0, 0, width, height);

    // draw terrain
    this.context.save();
    this.context.fillStyle = '#008800';
    this.context.fillRect(0, 0, width, height);
    this.context.restore();

    // draw player
    this.context.save();
    this.player.draw(this.context, ([x, y]) => this.getViewCoordinates([x, y]));
    this.context.restore();
  }

  getViewCoordinates([x, y]: [number, number]): [number, number] {
    const { width, height } = this;
    return [x + width / 2, y + height / 2];
  }
}
