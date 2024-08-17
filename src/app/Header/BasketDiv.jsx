import css from './Header.module.css'
import React from 'react';
import { Basket, checkoutContext } from '../page';
export default function BasketDiv(){
    const {basketData}= Basket!=undefined? Basket():{basketData:[]};
    const {setIsCheckOut }= checkoutContext!=undefined? checkoutContext():{setIsCheckOut:()=>{}};
    const len=basketData?basketData.length:0
    const changeElement = () =>{
        setIsCheckOut(true);
    }
    return(
        <a onClick={changeElement}>
            <div className={css.inner} onClick={(e)=>{e.preventDefault()}}>
                <p>{len}</p>
                <p>Cart</p>
            </div>
        </a>
    )
}