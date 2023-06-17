import React from "react";
import "./Nav.css";
import {Link} from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <div className="navbar">
                <Link to="/profile">
                    <div className="nav-bttn">
                        {/*<img src="./assets/menu-icons/person.svg" alt="">*/}
                    </div>
                    <h6>profile</h6>
                </Link>

                <Link to="/posts">
                    <div className="nav-bttn">
                        {/*<img src="./assets/menu-icons/card-heading.svg" alt="">*/}
                    </div>
                    <h6>posts</h6>
                </Link>
                <Link to="" className="nav-bttn nav-plus">
                    {/*<img src="./assets/menu-icons/plus.svg" alt="">*/}
                </Link>
                <Link to="/tasks">
                    <div className="nav-bttn">
                        {/*<img src="./assets/menu-icons/ui-checks.svg" alt="">*/}
                    </div>
                    <h6>tasks</h6>
                </Link>
                <Link to="/music">
                    <div className="nav-bttn">
                        {/*<img src="./assets/menu-icons/music-note-beamed.svg" alt="">*/}
                    </div>
                    <h6>music</h6>
                </Link>

            </div>

        </nav>
    );
}