import css from './Header.module.css'
import React from 'react';
import { Basket, checkoutContext } from '../page';
export default function BasketDiv(){
    const {basketData, setBasketData} = Basket();
    const {isCheckOut, setIsCheckOut} = checkoutContext();
    // const len=0; //sample value
    // const {basketData}= Basket!=undefined? Basket():{basketData:[]};
    // const {setIsCheckOut }= checkoutContext!=undefined? checkoutContext():{setIsCheckOut:()=>{}};
    const len=basketData.length;
    const changeElement = () =>{
        setIsCheckOut(true);
    }
    return(
        // <a>
        //     <div className={css.inner}>
            
        <a onClick={changeElement}>
            <div className={css.inner} onClick={(e)=>{e.preventDefault()}}>
                <p>{len}</p>
                <p>Cart</p>
            </div>
        </a>
    )
}