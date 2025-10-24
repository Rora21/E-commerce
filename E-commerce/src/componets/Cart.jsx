import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  if (cart.length === 0)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold mb-2">Your cart is empty 🛍️</h2>
      </div>
    );

  return (
    <div className="min-h-screen px-8 py-12">
      <h2 className="text-3xl font-semibold text-[#83723A] mb-6">Your Cart</h2>
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4"
        >
          <div className="flex items-center gap-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded-md"
            />
            <div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p>{item.price} RWF</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={clearCart}
        className="mt-6 bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800"
      >
        Clear Cart
      </button>
    </div>
  );
}

export default Cart;
