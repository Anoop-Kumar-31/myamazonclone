import FrontPage from './FrontPage/FrontPage';
import NavBar from './NavBar/NavBar';
import Header from './Header';
import {useContext} from 'react';
import { checkoutContext } from '../page';
import CheckOut from './Checkout/CheckOut';
export default function Page() {
    const {isCheckOut} = useContext(checkoutContext);
    return (
        <main >
            <Header/>
            { isCheckOut ? <CheckOut/>:<FrontPage/>}
        </main>
    );
}