import React from 'react';
import { Link } from 'react-router-dom';
import PrideWall from '../components/PrideWall';

export default function Chapter1() {
  return (
    <div className="glass-panel chapter-content delay-1 animate-slide-up">
      <Link to="/" className="back-link">← Back to Modules</Link>
      
      <h2 className="chapter-title" style={{ color: '#d67a21' }}>Chapter 1: Freedom Feeling</h2>
      
      <div className="img-container">
        <img src="https://login.skillizee.io/s/articles/69cb807a0d556400b7229cbf/images/image-20260331133625-1.jpeg" alt="Freedom Feeling Board" />
      </div>
      
      <div className="img-container" style={{ maxWidth: '600px', margin: '1rem auto' }}>
        <img src="https://login.skillizee.io/s/articles/69cb807a0d556400b7229cbf/images/image-20260331133625-2.jpeg" alt="Children drawing" />
      </div>

      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <h3 className="title-sub" style={{ color: 'var(--navy)' }}>Activity: "What is Freedom?"</h3>
        <p>What does freedom mean to you? Answer in one line or one word.</p>
        <p style={{ fontStyle: 'italic', color: '#666', marginTop: '0.5rem' }}>Example: Play, Speak, Dream, Study</p>
      </div>

      <PrideWall />
    </div>
  );
}
