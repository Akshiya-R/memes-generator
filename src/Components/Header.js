import React from "react";
import logo from "../Images/logo.png";
import "./Header.css"
export default function Header(){
    return(
        <div className="nav-bar">
            <img src={logo} alt="logo" />
            <h1>Meme Generator</h1>
        </div>
    )
}