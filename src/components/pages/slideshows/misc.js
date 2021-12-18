import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import "../../../../static/assets/images/slideshow/misc/1.jpg"
import "../../../../static/assets/images/slideshow/misc/2.jpg"
import "../../../../static/assets/images/slideshow/misc/3.jpg"
import "../../../../static/assets/images/slideshow/misc/4.jpg"
import "../../../../static/assets/images/slideshow/misc/5.jpg"
import "../../../../static/assets/images/slideshow/misc/6.jpg"
import "../../../../static/assets/images/slideshow/misc/7.jpg"
import "../../../../static/assets/images/slideshow/misc/8.jpg"

export default function BadToTheBone()
{
    const [ imageArray, setImageArray ] = useState([])

    const fillArray = () => {
        const allImages = []

        for(let i = 1; i < 9; i++ ) {
            allImages.push(
                <div className="portfolio-slideshow-wrapper">
                    <img className="portfolio-image-wrapper" src={`../../../../static/assets/images/slideshow/misc/${i}.jpg`} />
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
