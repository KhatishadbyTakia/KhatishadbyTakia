
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

        alert("প্রথমে ওজন নির্বাচন করুন");

        return;

    }

    addToCart(

        name,

        product.price,

        image,

        product.weight,

        qty

    );

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
