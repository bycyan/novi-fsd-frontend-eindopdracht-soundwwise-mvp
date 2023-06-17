import React from "react";
import "./Nav.css";
import {Link} from "react-router-dom";

import navProfile from "../assets/menu-icons/nav-profile.svg";
import navPosts from "../assets/menu-icons/nav-posts.svg";
import navPlus from "../assets/menu-icons/nav-plus.svg";
import navTasks from "../assets/menu-icons/nav-tasks.svg";
import navMusic from "../assets/menu-icons/nav-music.svg";

export default function Nav() {
    return (
        <nav>
            <div className="navbar">
                <Link to="/profile">
                    <div className="nav-bttn">
                        <img src={navProfile}/>
                    </div>
                    <h6>profile</h6>
                </Link>

                <Link to="/posts">
                    <div className="nav-bttn">
                        <img src={navPosts}/>
                    </div>
                    <h6>posts</h6>
                </Link>
                <Link to="" className="nav-bttn nav-plus">
                    <img src={navPlus}/>
                </Link>
                <Link to="/tasks">
                    <div className="nav-bttn">
                        <img src={navTasks}/>
                    </div>
                    <h6>tasks</h6>
                </Link>
                <Link to="/music">
                    <div className="nav-bttn">
                        <img src={navMusic}/>
                    </div>
                    <h6>music</h6>
                </Link>

            </div>

        </nav>
    );
}