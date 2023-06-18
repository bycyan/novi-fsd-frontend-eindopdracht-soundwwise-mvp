import React, { useState } from 'react';

const EditPageDetailsModal = ({ pageDetails, onSave, onClose, children }) => {
    const [details, setDetails] = useState(pageDetails);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
    };

    const handleSave = () => {
        onSave(details);
        onClose();
    };

    return (
        <div className="modal overlay">
            <div className="modal-content">
                <h2>Edit Details</h2>
                <form>
                    {/*<label htmlFor="title">Title:</label>*/}
                    {/*<input*/}
                    {/*    type="text"*/}
                    {/*    id="title"*/}
                    {/*    name="title"*/}
                    {/*    value={details.title}*/}
                    {/*    onChange={handleChange}*/}
                    {/*/>*/}

                    {/*<label htmlFor="description">Description:</label>*/}
                    {/*<textarea*/}
                    {/*    id="description"*/}
                    {/*    name="description"*/}
                    {/*    value={details.description}*/}
                    {/*    onChange={handleChange}*/}
                    {/*></textarea>*/}

                    {/* Additional fields specific to your page details */}
                    {children}

                    <div className="modal-actions">
                        <button type="button" onClick={onClose}>
                            Cancel
                        </button>
                        <button type="button" onClick={handleSave}>
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditPageDetailsModal;
