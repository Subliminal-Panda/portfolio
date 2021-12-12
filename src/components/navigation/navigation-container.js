﻿import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavigationComponent = ( props ) =>
{
    const dynamicLink = ( route, linkText ) =>
    {
        return (
            < div className="nav-link-wrapper dynamic-nav-link-wrapper" >
                <NavLink to={ route } className="nav-link" activeClassName="nav-link-active">
                    { linkText }
                </NavLink>
            </div>

        )
    }

    const handleSignout = () =>
    {
        axios.delete( "https://api.devcamp.space/logout", { withCredentials: true } )
            .then( response =>
            {
                if ( response.status === 200 )
                {
                    props.history.push( "/" );
                    props.handleSuccessfulLogout();
                }
                return response.data;
            } ).catch( error =>
            {
                console.log( "error signing out", error )
            } )
    };

    return (
        <div className="nav-wrapper">
            <div className="left-side">
                <div className="nav-link-wrapper">
                    <NavLink exact to="/"
                    className="nav-link"
                    activeClassName="nav-link-active">
                        Home
                    </NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to="/about"
                    className="nav-link"
                    activeClassName="nav-link-active">
                        About
                    </NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to="/contact"
                    className="nav-link"
                    activeClassName="nav-link-active">
                        Contact
                    </NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to="/blog"
                    className="nav-link"
                    activeClassName="nav-link-active">
                        Blog
                    </NavLink>
                </div>
                { props.loggedInStatus === "LOGGED_IN" ? dynamicLink( "/portfolio-manager", "Portfolio Manager" ) : null }
            </div>
            <div className="right-side">
                Tristan Mouritsen

                { props.loggedInStatus === "LOGGED_IN" ? <a onClick={ handleSignout }>
                    <FontAwesomeIcon icon="sign-out-alt" />
                </a> : null }
            </div>
        </div>
    );
};

export default withRouter( NavigationComponent );
