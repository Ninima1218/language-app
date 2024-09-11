import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import wordStore from '../../stores/wordStore'; 
import { useNavigate, useParams } from 'react-router-dom';
import '../../fonts/fonts.css';
import wordsData from '../../data/wordsData.json';
import '../wordTable/WordTable.css';

const WordTable = observer(() => {
    const { topic } = useParams(); 
    const navigate = useNavigate();
    const [words, setWords] = useState([]);

    useEffect(() => {
        const topicWords = wordsData[topic] || [];
        setWords(topicWords); 
        wordStore.setWordsForTopic(topic, topicWords);
    }, [topic]);

    const handleAddWord = () => {
        const newWord = { word: '', meaning: '' };
        setWords([...words, newWord]);
    };

    const handleSave = () => {
        const isValid = words.every(({ word, meaning }) => word.trim() && meaning.trim());
        if (isValid) {
            wordStore.setWordsForTopic(topic, words);
        } else {
            alert('Please fill in all fields.');
        }
    };

    const handleDeleteWord = (index) => {
        const updatedWords = words.filter((_, i) => i !== index);
        setWords(updatedWords);
    };

    return (
        <div>
            <h2>{topic ? topic.charAt(0).toUpperCase() + topic.slice(1) : 'Table'}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Word</th>
                        <th>Meaning</th>
                        <th>Action</th>
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
                                        const updatedWords = [...words];
                                        updatedWords[index].word = e.target.value;
                                        setWords(updatedWords);
                                    }}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={wordObj.meaning}
                                    onChange={(e) => {
                                        const updatedWords = [...words];
                                        updatedWords[index].meaning = e.target.value;
                                        setWords(updatedWords);
                                    }}
                                />
                            </td>
                            <td>
                                <button id='delete' onClick={() => handleDeleteWord(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handleAddWord}>Add</button>
            <button onClick={handleSave}>Save</button>
            <button onClick={() => navigate(`/cards/${topic}`)}>Go to Cards</button>
        </div>
    );
});


export default WordTable;
