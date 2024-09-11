// console.log(document.body);
// console.log(document.title);
// document.title = "changed title";
// console.log(document.title);

// document.body.style.backgroundColor = "pink";

// //element selecor

// const myDiv = document.getElementById("box");
// console.log(myDiv);

// myDiv.style.width = "100px";
// myDiv.style.height = "100px";
// myDiv.style.backgroundColor = "red";

// let textInput = (myDiv.textContent = "hello");

// let userName = "mariam";
// let greeting;

// greeting = userName
//   ? (myDiv.textContent = textInput + " " + userName)
//   : (myDiv.textContent = textInput + " " + "guest");

const input = document.getElementById("firstName");
const submit = document.getElementById("submit");
const text = document.getElementById("inputText");

submit.onclick = () => {
  if (input.value.trim() !== "") {
    text.textContent = input.value;
    input.value = "";
    text.style.color = "green";
  } else {
    text.textContent = "please enter your name";
    text.style.color = "red";
  }
};

//get element by id

//returns null an abrunebs element

console.log(submit);

//get element by classname //returns html collection

const fruits = document.getElementsByClassName("fruits");
console.log(fruits);

fruits[0].textContent = "my fav fruit";
// fruits[3].style.backgroundColor = "red";

for (let element of fruits) {
  element.style.backgroundColor = "green";
}

Array.from(fruits).forEach((element) => {
  element.style.backgroundColor = "blue";
});

//get element by tag name

const vegetables = document.getElementsByTagName("span");
console.log(vegetables);
vegetables[0].style.backgroundColor = "yellow";
for (let veggie of vegetables) {
  veggie.style.color = "red";
}

//querySelecor // pirvel maching elements and null

const pTags = document.querySelectorAll("fruits");
console.log(pTags);

//quiry delecor all returns nodeList

pTags.forEach((element) => {
  element.style.fontSize = "25px";
  element.style.color = "yellow";
});

const heading = document.createElement("h1");
const div = document.getElementById("div");
heading.textContent = "hello js";
heading.setAttribute("class", "myHeading");
div.append(heading);

heading.remove();

//event listeners

const myDiv = document.getElementById("box");

myDiv.style.width = "100px";
myDiv.style.height = "100px";
myDiv.style.backgroundColor = "red";

// myDiv.onclick = function () {
//   myDiv.style.backgroundColor = "green";
// };

function changeColor() {
  myDiv.style.backgroundColor = "black";
}

myDiv.addEventListener("dblclick", (event) => {
  event.target.style.backgroundColor = "yellow";
  event.target.textContent = "test test";
});

const myBtn = document.getElementById("myBtn");

myBtn.classList.add("btnStyles");
myBtn.classList.remove("btnStyles");

myBtn.addEventListener("click", (event) => {
  document.body.classList.toggle("click");
});
