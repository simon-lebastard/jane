/*---------------- LEGAL NAV FUNCTION ----------------*/
function legalNav(i) {
  const nav = [
    document.getElementById("tab_1"),
    document.getElementById("tab_2"),
  ]
  const pages = [
    document.getElementById("terms"),
    document.getElementById("privacy"),
  ]
  nav.forEach(element => {
    element.classList.remove("active");
   });
  nav[i].classList.add("active");
  pages.forEach(element => {
    element.classList.remove("active");
   });
  pages[i].classList.add("active");
}