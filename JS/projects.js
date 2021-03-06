import { petAdoptionText, stickyNoteText, hackathonText } from "./text.js";

const projectPage = document.querySelector("#project-root");
const icon = document.querySelector("#icon");

const queryString = location.search.substring(1);

const petAdoption = () => {
  icon.href = "../IMAGES/petsproj.png";
  icon.type = "image/png";
  projectPage.innerHTML = petAdoptionText;
};

const stickyNote = () => {
  icon.href = "../IMAGES/stickynote.jpg";
  icon.type = "image/gif";
  projectPage.innerHTML = stickyNoteText;
};

const hackathon = () => {
  icon.href = "../IMAGES/shift.jpg";
  icon.type = "image/gif";
  projectPage.innerHTML = hackathonText;
};

switch (queryString) {
  case "pet-adoption-project":
    petAdoption();
    break;
  case "sticky-note-project":
    stickyNote();
    break;
  case "hackathon-project":
    hackathon();
    break;
}

// document.querySelector(".petProj-button").addEventListener("click", function (e) {

// })
