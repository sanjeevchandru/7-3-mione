import React from "react";
import './Banner.scss';
import { FaShoppingCart,FaRegUserCircle } from "react-icons/fa";
export const Banner=()=>{
    return (
        <div id="banner-sec">
            <header>
                <div class="container">
                    <div class="banner-row">
                        <div class="nav-logo">
                            <a href="#/"><img src="https://kingstudio.ro/demos/mione/assets/images/logo.png" alt="p1"/></a>
                        </div>
                        <div class="nav-btn">
                            <a href="#/"><FaRegUserCircle/> Login</a>
                            <a href="#/"class="right-btn"><FaShoppingCart/></a>
                        </div>
                    </div>
                </div>
            </header>
            <div>
                <div class="container">
                    <div class="banner-row2">
                        <h1>FOOD ORDERING</h1>
                        <p>Order food & beverages from your favorite restaurants with delivery or pick-up.</p>
                        <div class="banner-address">
                            <div class="banner-left">
                                <input type="text" placeholder="Street Address"/>
                            </div>
                            <div class="banner-right">
                                <a href="/#">Delivery</a>
                                <p>OR</p>
                                <a href="/#">Pick-up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}