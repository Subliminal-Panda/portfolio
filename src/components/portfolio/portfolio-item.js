import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PortfolioItem extends Component
{
    constructor( props )
    {
        super( props );

        this.state = {
            portfolioItemClass: "",
            touchScreenText: "",
            touchChecked: false
        };
    }

    handleMouseEnter()
    {
        this.setState( { portfolioItemClass: "image-blur" } );
        console.log("position:", this.props.item.position);
    }

    handleMouseLeave()
    {
        this.setState( { portfolioItemClass: "" } );
    }

    componentDidUpdate() {
        this.isTouchDevice();
    }

    componentDidMount() {
        this.isTouchDevice();
    }

    isTouchDevice(){
        if (('ontouchstart' in window && !this.state.touchChecked) ||
           (navigator.maxTouchPoints > 0 && !this.state.touchChecked) ||
           (navigator.msMaxTouchPoints > 0 && !this.state.touchChecked)) {
            this.setState( { portfolioItemClass: "image-blur", touchScreenText: "touch-screen-text",
        touchChecked: true } )
           };
    }

    render()
    {
        const { name, id, description, thumb_image_url, logo_url, } = this.props.item;
        return (
            <Link to={`/portfolio/${id}`}>
                <div
                    className="portfolio-item-wrapper"
                    onMouseEnter={ () => this.handleMouseEnter() }
                    onMouseLeave={ () => this.handleMouseLeave() }
                >
                    <div
                        className={
                            "portfolio-img-background " + this.state.portfolioItemClass
                        }
                        style={ {
                            backgroundImage: "url(" + thumb_image_url + ")"
                        } }
                    />

                    <div className="img-text-wrapper">
                        <div className={"item-title " + this.state.touchScreenText }>
                            <div className="logo-wrapper">
                                <img className="logo" src={ logo_url } />
                            </div>
                        { name }
                        </div>
                        <div className="logo-subtitle-wrapper" >


                            <div className={"subtitle " + this.state.touchScreenText }>{ description }</div>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
}
