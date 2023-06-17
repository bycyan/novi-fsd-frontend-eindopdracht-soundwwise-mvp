import React, { useRef, useState, useEffect } from "react";
import "./MusicDetail.css";
import Logo from "../../assets/soundwwise-logo.png";
import song from "../../assets/song.mp3";
import threeDots from "../../assets/three-dots.svg";
export default function MusicDetail() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);

    useEffect(() => {
        const audioElement = audioRef.current;

        const handleTimeUpdate = () => {
            setCurrentTime(audioElement.currentTime);
        };

        const handleLoadedData = () => {
            setDuration(audioElement.duration);
        };

        audioElement.addEventListener("timeupdate", handleTimeUpdate);
        audioElement.addEventListener("loadeddata", handleLoadedData);

        return () => {
            audioElement.removeEventListener("timeupdate", handleTimeUpdate);
            audioElement.removeEventListener("loadeddata", handleLoadedData);
        };
    }, []);

    const handleClick = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const calculateProgress = () => {
        if (duration) {
            return `${(currentTime / duration) * 100}%`;
        }
        return "0%";
    };

    return (
        <>
            <div className="music-detail-nav back">
                <section className="flex-container upper-nav">
                    <a href="javascript:history.back()">
                        <p>back</p>
                    </a>
                    <img src={threeDots} alt="" />
                </section>
            </div>

            <div className="music-detail-cover-img">
                <img
                    src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&ssl=1"
                    alt=""
                />
            </div>

            <div>
                <div className="music-cover-img">
                    <img
                        src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&ssl=1"
                        alt=""
                    />
                </div>

                <section className="outer-container music-detail-header-section">
                    <h5>Demo Ep</h5>
                    <h6>Francies</h6>
                </section>

                <section className="outer-container music-detail-experience-section">
                    <h5>songs</h5>

                    <div
                        className={`inner-container flex-container music-item ${
                            isPlaying ? "playing" : ""
                        }`}
                        onClick={handleClick}
                    >
                        <img src="https://f4.bcbits.com/img/a3177371765_65" alt="" />
                        <div>
                            <h5 className={isPlaying ? "playing" : ""}>Mid Saigon</h5>
                            <p className={isPlaying ? "playing" : ""}>Ivan Ave</p>
                        </div>
                        <audio ref={audioRef} src={song} />
                    </div>
                    <div
                        className="playhead-indicator"
                        style={{ width: calculateProgress() }}
                    ></div>
                </section>

                <section className="outer-container">
                    <h4>content</h4>
                </section>
            </div>
        </>
    );
}
