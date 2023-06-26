/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */
const siteHeader = document.querySelector("header"); //selecting header
siteHeader.classList.add("cahnge-color", "change-font-weight"); //adding two new classes
siteHeader.classList.remove("cahnge-color"); // removing if the new classes
siteHeader.setAttribute("data-name", "header"); // adding new atrribute
console.log(siteHeader.getAttribute("data-name")); //getting new attribute value
siteHeader.setAttribute("data-name", "new name for header"); // change new attribute value
console.log(siteHeader.getAttribute("data-name")); // showing new attribute value
siteHeader.style.color = "blue";
