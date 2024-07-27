import css from './Header.module.css'
import { Basket} from '../page';
import { useContext } from 'react';
import { checkoutContext } from '../page';
export default function BasketDiv(){
    const {BasketData, setBasketData} = useContext(Basket);
    const {isCheckOut, setIsCheckOut} = useContext(checkoutContext);
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