'use client';
import styles from "./page.module.css";
import Header from "./Header/page";
// import FrontPage from "./Header/FrontPage/page";
// import { useState, createContext, useEffect } from "react";
// import {} from "react";
import MyContextProvider from "./context";
// const mycheckoutContext = createContext();
// const myBasket = createContext();

export default function Home() {
  // const [isCheckOut, setIsCheckOut] = useState(false);
  // const [BasketData, setBasketData] = useState([]);
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const data = localStorage.getItem("BasketData");
  //     if (data) {
  //       setBasketData(JSON.parse(data));
  //     }
  //   }
  // },[]);
  return (
      <MyContextProvider>
          <main className={styles.main}>
            <Header/>
          </main>
      </MyContextProvider>
  );
}

// export const checkoutContext= ()=>useContext(mycheckoutContext);
// export const Basket= ()=>useContext(myBasket);