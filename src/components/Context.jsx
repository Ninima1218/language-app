import React, { createContext, useState, useEffect } from 'react';
import wordsData from '../data/wordsData.json'; // Adjust the path as needed

// Create the context
export const WordsContext = createContext();

// Create a provider component
export const WordsProvider = ({ children }) => {
    const [words, setWords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch the words data on component mount
    useEffect(() => {
        const fetchWords = async () => {
            try {
                // Simulate fetching data from a server
                setWords(wordsData);
            } catch (err) {
                setError('Failed to fetch words data');
            } finally {
                setLoading(false);
            }
        };
        
        fetchWords();
    }, []);

    // Methods to modify words
    const addWord = (newWord) => setWords([...words, newWord]);

    const updateWord = (index, updatedWord) => {
        const updatedWords = [...words];
        updatedWords[index] = updatedWord;
        setWords(updatedWords);
    };

    const deleteWord = (index) => {
        const updatedWords = words.filter((_, i) => i !== index);
        setWords(updatedWords);
    };

    return (
        <WordsContext.Provider value={{ words, loading, error, addWord, updateWord, deleteWord }}>
            {children}
        </WordsContext.Provider>
    );
};
