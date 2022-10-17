import { createContext, useContext, useState } from "react";
import { SideCart } from "../components/pages";
import useLocalStorage from "../hooks/useLocalStorage";

const SurfBoardsContext = createContext({});

export const useShoppingContext = () => {
  return useContext(SurfBoardsContext);
};
export function SurfBoardsProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [surfItem, setSurfItem] = useLocalStorage("Shopping-Cart",[]);

  const cartQuantity = surfItem.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const getItemQantity = (id) => {
    return surfItem.find(item => item.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (id) => {
    setSurfItem((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseCartQuantity = (id) => {
    setSurfItem((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const removeFromCart = (id) => {
    setSurfItem((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  };

  return (
    <SurfBoardsContext.Provider
      value={{
        getItemQantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        surfItem,
        cartQuantity,
        openCart,
        closeCart,
      }}
    >
      {children}
      <SideCart isOpen={isOpen}/>
    </SurfBoardsContext.Provider>
  );
}
