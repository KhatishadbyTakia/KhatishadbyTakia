/* ==========================================
   Khati Shad by Takia
   recipe.js
   Recipe Details Page
========================================== */

const recipeDetails = document.getElementById("recipeDetails");



if (recipeDetails) {


    const urlParams = new URLSearchParams(window.location.search);


    const recipeId = urlParams.get("id");



    const recipe = recipes.find(
        item => item.id === recipeId
    );



    if (!recipe) {


        recipeDetails.innerHTML = `

        <div class="container py-5 text-center">

            <i class="fa-solid fa-triangle-exclamation 
            text-danger fa-4x mb-3"></i>


            <h2>
                Recipe Not Found
            </h2>


            <a href="recipes.html"
            class="btn btn-success mt-3">

                সব রেসিপি দেখুন

            </a>


        </div>

        `;


    } else {



        document.title =
        recipe.title + " | Khati Shad by Takia";




        recipeDetails.innerHTML = `



<!-- =========================
 HERO
========================= -->


<section class="recipe-hero">


<img src="${recipe.image}"
alt="${recipe.title}">



<div class="recipe-overlay">


<div class="container">


<span class="recipe-badge">

${recipe.category}

</span>



<h1>

${recipe.title}

</h1>



<p>

${recipe.description}

</p>



<div class="recipe-info">


<span>

⭐ ${recipe.rating}

</span>



<span>

⏰ ${recipe.time}

</span>



<span>

👥 ${recipe.serves}

</span>



<span>

🔥 ${recipe.difficulty}

</span>



</div>


</div>


</div>


</section>






<!-- =========================
 VIDEO
========================= -->

<section class="container py-5">

    <div class="premium-box">

        <h2 class="mb-4">🎥 ভিডিও রেসিপি</h2>

        ${
        recipe.video.endsWith(".mp4")

        ?

        `
        <div class="video-wrapper">

            <video
                controls
                poster="${recipe.image}">

                <source src="${recipe.video}" type="video/mp4">

            </video>

        </div>
        `

        :

        `
        <div class="video-wrapper">

            <iframe
                src="${recipe.video}"
                allowfullscreen>

            </iframe>

        </div>

        <div class="text-center mt-3">

            <a href="${recipe.video}"
               target="_blank"
               class="btn btn-primary">

               <i class="fab fa-facebook"></i>
               Facebook-এ খুলুন

            </a>

        </div>

        `

        }

    </div>

</section>






<!-- =========================
 INGREDIENTS
========================= -->


<section class="container py-4">


<div class="premium-box">


<h2>
🛒 উপকরণ
</h2>



<ul class="ingredient-list">


${
recipe.ingredients.map(item =>

`
<li>

<i class="fa-solid fa-check"></i>

${item}

</li>

`

).join("")
}



</ul>


</div>


</section>







<!-- =========================
 COOKING STEPS
========================= -->


<section class="container py-4">


<div class="premium-box">


<h2>
👨‍🍳 রান্নার ধাপ
</h2>



${
recipe.steps.map(step =>


`

<div class="step-item">


<h4>

${step.title}

</h4>


<p>

${step.text}

</p>


</div>


`

).join("")
}



</div>


</section>







<!-- =========================
 PRODUCT
========================= -->


<section class="container py-5">


<div class="product-box">


<div class="row align-items-center">


<div class="col-md-5">


<img src="${recipe.productImage}"

class="img-fluid rounded-4"

alt="${recipe.productName}">


</div>




<div class="col-md-7">


<h2>

এই রেসিপিতে ব্যবহৃত পণ্য

</h2>



<h3>

${recipe.productName}

</h3>




<a href="${recipe.productLink}"

class="btn btn-success btn-lg mt-3">


🛒 এখনই কিনুন


</a>



</div>


</div>


</div>


</section>








<!-- =========================
 SHARE
========================= -->


<section class="container text-center py-5">


<h3>
বন্ধুদের সাথে শেয়ার করুন
</h3>



<button
onclick="shareFacebook()"

class="btn btn-primary m-2">


<i class="fab fa-facebook-f"></i>

Facebook


</button>





<button
onclick="shareWhatsapp()"

class="btn btn-success m-2">


<i class="fab fa-whatsapp"></i>

WhatsApp


</button>





<button
onclick="copyRecipeLink()"

class="btn btn-dark m-2">


<i class="fa-solid fa-link"></i>

Copy Link


</button>



</section>








<!-- =========================
 RELATED RECIPES
========================= -->


<section class="container py-5">


<h2 class="mb-4">

আরও রেসিপি

</h2>



<div class="row g-4">


${
recipes
.filter(item=>item.id !== recipe.id)
.slice(0,3)
.map(item =>


`

<div class="col-md-4">


<div class="card h-100">


<img src="${item.image}"

class="card-img-top">


<div class="card-body">


<h5>

${item.title}

</h5>



<a href="recipe-details.html?id=${item.id}"

class="btn btn-success">


দেখুন

</a>


</div>


</div>


</div>


`

).join("")
}



</div>


</section>




`;



    }


}







// =========================
// Facebook Share
// =========================


function shareFacebook(){


window.open(

"https://www.facebook.com/sharer/sharer.php?u="

+

encodeURIComponent(
window.location.href
)

);


}







// =========================
// WhatsApp Share
// =========================


function shareWhatsapp(){


window.open(

"https://wa.me/?text="

+

encodeURIComponent(

document.title

+

"\n"

+

window.location.href

)

);


}







// =========================
// Copy Link
// =========================


function copyRecipeLink(){


navigator.clipboard.writeText(

window.location.href

);


alert(
"Recipe link copied"
);


}
