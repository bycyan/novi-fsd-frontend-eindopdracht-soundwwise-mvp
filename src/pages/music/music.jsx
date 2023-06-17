import React from "react";
import "./Music.css"

export default function Music() {

    return (
        <>
            <div className="tasks">
                <section className="outer-container flex-container">
                    <h6>+ new project</h6>
                </section>

                <section className="outer-container">

                    <div className="inner-container flex-container music-item">
                        <img
                            src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&ssl=1"
                            alt=""/>
                        <div>
                        <h5>Demo EP</h5>
                        <p>Music by Blake</p>
                        </div>
                    </div>

                    <div className="inner-container flex-container music-item">
                        <img
                            src="https://f4.bcbits.com/img/a3177371765_65"
                            alt=""/>
                        <div>
                            <h5>Mid Saagon</h5>
                            <p>Ivan Ave</p>
                        </div>
                    </div>

                    <div className="inner-container flex-container music-item">
                        <img
                            src="https://f4.bcbits.com/img/a0418392322_65"
                            alt=""/>
                        <div>
                            <h5>Demo EP</h5>
                            <p>Music by Blake</p>
                        </div>
                    </div>

                </section>
            </div>
        </>
    );
}