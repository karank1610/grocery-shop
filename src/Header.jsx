import React from "react";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp, MdKeyboardArrowRight } from "react-icons/md";
import { LiaDollarSignSolid } from "react-icons/lia";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";

const Header = () => {
    return (
        <>
            <div className="header-main">
                <div className="header-top">
                    <div className="container">
                        <div className="top-content">
                            <div className="top-left-content">
                                <div className="lang">
                                    <span>eng</span>
                                    <MdOutlineKeyboardArrowDown className="down-arrow-icon" />
                                </div>
                                <div className="curr">
                                    <span>usd</span>
                                    <LiaDollarSignSolid className="dollar-icon" />
                                    <MdOutlineKeyboardArrowDown className="down-arrow-icon" />
                                </div>
                            </div>
                            <div className="top-right-content">
                                <div className="sign-in-content">
                                    <FaSignInAlt className="sign-in-icon" />
                                    <span>sign in</span>
                                </div>
                                <div className="new-acc-content">
                                    <FaUserPlus className="new-acc-icon" />
                                    <span>create an account</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-center">
                    <div className="container">
                        <div className="inner-header-center">
                            <div className="center-left-content">
                                <div className="header-logo">
                                    <img src="assets/img/grocery-logo.jpg" alt="logo" />
                                </div>
                            </div>
                            <div className="center-right-content">
                                <div className="search-box">
                                    <input type="text" placeholder="search our catalog" />
                                    <IoSearch className="search-icon" />
                                </div>
                                <div className="cart">
                                    <GiShoppingBag className="shopping-cart-icon" />
                                    <div className="cart-info">
                                        <span>Item(s)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom">
                    <div className="container">
                        <div className="inner-header-bottom">
                            <ul className="nav-menu">
                                <li><a href=""><span>home</span></a></li>
                                <li>
                                    <a href="">
                                        <span>shop</span>
                                        <MdOutlineKeyboardArrowDown className="down-arrow-icon" />
                                        <MdOutlineKeyboardArrowUp className="up-arrow-icon" />
                                    </a>
                                    <ul className="shop-sub-menu">
                                        <li>
                                            <a href="">
                                                <span>fashion</span>
                                                <MdOutlineKeyboardArrowDown className="down-arrow-icon" />
                                                <MdKeyboardArrowRight className="right-arrow-icon" />
                                            </a>
                                            <ul className="fashion-sub-menu">
                                                <li><a href=""><span>men</span></a></li>
                                                <li><a href=""><span>women</span></a></li>
                                                <li><a href=""><span>kids</span></a></li>
                                                <li><a href=""><span>accessories</span></a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span>jewellery</span>
                                                <MdOutlineKeyboardArrowDown className="down-arrow-icon" />
                                                <MdKeyboardArrowRight className="right-arrow-icon" />
                                            </a>
                                            <ul className="jewellery-sub-menu">
                                                <li><a href=""><span>rings</span></a></li>
                                                <li><a href=""><span>bracelets</span></a></li>
                                                <li><a href=""><span>necklaces</span></a></li>
                                                <li><a href=""><span>wedding bands</span></a></li>
                                            </ul>
                                        </li>
                                        <li><a href="">
                                            <span>furniture</span>
                                            <MdOutlineKeyboardArrowDown className="down-arrow-icon" />
                                            <MdKeyboardArrowRight className="right-arrow-icon" />
                                        </a>
                                            <ul className="furniture-sub-menu">
                                                <li><a href=""><span>living room</span></a></li>
                                                <li><a href=""><span>kitchen</span></a></li>
                                                <li><a href=""><span>office</span></a></li>
                                                <li><a href=""><span>home decor</span></a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span>autoparts</span>
                                                <MdOutlineKeyboardArrowDown className="down-arrow-icon" />
                                                <MdKeyboardArrowRight className="right-arrow-icon" />
                                            </a>
                                            <ul className="autoparts-sub-menu">
                                                <li><a href=""><span>emgine parts</span></a></li>
                                                <li><a href=""><span>exhaust parts</span></a></li>
                                                <li><a href=""><span>brake parts</span></a></li>
                                                <li><a href=""><span>body parts</span></a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="">
                                        <span>electronics</span>
                                        <MdOutlineKeyboardArrowDown className="down-arrow-icon" />
                                        <MdOutlineKeyboardArrowUp className="up-arrow-icon" />
                                    </a>
                                    <ul className="electronics-sub-menu">
                                        <li>
                                            <a href="">
                                                <span>mobiles</span>
                                                <MdOutlineKeyboardArrowDown className="down-arrow-icon" />
                                                <MdKeyboardArrowRight className="right-arrow-icon" />
                                            </a>
                                            <ul className="mobiles-sub-menu">
                                                <li><a href=""><span>apple</span></a></li>
                                                <li><a href=""><span>blackberry</span></a></li>
                                                <li><a href=""><span>oneplus</span></a></li>
                                                <li><a href=""><span>sony</span></a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span>cameras</span>
                                                <MdOutlineKeyboardArrowDown className="down-arrow-icon" />
                                                <MdKeyboardArrowRight className="right-arrow-icon" />
                                            </a>
                                            <ul className="cameras-sub-menu">
                                                <li><a href=""><span>DSLR</span></a></li>
                                                <li><a href=""><span>lences</span></a></li>
                                                <li><a href=""><span>tripods</span></a></li>
                                                <li><a href=""><span>batteries</span></a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="">
                                        <span>sports & books</span>
                                        <MdOutlineKeyboardArrowDown className="down-arrow-icon" />
                                        <MdOutlineKeyboardArrowUp className="up-arrow-icon" />
                                    </a>
                                    <ul className="sb-sub-menu">
                                        <li>
                                            <a href="">
                                                <span>sports</span>
                                                <MdOutlineKeyboardArrowDown className="down-arrow-icon" />
                                                <MdKeyboardArrowRight className="right-arrow-icon" />
                                            </a>
                                            <ul className="sports-sub-menu">
                                                <li><a href=""><span>football</span></a></li>
                                                <li><a href=""><span>vollyball</span></a></li>
                                                <li><a href=""><span>cricket</span></a></li>
                                            </ul>
                                        </li>
                                        <li
                                        ><a href="">
                                                <span>books</span>
                                                <MdOutlineKeyboardArrowDown className="down-arrow-icon" />
                                                <MdKeyboardArrowRight className="right-arrow-icon" />
                                            </a>
                                            <ul className="books-sub-menu">
                                                <li><a href=""><span>literature</span></a></li>
                                                <li><a href=""><span>philosophy</span></a></li>
                                                <li><a href=""><span>academics</span></a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href=""><span>sale</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span>contact us</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;