/* ==========================================
   Khati Shad by Takia
   checkout.js
   Final Part 1 (Core)
========================================== */
// =======================
// Cart Variables
// =======================

let cart = JSON.parse(localStorage.getItem("cart")) || [];


// =======================
// Reload Cart
// =======================

function reloadCart() {

    cart = JSON.parse(localStorage.getItem("cart")) || [];

}


// =======================
// Update Cart Count
// =======================

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


// =======================
// Load Checkout Summary
// =======================

function loadCheckoutSummary(){

    reloadCart();

    let subTotal = 0;

    cart.forEach(function(item){

        subTotal += Number(item.price) *
                    Number(item.qty || 1);

    });

    let delivery =
        Number(localStorage.getItem("checkoutDelivery")) || 0;

    if(subTotal === 0){

        delivery = 0;

    }

    let grandTotal = subTotal + delivery;

    // Save Again

    localStorage.setItem(
        "checkoutSubtotal",
        subTotal
    );

    localStorage.setItem(
        "checkoutGrandTotal",
        grandTotal
    );

    // Show Summary

    const sub =
        document.getElementById("subTotal");

    const del =
        document.getElementById("deliveryCharge");

    const grand =
        document.getElementById("grandTotal");

    if(sub){

        sub.innerHTML = "৳" + subTotal;

    }

    if(del){

        del.innerHTML = "৳" + delivery;

    }

    if(grand){

        grand.innerHTML = "৳" + grandTotal;

    }

}


// =======================
// Page Load
// =======================

document.addEventListener("DOMContentLoaded",function(){

    updateCartCount();

    loadCheckoutSummary();

});
/* ==========================================
   Khati Shad by Takia
   checkout.js
   Final Part 2
   Payment & Validation
========================================== */

// =======================
// Toggle bKash Section
// =======================

function toggleBkash() {

    const payment =
        document.getElementById("paymentMethod");

    const trxBox =
        document.getElementById("trxId")
        .closest(".alert");

    if (!payment || !trxBox) return;

    if (payment.value === "bKash") {

        trxBox.style.display = "block";

    } else {

        trxBox.style.display = "none";

        document.getElementById("trxId").value = "";

    }

}


// =======================
// Validate Checkout Form
// =======================

function validateCheckout() {

    const name =
        document.getElementById("customerName")
        .value.trim();

    const phone =
        document.getElementById("customerPhone")
        .value.trim();

    const address =
        document.getElementById("customerAddress")
        .value.trim();

    const payment =
        document.getElementById("paymentMethod")
        .value;

    const trx =
        document.getElementById("trxId")
        .value.trim();

    // Name

    if (name === "") {

        alert("আপনার নাম লিখুন");

        document.getElementById("customerName").focus();

        return false;

    }

    // Phone

    if (phone === "") {

        alert("মোবাইল নম্বর লিখুন");

        document.getElementById("customerPhone").focus();

        return false;

    }

    // Bangladesh Mobile Validation

    const phoneRegex = /^01[3-9]\d{8}$/;

    if (!phoneRegex.test(phone)) {

        alert("সঠিক মোবাইল নম্বর লিখুন");

        document.getElementById("customerPhone").focus();

        return false;

    }

    // Address

    if (address === "") {

        alert("সম্পূর্ণ ঠিকানা লিখুন");

        document.getElementById("customerAddress").focus();

        return false;

    }

    // bKash Validation

    if (payment === "bKash" && trx === "") {

        alert("Transaction ID লিখুন");

        document.getElementById("trxId").focus();

        return false;

    }

    return true;

}


// =======================
// Page Initialization
// =======================

document.addEventListener("DOMContentLoaded", function () {

    toggleBkash();

    const payment =
        document.getElementById("paymentMethod");

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
   Final Part 3
   WhatsApp Order
========================================== */

// =======================
// WhatsApp Order
// =======================

function whatsappOrder() {

    reloadCart();

    if (!validateCheckout()) return;

    if (cart.length === 0) {

        alert("আপনার কার্ট খালি।");

        return;

    }

    const name =
        document.getElementById("customerName").value.trim();

    const phone =
        document.getElementById("customerPhone").value.trim();

    const address =
        document.getElementById("customerAddress").value.trim();

    const note =
        document.getElementById("customerNote").value.trim();

    const payment =
        document.getElementById("paymentMethod").value;

    const trx =
        document.getElementById("trxId").value.trim();

    let subTotal = 0;

    cart.forEach(function (item) {

        subTotal += Number(item.price) *
                    Number(item.qty);

    });

    const delivery =
        Number(localStorage.getItem("checkoutDelivery")) || 0;

    const grandTotal =
        subTotal + delivery;

    // Update Summary

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
    message += "\n\n";

    message += "👤 নামঃ " + name + "\n";
    message += "📞 মোবাইলঃ " + phone + "\n";
    message += "📍 ঠিকানাঃ " + address + "\n";
    message += "💳 পেমেন্টঃ " + payment + "\n";

    if (payment === "bKash") {

        message +=
            "🧾 Transaction ID: " + trx + "\n";

    }

    message += "\n";
    message += "━━━━━━━━━━━━━━━━━━\n";
    message += "📦 অর্ডারের তালিকা\n";
    message += "━━━━━━━━━━━━━━━━━━\n\n";

    cart.forEach(function (item, index) {

        const qty =
            Number(item.qty);

        const total =
            Number(item.price) * qty;

        message +=
            (index + 1) + ". " + item.name + "\n";

        if (item.weight) {

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

    message += "━━━━━━━━━━━━━━━━━━\n";

    message +=
        "💰 সাবটোটালঃ ৳" +
        subTotal + "\n";

    message +=
        "🚚 ডেলিভারিঃ ৳" +
        delivery + "\n";

    message +=
        "🧾 সর্বমোটঃ ৳" +
        grandTotal + "\n";

    if (note !== "") {

        message +=
            "\n📝 নোটঃ\n" + note;

    }

    const whatsappNumber =
        "8801791649266";

    window.open(

        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message),

        "_blank"

    );
    setTimeout(orderSuccess, 1000);

}
/* ==========================================
   Khati Shad by Takia
   checkout.js
   Final Part 4
   Order Success & Reset
========================================== */

// =======================
// Clear Checkout Data
// =======================

function clearCheckoutData() {

    localStorage.removeItem("checkoutSubtotal");

    localStorage.removeItem("checkoutDelivery");

    localStorage.removeItem("checkoutGrandTotal");

}


// =======================
// Clear Cart
// =======================

function clearCartAfterOrder() {

    localStorage.removeItem("cart");

    cart = [];

    updateCartCount();

}


// =======================
// Reset Checkout Form
// =======================

function resetCheckoutForm() {

    const form =
        document.querySelector("form");

    if (form) {

        form.reset();

    }

    toggleBkash();

}


// =======================
// Order Success
// =======================

function orderSuccess() {

    clearCartAfterOrder();

    clearCheckoutData();

    resetCheckoutForm();

    alert("🎉 আপনার অর্ডার সফলভাবে পাঠানো হয়েছে।");

}


// =======================
// Complete Order
// =======================

// whatsappOrder() এর শেষে
// window.open(...) এর পর
// নিচের লাইনটি যোগ করবে।

// setTimeout(orderSuccess, 1000);


// =======================
// Page Init
// =======================

document.addEventListener("DOMContentLoaded", function () {

    updateCartCount();

    loadCheckoutSummary();

    toggleBkash();

    const payment =
        document.getElementById("paymentMethod");

    if (payment) {

        payment.addEventListener(

            "change",

            toggleBkash

        );

    }

});
