import axios from "axios";
import React, {useContext, useState } from "react";
import ProductCardComponent from "../ProductCardComponent/ProductCardComponent";
import { useQuery } from "@tanstack/react-query";
import { CartContext } from "../CartContextProvider/CartContextProvider";

const ProductFetchComponent = () => {

 
  const context = useContext(CartContext);
  const {search,searchKey}=context

  const fetchProducts = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products`);
    return response.data
  };
  
  const {data:product,isLoading,isError,error}=useQuery({queryKey:['product'],queryFn:()=>fetchProducts()})
  
  if(isLoading){
    return(
      <div>Loading...</div>
    )
  }
  if(isError){
    <div>Error{error.message}</div>
  }
 
  return (
    <React.Fragment>
      <nav className="w-full fixed z-20">
      </nav>
      <main className="bg-slate-100">
        <div>
          {!search && (
            <div className="flex w-full flex-wrap gap-10 justify-evenly py-4 px-12 sm:px-0 ">
              {product &&
                product.map((it, index) => (
                  <div
                    className="w-90 h-96 z-0 bg-blue-100 shadow-md text-gray-800 hover:shadow-2xl hover:scale-105 duration-300 transition-transform hover:bg-white p-4 rounded-lg px-10 xs:mt-10 xs:w-72"
                    key={index}
                  >
                    <ProductCardComponent data={it} />
                  </div>
                ))}
            </div>
          )}
          {search && (
            <div className="flex w-full flex-wrap gap-10 justify-evenly pt-20">
              {product &&
                product
                  .filter((it) =>
                    it.title
                      .toLowerCase()
                      .includes(searchKey.toLowerCase())
                  )
                  .map((it, index) => (
                    <div
                      className="w-90 h-96 z-0 bg-slate-200 hover:scale-105 hover:scale-y-125 transition-transform hover:bg-white p-4 rounded-lg px-10"
                      key={index}
                    >
                      <ProductCardComponent data={it}  />
                    </div>
                  ))}
            </div>
          )}
        </div>
      </main>
    </React.Fragment>
  );
};

export default ProductFetchComponent;
