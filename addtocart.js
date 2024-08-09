const product = [
    {
        id: 0,
        image: 'images/Butter.jpg',
        title: 'Butter 1KG',
        price: 550,
    },
    {
        id: 1,
        image: 'images/Milk.jpeg',
        title: 'Milk 1KG',
        price: 900,
    },
    {
        id: 2,
        image: 'images/Cheese.jpg',
        title: 'Cheese 1KG',
        price: 1500, 
    },
    {
        id: 3,
        image: 'images/Yoghurt.jpeg',
        title: 'Yoghurt 1',
        price: 140,
    },
    {
        id: 4,
        image: 'images/Cream.jpg',
        title: 'Cream 1KG',
        price: 860,
    },
    {
        id: 5,
        image: 'images/eggs.jpeg',
        title: 'Eggs half a Dozen',
        price: 180,
    },
    {
        id: 6,
        image: 'images/Carrot.jpeg',
        title: 'Carrot 1KG',
        price: 760,
    },
    {
        id: 7,
        image: 'images/Potato.jpg',
        title: 'Potato 1KG',
        price: 490,
    },
    {
        id: 8,
        image: 'images/Brinjal.jpg',
        title: 'Brinjal 1KG',
        price: 570,
    },
    {
        id: 9,
        image: 'images/Garlic.jpg',
        title: 'Garlic 1KG',
        price: 380,
    },
    {
        id: 10,
        image: 'images/Broccoli.jpg',
        title: 'Broccoli 1KG',
        price: 1700,
    },
    {
        id: 11,
        image: 'images/Tomato.jpg',
        title: 'Tomato 1KG',
        price: 500,
    },
    {
        id: 12,
        image: 'images/Apples.jpeg',
        title: 'Apples 1KG',
        price: 500,
    },
    {
        id: 13,
        image: 'images/Orange.jpeg',
        title: 'Orange 1KG',
        price: 400,
    },
    {
        id: 14,
        image: 'images/Banana.jpeg',
        title: 'Banana 1KG',
        price: 300,
    },
    {
        id: 15,
        image: 'images/strawberries.jpg',
        title: 'strawberries 1KG',
        price:900,
    },
    {
        id: 16,
        image: 'images/papaya.jpeg',
        title: 'Papaya 1',
        price: 280,
    },
    {
        id: 17,
        image: 'images/watermelon.jpg',
        title: 'Watermelon 1',
        price: 320,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
    document.getElementById('root').innerHTML = categories.map((item, index) => {
        var { image, title, price } = item;
        return (
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div>
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>Rs. ${price}.00</h2>
                    <div class='quantity-wrapper'>
                        <input type='number' min='0' value='0' id='quantity-${index}' class='quantity-input'>
                    </div>
                    <button onclick='addtocart(${index})'>Add to cart</button>
                </div>
            </div>`
        )
    }).join('');
    

var cart = [];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart() {
    let total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length === 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "Rs. 0.00";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((item, index) => {
            const { image, title, price, quantity } = item;
            total += price * quantity;
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <p style='font-size:12px;'>Quantity: ${quantity}</p>
                    <h2 style='font-size: 15px;'>Rs. ${price * quantity}.00</h2>
                    <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
                </div>`
            );
        }).join('');
        document.getElementById("total").innerHTML = "Rs. " + total + ".00";
    }
}

// Existing code...
var cart = [];

// Existing code...

function addtocart(a) {
    const quantityInput = document.getElementById(`quantity-${a}`);
    const quantity = parseInt(quantityInput.value, 10) || 0;
    const itemInCart = cart.find(item => item.id === categories[a].id);

    if (itemInCart) {
        itemInCart.quantity += quantity;
    } else {
        cart.push({ ...categories[a], quantity });
    }

    quantityInput.value = 0; // Reset quantity input
    saveCartToLocalStorage(); // Save cart to localStorage
    displaycart();
}

function delElement(a) {
    cart.splice(a, 1);
    saveCartToLocalStorage(); // Save cart to localStorage
    displaycart();
}

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function displaycart() {
    let total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length === 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "Rs. 0.00";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((item, index) => {
            const { image, title, price, quantity } = item;
            total += price * quantity;
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <p style='font-size:12px;'>Quantity: ${quantity}</p>
                    <h2 style='font-size: 15px;'>Rs. ${price * quantity}.00</h2>
                    <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
                </div>`
            );
        }).join('');
        document.getElementById("total").innerHTML = "Rs. " + total + ".00";
    }
}

function saveToFavorites() {
    localStorage.setItem('favoriteOrder', JSON.stringify(cart));
    alert("Order saved to favorites!");
}

function applyFavorites() {
    const favoriteOrder = localStorage.getItem('favoriteOrder');
    if (favoriteOrder) {
        cart = JSON.parse(favoriteOrder);
        saveCartToLocalStorage(); // Save cart to localStorage
        displaycart();
        alert("Favorite order applied!");
    } else {
        alert("No favorite order found.");
    }
}

document.querySelector('.add-to-favourites').addEventListener('click', saveToFavorites);
document.querySelector('.apply-favourites').addEventListener('click', applyFavorites);
