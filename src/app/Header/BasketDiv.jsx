import css from './Header.module.css'
// import { Basket} from '../page';
import { useContext } from 'react';
import { Basket, checkoutContext } from '../page';
export default function BasketDiv(){
    // const {BasketData, setBasketData} = Basket();
    // const {isCheckOut, setIsCheckOut} = checkoutContext();
    // const len=BasketData.length;
    const len=0; //sample value
    // const changeElement = () =>{
    //     setIsCheckOut(true);
    // }
    return(
        // <a onClick={changeElement}>
        <a>
            {/* <div className={css.inner} onClick={(e)=>{e.preventDefault()}}> */}
            <div className={css.inner}>
                <p>{len}</p>
                <p>Cart</p>
            </div>
        </a>
    )
}