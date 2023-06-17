import React from "react";
import CheckBox from "../../components/ui/CheckBox.jsx";

export default function Tasks() {

        return (
            <>
                <div className="tasks">
                    <section className="outer-container flex-container">
                        <h6>+ new task</h6>
                    </section>

                    <section className="outer-container flex-container">
                        <div className="inner-container">
                            <h5>Taks 1</h5>
                            <p>Due date: 12/12/2020</p>
                        </div>
                        <div>
                            <CheckBox />
                        </div>

                    </section>

                    <section className="outer-container flex-container">
                        <div className="inner-container">
                            <h5>Taks 2</h5>
                            <p>Due date: 12/12/2020</p>
                        </div>
                        <div>
                            <CheckBox />
                        </div>

                    </section>
                </div>
            </>
        );
}