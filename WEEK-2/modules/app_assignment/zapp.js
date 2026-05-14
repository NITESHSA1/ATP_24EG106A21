import { getAllProducts, searchProducts } from './aaproduct.js';
import { addToCart, getCartItems, getCartTotal, updateQuantity, removeFromCart } from './acart.js';
import { processPayment } from './payment.js';

console.log("=== E-Commerce Store ===");

console.log("\nAll Products:");
console.log(getAllProducts());

console.log('\nSearching for "phone":');
console.log(searchProducts("phone"));

console.log("\n=== Adding to Cart ===");
console.log(addToCart(1, 1)); // Laptop
console.log(addToCart(3, 3)); // Headphones
console.log(addToCart(1, 2)); // Laptop (quantity 1+2=3)

console.log("\n=== Current Cart ===");
console.log(getCartItems());
console.log("Cart Total:", getCartTotal());

console.log("\n=== Updating Quantities ===");
// To avoid 'undefined', updateQuantity could return a string, or just call it:
updateQuantity(1, 2); 
console.log("Laptop quantity updated to 2");

console.log("\n=== Removing Item ===");
removeFromCart(3); // Remove Headphones
console.log("Headphones removed from cart");

console.log("\n=== Updated Cart ===");
console.log(getCartItems());
console.log("Cart Total:", getCartTotal());

console.log("\n=== Checkout ===");
const orderSummary = processPayment('upi', 'WELCOME10');
console.log(orderSummary);
