/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */
const main = document.querySelector("main");
const employes = {
  "01": {
    firstName: "mohamed",
    lastName: "reda",
    age: 23,
  },
  "02": {
    firstName: "ahmed",
    lastName: "ali",
    age: 30,
  },
  "03": {
    firstName: "sara",
    lastName: "ali",
    age: 21,
  },
};
function createNewElemnt(data) {
  let article = document.createElement("article");
  article.innerHTML = `
   <p> <span>first name  </span>: <span/>${data.firstName} </span> </p>
   <p><span> last name  </span>:  <span/>${data.lastName} </span> </p>
    <p><span>age   </span>:  <span>${data.age} </span> </p>
    `;
  return article;
}

const addingClass = function (element) {
  element.classList.add("new-class");
};

const addingName = (element) => {
  element.setAttribute("data-name", "this data-name is set by arrow Fun");
};
let article = createNewElemnt(employes["01"]);
addingClass(article);
addingName(article);
main.append(article);
console.log(article);
