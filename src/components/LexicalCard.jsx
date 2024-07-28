import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import WordCard from './WordCard';
import '../styles/LexicalCard.css';

const wordsData = {
    family: [
        { word: 'Father', meaning: 'Отец' },
        { word: 'Mother', meaning: 'Мать' },
        { word: 'Sister', meaning: 'Сестра' },
        { word: 'Brother', meaning: 'Брат' },
        { word: 'Grandmother', meaning: 'Бабушка' },
        { word: 'Grandfather', meaning: 'Дедушка' },
        { word: 'Uncle', meaning: 'Дядя' },
        { word: 'Aunt', meaning: 'Тётя' },
    ],
    city: [
        { word: 'Building', meaning: 'Здание' },
        { word: 'Street', meaning: 'Улица' },
        { word: 'House', meaning: 'Дом' },
        { word: 'Shop', meaning: 'Магазин' },
        { word: 'Bank', meaning: 'Банк' },
        { word: 'Restaurant', meaning: 'Ресторан' },
        { word: 'Cafe', meaning: 'Кафе' },
    ],
    food: [
        { word: 'Apple', meaning: 'Яблоко' },
        { word: 'Bread', meaning: 'Хлеб' },
        { word: 'Milk', meaning: 'Молоко' },
        { word: 'Meat', meaning: 'Мясо' },
        { word: 'Fish', meaning: 'Рыба' },
        { word: 'Butter', meaning: 'Сливочное масло' },
        { word: 'Soup', meaning: 'Суп' },
        { word: 'Oil', meaning: 'Подсолнечное масло' },
    ],
    people: [
        { word: 'Man', meaning: 'Мужчина' },
        { word: 'Woman', meaning: 'Женщина' },
        { word: 'Seller', meaning: 'Продавец' },
        { word: 'Actress', meaning: 'Актриса' },
        { word: 'Manager', meaning: 'Менеджер' },
        { word: 'Doctor', meaning: 'Врач' },
        { word: 'Teacher', meaning: 'Учитель' },
    ],
};

function LexicalCard() {
    const { topic } = useParams();
    const words = wordsData[topic] || [];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : words.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < words.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <div className="topic-words">
            <h2>{topic.charAt(0).toUpperCase() + topic.slice(1)}</h2>
            <div className="words-container">
                <button onClick={handlePrev}>&lt;</button>
                <WordCard word={words[currentIndex]?.word} meaning={words[currentIndex]?.meaning} />
                <button onClick={handleNext}>&gt;</button>
            </div>
        </div>
    );
}

export default LexicalCard;