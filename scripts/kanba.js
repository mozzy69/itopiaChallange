//Init Flickity
var flkty = new Flickity( '.main-gallery', {
  cellAlign: 'left',
  contain: true,
  wrapAround: true    
});

//General data
let mainNav = document.getElementById("stickyNav");
let sticky = mainNav.offsetTop;
let mainLogo = document.getElementById("mainLogo");
let cartLineItems = document.getElementById("cartLineItems");
let cartLineItemsY = "100px";

//Sticky Menu
function stickyNav() {    
  if(window.pageYOffset >= sticky && window.innerWidth > 1150) {
    mainNav.classList.add("sticky");
    mainLogo.classList.add("fadeLogo"); 
    mainLogo.classList.remove("foreground");
    cartLineItemsY = "80px";
    cartLineItems.style.top = cartLineItemsY;  
  }else{
    mainNav.classList.remove("sticky");
    mainLogo.classList.remove("fadeLogo");  
    mainLogo.classList.add("foreground"); 
    cartLineItemsY = "100px";  
    cartLineItems.style.top = cartLineItemsY;  
  }
}

window.onscroll = function(){
    stickyNav();
};

//Scroll to form
let gotoSignUp = ()=>{
    document.getElementById("generalForm").scrollIntoView();
}

//Cart Line items
let displayCart = ()=>{
    cartLineItems.style.top = cartLineItemsY;
    cartLineItems.classList.toggle("cartDisplay");
}

//Add items to cart
let updateCartItems =()=>{
    let cartItems = document.getElementById("cartNumItems");
    let itemsInCart = parseInt(cartItems.innerHTML);
    console.log(itemsInCart);
    itemsInCart++;
    cartItems.innerHTML = itemsInCart;
}

//Form Submission
let getUserData = ()=>{
    document.getElementById("generalForm").classList.toggle("scaleForm");
    let firstName = document.getElementById("formFirstName").value;
    let city = document.getElementById("formCity").value;
    let color = document.getElementById("formColor").value;
    let animal = document.getElementById("formAnimal").value;
    let children = document.getElementById("formChildren").value;
    console.log(firstName + city + color + animal + children);
    let formContent = document.getElementById("formContent");
    formContent.classList.add("formContentDynamic");
    formContent.innerHTML = "<button class=\"formContentClose\" onclick=\"resetForm()\">&#10006;</button>" + "<h3>Hi " + firstName + ".</h3> <p><br>Thanks for signing up! <br> Your city is " +city + " and your favourite color is "+ color + ", your favourite animal is " + animal + " and you have "+children+ " child/children.<br> Thanks again and we'll be in touch shorly.</p>";
}

//Resets the form to default values
let resetForm = ()=>{
    document.getElementById("generalForm").classList.toggle("scaleForm");
    let formContent = document.getElementById("formContent");
    formContent.innerHTML = "";
    formContent.classList.toggle("formContentDynamic");
    document.getElementById("formFirstName").value = document.getElementById("formCity").value =
    document.getElementById("formColor").value =
    document.getElementById("formAnimal").value =
    document.getElementById("formChildren").value = "";
}


//Mobile Menu
let closedMenu = true;
let nonMobileMenu = document.getElementById("nonMobileMenu");
//Open_Close mobile menu
let loadMobile =()=>{
    if(closedMenu){
        nonMobileMenu.style.display = "block";
        nonMobileMenu.classList.add("mobileBKG");
        document.getElementById("stickyNav").style.top = "180px";
        document.getElementById("mobileMenu").classList.add("transMobile");
        closedMenu = false;
    }else{
        nonMobileMenu.style.display = "none";
        nonMobileMenu.classList.remove("mobileBKG");
        document.getElementById("stickyNav").style.top = "20px";
        document.getElementById("mobileMenu").classList.remove("transMobile");
        closedMenu = true;
    }
    
}

//Get window width
function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

//Correct menu behaviour
let printW = ()=>{
    document.getElementById("pageWidth").innerHTML = getWidth();
    if(getWidth()>=1085){
        document.getElementById("nonMobileMenu").style.display = "block";
    }else{
        document.getElementById("nonMobileMenu").style.display = "none";
    }
}
window.addEventListener('resize', printW);