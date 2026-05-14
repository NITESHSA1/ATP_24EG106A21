import { getProductById, checkStock } from './aaproduct.js';

let cartItems = [];

export function addToCart(productId, quantity) {
    const product = getProductById(productId);
    if (!product) return "Product not found.";
    if (!checkStock(productId, quantity)) return "Insufficient stock.";

    const existingItem = cartItems.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cartItems.push({ ...product, quantity });
    }
    return `${product.name} added to cart!`;
}

export function removeFromCart(productId) {
    cartItems = cartItems.filter(item => item.id !== productId);
}

export function updateQuantity(productId, newQuantity) {
    if (checkStock(productId, newQuantity)) {
        const item = cartItems.find(i => i.id === productId);
        if (item) item.quantity = newQuantity;
    }
}

export function getCartItems() { return cartItems; }

export function getCartTotal() {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
}

export function clearCart() { cartItems = []; }
