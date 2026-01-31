import { Player } from './Player';

export class Controler {
  public window: Window | null = null;
  private onkeydown = (event: KeyboardEvent) => this.keydownHandler(event);
  private onmousedown = (event: MouseEvent) => this.mousedownHandler(event);
  private onmouseup = (event: MouseEvent) => this.mouseupHandler(event);
  private onmousemove = (event: MouseEvent) => this.mousemoveHandler(event);
  private onwheel = (event: WheelEvent) => this.wheelHandler(event);

  constructor(private readonly player: Player) {}

  start(window: Window) {
    this.window = window;
    this.window.addEventListener('keydown', this.onkeydown);
    this.window.addEventListener('mousedown', this.onmousedown);
    this.window.addEventListener('mouseup', this.onmouseup);
    this.window.addEventListener('mousemove', this.onmousemove);
    this.window.addEventListener('wheel', this.onwheel);
  }

  stop() {
    this.window?.removeEventListener('keydown', this.onkeydown);
    this.window?.removeEventListener('mousedown', this.onmousedown);
    this.window?.removeEventListener('mouseup', this.onmouseup);
    this.window?.removeEventListener('mousemove', this.onmousemove);
    this.window?.removeEventListener('wheel', this.onwheel);
    this.window = null;
  }

  keydownHandler(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowUp':
        console.log('ArrowUp');
        this.player.moveForward();
        break;
      case 'ArrowDown':
        console.log('ArrowDown');
        this.player.moveForward();
        break;
      case 'ArrowLeft':
        console.log('ArrowLeft');
        this.player.moveLeft();
        break;
      case 'ArrowRight':
        console.log('ArrowRight');
        this.player.moveRight();
        break;
    }
  }

  mousedownHandler(event: MouseEvent) {
    console.log('mousedown', event);
  }

  mouseupHandler(event: MouseEvent) {
    console.log('mouseup', event);
  }

  mousemoveHandler(event: MouseEvent) {
    console.log('mousemove', event);
  }

  wheelHandler(event: WheelEvent) {
    console.log('wheel', event);
  }
}
