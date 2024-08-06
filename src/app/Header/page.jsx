import FrontPage from './FrontPage/FrontPage';
import NavBar from './NavBar/NavBar';
import Header from './Header';
import {Suspense, useContext} from 'react';
import { checkoutContext } from '../page';
import CheckOut from './Checkout/CheckOut';
export default function Page() {
    const {isCheckOut} = useContext(checkoutContext);
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