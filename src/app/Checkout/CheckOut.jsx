import {Basket} from '../page'
import { useContext } from 'react';
export default function CheckOut(){
    const {BasketData, setBasketData} = useContext(Basket);
    console.log(Basket);
    return(
        <div>
            <h1>Checkout</h1>
            {/* {BasketData.map((item)=>{
                return(
                    <div>
                        <img src={item.image} alt='productimage'></img>
                        <h3>{item.name}</h3>
                        <h4>{item.cost}</h4>
                    </div>
                )
            })} */}
        </div>
    )
};