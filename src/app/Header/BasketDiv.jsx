import css from './Header.module.css'
import { CgShoppingCart } from "react-icons/cg";
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
                <CgShoppingCart />
                <p className={css.counter}>{len}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cart</p>
            </div>
        </a>
    )
}