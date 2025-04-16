import React, { useContext, useState } from "react";
import image from "../../assets/logo.png";

import { CartContext } from "../CartContextProvider/CartContextProvider";
import { useNavigate } from "react-router-dom";

const NavBarComponent = (cartProducts) => {
  
  
  const context =useContext(CartContext)
  const {cart,searchBarHandler}=context
  const navigate=useNavigate();

  const cartDetailsOpenHandler = () => {
    navigate('/cart')
  };

  return (
    <div className="bg-custom-dark text-white">
      <div className="flex justify-between px-6  items-center bg-custom-dark z-20 py-4 xs:block sm:flex">
        <div className="xs:mt-2 justify-center items-center flex">
          <img src={image} className="w-8 h-8" alt="" />
          <p>PretendPlaza</p>
        </div>
        <div className="xs:flex basis-3/5 justify-between xs:justify-around xs:gap-2 xs:mt-4 flex">
          <div>
            <div className="bg-white border-2 rounded-3xl flex justify-around p-2 xs:w-48 sm:ml-4">
              <input
                className="focus:outline-none outline-none text-black placeholder:text-gray-500 xs:text-xs"
                type="text"
                placeholder="Product Name"
                onKeyDown={searchBarHandler}
              />
              <button
                onClick={() => {
                  searchBarHandler();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="black"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex gap-10 items-center sm:pl-8 xs:p-2">
            <div className="flex items-center">
              <button
                onClick={() => {
                  cartDetailsOpenHandler();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </button>
              {cart.length >= 1 && (
                <div className=" text-white border-1 bg-red-500 font-bold text-center w-6 rounded-full relative bottom-3 right-3">
                  {cart.length}
                </div>
              )}
            </div>
            <div className="flex lg:gap-2 md:gap-1 sm:gap-1 xs:hidden gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              user
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarComponent;
