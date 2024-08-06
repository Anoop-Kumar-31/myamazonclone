"use client";
import { React, useState } from "react";
import css from "./Login.module.css";
import { auth } from "./firebasesection";
import { useRouter } from 'next/navigation';
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";
export default function Login() {
    const [details, setDetails] = useState({ email: "", password: "" });
    const router = useRouter();
    
    const signin = async (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, details.email, details.password).then((userCredential) => {
            if (userCredential) {
                router.push('/');
            }
        }).catch(error=>{
            alert(error.message);
        });
    };
  
    const register = async (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, details.email, details.password).then((userCredential) => {
            if(userCredential) {
                router.push('/');
            }
        }).catch(error => {
            alert(error.message);
        });

    };
  

    return (
        <div className={css.all}>
            <div className={css.main}>
                <img
                    src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png"
                    alt=""
                />
                <div>
                    <form>
                        <h2 style={{ fontWeight: "normal", fontSize: "28px" }}>Sign in</h2>
                        <label>
                            <span>Email</span>
                            <input
                                type="email"
                                onChange={(e) =>
                                    setDetails({ ...details, email: e.target.value })
                                }
                            />
                        </label>
                        <label>
                            <span>Password</span>
                            <input
                                type="password"
                                onChange={(e) =>
                                    setDetails({ ...details, password: e.target.value })
                                }
                            />
                        </label>
                        <input
                            className={css.submit}
                            type="submit"
                            onClick={signin}
                        ></input>
                    </form>
                    <p>By continuing, you agree to Amazon's <a href="/">Conditions of Use</a> and <a href="/">Privacy Notice</a>.</p>
                    <p style={{ position: "absolute", transform: "translate(110px,-30px)", backgroundColor: "white", padding: "0 8px", color: "rgb(112, 112, 112)",}}>New to Amazon?</p>
                    <hr />
                    <button className={css.create} onClick={register}>
                        Create your Amazon account
                    </button>
                </div>
            </div>
            <div className={css.footer}>
                <ol>
                    <li>Conditions of Use</li>
                    <li>Privacy Notice</li>
                    <li>Help</li>
                </ol>
                <span style={{ marginTop: "20px" }}>
                    © 1996-2024, Amazon.com, Inc. or its affiliates
                </span>
            </div>
        </div>
    );
}
