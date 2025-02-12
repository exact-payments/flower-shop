// src/pages/CheckoutPage.tsx
import React from 'react';
import { useCart } from '../context/CartContext';
import { useHistory } from 'react-router-dom';

export const CheckoutPage: React.FC = () => {
  const { cart, getCartTotal } = useCart();
  const history = useHistory();

  const handlePaymentClick = async () => {
    try {
      // Here you would typically make an API call to your payment processor
      const response = await fetch('/api/create-payment-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cart,
          total: getCartTotal(),
        }),
      });

      if (response.ok) {
        const { paymentUrl } = await response.json();
        window.location.href = paymentUrl;
      }
    } catch (error) {
      console.error('Error creating payment session:', error);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="checkout-container">
        <h1 className="checkout-title">Checkout</h1>
        <p className="checkout-prompt">Your cart is empty</p>
        <button 
          onClick={() => history.push('/')}
          className="checkout-button"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Checkout</h1>
      <p className="checkout-prompt">Please review your items and proceed to payment</p>

      <div className="checkout-items">
        {cart.map(item => (
          <div key={item.id} className="checkout-item">
            <img 
              src={item.imageUrl} 
              alt={item.name} 
              className="checkout-item-image"
            />
            <div className="checkout-item-details">
              <div className="checkout-item-name">{item.name}</div>
              <div className="checkout-item-description">{item.description}</div>
            </div>
            <div className="checkout-item-quantity">
              Quantity: {item.quantity}
            </div>
            <div className="checkout-item-price">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      <div className="checkout-summary">
        <div className="checkout-total">
          <span>Total</span>
          <span>${getCartTotal().toFixed(2)}</span>
        </div>
        <button 
          onClick={handlePaymentClick}
          className="checkout-button"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};