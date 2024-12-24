'use client';
import css from './CheckOut.module.css';
import { useRouter } from 'next/navigation'
import {Basket} from '../../page';
import {auth} from '../../Login/firebasesection';
export default function CheckOut(){
    const {basketData,setBasketData} = Basket!=undefined?Basket():{basketData:[],setBasketData:()=>{}};
    const router = useRouter();
    const user = auth.currentUser;
    console.log(basketData.length);
    const total=basketData.reduce((acc,curr)=>acc+Number(curr.cost),0);
    const percentage = Math.round((total /499)*100>100?100:(total /499)*100);
    // const BasketData = []; //sample value
    // const percentage = 50; //sample value
    const clearBasket = ()=>{
        setBasketData([]);
        localStorage.clear();
    }
    function addPathPrefix(path, prefix) {
        if (typeof path !== 'string') {
            console.error('Path is not a string:', path);
            return path;
        }
        if (path.startsWith(prefix)) {
            return path;
        }
        return prefix + path;
    }
    const handleBuy = () => {
        if (user && total > 0) {
            const encodedBasketData = encodeURIComponent(JSON.stringify(basketData));
            router.push(`/Header/Payment?total=${total}&basketData=${encodedBasketData}`);
        } else if (user && total == 0) {
            alert('Add items to the basket to proceed');
        } else {
            router.push('/Login');
        }
    };
    return(
        <div className={css.checkOut}>
            {basketData.length > 0 ? (
                <section className={css.itemsSection}>
                    <h1>Checkout</h1>
                    <p>price</p>
                    {basketData.map((item)=>{
                        return(
                            <div className={css.item}>
                                <div>
                                    <img src={item.image} alt='productimage'></img>
                                    <div>
                                        <h3>{item.name}</h3>
                                        
                                        <p>In stock</p>
                                        <p>Eligible for FREE Shipping</p>

                                        <p><b>Quantity:</b> Pack of 1</p>
                                    </div>
                                </div>
                                <div>
                                    <h4>{'₹'+item.cost}</h4>
                                </div>
                            </div>
                        )
                    })}
                </section>
                ):(
                    <section className={css.emptyCart}>
                        <img src='https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg'/>
                        <div>
                            <h1>Your Amazon Cart is empty</h1>
                            <p>Your shopping cart is waiting. Give it purpose to fill it with groceries, clothing, household supplies, electronics and more.</p>
                            {user?"":<div>
                                <a href='/Login'><button > Sign in to your account</button></a>
                                <a href="/Login"><button href='/Login'> Sign up now</button></a>
                            </div>}
                        </div>
                    </section>
                )
            }
            <aside className={css.subTotalSection}>
                <div>
                    <div className={css.progressBar}>
                        <div className={css.progress} style={{width:`${percentage}%`}}></div>
                    </div>
                    <p style={{fontSize:'14px'}}>{percentage==100?'₹499':`${percentage}%`}</p>
                </div>
                
                {percentage==100?<p>Eligible for Free Delivery.</p>:<p>₹{499-total} more needed for free Delivery.</p>}

                <h3>Subtotal &#40;{basketData.length}&#41;: <b>{"₹"+total}</b></h3>
                <button onClick={handleBuy}>Proceed to Buy</button>
                <button onClick={clearBasket}>Clear Basket</button>
            </aside>
        </div>
    )
};