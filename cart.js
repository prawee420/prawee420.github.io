//  ตะกร้า

let carts = document.querySelectorAll('.add-cart');
let products = [
    {
        name: 'Gliter Leather Bag',
        tag: 'gliter-leather-bag',
        price: 5799,
        inCart: 0,
        imageUrl: 'https://www.lynaccs.com/cdn/shop/files/LL23FBF008_BLK000_1_0a65c987-8253-4498-a43c-7bbcb503420d.jpg?v=1733114539'
    },
    {
        name: 'Black items Bag',
        tag: 'black-items-bag',
        price: 8599,
        inCart: 0,
        imageUrl: 'https://underarmour.scene7.com/is/image/Underarmour/1369212-001_SLB_SL?rp=standard-0pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=566&hei=708&size=566,708'
    },
    {
        name: 'Classic Leather Bag',
        tag: 'classic-leather-bag',
        price: 10890,
        inCart: 0,
        imageUrl: 'https://www.charleskeith.co.th/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-th-products/default/dwd19d5d46/images/hi-res/2024-L2-CK2-80151362-A-J8-1.jpg?sw=756&sh=1008'
    },
    {
        name: 'Black guava',
        tag: 'black-guava',
        price: 15790,
        inCart: 0,
        imageUrl: 'https://www.ppgroupthailand.com/media/catalog/product/l/2/l2605919p66_0.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1000&width=1000'
    },
    {
        name: 'White curve',
        tag: 'white-curve',
        price: 8590,
        inCart: 0,
        imageUrl: 'https://www.lynaccs.com/cdn/shop/files/LL23FBF008_WHT600_1_78625926-a8df-406b-b3a1-c269d5f84ff4.jpg?v=1728363618'
    },
    {
        name: 'White fluff',
        tag: 'white-fluff',
        price: 5290,
        inCart: 0,
        imageUrl: 'https://www.prontodenim.com/wp-content/uploads/2024/10/1-19-1.jpg'
    },
    {
        name: 'Zebra letter',
        tag: 'zebra-letter',
        price: 5890,
        inCart: 0,
        imageUrl: 'https://static.wixstatic.com/media/d62685_18c6465962e740079a975ca11bd51c8b~mv2.jpg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d62685_18c6465962e740079a975ca11bd51c8b~mv2.jpg'
    },
    {
        name: 'Red plum',
        tag: 'red-plum',
        price: 4790,
        inCart: 0,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfh8LZNCXOVDiShqigQcJPXaMpby8nIOKAIw&s'
    },
    {
        name: 'Cream petite',
        tag: 'cream-petite',
        price: 4590,
        inCart: 0,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg_SvCt5IqKG6bM1B500qF7GhpuUbRkyZhQQ&s'
    },
    {
        name: 'Mini cream wallet',
        tag: 'mini-cream-wallet',
        price: 5290,
        inCart: 0,
        imageUrl: 'https://saint-laurent.dam.kering.com/m/719efcd5d71ee1e2/Medium-414404AAA441722_A.jpg?v=12'
    },
    {
        name: 'Eyes cross',
        tag: 'eyes-cross',
        price: 10890,
        inCart: 0,
        imageUrl: 'https://assets.central.co.th/COACH-EveShoulderBagInSignatureTextileJacquardBrown-MKP1628416-1?$JPEG$&wid=550'
    },
    {
        name: 'Fluff shoulder',
        tag: 'fluff-shoulder',
        price: 10790,
        inCart: 0,
        imageUrl: 'https://cdn.shopify.com/s/files/1/0507/4927/6346/products/B23WBHI100_GRY000_2.jpg?v=1728372763'
    },
    {
        name: 'Pink flush',
        tag: 'pink-flush',
        price: 7590,
        inCart: 0,
        imageUrl: 'https://m.media-amazon.com/images/I/71y3fLGW-1L._AC_UY1100_.jpg'
    },
    {
        name: 'Lux white',
        tag: 'lux-white',
        price: 12290,
        inCart: 0,
        imageUrl: 'https://thailand.coach.com/media/catalog/product/3/8/38d7f2fc08aee0d10efe50152575d66198de55a7163f173d6d46a5b40b682d13.jpeg?optimize=low&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700'
    },
    {
        name: 'Minty cir',
        tag: 'minty-cir',
        price: 8890,
        inCart: 0,
        imageUrl: 'https://assets.central.co.th/COACH-JonieBagBlue-MKP1818817-3?$JPEG$&wid=550'
    },
    {
        name: 'Jolie bag',
        tag: 'jolie-bag',
        price: 5790,
        inCart: 0,
        imageUrl: 'https://www.lynaccs.com/cdn/shop/files/LL24SBS008_BEG500_1_bb267ff7-37a0-450f-aeba-390997c5efc7.jpg?v=1722498027'
    },
    {
        name: 'Tangerine',
        tag: 'tangerine',
        price: 5590,
        inCart: 0,
        imageUrl: 'https://shoes-republic.com/cdn/shop/files/cassetta-orange-crossbody-bag2_800x.jpg?v=1705227209'
    },
    {
        name: 'Brick',
        tag: 'brick',
        price: 7290,
        inCart: 0,
        imageUrl: 'https://www.moimoi-accessories.com/cdn/shop/products/SOFIA_small_brown_side_1024x1024.jpg?v=1652184924'
    },
    {
        name: 'Thai tea',
        tag: 'thai-tea',
        price: 5890,
        inCart: 0,
        imageUrl: 'https://cdn11.bigcommerce.com/s-uiywfsyvbe/images/stencil/1280x1280/products/610/4699/4699__85693.1667672534.jpg?c=1'
    },
    {
        name: 'Mix pink',
        tag: 'mix-pink',
        price: 4790,
        inCart: 0,
        imageUrl: 'https://m.media-amazon.com/images/I/61chuXsb8zL._AC_UY1000_.jpg'
    }
];

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    });
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart-count').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart-count').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart-count').textContent = 1;
    }

    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems !== null) {
        if (cartItems[product.tag] === undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            };
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        };
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');
    
    if (cartCost !== null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + product.price);
    } else {
        localStorage.setItem('totalCost', product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');

    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
                <div class="product" data-tag="${item.tag}"> 
                    <div class="product-details">
                        <ion-icon name="close-circle" class="remove-item"></ion-icon>
                        <img src="${item.imageUrl}" 
                             style="max-width: 100px; height: auto; object-fit: cover;"
                             onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Crect width=\'100\' height=\'100\' fill=\'%23f0f0f0\'/%3E%3Ctext x=\'50\' y=\'50\' font-family=\'Arial\' font-size=\'14\' fill=\'%23999\' text-anchor=\'middle\' dy=\'.3em\'%3ENo Image%3C/text%3E%3C/svg%3E';"
                             alt="${item.name}">
                        <span class="product-name">${item.name}</span>
                    </div>
                    <div class="price">฿${item.price.toLocaleString()}</div>
                    <div class="quantity">
                        <ion-icon class="decrease-qty" name="caret-back-circle"></ion-icon>
                        <span>${item.inCart}</span>
                        <ion-icon class="increase-qty" name="caret-forward-circle"></ion-icon>
                    </div>
                    <div class="total">
                        ฿${(item.inCart * item.price).toLocaleString()}
                    </div>
                </div>
            `;
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">Cart Total</h4>
                <h4 class="basketTotal">฿${parseInt(cartCost).toLocaleString()}</h4>
            </div>
        `;

        addEventListeners();
    }
}

