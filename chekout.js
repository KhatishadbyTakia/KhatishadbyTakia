/* ==========================================
   Khati Shad by Takia
   checkout.js
   FINAL PREMIUM VERSION
   Part 1
========================================== */
// ======================================
// SweetAlert Function
// ======================================

function showAlert(icon, title, text) {

    Swal.fire({

        icon: icon,

        title: title,

        text: text,

        confirmButtonText: "ঠিক আছে",

        confirmButtonColor: "#198754",

        allowOutsideClick: false,

        allowEscapeKey: false,

        background: "#ffffff",

        color: "#333",

        customClass: {

            popup: "rounded-4 shadow-lg"

        }

    });

}


// ======================================
// Cart Variables
// ======================================

let cart = JSON.parse(localStorage.getItem("cart")) || [];


// ======================================
// Reload Cart
// ======================================

function reloadCart() {

    cart = JSON.parse(localStorage.getItem("cart")) || [];

}


// ======================================
// Update Cart Count
// ======================================

function updateCartCount() {

    reloadCart();

    let count = 0;

    cart.forEach(function(item){

        count += Number(item.qty || item.quantity || 1);

    });

    const badge = document.getElementById("cartCount");

    if(badge){

        badge.innerHTML = count;

    }

}


// ======================================
// Checkout Summary
// ======================================

function loadCheckoutSummary(){

    reloadCart();

    let subTotal = 0;

    cart.forEach(function(item){

        subTotal +=

            Number(item.price) *

            Number(item.qty || 1);

    });

    let delivery =

        Number(

            localStorage.getItem("checkoutDelivery")

        ) || 150;

    if(subTotal === 0){

        delivery = 0;

    }

    let grandTotal =

        subTotal + delivery;

    localStorage.setItem(

        "checkoutSubtotal",

        subTotal

    );

    localStorage.setItem(

        "checkoutGrandTotal",

        grandTotal

    );

    const sub =

        document.getElementById("subTotal");

    const del =

        document.getElementById("deliveryCharge");

    const grand =

        document.getElementById("grandTotal");

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

}


// ======================================
// DOM Ready
// ======================================

document.addEventListener("DOMContentLoaded",function(){

    updateCartCount();

    loadCheckoutSummary();

});
/* ==========================================
   Khati Shad by Takia
   checkout.js
   FINAL PREMIUM VERSION
   Part 2
   Payment & Validation
========================================== */


// ======================================
// Toggle bKash Section
// ======================================

function toggleBkash() {

    const payment = document.getElementById("paymentMethod");

    const trxBox = document
        .getElementById("trxId")
        .closest(".alert");

    if (!payment || !trxBox) return;

    if (payment.value === "bKash") {

        trxBox.style.display = "block";

    } else {

        trxBox.style.display = "none";

        document.getElementById("trxId").value = "";

    }

}


// ======================================
// Validate Checkout
// ======================================

function validateCheckout() {

    const name = document
        .getElementById("customerName")
        .value
        .trim();

    const phone = document
        .getElementById("customerPhone")
        .value
        .trim();

    const address = document
        .getElementById("customerAddress")
        .value
        .trim();

    const payment = document
        .getElementById("paymentMethod")
        .value;

    const trx = document
        .getElementById("trxId")
        .value
        .trim();


    // ==========================
    // Name
    // ==========================

    if (name === "") {

        showAlert(

            "warning",

            "নাম লিখুন",

            "অনুগ্রহ করে আপনার পূর্ণ নাম লিখুন।"

        );

        document.getElementById("customerName").focus();

        return false;

    }


    // ==========================
    // Phone Empty
    // ==========================

    if (phone === "") {

        showAlert(

            "warning",

            "মোবাইল নম্বর দিন",

            "অনুগ্রহ করে আপনার মোবাইল নম্বর লিখুন।"

        );

        document.getElementById("customerPhone").focus();

        return false;

    }


    // ==========================
    // Bangladesh Phone Validation
    // ==========================

    const phoneRegex = /^01[3-9]\d{8}$/;

    if (!phoneRegex.test(phone)) {

        showAlert(

            "error",

            "ভুল মোবাইল নম্বর",

            "১১ সংখ্যার সঠিক বাংলাদেশি মোবাইল নম্বর দিন।"

        );

        document.getElementById("customerPhone").focus();

        return false;

    }


    // ==========================
    // Address
    // ==========================

    if (address === "") {

        showAlert(

            "warning",

            "ঠিকানা লিখুন",

            "অনুগ্রহ করে সম্পূর্ণ ঠিকানা লিখুন।"

        );

        document.getElementById("customerAddress").focus();

        return false;

    }


    // ==========================
    // bKash Validation
    // ==========================

    if (payment === "bKash" && trx === "") {

        showAlert(

            "warning",

            "Transaction ID লিখুন",

            "অনুগ্রহ করে আপনার bKash Transaction ID লিখুন।"

        );

        document.getElementById("trxId").focus();

        return false;

    }


    return true;

}


