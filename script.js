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
  setTimeout(function() {
    document.getElementById("img_1").style.opacity = '1';
    document.getElementById("img_2").style.opacity = '1';
  }, 1600);
  }




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
var y,x,windowY,windowX;
document.addEventListener("mousemove", function(e){
          y = e.pageY;
          x = e.pageX;
          windowY = window.screen.height;
          windowX = window.screen.width;
document.getElementById("img_1").style.transform = 'rotateX('+(10-y/(windowY/5))+'deg) rotateY('+(-20+x/(windowX/5))+'deg) rotateZ(4deg) translateX('+0+(x/(windowX/30))+'px) translateY('+0+(y/(windowY/30))+'px)';
document.getElementById("img_2").style.transform = 'rotateX('+(10-y/(windowY/5))+'deg) rotateY('+(-20+x/(windowX/5))+'deg) rotateZ(4deg) translateX('+0+(x/(windowX/40))+'px) translateY('+0+(y/(windowY/40))+'px)';
//document.getElementById("img_1").style.transform = 'translateX('+0+(x/(windowX/10))+'px) translateY('+0+(y/(windowY/10))+'px)';
//document.getElementById("img_2").style.transform = 'translateX('+0+(x/(windowX/20))+'px) translateY('+0+(y/(windowY/20))+'px)';
});





/*---------------- CAROUSEL FUNCTION ----------------*/
let i = 1;
let looop;
function navCarousel(direction) {
  const contentElements = [
    document.getElementById("page_2_content_1"),
    document.getElementById("page_2_content_2"),
    document.getElementById("page_2_content_3"),
    document.getElementById("page_2_content_4"),
    document.getElementById("page_2_content_5"),
    document.getElementById("page_2_content_6"),
  ];
  const contentPagination = [
    document.getElementById("pagination_1"),
    document.getElementById("pagination_2"),
    document.getElementById("pagination_3"),
    document.getElementById("pagination_4"),
    document.getElementById("pagination_5"),
    document.getElementById("pagination_6"),
  ];
  if(direction === 0) {
    i--;
    if(i === -1) {
      i = 5;
    }
  }
  else if(direction === 99) {
    i++;
    if(i === 6) {
      i = 0;
    }
  }
  else {
    i = direction-1;
  }
  contentElements.forEach(element => {
    element.classList.remove('active');
   });
  contentElements[i].classList.add('active');
  contentPagination.forEach(element => {
    element.classList.remove('active');
   });
  contentPagination[i].classList.add('active');
  startCarouselLoop();
}

function startCarouselLoop() {
  clearInterval(looop);
  looop = setInterval(function () {
    navCarousel(99);
  }, 8000);
}

function stopCarouselLoop() {
  const contentElements = [
    document.getElementById("page_2_content_1"),
    document.getElementById("page_2_content_2"),
    document.getElementById("page_2_content_3"),
    document.getElementById("page_2_content_4"),
    document.getElementById("page_2_content_5"),
    document.getElementById("page_2_content_6"),
  ];
  const contentPagination = [
    document.getElementById("pagination_1"),
    document.getElementById("pagination_2"),
    document.getElementById("pagination_3"),
    document.getElementById("pagination_4"),
    document.getElementById("pagination_5"),
    document.getElementById("pagination_6"),
  ];
  contentElements.forEach(element => {
    element.classList.remove('active');
   });
  contentPagination.forEach(element => {
    element.classList.remove('active');
   });
  clearInterval(looop);
  i = 1;

}

/*---------------- CAROUSEL x CURSOR FUNCTION ----------------*/
let isScrolling = false;
const carouselContainer = document.getElementById("page_2");
function handleWheel(event) {
  if (!isScrolling) {
    isScrolling = true;
    // Detect the scrolling direction & determine value to the const
    const direction = event.deltaY > 0 ? 99 : 0;
    navCarousel(direction);
    setTimeout(function () {
      isScrolling = false;
    }, 1500);
  }
}
carouselContainer.addEventListener('wheel', handleWheel);





/*---------------- NAVIGATION FUNCTION ----------------*/
function navigatePage(state) {
  const pages = [
    document.getElementById("page_1"),
    document.getElementById("page_2"),
    document.getElementById("page_3"),
  ];
  const menuItems = [
    document.getElementById("menu_item_1"),
    document.getElementById("menu_item_2"),
    document.getElementById("menu_item_3"),
  ];
  pages.forEach(element => {
    element.classList.remove("state1", "state2", "state3");
   });
  menuItems.forEach(element => {
    element.classList.remove("active");
  });

if (state === 1) {
  pages.forEach(element => {
    element.classList.add("state1");
   });
  menuItems[0].classList.add("active");
  setTimeout(stopCarouselLoop, 800);
} else if (state === 2) {
  pages.forEach(element => {
    element.classList.add("state2");
   });
   menuItems[1].classList.add("active");
  navCarousel(0);
} else if (state === 3) {
  pages.forEach(element => {
    element.classList.add("state3");
   });
   menuItems[2].classList.add("active");
   setTimeout(stopCarouselLoop, 600);
}
}



/*---------------- RELOAD NAV ON RESIZE FUNCTION ----------------*/
function checkWindowSize() {
var windowWidth = window.innerWidth;
if (windowWidth < 800) {
  navigatePage(1);
}
}
window.addEventListener('resize', function() {
checkWindowSize();
});