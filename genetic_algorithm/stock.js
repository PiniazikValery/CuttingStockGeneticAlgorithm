class Stock {
  constructor(arrayOfBoxes, stockHeight, stockWidth) {
    this.boxes = Array.isArray(arrayOfBoxes) ? arrayOfBoxes : [];
    this.stockHeight = stockHeight;
    this.stockWidth = stockWidth;
  }

  randomlySetAllBoxes() {
    const bLen = this.boxes.length;
    for (let i = 0; i < bLen; i += 1) {
      this.randomlySeteBox(i);
    }
  }

  randomlySeteBox(index) {
    let boxIsValid = true;
    let x1 = this.boxes[index].x;
    let y1 = this.boxes[index].y;
    let x2 = x1 + this.boxes[index].width;
    let y2 = y1 + this.boxes[index].height;
    do {
      boxIsValid = true;
      x1 = Stock.getRandomInt(this.stockWidth);
      y1 = Stock.getRandomInt(this.stockHeight);
      x2 = x1 + this.boxes[index].width;
      y2 = y1 + this.boxes[index].height;
      const boxesExceptChosen = this.boxes.filter(box => this.boxes.indexOf(box) !== index);
      for (let i = 0; i < boxesExceptChosen.length; i += 1) {
        if (boxesExceptChosen[i].x !== null || boxesExceptChosen[i].y !== null) {
          const isIntersects = Stock.intersects({
            y: boxesExceptChosen[i].y,
            y1: boxesExceptChosen[i].y + boxesExceptChosen[i].height,
            x1: boxesExceptChosen[i].x + boxesExceptChosen[i].width,
            x: boxesExceptChosen[i].x,
          }, {
            y: y1,
            y1: y2,
            x1: x2,
            x: x1,
          });
          if (isIntersects) {
            console.log('hited');
            boxIsValid = false;
            break;
          }
        }
      }
    } while (boxIsValid === false);
    this.boxes[index].x = x1;
    this.boxes[index].y = y1;
    this.boxes[index].width = Math.abs(x1 - x2);
    this.boxes[index].height = Math.abs(y1 - y2);
  }

  static getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
  }

  static intersects(a, b) {
    return (
      (
        (
          (a.x >= b.x && a.x <= b.x1) || (a.x1 >= b.x && a.x1 <= b.x1)
        ) && (
          (a.y >= b.y && a.y <= b.y1) || (a.y1 >= b.y && a.y1 <= b.y1)
        )
      ) || (
        (
          (b.x >= a.x && b.x <= a.x1) || (b.x1 >= a.x && b.x1 <= a.x1)
        ) && (
          (b.y >= a.y && b.y <= a.y1) || (b.y1 >= a.y && b.y1 <= a.y1)
        )
      )
    ) || (
      (
        (
          (a.x >= b.x && a.x <= b.x1) || (a.x1 >= b.x && a.x1 <= b.x1)
        ) && (
          (b.y >= a.y && b.y <= a.y1) || (b.y1 >= a.y && b.y1 <= a.y1)
        )
      ) || (
        (
          (b.x >= a.x && b.x <= a.x1) || (b.x1 >= a.x && b.x1 <= a.x1)
        ) && (
          (a.y >= b.y && a.y <= b.y1) || (a.y1 >= b.y && a.y1 <= b.y1)
        )
      )
    );
  }
}

module.exports = Stock;
