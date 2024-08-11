import React, { useState, useEffect } from 'react';
import '../wordCard/WordCard.css';

function WordCard({ word, meaning, onShowTranslation }) {
    const [showTranslation, setShowTranslation] = useState(false);

    const handleTranslateClick = () => {
        setShowTranslation(true);
        onShowTranslation();
    };

    useEffect(() => {
        setShowTranslation(false);
    }, [word]);

    return (
        <div className="word-card">
            <h3>{word}</h3>
            {showTranslation && <p>{meaning}</p>}
            {!showTranslation && (
                <button onClick={handleTranslateClick}>Translate</button>
            )}
        </div>
    );
}

export default WordCard;