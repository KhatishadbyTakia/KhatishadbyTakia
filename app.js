/* ==========================================
Khati Shad by Takia
app.js

Part 1 - Core + Add Cart

========================================== */



// =======================
// Cart Variables
// =======================


let cart = JSON.parse(
    localStorage.getItem("cart")
) || [];



let DELIVERY_CHARGE =
Number(
    localStorage.getItem("deliveryCharge")
) || 80;





// =======================
// Reload Cart
// =======================


function reloadCart(){


cart =
JSON.parse(
localStorage.getItem("cart")
) || [];


}





// =======================
// Save Cart
// =======================


function saveCart(){


localStorage.setItem(

"cart",

JSON.stringify(cart)

);



updateCartCount();


}





// =======================
// Update Cart Count
// =======================


function updateCartCount(){


reloadCart();



let count = 0;



cart.forEach(function(item){


count += Number(

item.qty ||

item.quantity ||

1

);


});




const badge =
document.getElementById(
"cartCount"
);



if(badge){


badge.innerHTML = count;


}


}





// =======================
// Toast Message
// =======================


function showToast(message){



const toast =
document.getElementById(
"cartToast"
);



const text =
document.getElementById(
"toastText"
);



if(!toast || !text)
return;



text.innerHTML = message;



const bsToast =
bootstrap.Toast.getOrCreateInstance(
toast
);



bsToast.show();



}







// =======================
// Add To Cart
// =======================


function addToCart(

name,

price,

image,

weight = "",

qty = 1,

id = ""

){



reloadCart();




let existing = cart.find(item =>


item.name === name &&

item.weight === weight


);





if(existing){


existing.qty += Number(qty);



}

else{



cart.push({


id:id,


name:name,


price:Number(price),


image:image,


weight:weight,


qty:Number(qty)



});



}





saveCart();




showToast(

"✅ " + name + 
" সফলভাবে কার্টে যোগ হয়েছে"

);



}





// =======================
// Page Load
// =======================


document.addEventListener(

"DOMContentLoaded",

function(){


updateCartCount();


}

);
/* ==========================================
Khati Shad by Takia

app.js

Part 2 - Product Functions

========================================== */



// =======================
// Selected Product Data
// =======================


const selectedData = {};






// =======================
// Change Product Size
// =======================


function changeSize(
id,
price,
weight,
button
){



selectedData[id] = {


price:Number(price),


weight:weight



};






const priceBox =

document.getElementById(
"price" + id
);




const weightBox =

document.getElementById(
"weight" + id
);






if(priceBox){


priceBox.innerHTML =
"৳" + price;


}




if(weightBox){


weightBox.innerHTML =
weight;


}






if(button){



button.parentElement

.querySelectorAll(".size-btn")

.forEach(function(btn){


btn.classList.remove(
"active"
);


});




button.classList.add(
"active"
);



}



}








// =======================
// Quantity Plus
// =======================


function plusQty(id){



const qty =

document.getElementById(
"qty" + id
);




if(!qty)
return;




qty.value =
Number(qty.value) + 1;



}








// =======================
// Quantity Minus
// =======================


function minusQty(id){



const qty =

document.getElementById(
"qty" + id
);




if(!qty)
return;





if(Number(qty.value) > 1){


qty.value =
Number(qty.value) - 1;



}



}








// =======================
// Add Selected Product
// =======================


function addSelectedCart(

name,

image,

id

){



const qty =

Number(

document.getElementById(
"qty" + id
).value

);






if(!selectedData[id]){


showToast(
"⚠️ আগে ওজন নির্বাচন করুন"
);


return;


}






addToCart(



name,

selectedData[id].price,

image,

selectedData[id].weight,

qty



);



}









// =======================
// Home Page Add Cart
// =======================


function addHomeCart(

name,

price,

image,

weight = ""

){



addToCart(



name,


Number(price),


image,


weight,


1



);



}









