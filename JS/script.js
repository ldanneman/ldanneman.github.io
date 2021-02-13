const display = (e, link) => {
  let tabLink = document.querySelectorAll(".tablink");
  for (let i = 0; i < tabLink.length; i++) {
    tabLink[i].classList.remove("highlight");
  }
  let text = document.querySelectorAll(".text");
  for (let i = 0; i < text.length; i++) {
    text[i].classList.add("display-none");
  }
  document.getElementById(link).classList.remove("display-none");

  e.currentTarget.classList.add("highlight");
};

