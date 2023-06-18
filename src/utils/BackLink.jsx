import React from "react";
import Logo from "../assets/soundwwise-logo.png";

const BackLink = () => {
    const handleClick = () => {
        window.history.back();
    };

    return (
        <img src={ Logo } onClick={handleClick}/>

    );
};

export default BackLink;