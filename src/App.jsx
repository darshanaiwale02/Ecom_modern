import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Products from "./components/Products.jsx";
import Review from "./components/Review";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Cart from "./components/Cart";
import Collections from "./components/Collections";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";


const App = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    
    
    
   
    <div>
      <Provider store={store}>
        <Navbar setShowCart={setShowCart} />

        {showCart && <Cart setShowCart={setShowCart} />}

        <div id="home">
          <Home />
        </div>
         
    
  
        <div id="shop">
          <Shop />
        </div>

        <Collections />

       
        <div id="productb">
          <Products />
        </div>
      
       
        <div id="review">
          <Review />
        </div>
        
      
        
        <Footer />

        <Toaster position="bottom-center" reverseOrder={false} />
      </Provider>
    

      <Outlet/>
    </div>
  
  );
 
};

export default App;
