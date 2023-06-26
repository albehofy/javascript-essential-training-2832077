/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */
const reset = document.getElementById("reset");
document.querySelectorAll(".grid li").forEach((li) => {
  li.setAttribute("data-toggle", true);
  li.addEventListener("mouseenter", () => {
    li.getAttribute("data-toggle") == "true"
      ? li.classList.add("active") /*(li.style.backgroundColor = "#f00")*/
      : "";
  });
  li.addEventListener("mouseleave", () => {
    li.getAttribute("data-toggle") == "true"
      ? li.classList.remove(
          "active"
        ) /*(li.style.backgroundColor = "hsl(0, 0%, 90%)")*/
      : "";
  });
  li.addEventListener("click", () => {
    if (li.getAttribute("data-toggle") == "true") {
      li.classList.add("black");
      li.setAttribute("data-toggle", "false");
    } /*else {
      li.style.cssText = "background-color: hsl(0, 0%, 90%); ";
      li.setAttribute("data-toggle", "true");
    }*/
    if (reset.getAttribute("data-reseted") === "true") {
      reset.setAttribute("data-reseted", "false");
      reset.removeAttribute("disabled");
    }
  });
});

window.addEventListener("keydown", () => {
  document.querySelector("body").style.backgroundColor = "#DDD";
});

window.addEventListener("keyup", () => {
  document.querySelector("body").style.backgroundColor = "#FFF";
});

reset.addEventListener("click", function () {
  this.setAttribute("data-reseted", "true");
  this.setAttribute("disabled", "");
  document.querySelectorAll(".grid li").forEach((cell) => {
    cell.setAttribute("data-toggle", "true");
    cell.classList.remove("black");
    cell.classList.remove("active");
  });
});
