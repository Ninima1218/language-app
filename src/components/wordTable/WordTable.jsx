import React, { useContext, useState } from 'react';
import { WordsContext } from '../Context';
import { useNavigate, useParams} from 'react-router-dom';
import LoadingSpinner from '../loadingSpinner/LoadingSpinner';

function WordTable() {
    const { words, loading, error, addWord, updateWord, deleteWord } = useContext(WordsContext);
    const navigate = useNavigate();
    const { topic } = useParams()
    const topicWords = words[topic] || [];

    const [newWord, setNewWord] = useState({ word: '', meaning: '' });
    if (loading) return <LoadingSpinner />;
    if (error) return <div>{error}</div>;

    const handleAddWord = () => {
        if (newWord.word.trim() && newWord.meaning.trim()) {
            addWord(topic, newWord);
            setNewWord({ word: '', meaning: '' });
        } else {
            alert('Please fill in all fields.');
        }
    };

    const handleSave = () => {
        const isValid = topicWords.every(({ word, meaning }) => word.trim() && meaning.trim());
        if (isValid) {
            console.log('Words:', topicWords);
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
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {topicWords.map((wordObj, index) => (
                        <tr key={index}>
                            <td>
                                <input
                                    type="text"
                                    value={wordObj.word}
                                    onChange={(e) => updateWord(topic, index, { ...wordObj, word: e.target.value })}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={wordObj.meaning}
                                    onChange={(e) => updateWord(topic, index, { ...wordObj, meaning: e.target.value })}
                                />
                            </td>
                            <td>
                                <button onClick={() => deleteWord(topic, index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div>
                <input
                    type="text"
                    placeholder="New word"
                    value={newWord.word}
                    onChange={(e) => setNewWord({ ...newWord, word: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Meaning"
                    value={newWord.meaning}
                    onChange={(e) => setNewWord({ ...newWord, meaning: e.target.value })}
                />
                <button onClick={handleAddWord}>Add</button>
            </div>

            <button onClick={handleSave}>Save</button>

            <button onClick={() => navigate(`/cards/${topic}`)}>Go to Cards</button>
        </div>
    );
}

export default WordTable;
