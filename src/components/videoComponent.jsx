import React from "react";
import YouTube from "react-youtube";

const VideoComponent = () => {
    const opts = {
        height: '390',
        width: '720',
        playerVars: {
            autoplay: 0,
        },
    };

    const onReady = (event) => {
        event.target.pauseVideo();
    };

    return (
        <div className="bg-white min-h-screen flex flex-col items-center justify-center space-y-6">
            <h1 className="text-5xl font-bold text-gray-900 sm:text-4xl mb-5">
                Pengen tau gimana <span className="text-purple">proses</span> aku bikin website ini? &#128071;
            </h1>
            <div className="mockup-browser bg-base-300 border">
                <div className="mockup-browser-toolbar">
                    <div className="input">VIRAL CARA BUAT SUPRISE CEWE</div>
                </div>
                <div className="bg-base-200 flex justify-center px-2 py-10">
                    <YouTube videoId="EYaa8XFKx_w" opts={opts} onReady={onReady} />
                </div>
            </div>
        </div>
    );
};

export default VideoComponent;
