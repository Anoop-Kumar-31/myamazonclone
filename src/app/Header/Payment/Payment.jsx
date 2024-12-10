import css from './Payment.module.css';
import { PiLockSimpleFill } from "react-icons/pi";
import { FaPlus } from "react-icons/fa";
import Image from 'next/image';
export default function Payment(){
    const netBankingList = ["Airtel Payments Bank", "Axis Bank","HDFC Bank","ICICI Bank","IDBI Bank","IndusInd Bank","Kotak Mahindra Bank","Punjab National Bank","State Bank of India","Union Bank of India","Yes Bank","Allahabad Bank","Andhra Bank","Bank of Baroda","Bank of India","Bank of Maharashtra","Canara Bank","Central Bank of India","Corporation Bank","Dena Bank","Indian Bank","Indian Overseas Bank","Oriental Bank of Commerce","Punjab & Sind Bank","Syndicate Bank","UCO Bank","United Bank of India","Vijaya Bank","Bandhan Bank","Catholic Syrian Bank","City Union Bank","DCB Bank","Dhanlaxmi Bank","Federal Bank","IDFC First Bank","Jammu and Kashmir Bank","Karur Vysya Bank","Karnataka Bank","Karur Vysya Bank","Lakshmi Vilas Bank","Nainital Bank","RBL Bank","South Indian Bank","Tamilnad Mercantile Bank","Ujjivan Small Finance Bank","Equitas Small Finance Bank","AU Small Finance Bank","Fincare Small Finance Bank","Suryoday Small Finance Bank","Utkarsh Small Finance Bank"]
    return(
        <main className={css.Payment}>
            <header>
                <div className={css.headerDiv}>
                    <Image src="/images/amazon_logo.png" width={105} height={31} className={css.logo}></Image>
                    <h1>Checkout</h1>
                    <div className={css.lock}><PiLockSimpleFill /></div>
                </div>
            </header>
            <section className={css.details}>
                <div>
                <div className={css.detailsLeft}>
                    <div className={css.address}>
                        <h3>1 &nbsp;&nbsp;Select a delivery address</h3>
                        <div className={css.addressList}>
                            <div className={css.addressListItems}>
                                <div>
                                    <h3>Your addresses</h3>
                                    <hr/>
                                    <address>
                                        <input type="radio" name='AddressOption' id="address1"/>
                                        <label htmlFor="card"> address 1</label>
                                    </address>
                                    <address>
                                        <input type="radio" name='AddressOption' id="address2"/>
                                        <label htmlFor="card"> address 2</label>
                                    </address>
                                    <address>
                                        <input type="radio" name='AddressOption' id="address3"/>
                                        <label htmlFor="card"> address 3</label>
                                    </address>
                                </div>
                                <div>
                                    <button>Use this address</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className={css.address}>
                        <h3>2 &nbsp;&nbsp;Payment Method</h3>
                        <div className={css.addressList}>
                            <div className={css.addressListItems}>
                                <div>
                                    <div>
                                        <h3 htmlFor="card">Credit/Debit Card</h3>
                                        <hr/>
                                        <address className={css.paymentMethod}>
                                            <input type="radio" name="payment" id="card" />
                                            <label htmlFor="card">
                                                <b>Cards 1</b> ending in 1234<br/>
                                                &nbsp;&nbsp;&nbsp;Enter CVV(?): <input type="text" className= {css.CardInput}/>
                                                <section style={{display:"flex",margin:"10px 0 10px 25px", alignItems:"center"}}>
                                                    <FaPlus style={{transform:"scale(1.5) translate(-5px,0)", color:'grey',marginRight:"10px"}}/> <img src="https://m.media-amazon.com/images/G/01/payments-portal/r1/add-payment-method/card-logo-compact._CB478583243_.gif" alt='icon' /> <a className={css.links} href=""> Enter card details</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p>Amazon accepts all major credit and cards</p>
                                                </section>
                                            </label>
                                        </address>
                                    </div>
                                    <div>
                                        <h3>Another payment method</h3>
                                        <hr/>
                                        <address className={css.paymentMethod}>
                                            <input type="radio" name="payment" id="netBanking" />
                                            <label htmlFor="netBanking">Credit or debit card<br/>
                                                <div style={{display:'flex',marginTop:"10px"}}>
                                                    <img src="https://www.takeonedigitalnetwork.com/wp-content/uploads/2023/05/ANI-20230510053652-thumbnail-320x180-70.jpg" alt="" />
                                                    <img src="https://www.takeonedigitalnetwork.com/wp-content/uploads/2023/05/ANI-20230510053652-thumbnail-320x180-70.jpg" alt="" />
                                                    <img src="https://www.takeonedigitalnetwork.com/wp-content/uploads/2023/05/ANI-20230510053652-thumbnail-320x180-70.jpg" alt="" />
                                                    <img src="https://www.takeonedigitalnetwork.com/wp-content/uploads/2023/05/ANI-20230510053652-thumbnail-320x180-70.jpg" alt="" />
                                                    <img src="https://www.takeonedigitalnetwork.com/wp-content/uploads/2023/05/ANI-20230510053652-thumbnail-320x180-70.jpg" alt="" />
                                                </div>
                                            </label>
                                        </address>
                                        
                                        <address className={css.paymentMethod}>
                                            <input type="radio" name="payment" />
                                            Net Banking <br />
                                            <select name="banks" id="banks">
                                                {
                                                netBankingList.map((bank, index) => {
                                                    return <option key={index} value={bank}>{bank}</option>
                                                })
                                                }
                                            </select>
                                            {/*create custon select*/ }
                                        </address>
                                        
                                        <address className={css.paymentMethod}>
                                            <input type="radio" name="payment" id="upi" />
                                            <label htmlFor="upi">Other UPI Apps</label>
                                        </address>
                                        <address className={css.paymentMethod}>
                                            <input type="radio" name="payment" id="cod" />
                                            <label htmlFor="cod">Cash on Delivery</label>
                                        </address>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={css.orderSummary}>

                </div>
                </div>
            </section>
        </main>
    )
}