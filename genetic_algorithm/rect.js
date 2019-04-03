class Rectangle {
  constructor(w, h) {
    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
  }

  setXCoord(x) {
    this.x = x;
  }

  setYCoord(y) {
    this.y = y;
  }
}

module.exports = Rectangle;
