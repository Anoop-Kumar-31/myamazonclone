'use client';
import FrontPage from './FrontPage/FrontPage';
import Header from './Header';
import {Suspense, useContext} from 'react';
import {checkoutContext, mycheckoutContext} from '../page';
import CheckOut from './Checkout/CheckOut';
export default function Page() {
    const {isCheckOut} = checkoutContext();
    // const {isCheckOut} = useContext(mycheckoutContext);
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