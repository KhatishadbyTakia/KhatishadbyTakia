import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-app.js";

import {

    getDatabase,

    ref,

    get,

    set,

    update,

    onValue,

    push,

    remove,

    onDisconnect,

    serverTimestamp

} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-database.js";



/* ==========================
   Firebase Config
========================== */

const firebaseConfig = {

    apiKey: "AIzaSyCXsTgSSzSNWEJD2oMo0UuL0Klni25WYWQ",

    authDomain: "khatishadbytakia.firebaseapp.com",

    databaseURL: "https://khatishadbytakia-default-rtdb.firebaseio.com",

    projectId: "khatishadbytakia",

    storageBucket: "khatishadbytakia.firebasestorage.app",

    messagingSenderId: "169883700288",

    appId: "1:169883700288:web:e3f06696833fe335c8e3a5"

};



/* ==========================
   Initialize Firebase
========================== */

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);



/* ==========================
   Bangladesh Date
========================== */

const bdNow = new Date(

    new Date().toLocaleString("en-US", {

        timeZone: "Asia/Dhaka"

    })

);

const today = bdNow.toISOString().split("T")[0];



/* ==========================
   Database Paths
========================== */

const todayRef = ref(db, "analytics/daily/" + today);

const totalRef = ref(db, "analytics/total");

const pageRef = ref(db, "analytics/pageviews/" + today);

const onlineRef = ref(db, "analytics/online");



/* ==========================
   Browser Keys
========================== */

const visitorKey = "visitor_" + today;

const pageKey = "page_" + today;
/* =========================================
   Visitor Counter + Total + Page Views
========================================= */

// -------- Today Visitor --------
async function countVisitor() {

    if (localStorage.getItem(visitorKey)) return;

    const snap = await get(todayRef);

    if (snap.exists()) {

        await update(todayRef, {
            visitors: (snap.val().visitors || 0) + 1
        });

    } else {

        await set(todayRef, {
            visitors: 1,
            pageViews: 0
        });

    }

    // -------- Total Visitor --------

    const totalSnap = await get(totalRef);

    if (totalSnap.exists()) {

        await set(totalRef, totalSnap.val() + 1);

    } else {

        await set(totalRef, 1);

    }

    localStorage.setItem(visitorKey, "1");

}



// -------- Page View --------

async function countPageView() {

    const snap = await get(pageRef);

    if (snap.exists()) {

        await set(pageRef, snap.val() + 1);

    } else {

        await set(pageRef, 1);

    }

}



// -------- Start Counter --------

countVisitor();

countPageView();



// -------- Live Update --------

onValue(todayRef, (snap) => {

    if (!snap.exists()) return;

    document.getElementById("todayVisitors").textContent =
        snap.val().visitors || 0;

});



onValue(totalRef, (snap) => {

    document.getElementById("totalVisitors").textContent =
        snap.val() || 0;

});



onValue(pageRef, (snap) => {

    document.getElementById("pageViews").textContent =
        snap.val() || 0;

});
/* =========================================
   Online Users (Heartbeat System)
========================================= */

// প্রতিটি ব্রাউজারের জন্য একটি ইউনিক সেশন
const sessionRef = push(onlineRef);

// Online হিসেবে যোগ করুন
set(sessionRef, {
    joinedAt: Date.now(),
    lastSeen: Date.now()
});

// প্রতি 20 সেকেন্ডে lastSeen আপডেট হবে
const heartbeat = setInterval(() => {

    set(sessionRef, {
        joinedAt: Date.now(),
        lastSeen: Date.now()
    });

}, 20000);

// Browser/Tab বন্ধ হলে Remove
window.addEventListener("beforeunload", async () => {

    clearInterval(heartbeat);

    try {
        await remove(sessionRef);
    } catch (e) {}

});

// Live Online Count
onValue(onlineRef, (snapshot) => {

    let total = 0;

    const now = Date.now();

    snapshot.forEach((child) => {

        const data = child.val();

        // গত 40 সেকেন্ডে Active থাকলে Online ধরা হবে
        if (data && (now - data.lastSeen) < 40000) {
            total++;
        }

    });

    document.getElementById("onlineUsers").textContent = total;

});
/* =========================================
   Part-3D
   Auto Cleanup + Number Animation
========================================= */

// Number Animation
function animateValue(element, endValue) {

    const startValue = parseInt(element.textContent) || 0;

    if (startValue === endValue) return;

    const duration = 500;
    const startTime = performance.now();

    function update(currentTime) {

        const progress = Math.min((currentTime - startTime) / duration, 1);

        const value = Math.floor(
            startValue + (endValue - startValue) * progress
        );

        element.textContent = value.toLocaleString();

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);

}



// Live Update (Animated)

onValue(todayRef, (snap) => {

    const value = snap.exists()
        ? (snap.val().visitors || 0)
        : 0;

    animateValue(
        document.getElementById("todayVisitors"),
        value
    );

});


onValue(totalRef, (snap) => {

    const value = snap.exists()
        ? snap.val()
        : 0;

    animateValue(
        document.getElementById("totalVisitors"),
        value
    );

});


onValue(pageRef, (snap) => {

    const value = snap.exists()
        ? snap.val()
        : 0;

    animateValue(
        document.getElementById("pageViews"),
        value
    );

});



// Cleanup Online Users

setInterval(async () => {

    const snap = await get(onlineRef);

    if (!snap.exists()) return;

    const now = Date.now();

    snap.forEach(async (child) => {

        const data = child.val();

        if (!data) return;

        if ((now - data.lastSeen) > 40000) {

            await remove(child.ref);

        }

    });

}, 30000);
