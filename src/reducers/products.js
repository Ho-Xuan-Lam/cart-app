var initialState = [
    {
        id : 1,
        name : 'Iphone 7 Plus',
        image : 'https://cdn.tgdd.vn/Products/Images/42/78124/iphone-7-plus-32gb-gold-600x600-600x600.jpg',
        description : 'Sản phẩm do apple sản phẩm',
        price : 399,
        inventory : 10,
        rating : 4
    },
    {
        id : 2,
        name : 'Samsung galaxy S10',
        image : 'https://www.xtmobile.vn/vnt_upload/product/Hinh_DT/SamSung/Galaxy_S10/thumbs/(600x600)_crop_s10_800x800.jpg',
        description : 'Sản phẩm do samsung sản phẩm',
        price : 599,
        inventory : 15,
        rating : 3
    },
    {
        id : 3,
        name : 'Oppo Find X',
        image : 'https://cdn.tgdd.vn/Products/Images/42/165189/oppo-find-x-1-600x600.jpg',
        description : 'Sản phẩm do china sản phẩm',
        price : 599,
        inventory : 5,
        rating : 5
    }
];

const products = (state = initialState, action) => {
    switch(action.type){
        default : return [...state];
    }
}

export default products;