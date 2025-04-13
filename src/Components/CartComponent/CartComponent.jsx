import React, { useContext } from "react";
import { CartContext } from "../CartContextProvider/CartContextProvider";
import { useNavigate } from "react-router-dom";

const CartComponent = () => {
  const { cart, total, removeFromCart} = useContext(CartContext);
  const navigate = useNavigate();

  const cartDetailsCloseHandler = () => {
    navigate("/");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-end z-40">
      <div className="h-full w-80 md:w-96 bg-white shadow-lg p-4 flex flex-col overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-xl font-semibold">Your Cart</h2>
          <button
            onClick={cartDetailsCloseHandler}
            className="text-gray-500 hover:text-black transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 mt-4 space-y-4">
          {cart.length > 0 ? (
            cart.map((product, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-100 p-2 rounded-lg shadow-sm"
              >
                <div className="flex flex-col">
                  <p className="font-medium text-sm">{product.title}</p>
                  <p className="text-xs text-gray-500">₹ {product.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-xs text-red-500 font-bold hover:underline"
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-400 mt-10">No items in cart</div>
          )}
        </div>

        {/* Total */}
        <div className="mt-6 border-t pt-4 flex justify-between items-center font-semibold text-lg">
          <span>Total:</span>
          <span>₹ {Math.floor(total)}</span>
        </div>

        {/* Checkout Button (Optional) */}
        {cart.length > 0 && (
          <button
            className="mt-4 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
            onClick={() => alert("Proceed to Checkout")}
          >
            Checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default CartComponent;
