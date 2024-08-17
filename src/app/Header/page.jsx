'use client';
import FrontPage from './FrontPage/FrontPage';
import Header from './Header';
import {Suspense} from 'react';
import {checkoutContext} from '../page';
import { Basket } from '../page';
import CheckOut from './Checkout/CheckOut';
export default async function Page() {
    const {isCheckOut} = checkoutContext();
    const {basketData, setBasketData} = await Basket==undefined?{basketData:["amit"], setBasketData:()=>{}}:Basket();
    const len=basketData?basketData.length:0;
    console.log(len);
    return (
        <main >
        <Suspense fallback={<div>Loading...</div>}>
            <Header/>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
            { isCheckOut ? <CheckOut/>:<FrontPage/>}
        </Suspense>
        </main>
    );
}