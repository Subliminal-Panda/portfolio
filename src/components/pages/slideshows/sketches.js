import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import "../../../../static/assets/images/slideshow/sketches/1.jpg"
import "../../../../static/assets/images/slideshow/sketches/2.jpg"
import "../../../../static/assets/images/slideshow/sketches/3.jpg"
import "../../../../static/assets/images/slideshow/sketches/4.jpg"
import "../../../../static/assets/images/slideshow/sketches/5.jpg"
import "../../../../static/assets/images/slideshow/sketches/6.jpg"
import "../../../../static/assets/images/slideshow/sketches/7.jpg"
import "../../../../static/assets/images/slideshow/sketches/8.jpg"
import "../../../../static/assets/images/slideshow/sketches/9.jpg"
import "../../../../static/assets/images/slideshow/sketches/10.jpg"
import "../../../../static/assets/images/slideshow/sketches/11.jpg"
import "../../../../static/assets/images/slideshow/sketches/12.jpg"
import "../../../../static/assets/images/slideshow/sketches/13.jpg"
import "../../../../static/assets/images/slideshow/sketches/14.jpg"
import "../../../../static/assets/images/slideshow/sketches/15.jpg"
import "../../../../static/assets/images/slideshow/sketches/16.jpg"
import "../../../../static/assets/images/slideshow/sketches/17.jpg"
import "../../../../static/assets/images/slideshow/sketches/18.jpg"
import "../../../../static/assets/images/slideshow/sketches/19.jpg"
import "../../../../static/assets/images/slideshow/sketches/20.jpg"
import "../../../../static/assets/images/slideshow/sketches/21.jpg"
import "../../../../static/assets/images/slideshow/sketches/22.jpg"
import "../../../../static/assets/images/slideshow/sketches/23.jpg"
import "../../../../static/assets/images/slideshow/sketches/24.jpg"
import "../../../../static/assets/images/slideshow/sketches/25.jpg"
import "../../../../static/assets/images/slideshow/sketches/26.jpg"
import "../../../../static/assets/images/slideshow/sketches/27.jpg"
import "../../../../static/assets/images/slideshow/sketches/28.jpg"
import "../../../../static/assets/images/slideshow/sketches/29.jpg"
import "../../../../static/assets/images/slideshow/sketches/30.jpg"
import "../../../../static/assets/images/slideshow/sketches/31.jpg"
import "../../../../static/assets/images/slideshow/sketches/32.jpg"
import "../../../../static/assets/images/slideshow/sketches/33.jpg"
import "../../../../static/assets/images/slideshow/sketches/34.jpg"
import "../../../../static/assets/images/slideshow/sketches/35.jpg"
import "../../../../static/assets/images/slideshow/sketches/36.jpg"
import "../../../../static/assets/images/slideshow/sketches/37.jpg"
import "../../../../static/assets/images/slideshow/sketches/38.jpg"
import "../../../../static/assets/images/slideshow/sketches/39.jpg"
import "../../../../static/assets/images/slideshow/sketches/40.jpg"
import "../../../../static/assets/images/slideshow/sketches/41.jpg"
import "../../../../static/assets/images/slideshow/sketches/42.jpg"
import "../../../../static/assets/images/slideshow/sketches/43.jpg"
import "../../../../static/assets/images/slideshow/sketches/44.jpg"
import "../../../../static/assets/images/slideshow/sketches/45.jpg"
import "../../../../static/assets/images/slideshow/sketches/46.jpg"
import "../../../../static/assets/images/slideshow/sketches/47.jpg"
import "../../../../static/assets/images/slideshow/sketches/48.jpg"
import "../../../../static/assets/images/slideshow/sketches/49.jpg"
import "../../../../static/assets/images/slideshow/sketches/50.jpg"
import "../../../../static/assets/images/slideshow/sketches/51.jpg"

export default function Sketches()
{
    const [ imageArray, setImageArray ] = useState([])

    const fillArray = () => {
        const allImages = []
        // allImages.push(
        //     <div className="portfolio-slideshow-wrapper">
        //             <img className="portfolio-image-wrapper" src="https://live.staticflickr.com/65535/51752442177_d596305619_h.jpg" />
        //         </div>
        // )
        for(let i = 1; i < 52; i++ ) {
            allImages.push(
                <div className="portfolio-slideshow-wrapper">
                    <img className="portfolio-image-wrapper" src={`../../../../static/assets/images/slideshow/sketches/${i}.jpg`} />
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
