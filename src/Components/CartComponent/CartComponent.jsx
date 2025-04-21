import React, { useContext } from "react";
import { CartContext } from "../CartContextProvider/CartContextProvider";
import { useNavigate } from "react-router-dom";

const CartComponent = () => {
  const { cart, total, removeFromCart, updateQuantity, checkout } = useContext(CartContext);
  const navigate = useNavigate();

  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(index, newQuantity);
    }
  };

  const goToHome = () => {
    navigate("/");
  };

  const handleCheckout = () => {
   
    alert(`Processing checkout for ${cart.length} items. Total: ₹${Math.floor(total)}`);
    checkout()
    navigate('/')
  };

  return (
    <div className="cart-container md:mx-8 xl:mx-96 md:mt-10 xl:mt-20 p-4 bg-white rounded-lg shadow-md">
      {/* Header with Back Button */}
      <div className="pb-3 mb-4 border-b border-gray-200 flex items-center justify-between">
        <button
          onClick={goToHome}
          className="mr-3 text-gray-600 hover:text-black transition flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          <span className="ml-1">Back</span>
        </button>
        <h2 className="text-xl font-semibold">Your Cart</h2>
      </div>

      {/* Cart Items */}
      <div className="space-y-3 mb-6">
        {cart.length > 0 ? (
          cart.map((product, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-50 p-3 rounded-md"
            >
              {/* Product Info */}
              <div className="flex flex-col">
                <p className="font-medium">{product.title}</p>
                <p className="text-sm text-gray-600">₹ {product.price}</p>
              </div>

              {/* Quantity Control */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleQuantityChange(index, (product.quantity || 1) - 1)}
                  className="bg-gray-200 text-gray-700 w-6 h-6 rounded flex items-center justify-center hover:bg-gray-300"
                  disabled={(product.quantity || 1) <= 1}
                >
                  -
                </button>
                <span className="text-sm font-medium">{product.quantity || 1}</span>
                <button
                  onClick={() => handleQuantityChange(index, (product.quantity || 1) + 1)}
                  className="bg-gray-200 text-gray-700 w-6 h-6 rounded flex items-center justify-center hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(index)}
                className="text-sm text-red-500 hover:text-red-700 ml-2"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <div className="text-center py-6 text-gray-500">Your cart is empty</div>
        )}
      </div>

      {/* Total */}
      <div className="flex justify-between items-center font-semibold text-lg pt-3 border-t border-gray-200">
        <span>Total:</span>
        <span>₹ {Math.floor(total)}</span>
      </div>

      {/* Checkout Button */}
      {cart.length > 0 && (
        <button
          className="w-full mt-4 bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
          onClick={handleCheckout}
        >
          Checkout
        </button>
      )}
    </div>
  );
};

export default CartComponent;