'use client';
import css from './Cards.module.css'
import { Basket } from '../../../page';
export default function Card({image,name,cost}) {
    const {basketData, setBasketData} = Basket!=undefined?Basket():{BasketData:[], setBasketData:()=>{}};
    const addtocart = () =>{
        setBasketData([...basketData,{image,name,cost}]);
        window.localStorage.setItem('BasketData',JSON.stringify([...basketData,{image,name,cost}]));
    }
    return(
        <div className={css.card}>
            <img src={image} alt='productimage'></img>
            <h3>{name}</h3>
            <h4>{'₹'+cost}</h4>
            <button onClick={addtocart}>Add to Cart</button>
            {/* <button>Add to Cart</button> */}
        </div>
    )
}