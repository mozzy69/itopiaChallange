var flkty = new Flickity( '.main-gallery', {
  // options
  cellAlign: 'left',
  contain: true,
  wrapAround: true    
});




// Get the navbar
let mainNav = document.getElementById("stickyNav");

// Get the offset position of the navbar
let sticky = mainNav.offsetTop;

let mainLogo = document.getElementById("mainLogo");


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
  //sticky = mainNav.offsetTop;    
  if (window.pageYOffset >= sticky) {
    mainNav.classList.add("sticky");
    mainLogo.classList.add("fadeLogo");  
    //console.log(window.pageYOffset);  
  } else {
    mainNav.classList.remove("sticky");
    mainLogo.classList.remove("fadeLogo");  
    console.log(sticky);
  }
}

window.onscroll = function(){
    stickyNav();
};

let userData = ()=>{
                    var xhr = new XMLHttpRequest(); 
                    xhr.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        // Response
                        var response = this.responseText;
                        //console.log(response);
                        document.getElementById("logOutInfo").innerHTML = response;
                        document.getElementById("accountLoginOut").innerHTML = "<li class=\"nav-item\"><a class=\"nav-link\" href=\"#\" data-toggle=\"modal\" data-target=\"#loginMain\" data-dismiss=\"modal\">Log in</a></li>";
                           }
                        };
                        xhr.open("POST", "./incl/logout.php", true);
                        xhr.setRequestHeader("Content-Type", "application/json");
                        xhr.send();
                    }