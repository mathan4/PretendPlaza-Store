import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [searchKey, setSearchKey] = useState("");
  const [search, setSearch] = useState(false);
  
  const cartDetailsOpenHandler = () => {
    setCartVisible(true);
  };

  const checkout=()=>{
    setCart([])
    setTotal(0)
  }
  
  const searchBarHandler = (event) => {
    setSearchKey(event.target.value);
    setSearch(searchKey.length > 1);
  };
  
  const addToCart = async (productDetails) => {
    const existingItemIndex = cart.findIndex(item => item.id === productDetails.id);
    
    if (existingItemIndex !== -1) {
      // Item already exists in cart - could update quantity instead of alerting
      alert("Already exists in cart");
    } else {
      // Add item with initial quantity of 1
      const updatedCart = [...cart, { ...productDetails, quantity: 1 }];
      setCart(updatedCart);
      console.log("Item added to cart");
    }
  };
  
  // Make sure this effect runs whenever cart changes
  useEffect(() => {
    calculateTotal();
  }, [cart]);
  
  const removeFromCart = (removeId) => {
    const updatedCart = cart.filter((_, index) => index !== removeId);
    setCart(updatedCart);
  };
  
  // Fixed updateQuantity function
  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;
    
    const updatedCart = [...cart];
    updatedCart[index] = { 
      ...updatedCart[index], 
      quantity: newQuantity 
    };
    setCart(updatedCart);
  };
  
  // Fixed calculate total function
  const calculateTotal = () => {
    const calculatedTotal = cart.reduce((sum, product) => {
      const price = parseFloat(product.price) || 0;
      const quantity = product.quantity || 1;
      return sum + (price * quantity);
    }, 0);
    
    setTotal(calculatedTotal);
    console.log("Total calculated:", calculatedTotal);
  };
  
  const value = {
    cart,
    total,
    
    searchKey,
    search,
    addToCart,
    removeFromCart,
    updateQuantity,
    cartDetailsOpenHandler,
    searchBarHandler,
    checkout
  };
 
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;