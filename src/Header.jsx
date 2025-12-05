import React from "react";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
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
                                </li>
                                <li>
                                    <a href="">
                                        <span>electronics</span>
                                        <MdOutlineKeyboardArrowDown className="down-arrow-icon" />
                                        <MdOutlineKeyboardArrowUp className="up-arrow-icon"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span>sports & books</span>
                                        <MdOutlineKeyboardArrowDown className="down-arrow-icon" />
                                        <MdOutlineKeyboardArrowUp className="up-arrow-icon"/>
                                    </a>
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