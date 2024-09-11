import React from 'react';
import './Listening.css';
import '../../fonts/fonts.css';
import SimpleYouTube from './SimpleYouTube';

const Listening = () => {
    return (
        <div className="listening-container">
            <h2>Listening Practice</h2>
            <div className="videos-grid">
                <SimpleYouTube 
                    url="https://youtu.be/ry9SYnV3svc?si=0FPL51iipFT05nCo" 
                    title="Small Talk | Everyday English" 
                />
                <SimpleYouTube 
                    url="https://youtu.be/H31UA2EQSRc?si=JIIBicLdRRCziNS1" 
                    title="How can I help you? | English for Real Life"
                />
                <SimpleYouTube 
                    url="https://youtu.be/TTn0J7MT5lU?si=xRy0Tzk4MIqBeBkJ" 
                    title="Daily Routines | Travel"
                />
                <SimpleYouTube 
                    url="https://youtu.be/zqS_KAHEVTY?si=dV_fOl1ipaSqO9sR" 
                    title="English for Reastaurants | Vocabulary for workers and clients"
                />
            </div>
        </div>
    );
};

export default Listening;