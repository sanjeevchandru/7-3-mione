import React, { Component } from "react";
import './Downapp.scss';
import { FaGooglePlay,FaApple } from "react-icons/fa";
export class Downapp  extends  Component{
    render(){
        return(
            <div id="down-sec">
                <div class="container">
                    <div class="down-row">
                        <div class="down-card">
                            <h3>DOWNLOAD APP</h3>
                            <p>Quisque fringilla volutpat libero, a molestie sem venenatis sit amet.</p>
                            <p class="spanp">Download now, from:</p>
                            <div class="down-btn">
                                <div class="down-btn1">
                                    <div>
                                        <FaApple/>
                                    </div>
                                    <a href="#/"> App Store</a>
                                </div>
                                <div class="down-btn2">
                                    <div>
                                        <FaGooglePlay/>
                                    </div>
                                    <a href="#/"> Google Play</a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}