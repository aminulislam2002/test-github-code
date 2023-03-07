console.log("js file");
// Option 01
const allLi = document.getElementsByTagName("li");
// console.log(allLi);

// Option 02
const allTitles = document.getElementsByClassName("section-title");
// console.log(allTitles);

// Option 03
const firstSection = document.getElementById("first-section");
// console.log(firstSection);

// Option 04: document.querySelector()
// Option 05: document.querySelectorAll()

// HTML Element styles by js
const secondSection = document.getElementById("second-section");
secondSection.style.color = "red";
secondSection.style.backgroundColor = "black";

// HTML code add by js
//  . innerHTML
const mainContainer = document.getElementById("main-container");
const section04 = document.createElement("section");
section04.innerHTML = `
<section id="four-section">
        <h1 class="section-title">Four section title</h1>
        <ul>
          <li>This is list item 1</li>
          <li>This is list item 2</li>
          <li>This is list item 3</li>
          <li>This is list item 4</li>
        </ul>
      </section>
`;
mainContainer.appendChild(section04);

// .innerText
const section05 = document.createElement("section");
mainContainer.appendChild(section05);

const section05h1 = document.createElement("h1");
section05h1.innerText = "Five section";
section05.appendChild(section05h1);

const section05Ul = document.createElement("ul");
section05.appendChild(section05Ul);

const section05Li01 = document.createElement("li");
section05Li01.innerText = "This is list item 1";
section05Ul.appendChild(section05Li01);

const section05Li02 = document.createElement("li");
section05Li02.innerText = "This is list item 2";
section05Ul.appendChild(section05Li02);

const section05Li03 = document.createElement("li");
section05Li03.innerText = "This is list item 3";
section05Ul.appendChild(section05Li03);

const section05Li04 = document.createElement("li");
section05Li04.innerText = "This is list item 4";
section05Ul.appendChild(section05Li04);
