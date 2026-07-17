// /* ==========================================
//    Khati Shad by Takia
//    Final app.js
//    Part - 1 (Core)
// ========================================== */

// // =======================
// // Cart
// // =======================

// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// // =======================
// // Save Cart
// // =======================

// function saveCart() {

//     localStorage.setItem("cart", JSON.stringify(cart));

//     updateCartCount();

// }

// // =======================
// // Reload Cart
// // =======================

// function reloadCart(){

//     cart = JSON.parse(localStorage.getItem("cart")) || [];

// }

// // =======================
// // Cart Count
// // =======================

// function updateCartCount(){

//     reloadCart();

//     let total = 0;

//     cart.forEach(item=>{

//         total += Number(item.qty);

//     });

//     const count = document.getElementById("cartCount");

//     if(count){

//         count.innerHTML = total;

//     }

// }

// // =======================
// // Common Add To Cart
// // =======================

// function addToCart(product){

//     reloadCart();

//     let existing = cart.find(item =>

//         item.name === product.name &&
//         item.weight === product.weight

//     );

//     if(existing){

//         existing.qty += Number(product.qty);

//     }

//     else{

//         cart.push({

//             name: product.name,

//             price: Number(product.price),

//             image: product.image,

//             weight: product.weight,

//             qty: Number(product.qty)

//         });

//     }

//     saveCart();

//     showToast(product.name);

// }

// // =======================
// // Toast
// // =======================

// function showToast(name, action = "add") {

//     const toast = document.getElementById("cartToast");

//     if (!toast) return;

//     const title = toast.querySelector("h6");
//     const text = document.getElementById("toastText");
//     const icon = toast.querySelector("i");

//     if (action === "add") {

//         title.innerHTML = "কার্টে যোগ হয়েছে";

//         text.innerHTML =
//         `${name} সফলভাবে কার্টে যোগ হয়েছে।`;

//         icon.className =
//         "fa-solid fa-circle-check text-success";

//     } else {

//         title.innerHTML = "কার্ট আপডেট";

//         text.innerHTML =
//         `${name} কার্ট থেকে সরানো হয়েছে।`;

//         icon.className =
//         "fa-solid fa-trash text-danger";

//     }

//     const bsToast =
//     bootstrap.Toast.getOrCreateInstance(toast);

//     bsToast.show();

// }
// // =======================
// // Page Load
// // =======================

// document.addEventListener("DOMContentLoaded",function(){

//     updateCartCount();

// });
// /* ==========================================
//    Khati Shad by Takia
//    Final app.js
//    Part - 2 (Products)
// ========================================== */

// // =======================
// // Product Data
// // =======================

// const selectedData = {

//     1: {
//         price: 1800,
//         weight: "১ কেজি"
//     },

//     2: {
//         price: 1400,
//         weight: "১ কেজি"
//     },

//     3: {
//         price: 320,
//         weight: "৫০০ গ্রাম"
//     },

//     4: {
//         price: 350,
//         weight: "৫০০ গ্রাম"
//     },

//     5: {
//         price: 570,
//         weight: "৩ কেজি"
//     },

//     6: {
//         price: 250,
//         weight: "৫০০ গ্রাম"
//     },

//     7: {
//         price: 450,
//         weight: "৫০০ মিলি"
//     },

//     8: {
//         price: 350,
//         weight: "৫০০ মিলি"
//     }

// };

// // =======================
// // Change Size
// // =======================

// function changeSize(id, price, weight, btn){

//     selectedData[id].price = Number(price);
//     selectedData[id].weight = weight;

//     const priceBox = document.getElementById("price" + id);
//     const weightBox = document.getElementById("weight" + id);

//     if(priceBox){
//         priceBox.innerHTML = "৳ " + price;
//     }

//     if(weightBox){
//         weightBox.innerHTML = weight;
//     }

//     let buttons = btn.parentElement.querySelectorAll(".size-btn");

//     buttons.forEach(function(item){
//         item.classList.remove("active");
//     });

//     btn.classList.add("active");

// }

// // =======================
// // Quantity Plus
// // =======================

// function plusQty(id){

//     let qty = document.getElementById("qty" + id);

//     qty.value = Number(qty.value) + 1;

// }

// // =======================
// // Quantity Minus
// // =======================

// function minusQty(id){

//     let qty = document.getElementById("qty" + id);

//     if(Number(qty.value) > 1){

//         qty.value = Number(qty.value) - 1;

//     }

// }

// // =======================
// // Products Page Add Cart
// // =======================

