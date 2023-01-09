import React from "react"
import {NavLink} from "react-router-dom"
const linkStyles = {
    display: "inline-block",
    width: "200px",
    
    padding: "12px",
    margin: "0 6px 6px",
    background: "crimson",
    textDecoration: "none",
    color: "white",
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
                to = "/trainers/2"
                exact
                style ={linkStyles}
                >
                
                Kanto
            </NavLink>
        </div>)}
export default NavBar