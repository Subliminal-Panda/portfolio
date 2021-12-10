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
<p>
Hey there friends! I'm Tristan Mouritsen. I'm a fun-loving, friendly fella who adores his wife and kids. Second to that, I deeply enjoy computer programming, art, design, and exploring life. I'm constantly working to grow and face new challenges.
</p>
<p>
Often when someone says a thing like that, they're implying that they grind their teeth as they force their way through existence. Some folks work tirelessly to find new ways to torture themselves, trying to show the world that they love misery more than the next guy or gal. Many of those people look down upon others who don't afflict themselves in the same way they do. That's not me. I do, however, love to look back after each day and hope that I'm a better person than I was yesterday.
</p>
<p>
My history and expertise are entirely people-oriented. Having been refined in the furnace of over fourteen cumulative years of customer service, sales, special education, medical assisting and other social vocations, I believe I can truly say I’m an excellent communicator and a well-tested mediator. More than five of those fourteen years have been dedicated to various leadership roles- three as a supervisor with directly reporting employees.
</p>
<p>
Throughout my life, I've strongly focused on intellectual growth and artistic pursuits. Though I’ve always worked with and loved people, my selfish passion lies in art and design. For over twenty years I have been avidly creating visual art in my spare time- from drawing and painting to photography, digital design, and even dabbling in animation. I love creating new things with beautiful colors and sharing them with the world.
</p>
<p>
As a husband to a beautiful wife and a father to 2 amazing kids, life is all about having fun. To raise a family, qualities such as communication, creativity, leadership (and followership), compromise, collaboration, hard work, owning mistakes, and dedication to others are so much more than just on-the-job skills. As much as I let them, they define what I do and become.
</p>
            </div>
        </div>
    );
}
