/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */

const leftLength = document.querySelector('[data-side="left"] span');
const rightLength = document.querySelector('[data-side="right"] span');
const leftLengthInput = document.querySelector("form.leftlength input");
const leftLengthButton = document.querySelector("form.leftlength button");
const rightLengthInput = document.querySelector("form.rightlength input");
const rightLengthButton = document.querySelector("form.rightlength button");

leftLengthButton.addEventListener("click", () => {
  updateLength(leftLengthInput.value, leftLength);
});
rightLengthButton.addEventListener("click", () => {
  updateLength(rightLengthInput.value, rightLength);
});

// helper function
function updateLength(length, element) {
  if (isFinite(length)) {
    if (length > 1) {
      element.innerText = `${length} inches`;
    } else {
      element.innerText = `${length} inch`;
    }
  }
}
console.log(leftLength, rightLength);

function myFun (e) {
  // prevents default action to happen
  e.preventDefault();
  // do what ever you want to do here
  // i.e. perform a AJAX call
  alert("a");
}
myFun();
document.querySelectorAll('form').forEach(form=>{
    form.addEventListener("submit",()=>{
        myFun();
    }
})
