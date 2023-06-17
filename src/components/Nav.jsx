import React, {useState} from "react";
import "./Nav.css";
import {Link} from "react-router-dom";

import navProfile from "../assets/menu-icons/nav-profile.svg";
import navPosts from "../assets/menu-icons/nav-posts.svg";
import navPlus from "../assets/menu-icons/nav-plus.svg";
import navTasks from "../assets/menu-icons/nav-tasks.svg";
import navMusic from "../assets/menu-icons/nav-music.svg";
import navPlusActive from "../assets/menu-icons/nav-plus-active.svg";

export default function Nav() {
    const [menuVisible, setMenuVisible] = useState(false);
    const [isActive, setIsActive] = useState(false); // Active state

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
        setIsActive(!isActive); // Toggle active state
    };

    const closeMenu = () => {
        setMenuVisible(false);
        setIsActive(false); // Toggle active state
    };

    return (
        <nav>
            <div className="navbar">
                <Link to="/profile">
                    <div onClick={closeMenu}>
                    <div className="nav-bttn" >
                        <img src={navProfile}/>
                    </div>
                    <h6>profile</h6>
                    </div>
                </Link>

                <Link to="/posts">
                    <div onClick={closeMenu}>
                    <div className="nav-bttn">
                        <img src={navPosts}/>
                    </div>
                    <h6>posts</h6>
                    </div>
                </Link>

                {/*Menu*/}
                {/*<Link to="" className="nav-bttn nav-plus">*/}
                {/*    <img src={navPlus}/>*/}
                {/*</Link>*/}

                <button
                    className={`nav-bttn nav-plus ${isActive ? "active" : ""}`}
                    onClick={toggleMenu}
                >
                    <img
                        src={isActive ? navPlusActive : navPlus}
                        alt="Toggle Menu"
                    />
                </button>

                {menuVisible && (
                    <div className="overlay">
                        <div className="menu-overflow">

                            <h3>Menu</h3>
                            {/* Menu content */}
                        </div>
                    </div>
                )}


                <Link to="/tasks">
                    <div onClick={closeMenu}>
                    <div className="nav-bttn">
                        <img src={navTasks}/>
                    </div>
                    <h6>tasks</h6>
                    </div>
                </Link>
                <Link to="/music">
                    <div onClick={closeMenu}>
                    <div className="nav-bttn">
                        <img src={navMusic}/>
                    </div>
                    <h6>music</h6>
                    </div>
                </Link>

            </div>

        </nav>
    );
}