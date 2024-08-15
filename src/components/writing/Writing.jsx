import React from 'react';
import './Writing.css'; 

function Writing() {
    const partsOfSpeech = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

    const handleClick = (part) => {
        console.log(`Selected level: ${part}`);
    };

    return (
        <div className="writing-container">
            <h2>Please, select level</h2>
            <div className="buttons-container">
                {partsOfSpeech.map((part) => (
                    <button key={part} onClick={() => handleClick(part)} className="level-button">
                        {part}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Writing;