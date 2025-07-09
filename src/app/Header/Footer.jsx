import css from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={css.footer}>
            <div className={css.backToTop}>
                <a href="#top">Back to top</a>
            </div>
            <div className={css.footerMain}>
                <div className={css.footerColumn}>
                    <h3>Get to Know Us</h3>
                    <ul>
                        <li>About Amazon</li>
                        <li>Careers</li>
                        <li>Press Releases</li>
                        <li>Amazon Science</li>
                    </ul>
                </div>
                <div className={css.footerColumn}>
                    <h3>Connect with Us</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>
                <div className={css.footerColumn}>
                    <h3>Make Money with Us</h3>
                    <ul>
                        <li>Sell on Amazon</li>
                        <li>Sell under Amazon Accelerator</li>
                        <li>Protect and Build Your Brand</li>
                        <li>Amazon Global Selling</li>
                        <li>Supply to Amazon</li>
                        <li>Become an Affiliate</li>
                        <li>Fulfilment by Amazon</li>
                        <li>Advertise Your Products</li>
                        <li>Amazon Pay on Merchants</li>
                    </ul>
                </div>
                <div className={css.footerColumn}>
                    <h3>Let Us Help You</h3>
                    <ul>
                        <li>Your Account</li>
                        <li>Returns Centre</li>
                        <li>Recalls and Product Safety Alerts</li>
                        <li>100% Purchase Protection</li>
                        <li>Amazon App Download</li>
                        <li>Help</li>
                    </ul>
                </div>
            </div>
            <div className={css.footerLogoRow}>
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo" className={css.footerLogo} />
                <div className={css.footerSelectors}>
                    <button className={css.selectorBtn}><span role="img" aria-label="globe">🌐</span> English</button>
                    <button className={css.selectorBtn}><span role="img" aria-label="flag">🇮🇳</span> India</button>
                </div>
            </div>
            <div className={css.footerLinksRow}>
                <div className={css.footerLinksCol}>
                    <span><b>AbeBooks</b><br/>Books, art<br/>& collectibles</span>
                    <span><b>Shopbop</b><br/>Designer<br/>Fashion Brands</span>
                </div>
                <div className={css.footerLinksCol}>
                    <span><b>Amazon Web Services</b><br/>Scalable Cloud<br/>Computing Services</span>
                    <span><b>Amazon Business</b><br/>Everything For<br/>Your Business</span>
                </div>
                <div className={css.footerLinksCol}>
                    <span><b>Audible</b><br/>Download<br/>Audio Books</span>
                    <span><b>Prime Now</b><br/>2-Hour Delivery<br/>on Everyday Items</span>
                </div>
                <div className={css.footerLinksCol}>
                    <span><b>IMDb</b><br/>Movies, TV<br/>& Celebrities</span>
                    <span><b>Amazon Prime Music</b><br/>100 million songs, ad-free<br/>Over 15 million podcast episodes</span>
                </div>
            </div>
            <div className={css.copyright}>
                <p>&copy; {new Date().getFullYear()} Amazon Clone. All rights reserved.</p>
            </div>
        </footer>
    );
}
