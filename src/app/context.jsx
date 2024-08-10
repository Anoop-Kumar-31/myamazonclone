'use client';
import { useState, createContext, useEffect, useContext } from "react";

const mycheckoutContext = createContext(null);
const myBasket = createContext(null);

const MyContextProvider = ({children})=>{
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
        <mycheckoutContext.Provider value={{isCheckOut,setIsCheckOut}}>
        <myBasket.Provider value={{BasketData,setBasketData}}>
            {children}
        </myBasket.Provider>
        </mycheckoutContext.Provider>
    );
}
const checkoutContext= ()=>useContext(mycheckoutContext);
const Basket= ()=>useContext(myBasket);

//export checkoutContext, Basket, MyContextProvider
export default {checkoutContext, Basket, MyContextProvider};
