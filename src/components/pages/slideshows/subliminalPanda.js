import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import "../../../../static/assets/images/slideshow/subliminalPanda/1.jpg"
import "../../../../static/assets/images/slideshow/subliminalPanda/2.jpg"
import "../../../../static/assets/images/slideshow/subliminalPanda/3.jpg"
import "../../../../static/assets/images/slideshow/subliminalPanda/4.jpg"
import "../../../../static/assets/images/slideshow/subliminalPanda/5.jpg"
import "../../../../static/assets/images/slideshow/subliminalPanda/6.jpg"
import "../../../../static/assets/images/slideshow/subliminalPanda/7.jpg"
import "../../../../static/assets/images/slideshow/subliminalPanda/8.jpg"
import "../../../../static/assets/images/slideshow/subliminalPanda/9.jpg"
import "../../../../static/assets/images/slideshow/subliminalPanda/10.jpg"
import "../../../../static/assets/images/slideshow/subliminalPanda/11.jpg"
import "../../../../static/assets/images/slideshow/subliminalPanda/12.jpg"
import "../../../../static/assets/images/slideshow/subliminalPanda/13.jpg"
import "../../../../static/assets/images/slideshow/subliminalPanda/14.jpg"
import "../../../../static/assets/images/slideshow/subliminalPanda/15.jpg"
import "../../../../static/assets/images/slideshow/subliminalPanda/16.jpg"
import "../../../../static/assets/images/slideshow/subliminalPanda/17.jpg"
import "../../../../static/assets/images/slideshow/subliminalPanda/18.jpg"
import "../../../../static/assets/images/slideshow/subliminalPanda/19.jpg"
import "../../../../static/assets/images/slideshow/subliminalPanda/20.jpg"
import "../../../../static/assets/images/slideshow/subliminalPanda/21.jpg"
import "../../../../static/assets/images/slideshow/subliminalPanda/22.jpg"
import "../../../../static/assets/images/slideshow/subliminalPanda/23.jpg"
import "../../../../static/assets/images/slideshow/subliminalPanda/24.jpg"
import "../../../../static/assets/images/slideshow/subliminalPanda/25.jpg"
import "../../../../static/assets/images/slideshow/subliminalPanda/26.jpg"
import "../../../../static/assets/images/slideshow/subliminalPanda/27.jpg"
import "../../../../static/assets/images/slideshow/subliminalPanda/28.jpg"
import "../../../../static/assets/images/slideshow/subliminalPanda/29.jpg"

export default function BadToTheBone()
{
    const [ imageArray, setImageArray ] = useState([])

    const fillArray = () => {
        const allImages = []

        for(let i = 1; i < 30; i++ ) {
            allImages.push(
                <div className="portfolio-slideshow-wrapper">
                    <img className="portfolio-image-wrapper" src={`../../../../static/assets/images/slideshow/subliminalPanda/${i}.jpg`} />
                </div>
            )
        }

        setImageArray([allImages])
    }

    useEffect(() => {
        fillArray();
    },[])

    return (
        <Carousel width="66vh" dynamicHeight={true}>
            {imageArray}
        </Carousel>
    );
}
