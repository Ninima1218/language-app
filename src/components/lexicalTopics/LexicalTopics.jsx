import React from 'react';
import { Link } from 'react-router-dom';
import '../lexicalTopics/LexicalTopics.css';
import '../../fonts/fonts.css';

function LexicalTopics() {
    return (
        <div className="lexical-topics">
            <h2>Lexical Topics:</h2>
            <ul>
                <li>
                    <Link to="/vocabulary/family">Family</Link>
                </li>
                <li>
                    <Link to="/vocabulary/city">City</Link>
                </li>
                <li>
                    <Link to="/vocabulary/food">Food</Link>
                </li>
                <li>
                    <Link to="/vocabulary/people">People</Link>
                </li>
            </ul>
        </div>
    );
}

export default LexicalTopics;