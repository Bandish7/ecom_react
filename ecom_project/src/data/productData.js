const productData = {
    categories: [
        {
            id: "dresses",
            category: "Dresses",
            image: "https://content-us-5.content-cms.com/af9094ac-4ec2-4ea9-8480-e7ef2c8369de/dxresources/8574/8574250e-9b8b-44f3-8d60-0084a8e88860.jpg?resize=267px%3A344px&crop=258%3A344%3B4%2C0&output-format=webp?w=384&q=75",
            products: [
                {
                    reviewCount:234, description:"A classic jean jacket that's stood the test of time. A blank canvas for self-expression. A versatile essential that'll complete any ensemble", rating : 4,
                    id: 1,
                    name: "Regatta",
                    href: "#",
                    price: "$75.00",
                    offer: "SAVE 30%",
                    color: "Pink",
                    imageAlt: "",
                    imageSrc: "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/45/465/2777/102/1/176989360/176989360_2_360x464.webp?w=384&q=75"
                },
                {
                    reviewCount:234, description:"A classic jean jacket that's stood the test of time. A blank canvas for self-expression. A versatile essential that'll complete any ensemble", rating : 4,
                    id: 2,
                    name: "Regatta Petites",
                    href: "#",
                    price: "$69.97",
                    offer: "SAVE 30%",
                    color: "Blue",
                    imageAlt: "",
                    imageSrc: "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/45/465/2737/701/4/175517440/175517440_2_360x464.webp?w=384&q=75"
                },
                {
                    reviewCount:234, description:"A classic jean jacket that's stood the test of time. A blank canvas for self-expression. A versatile essential that'll complete any ensemble", rating : 4,
                    id: 3,
                    name: "Basque",
                    href: "#",
                    price: "$104.97",
                    offer: "SAVE 30%",
                    color: "Blue",
                    imageAlt: "",
                    imageSrc: "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/45/467/2426/202/1/181214500/181214500_2_360x464.webp?w=384&q=75"
                },
                {
                    reviewCount:234, description:"A classic jean jacket that's stood the test of time. A blank canvas for self-expression. A versatile essential that'll complete any ensemble", rating : 4,
                    id: 4,
                    name: "Forever New",
                    href: "#",
                    price: "$189.99",
                    offer: "SAVE 30%",
                    color: "Blue",
                    imageAlt: "",
                    imageSrc: "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/70/707/2518/100/1/181366660/181366660_2_360x464.webp?w=384&q=75"
                },
                {
                    reviewCount:234, description:"A classic jean jacket that's stood the test of time. A blank canvas for self-expression. A versatile essential that'll complete any ensemble", rating : 4,
                    id: 5,
                    name: "David Lawrence",
                    href: "#",
                    price: "$287.20",
                    offer: "SAVE 30%",
                    color: "Blue",
                    imageAlt: "",
                    imageSrc: "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/70/706/2792/10/1/191520460/191520460_2_360x464.webp?w=384&q=75"
                }
            ]
        },
        {
            id: "pants",
            category: "Pants & Chinos",
            image: "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/40/401/3644/201/2/187075240/187075240_1_720x928.webp?w=750&q=75",
            products: [
                {
                    reviewCount:234, description:"A classic jean jacket that's stood the test of time. A blank canvas for self-expression. A versatile essential that'll complete any ensemble", rating : 4,
                    id: 1,
                    name: "Gazman",
                    inStock: true,
                    href: "#",
                    price: "$81.75",
                    offer: "SAVE 30%",
                    color: "Blue",
                    imageAlt: "",
                    imageSrc: "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/40/401/3644/201/2/829744030/829744030_2_360x464.webp?w=640&q=75"
                },
                {
                    reviewCount:234, description:"A classic jean jacket that's stood the test of time. A blank canvas for self-expression. A versatile essential that'll complete any ensemble", rating : 4,
                    id: 2,
                    name: "Jack & Jones",
                    href: "#",
                    price: "$74.96",
                    offer: "SAVE 30%",
                    color: "White",
                    imageAlt: "",
                    imageSrc: "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/40/406/3243/101/3/178285000/178285000_2_360x464.webp?w=640&q=75"
                },
                {
                    reviewCount:234, description:"A classic jean jacket that's stood the test of time. A blank canvas for self-expression. A versatile essential that'll complete any ensemble", rating : 4,
                    id: 3,
                    name: "Nike",
                    href: "#",
                    price: "$112.97",
                    offer: "SAVE 30%",
                    color: "Black",
                    imageAlt: "",
                    imageSrc: "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/40/411/3872/100/1/983552320/983552320_2_360x464.webp?w=640&q=75"
                },
                {
                    reviewCount:234, description:"A classic jean jacket that's stood the test of time. A blank canvas for self-expression. A versatile essential that'll complete any ensemble", rating : 4,
                    id: 4,
                    name: "Reserve",
                    href: "#",
                    price: "$89.99",
                    offer: "SAVE 30%",
                    color: "Red",
                    imageAlt: "",
                    imageSrc: "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/40/402/3326/16/2/748263340/748263340_2_3_360x464.webp?w=640&q=75"
                },
                {
                    reviewCount:234, description:"A classic jean jacket that's stood the test of time. A blank canvas for self-expression. A versatile essential that'll complete any ensemble", rating : 4,
                    id: 5,
                    name: "Blaq",
                    inStock: false,
                    href: "#",
                    price: "$87.20",
                    offer: "SAVE 30%",
                    color: "Black",
                    imageAlt: "",
                    imageSrc: "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/40/406/3664/201/2/699202900/699202900_2_7_360x464.webp?w=640&q=75"
                }
            ]
        },
        {
            id: "tshirts",
            category: "Men's Tshirt",
            image: "https://content-us-5.content-cms.com/af9094ac-4ec2-4ea9-8480-e7ef2c8369de/dxresources/6147/6147cad1-b25e-4285-911e-5260c5dd7da0.jpg?resize=258px%3A344px&crop=258%3A344%3B0%2C0&output-format=webp?w=640&q=75",
            products: [
                {
                    reviewCount:234, description:"A classic jean jacket that's stood the test of time. A blank canvas for self-expression. A versatile essential that'll complete any ensemble", rating : 4,
                    id: 1,
                    name: " Original Housemark Tee in Navy",
                    href: "#",
                    price: "$29.96",
                    offer: "SAVE 30%",
                    color: "Navy",
                    imageAlt: "",
                    imageSrc: "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/40/406/3454/500/7/678365650/678365650_2_1_360x464.jpeg?w=750&q=75"
                },
                {
                    reviewCount:234, description:"A classic jean jacket that's stood the test of time. A blank canvas for self-expression. A versatile essential that'll complete any ensemble", rating : 4,
                    id: 2,
                    name: " Joe Short Sleeve Print T-Shirt",
                    href: "#",
                    price: "$20.97",
                    offer: "SAVE 30%",
                    color: "Black",
                    imageAlt: "",
                    imageSrc: "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/40/406/3351/100/3/174133120/174133120_1_240x309.webp?w=640&q=75"
                },
                {
                    reviewCount:234, description:"A classic jean jacket that's stood the test of time. A blank canvas for self-expression. A versatile essential that'll complete any ensemble", rating : 4,
                    id: 3,
                    name: "Seed heritage",
                    href: "#",
                    price: "$95.96",
                    offer: "SAVE 30%",
                    color: "Olive",
                    imageAlt: "",
                    imageSrc: "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/70/705/3238/100/1/184974040_184967680/184974040_184967680_1_240x309.webp?w=640&q=75"
                },
                {
                    reviewCount:234, description:"A classic jean jacket that's stood the test of time. A blank canvas for self-expression. A versatile essential that'll complete any ensemble", rating : 4,
                    id: 4,
                    name: "SuperDry",
                    href: "#",
                    price: "$59.95",
                    offer: "SAVE 30%",
                    color: "White",
                    imageAlt: "",
                    imageSrc: "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/70/705/3854/100/1/917326990/917326990_1_240x309.webp?w=640&q=75"
                },
                {
                    reviewCount:234, description:"A classic jean jacket that's stood the test of time. A blank canvas for self-expression. A versatile essential that'll complete any ensemble", rating : 4,
                    id: 5,
                    name: "Lacoste",
                    href: "#",
                    price: "$97.50",
                    offer: "SAVE 30%",
                    color: "Hydro",
                    imageAlt: "",
                    imageSrc: "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/40/401/3323/300/7/187273060/187273060_1_240x309.webp?w=640&q=75"
                }
            ]
        },
        {
            id: "baby-boys-sleepwears",
            category: "Baby Boys Sleepwear",
            image: "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/30/313/8345/102/4/176639320/176639320_1_720x928.webp?w=1920&q=75",
            products: [
                {
                    reviewCount:234, description:"A classic jean jacket that's stood the test of time. A blank canvas for self-expression. A versatile essential that'll complete any ensemble", rating : 4,
                    id: 1,
                    name: "Dino Digger Pyjama Set in Blue",
                    href: "#",
                    price: "$17.49",
                    offer: "SAVE 30%",
                    color: "Pink",
                    inStock : true,
                    imageAlt: "",
                    imageSrc: "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/30/309/8344/102/2/172382260/172382260_1_720x928.webp?w=1920&q=75"
                },
                {
                    reviewCount:234, description:"A classic jean jacket that's stood the test of time. A blank canvas for self-expression. A versatile essential that'll complete any ensemble", rating : 4,
                    id: 2,
                    name: "Hogwarts Short Sleeve Pyjama in Set",
                    href: "#",
                    price: "$42.99",
                    offer: "SAVE 30%",
                    color: "Blue",
                    imageAlt: "",
                    imageSrc: "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/30/313/8345/102/4/174700120/174700120_1_720x928.webp?w=1920&q=75"
                },
                {
                    reviewCount:234, description:"A classic jean jacket that's stood the test of time. A blank canvas for self-expression. A versatile essential that'll complete any ensemble", rating : 4,
                    id: 3,
                    name: "Remi Rib Dino PJ Set in Light Blue",
                    href: "#",
                    price: "$20.99",
                    offer: "SAVE 30%",
                    color: "Blue",
                    imageAlt: "",
                    imageSrc: "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/30/300/8123/102/6/173027140/173027140_1_720x928.webp?w=1920&q=75"
                },
                {
                    reviewCount:234, description:"A classic jean jacket that's stood the test of time. A blank canvas for self-expression. A versatile essential that'll complete any ensemble", rating : 4,
                    id: 4,
                    name: "Textured Mickey Mouse Print Pyjama Set in Baby Blue",
                    href: "#",
                    price: "$36.99",
                    offer: "SAVE 30%",
                    color: "Blue",
                    imageAlt: "",
                    imageSrc: "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/30/313/8345/102/4/176639380/176639380_1_720x928.webp?w=1920&q=75"
                },
                {
                    reviewCount:234, description:"A classic jean jacket that's stood the test of time. A blank canvas for self-expression. A versatile essential that'll complete any ensemble", rating : 4,
                    id: 5,
                    name: "Race Car Pyjama Set in Grey Marble",
                    href: "#",
                    price: "$17.49",
                    offer: "SAVE 30%",
                    color: "Blue",
                    imageAlt: "",
                    imageSrc: "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/30/309/8344/102/2/174465700/174465700_1_720x928.webp?w=1920&q=75"
                }
            ]
        },
        {
            id: "knitwear",
            category: "Knitwear",
            image: "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/70/706/2852/10/1/191526520/191526520_1_240x309.webp?w=384&q=75",
            products: [
                {
                    
                    reviewCount:234, description:"A classic jean jacket that's stood the test of time. A blank canvas for self-expression. A versatile essential that'll complete any ensemble", rating : 4,
                    id: 1,
                    name: "Stripe Knit top",
                    href: "#",
                    price: "$75.00",
                    offer: "SAVE 30%",
                    color: "Pink",
                    imageAlt: "",
                    imageSrc: "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/70/706/2852/10/1/191526940/191526940_1_240x309.webp?w=384&q=75"
                },
                {
                    reviewCount:234, description:"A classic jean jacket that's stood the test of time. A blank canvas for self-expression. A versatile essential that'll complete any ensemble", rating : 4,
                    id: 2,
                    name: "Jane knit Polo shirt",
                    href: "#",
                    price: "$69.97",
                    offer: "SAVE 30%",
                    color: "Blue",
                    imageAlt: "",
                    imageSrc: "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/70/706/2761/10/1/178766020/178766020_1_240x309.webp?w=384&q=75"
                },
                {
                    reviewCount:234, description:"A classic jean jacket that's stood the test of time. A blank canvas for self-expression. A versatile essential that'll complete any ensemble", rating : 4,
                    id: 3,
                    name: "Cotton Graphic Pattern Sweatshirt",
                    href: "#",
                    price: "$104.97",
                    offer: "SAVE 30%",
                    color: "Blue",
                    imageAlt: "",
                    imageSrc: "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/70/706/2792/10/1/194447320/194447320_1_1_240x309.webp?w=384&q=75"
                },
                {
                    reviewCount:234, description:"A classic jean jacket that's stood the test of time. A blank canvas for self-expression. A versatile essential that'll complete any ensemble", rating : 4,
                    id: 4,
                    name: "Linen knit",
                    href: "#",
                    price: "$189.99",
                    offer: "SAVE 30%",
                    color: "Blue",
                    imageAlt: "",
                    imageSrc: "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/70/707/2518/100/1/181366660/181366660_2_360x464.webp?w=384&q=75"
                },
                {
                    reviewCount:234, description:"A classic jean jacket that's stood the test of time. A blank canvas for self-expression. A versatile essential that'll complete any ensemble", rating : 4,
                    id: 5,
                    name: "Cotton Blend Spot Jumper",
                    href: "#",
                    price: "$287.20",
                    offer: "SAVE 30%",
                    color: "Blue",
                    imageAlt: "",
                    imageSrc: "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/45/465/2737/700/2/155797600/155797600_1_240x309.webp?w=384&q=75"
                }
            ]
        },
        { id: "jackets",
            category: "Jackets",
            image:"https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/45/451/2422/301/1/816841360/816841360_2_1_360x464.jpeg?w=384&q=75",
            products: [
                {id: 1,
                    reviewCount:234, description:"A classic jean jacket that's stood the test of time. A blank canvas for self-expression. A versatile essential that'll complete any ensemble", rating : 4,
                    name: "Yarra Trail",
                    href: "#",
                    price: 141.75,
                    offer: "SAVE 30%",
                    color: "Emily Trench in Stone",
                    imageAlt: "",
                    imageSrc: "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/77/772/7837/1/1/883057060/883057060_2_2_360x464.webp?w=384&q=75"
                },
                {id: 2,
                    reviewCount:234, description:"A classic jean jacket that's stood the test of time. A blank canvas for self-expression. A versatile essential that'll complete any ensemble", rating : 4,
                    name: "HARPER DRESS",
                    href: "#",
                    price: 70.00,
                    offer: "SAVE 30%",
                    color: "Contour Zip Jacket in Onyx",
                    imageAlt: "",
                    imageSrc: "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/77/771/7943/1/1/196916440/196916440_2_360x464.webp?w=384&q=75"
                },
                {id: 3,
                    reviewCount:234, description:"A classic jean jacket that's stood the test of time. A blank canvas for self-expression. A versatile essential that'll complete any ensemble", rating : 4,
                    name: "Belle and Bloom",
                    href: "#",
                    price: 174.97,
                    offer: "SAVE 30%",
                    color: "Eperical trenc Coat in Brown ",
                    imageAlt: "",
                    imageSrc: "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/70/706/2547/100/1/995831290/995831290_2_360x464.webp?w=384&q=75"
                },
                {id: 4,
                    reviewCount:234, description:"A classic jean jacket that's stood the test of time. A blank canvas for self-expression. A versatile essential that'll complete any ensemble", rating : 4,
                    name: "Belle and Bloom",
                    href: "#",
                    price: 199.96,
                    offer: "SAVE 30%",
                    color: "Wild Skies Denim Trench in Stonewash",
                    imageAlt: "",
                    imageSrc: "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/70/706/2547/100/1/995832910_152638300/995832910_152638300_2_360x464.webp?w=384&q=75"
                },
                {id: 5,
                    reviewCount:234, description:"A classic jean jacket that's stood the test of time. A blank canvas for self-expression. A versatile essential that'll complete any ensemble", rating : 4,
                    name: "Rainbird",
                    href: "#",
                    price: 146.99,
                    offer: "SAVE 30%",
                    color: "Black",
                    imageAlt: "",
                    imageSrc: "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/77/772/7878/1/1/102458890/102458890_2_360x464.webp?w=384&q=75"
                }
                
            ]
           },

    ]
}

export default productData;