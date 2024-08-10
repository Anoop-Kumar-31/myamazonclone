import FrontPage from './FrontPage/FrontPage';
import Header from './Header';
import {Suspense} from 'react';
import { usecheckoutContext } from '../context';
import CheckOut from './Checkout/CheckOut';
export default function Page() {
    const {isCheckOut} = usecheckoutContext();
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