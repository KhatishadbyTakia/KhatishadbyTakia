/* ==========================================
   Khati Shad by Takia
   category.js
   Part-1
========================================== */

// =======================
// URL Parameter
// =======================

const params = new URLSearchParams(window.location.search);

const currentCategory = params.get("category") || "";


// =======================
// DOM Elements
// =======================

const productContainer = document.getElementById("productContainer");
const categoryTitle = document.getElementById("categoryTitle");


// =======================
// Category Names
// =======================

const categoryNames = {

    honey: "আমাদের সকল মধু",

    ghee: "আমাদের সকল ঘি",

    tel: "আমাদের সকল তেল",

    spices: "আমাদের সকল মসলা",

    achar: "আমাদের সকল আচার",

    snacks: "আমাদের সকল স্ন্যাকস"


};


// =======================
// Change Heading
// =======================

if (categoryTitle) {

    categoryTitle.textContent =
        categoryNames[currentCategory] ||
        "আমাদের সকল পণ্য";

}


// =======================
// Filter Products
// =======================

const filteredProducts = products.filter(product => {

    return product.category === currentCategory;

});


// =======================
// Format Price
// =======================

function formatPrice(price){

    return "৳ " + Number(price);

}


// =======================
// Stock Badge
// =======================

function getStockBadge(product){

    if(product.stock){

        return `
        <span class="stock-badge">
            IN STOCK
        </span>
        `;

    }

    return `
    <span class="stock-badge bg-danger">
        OUT OF STOCK
    </span>
    `;

}
/* ==========================================
   CREATE PRODUCT CARD
   Part-2
========================================== */


function createProductCard(product, index){


    let firstSize = product.sizes[0];



    let sizeButtons = "";



    product.sizes.forEach((size, i)=>{


        sizeButtons += `

        <button 
        class="size-btn ${i===0 ? "active":""}"

        onclick="changeCategorySize(
        ${product.id},
        ${size.price},
        '${size.weight}',
        this
        )">

            ${size.label}

        </button>

        `;


    });





    return `


    <div class="col-xl-4 col-lg-4 col-md-4 col-6 product-item">


    <div class="card product-card h-100"
    style="position:relative;">



    ${getStockBadge(product)}



    <img src="${product.image}"

    class="card-img-top"

    alt="${product.name}">





    <div class="card-body">





    <h5 class="product-name">

        ${product.name}

    </h5>





    <h3 
    id="price${product.id}"

    class="product-price">

        ৳ ${firstSize.price}

    </h3>





    <small

    id="weight${product.id}"

    class="text-muted d-block mb-3">

        ${firstSize.weight}

    </small>






    <div class="size-selector">


        ${sizeButtons}


    </div>







    <div class="quantity-box">



        <button onclick="minusCategoryQty(${product.id})">

            <i class="fa-solid fa-minus"></i>

        </button>





        <input

        id="qty${product.id}"

        type="text"

        value="1"

        readonly>







        <button onclick="plusCategoryQty(${product.id})">

            <i class="fa-solid fa-plus"></i>

        </button>



    </div>








    <button

    class="btn btn-success w-100 mt-3"


    onclick="addCategoryCart(

    '${product.name}',

    '${product.image}',

    ${product.id}

    )">


    <i class="fa-solid fa-cart-plus"></i>

    কার্টে যোগ করুন


    </button>






    </div>


    </div>


    </div>


    `;


}
/* ==========================================
   CATEGORY PRODUCT FUNCTIONS
   Part-3
========================================== */



// =======================
// Render Products
// =======================


function renderProducts(){


    if(!productContainer)
        return;



    productContainer.innerHTML = "";



    if(filteredProducts.length === 0){


        productContainer.innerHTML = `


        <div class="col-12">


            <div class="alert alert-warning text-center">


                এই ক্যাটাগরিতে কোন পণ্য নেই।


            </div>


        </div>


        `;


        return;

    }





    filteredProducts.forEach((product,index)=>{


        productContainer.innerHTML +=

        createProductCard(product,index);


    });



}





// =======================
// Selected Category Data
// =======================


const categorySelected = {};





// =======================
// Change Size
// =======================


function changeCategorySize(

id,

price,

weight,

button

){



    categorySelected[id] = {


        price:Number(price),

        weight:weight


    };





    const priceBox = 

    document.getElementById(
        "price"+id
    );



    const weightBox =

    document.getElementById(
        "weight"+id
    );





    if(priceBox){

        priceBox.innerHTML =
        "৳ " + price;

    }





    if(weightBox){

        weightBox.innerHTML =
        weight;

    }






    if(button){



        button.parentElement

        .querySelectorAll(".size-btn")

        .forEach(btn=>{


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


function plusCategoryQty(id){


    const qty =

    document.getElementById(
        "qty"+id
    );



    if(!qty)
        return;



    qty.value =
    Number(qty.value)+1;



}







// =======================
// Quantity Minus
// =======================


function minusCategoryQty(id){


    const qty =

    document.getElementById(
        "qty"+id
    );



    if(!qty)
        return;




    if(Number(qty.value)>1){


        qty.value =
        Number(qty.value)-1;


    }


}







// =======================
// Add Category Cart
// =======================


function addCategoryCart(

name,

image,

id

){



    const qty =

    Number(

    document.getElementById(
        "qty"+id
    ).value

    );





    if(!categorySelected[id]){



        showToast(
        "⚠️ আগে ওজন নির্বাচন করুন"
        );


        return;


    }





    addToCart(



        name,


        categorySelected[id].price,


        image,


        categorySelected[id].weight,


        qty



    );



}



// =======================
// Page Load
// =======================


document.addEventListener(
"DOMContentLoaded",

function(){



    renderProducts();




});
// =======================
// SEARCH PRODUCT
// =======================

function searchProduct(){

    const input = document.getElementById("searchInput").value.toLowerCase();

    const items = document.querySelectorAll(".product-item");

    items.forEach(item => {

        const name = item.querySelector(".product-name").innerText.toLowerCase();

        if(name.includes(input)){
            item.style.display = "block";
        }else{
            item.style.display = "none";
        }

    });

}
