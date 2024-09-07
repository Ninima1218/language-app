import React, { useState, useEffect } from 'react';
import './Listening.css';
import '../../fonts/fonts.css';

function Listening() {
    const [mediaItems, setMediaItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMedia = async () => {
            try {
                const response = await fetch('https://learningenglish.voanews.com/podcasts');
                const data = await response.json();
                setMediaItems(data?.items || []); 
                setLoading(false);
            } catch (error) {
                console.error("Error fetching media items:", error);
                setLoading(false);
            }
        };

        fetchMedia();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Listening Practice</h2>
            <div className="media-container">
                {mediaItems.map((item, index) => (
                    <div key={index} className="media-item">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        {item.mediaType === 'video' ? (
                            <video controls>
                                <source src={item.mediaUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <audio controls>
                                <source src={item.mediaUrl} type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Listening;
