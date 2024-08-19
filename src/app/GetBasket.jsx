'use client';
import Basket from './page';
export default function GetBasket(){
    try{
        const {basketData, setBasketData}= Basket();
        return {basketData,setBasketData};
    }catch(e){
        return {basketData: [], setBasketData: () => {}}
    }
}