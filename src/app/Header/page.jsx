'use client';
import FrontPage from './FrontPage/FrontPage';
import Header from './Header';
import {checkoutContext} from '../page';
import CheckOut from './Checkout/CheckOut';
import Footer from "./Footer";
export default function Page() {
    const {isCheckOut} = checkoutContext()!=undefined?checkoutContext():{isCheckOut:false};
    return (
        <main >
            <Header/>
            { isCheckOut ? <CheckOut/>:<FrontPage/>}
            <Footer/>
        </main>
    );
}