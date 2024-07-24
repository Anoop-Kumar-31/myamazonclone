import FrontPage from './FrontPage/FrontPage';
import NavBar from './NavBar/NavBar';
import Header from './Header';
export default function Page() {
    return (
        <main >
            <Header/>
            <NavBar/>
            <FrontPage/>
        </main>
    );
}