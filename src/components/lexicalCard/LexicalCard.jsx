import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import WordCard from '../wordCard/WordCard';
import '../lexicalCard/LexicalCard.css';
import useLocalStorage from '../hooks/useLocalStorage';
import wordsData from '../../data/wordsData.json';
import '../../fonts/fonts.css';

function LexicalCard() {
    const { topic } = useParams();
    const words = wordsData[topic] || [];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [learnedCount, setLearnedCount] = useLocalStorage('learnedCount', 0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : words.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < words.length - 1 ? prevIndex + 1 : 0));
    };

    const handleShowTranslation = () => {
        setLearnedCount(learnedCount + 1);
    };

    useEffect (() => {
        const button = document.querySelector('.word-card button'); 
        if (button) {
            button.focus(); 
        }
    }, [currentIndex]);

    return (
        <div className="topic-words">
            <h2>{topic.charAt(0).toUpperCase() + topic.slice(1)}</h2>
            <p>Words learned this session: {learnedCount}</p>
            <div className="words-container">
                <button onClick={handlePrev}>&lt;</button>
                <WordCard word={words[currentIndex].word} meaning={words[currentIndex].meaning} onShowTranslation={handleShowTranslation} />
                <button onClick={handleNext}>&gt;</button>
            </div>
        </div>
    );
}

export default LexicalCard;