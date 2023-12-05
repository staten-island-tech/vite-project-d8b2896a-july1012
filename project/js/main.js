import "../css/style.css";

import { tea } from "./tea";

const DOMSelectors = {
  app: document.querySelector("#app"),
  btn: document.querySelector(".btn"),
  header: document.querySelector(".header"),
  subheader: document.querySelector(".subheader"),
  all: document.querySelector(".all"),
  cancel: document.querySelector(".cancel"),
  nocancel: document.querySelector(".nocancel"),
  cards: document.querySelector(".cards"),
  cardsholder: document.querySelector("#cards-holder"),
};

document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("greenn")) {
    document.body.classList.add("pinkk");
    document.body.classList.remove("greenn");
  } else {
    document.body.classList.add("greenn");
    document.body.classList.remove("pinkk");
  }
});

function hool(ta) {
  DOMSelectors.cardsholder.insertAdjacentHTML(
    "beforeend",
    `   <div class="cards">
<h3 class="name">${ta.person}</h3>
<img src= "${ta.img}" class="pic">
<h5 class="oop">${ta.desc}</h5>
</div>
`
  );
}

function clearfields() {
  DOMSelectors.cardsholder.innerHTML = "";
}
DOMSelectors.all.addEventListener("click", function () {
  clearfields();
  tea.forEach((ta) => {
    hool(ta);
  });
});

DOMSelectors.cancel.addEventListener("click", function () {
  const canceltea = tea.filter((hot) => hot.CANCELLED === true);
  clearfields();
  canceltea.forEach((ta) => hool(ta));
});

DOMSelectors.nocancel.addEventListener("click", function () {
  const nottea = tea.filter((not) => not.CANCELLED === false);
  clearfields();
  nottea.forEach((ta) => hool(ta));
});
