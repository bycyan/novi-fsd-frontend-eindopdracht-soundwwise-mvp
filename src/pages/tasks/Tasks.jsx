import React, { useState } from "react";
import CheckBox from "../../components/ui/CheckBox.jsx";
import Modal from "../../utils/Modal.jsx";
import "./Tasks.css";
import filter from "../../assets/filter.svg";

export default function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleTaskCheck = (index) => {
        setTasks((prevTasks) => {
            const updatedTasks = [...prevTasks];
            updatedTasks[index] = {
                ...updatedTasks[index],
                isChecked: !updatedTasks[index].isChecked
            };
            return updatedTasks;
        });

        if (!isCollapsed) {
            setIsCollapsed(true);
        }
    };

    const filteredTasks = isCollapsed
        ? tasks.filter((task) => !task.isChecked)
        : tasks;

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const saveNewTask = (name, dueDate) => {
        const newTask = {
            name,
            dueDate,
            isChecked: false,
        };
        setTasks([...tasks, newTask]);
        toggleModal();
    };

    return (
        <>
            <div className="tasks-container">
                <section className="outer-container">
                    <div className="flex-container tasks">
                        <div className="new-task-button">
                            <h6 onClick={toggleModal}>+ new task</h6>
                        </div>
                        <div onClick={toggleCollapse} className="task-filter">
                            <img src={ filter } alt=""/>
                        </div>

                    </div>
                </section>

                {filteredTasks.map((task, index) => (
                    (!isCollapsed || !task.isChecked) && (
                        <section
                            className="outer-container"
                            key={index}
                            style={{ display: task.isChecked ? "none" : "block" }}
                        >
                            <div className="flex-container task-item">
                                <div>
                                    <h5>{task.name}</h5>
                                    <p>Due date: {task.dueDate}</p>
                                </div>
                                <div>
                                    <CheckBox
                                        checked={task.isChecked}
                                        onChange={() => handleTaskCheck(index)}
                                    />
                                </div>
                            </div>
                        </section>
                    )
                ))}

                <Modal
                    show={showModal}
                    onClose={toggleModal}
                    onSave={saveNewTask}
                />
            </div>
        </>
    );
}
