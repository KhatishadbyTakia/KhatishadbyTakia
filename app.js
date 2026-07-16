/* ==========================================
   Khati Shad by Takia
   app.js (Part 1)
========================================== */

// =======================
// Cart Variables
// =======================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// =======================
// Save Cart
// =======================

function saveCart() {

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

}

// =======================
// Cart Count
// =======================

function updateCartCount() {

    const count = document.getElementById("cartCount");

    if (!count) return;

    let total = 0;

    cart.forEach(item => {

        total += item.qty;

    });

    count.innerHTML = total;

}

// =======================
// Add Product
// =======================

function addToCart(name, price, image, weight) {

    let product = cart.find(item => item.name === name);

    if (product) {

        product.qty++;

    }

    else {

      cart.push({
    name: name,
    price: Number(price),
    image: image,
    weight: weight,
    qty: 1
});
    }

    saveCart();

updateCartCount();

showMessage("আপনার কার্টে পণ্যটি সফলভাবে যোগ করা হয়েছে।");

}

// =======================
// Remove Item
// =======================

function removeItem(index) {

    cart.splice(index, 1);

    saveCart();

    renderCart();

}

// =======================
// Increase Qty
// =======================

function increaseQty(index) {

    cart[index].qty++;

    saveCart();

    renderCart();

}

// =======================
// Decrease Qty
// =======================

function decreaseQty(index) {

    if (cart[index].qty > 1) {

        cart[index].qty--;

    }

    else {

        cart.splice(index, 1);

    }

    saveCart();

    renderCart();

}

// =======================
// Grand Total
// =======================

function calculateTotal() {

    let total = 0;

    cart.forEach(item => {

        total += item.price * item.qty;

    });

    return total;

}/* ==========================================
   Khati Shad by Takia
   app.js (Part 2)
========================================== */

// =======================
// Render Cart
// =======================

function renderCart() {

    const cartTable = document.getElementById("cartItems");

    if (!cartTable) return;

    cartTable.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price * item.qty;

        cartTable.innerHTML += `

<tr>

<td>
    <img src="${item.image}" width="70" class="rounded">
</td>

<td>
    ${item.name}
</td>

<td>
    ${item.weight}
</td>

<td>
    ৳${item.price}
</td>

<td>
    <div class="d-flex justify-content-center align-items-center">
        <button class="btn btn-sm btn-success me-2"
            onclick="decreaseQty(${index})">
            -
        </button>

        <span>${item.qty}</span>

        <button class="btn btn-sm btn-success ms-2"
            onclick="increaseQty(${index})">
            +
        </button>
    </div>
</td>

<td>
    ৳${item.price * item.qty}
</td>

<td>
    <button class="btn btn-danger btn-sm"
        onclick="removeItem(${index})">
        <i class="fa fa-trash"></i>
    </button>
</td>

</tr>

`;

    });

    // =======================
// Summary Calculation
// =======================

const delivery = total > 0 ? 150 : 0;

const subTotal = document.getElementById("subTotal");
const deliveryCharge = document.getElementById("deliveryCharge");
const grandTotal = document.getElementById("grandTotal");

if (subTotal) {
    subTotal.innerHTML = "৳" + total;
}

if (deliveryCharge) {
    deliveryCharge.innerHTML = "৳" + delivery;
}

if (grandTotal) {
    grandTotal.innerHTML = "৳" + (total + delivery);
}

}

// =======================
// Clear Cart
// =======================

function clearCart() {

    if (confirm("আপনি কি কার্ট খালি করতে চান?")) {

        cart = [];

        saveCart();

        renderCart();

    }

}

// =======================
// WhatsApp Checkout
// =======================

// =======================
// WhatsApp Checkout
// =======================

function whatsappOrder() {


    if(cart.length === 0){

        alert("কার্ট খালি।");

        return;

    }


    let name = document.getElementById("customerName").value;
    let phone = document.getElementById("customerPhone").value;
    let address = document.getElementById("customerAddress").value;
    let note = document.getElementById("customerNote").value;
    let payment =
document.getElementById("paymentMethod").value;


let trx =
document.getElementById("trxId").value;



    if(name==="" || phone==="" || address===""){

        alert("নাম, মোবাইল এবং ঠিকানা পূরণ করুন");

        return;

    }



    let message = 
    "🛒 *Khati Shad by Takia Order*%0A%0A";


    message += 
    "👤 নাম: "+name+
    "%0A📞 মোবাইল: "+phone+
    "%0A📍 ঠিকানা: "+address+
    "%0A%0A";
    message +=
"💳 Payment: "+payment+
"%0A";


if(trx){

message +=
"🧾 Transaction ID: "+trx+
"%0A";

}


message += "%0A";



    message += "📦 পণ্যের তালিকা:%0A";


    let total = 0;


   cart.forEach(item=>{

    let itemTotal = item.price * item.qty;

    message +=
    "✅ " + item.name +
    "%0A📦 ওজন: " + item.weight +
    "%0A🔢 পরিমাণ: " + item.qty +
    "%0A💰 মূল্য: ৳" + itemTotal +
    "%0A%0A";

    total += itemTotal;

});

let delivery = total > 0 ? 150 : 0;


    message +=
    "%0A💰 সাবটোটাল = ৳"+total+
    "%0A🚚 ডেলিভারি = ৳"+delivery+
    "%0A💵 মোট = ৳"+(total+delivery);



    if(note){

        message +=
        "%0A%0A📝 নোট: "+note;

    }



  let whatsappNumber = "+8801791649266";


    window.open(
        "https://wa.me/"+whatsappNumber+"?text="+message,
        "_blank"
    );


}

// =======================
// Search Products
// =======================

function searchProducts() {

    const input = document.getElementById("searchInput");

    if (!input) return;

    const filter = input.value.toLowerCase();

    const cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {

        const text = card.innerText.toLowerCase();

        card.style.display = text.includes(filter)
            ? ""
            : "none";

    });

}

// =======================
// Page Load
// =======================

document.addEventListener("DOMContentLoaded", () => {

    updateCartCount();

    renderCart();


    // Checkout page total show
    if(document.getElementById("grandTotal")){

    let total = calculateTotal();

    let delivery = total > 0 ? 150 : 0;


    document.getElementById("subTotal").innerHTML =
    "৳"+total;


    document.getElementById("deliveryCharge").innerHTML =
    "৳"+delivery;


    document.getElementById("grandTotal").innerHTML =
    "৳"+(total + delivery);

}

});
// =======================
// Custom Toast
// =======================

function showMessage(message) {

    const toast = document.createElement("div");

    toast.className = "custom-toast";

    toast.innerHTML = `
        <i class="fa-solid fa-circle-check"></i>
        <span>${message}</span>
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show");
    }, 100);

    setTimeout(() => {
        toast.classList.remove("show");

        setTimeout(() => {
            toast.remove();
        }, 300);

    }, 2500);

}
