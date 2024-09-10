import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import wordStore from '../../stores/wordStore'; 
import { useNavigate, useParams } from 'react-router-dom';
import '../../fonts/fonts.css';
import wordsData from '../../data/wordsData.json';

const WordTable = observer(() => {
    const { topic } = useParams(); 
    const navigate = useNavigate();
    const [words, setWords] = useState([]);

    useEffect(() => {
        const topicWords = wordsData[topic] || [];
        setWords(topicWords); 
        wordStore.setWordsForTopic(topic, topicWords); // Правильное использование метода
    }, [topic]);

    const handleAddWord = () => {
        const newWord = { word: '', meaning: '' };
        wordStore.addWord(topic, newWord);
    };

    const handleSave = () => {
        const isValid = words.every(({ word, meaning }) => word.trim() && meaning.trim());
        if (isValid) {
            console.log('Words:', words);
            wordStore.saveToServer(); // Сохраняем на сервере
        } else {
            alert('Please fill in all fields.');
        }
    };

    return (
        <div>
            <h2>{topic ? topic.charAt(0).toUpperCase() + topic.slice(1) : 'Table'}</h2>
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
                                    onChange={(e) => wordStore.updateWord(topic, index, { ...wordObj, word: e.target.value })} 
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={wordObj.meaning}
                                    onChange={(e) => wordStore.updateWord(topic, index, { ...wordObj, meaning: e.target.value })}
                                />
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
