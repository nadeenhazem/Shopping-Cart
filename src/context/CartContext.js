import { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext();
function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const GetItemQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };
  const IncreaseItemQuantity = (id) => {
    setCartItems((currentItem) => {
      if (currentItem.find((item) => item.id === id) == null) {
        return [...currentItem, { id, quantity: 1 }];
      } else {
        return currentItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const DecreaseItemQuantity = (id) => {
    setCartItems((currentItem) => {
      if (currentItem.find((item) => item.id === id) == null) {
        return currentItem.filter((item) => item.id !== id);
      } else {
        return currentItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const RemoveItemFromCart = (id) => {
    setCartItems((currentItem) => currentItem.filter((item) => item.id !== id));
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        GetItemQuantity,
        IncreaseItemQuantity,
        DecreaseItemQuantity,
        RemoveItemFromCart,
      }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default CartProvider;
export const useCartContext = () => {
  return useContext(ShoppingCartContext);
};
