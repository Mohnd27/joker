let menu = document.querySelector(".menu");
let gar = document.querySelector(".gar");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  navbar.classList.toggle("active");
  gar.classList.toggle("active");
};

gar.onclick = () => {
  gar.classList.remove("active");
  navbar.classList.remove("active");
};

// changing pic

let pics = document.querySelectorAll(".navbar ul li");
let main_pic = document.getElementById("main_pic");

pics.forEach((pic) => {
  pic.addEventListener("click", () => {
    main_pic.src = `pic/${pic.dataset.img}`;
  });
});
