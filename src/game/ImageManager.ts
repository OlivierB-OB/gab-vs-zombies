const IMAGES = [
  'player-assaultrifle',
  'player-handgun',
  'player-shotgun',
  'zombie-hair-black',
  'zombie-hair-blond',
  'zombie-hair-brown',
  'zombie-hair-red',
  'zombie-shirt-blue',
  'zombie-shirt-darkblue',
  'zombie-shirt-green',
  'zombie-shirt-grey',
  'zombie-shirt-lightblue',
  'zombie-shirt-purple',
  'zombie-skin-brown',
  'zombie-skin-white',
];

export class ImageManager {
  private images = new Map<string, HTMLImageElement>();

  async initialise() {
    const all = IMAGES.map(
      (name) =>
        new Promise((resolve) => {
          const image = new Image();
          image.src = `/${name}.png`;
          image.onload = () => {
            this.images.set(name, image);
            resolve(null);
          };
        })
    );
    await Promise.all(all);
  }

  getImage(name: string): HTMLImageElement {
    const image = this.images.get(name);
    if (!image) throw Error(`image not found ${name}`);
    return image;
  }
}