// =======================
// Product Search
// =======================


function searchProduct(){



const input =

document.getElementById(
"searchInput"
);




if(!input)
return;





const keyword =

input.value.toLowerCase();






document

.querySelectorAll(
".product-item"
)

.forEach(function(product){





const name =

product

.querySelector(
".product-name"
)

.innerText

.toLowerCase();







product.style.display =

name.includes(keyword)

?

""

:

"none";





});



}
/* ==========================================
Khati Shad by Takia

app.js

Part 3 - Cart Page

========================================== */



// =======================
// Load Cart
// =======================


function loadCart(){



reloadCart();




const cartItems =

document.getElementById(
"cartItems"
);



const emptyCart =

document.getElementById(
"emptyCart"
);




const table =

document.getElementById(
"cartTable"
);






if(!cartItems)
return;






cartItems.innerHTML = "";







// =======================
// Empty Cart
// =======================


if(cart.length === 0){



if(emptyCart){

emptyCart.classList.remove(
"d-none"
);

}



if(table){

table.classList.add(
"d-none"
);

}





calculateTotal();


return;



}








// =======================
// Show Cart
// =======================



if(emptyCart){

emptyCart.classList.add(
"d-none"
);

}




if(table){

table.classList.remove(
"d-none"
);

}







cart.forEach(function(item,index){

const total = item.price * item.qty;

cartItems.innerHTML += `
<tr class="align-middle text-center">

<td>
  <div class="cart-info">

    <img src="${item.image}" 
    class="cart-img">

    <div class="cart-text">
      <p class="mb-0">${item.name}</p>
      <small>${item.weight}</small>
    </div>

  </div>
</td>

<td>৳${item.price}</td>

<td>
<button class="btn btn-sm btn-success"
onclick="decreaseQty(${index})">-</button>

<span class="mx-2">${item.qty}</span>

<button class="btn btn-sm btn-success"
onclick="increaseQty(${index})">+</button>
</td>

<td>৳${total}</td>

<td>
<button class="btn btn-danger btn-sm"
onclick="removeItem(${index})">
<i class="fa-solid fa-trash"></i>
</button>
</td>

</tr>
`;

});






calculateTotal();


updateCartCount();



}









// =======================
// Increase Quantity
// =======================


function increaseQty(index){



reloadCart();




cart[index].qty++;




saveCart();



loadCart();



}









// =======================
// Decrease Quantity
// =======================


function decreaseQty(index){



reloadCart();





if(cart[index].qty > 1){



cart[index].qty--;



}

else{


cart.splice(index,1);



}





saveCart();



loadCart();



}









// =======================
// Remove Item
// =======================


function removeItem(index){



reloadCart();



const name =

cart[index].name;





cart.splice(index,1);





saveCart();



loadCart();





showToast(

"❌ " + name +

" কার্ট থেকে সরানো হয়েছে"

);



}
/* ==========================================
Khati Shad by Takia

app.js

Part 4 - Cart Total + Checkout

========================================== */





// =======================
// Calculate Total
// =======================


function calculateTotal(){



reloadCart();




let subTotal = 0;




cart.forEach(function(item){



subTotal +=

Number(item.price) *

Number(item.qty);



});







// =======================
// Delivery Charge
// =======================



const area =

document.getElementById(
"deliveryArea"
);




let delivery = 0;





if(area){


delivery =

Number(area.value);



}







if(cart.length === 0){



delivery = 0;



}







const grandTotal =

subTotal + delivery;









// =======================
// Update Summary
// =======================



const sub =

document.getElementById(
"subTotal"
);




const del =

document.getElementById(
"deliveryCharge"
);




const grand =

document.getElementById(
"grandTotal"
);








if(sub){


sub.innerHTML =

"৳" + subTotal;


}







if(del){


del.innerHTML =

"৳" + delivery;


}







if(grand){


grand.innerHTML =

"৳" + grandTotal;


}








// =======================
// Save Checkout Data
// =======================



localStorage.setItem(

"checkoutSubtotal",

subTotal

);



localStorage.setItem(

"checkoutDelivery",

delivery

);



localStorage.setItem(

"checkoutGrandTotal",

grandTotal

);






}









