import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data"

export default function App(){

        const cards=data.map(item => {
            return(
                <Card 
                key={item.id}
                {...item} // or the conventional method // item={item} in which you will have to access the prop by using prop.item._____
                />
            )
        })
        return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>

        
    )
}