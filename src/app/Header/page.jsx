// 'use client';
import FrontPage from './FrontPage/FrontPage';
import Header from './Header';
import {checkoutContext} from '../page';
import CheckOut from './Checkout/CheckOut';
import GetCheckOutInfo from '../GetCheckOutInfo';
export default function Page() {
    const {isCheckOut, setIsCheckOut} = GetCheckOutInfo();
    return (
        <main >
            <Header/>
            { isCheckOut ? <CheckOut/>:<FrontPage/>}
        </main>
    );
}