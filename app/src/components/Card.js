import React from "react";
export default function Card(props){

    let badgetext
    if(props.openSpots===0){
        badgetext="SOLD OUT"
    } else if(props.location === "Online") {
        badgetext="ONLINE"
    }

    return(
        <div className="card">
            {badgetext && <div className="card--badge">{badgetext}</div>}
            <img src={props.coverImg} className="card--image"></img>
            <div className="card--stats">
                <img src={require("../logo_images/star.png")} className="card--star"></img>
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount})</span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p className="card--price">
                <span className="bold">From ${props.price}</span> / person
            </p>
        </div>
    )
}