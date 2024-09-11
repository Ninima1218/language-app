import React from 'react';
import ReactPlayer from 'react-player/youtube';

const SimpleYouTube = ({ url, title }) => {
    return (
        <div className="youtube-wrapper">
            <h3>{title}</h3> 
            <ReactPlayer
                url={url}
                light={true}
                playing={true}
                controls={true}
                width="100%"
                height="100%"
            />
        </div>
    );
};

export default SimpleYouTube;