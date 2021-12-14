import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import "../../../../static/assets/images/slideshow/badToTheBone/1.jpg"
import "../../../../static/assets/images/slideshow/badToTheBone/2.jpg"
import "../../../../static/assets/images/slideshow/badToTheBone/3.jpg"
import "../../../../static/assets/images/slideshow/badToTheBone/4.jpg"
import "../../../../static/assets/images/slideshow/badToTheBone/5.jpg"
import "../../../../static/assets/images/slideshow/badToTheBone/6.jpg"
import "../../../../static/assets/images/slideshow/badToTheBone/7.jpg"
import "../../../../static/assets/images/slideshow/badToTheBone/8.jpg"
import "../../../../static/assets/images/slideshow/badToTheBone/9.jpg"
import "../../../../static/assets/images/slideshow/badToTheBone/10.jpg"
import "../../../../static/assets/images/slideshow/badToTheBone/11.jpg"
import "../../../../static/assets/images/slideshow/badToTheBone/12.jpg"
import "../../../../static/assets/images/slideshow/badToTheBone/13.jpg"
import "../../../../static/assets/images/slideshow/badToTheBone/14.jpg"
import "../../../../static/assets/images/slideshow/badToTheBone/15.jpg"
import "../../../../static/assets/images/slideshow/badToTheBone/16.jpg"
import "../../../../static/assets/images/slideshow/badToTheBone/17.jpg"
import "../../../../static/assets/images/slideshow/badToTheBone/18.jpg"
import "../../../../static/assets/images/slideshow/badToTheBone/19.jpg"
import "../../../../static/assets/images/slideshow/badToTheBone/20.jpg"
import "../../../../static/assets/images/slideshow/badToTheBone/21.jpg"
import "../../../../static/assets/images/slideshow/badToTheBone/22.jpg"
import "../../../../static/assets/images/slideshow/badToTheBone/23.jpg"
import "../../../../static/assets/images/slideshow/badToTheBone/24.jpg"
import "../../../../static/assets/images/slideshow/badToTheBone/25.jpg"
import "../../../../static/assets/images/slideshow/badToTheBone/26.jpg"
import "../../../../static/assets/images/slideshow/badToTheBone/27.jpg"
import "../../../../static/assets/images/slideshow/badToTheBone/28.jpg"
import "../../../../static/assets/images/slideshow/badToTheBone/29.jpg"
import "../../../../static/assets/images/slideshow/badToTheBone/30.jpg"
import "../../../../static/assets/images/slideshow/badToTheBone/31.jpg"
import "../../../../static/assets/images/slideshow/badToTheBone/32.jpg"
import "../../../../static/assets/images/slideshow/badToTheBone/33.jpg"

export default function BadToTheBone()
{
    const [ imageArray, setImageArray ] = useState([])

    const fillArray = () => {
        const allImages = []

        for(let i = 1; i < 34; i++ ) {
            allImages.push(
                <div className="portfolio-slideshow-wrapper">
                    <img className="portfolio-image-wrapper" src={`../../../../static/assets/images/slideshow/badToTheBone/${i}.jpg`} />
                </div>
            )
        }

        console.log("all images:", allImages)
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
