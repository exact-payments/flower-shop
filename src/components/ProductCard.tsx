// src/components/ProductCard.tsx
import React from 'react';
import { Product } from '../types/types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="product-image"
        />
      </div>
      <div className="product-content">
        <div className="product-info">
          <h3 className="product-title">{product.name}</h3>
          <p className="product-description">{product.description}</p>
        </div>
        <div>
          <div className="product-price">
            ${product.price.toFixed(2)}
          </div>
          <button
            onClick={() => addToCart(product)}
            className="add-to-cart-btn"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};