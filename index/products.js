/* ==========================================
   Khati Shad by Takia
   products.js
   Part-1
========================================== */
const products = {


/* ==========================================
   1. সুন্দরবনের খাঁটি মধু
========================================== */

honey: {

    id: "honey",

    category: "প্রাকৃতিক মধু",

    name: "সুন্দরবনের খাঁটি মধু",

    stock: "স্টকে আছে",

    description:
        "সুন্দরবনের প্রাকৃতিক মৌচাক থেকে সংগ্রহ করা ১০০% খাঁটি মধু।",


    images: [
        "../images/modhu-2.jpeg",
        "../images/modhu-2.jpeg",
        "../images/modhu-2.jpeg"
    ],


    prices: [
        {
            weight: "২৫০ গ্রাম",
            price: 450
        },
        {
            weight: "৫০০ গ্রাম",
            price: 900
        },
        {
            weight: "১ কেজি",
            price: 1800
        }
    ],


    production:
        "সুন্দরবনের মৌচাক থেকে সংগ্রহ করে ছেঁকে স্বাস্থ্যসম্মতভাবে বোতলজাত করা হয়।",


    ingredients:
        "১০০% খাঁটি প্রাকৃতিক মধু",


    nutrition:
        "গ্লুকোজ, ফ্রুক্টোজ, অ্যান্টিঅক্সিডেন্ট, ভিটামিন ও মিনারেল সমৃদ্ধ।",


    storage:
        "ঠান্ডা ও শুষ্ক স্থানে রাখুন।",


    delivery:
        "সারা বাংলাদেশে হোম ডেলিভারি।",


    benefits:[
        "রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি করে",
        "হজমে সহায়তা করে",
        "শরীরে শক্তি যোগায়",
        "সর্দি-কাশিতে উপকারী",
        "ত্বক ও চুলের যত্নে ব্যবহার করা যায়"
    ]

},



/* ==========================================
   2. দেশি গাওয়া ঘি
========================================== */


ghee: {

    id:"ghee",

    category:"দেশি ঘি",

    name:"দেশি গাওয়া ঘি",

    stock:"স্টকে আছে",


    description:
        "দেশি গরুর দুধের মাখন থেকে তৈরি খাঁটি গাওয়া ঘি।",


    images:[
        "../images/ghe.offical.jpeg",
        "../images/ghe.offical.jpeg",
        "../images/ghe.offical.jpeg"
    ],


    prices:[
        {
            weight:"২৫০ গ্রাম",
            price:430
        },
        {
            weight:"৫০০ গ্রাম",
            price:850
        },
        {
            weight:"১ কেজি",
            price:1700
        }
    ],


    production:
        "ঐতিহ্যবাহী পদ্ধতিতে দেশি গরুর দুধ থেকে প্রস্তুত।",


    ingredients:
        "১০০% দেশি গরুর দুধের ঘি",


    nutrition:
        "ভিটামিন A, D, E ও K সমৃদ্ধ।",


    storage:
        "শুষ্ক স্থানে সংরক্ষণ করুন।",


    delivery:
        "সারা বাংলাদেশে ডেলিভারি।",


    benefits:[
        "হাড় মজবুত রাখে",
        "হজমে সহায়তা করে",
        "শক্তি বৃদ্ধি করে",
        "স্বাস্থ্যকর ফ্যাটের উৎস",
        "শিশু ও বয়স্কদের জন্য উপকারী"
    ]

},



/* ==========================================
   3. হলুদ গুঁড়া
========================================== */


turmeric: {

    id:"turmeric",

    category:"মসলা",

    name:"হলুদ গুঁড়া",

    stock:"স্টকে আছে",


    description:
        "নির্বাচিত শুকনা হলুদ থেকে তৈরি বিশুদ্ধ হলুদ গুঁড়া।",


    images:[
        "../images/holud-gura.jpeg",
        "../images/holud-gura.jpeg",
        "../images/holud-gura.jpeg"
    ],


    prices:[
        {
            weight:"১০০ গ্রাম",
            price:70
        },
        {
            weight:"২৫০ গ্রাম",
            price:175
        },
        {
            weight:"৫০০ গ্রাম",
            price:350
        }
    ],


    production:
        "উন্নতমানের হলুদ শুকিয়ে পরিষ্কার পরিবেশে গুঁড়া করা হয়।",


    ingredients:
        "১০০% খাঁটি হলুদ",


    nutrition:
        "কারকিউমিন সমৃদ্ধ।",


    storage:
        "বায়ুরোধী পাত্রে রাখুন।",


    delivery:
        "সারা বাংলাদেশে ডেলিভারি।",


    benefits:[
        "রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি",
        "ত্বকের জন্য উপকারী",
        "প্রদাহ কমায়",
        "খাবারের রং বৃদ্ধি করে",
        "অ্যান্টিঅক্সিডেন্ট সমৃদ্ধ"
    ]

},



/* ==========================================
   4. মরিচ গুঁড়া
========================================== */


chili: {

    id:"chili",

    category:"মসলা",

    name:"মরিচ গুঁড়া",

    stock:"স্টকে আছে",


    description:
        "শুকনা লাল মরিচ থেকে তৈরি খাঁটি মরিচ গুঁড়া।",


    images:[
        "../images/moris-gura.png",
        "../images/moris-gura.png",
        "../images/moris-gura.png"
    ],


    prices:[
        {
            weight:"১০০ গ্রাম",
            price:70
        },
        {
            weight:"২৫০ গ্রাম",
            price:175
        },
        {
            weight:"৫০০ গ্রাম",
            price:350
        }
    ],


    production:
        "বাছাইকৃত শুকনা মরিচ পরিষ্কার করে গুঁড়া করা হয়।",


    ingredients:
        "১০০% শুকনা মরিচ",


    nutrition:
        "প্রাকৃতিক ভিটামিন A ও C সমৃদ্ধ।",


    storage:
        "ঠান্ডা ও শুষ্ক স্থানে রাখুন।",


    delivery:
        "সারা বাংলাদেশে ডেলিভারি।",


    benefits:[
        "খাবারের স্বাদ বাড়ায়",
        "রং বৃদ্ধি করে",
        "প্রাকৃতিক ঝাল",
        "ভেজালমুক্ত",
        "তাজা গুঁড়া"
    ]

},
/* ==========================================
   5. রসুনের আচার
========================================== */


olivePickle: {

    id:"olivePickle",

    category:"আচার",

    name:"রসুনের আচার",

    stock:"স্টকে আছে",


    description:
        "বাছাইকৃত রসুন ও বিশেষ মসলার সংমিশ্রণে তৈরি ঘরোয়া স্বাদের সুস্বাদু রসুনের আচার।",


    images:[
        "../images/rosun-achar.jpeg",
        "../images/rosun-achar.jpeg",
        "../images/rosun-achar.jpeg"
    ],


    prices:[
        {
            weight:"১০০ গ্রাম",
            price:90
        },
        {
            weight:"২৫০ গ্রাম",
            price:220
        },
        {
            weight:"৫০০ গ্রাম",
            price:440
        }
    ],


    production:
        "বাছাইকৃত রসুন পরিষ্কার করে মসলা ও তেলের সাথে প্রাকৃতিক পদ্ধতিতে আচার তৈরি করা হয়।",


    ingredients:
        "রসুন, সরিষার তেল, লবণ, মরিচ, মসলা ও প্রাকৃতিক উপকরণ।",


    nutrition:
        "রসুনের প্রাকৃতিক গুণাগুণ ও অ্যান্টিঅক্সিডেন্ট সমৃদ্ধ।",


    storage:
        "শুকনো ও পরিষ্কার বায়ুরোধী পাত্রে রাখুন।",


    delivery:
        "সারা বাংলাদেশে ডেলিভারি।",


    benefits:[
        "খাবারের স্বাদ বৃদ্ধি করে",
        "রুচি বাড়াতে সহায়ক",
        "প্রাকৃতিক উপাদানে তৈরি",
        "ঘরোয়া স্বাদের আচার",
        "ভেজালমুক্ত"
    ]

},



/* ==========================================
   6. জলপাইয়ের আচার
========================================== */


olivePickle: {

    id:"olivePickle",

    category:"আচার",

    name:"জলপাই আচার",

    stock:"স্টকে আছে",


    description:
        "টাটকা জলপাই ও বিশেষ মসলার সংমিশ্রণে তৈরি ঘরোয়া স্বাদের সুস্বাদু জলপাইয়ের আচার।",


    images:[
        "../images/jolpai-acar.jpeg",
        "../images/jolpai-acar.jpeg",
        "../images/jolpai-acar.jpeg"
    ],


    prices:[
        {
            weight:"১০০ গ্রাম",
            price:90
        },
        {
            weight:"২৫০ গ্রাম",
            price:220
        },
        {
            weight:"৫০০ গ্রাম",
            price:440
        }
    ],


    production:
        "বাছাইকৃত জলপাই পরিষ্কার করে মসলা ও সরিষার তেলের সাথে প্রাকৃতিক পদ্ধতিতে আচার তৈরি করা হয়।",


    ingredients:
        "জলপাই, সরিষার তেল, লবণ, চিনি, মরিচ, মসলা ও প্রাকৃতিক উপকরণ।",


    nutrition:
        "ভিটামিন ও অ্যান্টিঅক্সিডেন্ট সমৃদ্ধ।",


    storage:
        "বায়ুরোধী পাত্রে রেখে শুকনো ও ঠান্ডা স্থানে সংরক্ষণ করুন।",


    delivery:
        "সারা বাংলাদেশে ডেলিভারি।",


    benefits:[
        "খাবারের স্বাদ বৃদ্ধি করে",
        "রুচি বাড়াতে সহায়ক",
        "টক-মিষ্টি স্বাদের ঘরোয়া আচার",
        "প্রাকৃতিক উপাদানে তৈরি",
        "ভেজালমুক্ত"
    ]

},



/* ==========================================
   7. তেঁতুলের আচার
========================================== */


tamarind_pickle: {

    id:"tamarind_pickle",

    category:"আচার",

    name:"তেঁতুলের আচার",

    stock:"স্টকে আছে",


    description:
        "বাছাইকৃত তেঁতুল ও বিশেষ মসলার সংমিশ্রণে তৈরি টক-মিষ্টি স্বাদের সুস্বাদু তেঁতুলের আচার।",


    images:[
        "../images/tatuler-acar.png",
        "../images/tatuler-acar.png",
        "../images/tatuler-acar.png"
    ],


    prices:[
        {
            weight:"১০০ গ্রাম",
            price:100
        },
        {
            weight:"২৫০ গ্রাম",
            price:250
        },
        {
            weight:"৫০০ গ্রাম",
            price:500
        }
    ],


    production:
        "বাছাইকৃত তেঁতুল পরিষ্কার করে মসলা, চিনি ও সরিষার তেলের সাথে প্রাকৃতিক পদ্ধতিতে আচার তৈরি করা হয়।",


    ingredients:
        "তেঁতুল, সরিষার তেল, চিনি, লবণ, মরিচ, মসলা ও প্রাকৃতিক উপকরণ।",


    nutrition:
        "প্রাকৃতিক খনিজ ও অ্যান্টিঅক্সিডেন্ট সমৃদ্ধ।",


    storage:
        "বায়ুরোধী পাত্রে রেখে শুকনো ও ঠান্ডা স্থানে সংরক্ষণ করুন।",


    delivery:
        "সারা বাংলাদেশে ডেলিভারি।",


    benefits:[
        "রুচি বাড়াতে সহায়ক",
        "খাবারের স্বাদ বৃদ্ধি করে",
        "টক-মিষ্টি স্বাদের আচার",
        "প্রাকৃতিক উপাদানে তৈরি",
        "ভেজালমুক্ত"
    ]

},



/* ==========================================
   8. আতপ চাল
========================================== */


rice: {

    id:"rice",

    category:"চাল",

    name:"আতপ চাল",

    stock:"স্টকে আছে",


    description:
        "উন্নতমানের আতপ চাল, প্রতিদিনের খাবারের জন্য উপযুক্ত।",


    images:[
        "../images/atob-chal.jpeg",
        "../images/atob-chal.jpeg",
        "../images/atob-chal.jpeg"
    ],


    prices:[
        {
            weight:"১ কেজি",
            price:190
        },
        {
            weight:"২ কেজি",
            price:380
        },
        {
            weight:"৩ কেজি",
            price:570
        }
    ],


    production:
        "উন্নতমানের ধান থেকে পরিষ্কার ও স্বাস্থ্যসম্মতভাবে প্রস্তুত।",


    ingredients:
        "১০০% আতপ চাল",


    nutrition:
        "কার্বোহাইড্রেট, ভিটামিন ও মিনারেল সমৃদ্ধ।",


    storage:
        "শুকনো ও ঠান্ডা স্থানে রাখুন।",


    delivery:
        "সারা বাংলাদেশে ডেলিভারি।",


    benefits:[
        "সহজে রান্না হয়",
        "সুস্বাদু",
        "উন্নত মানের চাল",
        "পরিষ্কার ও নিরাপদ",
        "দৈনন্দিন ব্যবহারের উপযোগী"
    ]

},



/* ==========================================
   9. আমলকির আচার
========================================== */


amloki_pickle: {

    id:"amloki_pickle",

    category:"আচার",

    name:"আমলকীর আচার",

    stock:"স্টকে আছে",


    description:
        "টাটকা আমলকি ও বিশেষ মসলার সংমিশ্রণে তৈরি টক-মিষ্টি স্বাদের সুস্বাদু আমলকির আচার।",


    images:[
        "../images/amlokir-acar.png",
        "../images/aamlokir-acar.png",
        "../images/amlokir-acar.png"
    ],


    prices:[
        {
            weight:"১০০ গ্রাম",
            price:90
        },
        {
            weight:"২৫০ গ্রাম",
            price:220
        },
        {
            weight:"৫০০ গ্রাম",
            price:440
        }
    ],


    production:
        "বাছাইকৃত আমলকি পরিষ্কার করে মসলা, সরিষার তেল ও প্রাকৃতিক উপকরণের সাথে যত্নসহকারে আচার তৈরি করা হয়।",


    ingredients:
        "আমলকি, সরিষার তেল, লবণ, চিনি, মরিচ, মসলা ও প্রাকৃতিক উপকরণ।",


    nutrition:
        "ভিটামিন C ও অ্যান্টিঅক্সিডেন্ট সমৃদ্ধ।",


    storage:
        "বায়ুরোধী পাত্রে রেখে শুকনো ও ঠান্ডা স্থানে সংরক্ষণ করুন।",


    delivery:
        "সারা বাংলাদেশে ডেলিভারি।",


    benefits:[
        "রুচি বাড়াতে সহায়ক",
        "খাবারের স্বাদ বৃদ্ধি করে",
        "ভিটামিন C সমৃদ্ধ",
        "প্রাকৃতিক উপাদানে তৈরি",
        "ভেজালমুক্ত"
    ]

},
/* ==========================================
   10. খাঁটি আটা
========================================== */

flour: {

    id:"flour",

    category:"আটা",

    name:"খাঁটি আটা",

    stock:"স্টকে আছে",

    description:
        "উন্নতমানের গম থেকে তৈরি খাঁটি আটা।",

    images:[
        "../images/flour1.jpeg",
        "../images/flour2.jpeg",
        "../images/flour3.jpeg"
    ],

    prices:[
        {
            weight:"১০০ গ্রাম",
            price:90
        },
        {
            weight:"২৫০ গ্রাম",
            price:220
        },
        {
            weight:"৫০০ গ্রাম",
            price:440
        }
    ],

    production:
        "উন্নতমানের গম পরিষ্কার করে আধুনিক মিলে ভাঙানো হয়।",

    ingredients:
        "১০০% গম",

    nutrition:
        "ফাইবার, আয়রন ও প্রোটিন সমৃদ্ধ।",

    storage:
        "শুষ্ক স্থানে রাখুন।",

    delivery:
        "সারা বাংলাদেশে ডেলিভারি।",

    benefits:[
        "রুটি নরম হয়",
        "পুষ্টিকর",
        "খাঁটি আটা",
        "ভেজালমুক্ত",
        "দৈনন্দিন ব্যবহারের উপযোগী"
    ]

},



/* ==========================================
   11. সরিষার তেল
========================================== */

mustardOil: {

    id:"mustardOil",

    category:"তেল",

    name:"খাঁটি সরিষার তেল",

    stock:"স্টকে আছে",

    description:
        "ঘানিতে ভাঙানো খাঁটি সরিষার তেল।",

    images:[
        "../images/sorisertel.jpeg",
        "../images/sorisertel.jpeg",
        "../images/sorisertel.jpeg"
    ],

    prices:[
        {
            weight:"৫০০ মি.লি.",
            price:200
        },
        {
            weight:"১ লিটার",
            price:350
        },
        {
            weight:"২ লিটার",
            price:700
        }
    ],

    production:
        "নির্বাচিত সরিষা থেকে কোল্ড প্রেস পদ্ধতিতে প্রস্তুত।",

    ingredients:
        "১০০% সরিষা",

    nutrition:
        "ওমেগা ফ্যাটি অ্যাসিড ও ভিটামিন E সমৃদ্ধ।",

    storage:
        "সূর্যের আলো থেকে দূরে রাখুন।",

    delivery:
        "সারা বাংলাদেশে নিরাপদ ডেলিভারি।",

    benefits:[
        "রান্নার স্বাদ বৃদ্ধি করে",
        "খাঁটি সরিষার ঘ্রাণ",
        "স্বাস্থ্যকর",
        "ভেজালমুক্ত",
        "দৈনন্দিন রান্নার জন্য উপযুক্ত"
    ]

},

/* ==========================================
   16. আমড়ার আচার
========================================== */

amrarAchar: {

    id:"amrarAchar",

    category:"আচার",

    name:"আমড়ার আচার",

    stock:"স্টকে আছে",

    description:
        "টক-মিষ্টি স্বাদের ঘরোয়া পদ্ধতিতে তৈরি সুস্বাদু আমড়ার আচার।",

    images:[
        "../images/amrar-acar.png",
        "../images/amrar-acar.png",
        "../images/amrar-acar.png"
    ],

    prices:[
        {
            weight:"১০০ গ্রাম",
            price:90
        },
        {
            weight:"২৫০ গ্রাম",
            price:210
        },
        {
            weight:"৫০০ গ্রাম",
            price:420
        }
    ],

    production:
        "বাছাই করা তাজা আমড়া, প্রাকৃতিক মসলা ও সরিষার তেল দিয়ে স্বাস্থ্যসম্মতভাবে প্রস্তুত করা হয়।",

    ingredients:
        "আমড়া, সরিষার তেল, চিনি, মরিচ, হলুদ, লবণ, রসুন, আদা, পাঁচফোড়ন ও অন্যান্য প্রাকৃতিক মসলা।",

    nutrition:
        "প্রাকৃতিক ফল ও মসলার গুণে সমৃদ্ধ।",

    storage:
        "বায়ুরোধী পাত্রে সংরক্ষণ করুন এবং শুকনো চামচ ব্যবহার করুন।",

    delivery:
        "সারা বাংলাদেশে হোম ডেলিভারি।",

    benefits:[
        "টক-মিষ্টি অসাধারণ স্বাদ",
        "ভাত ও নাস্তার সাথে উপযোগী",
        "ঘরোয়া পদ্ধতিতে তৈরি",
        "প্রাকৃতিক মসলার ব্যবহার",
        "দীর্ঘদিন সংরক্ষণযোগ্য"
    ]

},

/* ==========================================
   12. নারিকেল তেল
========================================== */

coconutOil: {

    id:"coconutOil",

    category:"তেল",

    name:"খাঁটি নারিকেল তেল",

    stock:"স্টকে আছে",

    description:
        "পরিষ্কার নারিকেল থেকে তৈরি বিশুদ্ধ নারিকেল তেল।",

    images:[
        "../images/narikeltel.jpeg",
        "../images/narikeltel.jpeg",
        "../images/narikeltel.jpeg"
    ],

    prices:[
        {
            weight:"২৫০ মি.লি.",
            price:480
        },
        {
            weight:"৫০০ মি.লি.",
            price:960
        },
        {
            weight:"১ লিটার",
            price:1720
        }
    ],

    production:
        "তাজা নারিকেল থেকে স্বাস্থ্যসম্মতভাবে প্রস্তুত করা হয়।",

    ingredients:
        "১০০% নারিকেল",

    nutrition:
        "স্বাস্থ্যকর ফ্যাট ও ভিটামিন E সমৃদ্ধ।",

    storage:
        "ঠান্ডা ও শুষ্ক স্থানে রাখুন।",

    delivery:
        "সারা বাংলাদেশে হোম ডেলিভারি।",

    benefits:[
        "চুলের যত্নে উপকারী",
        "ত্বকের জন্য ভালো",
        "খাঁটি নারিকেলের সুগন্ধ",
        "স্বাস্থ্যকর",
        "ভেজালমুক্ত"
    ]

},



/* ==========================================
   13. কামরাঙ্গার আচার
========================================== */

starFruitPickle: {

    id:"starFruitPickle",

    category:"আচার",

    name:"কামরাঙ্গা আচার",

    stock:"স্টকে আছে",

    description:
        "টক-মিষ্টি স্বাদের কামরাঙ্গার আচার।",

    images:[
        "../images/kamranga-acar.jpeg",
        "../images/kamranga-acar.jpeg",
        "../images/kamranga-acar.jpeg"
    ],

    prices:[
        {
            weight:"১০০ গ্রাম",
            price:79
        },
        {
            weight:"২৫০ গ্রাম",
            price:199
        },
        {
            weight:"৫০০ গ্রাম",
            price:399
        }
    ],

    production:
        "তাজা কামরাঙ্গা ও প্রাকৃতিক মসলা দিয়ে তৈরি।",

    ingredients:
        "কামরাঙ্গা, লবণ, চিনি, মসলা",

    nutrition:
        "ভিটামিন C সমৃদ্ধ।",

    storage:
        "ঠান্ডা স্থানে রাখুন।",

    delivery:
        "সারা বাংলাদেশে ডেলিভারি।",

    benefits:[
        "রুচি বাড়ায়",
        "খাঁটি উপাদান",
        "টক-মিষ্টি স্বাদ",
        "ভেজালমুক্ত",
        "পরিষ্কারভাবে প্রস্তুত"
    ]

},
/* ==========================================
   15. চুইঝাল আচার
========================================== */

chuijalAchar: {

    id:"chuijalAchar",

    category:"আচার",

    name:"চুইঝালের আচার",

    stock:"স্টকে আছে",

    description:
        "বিশেষ ঘরোয়া পদ্ধতিতে তৈরি চুইঝালের ঝাল ও সুস্বাদু আচার।",

    images:[
        "../images/chuijal-acar.png",
        "../images/chuijal-acar.png",
        "../images/chuijal-acar.png"
    ],

    prices:[
       {
            weight:"১০০ গ্রাম",
            price:160
        },
        {
            weight:"২৫০ গ্রাম",
            price:400
        },
        {
            weight:"৫০০ গ্রাম",
            price:800
        }
    ],

    production:
        "নির্বাচিত চুইঝাল, মসলা ও প্রাকৃতিক উপাদান দিয়ে স্বাস্থ্যসম্মতভাবে প্রস্তুত করা হয়।",

    ingredients:
        "চুইঝাল, সরিষার তেল, মরিচ, হলুদ, রসুন, আদা, লবণ, পাঁচফোড়ন ও অন্যান্য প্রাকৃতিক মসলা।",

    nutrition:
        "প্রাকৃতিক মসলা ও উদ্ভিজ্জ উপাদানে সমৃদ্ধ।",

    storage:
        "শুষ্ক ও ঠান্ডা স্থানে রাখুন। ব্যবহার শেষে ঢাকনা ভালোভাবে বন্ধ করুন।",

    delivery:
        "সারা বাংলাদেশে হোম ডেলিভারি।",

    benefits:[
        "ভাতের সাথে অসাধারণ স্বাদ",
        "খাঁটি চুইঝালের স্বাদ",
        "ঘরোয়া পদ্ধতিতে তৈরি",
        "ঝালপ্রেমীদের জন্য উপযুক্ত",
        "দীর্ঘদিন সংরক্ষণযোগ্য"
    ]

},

/* ==========================================
   17. শুটকির আচার
========================================== */

shutkirAchar: {

    id:"shutkirAchar",

    category:"আচার",

    name:"শুটকির আচার",

    stock:"স্টকে আছে",

    description:
        "ঘরোয়া পদ্ধতিতে তৈরি ঝাল ও মজাদার শুটকির আচার।",

    images:[
        "../images/shutkir-achar.jpeg",
        "../images/shutkir-achar.jpeg",
        "../images/shutkir-achar.jpeg"
    ],

    prices:[
        {
            weight:"১০০ গ্রাম",
            price:149
        },
        {
            weight:"২৫০ গ্রাম",
            price:349
        },
        {
            weight:"৫০০ গ্রাম",
            price:699
        }
    ],

    production:
        "নির্বাচিত মানসম্মত শুটকি, মসলা ও সরিষার তেল দিয়ে স্বাস্থ্যসম্মতভাবে প্রস্তুত করা হয়।",

    ingredients:
        "শুটকি মাছ, সরিষার তেল, মরিচ, হলুদ, রসুন, আদা, পেঁয়াজ, লবণ, পাঁচফোড়ন ও অন্যান্য প্রাকৃতিক মসলা।",

    nutrition:
        "প্রোটিনসমৃদ্ধ শুটকি ও প্রাকৃতিক মসলার গুণে সমৃদ্ধ।",

    storage:
        "বায়ুরোধী পাত্রে সংরক্ষণ করুন। ব্যবহারের সময় শুকনো চামচ ব্যবহার করুন।",

    delivery:
        "সারা বাংলাদেশে হোম ডেলিভারি।",

    benefits:[
        "ঝাল ও মজাদার স্বাদ",
        "ভাতের সাথে অসাধারণ উপযোগী",
        "খাঁটি শুটকি দিয়ে তৈরি",
        "ঘরোয়া স্বাদের আচার",
        "দীর্ঘদিন সংরক্ষণযোগ্য"
    ]

},
/* ==========================================
   14. ঝালমুড়ি মসলা
========================================== */

jhalmuriMasala: {

    id:"jhalmuriMasala",

    category:"মসলা",

    name:"ঝালমুড়ি মসলা",

    stock:"স্টকে আছে",

    description:
        "বিশেষ মিশ্রণে তৈরি ঝালমুড়ির মসলা।",

    images:[
        "../images/jalmorir-mosla.jpeg",
        "../images/jalmorir-mosla.jpeg",
        "../images/jalmorir-mosla.jpeg"
    ],

    prices:[
        {
            weight:"১০০ গ্রাম",
            price:129
        },
        {
            weight:"২৫০ গ্রাম",
            price:349
        },
        {
            weight:"৫০০ গ্রাম",
            price:599
        }
    ],

    production:
        "নির্বাচিত মসলা মিশিয়ে স্বাস্থ্যসম্মতভাবে প্রস্তুত করা হয়।",

    ingredients:
        "ধনিয়া, জিরা, বিট লবণ, গোলমরিচ, শুকনা মরিচ ও অন্যান্য প্রাকৃতিক মসলা।",

    nutrition:
        "প্রাকৃতিক মসলা ও অ্যান্টিঅক্সিডেন্ট সমৃদ্ধ।",

    storage:
        "বায়ুরোধী পাত্রে সংরক্ষণ করুন।",

    delivery:
        "সারা বাংলাদেশে হোম ডেলিভারি।",

    benefits:[
        "ঝালমুড়ির স্বাদ বাড়ায়",
        "খাঁটি ও ভেজালমুক্ত",
        "তাজা গুঁড়া মসলা",
        "সুগন্ধ দীর্ঘক্ষণ থাকে",
        "ঘরোয়া স্বাদ"
    ]

}

};



