/* ==========================================
   Khati Shad by Takia
   products.js
   Part-1A
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
           '../images/modhu-2.jpeg',
    '../images/modhu-2.jpeg',
    '../images/modhu-2.jpeg'
  ]
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

        benefits: [
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

        id: "ghee",

        category: "দেশি ঘি",

        name: "দেশি গাওয়া ঘি",

        stock: "স্টকে আছে",

        description:
            "দেশি গরুর দুধের মাখন থেকে তৈরি খাঁটি গাওয়া ঘি।",

        images: [
            "../images/ghee1.jpeg",
            "../images/ghee2.jpeg",
            "../images/ghee3.jpeg"
        ],

        prices: [
            {
                weight: "২৫০ গ্রাম",
                price: 430
            },
            {
                weight: "৫০০ গ্রাম",
                price: 850
            },
            {
                weight: "১ কেজি",
                price: 1700
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

        benefits: [
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

        id: "turmeric",

        category: "মসলা",

        name: "হলুদ গুঁড়া",

        stock: "স্টকে আছে",

        description:
            "নির্বাচিত শুকনা হলুদ থেকে তৈরি বিশুদ্ধ হলুদ গুঁড়া।",

        images: [
            "../images/turmeric1.jpeg",
            "../images/turmeric2.jpeg",
            "../images/turmeric3.jpeg"
        ],

        prices: [
            {
                weight: "১০০ গ্রাম",
                price: 70
            },
            {
                weight: "২৫০ গ্রাম",
                price: 175
            },
            {
                weight: "৫০০ গ্রাম",
                price: 350
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

        benefits: [
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

        id: "chili",

        category: "মসলা",

        name: "মরিচ গুঁড়া",

        stock: "স্টকে আছে",

        description:
            "শুকনা লাল মরিচ থেকে তৈরি খাঁটি মরিচ গুঁড়া।",

        images: [
            "../images/chili1.jpeg",
            "../images/chili2.jpeg",
            "../images/chili3.jpeg"
        ],

        prices: [
            {
                weight: "১০০ গ্রাম",
                price: 70
            },
            {
                weight: "২৫০ গ্রাম",
                price: 175
            },
            {
                weight: "৫০০ গ্রাম",
                price: 350
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

        benefits: [
            "খাবারের স্বাদ বাড়ায়",
            "রং বৃদ্ধি করে",
            "প্রাকৃতিক ঝাল",
            "ভেজালমুক্ত",
            "তাজা গুঁড়া"
        ]

    },
        /* ==========================================
      /* ==========================================
   6. রসুনের আচার
   ========================================== */