// function addSelectedCart(name, image, id){

//     let qty =
//     Number(document.getElementById("qty" + id).value);

//     addToCart({

//         name: name,

//         image: image,

//         price: selectedData[id].price,

//         weight: selectedData[id].weight,

//         qty: qty

//     });

// }

// // =======================
// // Home Page Add Cart
// // =======================

// function addHomeCart(name, price, image, weight){

//     addToCart({

//         name: name,

//         image: image,

//         price: Number(price),

//         weight: weight,

//         qty: 1

//     });

// }

// // =======================
// // Product Search
// // =======================

// function searchProduct(){

//     let input = document
//     .getElementById("searchInput");

//     if(!input) return;

//     let keyword = input.value.toLowerCase();

//     let products =
//     document.querySelectorAll(".product-item");

//     products.forEach(function(product){

//         let name = product
//         .querySelector(".product-name")
//         .innerText
//         .toLowerCase();

//         if(name.includes(keyword)){

//             product.style.display = "";

//         }

//         else{

//             product.style.display = "none";

//         }

//     });

// }
// /* ==========================================
//    Khati Shad by Takia
//    Final app.js
//    Part - 3A (Cart Page)
// ========================================== */

// // =======================
// // Load Cart
// // =======================

// function loadCart(){

//     reloadCart();

//     const cartItems = document.getElementById("cartItems");

//     if(!cartItems) return;

//     cartItems.innerHTML = "";

//     // Empty Cart
//     if(cart.length === 0){

//         const empty = document.getElementById("emptyCart");

//         if(empty){
//             empty.classList.remove("d-none");
//         }

//         calculateTotal();

//         updateCartCount();

//         return;

//     }

//     const empty = document.getElementById("emptyCart");

//     if(empty){
//         empty.classList.add("d-none");
//     }

//     cart.forEach((item,index)=>{

//         const total = item.price * item.qty;

//         cartItems.innerHTML += `

// <tr>

// <td>

// <div class="d-flex align-items-center">

// <img src="${item.image}"
// width="60"
// height="60"
// class="rounded me-2 object-fit-cover">

// <div>

// <div class="fw-bold">
// ${item.name}
// </div>

// <small class="text-muted">
// ${item.weight}
// </small>

// </div>

// </div>

// </td>

// <td class="text-center">

// ৳${item.price}

// </td>

// <td class="text-center">

// <div class="d-flex justify-content-center align-items-center">

// <button
// class="btn btn-sm btn-outline-danger"
// onclick="decreaseQty(${index})">

// <i class="fa-solid fa-minus"></i>

// </button>

// <span class="mx-3 fw-bold">

// ${item.qty}

// </span>

// <button
// class="btn btn-sm btn-outline-success"
// onclick="increaseQty(${index})">

// <i class="fa-solid fa-plus"></i>

// </button>

// </div>

// </td>

// <td class="text-center">

// ৳${total}

// </td>

// <td class="text-center">

// <button
// class="btn btn-danger btn-sm"
// onclick="removeItem(${index})">

// <i class="fa-solid fa-trash"></i>

// </button>

// </td>

// </tr>

// `;

//     });

//     calculateTotal();

//     updateCartCount();

// }

// // =======================
// // Increase Qty
// // =======================

// function increaseQty(index){

//     reloadCart();

//     cart[index].qty++;

//     saveCart();

//     loadCart();

// }

// // =======================
// // Decrease Qty
// // =======================

// function decreaseQty(index){

//     reloadCart();

//     if(cart[index].qty > 1){

//         cart[index].qty--;

//     }else{

//         cart.splice(index,1);

//     }

//     saveCart();

//     loadCart();

// }

// // =======================
// // Remove Item
// // =======================

// function removeItem(index){

//     reloadCart();

//     const productName = cart[index].name;

//     cart.splice(index,1);

//     saveCart();

//     loadCart();

//     showToast(productName,"remove");

// }
// /* ==========================================
//    Khati Shad by Takia
//    Final app.js
//    Part - 3B (Cart Total & Init)
// ========================================== */

// // =======================
// // Calculate Total
// // =======================

// function calculateTotal(){

//     reloadCart();

//     let subTotal = 0;

//     cart.forEach(item=>{

//         subTotal += item.price * item.qty;

//     });

//     const sub = document.getElementById("subTotal");
//     const deliveryBox = document.getElementById("deliveryCharge");
//     const grand = document.getElementById("grandTotal");

//     if(sub){
//         sub.innerHTML = "৳" + subTotal;
//     }

