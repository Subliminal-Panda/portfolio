﻿import React, { Component } from "react";
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
            filtered: [],
        };

        this.handleFilter = this.handleFilter.bind( this );
        this.handleResetFilter = this.handleResetFilter.bind( this );
    }

    handleResetFilter() {
        console.log("portfolio items:", this.state.data)
        this.setState({
            filtered: this.state.data
        })
        return this.state.filtered
    }

    handleFilter( filter )
    {
        this.setState( {
            filtered: this.state.data.filter( item =>
                {
                return item.category === filter;
            } )
        } )
        console.log("filtered:", this.state.filtered)
    }

    getPortfolioItems()
    {
        axios
            .get( "https://tristanmouritsen.devcamp.space/portfolio/portfolio_items" )
            .then( response =>
            {
                this.setState( {
                    filtered: response.data.portfolio_items.sort((first, second) => {return (first.position - second.position)}),
                    data: response.data.portfolio_items.sort((first, second) => {return (first.position - second.position)})
                } );
            } )
            .catch( error =>
            {
                console.log( error );
            } );
    }

    portfolioItems()
    {
        return this.state.filtered.map( item =>
        {
            console.log("portfolio item:", item)
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
            <div className="homepage-wrapper">
                <div className="filter-buttons">
                    <button className="btn" onClick={ () => this.handleFilter( "Design" ) }>
                        Art & Design
                    </button>
                    <button className="btn" onClick={ () => this.handleFilter( "Games" ) }>
                        Games
                    </button>
                    <button className="btn" onClick={ () => this.handleFilter( "Miscellaneous" ) }>
                        Miscellaneous
                    </button>
                    <button className="btn" onClick={ () => this.handleResetFilter() }>
                        All Categories
                    </button>
                </div>
                <div className="portfolio-items-wrapper" >
                    { this.portfolioItems() }
                </div>
            </div>
        );
    }
}

//if you call "return" anywhere in a JS function, the rest of the function won't load!
//"handle" name isn't necessary, but convention-- it tells you a click handler will use it.
//https://tristanmouritsen.devcamp.space/portfolio/portfolio_items
