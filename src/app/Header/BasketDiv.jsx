import css from './Header.module.css'
import {Basket} from '../page';
import { useContext } from 'react';
export default function BasketDiv(){
    const {BasketData, setBasketData} = useContext(Basket);
    const len=BasketData.length;
    return(
        <a href="">
            <div className={css.inner}>
                <p>{len}</p>
                <p>Cart</p>
            </div>
        </a>
    )
}