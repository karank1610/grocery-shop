import { FaCcVisa,FaCcPaypal,FaCcDiscover,FaCcAmex,FaCcMastercard } from "react-icons/fa";

const Footer = () => {
    return(
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