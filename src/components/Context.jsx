import React, { createContext, useState, useEffect } from 'react';
import wordsData from '../data/wordsData.json'; 

// Create the context
export const WordsContext = createContext();

// Create a provider 
export const WordsProvider = ({ children }) => {
    const [words, setWords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWords = async () => {
            try {
                setWords(wordsData);
            } catch (err) {
                setError('Failed to fetch words data');
            } finally {
                setLoading(false);
            }
        };
        
        fetchWords();
    }, []);

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
