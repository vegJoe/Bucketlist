
//1
//Den hamnar längst ner, efter main.
const pElement = document.createElement("p");

pElement.innerText = "Fred på jorden";

document.getElementsByClassName("list")[0].appendChild(pElement);

//document.body.appendChild(pElement);

//2
const pElement2 = document.createElement("p");

pElement2.innerText = "Mer fred på jorden";

const list = document.querySelector(".list");

list.insertAdjacentElement("beforeend", pElement2);


//3
const innerHtml = document.querySelector(".list");

console.log(innerHtml);


//4
//innerHtml.innerHTML = "<div>This is a div element as a string</div>";

//5
//Den skriver över existerande p-taggar

//6
list.insertAdjacentHTML("afterbegin", "<p>Krig på jorden</p>");

//7
const wishes = ["guld", "pengar", "diamanter"];

for(let i = 0; i < wishes.length; i++) {
    list.insertAdjacentHTML("beforeend", "<p>" + wishes[i] + "</p>");
}

//8
console.log(innerHtml.children);

//9
document.getElementsByClassName("owner")[0].innerHTML = "Karsten's";

//10
const newWish = document.createTextNode("Mansion");
const element = document.getElementsByClassName("list")[0].children[0];
element.replaceChild(newWish, element.childNodes[0]);

//11
const oldwWish = document.querySelectorAll("p")[3];
const middleWish = document.createElement("p");
middleWish.textContent = "Solsken";
innerHtml.replaceChild(middleWish, oldwWish);

//12
const childElements = document.getElementsByClassName("list")[0];

childElements.removeChild(childElements.lastElementChild);