import React, { Component } from "react";
import './Footer.scss';
import { FaFacebookF,FaTwitter,FaDribbble,FaInstagram,FaTelegramPlane } from "react-icons/fa";

export class Footer extends Component{
    render(){
        let x=["About Us","Contact Us","Privacy Policy","Terms & Conditions"];
        let y=["FAQ","Support","Documentation","Knowledge Base"]
        return(
        <div id="foot-sec">
            <div class="container">
                <div class="foot-row">
                    <div class="foot-col1">
                        <img src="https://kingstudio.ro/demos/mione/assets/images/logo.png" alt=""/>
                        <p>© 2021 MiOne by <span>KingStudio</span></p>
                        <div class="foot-icon">
                            <a href="#/"><FaFacebookF/></a>
                            <a href="#/"><FaTwitter/></a>
                            <a href="#/"><FaDribbble/></a>
                            <a href="#/"><FaInstagram/></a>
                        </div>
                    </div>

                    <div class="foot-col2">
                        <p>COMPANY</p>
                        <ul>
                            {
                                x.map((e)=>{
                                    return (
                                        <li><a href="#/">{e}</a></li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div class="foot-col3">
                        <p>USEFUL LINKS</p>
                        <ul>
                            {
                                y.map((e)=>{
                                    return(
                                        <li><a href="#/">{e}</a></li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div class="foot-col4">
                        <p>Subscribe to Newsletter</p>
                        <span>Quisque aliquet lorem nec dui posuere des:</span>
                        <div class="foot-intn">
                        <input type="email" placeholder="Email"/>
                        <a href="#/"><FaTelegramPlane/>Subscribe</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        )
    }
}