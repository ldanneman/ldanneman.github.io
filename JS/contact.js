const submitBtn = document.querySelector(".submit");

const submitForm = (e) => {
    e.preventDefault();
  //   e.stopImmediatePropagation();
  console.log("hello");
};

submitBtn.addEventListener("click", submitForm);
