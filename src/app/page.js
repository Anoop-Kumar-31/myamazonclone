'use client';
import styles from "./page.module.css";
import Header from "./Header/page";
// import FrontPage from "./Header/FrontPage/page";
import { createContext, useEffect } from "react";
import { useState } from "react";

export const checkoutContext = createContext();
export const Basket = createContext();

export default function Home() {
  const [isCheckOut, setIsCheckOut] = useState(false);
  const [BasketData, setBasketData] = useState([]);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const data = localStorage.getItem("BasketData");
      if (data) {
        setBasketData(JSON.parse(data));
      }
    }
  },[]);
  return (
    <checkoutContext.Provider value={{isCheckOut,setIsCheckOut}}>
      <Basket.Provider value={{BasketData,setBasketData}}>
        <main className={styles.main}>
          <Header/>
        </main>
      </Basket.Provider>
    </checkoutContext.Provider>
  );
}
