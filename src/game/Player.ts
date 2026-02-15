import { HandGun } from './HandGun';
import { ImageManager } from './ImageManager';

export class Player {
  public position: [number, number] = [0, 0];
  public azimuth: number = 0;
  public speed: number = 5;
  public rotationSpeed: number = 3;
  public currentWeapon: HandGun = new HandGun();

  constructor(private readonly imageManager: ImageManager) {}

  moveForward() {
    const angle = this.capAngle(this.azimuth - 90);
    this.position = this.nextPosition(this.position, angle);
  }

  moveBackward() {
    const angle = this.capAngle(this.azimuth + 90);
    this.position = this.nextPosition(this.position, angle);
  }

  moveLeft() {
    const angle = this.capAngle(this.azimuth + 180);
    this.position = this.nextPosition(this.position, angle);
  }

  moveRight() {
    const angle = this.capAngle(this.azimuth);
    this.position = this.nextPosition(this.position, angle);
  }

  turnLeft() {
    this.setAzimuth(this.azimuth - this.rotationSpeed);
  }

  turnRight() {
    this.setAzimuth(this.azimuth + this.rotationSpeed);
  }

  draw(
    ctx: CanvasRenderingContext2D,
    getViewCoordinates: ([x, y]: [number, number]) => [number, number]
  ) {
    const [x, y] = getViewCoordinates(this.position);
    ctx.translate(x, y);
    ctx.rotate(this.degreeToRad(this.azimuth));
    this.currentWeapon.draw(ctx);
    const playerHandgunImg = this.imageManager.getImage('player-handgun');
    ctx.drawImage(playerHandgunImg, -25, -70, 50, 90);
  }

  private setAzimuth(azimuth: number) {
    this.azimuth = this.capAngle(azimuth);
  }

  private nextPosition(
    [x, y]: [number, number],
    angle: number
  ): [number, number] {
    const a = this.degreeToRad(angle);
    return [x + this.speed * Math.cos(a), y + this.speed * Math.sin(a)];
  }

  private degreeToRad(angle: number): number {
    return (angle * Math.PI) / 180;
  }

  private capAngle(angle: number): number {
    return angle % 360;
  }
}
