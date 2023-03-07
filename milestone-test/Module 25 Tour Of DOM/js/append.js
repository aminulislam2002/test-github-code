// 1. Where to add
const placesList = document.getElementById("visited-list");
// 2. What to be added
const li = document.createElement("li");
li.innerText = "pahar ";
// 3. Add the child
placesList.appendChild(li);

// 1. Where to add
const mainContainer = document.getElementById("main-container");

// What to be added
const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "My food list";
section.appendChild(h1);

const ul = document.createElement("ul");

const li1 = document.createElement("li");
li1.innerText = "Briyani";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.innerText = "vath";
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.innerText = "Chalad";
ul.appendChild(li);

section.appendChild(ul);

mainContainer.appendChild(section);

// set innerHTML directly
const sectionDress = document.createElement("section");
sectionDress.innerHTML = ` 
<h2>My dresses</h2>
<ul>
<li>Shirt</li>
<li>pant</li>
<li>genji</li>
</ul>
`;
mainContainer.appendChild(sectionDress);
