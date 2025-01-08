import React from "react";

const ProductCardComponent = (productDetails) => {
  return (
    <React.Fragment>
      <div className="">
        <div className="flex justify-center w-52">
          <img
            className="rounded-lg h-52 w-52"
            src={productDetails.data.image}
            alt={productDetails.data.name}
          />
        </div>
        <div className="mt-2">
          <p className="w-60 line-clamp-2 font-semibold text-lg">{productDetails.data.title}</p>
          <p className="text-sm text-gray-500">{productDetails.data.category}</p>
          <div className="flex items-center justify-between">
           <div className="text-lg">Rs.{productDetails.data.price}</div>
          <button 
           onClick={()=>{
            productDetails.addToCart(productDetails.data)
           }}
           className="flex border-2  p-1 rounded-lg  bg-yellow-400 hover:bg-yellow-500 text-black">
            Add to cart
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
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </button>
          </div>
          {/* <p className="w-60 h-40 text-ellipsis overflow-hidden whitespace-nowrap hover:whitespace-normal hover:overflow-y-scroll hover:bg-white text-sm">
            {productDetails.data.description}
          </p> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductCardComponent;
