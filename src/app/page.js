'use client';
import styles from "./page.module.css";
import Header from "./Header/page";

import {useContext} from "react";
import { mycheckoutContext,myBasket } from "./context";
import MyContextProvider from "./context";


export default function Home() {
  return (
      <MyContextProvider>
        <main className={styles.main}>
          <Header/>
        </main>
      </MyContextProvider>
  );
}
console.log(process.env.apiKey);

export const checkoutContext= ()=> useContext(mycheckoutContext);
export const Basket= ()=>useContext(myBasket);