/**
 * Practice: Pass values between functions
 *
 * Create two functions:
 * - Main function
 *  - Creates new <article> element
 *  - Populates <article> with content (see const content below)
 *  - Returns <article> element to where function is called
 * - Helper image function
 *  - Creates new <figure> element
 *  - Adds <img> markup pointing to frogpack.image
 *  - Adds <figcaption> element with image description
 *  - Returns <figure> element to where function is called
 */
const figureCreator = (data) => {
  let figure = document.createElement("figure");
  figure.innerHTML = `
    <img src=${data.image} alt='${data.name}' width="200px"/>
   <br>
    <figcaption>${data.name}</figcaption>
  `;
  return figure;
};
const frogpack = {
  name: "Frog Backpack",
  volume: 8,
  color: "green",
  pocketNum: 3,
  strapLength: {
    left: 10,
    right: 10,
  },
  lidOpen: false,
  image: "../../assets/images/frog.svg",
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

// Baseline HTML output
const content = `
    <h1 class="backpack__name">${frogpack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        frogpack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        frogpack.color
      }</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        frogpack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        frogpack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        frogpack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        frogpack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>  
`;

function main(data) {
  let article = document.createElement("article");
  article.innerHTML = `
  
  <h1 class="backpack__name">${data.name}</h1>
  <ul class="backpack__features">
    <li class="packprop backpack__volume">Volume:<span> ${
      data.volume
    }l</span></li>
    <li class="packprop backpack__color">Color:<span> ${data.color}</span></li>
    <li class="packprop backpack__pockets">Number of pockets:<span> ${
      data.pocketNum
    }</span></li>
    <li class="packprop backpack__strap">Left strap length:<span> ${
      data.strapLength.left
    } inches</span></li>
    <li class="packprop backpack__strap">Right strap length:<span> ${
      data.strapLength.right
    } inches</span></li>
    <li class="feature backpack__lid">Lid status:<span> ${
      data.lidOpen ? "open" : "closed"
    }</span></li>
  </ul> 
  <br>
  `;
  article.append(figureCreator(frogpack));

  return article;
}
document.querySelector("main").append(main(frogpack));
