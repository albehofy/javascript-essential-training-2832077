/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const person = {
  name: "john",
  age: 30,
  "work experinces": 6,
  job: "front-end dev",
  skills: [
    "html",
    "css",
    "js",
    "sass",
    "bootstrap",
    "jquery",
    "typescript",
    "angular",
  ],
  "personal info": {
    maried: true,
    address: "egypt ",
    "phone-number": "01000000000",
  },
};

console.log("person object:", person);
