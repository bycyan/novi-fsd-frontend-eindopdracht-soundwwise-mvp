import React from 'react';
import "./profile.css";
import threeDots from "../../assets/three-dots.svg";
export default function Profile() {
    return (
        <>
            <div>
                <div className="profile-cover-img"><img
                    src="https://64.media.tumblr.com/c71d53b605277ed613f6dfcea9bafbcc/tumblr_p359urOkdg1vsaj6co1_1280.png"
                    alt=""/>
                </div>

                <section className="outer-container profile-header-section">
                    <img src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt="profile-img" />
                    <h3>Cyan Dalebout</h3>
                    <h6>Music Producer, Songwriter</h6>
                    <button>+ Connect</button>
                </section>

                <section className="outer-container profile-experience-section">
                    <div className="header flex-container"><h4>Experience</h4> <img src={threeDots} alt="dots"/></div>

                    <div className="experience-item">
                        <div className="flex-container">

                            <img
                                src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&ssl=1"
                                alt=""/>

                                <div className="info">
                                    <h5>Demo EP</h5>
                                    <h6>Francies</h6>
                                </div>


                        </div>
                        <p>With this project I developed a crazy
                            amazing tune together with drake in the LA studio bro.</p>
                    </div>

                    <div className="experience-item">
                        <div className="flex-container">

                            <img
                                src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&ssl=1"
                                alt=""/>

                            <div className="info">
                                <h5>Demo EP</h5>
                                <h6>Francies</h6>
                            </div>


                        </div>
                        <p>With this project I developed a crazy
                            amazing tune together with drake in the LA studio bro.</p>
                    </div>

                </section>

            </div>


        </>
    );
}