import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";


const tristanPortfolio = {
    pageTitle: "Welcome to Tristan's Portfolio",
    data: [
        { title: "Subliminal Panda" },
        { title: "Tic-tac-toe Game" },
        { title: "Bottega DevCamp Bootcamp" },
        { title: "Some artwork shit I've done" },
    ]
};
const jordanPortfolio = {
    pageTitle: "Welcome to Jordan's Portfolio",
    data: [
        { title: "Quip" },
        { title: "Eventbrite" },
        { title: "Ministry Safe" },
        { title: "SwingAway" },
    ]
};

export default class WeirdPortfolioContainer extends Component {
    constructor() {
        super();
        this.state = {
            activePortfolio: tristanPortfolio
        };
        this.handlePageUpdate = this.handlePageUpdate.bind(this); //when building click listeners, etc. they need to be connected directly to the component more explicitly. That's why you don't need to do it for portfolioItems. Confusing but that's how it works
    }

    portfolioItems() {

        return this.state.activePortfolio.data.map(item => {
            return <PortfolioItem title={item.title} url={"google.com"} />
        })
    }

    handlePageUpdate() {
        if(this.state.activePortfolio === tristanPortfolio) {
            this.setState({activePortfolio: jordanPortfolio})
        } else if(this.state.activePortfolio === jordanPortfolio) {
            this.setState({activePortfolio: tristanPortfolio})
        }
    }

    render() {
        return (
            <div>
                <h1>{ this.state.activePortfolio.pageTitle }</h1>

                { this.portfolioItems() }

                <hr />

                <button onClick={this.handlePageUpdate}>Toggle Portfolio</button>
            </div>
        );
    }
}
