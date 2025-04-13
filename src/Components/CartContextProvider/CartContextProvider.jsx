import React, { Children, createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [cartVisible, setCartVisible] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const [search, setSearch] = useState(false);
  
  const cartDetailsOpenHandler = () => {
    setCartVisible(true);
  };
  const searchBarHandler = (event) => {
    setSearchKey(event.target.value);
    {
      searchKey.length > 1 ? setSearch(true) : setSearch(false);
    }
  };
  
  const addToCart = async (productDetails) => {
    if (cart.some(item => item.id === productDetails.id)) {
      alert("Already exists in cart");
    } else {
      await setCart([...cart, productDetails]);
      calculateTotal();
    }
  };
  
  const removeFromCart = async (removeId) => {
    const updatedCart = cart.filter((_, index) => index !== removeId);
    await setCart(updatedCart);
    calculateTotal();
  };
  
  const calculateTotal = () => {
    let price = 0;
    cart.forEach(product => {
      price = price + product.price;
    });
    setTotal(price);
  };
  
  const value = {
    cart,
    total,
    cartVisible,
    searchKey,
    search,
    addToCart,
    removeFromCart,
    cartDetailsOpenHandler,
    searchBarHandler,
    
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider
