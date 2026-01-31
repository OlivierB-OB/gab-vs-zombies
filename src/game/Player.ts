export class Player {
  public position: [number, number] = [0, 0];
  public azimuth: number = 0;
  public speed: number = 5;

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

  setAzimuth(azimuth: number) {
    this.azimuth = this.capAngle(azimuth);
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    const [x, y] = this.position;
    ctx.rect(x, y, 150, 100);
    ctx.stroke();
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
    return (angle + 360) % 360;
  }
}
