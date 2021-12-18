import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import "../../../../static/assets/images/slideshow/pemdaksCreations/1.jpg"
import "../../../../static/assets/images/slideshow/pemdaksCreations/2.jpg"
import "../../../../static/assets/images/slideshow/pemdaksCreations/3.jpg"
import "../../../../static/assets/images/slideshow/pemdaksCreations/4.jpg"
import "../../../../static/assets/images/slideshow/pemdaksCreations/5.jpg"
import "../../../../static/assets/images/slideshow/pemdaksCreations/6.jpg"

export default function BadToTheBone()
{
    const [ imageArray, setImageArray ] = useState([])

    const fillArray = () => {
        const allImages = []

        for(let i = 1; i < 7; i++ ) {
            allImages.push(
                <div className="portfolio-slideshow-wrapper">
                    <img className="portfolio-image-wrapper" src={`../../../../static/assets/images/slideshow/pemdaksCreations/${i}.jpg`} />
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
