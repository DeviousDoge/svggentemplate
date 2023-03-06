// Define the `SVG` class
class SVG {
  // Define the constructor function that sets initial properties
  constructor() {
  // TODO: Set initial values for the properties of the SVG class
    this.textElement = "";
    this.shapeElement = "";
  }
 
   
  // Define a function that renders an SVG image
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`
  }
     
  // Define a function that sets text to display in the SVG image
  setText(text, textColor) {
    // TODO: Check if the message length is greater than 3, if so, throw an error
  
    // TODO: Set the text property with the message, font size, and color
   
  }
      
  // Define a function that sets the shape to display in the SVG image
  setShape(shape) {
    // TODO: Set the shape property with the shapes SVG code
    
  }
      
}
  
  // Export the `SVG` class
  module.exports = SVG;
