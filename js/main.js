function burgerActive() {
  var menu = document.querySelector(".header__menu");
  var burger = document.querySelector(".header__burger");
  var body = document.body;
  menu.classList.toggle("header__menu_active");
  burger.classList.toggle("header__burger_active");
  body.classList.toggle("lock");
}

function PortfolioList() {
  var open = document.querySelector(".portfolio__inner");
  open.classList.toggle("open_list");
}



