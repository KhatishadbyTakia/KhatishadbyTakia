/* ==========================================
PREMIUM CHECKOUT JS FIX PART-1
CART LOAD + TOTAL SYSTEM
========================================== */


// ==========================
// GET CART
// ==========================

let cart = JSON.parse(
localStorage.getItem("cart")
) || [];




// ==========================
// DOM LOAD
// ==========================

document.addEventListener(
"DOMContentLoaded",
()=>{

loadCheckoutCart();

updateCartCount();

calculateTotal();


}
);





// ==========================
// LOAD CHECKOUT CART
// ==========================

function loadCheckoutCart(){


const box =
document.getElementById(
"checkoutItems"
);



if(!box) return;



box.innerHTML="";



if(cart.length===0){

box.innerHTML=`

<div class="text-center p-4">

<i class="fa-solid fa-cart-shopping fa-2x text-muted"></i>

<p class="mt-2">
আপনার কার্ট খালি
</p>


<a href="index.html"
class="btn btn-success">

পণ্য দেখুন

</a>

</div>

`;

return;

}





cart.forEach(item=>{


let price =
Number(item.price) || 0;


let qty =
Number(item.qty) || 1;



let itemTotal =
price * qty;



box.innerHTML += `


<div class="checkout-product-item">


<div class="d-flex align-items-center">


<div class="checkout-product-image">


<img src="${item.image || 'image/default.png'}">


</div>



<div class="checkout-product-info">


<div class="checkout-product-name">

${item.name}

</div>



<div class="checkout-product-weight">

${item.variant || item.weight || ""}

</div>



<div class="checkout-product-weight">

Qty: ${qty}

</div>


</div>


</div>



<div class="checkout-product-price">

৳${itemTotal}

</div>



</div>


`;



});


}







// ==========================
// CART COUNT
// ==========================

function updateCartCount(){


const count =
document.getElementById(
"cartCount"
);



if(!count) return;



let totalQty = 0;



cart.forEach(item=>{


totalQty += Number(item.qty) || 0;


});



count.innerHTML =
totalQty;


}








// ==========================
// SUBTOTAL
// ==========================


function calculateSubtotal(){


let subtotal = 0;



cart.forEach(item=>{


let price =
Number(item.price) || 0;


let qty =
Number(item.qty) || 0;



subtotal +=
price * qty;



});



return subtotal;


}








// ==========================
// TOTAL CALCULATE
// ==========================


function calculateTotal(){



let subtotal =
calculateSubtotal();




const area =
document.getElementById(
"deliveryArea"
);




let delivery = 150;



if(area){

delivery =
Number(area.value);

}





let grandTotal =
subtotal + delivery;





const sub =
document.getElementById(
"subTotal"
);



const deliveryBox =
document.getElementById(
"deliveryCharge"
);



const grand =
document.getElementById(
"grandTotal"
);






if(sub){

sub.innerHTML =
"৳"+subtotal;

}




if(deliveryBox){

deliveryBox.innerHTML =
"৳"+delivery;

}




if(grand){

grand.innerHTML =
"৳"+grandTotal;

}



}








// ==========================
// DELIVERY CHANGE
// ==========================


document.addEventListener(
"DOMContentLoaded",
()=>{


const area =
document.getElementById(
"deliveryArea"
);



if(area){


area.addEventListener(
"change",
calculateTotal
);


}



});
/* ==========================================
PREMIUM CHECKOUT JS FIX PART-2
PAYMENT + BKASH + VALIDATION
========================================== */



// ==========================
// PAYMENT CHANGE
// ==========================

function paymentChanged(){


const selectedPayment =
document.querySelector(
'input[name="payment"]:checked'
);



const bkashBox =
document.getElementById(
"bkashBox"
);



if(!selectedPayment || !bkashBox)
return;



if(selectedPayment.value === "bKash"){


bkashBox.classList.add(
"show-payment"
);


}

else{


bkashBox.classList.remove(
"show-payment"
);


}



}







// ==========================
// PAYMENT LISTENER
// ==========================


document.addEventListener(
"DOMContentLoaded",
()=>{


const payments =
document.querySelectorAll(
'input[name="payment"]'
);



payments.forEach(payment=>{


payment.addEventListener(
"change",
paymentChanged
);


});



paymentChanged();



});








// ==========================
// INPUT VALIDATION
// ==========================


function validateInput(
id,
regex=null
){



const input =
document.getElementById(id);



if(!input)
return false;




let value =
input.value.trim();



let valid = true;




if(value === ""){


valid=false;


}




if(regex && value){


valid =
regex.test(value);


}





input.classList.remove(
"input-success",
"input-error"
);





if(valid){


input.classList.add(
"input-success"
);


}

else{


input.classList.add(
"input-error"
);


}





return valid;



}









// ==========================
// LIVE VALIDATION
// ==========================


