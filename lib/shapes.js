class Shape {
  constructor() {
    this.color = ""
  }

  setColor(color) {
    this.color = color;
  }
}


class Circle extends Shape {
  render() {
    // TODO: Write a return value for the "render" method
  }
}

class Triangle extends Shape {
  render() {
    // TODO: Write a return value for the "render" method
  }
}

class Square extends Shape {
  render() {
    // TODO: Write a return value for the "render" method
  }
}

// Export the Circle, Triangle, and Square classes as an object.
module.exports = { Circle, Triangle, Square };