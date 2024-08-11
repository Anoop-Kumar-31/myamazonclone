
import css from './Cards.module.css'
import { useContext } from 'react';
import { Basket } from '../../../context';
export default function Card({image,name,cost}) {
    // const {BasketData, setBasketData} = Basket();
    // const addtocart = () =>{
    //     setBasketData([...BasketData,{image,name,cost}]);
    //     window.localStorage.setItem('BasketData',JSON.stringify([...BasketData,{image,name,cost}]));
    // }
    return(
        <div className={css.card}>
            <img src={image} alt='productimage'></img>
            <h3>{name}</h3>
            <h4>{'₹'+cost}</h4>
            {/* <button onClick={addtocart}>Add to Cart</button> */}
            <button>Add to Cart</button>
        </div>
    )
}