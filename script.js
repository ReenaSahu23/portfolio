document.getElementById("menu-toggle").addEventListener("click", function () {
  const menu = document.getElementById("navbar-menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});