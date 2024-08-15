import React, { useEffect, useState } from 'react';
import './Reading.css';

function Reading() {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        import('../../data/storiesData.json')
            .then((data) => {
                setStories(data.stories);
            })
            .catch((error) => console.error("Error loading stories:", error));
    }, []);

    return (
        <div className="reading-container">
            {stories.map((story, index) => (
                <div key={index} className="story-box">
                    <h3>{story.title}</h3>
                    <p>{story.content}</p>
                </div>
            ))}
        </div>
    );
}

export default Reading;