import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Chapter3() {
  const [completeSentence, setCompleteSentence] = useState('');

  return (
    <div className="glass-panel chapter-content delay-3 animate-slide-up">
      <Link to="/" className="back-link">← Back to Modules</Link>
      
      <h2 className="chapter-title" style={{ color: 'var(--green)' }}>Chapter 1: My Freedom Poster</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
        <div className="img-container" style={{ margin: 0 }}>
          <img src="https://login.skillizee.io/s/articles/69cb807a0d556400b7229cbf/images/image-20260331133625-3.jpeg" alt="Freedom Poster Idea 1" style={{ height: '100%', objectFit: 'cover' }} />
        </div>
        <div className="img-container" style={{ margin: 0 }}>
          <img src="https://login.skillizee.io/s/articles/69cb807a0d556400b7229cbf/images/image-20260331133625-4.jpeg" alt="Freedom Poster Idea 2" style={{ height: '100%', objectFit: 'cover' }} />
        </div>
        <div className="img-container" style={{ margin: 0 }}>
          <img src="https://login.skillizee.io/s/articles/69cb807a0d556400b7229cbf/images/image-20260331133625-5.jpeg" alt="Freedom Poster Idea 3" style={{ height: '100%', objectFit: 'cover' }} />
        </div>
        <div className="img-container" style={{ margin: 0 }}>
          <img src="https://login.skillizee.io/s/articles/69cb807a0d556400b7229cbf/images/image-20260331133625-6.png" alt="Children painting" style={{ height: '100%', objectFit: 'cover' }} />
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h3 className="title-sub" style={{ color: 'var(--navy)' }}>Activity: Students draw what freedom looks like today</h3>
        <p style={{ color: '#555', marginTop: '0.5rem' }}>(school, friends, rights, dreams)</p>
      </div>

      <div className="role-statement animate-fade-in" style={{ borderColor: 'var(--green)' }}>
        <h4 style={{ marginBottom: '1rem', color: '#555' }}>Add a line to your poster:</h4>
        "Because of freedom, I can <input 
          type="text" 
          placeholder="your sentence here" 
          value={completeSentence} 
          onChange={e => setCompleteSentence(e.target.value)} 
          style={{ width: '300px' }} 
        />"
      </div>
    </div>
  );
}
