import React from "react";

const Player = ({
                    isPlaying,
                    currentTime,
                    duration,
                    handlePlayPause,
                    handlePrevious,
                    handleNext
                }) => {
    const calculateProgress = () => {
        if (duration) {
            const minutes = Math.floor(currentTime / 60);
            const seconds = Math.floor(currentTime % 60);
            return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
        }
        return "00:00";
    };

    return (
        <div className="music-player outer-container">
            <div className="player-controls">
                <div className="flex-container">
                    <button onClick={handlePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
                    <button onClick={handlePrevious}>Previous</button>
                    <button onClick={handleNext}>Next</button>
                </div>
                <div className="progress-bar">
                    <div className="progress" style={{ width: `${(currentTime / duration) * 100}%` }}></div>
                </div>
                <p>{calculateProgress()}</p>
            </div>
        </div>
    );
};

export default Player;
