import React from 'react';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';
import LexicalTopics from './components/lexicalTopics/LexicalTopics';
import LexicalCard from './components/lexicalCard/LexicalCard';
import WordTable from './components/wordTable/WordTable';
import Reading from './components/reading/Reading';
import Listening from './components/listening/Listening';
import Writing from './components/writing/Writing';
import Grammar from './components/grammar/Grammar';
import Missing from './components/missing/Missing';
import wordsData from './data/wordsData.json';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <main>
                <Routes>
                    <Route path="/" element={<Menu />} />
                    <Route path="/vocabulary" element={<LexicalTopics />} />
                    <Route path="/vocabulary/:topic" element={<WordTable words={wordsData} />} />
                    <Route path="/cards/:topic" element={<LexicalCard />} />
                    <Route path="*" element={<Missing />} />
                    <Route path="/grammar" element={<Grammar />} />
                    <Route path="/listening" element={<Listening />} />
                    <Route path="/reading" element={<Reading />} />
                    <Route path="/writing" element={<Writing />} />
                </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;