//     let delivery = 0;

//     const area = document.getElementById("deliveryArea");

//     if(area){

//         delivery = Number(area.value);

//     }

//     if(subTotal === 0){

//         delivery = 0;

//     }

//     if(deliveryBox){

//         deliveryBox.innerHTML = "৳" + delivery;

//     }

//     if(grand){

//         grand.innerHTML = "৳" + (subTotal + delivery);

//     }

// }

// // =======================
// // Delivery Change
// // =======================

// function deliveryChanged(){

//     calculateTotal();

// }

// // =======================
// // Clear Cart
// // =======================

// function confirmClearCart(){

//     cart=[];

//     saveCart();

//     loadCart();

//     showToast("সব পণ্য","remove");

//     bootstrap.Modal
//     .getInstance(
//         document.getElementById("clearCartModal")
//     )
//     .hide();

// }
// function clearCart(){

//     const modal =
//     new bootstrap.Modal(
//         document.getElementById("clearCartModal")
//     );

//     modal.show();

// }
// // =======================
// // Page Init
// // =======================

// document.addEventListener("DOMContentLoaded",function(){

//     updateCartCount();

//     if(document.getElementById("cartItems")){

//         loadCart();

//     }

//     const area = document.getElementById("deliveryArea");

//     if(area){

//         area.addEventListener("change",calculateTotal);

//     }

// });
// /* ==========================================
//    Khati Shad by Takia
//    Final app.js
//    Part - 4 (WhatsApp Checkout)
// ========================================== */

// // =======================
// // WhatsApp Checkout
// // =======================

// function whatsappOrder(){

//     reloadCart();

//     if(cart.length === 0){

//         alert("আপনার কার্ট খালি।");

//         return;

//     }

//     // Customer Information

//     const name =
//     document.getElementById("customerName")?.value.trim();

//     const phone =
//     document.getElementById("customerPhone")?.value.trim();

//     const address =
//     document.getElementById("customerAddress")?.value.trim();

//     const note =
//     document.getElementById("customerNote")?.value.trim();

//     const payment =
//     document.getElementById("paymentMethod")?.value || "Cash On Delivery";

//     const trx =
//     document.getElementById("trxId")?.value.trim();

//     if(!name || !phone || !address){

//         alert("নাম, মোবাইল নম্বর এবং ঠিকানা পূরণ করুন।");

//         return;

//     }

//     // =======================
//     // Order Message
//     // =======================

//     let message = "";

//     message += "🛒 *Khati Shad by Takia*";
//     message += "%0A";
//     message += "━━━━━━━━━━━━━━";
//     message += "%0A%0A";

//     message += "👤 নাম: " + name;
//     message += "%0A";

//     message += "📞 মোবাইল: " + phone;
//     message += "%0A";

//     message += "📍 ঠিকানা: " + address;
//     message += "%0A";

//     message += "💳 পেমেন্ট: " + payment;
//     message += "%0A";

//     if(trx){

//         message += "🧾 Transaction ID: " + trx;
//         message += "%0A";

//     }

//     message += "%0A";
//     message += "📦 *অর্ডারের তালিকা*";
//     message += "%0A";
//     message += "━━━━━━━━━━━━━━";
//     message += "%0A%0A";

//     let subTotal = 0;

//     cart.forEach(function(item,index){

//         let total = item.price * item.qty;

//         subTotal += total;

//         message +=
//         (index + 1) + ". " + item.name;

//         message += "%0A";

//         message +=
//         "📦 ওজন: " + item.weight;

//         message += "%0A";

//         message +=
//         "💰 মূল্য: ৳" + item.price;

//         message += "%0A";

//         message +=
//         "🔢 পরিমাণ: " + item.qty;

//         message += "%0A";

//         message +=
//         "💵 মোট: ৳" + total;

//         message += "%0A%0A";

//     });

//     // Delivery Charge

//     let delivery = 0;

//     const area =
//     document.getElementById("deliveryArea");

//     if(area){

//         delivery = Number(area.value);

//     }

//     let grandTotal =
//     subTotal + delivery;

//     message += "━━━━━━━━━━━━━━";
//     message += "%0A";

//     message +=
//     "💰 সাবটোটাল: ৳" + subTotal;

//     message += "%0A";

//     message +=
//     "🚚 ডেলিভারি: ৳" + delivery;

//     message += "%0A";

//     message +=
//     "💵 সর্বমোট: ৳" + grandTotal;

//     if(note){

//         message += "%0A%0A";
//         message += "📝 নোট:";
//         message += "%0A";
//         message += note;

