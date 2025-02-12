// src/pages/HomePage.tsx
import React from 'react';
import { useCart } from '../context/CartContext';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../types/types';
import { useHistory } from 'react-router-dom';
import '../styles/App.css';

const mockProducts: Product[] = [
    {
      id: 1,
      name: "Rose",
      price: 9.99,
      description: "Romantic flower with velvety petals and fragrance.",
      imageUrl: "images/rose.jpg",
    },
    {
      id: 2,
      name: "Tulips",
      price: 19.99,
      description: "Bright spring bloom with cup-shaped petals.",
      imageUrl: "images/tulip.jpg",
    },
    {
      id: 3,
      name: "Peace Lily",
      price: 7.99,
      description: "Elegant flower with large, fragrant blossoms.",
      imageUrl: "images/peacelilly.jpg",
    },
    {
      id: 4,
      name: "Orchid",
      price: 29.99,
      description: "Exotic beauty with intricate, colorful petals.",
      imageUrl: "images/orchid.jpg",
    },
    {
      id: 5,
      name: "Sunflower",
      price: 6.99,
      description: "Tall, cheerful bloom following the sun.",
      imageUrl: "images/sunflower.jpg",
    },
    {
      id: 6,
      name: "Daisy",
      price: 4.99,
      description: "Simple white petals with a yellow center.",
      imageUrl: "images/daisy.jpg",
    },
    {
      id: 7,
      name: "Jasmine",
      price: 19.99,
      description: "Small, white flowers with a sweet scent.",
      imageUrl: "images/jasmine.jpg",
    },
    {
      id: 8,
      name: "Marigold",
      price: 9.99,
      description: "Vibrant orange blooms with a spicy aroma.",
      imageUrl: "images/marigold.jpg",
    },
    // ... other products remain the same
  ];
  

export const HomePage: React.FC = () => {
  const { cart } = useCart();
  const history = useHistory();

  const handleCartClick = () => {
    history.push('/cart');
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <nav className="nav">
        <div className="nav-content">
          <h1 className="nav-title">Flower Shop</h1>
        </div>
      </nav>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Plants Collection</h2>
          <div className="cart-summary" onClick={handleCartClick}>
            <svg 
              className="cart-icon" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span className="cart-count">{totalItems} items</span>
          </div>
        </div>
        <div className="products-grid">
          {mockProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};