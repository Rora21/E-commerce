import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  
  const [cart, setCart] = useState([]);

  
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const found = cart.find((item) => item.id === product.id);

    if (found) {
     
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
     
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

 
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
