import React, { useState } from 'react';
import './ui.css';
import Checked from "../../assets/checked.svg";

const Checkbox = () => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
        setIsChecked((prevState) => !prevState);
    };

    return (
        <label className="checkbox-container">
            <input type="checkbox" checked={isChecked} onChange={toggleCheckbox} />
            <span className={`checkbox-custom ${isChecked ? 'checked' : ''}`}>
        {isChecked && <img src={Checked} alt="" />}
      </span>
        </label>
    );
};

export default Checkbox;
