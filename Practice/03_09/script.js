/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  editName: function (name) {
    this.name = name;
  },
  volume: 30,
  editVolume: function (vol) {
    this.volume = vol;
  },
  color: "grey",
  editColor: function (color) {
    this.color = color;
  },
  pocketNum: 15,
  editpocKNum: function (pocKNum) {
    this.pocketNum = pocKNum;
  },
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};
console.log(backpack);