//     }

//     // WhatsApp Number

//     const whatsappNumber =
//     "8801791649266";

//     window.open(

//         "https://wa.me/" +
//         whatsappNumber +
//         "?text=" +
//         message,

//         "_blank"

//     );

// }

/* ==========================================
   Khati Shad by Takia
   app.js
   Part 1 (Core)
========================================== */

// =======================
// Cart Variables
// =======================

/* ==========================================
   Khati Shad by Takia
   app.js
   Final Part 1
   Core Functions
========================================== */

// =======================
// Cart Variables
// =======================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let DELIVERY_CHARGE =
    Number(localStorage.getItem("deliveryCharge")) || 80;


// =======================
// Reload Cart
// =======================

function reloadCart() {

    cart =
        JSON.parse(localStorage.getItem("cart")) || [];

}


// =======================
// Save Cart
// =======================

function saveCart() {

    localStorage.setItem(

        "cart",

        JSON.stringify(cart)

    );

    updateCartCount();

}


// =======================
// Update Cart Count
// =======================

function updateCartCount() {

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

        document.getElementById("cartCount");

    if(badge){

        badge.innerHTML = count;

    }

}


// =======================
// Toast Notification
// =======================

function showToast(message){

    const toast =

        document.getElementById("cartToast");

    const text =

        document.getElementById("toastText");

    if(!toast || !text) return;

    text.innerHTML = message;

    const bsToast =

        bootstrap.Toast.getOrCreateInstance(toast);

    bsToast.show();

}


// =======================
// Common Add To Cart
// =======================

