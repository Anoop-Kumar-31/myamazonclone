import css from './Header.module.css'
import {Basket} from '../page';
import { useContext } from 'react';
export default function BasketDiv(){
    const {BasketData, setBasketData} = useContext(Basket);
    const len=BasketData.length;
    return(
        <a href="/Checkout">
            <div className={css.inner} onClick={(e)=>{e.preventDefault()}}>
                <p>{len}</p>
                <p>Cart</p>
            </div>
        </a>
    )
}