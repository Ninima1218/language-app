import React, { useState } from 'react';
import wordsData from '../../data/wordsData.json';

function WordTable({ topic }) {
    const [words, setWords] = useState(wordsData[topic] || []);

    const handleAddWord = () => {
        const newWord = { word: '', meaning: '' };
        setWords([...words, newWord]);
    };

    const handleSave = () => {
        const isValid = words.every(({ word, meaning }) => word.trim() && meaning.trim());
        if (isValid) {
            console.log('Words:', words);
            
        } else {
            alert('Please fill in all fields.');
        }
    };

    return (
        <div>
            <h2>{topic ? topic.charAt(0)?.toUpperCase() + topic?.slice(1): 'Table'}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Word</th>
                        <th>Meaning</th>
                    </tr>
                </thead>
                <tbody>
                    {words.map((wordObj, index) => (
                        <tr key={index}>
                            <td>
                                <input
                                    type="text"
                                    value={wordObj.word}
                                    onChange={(e) => {
                                        const newWords = [...words];
                                        newWords[index].word = e.target.value;
                                        setWords(newWords);
                                    }}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={wordObj.meaning}
                                    onChange={(e) => {
                                        const newWords = [...words];
                                        newWords[index].meaning = e.target.value;
                                        setWords(newWords);
                                    }}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handleAddWord}>Add</button>
            <button onClick={handleSave}>Save</button>
        </div>
    );
}


export default WordTable;
