import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [allData, setAllData] = useState([]);
  const [cart, setCart] = useState([]);

  const apiUrl = "https://jsonplaceholder.typicode.com/photos";
  useEffect(() => {
    getData1();
  }, []);
  const getData1 = async () => {
    try {
      const response = await axios.get(apiUrl);
      setAllData(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleAdd = (item) => {
    item.qty++;
    setCart((prevCart) => [...prevCart]);
  };
  const handleMinus = (item) => {
    item.qty--;
    if (item.qty <= 1) {
      item.qty = 1;
    }
    setCart((prevCart) => [...prevCart]);
  };

  const addToCart = (item) => {
    const existData = cart.find((cart) => cart.id == item.id);
    if (existData) {
      // console.log(existData);
      existData.qty++;
      setCart((prevCart) => [...prevCart]);
    } else {
      setCart((prevCart) => [...prevCart, item]);
    }
  };

  const removeFromCart = (item) => {
    setCart((prev) => prev.filter((prev) => prev.id !== item.id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        allData,
        addToCart,
        removeFromCart,
        handleAdd,
        handleMinus,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
// crete custom hook phuea hai khao thg data lae nr jumpen torng sai useContext t component eun
export const useCart = () => {
  return useContext(CartContext);
};
