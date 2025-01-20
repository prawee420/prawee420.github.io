window.onload = function () {
    displayCart();
};

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.getElementById("cart-products-container");
    let cartCost = localStorage.getItem('totalCost');
    let cartCount = 0;

    if (cartItems && productContainer) {
        productContainer.innerHTML = ''; 
        cartCount = Object.values(cartItems).reduce((acc, item) => acc + item.inCart, 0);
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
                <div class="product container-grid" data-tag="${item.tag}">
                <div> 
                    <div class="product-details">
                        <ion-icon name="close-circle" class="remove-item"></ion-icon>
                        <img src="${item.imageUrl}" 
                             style="max-width: 100px; height: auto; object-fit: cover;"
                             onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Crect width=\'100\' height=\'100\' fill=\'%23f0f0f0\'/%3E%3Ctext x=\'50\' y=\'50\' font-family=\'Arial\' font-size=\'14\' fill=\'%23999\' text-anchor=\'middle\' dy=\'.3em\'%3ENo Image%3C/text%3E%3C/svg%3E';"
                             alt="${item.name}">
                        <span class="product-name">${item.name}</span>
                        
                    </div>
                </div>
                
                    <div class="total">
                    <div class="price">฿${item.price.toLocaleString()}</div>
                    <div class="quantity">
                        <ion-icon class="decrease-qty" name="caret-back-circle"></ion-icon>
                        <span>${item.inCart}</span>
                        <ion-icon class="increase-qty" name="caret-forward-circle"></ion-icon>
                    </div>
                        ฿${(item.inCart * item.price).toLocaleString()}
                    </div>
                </div>
            `;
        });

        document.getElementById("cart-item-count").innerText = cartCount;
        document.getElementById("cart-total").innerText = `฿${parseInt(cartCost).toLocaleString()}`;
    }
}
