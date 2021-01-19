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
  if (window.pageYOffset >= sticky) {
    mainNav.classList.add("sticky");
    mainLogo.classList.add("fadeLogo"); 
    mainLogo.classList.remove("foreground");
    cartLineItems.style.top = "80px";  
  } else {
    mainNav.classList.remove("sticky");
    mainLogo.classList.remove("fadeLogo");  
    mainLogo.classList.add("foreground");   
    //console.log(sticky);
    cartLineItems.style.top = "100px";  
  }
}

window.onscroll = function(){
    stickyNav();
};

let displayCart = ()=>{
    let cartLineItems = document.getElementById("cartLineItems");
    cartLineItems.classList.toggle("cartDisplay");
}

let updateCartItems =()=>{
    let cartItems = document.getElementById("cartNumItems");
    let itemsInCart = parseInt(cartItems.innerHTML);
    console.log(itemsInCart);
    itemsInCart++;
    cartItems.innerHTML = itemsInCart;
}

let getUserData = ()=>{
    let firstName = document.getElementById("formFirstName").value;
    let city = document.getElementById("formCity").value;
    let color = document.getElementById("formColor").value;
    let animal = document.getElementById("formAnimal").value;
    let children = document.getElementById("formChildren").value;
    console.log(firstName + city + color + animal + children);
    let formContent = document.getElementById("formContent");
    formContent.classList.add("formContentDynamic");
    formContent.innerHTML = "<button onclick=\"resetForm()\">&#10006;</button>" + "Hi " + firstName + ". Thanks for signing up! <br> Your city is " +city + " and your favourite color is "+ color + ", your favourite animal is " + animal + " and you have "+children+ " children. We'll be in touch shorly.";
}

let resetForm = ()=>{
    let formContent = document.getElementById("formContent");
    formContent.innerHTML = "";
    formContent.classList.toggle("formContentDynamic");
    document.getElementById("formFirstName").value = document.getElementById("formCity").value =
    document.getElementById("formColor").value =
    document.getElementById("formAnimal").value =
    document.getElementById("formChildren").value = "";
}

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