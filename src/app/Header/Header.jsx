'use client';
import css from "./Header.module.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import { auth } from "../Login/firebasesection";
import BasketDiv from './BasketDiv'
export default function Header() {
    const [user,setUser] = useState(false);
    const logout=()=>{
        if(user){
            auth.signOut();
            alert("You have been signed out");
            setUser(false);
        }
    }
    useEffect(()=>{
        auth.onAuthStateChanged(authUser=>{
            console.log("user is >> ",!authUser);
            try{
                if(!authUser["emailVerified"]){
                    setUser(true);
                }
            }catch(e){
                setUser(false);
            }
        },[]);
    });
    return(
        <header className={css.header}>
            <div className={css.header_logo}>
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo" />
            </div>
            <div className={css.outer}>
                <HiOutlineLocationMarker style={{margin:'16px 4px 0 0',transform:'scale(1.3)'}}/>
                <div className={css.location}>
                    <h4>Delivery to</h4>
                    <p>India</p>
                </div>
            </div>
            <SearchBar/>
            <div className={css.info}>
                <a href="">
                    <div className={css.inner}>
                        <p>EN</p>
                    </div>
                </a>
                <a href={user?"/":"/Login"} onClick={logout}>
                    <div className={css.inner}>
                        <h4>Account</h4>
                        <p>{user?"SignOut":"SignIn"}</p>
                    </div>
                </a>
                <a href="">
                    <div className={css.inner}>
                        <h4>Returns</h4>
                        <p>&amp; Orders</p>
                    </div>
                </a>
                <BasketDiv/>
            </div>
        </header>
    )
}