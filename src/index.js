import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import Products from './components/Products.jsx';
import Navbar from './components/Navbar.jsx';
import Shopping from './components/Shopping.jsx';
import Cart from "./components/Cart.jsx";
import CheckoutForm from './components/CheckoutForm.jsx';




const root = ReactDOM.createRoot(document.getElementById("root"));

const RootComponent = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <Provider store={store}>
      <Router>
        <React.Fragment>
          <Navbar setShowCart={setShowCart} />
          {showCart && <Cart setShowCart={setShowCart} />}
        </React.Fragment>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/productb" element={<Products />} />
          <Route path="/checkout" element={< CheckoutForm/>} />

          

       </Routes>
      </Router>
    </Provider>
  );
};

root.render(<RootComponent />);
