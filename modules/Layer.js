export class Layer {
  constructor(container) {
    this.canvas = document.createElement(`canvas`);
    this.context = this.canvas.getContext("2d");
    container.appendChild(this.canvas);

    this.fitToContainer(this.canvas);
    addEventListener(`resize`, () => this.fitToContainer(this.canvas));
  }
  fitToContainer(cnv) {
    this.w = cnv.width = cnv.offsetWidth;
    this.h = cnv.height = cnv.offsetHeight;
  }
}
