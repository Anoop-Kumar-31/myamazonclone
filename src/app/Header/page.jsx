'use client';
import FrontPage from './FrontPage/FrontPage';
import Header from './Header';
import {Suspense, useContext} from 'react';
import checkoutContext from '../context';
import CheckOut from './Checkout/CheckOut';
const {isCheckOut} = useContext(checkoutContext);
export default function Page() {
    return (
        <main >
        <Suspense fallback={<div>Loading...</div>}>
            <Header/>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
            { isCheckOut ? <CheckOut/>:<FrontPage/>}
            {/* <FrontPage/> */}
        </Suspense>
        </main>
    );
}