// =======================
// Delivery Change
// =======================


function deliveryChanged(){



calculateTotal();



}









// =======================
// Go Checkout
// =======================


function goCheckout(){



reloadCart();





if(cart.length === 0){



showToast(

"⚠️ আপনার কার্ট খালি"

);



return;



}






calculateTotal();





window.location.href =

"checkout.html";





}









// =======================
// Continue Shopping
// =======================


function continueShopping(){



window.location.href =

"products.html";



}
/* ==========================================
Khati Shad by Takia

app.js

Part 5 - Final

========================================== */



// =======================
// Clear Cart
// =======================


function clearCart(){



const modalElement =

document.getElementById(
"clearCartModal"
);






if(modalElement){



const modal =

new bootstrap.Modal(
modalElement
);



modal.show();



}

else{



if(confirm(
"আপনি কি কার্ট খালি করতে চান?"
)){


confirmClearCart();



}



}



}









// =======================
// Confirm Clear Cart
// =======================


function confirmClearCart(){



cart = [];




saveCart();





localStorage.removeItem(
"checkoutSubtotal"
);



localStorage.removeItem(
"checkoutDelivery"
);



localStorage.removeItem(
"checkoutGrandTotal"
);







loadCart();



calculateTotal();








const modalElement =

document.getElementById(
"clearCartModal"
);





if(modalElement){



const modal =

bootstrap.Modal.getInstance(
modalElement
);





if(modal){


modal.hide();


}



}








showToast(
"🗑️ কার্ট খালি করা হয়েছে"
);





}









// =======================
// Page Initialize
// =======================


document.addEventListener(

"DOMContentLoaded",

function(){



updateCartCount();






if(

document.getElementById(
"cartItems"
)

){



loadCart();



}








const area =

document.getElementById(
"deliveryArea"
);





if(area){



area.addEventListener(

"change",

function(){


calculateTotal();


}

);



}








calculateTotal();





});









// =======================
// Refresh Cart From Other Tab
// =======================


window.addEventListener(

"storage",

function(e){



if(e.key === "cart"){



reloadCart();



updateCartCount();






if(

document.getElementById(
"cartItems"
)

){



loadCart();



}



}



});









// =======================
// Safety Check
// =======================


reloadCart();



updateCartCount();


 ///// our vedio section /////////

 /* =========================================================
PREMIUM VIDEO REVIEW SECTION V2
Part-3 JavaScript
========================================================= */

const reviewVideo = document.getElementById("reviewVideo");
const reviewSource = reviewVideo.querySelector("source");

const cards = document.querySelectorAll(".playlist-card");

let currentIndex = 0;

/* ==========================
Load Video
========================== */

function playVideo(index){

    currentIndex = index;

    // Remove Active
    cards.forEach(card=>{
        card.classList.remove("active");
    });

    // Active Card
    cards[index].classList.add("active");

    // Get Video Path
    const videoPath = cards[index].dataset.video;

    // Fade Out
    reviewVideo.style.opacity="0";

    setTimeout(()=>{

        reviewSource.src = videoPath;

        reviewVideo.load();

        reviewVideo.play().catch(()=>{});

        reviewVideo.style.opacity="1";

    },300);

    // Auto Scroll Active Card
    cards[index].scrollIntoView({

        behavior:"smooth",

        inline:"center",

        block:"nearest"

    });

}

/* ==========================
Thumbnail Click
========================== */

cards.forEach((card,index)=>{

    card.addEventListener("click",()=>{

        playVideo(index);

    });

});

/* ==========================
Auto Next Video
========================== */

reviewVideo.addEventListener("ended",()=>{

    currentIndex++;

    if(currentIndex>=cards.length){

        currentIndex=0;

    }

    playVideo(currentIndex);

});

/* ==========================
Keyboard Support
========================== */

document.addEventListener("keydown",(e)=>{

    // Next

    if(e.key==="ArrowRight"){

        currentIndex++;

        if(currentIndex>=cards.length){

            currentIndex=0;

        }

        playVideo(currentIndex);

    }

    // Previous

    if(e.key==="ArrowLeft"){

        currentIndex--;

        if(currentIndex<0){

            currentIndex=cards.length-1;

        }

        playVideo(currentIndex);

    }

});

/* ==========================
Double Click Fullscreen
========================== */

reviewVideo.addEventListener("dblclick",()=>{

    if(reviewVideo.requestFullscreen){

        reviewVideo.requestFullscreen();

    }

});

/* ==========================
Video Fade Effect
========================== */

reviewVideo.style.transition="0.35s ease";

/* ==========================
Auto Play First Video
========================== */

window.addEventListener("load",()=>{

    playVideo(0);

});

/* ////// our catagory/////////// */

/* ==========================================
PREMIUM CATEGORY SLIDER
FULL JS
========================================== */

const slider = document.querySelector(".category-slider");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

if (slider && prevBtn && nextBtn) {

    // Duplicate items for infinite effect
    slider.innerHTML += slider.innerHTML;

    let animationId;
    let speed = 1;

    /* ==========================
       AUTO SLIDE
    ========================== */

    function startSlider() {

        cancelAnimationFrame(animationId);

        function animate() {

            slider.scrollLeft += speed;

            if (slider.scrollLeft >= slider.scrollWidth / 2) {
                slider.scrollLeft = 0;
            }

            animationId = requestAnimationFrame(animate);
        }

        animate();
    }

    startSlider();

    /* ==========================
       PAUSE ON HOVER
    ========================== */

    slider.addEventListener("mouseenter", () => {

        cancelAnimationFrame(animationId);

    });

    slider.addEventListener("mouseleave", () => {

        startSlider();

    });

    /* ==========================
       RIGHT BUTTON
    ========================== */

    nextBtn.addEventListener("click", () => {

        cancelAnimationFrame(animationId);

        slider.scrollBy({
            left: 220,
            behavior: "smooth"
        });

        setTimeout(startSlider, 600);

    });

    /* ==========================
       LEFT BUTTON
    ========================== */

    prevBtn.addEventListener("click", () => {

        cancelAnimationFrame(animationId);

        slider.scrollBy({
            left: -220,
            behavior: "smooth"
        });

        setTimeout(startSlider, 600);

    });

    /* ==========================
       MOUSE DRAG
    ========================== */

    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {

        isDown = true;

        startX = e.pageX - slider.offsetLeft;

        scrollLeft = slider.scrollLeft;

        cancelAnimationFrame(animationId);

    });

    slider.addEventListener("mouseleave", () => {

        isDown = false;

        startSlider();

    });

    slider.addEventListener("mouseup", () => {

        isDown = false;

        startSlider();

    });

    slider.addEventListener("mousemove", (e) => {

        if (!isDown) return;

        e.preventDefault();

        const x = e.pageX - slider.offsetLeft;

        const walk = (x - startX) * 2;

        slider.scrollLeft = scrollLeft - walk;

    });

    /* ==========================
       TOUCH SUPPORT
    ========================== */

    let touchStart = 0;

    slider.addEventListener("touchstart", (e) => {

        cancelAnimationFrame(animationId);

        touchStart = e.touches[0].clientX;

    });

    slider.addEventListener("touchmove", (e) => {

        let touchEnd = e.touches[0].clientX;

        slider.scrollLeft += (touchStart - touchEnd);

        touchStart = touchEnd;

    });

    slider.addEventListener("touchend", () => {

        startSlider();

    });

}
