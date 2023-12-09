function Menu() {
  const icon=document.querySelector(".ham-icon");
  const menu=document.querySelector(".mob-menu");
  icon.classList.toggle("open");
  menu.classList.toggle("open");
}