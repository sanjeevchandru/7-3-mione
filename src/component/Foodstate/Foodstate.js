import React from 'react';
import './Foodstate.scss'
export const Foodstate=()=>{
    let foodstate=[
        {image:"https://kingstudio.ro/demos/mione/assets/images/ph-mini11.jpg",
    name:"Fast Food",type:"Quisque vitae."},
    {image:"https://kingstudio.ro/demos/mione/assets/images/ph-mini12.jpg",name:"Asian",type:"Quisque vitae."},{image:"https://kingstudio.ro/demos/mione/assets/images/ph-mini13.jpg",name:"Italian",type:"Quisque vitae."},{image:"https://kingstudio.ro/demos/mione/assets/images/ph-mini14.jpg",name:"Local",type:"Quisque vitae."}
];
    return (
        <div id="state-section">
            <div class="container">
                <div class="state-row">
                {
                    foodstate.map((e,i)=>{
                        return (
                            <div class="state-col" key={i}>
                                <div class="state-card">
                                    <div class="state-image">
                                        <img src={e.image} alt="foodimage"/>
                                    </div>
                                    
                                    <div class="state-cont">
                                        <h3>{e.name}</h3>
                                        <p>{e.type}</p>
                                    </div>
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

