import React from "react"
import {NavLink} from "react-router-dom"
const linkStyles = {
    display: "inline",
    width: "100px",
    
    padding: "12px",
    margin: "0 6px 6px",
    background: "white",
    textDecoration: "none",
    color: "black",
  };


function NavBar() {
    return (
        <div>
            <NavLink
                to ="/"
                exact
                style ={linkStyles}>
                    Home
            </NavLink>
            <NavLink
                to = "/about"
                exact
                style ={linkStyles}
                >
                About
            </NavLink>
            <NavLink
                to = "/trainers"
                exact
                style ={linkStyles}
                >
                Elite Four and Champions
            </NavLink>
            <NavLink
            to="/trainerForm"
            exact
            style= {linkStyles}
            >
                Trainer Form
            </NavLink>
        </div>)}
export default NavBar