import React from "react";
import { Title } from '../components/Title'
import { useState } from "react";

export const RandomColor = () => {

    const [loun, setLoun] = useState('Color')

    const handleClick = (e) => {

        let body = document.querySelector('body');
        body.style.backgroundColor = getRandomColor()
        e.target.style.backgroundColor = getRandomColor()

        const newColorCode = getRandomColor()
        setLoun(newColorCode);
    }

    const getRandomColor = () => {
        let letters = "0123456789ABCDEF";
        let color = "#";
        for(let i = 0; i < 6; i++){
            color += letters[Math.floor(Math.random() * 16)]
        }
        return color
    }

    return (
        <div className="container">
            <Title  text={"Random Color"}/>
            <button className="btn one" onClick={handleClick}>Click me</button>
            <button className="btn two" onClick={handleClick}>Click me</button>
            <button className="btn three" onClick={handleClick}>Click me</button>
            <button className="btn four" onClick={handleClick}>Click me</button>
            <div className="colorCode">
                <span>{loun}</span>
            </div>
        </div>
    )
}