function addToCart(name, price, image, weight = "", qty = 1){

    reloadCart();

    let existing =

        cart.find(item =>

            item.name === name &&

            item.weight === weight

        );

    if(existing){

        existing.qty += Number(qty);

    }

    else{

        cart.push({

            name: name,

            price: Number(price),

            image: image,

            weight: weight,

            qty: Number(qty)

        });

    }

    saveCart();

    showToast(name + " কার্টে যোগ হয়েছে");

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
   Final Part 2
   Product Functions
========================================== */

// =======================
// Product Selected Data
// =======================

const selectedData = {};


// =======================
// Change Product Size
// =======================

function changeSize(id, price, weight, button) {

    selectedData[id] = {

        price: Number(price),

        weight: weight

    };

    const priceBox =
        document.getElementById("price" + id);

    const weightBox =
        document.getElementById("weight" + id);

    if (priceBox) {

        priceBox.innerHTML = "৳" + price;

    }

    if (weightBox) {

        weightBox.innerHTML = weight;

    }

    const buttons =
        button.parentElement.querySelectorAll(".size-btn");

    buttons.forEach(btn => {

        btn.classList.remove("active");

    });

    button.classList.add("active");

}


// =======================
// Increase Quantity
// =======================

function plusQty(id) {

    const qty =
        document.getElementById("qty" + id);

    if (!qty) return;

    qty.value = Number(qty.value) + 1;

}


// =======================
// Decrease Quantity
// =======================

function minusQty(id) {

    const qty =
        document.getElementById("qty" + id);

    if (!qty) return;

    if (Number(qty.value) > 1) {

        qty.value = Number(qty.value) - 1;

    }

}


// =======================
// Add Selected Product
// =======================

function addSelectedCart(name, image, id) {

    const qty =
        Number(document.getElementById("qty" + id).value);

    const product =
        selectedData[id];

    if (!product) {

    showToast("⚠️ প্রথমে ওজন নির্বাচন করুন");

    return;

}

addToCart(

    name,

    product.price,

    image,

    product.weight,

    qty

);

showToast("✅ " + name + " সফলভাবে কার্টে যোগ হয়েছে");

}


// =======================
// Home Product Add
// =======================

function addHomeCart(name, price, image, weight = "") {

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

function searchProduct() {

    const input =
        document.getElementById("searchInput");

    if (!input) return;

    const keyword =
        input.value.toLowerCase();

    const products =
        document.querySelectorAll(".product-item");

    products.forEach(function(product){

        const name =
            product.querySelector(".product-name")
            .innerText
            .toLowerCase();

        if (name.includes(keyword)) {

            product.style.display = "";

        }

        else {

            product.style.display = "none";

        }

    });

}
/* ==========================================
   Khati Shad by Takia
   app.js
   Final Part 3
   Cart Page
========================================== */

// =======================
// Load Cart
// =======================

function loadCart() {

    reloadCart();

    const cartItems =
        document.getElementById("cartItems");

    const emptyCart =
        document.getElementById("emptyCart");

    if (!cartItems) return;

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        if (emptyCart) {

            emptyCart.classList.remove("d-none");

        }

        calculateTotal();

        return;

    }

    if (emptyCart) {

        emptyCart.classList.add("d-none");

    }

    cart.forEach(function(item, index){

        const total =
            Number(item.price) *
            Number(item.qty);

        cartItems.innerHTML += `

<tr>

<td>

<div class="d-flex align-items-center">

<img src="${item.image}"
class="rounded me-2"
width="70"
height="70"
style="object-fit:cover;">

<div>

<div class="fw-bold">

${item.name}

</div>

<small class="text-muted">

${item.weight || ""}

</small>

</div>

</div>

</td>

<td class="text-center">

৳${item.price}

</td>

<td class="text-center">

<div class="d-flex justify-content-center align-items-center">

<button
class="btn btn-sm btn-outline-danger"
onclick="decreaseQty(${index})">

<i class="fa-solid fa-minus"></i>

</button>

<span class="mx-3 fw-bold">

${item.qty}

</span>

<button
class="btn btn-sm btn-outline-success"
onclick="increaseQty(${index})">

<i class="fa-solid fa-plus"></i>

</button>

</div>

</td>

<td class="text-center fw-bold">

৳${total}

</td>

<td class="text-center">

<button
class="btn btn-danger btn-sm"
onclick="removeItem(${index})">

<i class="fa-solid fa-trash"></i>

</button>

</td>

</tr>

`;

    });

    calculateTotal();

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

    }else{

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

    const productName =
        cart[index].name;

    cart.splice(index,1);

    saveCart();

    loadCart();

    showToast(productName + " কার্ট থেকে সরানো হয়েছে");

}
/* ==========================================
   Khati Shad by Takia
   app.js
   Final Part 4
   Cart Total & Checkout
========================================== */

// =======================
// Calculate Total
// =======================

function calculateTotal() {

    reloadCart();

    let subTotal = 0;

    cart.forEach(function(item){

        subTotal += Number(item.price) *
                    Number(item.qty);

    });

    let delivery = 0;

    const area =
        document.getElementById("deliveryArea");

    if(area){

        delivery = Number(area.value);

    }

    if(subTotal === 0){

        delivery = 0;

    }

    const grandTotal =
        subTotal + delivery;

    // Summary

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

    // Save Checkout Data

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
// Delivery Area Changed
// =======================

function deliveryChanged(){

    calculateTotal();

}


// =======================
// Checkout
// =======================

function goCheckout(){

    calculateTotal();

    window.location.href =
        "checkout.html";

}


// =======================
// Update Delivery
// =======================

const deliveryArea =
    document.getElementById("deliveryArea");

if(deliveryArea){

    deliveryArea.addEventListener(

        "change",

        function(){

            calculateTotal();

        }

    );

}
/* ==========================================
   Khati Shad by Takia
   app.js
   Final Part 5
   Clear Cart & Initialization
========================================== */

// =======================
// Clear Cart Modal
// =======================

function clearCart() {

    const modalElement =
        document.getElementById("clearCartModal");

    if (!modalElement) {

        if (confirm("আপনি কি কার্ট খালি করতে চান?")) {

            confirmClearCart();

        }

        return;

    }

    const modal =
        new bootstrap.Modal(modalElement);

    modal.show();

}


// =======================
// Confirm Clear Cart
// =======================

function confirmClearCart() {

    cart = [];

    saveCart();

    loadCart();

    calculateTotal();

    localStorage.removeItem("checkoutSubtotal");
    localStorage.removeItem("checkoutDelivery");
    localStorage.removeItem("checkoutGrandTotal");

    const modalElement =
        document.getElementById("clearCartModal");

    if (modalElement) {

        const modal =
            bootstrap.Modal.getInstance(modalElement);

        if (modal) {

            modal.hide();

        }

    }

    showToast("কার্ট খালি করা হয়েছে");

}


// =======================
// Continue Shopping
// =======================

function continueShopping() {

    window.location.href = "products.html";

}


// =======================
// Page Initialization
// =======================

document.addEventListener("DOMContentLoaded", function () {

    updateCartCount();

    if (document.getElementById("cartItems")) {

        loadCart();

    }

    if (document.getElementById("deliveryArea")) {

        document
            .getElementById("deliveryArea")
            .addEventListener("change", function () {

                calculateTotal();

            });

    }

    calculateTotal();

});
