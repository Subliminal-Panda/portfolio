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
                backgroundPosition: "top center",
            }}>
            </div>
            <div className="content-right-column">
<h1>About Me</h1>
<p>
Hey there friends! I'm Tristan Mouritsen. I'm a fun-loving, friendly fella who adores his wife and kids. Second to that, I deeply enjoy computer programming, art, design, and exploring life.
</p>
{/* <p>
I'm constantly trying to grow and face new challenges. I love to look back after each day and hope that I'm a better person than I was yesterday.
</p> */}
<p>
My work experience is highly people-oriented. Having been refined in the furnace of over fourteen cumulative years of customer service, sales, special education, medical assisting and other social vocations, I believe I can truly say I’m an excellent communicator and a well-tested mediator. More than five of those fourteen years have been dedicated to various leadership roles, and three years as a supervisor with directly reporting employees.
</p>
<p>
I continually work with and love people, but my selfish passion lies in art and design. For over twenty years I have been avidly creating visual art in my spare time- from drawing and painting to photography, digital design, and dabbling in animation. I love creating new things with beautiful colors and sharing them with the world.
</p>
<p>
As a husband to a beautiful wife and a father to 2 amazing kids, life is all about having fun. To raise a family, qualities such as communication, creativity, leadership (and followership), owning mistakes, and dedication to others are so much more than just job skills.
</p>
            </div>
        </div>
    );
}
