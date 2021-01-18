var flkty = new Flickity( '.main-gallery', {
  // options
  cellAlign: 'left',
  contain: true,
  wrapAround: true    
});


window.onscroll = function(){
    stickyNav()
};

// Get the navbar
let navbar = document.getElementById("mainNav");

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}