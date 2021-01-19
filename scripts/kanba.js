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
  if(window.pageYOffset >= sticky && window.innerWidth > 1150) {
    mainNav.classList.add("sticky");
    mainLogo.classList.add("fadeLogo"); 
    mainLogo.classList.remove("foreground");
    cartLineItems.style.top = "80px";  
  }else{
    mainNav.classList.remove("sticky");
    mainLogo.classList.remove("fadeLogo");  
    mainLogo.classList.add("foreground");   
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
let closedMenu = true;

let loadMobile =()=>{
    if(closedMenu){
        document.getElementById("nonMobileMenu").style.display = "block";
        document.getElementById("stickyNav").style.height = "100%";
        closedMenu = false;
    }else{
        document.getElementById("nonMobileMenu").style.display = "none";
        document.getElementById("stickyNav").style.height = "0%";
        closedMenu = true;
    }
    
}