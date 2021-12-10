import React from "react";
import aboutImage from "../../../static/assets/images/bio/aboutImage.jpg"

export default function About () {
    return (
        <div className="content-page-wrapper two-column">
            <div
            className="content-left-column"
            style={{
                background: "url(" + aboutImage + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
            }}>
            </div>
            <div className="content-right-column">
<h1>About Me</h1>
<p>My history and expertise are entirely people-oriented. Throughout my life, I've strongly focused on intellectual growth and artistic pursuits. Having been refined in the furnace of over fourteen cumulative years of customer service, sales, special education, medical assisting and other social vocations, I believe I can truly say I’m an excellent communicator and a well-tested mediator.
</p>
<p>
More than five of these years have been dedicated to various leadership roles; three as a supervisor with directly reporting employees. Though I’ve always worked with and loved people, my personal passion lies in art and design. For over twenty years I have been avidly creating visual art in my spare time- from drawing and painting to photography, digital design, and even dabbling in animation.
</p>
<p>
As a husband and a father to 2 amazing kids, life is all about having fun. To raise a family, qualities such as communication, leadership (and followership), compromise, collaboration, hard work, owning mistakes, and dedication to others are so much more than just on-the-job skills. As much as I let them, they define everything I do and become.
</p>
            </div>
        </div>
    );
}
