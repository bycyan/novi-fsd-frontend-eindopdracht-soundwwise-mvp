import React from "react";
import "./Posts.css";

export default function Posts() {
    return (
        <div>
            <article className="outer-container">

                <div className="post-content">
                <h5>Cyan Dalebout</h5>
                <h6>sunday 20/13/2023</h6>
                <p className="subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem delectus dicta facere laboriosam maiores molestias quis similique unde voluptas! Alias aliquid assumenda beatae doloremque et expedita id impedit inventore ipsa minus modi natus necessitatibus odio pariatur, placeat quaerat qui quia repellat sunt temporibus, tenetur totam vitae. Cupiditate error, neque.
                </p>
                </div>

                <div className="flex-container interact">
                    <div className="flex-container like"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Love_Heart_symbol.svg/640px-Love_Heart_symbol.svg.png" alt=""/><h6>like</h6></div>
                </div>

            </article>

            <article className="outer-container">

                <div className="post-content">
                    <h5>Cyan Dalebout</h5>
                    <h6>sunday 20/13/2023</h6>
                    <img src="https://imaginerecordings.com/wp-content/uploads/2017/12/Natalie-In-Session-USE-THIS-1.jpg" alt=""/>
                    <p className="subtitle">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid dicta ea eius in ipsum iusto labore maiores minus praesentium quae, rem repellendus, tempora tempore.
                    </p>
                </div>

                <div className="flex-container interact">
                    <div className="flex-container like"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Love_Heart_symbol.svg/640px-Love_Heart_symbol.svg.png" alt=""/><h6>like</h6></div>
                </div>

            </article>
        </div>
    );
}