import React, { useState } from "react";
import CheckBox from "../../components/ui/CheckBox.jsx";
import Modal from "../../utils/Modal.jsx";
import "./Tasks.css";
import filter from "../../assets/filter.svg";

export default function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [isFilterActive, setIsFilterActive] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
        if (isFilterActive) {
            setIsFilterActive(false);
        }
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

    const toggleFilter = () => {
        setIsFilterActive(!isFilterActive);
    };

    console.log("tasks", tasks);

    const filteredTasks = isCollapsed && isFilterActive
        ? tasks.filter((task) => !task.isChecked)
        : tasks;

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const saveNewTask = (name, dueDate) => {
        const newTask = {
            name,
            dueDate,
            isChecked: false
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
                        <div onClick={toggleFilter} className="task-filter">
                            <img src={filter} alt="" />
                        </div>
                    </div>
                </section>

                {filteredTasks.map((task, index) => (
                    <section className="outer-container" key={index}>
                        <div className="flex-container task-item">
                            <div>
                                <h5>{task.name}</h5>
                                <p>Due date: {task.dueDate}</p>
                            </div>
                            <div>
                                <CheckBox
                                    checked={task.isChecked}
                                    onChange={() => {
                                        handleTaskCheck(index);
                                        console.log("Checkbox clicked:", task);
                                    }}
                                />
                            </div>
                        </div>
                    </section>
                ))}

                <Modal show={showModal} onClose={toggleModal} onSave={saveNewTask} />
            </div>
        </>
    );
}
