import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="glass-panel" style={{ textAlign: 'center' }}>
      <h2 className="title-sub" style={{ color: 'var(--navy)', marginBottom: '2rem' }}>
        MODULE 1 & 2: Understand & Express Freedom
      </h2>
      
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
        Learn what Independence Day means and connect with India's freedom story!
      </p>
      
      <div className="chapter-grid">
        <Link to="/chapter/1" className="glass-panel chapter-card border-saffron">
          <div className="chapter-card-header saffron">Chapter 1</div>
          <div className="chapter-card-desc">Freedom Feeling — What does freedom mean to you?</div>
        </Link>
        
        <Link to="/chapter/2" className="glass-panel chapter-card">
          <div className="chapter-card-header navy">Chapter 2</div>
          <div className="chapter-card-desc">Watch & Connect — Independence Day Stories</div>
        </Link>
        
        <Link to="/chapter/3" className="glass-panel chapter-card border-green">
          <div className="chapter-card-header green">Chapter 3</div>
          <div className="chapter-card-desc">My Freedom Poster — Express through drawing</div>
        </Link>
        
        <Link to="/chapter/4" className="glass-panel chapter-card">
          <div className="chapter-card-header navy">Chapter 4</div>
          <div className="chapter-card-desc">Speak Like a Leader — Share your thoughts</div>
        </Link>
        
        <Link to="/chapter/5" className="glass-panel chapter-card border-green">
          <div className="chapter-card-header green">Chapter 5</div>
          <div className="chapter-card-desc">Independence Day MCQ Quiz — Test your knowledge!</div>
        </Link>
      </div>
    </div>
  );
}
