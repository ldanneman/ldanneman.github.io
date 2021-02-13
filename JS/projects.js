const projectPage = document.querySelector("#project-root");

const queryString = location.search.substring(1);
console.log(queryString);

const petAdoption = () => {
  projectPage.innerHTML = "Pet Adoption";
};

const stickyNote = () => {
  projectPage.innerHTML = "Sticky Note";
};

const hackathon = () => {
  projectPage.innerHTML = "Hackathon";
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
