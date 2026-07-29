/* ==========================================
   Khati Shad by Takia
   support.js
   AI PRODUCT INFORMATION SUPPORT
========================================== */


const chatBody = document.getElementById("chatBody");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const quickButtons = document.querySelectorAll(".quick");




// ==============================
// INIT
// ==============================

document.addEventListener("DOMContentLoaded",()=>{

    initSupport();

});



function initSupport(){

    bindEvents();

    welcomeMessage();

}






// ==============================
// EVENTS
// ==============================


function bindEvents(){


    sendBtn.addEventListener(
        "click",
        sendMessage
    );


    userInput.addEventListener(
        "keypress",
        function(e){

            if(e.key==="Enter"){

                sendMessage();

            }

        }
    );



    quickButtons.forEach(btn=>{


        btn.addEventListener(
            "click",
            function(){

                userInput.value=this.innerText;

                sendMessage();

            }
        );


    });



}







// ==============================
// SEND MESSAGE
// ==============================


function sendMessage(){


    let text=userInput.value.trim();


    if(text==="")
    return;



    addUserMessage(text);


    userInput.value="";



    setTimeout(()=>{


        botReply(text);


    },500);



}







// ==============================
// MESSAGE
// ==============================


function addUserMessage(text){


    let div=document.createElement("div");

    div.className="user-message";

    div.innerHTML=text;


    chatBody.appendChild(div);

    scrollBottom();


}





function addBotMessage(text){


    let div=document.createElement("div");


    div.className="bot-message";


    div.innerHTML=text;


    chatBody.appendChild(div);


    scrollBottom();


}








// ==============================
// WELCOME ONLY ONE TIME
// ==============================


function welcomeMessage(){


addBotMessage(`


🌿 <b>আসসালামু আলাইকুম</b>


<br><br>


আমি <b>Khati Shad AI Support</b>


<br><br>


আপনি জানতে পারেন:


<br><br>


🍯 সব পণ্যের দাম

<br>

🚚 ডেলিভারি চার্জ

<br>

💳 পেমেন্ট

<br>

🛒 সব পণ্য


<br><br>


পণ্যের নাম লিখুন।


`);


}









// ==============================
// AI REPLY
// ==============================


function botReply(text){



let msg=text.toLowerCase();



// emoji remove

msg=msg.replace(
/[^a-zA-Z\u0980-\u09FF ]/g,
""
);




// ALL PRODUCT


if(

msg.includes("সব") ||
msg.includes("all")

){


showAllProducts();

return;


}






// DELIVERY


if(

msg.includes("ডেলিভারি") ||
msg.includes("delivery")

){


addBotMessage(`


🚚 <b>ডেলিভারি চার্জ</b>


<br><br>


খুলনার ভিতরে:

<b>৳80</b>


<br><br>


খুলনার বাইরে:

<b>৳150</b>


`);


return;


}







// PAYMENT


if(

msg.includes("পেমেন্ট") ||
msg.includes("payment")

){


addBotMessage(`


💳 <b>পেমেন্ট মাধ্যম</b>


<br><br>


✅ বিকাশ

<br>

✅ নগদ

<br>

✅ ক্যাশ অন ডেলিভারি


`);


return;


}







// PRODUCT SEARCH


let result=findProduct(msg);



if(result.length>0){


showProducts(result);


return;


}






addBotMessage(`


😊 দুঃখিত পণ্যটি খুঁজে পাইনি।


<br><br>


পণ্যের নাম লিখুন।


`);



}









// ==============================
// FIND PRODUCT
// ==============================


function findProduct(text){


if(typeof products==="undefined"){


console.log("products-data.js load হয়নি");


return [];


}




return products.filter(product=>{


let name =
product.name.toLowerCase();


let category =
product.category.toLowerCase();





return (

name.includes(text)

||

category.includes(text)

||

(text.includes("মধু") && category==="honey")

||

(text.includes("ঘি") && category==="ghee")

||

(text.includes("তেল") && category==="tel")

||

(text.includes("আচার") && category==="achar")

||

(text.includes("মসলা") && category==="spices")


);



});



}









// ==============================
// SHOW PRODUCT PRICE
// ==============================


function showProducts(list){



let html=`


🍃 <b>পণ্যের তথ্য:</b>


<br><br>


`;




list.forEach(product=>{



html+=`


<hr>


🍃 <b>${product.name}</b>


<br><br>


`;




product.sizes.forEach(size=>{


html+=`


${size.weight}

-

<b>৳${size.price}</b>


<br>


`;


});



});





html+=`


<br><br>


🌿 সকল তথ্য পেয়ে থাকলে অর্ডারের জন্য আমাদের Home Page এ যান।


`;




addBotMessage(html);



}










// ==============================
// ALL PRODUCTS WITH PRICE
// ==============================


function showAllProducts(){



let html=`


🛒 <b>আমাদের সকল পণ্য ও দাম</b>


<br><br>


`;




products.forEach(product=>{


html+=`


<hr>


🍃 <b>${product.name}</b>


<br>


`;





product.sizes.forEach(size=>{


html+=`


${size.weight}

-

<b>৳${size.price}</b>


<br>


`;



});




});





html+=`


<br><br>


🌿 সকল তথ্য পেয়ে থাকলে অর্ডারের জন্য আমাদের Home Page এ যান।


`;




addBotMessage(html);



}









function scrollBottom(){


chatBody.scrollTop =
chatBody.scrollHeight;


}