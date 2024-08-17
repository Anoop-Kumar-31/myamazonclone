'use client';
import styles from "./page.module.css";
import Header from "./Header/page";

import MyContextProvider from "./MyContextProvider";
import {useContext} from "react";
import { mycheckoutContext,myBasket } from "./MyContextProvider";


export default function Home() {
  return (
    <main className={styles.main}>
      <MyContextProvider>
          <Header/>
      </MyContextProvider>
    </main>
  );
}

export const checkoutContext= ()=> useContext(mycheckoutContext);
export const Basket= ()=>useContext(myBasket);