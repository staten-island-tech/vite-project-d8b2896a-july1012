import "../css/style.css";

import { tea } from "./tea";

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
console.log(tea);

document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("pinkk")) {
    document.body.classList.add("pinkk");
    document.body.classList.remove("greenn");
  } else {
    document.body.classList.add("greenn");
    document.body.classList.remove("pinkk");
  }
});
