// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { HomePage } from './pages/HomePage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <Router>
      <CartProvider>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </CartProvider>
    </Router>
  );
};

export default App;