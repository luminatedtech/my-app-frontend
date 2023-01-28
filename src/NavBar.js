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
                to = "/trainers/kanto"
                exact
                style ={linkStyles}
                >
                Kanto
            </NavLink>
            <NavLink
                to = "/trainers/johto"
                exact
                style ={linkStyles}
                >
                Johto
            </NavLink>
            <NavLink
                to = "/trainers/hoenn"
                exact
                style ={linkStyles}
                >
                Hoenn
            </NavLink>
            <NavLink
                to = "/trainers/sinnoh"
                exact
                style ={linkStyles}
                >
                Sinnoh
            </NavLink>
            <NavLink
                to = "/trainers/unova"
                exact
                style ={linkStyles}
                >
                Unova
            </NavLink>
            <NavLink
                to = "/trainers/kalos"
                exact
                style ={linkStyles}
                >
                Kalos
            </NavLink>
            <NavLink
                to = "/trainers/aloha"
                exact
                style ={linkStyles}
                >
                Aloha
            </NavLink>
        </div>)}
export default NavBar