var flkty = new Flickity( '.main-gallery', {
  cellAlign: 'left',
  contain: true,
  wrapAround: true    
});

let mainNav = document.getElementById("stickyNav");
let sticky = mainNav.offsetTop;
let mainLogo = document.getElementById("mainLogo");
let cartLineItems = document.getElementById("cartLineItems");
let cartLineItemsY = "100px";

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

let displayCart = ()=>{
    cartLineItems.style.top = cartLineItemsY;
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

let gotoSignUp = ()=>{
    document.getElementById("generalForm").scrollIntoView();
}

function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}


let printW = ()=>{
    document.getElementById("pageWidth").innerHTML = getWidth();
}
window.addEventListener('resize', printW);


