let toggleBtn = document.getElementById("toggleBtn");
let navMenu = document.querySelector(".navMenu");
let toggleFun = () => {
  navMenu.classList.toggle("active");
  toggleBtn.classList.toggle("active");
};

toggleBtn.addEventListener("click", toggleFun);
