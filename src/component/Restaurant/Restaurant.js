import React, { Component } from "react";
import './Restaurant.scss';
import { FaStar } from "react-icons/fa";
import { FaRegStar,FaStarHalfAlt } from "react-icons/fa";


 export class Restaurant extends Component{
    render(){
    let rest=[
        {image:"https://kingstudio.ro/demos/mione/assets/images/ph38.jpg",name:"Fast Food One",para:"Fast Food",icon1:<FaStar/>,icon2:<FaStar/>,icon3:<FaStar/>,icon4:<FaStar/>,icon5:<FaRegStar/>},
    {image:"https://kingstudio.ro/demos/mione/assets/images/ph32.jpg",name:"Restaurant One",para:"Local Restaurant",icon1:<FaStar/>,icon2:<FaStar/>,icon3:<FaStar/>,icon4:<FaStar/>,icon5:<FaStar/>},
    {image:"https://kingstudio.ro/demos/mione/assets/images/ph31.jpg",name:"Restaurant Two",para:"Asian Restaurant",icon1:<FaStar/>,icon2:<FaStar/>,icon3:<FaStar/>,icon4:<FaStar/>,icon5:<FaRegStar/>},
    {image:"https://kingstudio.ro/demos/mione/assets/images/ph33.jpg",name:"Restaurant Three",para:"Local Restaurant",icon1:<FaStar/>,icon2:<FaStar/>,icon3:<FaStar/>,icon4:<FaStar/>,icon5:<FaStar/>},
    {image:"https://kingstudio.ro/demos/mione/assets/images/ph36.jpg",name:"Fast Food Two",para:"Fast Food",icon1:<FaStar/>,icon2:<FaStar/>,icon3:<FaStar/>,icon4:<FaStar/>,icon5:<FaStarHalfAlt/>},
    {image:"https://kingstudio.ro/demos/mione/assets/images/ph34.jpg",name:"Restaurant Four",para:"Italian Restaurant",icon1:<FaStar/>,icon2:<FaStar/>,icon3:<FaStar/>,icon4:<FaStar/>,icon5:<FaStar/>}
];
    return(
        <div id="rest-sec">
            <div class="container">
                <div class="rest-title">
                <h1>RESTAURANTS</h1>
                </div>
                <div class="rest-row">
                    {
                        rest.map((e)=>{
                            return(
                                <div class="rest-col">
                                    <div class="rest-card">
                                        <div class="rest-image">
                                            <img src={e.image} alt="restaurant-food"/>
                                        </div>
                                        <h3>{e.name}</h3>
                                        <p>{e.para}</p>
                                        <span class="rest-icon">{e.icon1}{e.icon2}{e.icon3}{e.icon4}{e.icon5}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
    }
    
    }