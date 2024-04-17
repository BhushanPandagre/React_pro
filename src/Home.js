




import React, { useState } from 'react';
import './Home.css'; // Import the CSS file for the main styles


const wordsData = [
  { id: 1, word: 'Jump', type: 'Action' },
  { id: 2, word: 'Book', type: 'Non-Action' },
  { id: 3, word: 'Run', type: 'Action' },
  { id: 4, word: 'Table', type: 'Non-Action' },
  { id: 5, word: 'Think', type: 'Action' },
  { id: 6, word: 'Chair', type: 'Non-Action' },
  { id: 7, word: 'Speak', type: 'Action' },
  { id: 8, word: 'Lamp', type: 'Non-Action' },
  { id: 9, word: 'Walk', type: 'Action' },
  { id: 10, word: 'Pen', type: 'Non-Action' },
  { id: 11, word: 'Dance', type: 'Action' },
  { id: 12, word: 'Tree', type: 'Non-Action' },
  { id: 13, word: 'Swim', type: 'Action' },
  { id: 14, word: 'Car', type: 'Non-Action' },
  { id: 15, word: 'Write', type: 'Action' },
  { id: 16, word: 'Chair', type: 'Non-Action' },
  // Add more words as needed
];

const Card = ({ id, word, type }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleCheckAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <div className="card">
      <h2>{word}</h2>
      {!showAnswer && (
        <button 
          className="check-answer-button" 
          onClick={handleCheckAnswer}
        >
          Check Answer
        </button>
      )}
      {showAnswer && (
        <p className="answer">{type === 'Action' ? `${word} is an action word.` : `${word} is a non-action word.`}</p>
      )}
    </div>
  );
};

const Home = () => {
  return (
    <div className="app">
      <header className="header">
        <h1>Word Cards</h1>
        <p>Learn Action and Non-Action Words</p>
      </header>
      <div className="card-container">
        {wordsData.map(word => (
          <Card key={word.id} id={word.id} word={word.word} type={word.type} />
        ))}
      </div>
      <footer className="footer">
        <div className="footer-content">
          <p>Created By: Bhushan Pandagre</p>
          <div className="separator"></div>
          <p>Concept By: Gaurav Chourasiya Sir</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
