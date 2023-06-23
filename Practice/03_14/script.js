import Book from "./Book.js";

const htmlAndCss = new Book(
  "html and css",
  "html and css getting started",
  "100$",
  514,
  "white",
  "best first step for who planing to learn web development",
  0
);
const js = new Book(
  "js",
  "js from zero to hero ",
  "120$",
  402,
  "white",
  "best step for who planing to learn web development",
  0
);
const bootstrap5 = new Book(
  "bootstrap 5",
  "bootstrap getting started",
  "80$",
  190,
  "white",
  "on of the step for who planing to learn web development",
  0
);
htmlAndCss.currentPage(10); //this method will tell the page which we arrived to it in the book;
js.currentPage(20);
bootstrap5.currentPage(20);

console.log(htmlAndCss.numPage, js.numPage, bootstrap5.numPage);
