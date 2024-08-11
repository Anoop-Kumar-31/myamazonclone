import css from './Header.module.css'
// import { Basket} from '../page';
import { Basket, checkoutContext } from '../page';
export default function BasketDiv(){
    const {BasketData, setBasketData} = Basket();
    const {isCheckOut, setIsCheckOut} = checkoutContext();
    try{const len=BasketData.length;}
    catch(e){
        const len=0;
    }
    // const len=0; //sample value
    const changeElement = () =>{
        setIsCheckOut(true);
    }
    return(
        <a onClick={changeElement}>
        {/* <a> */}
            <div className={css.inner} onClick={(e)=>{e.preventDefault()}}>
            {/* <div className={css.inner}> */}
                <p>{len}</p>
                <p>Cart</p>
            </div>
        </a>
    )
}