// ======================================
// DOM Ready
// ======================================

document.addEventListener("DOMContentLoaded", function () {

    toggleBkash();

    const payment = document.getElementById("paymentMethod");

    if (payment) {

        payment.addEventListener(

            "change",

            toggleBkash

        );

    }

});
/* ==========================================
   Khati Shad by Takia
   checkout.js
   FINAL PREMIUM VERSION
   Part 3
   WhatsApp Order
========================================== */


// ======================================
// WhatsApp Order
// ======================================

function whatsappOrder() {

    reloadCart();

    if (!validateCheckout()) {

        return;

    }

    if (cart.length === 0) {

        showAlert(

            "info",

            "কার্ট খালি",

            "অর্ডার করার আগে কার্টে অন্তত একটি পণ্য যোগ করুন।"

        );

        return;

    }

    const name = document.getElementById("customerName").value.trim();

    const phone = document.getElementById("customerPhone").value.trim();

    const address = document.getElementById("customerAddress").value.trim();

    const note = document.getElementById("customerNote").value.trim();

    const payment = document.getElementById("paymentMethod").value;

    const trx = document.getElementById("trxId").value.trim();


    let subTotal = 0;

    cart.forEach(function(item){

        subTotal +=

            Number(item.price) *

            Number(item.qty || 1);

    });


    const delivery =

        Number(localStorage.getItem("checkoutDelivery")) || 150;


    const grandTotal =

        subTotal + delivery;


    localStorage.setItem(

        "checkoutSubtotal",

        subTotal

    );

    localStorage.setItem(

        "checkoutGrandTotal",

        grandTotal

    );


    let message = "";

    message += "🛒 *Khati Shad by Takia*";
    message += "\n";
    message += "━━━━━━━━━━━━━━━━━━━━";
    message += "\n\n";

    message += "👤 নামঃ " + name + "\n";
    message += "📞 মোবাইলঃ " + phone + "\n";
    message += "📍 ঠিকানাঃ " + address + "\n";
    message += "💳 পেমেন্টঃ " + payment + "\n";

    if(payment === "bKash"){

        message += "🧾 Transaction IDঃ " + trx + "\n";

    }

    message += "\n";
    message += "━━━━━━━━━━━━━━━━━━━━";
    message += "\n";
    message += "📦 অর্ডারের তালিকা";
    message += "\n";
    message += "━━━━━━━━━━━━━━━━━━━━";
    message += "\n\n";


    cart.forEach(function(item,index){

        const qty = Number(item.qty || 1);

        const total =

            Number(item.price) * qty;

        message +=

            (index+1) + ". " + item.name + "\n";

        if(item.weight){

            message +=

                "📦 ওজনঃ " + item.weight + "\n";

        }

        message +=

            "💰 মূল্যঃ ৳" + item.price + "\n";

        message +=

            "🔢 পরিমাণঃ " + qty + "\n";

        message +=

            "💵 মোটঃ ৳" + total + "\n\n";

    });


    message += "━━━━━━━━━━━━━━━━━━━━";
    message += "\n";

    message +=

        "💰 সাবটোটালঃ ৳" + subTotal + "\n";

    message +=

        "🚚 ডেলিভারিঃ ৳" + delivery + "\n";

    message +=

        "🧾 সর্বমোটঃ ৳" + grandTotal + "\n";


    if(note !== ""){

        message += "\n";
        message += "📝 নোটঃ";
        message += "\n";
        message += note;

    }


    const whatsappNumber = "8801791649266";


    window.open(

        "https://wa.me/" +

        whatsappNumber +

        "?text=" +

        encodeURIComponent(message),

        "_blank"

    );


    setTimeout(function(){

        orderSuccess();

    },1000);

}
/* ==========================================
   Khati Shad by Takia
   checkout.js
   FINAL PREMIUM VERSION
   Part 4
   Order Success & Reset
========================================== */



// ======================================
// Clear Checkout Data
// ======================================

function clearCheckoutData(){


    localStorage.removeItem(
        "checkoutSubtotal"
    );


    localStorage.removeItem(
        "checkoutDelivery"
    );


    localStorage.removeItem(
        "checkoutGrandTotal"
    );


}




