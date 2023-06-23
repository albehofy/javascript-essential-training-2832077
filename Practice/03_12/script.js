/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

class Home {
  constructor(
    name,
    room1,
    room2,
    room3,
    area,
    owner,
    ownerAge,
    ownerJob,
    title
  ) {
    this.name = name;
    this.rooms = {
      room1: room1,
      room2: room2,
      room3: room3,
    };
    this.area = area;
    this.owner = owner;
    this.ownerAge = ownerAge;
    this.ownerJob = ownerJob;
    this.title = title;
  }
  printHomeData() {
    console.log(this.rooms);
  }
}

const flatOne = new Home(
  "small House",
  "living room",
  "bed room",
  "childern room",
  145,
  "Reda",
  51,
  "police officer",
  "medium house in the farmer with 2 layers"
);

flatOne.printHomeData();
