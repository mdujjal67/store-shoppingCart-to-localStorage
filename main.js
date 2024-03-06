const addProduct = () => {
    const productName = document.getElementById('product-name');
    const productQuantity = document.getElementById('product-quantity');
    const product = productName.value;
    const quantity = productQuantity.value;
    productName.value = '';
    productQuantity.value = '';
    console.log(product, quantity);
    displayProduct(product, quantity);
    getShoppingStoredCart(product, quantity);
    saveProductToLocalStorage(product, quantity);
}

const displayProduct = (product, quantity) => {
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    ul.appendChild(li);
}

const getShoppingStoredCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    // console.log(storedCart);
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveProductToLocalStorage = (product, quantity) => {
    const cart = getShoppingStoredCart();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart)
    console.log(cartStringified);
    localStorage.setItem('cart', cartStringified)

}

const displayProductsFromLocalStorage = () => {
    const savedCart = getShoppingStoredCart();
    console.log(savedCart);
    for(product in savedCart){
        const quantity = savedCart[product];
        console.log(product, quantity);
        displayProduct(product, quantity);

    }

}
displayProductsFromLocalStorage();