// ======================================
// Clear Cart After Order
// ======================================

function clearCartAfterOrder(){


    localStorage.removeItem(
        "cart"
    );


    cart = [];


    updateCartCount();


}




// ======================================
// Reset Checkout Form
// ======================================

function resetCheckoutForm(){


    const form =
    document.querySelector("form");


    if(form){

        form.reset();

    }


    toggleBkash();


}




// ======================================
// Order Success Modal
// ======================================

function orderSuccess(){



    // Clear Cart

    clearCartAfterOrder();



    // Clear Checkout Data

    clearCheckoutData();



    // Reset Form

    resetCheckoutForm();



    // Reload Summary

    loadCheckoutSummary();



    const modalElement =
    document.getElementById(
        "orderSuccessModal"
    );



    if(modalElement){


        const modal =

        new bootstrap.Modal(
            modalElement
        );


        modal.show();


    }



}





// ======================================
// Final Page Load
// ======================================

document.addEventListener(
"DOMContentLoaded",
function(){


    updateCartCount();


    loadCheckoutSummary();


    toggleBkash();


});
/* ==========================================
   Khati Shad by Takia
   checkout.js
   FINAL PREMIUM VERSION
   Part 5
   Protection & Final Cleanup
========================================== */



// ======================================
// Prevent Empty Cart Checkout
// ======================================

function checkCartBeforeCheckout(){


    reloadCart();


    if(cart.length === 0){


        showAlert(

            "info",

            "কার্ট খালি",

            "অর্ডার করার আগে কার্টে পণ্য যোগ করুন।"

        );


        return false;


    }


    return true;


}





// ======================================
// Safe Number Convert
// ======================================

function safeNumber(value){


    let number = Number(value);


    if(isNaN(number)){


        return 0;


    }


    return number;


}




// ======================================
// Format Price
// ======================================

function formatPrice(price){


    return "৳" + 
    Number(price).toLocaleString("bn-BD");


}





// ======================================
// Confirm Before WhatsApp
// ======================================

function confirmOrder(){



    Swal.fire({


        title:"অর্ডার নিশ্চিত করবেন?",


        text:
        "WhatsApp এ অর্ডার পাঠানো হবে।",


        icon:"question",


        showCancelButton:true,


        confirmButtonText:"হ্যাঁ, অর্ডার করুন",


        cancelButtonText:"না",


        confirmButtonColor:"#198754",


        cancelButtonColor:"#dc3545",


        customClass:{

            popup:"rounded-4 shadow-lg"

        }



    }).then((result)=>{


        if(result.isConfirmed){


            whatsappOrder();


        }


    });



}





// ======================================
// Keyboard Enter Disable
// ======================================

document.addEventListener(
"keydown",
function(e){


    if(e.key==="Enter"){


        const tag =
        e.target.tagName.toLowerCase();



        if(tag==="textarea"){


            return;


        }



        e.preventDefault();


    }



});




// ======================================
// Image Error Protection
// ======================================

document.addEventListener(
"error",
function(e){


    if(e.target.tagName==="IMG"){


        e.target.src =
        "images/no-image.png";


    }


},
true
);




// ======================================
// Auto Save Customer Info
// ======================================


function saveCustomerInfo(){


    localStorage.setItem(

        "customerName",

        document.getElementById(
            "customerName"
        ).value

    );


    localStorage.setItem(

        "customerPhone",

        document.getElementById(
            "customerPhone"
        ).value

    );


    localStorage.setItem(

        "customerAddress",

        document.getElementById(
            "customerAddress"
        ).value

    );


}




// ======================================
// Load Customer Info
// ======================================


function loadCustomerInfo(){



    const name =
    localStorage.getItem(
        "customerName"
    );


    const phone =
    localStorage.getItem(
        "customerPhone"
    );


    const address =
    localStorage.getItem(
        "customerAddress"
    );



    if(name){

        document.getElementById(
            "customerName"
        ).value=name;

    }


    if(phone){

        document.getElementById(
            "customerPhone"
        ).value=phone;

    }


    if(address){

        document.getElementById(
            "customerAddress"
        ).value=address;

    }



}



// ======================================
// Save Input Change
// ======================================


document.addEventListener(
"DOMContentLoaded",
function(){


    loadCustomerInfo();



    const inputs =
    document.querySelectorAll(
        "#customerName,#customerPhone,#customerAddress"
    );


    inputs.forEach(function(input){


        input.addEventListener(
            "input",
            saveCustomerInfo
        );


    });



});
