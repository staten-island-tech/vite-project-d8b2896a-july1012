import "../css/style.css";

import { tea } from "./tea";

const DOMSelectors={
  app: document.querySelector("#app"),
  btn: document.querySelector(".btn"),
  header: document.querySelector(".header"),
  subheader:document.querySelector(".subheader"),
  all: document.querySelector(".all"),
  cancel: document.querySelector(".cancel"),
  nocancel: document.querySelector(".nocancel"),
}

function cardss1() {
  let app = document.querySelector("#app");
  tea.forEach((ta) =>
    app.insertAdjacentHTML(
      "beforeend",
      `   <div class="cards">
    <h3 class="name">${ta.person}</h3>
    <img src= "${ta.img}" class="pic">
    <h5 class="oop">${ta.desc}</h5>
</div>
`
    )
  );
}
cardss1();


document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("greenn")) {
    document.body.classList.add("pinkk");
    document.body.classList.remove("greenn");
  } else {
    document.body.classList.add("greenn");
    document.body.classList.remove("pinkk");
  }
});


function clearfields(){
  DOMSelectors.cards.innerHTML = "";
}

DOMSelectors.app.addEventListener("click", function(){
  clearfields();
})

DOMSelectors.cancel.addEventListener("click", fucntion(){
  const canceltea = tea.filter((te)=> canceltea.CANCELLED===(true));
  
})
