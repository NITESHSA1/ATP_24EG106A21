import { reduceStock } from './aaproduct.js';
import { getCartItems, getCartTotal, clearCart } from './acart.js';
import { applyDiscount } from './discount.js';

export function processPayment(paymentMethod, couponCode = null) {
    const items = getCartItems();
    const subtotal = getCartTotal();

    if (items.length === 0) return { status: 'failed', message: 'Cart is empty' };
    if (!validatePaymentMethod(paymentMethod)) return { status: 'failed', message: 'Invalid payment method' };

    let pricing = { originalTotal: subtotal, discount: 0, finalTotal: subtotal };
    if (couponCode) {
        pricing = applyDiscount(subtotal, couponCode, items);
    }

    // Success simulation
    items.forEach(item => reduceStock(item.id, item.quantity));
    const summary = {
        orderId: 'ORD' + Date.now(),
        items: [...items],
        subtotal: pricing.originalTotal,
        discount: pricing.discount,
        total: pricing.finalTotal,
        paymentMethod,
        status: 'success'
    };
    
    clearCart();
    return summary;
}

export function validatePaymentMethod(method) {
    return ['card', 'upi', 'cod'].includes(method.toLowerCase());
}
