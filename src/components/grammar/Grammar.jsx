import React from 'react';
import './Grammar.css'; 

function Grammar() {
    const partsOfSpeech = ['Nouns', 'Verbs', 'Adjectives', 'Adverbs', 'Pronouns', 'Prepositions', 'Conjunctions', 'Interjections'];

    const handleClick = (part) => {
        console.log(`Selected part of speech: ${part}`);
    };

    return (
        <div className="grammar-container">
            <h2>Parts of Speech</h2>
            <div className="buttons-container">
                {partsOfSpeech.map((part) => (
                    <button key={part} onClick={() => handleClick(part)} className="speech-button">
                        {part}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Grammar;