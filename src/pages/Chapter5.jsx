import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti';
import QuizQuestion from '../components/QuizQuestion';

const quizData = [
  {
    question: "1. When do we celebrate Independence Day?",
    options: ["26 January", "15 August", "2 October", "14 November"],
    correctAnswerIndex: 1
  },
  {
    question: "2. What happened on this day?",
    options: ["India became a republic", "India got independence from British rule", "Constitution was written", "First elections were held"],
    correctAnswerIndex: 1
  },
  {
    question: "3. Who was the first Prime Minister of India?",
    options: ["Mahatma Gandhi", "Subhas Chandra Bose", "Jawaharlal Nehru", "Sardar Patel"],
    correctAnswerIndex: 2
  },
  {
    question: "4. Who is known as the Father of the Nation?",
    options: ["Bhagat Singh", "Mahatma Gandhi", "Rajendra Prasad", "Lal Bahadur Shastri"],
    correctAnswerIndex: 1
  },
  {
    question: "5. Which place is famous for the Independence Day celebration in India?",
    options: ["Gateway of India", "Red Fort", "India Gate", "Parliament House"],
    correctAnswerIndex: 1
  },
  {
    question: "6. What do we call people who fought for India's freedom?",
    options: ["Soldiers", "Leaders", "Freedom Fighters", "Citizens"],
    correctAnswerIndex: 2
  }
];

export default function Chapter5() {
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  
  // Certificate specific state
  const [studentName, setStudentName] = useState('');
  const [showCertificate, setShowCertificate] = useState(false);
  const [windowDimension, setWindowDimension] = useState({ width: window.innerWidth, height: window.innerHeight });

  const detectSize = () => {
    setWindowDimension({ width: window.innerWidth, height: window.innerHeight });
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize);
    return () => window.removeEventListener('resize', detectSize);
  }, []);

  const handleNext = (isCorrect) => {
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setIsFinished(false);
    setShowCertificate(false);
    setStudentName('');
  }

  const handleGenerateCertificate = (e) => {
    e.preventDefault();
    if (studentName.trim()) {
      setShowCertificate(true);
    }
  };

  const isPerfectScore = score === quizData.length;

  return (
    <div className="glass-panel chapter-content delay-4 animate-slide-up" style={{ position: 'relative' }}>
      
      {showCertificate && (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 100 }}>
          <Confetti 
            width={windowDimension.width} 
            height={windowDimension.height} 
            colors={['#FF9933', '#FFFFFF', '#138808']}
            recycle={false}
            numberOfPieces={400}
            gravity={0.15}
          />
        </div>
      )}

      {!showCertificate && (
        <Link to="/" className="back-link">← Back to Modules</Link>
      )}
      
      {!showCertificate && (
        <h2 className="chapter-title" style={{ color: 'var(--navy)' }}>Chapter 5: Independence Day Quiz</h2>
      )}

      {!isFinished && (
        <div className="quiz-score">
          Score: {score} / {quizData.length}
        </div>
      )}

      <div className="quiz-container">
        {!isFinished ? (
          <QuizQuestion
            key={currentQuestionIndex}
            question={quizData[currentQuestionIndex].question}
            options={quizData[currentQuestionIndex].options}
            correctAnswerIndex={quizData[currentQuestionIndex].correctAnswerIndex}
            onNext={handleNext}
          />
        ) : (
          <div className="animate-fade-in text-center" style={{ textAlign: 'center', marginTop: '1rem', padding: '2rem', background: isPerfectScore ? '#e8f5e9' : 'rgba(255,255,255,0.7)', borderRadius: '16px' }}>
            
            {!isPerfectScore && (
              <>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--navy)' }}>
                  Quiz Complete!
                </h2>
                <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: '#555' }}>
                  You scored {score} out of {quizData.length}. Keep learning about our great nation!
                </p>
                <button onClick={restartQuiz} className="btn-primary">
                  Try Again
                </button>
              </>
            )}

            {isPerfectScore && !showCertificate && (
              <div className="animate-fade-in">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--green)' }}>
                  Perfect Score! 🏆
                </h2>
                <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#333' }}>
                  You are a true patriot! Enter your name below to claim your Certificate of Pride:
                </p>
                <form onSubmit={handleGenerateCertificate} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    style={{ padding: '1rem', fontSize: '1.2rem', borderRadius: '50px', border: '2px solid var(--navy)', width: '300px', textAlign: 'center' }}
                    required
                  />
                  <button type="submit" className="btn-primary">
                    Generate Certificate
                  </button>
                </form>
              </div>
            )}

            {isPerfectScore && showCertificate && (
              <div className="certificate-container animate-slide-up">
                <div className="certificate-inner">
                  <h1 className="cert-header">Certificate of Freedom</h1>
                  <p className="cert-awarded-to">This certificate is proudly awarded to</p>
                  <h2 className="cert-name">{studentName}</h2>
                  <p className="cert-reason">
                    For demonstrating excellent knowledge about India's history, culture, and Independence Day! You are a true little leader of our great nation. 🇮🇳 
                  </p>
                  <div className="cert-footer">
                    <div className="cert-signature">
                      President of India
                    </div>
                    <div className="cert-seal">
                      JAI<br/>HIND
                    </div>
                    <div className="cert-signature">
                      Teacher Day
                    </div>
                  </div>
                </div>
                
                <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                  <button onClick={() => window.print()} className="btn-primary" style={{ zIndex: 150 }}>
                    Print/Save PDF
                  </button>
                  <button onClick={restartQuiz} className="btn-outline" style={{ zIndex: 150, borderColor: 'var(--navy)', color: 'var(--navy)' }}>
                    Play Again
                  </button>
                </div>
              </div>
            )}
            
          </div>
        )}
      </div>
    </div>
  );
}
