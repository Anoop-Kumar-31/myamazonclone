'use client';

import GetBasket from "@/app/GetBasket";
import { useRouter } from "next/router";

export default function ButtonMaker(props){
    const {basketData,setBasketData} = GetBasket();
    const router = useRouter();
    const clearBasket = ()=>{
        setBasketData([]);
        localStorage.clear();
    }
    const handleBuy = ()=>{
        if(user){
            router.push('/Payment');
        }else{
            router.push('/Login');
        }
    }
    return(
        <button onClick={props.function}>{props.string}</button>
    )
}