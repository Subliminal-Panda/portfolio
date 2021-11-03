import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component
{
    constructor()
    {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: [],
            savedData: []
        };

        this.handleFilter = this.handleFilter.bind( this );
        this.handleResetFilter = this.handleResetFilter.bind( this );
    }

    handleResetFilter() {
        this.setState({
            data: this.state.savedData
        })
        return this.state.data
    }

    handleFilter( filter )
    {
        if (this.state.data === this.state.savedData) {
            this.setState( {
                data: this.state.data.filter( item =>
                    {
                    return item.category === filter;
                } )
            } )
        } else {
            this.state.data = this.state.savedData;
            this.setState( {
                data: this.state.data.filter( item =>
                    {
                    return item.category === filter;
                } )
            } )
        }
    }

    getPortfolioItems()
    {
        axios
            .get( "https://tristanmouritsen.devcamp.space/portfolio/portfolio_items" )
            .then( response =>
            {
                this.setState( {
                    data: response.data.portfolio_items,
                    savedData: response.data.portfolio_items
                } );
            } )
            .catch( error =>
            {
                console.log( error );
            } );
    }

    portfolioItems()
    {
        return this.state.data.map( item =>
        {
            return <PortfolioItem key={ item.id } item={ item } />;
        } );
    }

    componentDidMount()
    {
        this.getPortfolioItems();
    }

    render()
    {
        if ( this.state.isLoading )
        {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <div className="portfolio-buttons">
                    <button className="btn" onClick={ () => this.handleResetFilter() }>
                        All Categories
                    </button>
                    <button className="btn" onClick={ () => this.handleFilter( "eCommerce" ) }>
                        eCommerce
                    </button>
                    <button className="btn" onClick={ () => this.handleFilter( "Scheduling" ) }>
                        Scheduling
                    </button>
                    <button className="btn" onClick={ () => this.handleFilter( "Enterprise" ) }>
                        Enterprise
                    </button>
                </div>
                <div className="portfolio-items-wrapper">
                    { this.portfolioItems() }
                </div>
            </div>
        );
    }
}

//if you call "return" anywhere in a JS function, the rest of the function won't load!
//"handle" name isn't necessary, but convention-- it tells you a click handler will use it.
//https://tristanmouritsen.devcamp.space/portfolio/portfolio_items
