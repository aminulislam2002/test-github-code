const sections = document.querySelectorAll("section");
for (const section of sections) {
  section.style.border = "2px solid red";
  section.style.margin = "5px";
  section.style.borderRadius = "10px";
  section.style.fontSize = "20px"
  // console.log(section);
}
const placesContainer = document.getElementById("places-container");
// placesContainer.style.backgroundColor = "red";
placesContainer.classList.add("bg-red");


