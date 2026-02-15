import { ImageManager } from './ImageManager';

enum Hair {
  Blond,
  Brown,
  Black,
  Red,
}

enum Skin {
  White,
  Brown,
}

enum Shirt {
  Blue,
  DarkBlue,
  Purple,
  Green,
  Grey,
  LightBlue,
}

export class Zombie {
  public position: [number, number] = [0, 0];
  public azimuth: number = 0;
  public speed: number = 5;
  public rotationSpeed: number = 3;
  private readonly hair: Hair;
  private readonly skin: Skin;
  private readonly shirt: Shirt;

  constructor(
    private readonly imageManager: ImageManager,
    position: [number, number],
    azimuth: number
  ) {
    this.position = position;
    this.azimuth = azimuth;
    this.hair = [Hair.Blond, Hair.Brown, Hair.Black, Hair.Red][
      Math.floor(Math.random() * 4)
    ];
    this.skin = [Skin.Brown, Skin.White][Math.floor(Math.random() * 2)];
    this.shirt = [
      Shirt.Blue,
      Shirt.DarkBlue,
      Shirt.Purple,
      Shirt.Green,
      Shirt.Grey,
      Shirt.LightBlue,
    ][Math.floor(Math.random() * 6)];
  }

  draw(
    ctx: CanvasRenderingContext2D,
    getViewCoordinates: ([x, y]: [number, number]) => [number, number]
  ) {
    const [x, y] = getViewCoordinates(this.position);
    ctx.translate(x, y);
    ctx.rotate(this.degreeToRad(this.azimuth));

    let skinName = 'zombie-skin-white';
    if (this.skin == Skin.Brown) skinName = 'zombie-skin-brown';
    const skin = this.imageManager.getImage(skinName);

    let shirtName = 'zombie-shirt-blue';
    if (this.shirt == Shirt.Blue) shirtName = 'zombie-shirt-blue';
    else if (this.shirt == Shirt.DarkBlue) shirtName = 'zombie-shirt-darkblue';
    else if (this.shirt == Shirt.Purple) shirtName = 'zombie-shirt-purple';
    else if (this.shirt == Shirt.Green) shirtName = 'zombie-shirt-green';
    else if (this.shirt == Shirt.Grey) shirtName = 'zombie-shirt-grey';
    else if (this.shirt == Shirt.LightBlue)
      shirtName = 'zombie-shirt-lightblue';
    const shirt = this.imageManager.getImage(shirtName);

    let hairName = 'zombie-hair-black';
    if (this.hair == Hair.Brown) hairName = 'zombie-hair-brown';
    else if (this.hair == Hair.Blond) hairName = 'zombie-hair-blond';
    else if (this.hair == Hair.Red) hairName = 'zombie-hair-red';
    const hair = this.imageManager.getImage(hairName);

    ctx.drawImage(skin, -25, -22, 50, 44);
    ctx.drawImage(shirt, -25, -22, 50, 44);
    ctx.drawImage(hair, -25, -22, 50, 44);
  }

  private degreeToRad(angle: number): number {
    return (angle * Math.PI) / 180;
  }
}
