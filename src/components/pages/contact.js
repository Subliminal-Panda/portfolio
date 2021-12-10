import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import contactImage from "../../../static/assets/images/bio/contactImage.jpg";
import { Link } from "react-router-dom";

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
                        <h2>(801) 888-2444</h2>
                    </div>
                    <div className="contact-line">
                        <div className="icon" >
                            <FontAwesomeIcon icon="envelope-open-text" />
                        </div>
                        <h2>tmouritsen57@gmail.com</h2>
                    </div>
                    <div className="contact-line">
                        <div className="icon" >
                            <FontAwesomeIcon icon="map-marked-alt" />
                        </div>
                        <div>
                            <h2>10251 S. CountryWood Dr.</h2>
                            <h2>Sandy, UT 84092</h2>
                        </div>
                    </div>
                    <Link className="external-link" to="https://github.com/Subliminal-Panda" >
                        <div href="https://github.com/Subliminal-Panda" className="contact-line">
                            <div className="icon" >
                                <FontAwesomeIcon href="https://github.com/Subliminal-Panda" icon={faGithub} />
                            </div>
                            <h2>
                                https://github.com/Subliminal-Panda
                            </h2>
                        </div>
                    </Link>
                    <Link className="external-link" to="https://www.linkedin.com/in/tmouritsen57/" >
                        <div className="contact-line">
                            <div className="icon" >
                                <FontAwesomeIcon href="https://www.linkedin.com/in/tmouritsen57/" icon={faLinkedinIn} />
                            </div>
                            <h2 href="https://www.linkedin.com/in/tmouritsen57/">
                            https://www.linkedin.com/in/tmouritsen57/
                            </h2>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
