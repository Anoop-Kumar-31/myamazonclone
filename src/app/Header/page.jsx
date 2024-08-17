'use client';
import FrontPage from './FrontPage/FrontPage';
import Header from './Header';
import {Suspense, useContext} from 'react';
import {checkoutContext} from '../page';
import { Basket } from '../page';
import CheckOut from './Checkout/CheckOut';
export default async function Page() {
    const {isCheckOut} = checkoutContext();
    const {basketData, setBasketData} = Basket();
    const len=basketData.length;
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