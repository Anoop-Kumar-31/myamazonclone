'use client';
import { IoMenuSharp, IoClose } from "react-icons/io5";


import css from "./NavBar.module.css";
import { useState } from "react";
import Link from "next/link";
export default function NavBar() {
    const list=[{"Digital Content":["Amazon Music","Kindle E-readers & Books","Amazon Appstore"]},{"Shop By Department":["Electronics","Computers","Smart Home","Arts & Crafts"]},{"Programs & Features":["Gift Cards","Amazon Live","Amazon Explore"]},{"Help & Settings":["Your Account","Customer Service","Sign In"]}];
    const [ham,setHam] = useState(false);
    return (
        <>
            {ham && 
                <div style={{position:"fixed",top:"0",backgroundColor:'rgba(0, 0, 0, 0.5)',width:'98.9vw', height:'100vh',zIndex:'999',}}>
                    <div className={css.ham}>
                        <div>
                            <h1>Hello, User</h1><IoClose style={{transform:'scale(2.5) translate(25px,4.5px)',filter:'drop-shadow(0 0 1px black)'}} onClick={()=>{setHam(false)}}/>
                        </div>
                        <section>
                            {list.map((obj,index)=>{
                                return(
                                    <div key={index}>
                                        {Object.keys(obj).map((key,index)=>{
                                            return(
                                                <div key={index} className={css.head}>
                                                    <h4>{key}</h4>
                                                    <ul className="ul">
                                                        {obj[key].map((item,index)=>{
                                                            return(
                                                                item=="Sign In"?<Link className="Link" href="/Login"><li key={index}>{item}</li></Link>:<li key={index}>{item}</li>
                                                            )
                                                        })}
                                                    </ul>
                                                    <hr/>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </section>
                    </div>
                </div>
            }
            <nav className={css.nav}>
                <ul className={css.ul}>
                    <li onClick={()=>{setHam(true)}}><IoMenuSharp style={{transform:'scale(1.4) translate(-1px,1.5px)'}}/> All</li>
                    <li>Amazon miniTV</li>
                    <li>Sell</li>
                    <li>Gift Cards</li>
                    <li>Gift Ideas</li>
                    <li>Amazon Pay</li>
                    <li>Buy Again</li>
                    <li>Browsing History</li>
                    <li>Customer Service</li>
                </ul>
            </nav>
        </>
    )
}