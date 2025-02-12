// src/pages/CartPage.tsx
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/App.css';

export const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const history = useHistory();

  const handleCheckout = async () => {
    try {
      const response = await fetch('http://localhost:4000/pay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cart,
          total: getCartTotal(),
        }),
      });
  
      const data = await response.json(); 
      if (data.success && data.paymentContent) {
        
        // Open a new window
        const newWindow = window.open('', '_blank');
        if (newWindow) {
          // Write the HTML content to the new window
          newWindow.document.write(data.paymentContent);
          newWindow.document.close();
        } else {
          alert('Please allow popups for this website to proceed with payment');
        }
      } else {
        console.error('Payment initiation failed:', data.message);
        alert('Failed to initiate payment. Please try again.');
      }
    } catch (error) {
      console.error('Error initiating payment:', error);
      alert('An error occurred while processing your payment. Please try again.');
    }
  };

  return (
    <div className="cart-page">
      <nav className="cart-header">
        <div className="cart-nav">
          <button 
            onClick={() => history.push('/')}
            className="back-button"
          >
            ←
          </button>
          <h1 className="cart-title">Shopping Cart</h1>
        </div>
      </nav>

      <div className="cart-content">
        {cart.length === 0 ? (
          <div className="empty-cart">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <p>Your cart is empty</p>
            <button 
              onClick={() => history.push('/')}
              className="checkout-button"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(item => (
                  <tr key={item.id}>
                    <td>
                      <div className="cart-item-info">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="cart-item-image"
                        />
                        <div className="cart-item-details">
                          <h3>{item.name}</h3>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        className="quantity-input"
                      />
                    </td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="remove-button"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="cart-summary">
              <div className="cart-total">
                <span className="cart-total-text">Subtotal</span>
                <span className="cart-total-amount">${getCartTotal().toFixed(2)}</span>
              </div>
              <p className="shipping-text">Free shipping</p>
              <button
                onClick={handleCheckout}
                className="checkout-button"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};