garlic_pickle: {

    id: "garlic_pickle",

    category: "আচার",

    name: "রসুনের আচার",

    stock: "স্টকে আছে",

    description:
        "বাছাইকৃত রসুন ও বিশেষ মসলার সংমিশ্রণে তৈরি ঘরোয়া স্বাদের সুস্বাদু রসুনের আচার।",

    images: [
        "../images/garlic_pickle1.jpeg",
        "../images/garlic_pickle2.jpeg",
        "../images/garlic_pickle3.jpeg"
    ],

    prices: [
        {
            weight: "১০০ গ্রাম",
            price: 90
        },
        {
            weight: "২৫০ গ্রাম",
            price: 220
        },
        {
            weight: "৫০০ গ্রাম",
            price: 440
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

    benefits: [
        "খাবারের স্বাদ বৃদ্ধি করে",
        "রুচি বাড়াতে সহায়ক",
        "প্রাকৃতিক উপাদানে তৈরি",
        "ঘরোয়া স্বাদের আচার",
        "ভেজালমুক্ত"
    ]

},
       /* ==========================================
    7. জলপাইয়ের আচার
    ========================================== */

jolpai_pickle: {

    id: "jolpai_pickle",

    category: "আচার",

    name: "জলপাইয়ের আচার",

    stock: "স্টকে আছে",

    description:
        "টাটকা জলপাই ও বিশেষ মসলার সংমিশ্রণে তৈরি ঘরোয়া স্বাদের সুস্বাদু জলপাইয়ের আচার।",

    images: [
        "../images/jolpai_pickle1.jpeg",
        "../images/jolpai_pickle2.jpeg",
        "../images/jolpai_pickle3.jpeg"
    ],

    prices: [
        {
            weight: "১০০ গ্রাম",
            price: 90
        },
        {
            weight: "২৫০ গ্রাম",
            price: 220
        },
        {
            weight: "৫০০ গ্রাম",
            price: 440
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

    benefits: [
        "খাবারের স্বাদ বৃদ্ধি করে",
        "রুচি বাড়াতে সহায়ক",
        "টক-মিষ্টি স্বাদের ঘরোয়া আচার",
        "প্রাকৃতিক উপাদানে তৈরি",
        "ভেজালমুক্ত"
    ]

},
 /* ==========================================
    8. তেঁতুলের আচার
    ========================================== */

tamarind_pickle: {

    id: "tamarind_pickle",

    category: "আচার",

    name: "তেঁতুলের আচার",

    stock: "স্টকে আছে",

    description:
        "বাছাইকৃত তেঁতুল ও বিশেষ মসলার সংমিশ্রণে তৈরি টক-মিষ্টি স্বাদের সুস্বাদু তেঁতুলের আচার।",

    images: [
        "../images/tamarind_pickle1.jpeg",
        "../images/tamarind_pickle2.jpeg",
        "../images/tamarind_pickle3.jpeg"
    ],

    prices: [
        {
            weight: "২৫০ গ্রাম",
            price: 150
        },
        {
            weight: "৫০০ গ্রাম",
            price: 280
        },
        {
            weight: "১ কেজি",
            price: 550
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

    benefits: [
        "রুচি বাড়াতে সহায়ক",
        "খাবারের স্বাদ বৃদ্ধি করে",
        "টক-মিষ্টি স্বাদের আচার",
        "প্রাকৃতিক উপাদানে তৈরি",
        "ভেজালমুক্ত"
    ]

},
        /* ==========================================
       7. আতপ চাল
    ========================================== */

    rice: {

        id: "rice",

        category: "চাল",

        name: "আতপ চাল",

        stock: "স্টকে আছে",

        description:
            "উন্নতমানের আতপ চাল, প্রতিদিনের খাবারের জন্য উপযুক্ত।",

        images: [
            "../images/rice1.jpeg",
            "../images/rice2.jpeg",
            "../images/rice3.jpeg"
        ],

        prices: [
            {
            weight: "১০০ গ্রাম",
            price: 100
        },
        {
            weight: "২৫০ গ্রাম",
            price: 250
        },
        {
            weight: "৫০০ গ্রাম",
            price: 500
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

        benefits: [
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

    id: "amloki_pickle",

    category: "আচার",

    name: "আমলকির আচার",

    stock: "স্টকে আছে",

    description:
        "টাটকা আমলকি ও বিশেষ মসলার সংমিশ্রণে তৈরি টক-মিষ্টি স্বাদের সুস্বাদু আমলকির আচার।",

    images: [
        "../images/amloki_pickle1.jpeg",
        "../images/amloki_pickle2.jpeg",
        "../images/amloki_pickle3.jpeg"
    ],

    prices: [
        {
            weight: "২৫০ গ্রাম",
            price: 170
        },
        {
            weight: "৫০০ গ্রাম",
            price: 320
        },
        {
            weight: "১ কেজি",
            price: 620
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

    benefits: [
        "রুচি বাড়াতে সহায়ক",
        "খাবারের স্বাদ বৃদ্ধি করে",
        "ভিটামিন C সমৃদ্ধ",
        "প্রাকৃতিক উপাদানে তৈরি",
        "ভেজালমুক্ত"
    ]

},
        /* ==========================================
       8. খাঁটি আটা
    ========================================== */

    flour: {

        id: "flour",

        category: "আটা",

        name: "খাঁটি আটা",

        stock: "স্টকে আছে",

        description:
            "উন্নতমানের গম থেকে তৈরি খাঁটি আটা।",

        images: [
            "../images/flour1.jpeg",
            "../images/flour2.jpeg",
            "../images/flour3.jpeg"
        ],

        prices: [
           {
            weight: "১০০ গ্রাম",
            price: 90
        },
        {
            weight: "২৫০ গ্রাম",
            price: 220
        },
        {
            weight: "৫০০ গ্রাম",
            price: 440
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

        benefits: [
            "রুটি নরম হয়",
            "পুষ্টিকর",
            "খাঁটি আটা",
            "ভেজালমুক্ত",
            "দৈনন্দিন ব্যবহারের উপযোগী"
        ]

    },
     /* ==========================================
    10. আমড়ার আচার
    ========================================== */

amra_pickle: {

    id: "amra_pickle",

    category: "আচার",

    name: "আমড়ার আচার",

    stock: "স্টকে আছে",

    description:
        "টাটকা আমড়া ও বিশেষ মসলার সংমিশ্রণে তৈরি টক-মিষ্টি স্বাদের সুস্বাদু আমড়ার আচার।",

    images: [
        "../images/amra_pickle1.jpeg",
        "../images/amra_pickle2.jpeg",
        "../images/amra_pickle3.jpeg"
    ],

    prices: [
        {
            weight: "১০০ গ্রাম",
            price: 90
        },
        {
            weight: "২৫০ গ্রাম",
            price: 210
        },
        {
            weight: "৫০০ গ্রাম",
            price: 420
        }
    ],

    production:
        "বাছাইকৃত আমড়া পরিষ্কার করে মসলা, সরিষার তেল ও প্রাকৃতিক উপকরণের সাথে যত্নসহকারে আচার তৈরি করা হয়।",

    ingredients:
        "আমড়া, সরিষার তেল, লবণ, চিনি, মরিচ, মসলা ও প্রাকৃতিক উপকরণ।",

    nutrition:
        "ভিটামিন ও প্রাকৃতিক অ্যান্টিঅক্সিডেন্ট সমৃদ্ধ।",

    storage:
        "বায়ুরোধী পাত্রে রেখে শুকনো ও ঠান্ডা স্থানে সংরক্ষণ করুন।",

    delivery:
        "সারা বাংলাদেশে ডেলিভারি।",

    benefits: [
        "রুচি বাড়াতে সহায়ক",
        "খাবারের স্বাদ বৃদ্ধি করে",
        "টক-মিষ্টি স্বাদের আচার",
        "প্রাকৃতিক উপাদানে তৈরি",
        "ভেজালমুক্ত"
    ]

},
 /* ==========================================
    11. চুইঝালের আচার
    ========================================== */

chuijhal_pickle: {

    id: "chuijhal_pickle",

    category: "আচার",

    name: "চুইঝালের আচার",

    stock: "স্টকে আছে",

    description:
        "সুস্বাদু চুইঝাল ও বিশেষ মসলার সংমিশ্রণে তৈরি ঝাল-মজাদার ঘরোয়া স্বাদের চুইঝালের আচার।",

    images: [
        "../images/chuijhal_pickle1.jpeg",
        "../images/chuijhal_pickle2.jpeg",
        "../images/chuijhal_pickle3.jpeg"
    ],

    prices: [
       {
            weight: "১০০ গ্রাম",
            price: 160
        },
        {
            weight: "২৫০ গ্রাম",
            price: 400
        },
        {
            weight: "৫০০ গ্রাম",
            price: 800
        }
    ],

    production:
        "বাছাইকৃত চুইঝাল পরিষ্কার করে মসলা ও সরিষার তেলের সাথে যত্নসহকারে প্রাকৃতিক পদ্ধতিতে আচার তৈরি করা হয়।",

    ingredients:
        "চুইঝাল, সরিষার তেল, লবণ, মরিচ, মসলা ও প্রাকৃতিক উপকরণ।",

    nutrition:
        "প্রাকৃতিক উপাদান ও অ্যান্টিঅক্সিডেন্ট সমৃদ্ধ।",

    storage:
        "বায়ুরোধী পাত্রে রেখে শুকনো ও ঠান্ডা স্থানে সংরক্ষণ করুন।",

    delivery:
        "সারা বাংলাদেশে ডেলিভারি।",

    benefits: [
        "রুচি বাড়াতে সহায়ক",
        "খাবারের স্বাদ বৃদ্ধি করে",
        "ঝাল ও মসলাদার স্বাদ",
        "প্রাকৃতিক উপাদানে তৈরি",
        "ভেজালমুক্ত"
    ]

},
        /* ==========================================
       9. সরিষার তেল
    ========================================== */

    mustardOil: {

        id: "mustardOil",

        category: "তেল",

        name: "খাঁটি সরিষার তেল",

        stock: "স্টকে আছে",

        description:
            "ঘানিতে ভাঙানো খাঁটি সরিষার তেল।",

        images: [
            "../images/mustard1.jpeg",
            "../images/mustard2.jpeg",
            "../images/mustard3.jpeg"
        ],

        prices: [
            {
                weight: "৫০০ মি.লি.",
                price: 200
            },
            {
                weight: "১ লিটার",
                price: 350
            },
            {
                weight: "২ লিটার",
                price: 700
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

        benefits: [
            "রান্নার স্বাদ বৃদ্ধি করে",
            "খাঁটি সরিষার ঘ্রাণ",
            "স্বাস্থ্যকর",
            "ভেজালমুক্ত",
            "দৈনন্দিন রান্নার জন্য উপযুক্ত"
        ]

    },
        /* ==========================================
       10. নারিকেল তেল
    ========================================== */

    coconutOil: {

        id: "coconutOil",

        category: "তেল",

        name: "খাঁটি নারিকেল তেল",

        stock: "স্টকে আছে",

        description:
            "পরিষ্কার নারিকেল থেকে তৈরি বিশুদ্ধ নারিকেল তেল।",

        images: [
            "../images/coconut1.jpeg",
            "../images/coconut2.jpeg",
            "../images/coconut3.jpeg"
        ],

        prices: [
            {
                weight: "২৫০ মি.লি.",
                price: 480
            },
            {
                weight: "৫০০ মি.লি.",
                price: 960
            },
            {
                weight: "১ লিটার",
                price: 1720
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

        benefits: [
            "চুলের যত্নে উপকারী",
            "ত্বকের জন্য ভালো",
            "খাঁটি নারিকেলের সুগন্ধ",
            "স্বাস্থ্যকর",
            "ভেজালমুক্ত"
        ]

    },
    /* ==========================================
   16. আমড়ার আচার
========================================== */

amraPickle:{

    id:"amraPickle",

    category:"আচার",

    name:"আমড়ার আচার",

    stock:"স্টকে আছে",

    description:"তাজা আমড়া দিয়ে তৈরি ঘরোয়া আচার।",

    images:[
        "../images/amra1.jpeg",
        "../images/amra2.jpeg",
        "../images/amra3.jpeg"
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

    production:"পরিষ্কার পরিবেশে দেশীয় মসলা দিয়ে তৈরি।",

    ingredients:"আমড়া, সরিষার তেল, লবণ, মসলা",

    nutrition:"ভিটামিন C সমৃদ্ধ।",

    storage:"শুষ্ক স্থানে রাখুন।",

    delivery:"সারা বাংলাদেশে ডেলিভারি।",

    benefits:[
        "রুচি বাড়ায়",
        "ঘরোয়া স্বাদ",
        "ভেজালমুক্ত",
        "পরিষ্কারভাবে তৈরি",
        "দীর্ঘদিন সংরক্ষণযোগ্য"
    ]

},

/* ==========================================
   17. কামরাঙ্গার আচার
========================================== */

starFruitPickle:{

    id:"starFruitPickle",

    category:"আচার",

    name:"কামরাঙ্গার আচার",

    stock:"স্টকে আছে",

    description:"টক-মিষ্টি স্বাদের কামরাঙ্গার আচার।",

    images:[
        "../images/starfruit1.jpeg",
        "../images/starfruit2.jpeg",
        "../images/starfruit3.jpeg"
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

    production:"তাজা কামরাঙ্গা দিয়ে তৈরি।",

    ingredients:"কামরাঙ্গা, লবণ, চিনি, মসলা",

    nutrition:"ভিটামিন C সমৃদ্ধ।",

    storage:"ঠান্ডা স্থানে রাখুন।",

    delivery:"সারা বাংলাদেশে ডেলিভারি।",

    benefits:[
        "রুচি বাড়ায়",
        "খাঁটি উপাদান",
        "টক-মিষ্টি স্বাদ",
        "ভেজালমুক্ত",
        "পরিষ্কারভাবে প্রস্তুত"
    ]

},
/* ==========================================
   20. ঝালমুড়ি মসলা
========================================== */

jhalmuriMasala:{

    id:"jhalmuriMasala",

    category:"মসলা",

    name:"ঝালমুড়ি মসলা",

    stock:"স্টকে আছে",

    description:"বিশেষ মিশ্রণে তৈরি ঝালমুড়ির মসলা।",

    images:[
        "../images/jhalmuri1.jpeg",
        "../images/jhalmuri2.jpeg",
        "../images/jhalmuri3.jpeg"
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

    production:"নির্বাচিত মসলা মিশিয়ে স্বাস্থ্যসম্মতভাবে প্রস্তুত করা হয়।",

    ingredients:"ধনিয়া, জিরা, বিট লবণ, গোলমরিচ, শুকনা মরিচ, চাট মসলা ও অন্যান্য প্রাকৃতিক মসলা।",

    nutrition:"প্রাকৃতিক মসলা ও অ্যান্টিঅক্সিডেন্ট সমৃদ্ধ।",

    storage:"বায়ুরোধী পাত্রে, ঠান্ডা ও শুষ্ক স্থানে সংরক্ষণ করুন।",

    delivery:"সারা বাংলাদেশে হোম ডেলিভারি।",

    benefits:[
        "ঝালমুড়ির স্বাদ বহুগুণ বাড়ায়",
        "খাঁটি ও ভেজালমুক্ত",
        "তাজা গুঁড়া মসলা",
        "সুগন্ধ দীর্ঘক্ষণ থাকে",
        "ঘরোয়া স্বাদের নিশ্চয়তা"
    ]

}

};
/* ==========================================
LOAD PRODUCT DETAILS
========================================== */
/* ==========================================
LOAD PRODUCT DETAILS
========================================== */

document.addEventListener("DOMContentLoaded", function(){

    let id = new URLSearchParams(window.location.search).get("id");


    if(!id){
        console.log("No Product ID Found");
        return;
    }


    let product = products[id];


    if(!product){
        console.log("Product Not Found");
        return;
    }



    // Name

    document.getElementById("productName").innerHTML =
    product.name;



    // Category

    document.getElementById("productCategory").innerHTML =
    product.category;



    // Description

    document.getElementById("productDescription").innerHTML =
    product.description;



    // Main Image

    document.getElementById("mainImage").src =
    product.images[0];



    // Stock

    document.getElementById("stockStatus").innerHTML =
    product.stock;




    /* ==========================
       THUMBNAIL IMAGE
    ========================== */

    let thumbContainer =
    document.getElementById("thumbnailContainer");


    thumbContainer.innerHTML="";


    product.images.forEach((img,index)=>{


        thumbContainer.innerHTML += `

        <img

        src="${img}"

        class="thumb ${index===0?'active':''}"

        onclick="changeImage('${img}',this)"

        >

        `;

    });





    /* ==========================
       PRICE & WEIGHT
    ========================== */


    let weightBox =
    document.getElementById("weightContainer");


    weightBox.innerHTML="";


    product.prices.forEach((item,index)=>{


        weightBox.innerHTML += `

        <button

        class="weight-btn ${index===0?'active':''}"

        onclick="

        showPrice(
        ${item.price},
        this
        )

        ">

        ${item.weight}

        </button>

        `;


    });



    // First Price Show

    document.getElementById("mainPrice").innerHTML =

    "৳ " + product.prices[0].price;






    /* ==========================
       DETAILS
    ========================== */


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





/* ==========================================
CHANGE MAIN IMAGE
========================================== */


function changeImage(src,el){


document.getElementById("mainImage").src = src;


document.querySelectorAll(".thumb")
.forEach(img=>{

img.classList.remove("active");

});


el.classList.add("active");


}







/* ==========================================
CHANGE PRICE
========================================== */


function showPrice(price,btn){


document.getElementById("mainPrice").innerHTML =

"৳ " + price;



document.querySelectorAll(".weight-btn")
.forEach(item=>{

item.classList.remove("active");

});


btn.classList.add("active");


}
