class Cube {
   /**
    * The constructor function is a function that is called when a new object is created.
    * @param length - The length of the array.
    */
    constructor(length) {
    this.length = length;
    }
    
   /**
    * It returns the length of the side of the square.
    * @returns The length of the side of the square.
    */
    getSideLength () {
    return this.length;
    }
    
   /**
    * The function getSurfaceArea() returns the surface area of a cube.
    * @returns The surface area of the cube.
    */
    getSurfaceArea () {
    return (this.length * this.length) * 6;
    }
    
  /* Returning the volume of the cube. */
    getVolume () {
    return Math.pow(this.length,3);
    }
    }
    
    module.exports = {
    Cube:Cube
    }