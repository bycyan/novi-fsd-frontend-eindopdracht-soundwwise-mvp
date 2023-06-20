import React, { useState } from "react";

const UploadButton = ({ onUpload }) => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    const handleUpload = () => {
        if (file) {
            const formData = new FormData();
            formData.append("file", file);
            // You can customize the API endpoint and request method here
            // Example: axios.post("/api/upload", formData)
            // Replace "/api/upload" with your actual API endpoint

            // Simulating the upload process with a timeout
            setTimeout(() => {
                // Assuming the upload was successful and you receive a response from the server
                const response = {
                    url: "https://example.com/path/to/uploaded/file.jpg",
                };

                onUpload(response); // Pass the uploaded file URL to the callback function
                setFile(null); // Clear the selected file
            }, 2000);
        }
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button onClick={handleUpload} disabled={!file}>
                Upload
            </button>
        </div>
    );
};

export default UploadButton;