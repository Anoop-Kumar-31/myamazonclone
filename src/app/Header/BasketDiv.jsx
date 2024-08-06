import css from './Header.module.css'
// import { Basket} from '../page';
import { useContext } from 'react';
import { Basket, checkoutContext } from '../context';
export default function BasketDiv(){
    const {BasketData, setBasketData} = Basket();
    const {isCheckOut, setIsCheckOut} = checkoutContext();
    const len=BasketData.length;
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