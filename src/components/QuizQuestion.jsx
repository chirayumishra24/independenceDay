import React, { useState } from 'react';

export default function QuizQuestion({ question, options, correctAnswerIndex, onCorrectAnswer, onNext }) {
  const [selected, setSelected] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // We need to reset the selected state when the question changes
  // A simple way is to use a key on this component from the parent, 
  // but if not, we should listen to question changes.

  const handleSelect = (index) => {
    if (selected !== null) return; // Prevent changing answer
    
    setSelected(index);
    setIsAnimating(true);
    
    setTimeout(() => setIsAnimating(false), 500);

    const isCorrect = index === correctAnswerIndex;
    
    // Pass result to parent after a short delay for user to see the result
    setTimeout(() => {
      onNext(isCorrect);
    }, 1500);
  };

  const isCorrect = selected === correctAnswerIndex;

  return (
    <div className="question-block animate-slide-up">
      <h3 className="question-text">{question}</h3>
      <div className="options-grid">
        {options.map((option, index) => {
          let btnClass = "option-btn";
          if (selected !== null) {
            if (index === correctAnswerIndex) {
              btnClass += " correct"; // Always highlight correct answer
            } else if (index === selected && index !== correctAnswerIndex) {
              btnClass += " wrong"; // Highlight wrong choice
            }
          }

          return (
            <button
              key={index}
              className={btnClass}
              onClick={() => handleSelect(index)}
              disabled={selected !== null}
              style={{
                transform: isAnimating && index === selected && index !== correctAnswerIndex ? 'translateX(10px)' : 'none',
                transition: 'transform 0.1s'
              }}
            >
              <span>{String.fromCharCode(97 + index)}) {option}</span>
              {selected !== null && index === correctAnswerIndex && <span>✅</span>}
              {selected !== null && index === selected && index !== correctAnswerIndex && <span>❌</span>}
            </button>
          );
        })}
      </div>
      
      <div className={`feedback-text ${selected !== null ? (isCorrect ? 'correct animate-fade-in' : 'wrong animate-fade-in') : ''}`}>
        {selected !== null && (
          isCorrect ? 'Correct! Well done! 🎉' : 'Oops! Moving to next question...'
        )}
      </div>
    </div>
  );
}
