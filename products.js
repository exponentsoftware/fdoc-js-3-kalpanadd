// a. Create a function called ***rateProduct*** which rates the product

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
];

const rateProduct = (prodNmae, ratingObj) => {
    for (let key in products) {
        if (products[key].name == prodNmae) {
            products[key].ratings.push(ratingObj);
        }
        console.log(products[key].ratings);
    }
};

rateProduct("mobile phone", { userId: "ub18gy", rate: 5 });