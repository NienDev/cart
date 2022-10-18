import { createContext, ReactNode, useContext, useState } from "react";

type CartItem = {
  id: number;
  quantity: number;
};

type OrderContextProviderProps = {
  children: ReactNode;
};

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  getQuantityOfAllItems: () => number;
  cartItems: CartItem[];
  toggleSideCart: () => void;
  sideCartState: boolean;
};

export const OrderContext = createContext({} as ShoppingCartContext);

export function useOrderContext() {
  return useContext(OrderContext);
}

export const OrderProvider = ({ children }: OrderContextProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [sideCartState, setSideCartState] = useState<boolean>(false);

  function toggleSideCart() {
    setSideCartState((prevState) => !prevState);
  }

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    setCartItems((curItems) => {
      if (curItems.find((item) => item.id === id) == null) {
        return [...curItems, { id, quantity: 1 }];
      } else {
        return curItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartItems((curItems) => {
      if (curItems.find((item) => item.id === id)?.quantity === 1) {
        return curItems.filter((item) => item.id !== id);
      } else {
        return curItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems((curItems) => {
      return curItems.filter((item) => item.id !== id);
    });
  }

  function getQuantityOfAllItems() {
    let sum = 0;
    cartItems.forEach((item) => {
      sum += item.quantity;
    });
    return sum;
  }

  return (
    <OrderContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        getQuantityOfAllItems,
        toggleSideCart,
        sideCartState,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
