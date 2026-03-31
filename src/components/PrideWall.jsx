import React, { useState } from 'react';

const COLORS = ['#FF9933', '#138808', '#000080', '#d32f2f', '#1976d2', '#388e3c', '#f57c00'];

export default function PrideWall() {
  const [words, setWords] = useState([
    { text: 'Freedom', color: COLORS[0], x: 20, y: 30 },
    { text: 'Unity', color: COLORS[1], x: 60, y: 20 },
    { text: 'Culture', color: COLORS[2], x: 40, y: 70 },
    { text: 'Strength', color: COLORS[3], x: 75, y: 60 },
  ]);
  const [inputWord, setInputWord] = useState('');

  const handleAddWord = (e) => {
    e.preventDefault();
    if (!inputWord.trim()) return;

    // Randomize position and color for the new word
    const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    const randomX = Math.floor(Math.random() * 80) + 10; // 10% to 90%
    const randomY = Math.floor(Math.random() * 80) + 10;

    setWords([...words, { text: inputWord.trim(), color: randomColor, x: randomX, y: randomY }]);
    setInputWord('');
  };

  return (
    <div className="pride-wall-container">
      <div className="pride-wall">
        {words.map((word, index) => (
          <div
            key={index}
            className="word-bubble"
            style={{
              position: 'absolute',
              left: `${word.x}%`,
              top: `${word.y}%`,
              backgroundColor: word.color,
              // Add slight random rotation for playfulness
              transform: `rotate(${Math.floor(Math.random() * 20) - 10}deg)`
            }}
          >
            {word.text}
          </div>
        ))}
      </div>

      <form className="word-input-group" onSubmit={handleAddWord}>
        <input
          type="text"
          placeholder="Type a word about India..."
          value={inputWord}
          onChange={(e) => setInputWord(e.target.value)}
          maxLength={15}
        />
        <button type="submit" className="btn-primary">Add Word</button>
      </form>
    </div>
  );
}
