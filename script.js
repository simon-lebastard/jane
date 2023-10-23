/*---------------- MENU OPEN FUNCTION ----------------*/
function openMenu(){
    var menu_icon = document.getElementById("menu");
    var menu_list = document.getElementById("menu_list");
    menu_icon.classList.toggle("active");
    menu_list.classList.toggle("active");
}
function closeMenu(){
  var menu_icon = document.getElementById("menu");
  var menu_list = document.getElementById("menu_list");
  menu_icon.classList.remove("active");
  menu_list.classList.remove("active");
}




/*---------------- FOLLOW CURSOR FUNCTION ----------------*/
var y,x;
document.addEventListener("mousemove", function(e){
            y = e.pageY;
            x = e.pageX;
  document.getElementById("img_1").style.transform = 'rotateX(1'+(y/200)+'deg) rotateY(-2'+(x/200)+'deg) rotateZ(10deg) translateX('+0+(x/40)+'px) translateY('+0+(y/40)+'px)';
  document.getElementById("img_2").style.transform = 'rotateX(1'+(y/160)+'deg) rotateY(-2'+(x/160)+'deg) rotateZ(10deg) translateX('+0+(x/36)+'px) translateY('+0+(y/36)+'px)';

});






/*---------------- LOADER FUNCTION ----------------*/
window.onload = function() {
  var loader = document.getElementById("loader");
  var logo = document.getElementById("loader_logo");
  setTimeout(function() {
    logo.classList.add("pop");
  }, 200);
  setTimeout(function() {
    logo.classList.add("unpop");
  }, 1500);
  setTimeout(function() {
    loader.classList.add("loaded");
  }, 1600);
  setTimeout(function() {
    loader.classList.add("removed");
  }, 2400);
}








/*---------------- NAVIGATION FUNCTION ----------------*/
function navigatePage(state) {
  var page_1 = document.getElementById("page_1");
  var page_2 = document.getElementById("page_2");
  var page_3 = document.getElementById("page_3");
  var menu_1 = document.getElementById("menu_item_1");
  var menu_2 = document.getElementById("menu_item_2");
  var menu_3 = document.getElementById("menu_item_3");

  page_1.classList.remove("state1", "state2", "state3");
  page_2.classList.remove("state1", "state2", "state3");
  page_3.classList.remove("state1", "state2", "state3");
  menu_1.classList.remove("active");
  menu_2.classList.remove("active");
  menu_3.classList.remove("active");

  if (state === 1) {
    page_1.classList.add("state1");
    page_2.classList.add("state1");
    page_3.classList.add("state1");
    menu_1.classList.add("active");
  } else if (state === 2) {
    page_1.classList.add("state2");
    page_2.classList.add("state2");
    page_3.classList.add("state2");
    menu_2.classList.add("active");
  } else if (state === 3) {
    page_1.classList.add("state3");
    page_2.classList.add("state3");
    page_3.classList.add("state3");
    menu_3.classList.add("active");
  }
}