document.addEventListener(
"DOMContentLoaded",
()=>{



const name =
document.getElementById(
"customerName"
);



const phone =
document.getElementById(
"customerPhone"
);



const address =
document.getElementById(
"customerAddress"
);







// NAME


if(name){


name.addEventListener(
"input",
()=>{


validateInput(
"customerName"
);


}

);


}








// PHONE


if(phone){



phone.addEventListener(
"input",
()=>{



phone.value =
phone.value.replace(
/[^0-9]/g,
""
);



validateInput(
"customerPhone",
/^01[3-9]\d{8}$/
);



}

);



}







// ADDRESS


if(address){


address.addEventListener(
"input",
()=>{


validateInput(
"customerAddress"
);



}

);



}





});








// ==========================
// COPY BKASH NUMBER
// ==========================


function copyBkash(){



const number =
"01791649266";



navigator.clipboard.writeText(
number
);




const btn =
document.getElementById(
"copyBtn"
);





if(btn){



btn.innerHTML = `

<i class="fa-solid fa-check"></i>

Copied

`;





setTimeout(()=>{


btn.innerHTML = `

<i class="fa-regular fa-copy"></i>

Copy

`;


},2000);



}





}
/* ==========================================
PREMIUM CHECKOUT JS FIX PART-3
WHATSAPP ORDER SYSTEM FIXED
========================================== */



function whatsappOrder(){



// Reload Latest Cart

cart = JSON.parse(
localStorage.getItem("cart")
) || [];




// Cart Empty Check

if(cart.length === 0){


alert(
"আপনার কার্ট খালি।"
);


return;


}






// ==========================
// VALIDATION
// ==========================


const nameOk =
validateInput(
"customerName"
);



const phoneOk =
validateInput(
"customerPhone",
/^01[3-9]\d{8}$/
);



const addressOk =
validateInput(
"customerAddress"
);






if(
!nameOk ||
!phoneOk ||
!addressOk
){


alert(
"সঠিক তথ্য পূরণ করুন।"
);


return;


}







// ==========================
// CUSTOMER INFO
// ==========================


const name =
document.getElementById(
"customerName"
).value.trim();




const phone =
document.getElementById(
"customerPhone"
).value.trim();




const address =
document.getElementById(
"customerAddress"
).value.trim();




const note =
document.getElementById(
"customerNote"
)?.value.trim()
||
"";








// ==========================
// PAYMENT
// ==========================


const paymentElement =
document.querySelector(
'input[name="payment"]:checked'
);



const payment =
paymentElement
?
paymentElement.value
:
"Cash on Delivery";







// ==========================
// BKASH TRX CHECK
// ==========================


const trx =
document.getElementById(
"trxId"
)?.value.trim()
||
"";





if(
payment==="bKash" &&
trx===""

){


alert(
"Transaction ID লিখুন।"
);



document
.getElementById("trxId")
.focus();



return;


}








// ==========================
// DELIVERY CHARGE FIX
// ==========================


const area =
document.getElementById(
"deliveryArea"
);



let delivery = 150;



if(area){


delivery =
Number(area.value);


}









// ==========================
// WHATSAPP MESSAGE
// ==========================


let message = "";



message +=
"🌿 *Khati Shad by Takia*";



message +=
"\n━━━━━━━━━━━━━━\n\n";





message +=
"👤 নামঃ "
+ name
+"\n";



message +=
"📞 মোবাইলঃ "
+ phone
+"\n";



message +=
"📍 ঠিকানাঃ "
+ address
+"\n";



message +=
"💳 Paymentঃ "
+ payment
+"\n";





if(payment==="bKash"){


message +=
"🧾 TRX IDঃ "
+ trx
+"\n";


}






message +=
"\n🛒 *অর্ডারের তালিকা*\n";



message +=
"━━━━━━━━━━━━━━\n\n";







let subtotal = 0;





cart.forEach(
(item,index)=>{


let price =
Number(item.price)
||
0;



let qty =
Number(item.qty)
||
1;




let itemTotal =
price * qty;



subtotal += itemTotal;





message +=
(index+1)
+". "
+
item.name
+
"\n";





message +=
"📦 "
+
(item.variant || item.weight || "")
+
"\n";





message +=
"🔢 Qty: "
+
qty
+
"\n";





message +=
"💰 Price: ৳"
+
price
+
"\n";





message +=
"💵 Total: ৳"
+
itemTotal
+
"\n\n";





});









// FINAL TOTAL


let grandTotal =
subtotal + delivery;





message +=
"━━━━━━━━━━━━━━\n";



message +=
"💰 Subtotal: ৳"
+
subtotal
+
"\n";



message +=
"🚚 Delivery: ৳"
+
delivery
+
"\n";



message +=
"💵 Grand Total: ৳"
+
grandTotal;






if(note){


message +=
"\n\n📝 Note: "
+
note;


}







// ==========================
// WHATSAPP NUMBER
// ==========================


const whatsappNumber =
"8801791649266";





window.open(

"https://wa.me/"
+
whatsappNumber
+
"?text="
+
encodeURIComponent(message),

"_blank"

);



}
/* ==========================================
PREMIUM CHECKOUT JS FIX PART-4
BUTTON + TOAST + CART CLEAR
========================================== */



