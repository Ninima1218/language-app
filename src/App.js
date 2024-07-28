import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import LexicalTopics from './components/LexicalTopics';
import LexicalCard from './components/LexicalCard';
import Reading from './components/Reading';
import Listening from './components/Listening';
import Writing from './components/Writing';
import Grammar from './components/Grammar';
import Missing from './components/Missing';
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
                    <Route path="/vocabulary/:topic" element={<LexicalCard />} />
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