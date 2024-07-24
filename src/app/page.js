'use client';
import styles from "./page.module.css";
import Header from "./Header/page";
// import FrontPage from "./Header/FrontPage/page";
import { createContext } from "react";
import { useState } from "react";
export const Basket = createContext();
export default function Home() {
  const [BasketData, setBasketData] = useState([]);
  return (
    <Basket.Provider value={{BasketData,setBasketData}}>
      <main className={styles.main}>
        <Header/>
      </main>
    </Basket.Provider>
  );
}
