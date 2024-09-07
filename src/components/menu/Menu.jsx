import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import girls from '../images/girls.png';
import vocabularyIcon from '../images/vocabulary.png';
import grammarIcon from '../images/grammar.png';
import listeningIcon from '../images/listening.png';
import writingIcon from '../images/writing.png';
import readingIcon from '../images/reading.png';
import '../../fonts/fonts.css';

function Menu() {
    return (
        <div className="menu">
            <div className="menu-links">
            <h2>Select topic:</h2>
            <ul>
                <li>
                    <Link to="/vocabulary">
                    <img src={vocabularyIcon} alt="Vocabulary" className="icon" />Vocabulary
                    </Link>
                </li>
                <li>
                    <Link to="/grammar">
                    <img src={grammarIcon} alt="Grammar" className="icon" />Grammar
                    </Link>
                </li>
                <li>
                    <Link to="/listening">
                    <img src={listeningIcon} alt="Listening" className="icon" />Listening
                    </Link>
                </li>
                <li>
                    <Link to="/writing">
                    <img src={writingIcon} alt="Writing" className="icon" />Writing
                    </Link>
                </li>
                <li>
                    <Link to="/reading">
                    <img src={readingIcon} alt="Reading" className="icon" />Reading
                    </Link>
                </li>
            </ul> 
            </div>

            <div className="menu-image">
                <img className="girls" src={girls} alt="girls" />
            </div>
        </div>
    );
}

export default Menu;