import "../css/style.css";
import "../css/lalala.css";
import { tea } from "./tea";


function cardss1 (){
let app = document.querySelector("#app");
tea.forEach((ta) => app.insertAdjacentHTML ( 
    "beforeend",
    `
<div class="cards">
    <h2 class="name">${ta.person}</h2>
    <img src= "${ta.img}" class="pic">
    <h3 class="oop">${ta.desc}</h3>
</div>
`))};
cardss1();
console.log(tea);

const DOMSelectors ={
    app: document.querySelector("#app")
}

DOMSelectors.app.addEventListener("click", function (event){
    event.preventDefault();
    
})
