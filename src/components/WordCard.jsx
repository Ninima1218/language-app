import React, { useState } from 'react';
import '../styles/WordCard.css';

function WordCard({ word, meaning }) {
    const [showMeaning, setShowMeaning] = useState(false);

    return (
        <div className="word-card" onClick={() => setShowMeaning(!showMeaning)}>
            <p className="word">{word}</p>
            {showMeaning && <p className="meaning">{meaning}</p>}
        </div>
    );
}

export default WordCard;