import React, { createContext, useContext, useState } from "react";

interface IControlContext {
  showCart: boolean;
  setShowCart: (opt: boolean) => void;
}

const CartControlContext = createContext<IControlContext>({
  showCart: false,
  setShowCart: (_: boolean) => {},
});

interface IControlCartProps {
  children: React.ReactNode;
}

const ControlCartProvider: React.FC<IControlCartProps> = ({ children }) => {
  const [showCart, setShowCart] = useState(false);

  return (
    <CartControlContext.Provider value={{ showCart, setShowCart }}>
      {children}
    </CartControlContext.Provider>
  );
};

export function useCartController() {
  return useContext(CartControlContext);
}

export default ControlCartProvider;
