'use client';
import styles from "./page.module.css";
import Header from "./Header/page";
// import FrontPage from "./Header/FrontPage/page";
// import { useState, createContext, useEffect } from "react";

import {useContext} from "react";
import { mycheckoutContext,myBasket } from "./context";
import MyContextProvider from "./context";


export default function Home() {
  return (
    <React.StrictMode>
      <MyContextProvider>
        <main className={styles.main}>
          <Header/>
        </main>
      </MyContextProvider>
    </React.StrictMode>  
      
  );
}

export const checkoutContext= ()=> useContext(mycheckoutContext);
export const Basket= ()=>useContext(myBasket);