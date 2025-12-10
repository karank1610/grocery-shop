import { FaCcVisa, FaCcPaypal, FaCcDiscover, FaCcAmex, FaCcMastercard } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
    return (
        <>
            <div className="footer-main">
                <div className="footer-top">
                    <div className="container">
                        <div className="top-inner">
                            <div className="services-main">
                                <div className="services-child">
                                    <div className="services-icon">
                                        <img src="assets/img/online-support.png" alt="services" />
                                    </div>
                                    <div className="services-content">
                                        <span><strong>24/7 Online Support</strong> <br />Trained staffs are ready to help 24/7</span>
                                    </div>
                                </div>
                                <div className="services-child">
                                    <div className="services-icon">
                                        <img src="assets/img/money-back.png" alt="services" />
                                    </div>
                                    <div className="services-content">
                                        <span><strong>Money Back Guarantee</strong> <br />100% money back guarantee</span>
                                    </div>
                                </div>
                                <div className="services-child">
                                    <div className="services-icon">
                                        <img src="assets/img/free-shipping.png" alt="services" />
                                    </div>
                                    <div className="services-content">
                                        <span><strong>Free Shipping & Return</strong> <br />Free shipping on all orders over $100</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-center">
                    <div className="container">
                        <div className="center-inner">
                            <div className="footer-column-1">
                                <div className="info-main">
                                    <div className="column-heading">contact</div>
                                    <div className="info">
                                        <ul>
                                            <li>
                                                <MdLocationOn className="address-icon" />
                                                <span className="label">Address</span>
                                                <span className="details">
                                                    Etrend Grocery <br />
                                                    123 Street, City, London <br />
                                                    United States
                                                </span>
                                            </li>
                                            <li>
                                                <MdEmail className="mail-icon" />
                                                <span className="label">Mail us</span>
                                                <a href="">sales@domain.com</a>
                                            </li>
                                            <li>
                                                <MdPhone className="phone-icon" />
                                                <span className="label">Phone</span>
                                                <a href="">(123) 456 7890</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-column">
                                <div class="column-heading">Products</div>
                                <ul>
                                    <li><a href="#">Prices drop</a></li>
                                    <li><a href="#">New products</a></li>
                                    <li><a href="#">Best sales</a></li>
                                    <li><a href="#">Sitemap</a></li>
                                    <li><a href="#">Stores</a></li>
                                </ul>
                            </div>
                            <div className="footer-column">
                                <div class="column-heading">Our company</div>
                                <ul>
                                    <li><a href="#">Delivery</a></li>
                                    <li><a href="#">Legal Notice</a></li>
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Secure payment</a></li>
                                    <li><a href="#">Contact us</a></li>
                                </ul>
                            </div>
                            <div className="footer-column-2">
                                <div class="column-heading">subscribe</div>
                                <p>Subscribe to our newsletter to get exclusive discounts and new theme launches right in your inbox.</p>
                                <input type="email" name="email" id="" className="newsletter" placeholder="Your email address"/>
                                <input type="submit" value="Subscribe" className="subscribe-btn"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="bottom-inner">
                            <div className="copyright">
                                <a href="">© 2025 - Ecommerce software by PrestaShop™</a>
                            </div>
                            <div className="payment">
                                <ul className="payment-icon">
                                    <li><a href=""><FaCcVisa /></a></li>
                                    <li><a href=""><FaCcPaypal /></a></li>
                                    <li><a href=""><FaCcDiscover /></a></li>
                                    <li><a href=""><FaCcAmex /></a></li>
                                    <li><a href=""><FaCcMastercard /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;