function addEventListeners() {
    document.querySelectorAll('.decrease-qty').forEach(button => {
        button.addEventListener('click', function() {
            const productDiv = this.closest('.product');
            const tag = productDiv.dataset.tag;
            updateQuantity(tag, 'decrease');
        });
    });

    document.querySelectorAll('.increase-qty').forEach(button => {
        button.addEventListener('click', function() {
            const productDiv = this.closest('.product');
            const tag = productDiv.dataset.tag;
            updateQuantity(tag, 'increase');
        });
    });

    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function() {
            const productDiv = this.closest('.product');
            const tag = productDiv.dataset.tag;
            removeItem(tag);
        });
    });
}

function removeItem(tag) {
    let cartItems = JSON.parse(localStorage.getItem('productsInCart'));
    let cartCost = parseInt(localStorage.getItem('totalCost'));
    let cartNumbers = parseInt(localStorage.getItem('cartNumbers'));

    if (cartItems && cartItems[tag]) {
        cartCost -= (cartItems[tag].price * cartItems[tag].inCart);
        cartNumbers -= cartItems[tag].inCart;
        delete cartItems[tag];

        localStorage.setItem('productsInCart', JSON.stringify(cartItems));
        localStorage.setItem('totalCost', cartCost.toString());
        localStorage.setItem('cartNumbers', cartNumbers.toString());

        displayCart();
        document.querySelector('.cart-count').textContent = cartNumbers;
    }
}

function updateQuantity(productTag, action) {
    let cartItems = JSON.parse(localStorage.getItem('productsInCart'));
    let cartCost = parseInt(localStorage.getItem('totalCost'));
    let cartNumbers = parseInt(localStorage.getItem('cartNumbers'));
    
    if (cartItems && cartItems[productTag]) {
        if (action === 'increase') {
            cartItems[productTag].inCart += 1;
            cartCost += cartItems[productTag].price;
            cartNumbers += 1;
        } else if (action === 'decrease' && cartItems[productTag].inCart > 1) {
            cartItems[productTag].inCart -= 1;
            cartCost -= cartItems[productTag].price;
            cartNumbers -= 1;
        }
        
        localStorage.setItem('productsInCart', JSON.stringify(cartItems));
        localStorage.setItem('totalCost', cartCost.toString());
        localStorage.setItem('cartNumbers', cartNumbers.toString());
        

       
        displayCart();
        document.querySelector('.cart-count').textContent = cartNumbers;
    }
}


function addQuantityEventListeners() {
    const decreaseButtons = document.querySelectorAll('.decrease-qty');
    const increaseButtons = document.querySelectorAll('.increase-qty');
    
    decreaseButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productTag = button.closest('.product').dataset.tag;
            updateQuantity(productTag, 'decrease');
        });
    });
    
    increaseButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productTag = button.closest('.product').dataset.tag;
            updateQuantity(productTag, 'increase');
        });
    });
}



if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', displayCart);
} else {
    displayCart();
}

function addCheckoutButton() {
    let productContainer = document.querySelector(".products-container");
    let checkoutButton = document.createElement("div");
    
    checkoutButton.innerHTML = `
        <div class="checkout-button-container">
            <button id="checkout-btn" class="checkout-btn">
                Proceed to Checkout
            </button>
        </div>
    `;
    productContainer.appendChild(checkoutButton);
    
   
    document.getElementById('checkout-btn').addEventListener('click', () => {

        const cartItems = JSON.parse(localStorage.getItem('productsInCart'));
        const totalCost = localStorage.getItem('totalCost');
        
       
        const queryString = encodeURIComponent(JSON.stringify({
            items: cartItems,
            total: totalCost
        }));
        
        
        window.location.href = `checkout.html?cart=${queryString}`;
    });
}



onLoadCartNumbers(); 
addCheckoutButton();
addEventListeners();

