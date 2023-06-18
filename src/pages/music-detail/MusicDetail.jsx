import React, { useEffect, useRef, useState } from "react";
import "./MusicDetail.css";
import song from "../../assets/song.mp3";
import song_2 from "../../assets/song_2.mp3";
import threeDots from "../../assets/three-dots-vertical.svg";
import EditPageDetailsModal from "../../utils/EditPageDetailsModal.jsx";
import back from "../../assets/back-left.svg";

export default function MusicDetail() {
    const [currentSongIndex, setCurrentSongIndex] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRefs = [useRef(null), useRef(null)]; // Add more refs for additional songs

    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal open/close

    const [pageDetails, setPageDetails] = useState({
        pageTitle: "Music Project",
        pageImage: "https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/06/fdcd5a_d8dd6d540bd84e4e9df8cbcfa376ce0dmv2.jpg?resize=1000%2C1000&ssl=1",
        pageDescription: "Artist"});


    useEffect(() => {
        const audioElement = audioRefs[currentSongIndex]?.current;

        if (audioElement) {
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
        }
    }, [currentSongIndex]);

    const handleClick = (songIndex) => {
        if (currentSongIndex === songIndex && isPlaying) {
            audioRefs[currentSongIndex]?.current.pause();
        } else {
            if (currentSongIndex !== null && currentSongIndex !== songIndex) {
                audioRefs[currentSongIndex]?.current.pause();
            }
            setCurrentSongIndex(songIndex);
            audioRefs[songIndex]?.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const calculateProgress = () => {
        if (duration) {
            const minutes = Math.floor(currentTime / 60);
            const seconds = Math.floor(currentTime % 60);
            return `${minutes.toString().padStart(2, "0")}:${seconds
                .toString()
                .padStart(2, "0")}`;
        }
        return "00:00";
    };

    const handleSave = (details) => {
        // Handle saving the updated details
        console.log(details);
        setIsModalOpen(false); // Close the modal after saving
    };

    const handleClose = () => {
        setIsModalOpen(false); // Close the modal
    };

    const openModal = () => {
        setIsModalOpen(true); // Open the modal
    };

    return (
        <>
            <div className="backdrop">
            <div className="music-detail-nav">
                <section className="flex-container upper-nav">
                    <div >
                        <a href="javascript:history.back()">
                        <img className="backdrop-icons left" src={back} alt=""/></a>
                    </div>
                    {/* Open the modal */}
                    <a onClick={openModal}>
                        <img className="backdrop-icons right" src={threeDots} alt="" />
                    </a>
                </section>
            </div>
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
                    <h5>{pageDetails.pageTitle}</h5>
                    <h6>{pageDetails.pageDescription}</h6>
                </section>

                <section className="outer-container">
                    <h5>songs</h5>
                    {/**/}
                    <div
                        className={`inner-container flex-container music-detail-item ${
                            isPlaying && currentSongIndex === 0 ? "playing" : ""
                        }`}
                        onClick={() => handleClick(0)}
                    >
                        <img src="https://f4.bcbits.com/img/a3177371765_65" alt="" />
                        <div className="info">
                            <h5 className={isPlaying && currentSongIndex === 0 ? "playing" : ""}>
                                Mid Saigon
                            </h5>
                            <p className={isPlaying && currentSongIndex === 0 ? "playing" : ""}>
                                Ivan Ave
                            </p>
                        </div>

                        <div>
                            <p>{calculateProgress()}</p>
                        </div>
                        <audio ref={audioRefs[0]} src={song} />
                    </div>
                </section>

                <section className="outer-container">
                    <h5>content</h5>

                    <section className="post-list">
                        <a href="" className="post">
                            <figure className="post-image">
                                <img src="https://picsum.photos/300?image=600" alt="" />
                            </figure>
                            <span className="post-overlay">
                <p>
                  <span className="post-likes">150</span>
                </p>
              </span>
                        </a>

                        {/* More post items */}
                    </section>
                </section>
            </div>

            <div>
                {/* Render your page content */}
                {/*<h1>{pageDetails.pageTitle}</h1>*/}
                {/*<p>{pageDetails.pageDescription}</p>*/}

                {/* Render the modal */}
                {isModalOpen && (
                    <EditPageDetailsModal
                        pageDetails={pageDetails}
                        onSave={handleSave}
                        onClose={handleClose}
                    >
                        {/* Inject page-specific fields */}
                        <div>
                            <label htmlFor="pageImage">Image:</label>
                            <input
                                type="image"
                                id="pageImage"
                                name="pageImage"
                                value={pageDetails.pageImage}
                                onChange={(e) =>
                                    setPageDetails({
                                        ...pageDetails,
                                        pageImage: e.target.value,
                                    })
                                }
                            />

                        </div>


                        <div>
                            <label htmlFor="pageTitle">Project:</label>
                            <input
                                type="text"
                                id="pageTitle"
                                name="pageTitle"
                                value={pageDetails.pageTitle}
                                onChange={(e) =>
                                    setPageDetails({
                                        ...pageDetails,
                                        pageTitle: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label htmlFor="pageDescription">Artist:</label>
                            <input
                                id="pageDescription"
                                name="pageDescription"
                                value={pageDetails.pageDescription}
                                onChange={(e) =>
                                    setPageDetails({
                                        ...pageDetails,
                                        pageDescription: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </EditPageDetailsModal>
                )}
            </div>
        </>
    );
}
