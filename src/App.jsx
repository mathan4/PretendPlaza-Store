import React from 'react';
import ProductFetchQueryComponent from './Components/ProductFetchComponent/ProductFetchQueryComponent';
import CartComponent from './Components/CartComponent/CartComponent';
import CartContextProvider from './Components/CartContextProvider/CartContextProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBarComponent from './Components/NavBarComponent/NavBarComponent';

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
      <NavBarComponent/>
        <Routes>
          <Route exact path='/' element={<ProductFetchQueryComponent />} />
          <Route exact path='/cart' element={<CartComponent />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