// ==========================
// DOUBLE CLICK CONTROL
// ==========================

let ordering = false;





function disableOrderButton(){


if(ordering){


return false;


}



ordering = true;




const btn =
document.querySelector(
".checkout-submit-btn"
);





if(btn){



btn.disabled = true;



btn.classList.add(
"loading"
);



btn.innerHTML = `

<i class="fa-solid fa-spinner"></i>

অর্ডার পাঠানো হচ্ছে...

`;



}



return true;


}









// ==========================
// ENABLE BUTTON
// ==========================


function enableOrderButton(){


ordering = false;




const btn =
document.querySelector(
".checkout-submit-btn"
);





if(btn){



btn.disabled = false;



btn.classList.remove(
"loading"
);




btn.innerHTML = `

<i class="fab fa-whatsapp"></i>

WhatsApp-এ অর্ডার নিশ্চিত করুন

`;



}



}









// ==========================
// CLEAR CART
// ==========================


function clearCart(){



localStorage.removeItem(
"cart"
);



cart = [];



updateCartCount();


calculateTotal();


loadCheckoutCart();



}









// ==========================
// TOAST MESSAGE
// ==========================


function showToast(text){



const toastText =
document.getElementById(
"toastText"
);




if(toastText){



toastText.innerHTML =
text;



}






const toast =
document.getElementById(
"cartToast"
);





if(
toast &&
typeof bootstrap !== "undefined"
){



const bsToast =
new bootstrap.Toast(
toast,
{

delay:3000

}

);



bsToast.show();



}

else{


alert(text);


}



}









// ==========================
// SCROLL TOP
// ==========================


function scrollTopSmooth(){


window.scrollTo({

top:0,

behavior:"smooth"

});


}









// ==========================
// PAGE ANIMATION
// ==========================


document.addEventListener(
"DOMContentLoaded",
()=>{


document.body.classList.add(
"checkout-page"
);



});









// ==========================
// PAYMENT ACTIVE STYLE
// ==========================


document.addEventListener(
"DOMContentLoaded",
()=>{


const payments =
document.querySelectorAll(
".payment-box"
);





payments.forEach(box=>{


box.addEventListener(
"click",
()=>{



payments.forEach(item=>{


item.classList.remove(
"active"
);



});





box.classList.add(
"active"
);



});



});



});








// ==========================
// ORDER BUTTON CONNECT
// ==========================


document.addEventListener(
"DOMContentLoaded",
()=>{



const btn =
document.querySelector(
".checkout-submit-btn"
);





if(btn){



btn.addEventListener(
"click",
()=>{





if(!disableOrderButton()){


return;


}





whatsappOrder();





setTimeout(()=>{


enableOrderButton();


},3000);





});



}



});
/* ==========================================
PREMIUM CHECKOUT JS FIX PART-5
FINAL INTEGRATION
========================================== */



// ==========================
// AUTO DELIVERY UPDATE
// ==========================


document.addEventListener(
"DOMContentLoaded",
()=>{


const area =
document.getElementById(
"deliveryArea"
);



if(area){



area.addEventListener(
"change",
()=>{


calculateTotal();



});



}



});









// ==========================
// PAYMENT FINAL SYNC
// ==========================


document.addEventListener(
"DOMContentLoaded",
()=>{



const payments =
document.querySelectorAll(
'input[name="payment"]'
);



const bkashBox =
document.getElementById(
"bkashBox"
);






if(!bkashBox)
return;





payments.forEach(payment=>{



payment.addEventListener(
"change",
()=>{





if(
payment.checked &&
payment.value==="bKash"
){



bkashBox.classList.add(
"show-payment"
);



}

else{



bkashBox.classList.remove(
"show-payment"
);



}





});



});



});









// ==========================
// ORDER SUCCESS HANDLER
// ==========================


function orderSuccess(){



showToast(

"✅ আপনার অর্ডার WhatsApp এ পাঠানো হয়েছে।"

);





setTimeout(()=>{


clearCart();



},1000);



}









// ==========================
// UPDATE ORDER BUTTON EVENT
// ==========================


document.addEventListener(
"DOMContentLoaded",
()=>{



const btn =
document.querySelector(
".checkout-submit-btn"
);





if(btn){



btn.addEventListener(
"click",
()=>{



setTimeout(()=>{


orderSuccess();



},1500);



});



}



});









// ==========================
// INITIAL LOAD CHECK
// ==========================


document.addEventListener(
"DOMContentLoaded",
()=>{



loadCheckoutCart();


calculateTotal();


updateCartCount();



});
