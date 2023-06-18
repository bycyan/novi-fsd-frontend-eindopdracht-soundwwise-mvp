import React, { useState } from "react";
import "./utils.css";

const Modal = ({ show, onClose, onSave }) => {
    const [name, setName] = useState("");
    const [dueDate, setDueDate] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleDateChange = (event) => {
        setDueDate(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSave(name, dueDate);
    };

    if (!show) {
        return null;
    }

    return (
        <div className="outer-container modal">
            <div className="modal-content ">
                <p className="form-label">Add New Task</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">
                            Task Name:
                            <input
                                className="form-input"
                                type="text"
                                value={name}
                                onChange={handleNameChange}
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label className="form-label">
                            Due Date:
                            <input
                                className="form-input"
                                type="date"
                                value={dueDate}
                                onChange={handleDateChange}
                            />
                        </label>
                    </div>
                    <button className="form-submit-btn" type="submit">Save</button>
                    <button className="form-submit-btn" type="button" onClick={onClose}>
                        Cancel
                    </button>
                </form>
            </div>
        </div>

    );
};

export default Modal;
