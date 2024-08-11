'use client';
import { useState, createContext, useEffect } from "react";

export const mycheckoutContext = createContext({});
export const myBasket = createContext({});
export default function MyContextProvider({children}){
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
        <myBasket.Provider value={{BasketData,setBasketData}}>
        <mycheckoutContext.Provider value={{isCheckOut,setIsCheckOut}}>
            {children}
        </mycheckoutContext.Provider>
        </myBasket.Provider>
    );
}


// export const checkoutContext= ()=> useContext(mycheckoutContext);
// export const Basket= ()=>useContext(myBasket);