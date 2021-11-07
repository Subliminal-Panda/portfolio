import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contactImage from "../../../static/assets/images/bio/contactImage.jpg"

//TODO: make phone # pull up phone dialer on device, populating phone #
//TODO: make email a "mailto" link
//TODO: make address link to google maps, populating from "address" field
//TODO: add social media icons, including linkedin, github, codepen,

export default function Contact () {
    return (
        <div className="content-page-wrapper two-column">
            <div
            className="content-left-column"
            style={{
                background: "url(" + contactImage + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
            }}>
            </div>
            <div className="content-right-column">
                <div className="contact-wrap" >
                    <h1>Contact Me:</h1>
                    <div className="contact-line">
                        <div className="icon" >
                            <FontAwesomeIcon icon="phone-alt" />
                        </div>
                        <h2>(555) 555-5555</h2>
                    </div>
                    <div className="contact-line">
                        <div className="icon" >
                            <FontAwesomeIcon icon="envelope-open-text" />
                        </div>
                        <h2>madeupemail@ymail.com</h2>
                    </div>
                    <div className="contact-line">
                        <div className="icon" >
                            <FontAwesomeIcon icon="map-marked-alt" />
                        </div>
                        <h2>5700 N. 119 W. Imaginary Ln., Bremerton, WA 98314</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