// ==========================================
// LOAD PRODUCT DETAILS
// ==========================================

document.addEventListener("DOMContentLoaded",function(){


let id =
new URLSearchParams(window.location.search).get("id");


if(!id){
    console.log("No Product ID Found");
    return;
}


let product = products[id];


if(!product){
    console.log("Product Not Found");
    return;
}



document.getElementById("productName").innerHTML =
product.name;


document.getElementById("productCategory").innerHTML =
product.category;


document.getElementById("productDescription").innerHTML =
product.description;


document.getElementById("mainImage").src =
product.images[0];


document.getElementById("stockStatus").innerHTML =
product.stock;



let thumbContainer =
document.getElementById("thumbnailContainer");


thumbContainer.innerHTML="";


product.images.forEach((img,index)=>{

thumbContainer.innerHTML += `

<img src="${img}"
class="thumb ${index===0?'active':''}"
onclick="changeImage('${img}',this)">

`;

});



let weightBox =
document.getElementById("weightContainer");


weightBox.innerHTML="";


product.prices.forEach((item,index)=>{


weightBox.innerHTML += `

<button class="weight-btn ${index===0?'active':''}"
onclick="showPrice(${item.price},this)">

${item.weight}

</button>

`;

});



document.getElementById("mainPrice").innerHTML =
"৳ " + product.prices[0].price;



document.getElementById("production").innerHTML =
product.production;


document.getElementById("ingredients").innerHTML =
product.ingredients;


document.getElementById("nutrition").innerHTML =
product.nutrition;


document.getElementById("storage").innerHTML =
product.storage;


document.getElementById("delivery").innerHTML =
product.delivery;



let benefitBox =
document.getElementById("benefits");


benefitBox.innerHTML="";


product.benefits.forEach(item=>{

benefitBox.innerHTML +=

`<li>${item}</li>`;

});


});




// ==========================================
// CHANGE IMAGE
// ==========================================

function changeImage(src,el){

document.getElementById("mainImage").src = src;


document.querySelectorAll(".thumb")
.forEach(img=>{

img.classList.remove("active");

});


el.classList.add("active");

}




// ==========================================
// CHANGE PRICE
// ==========================================

function showPrice(price,btn){


document.getElementById("mainPrice").innerHTML =
"৳ " + price;


document.querySelectorAll(".weight-btn")
.forEach(item=>{

item.classList.remove("active");

});


btn.classList.add("active");


}
