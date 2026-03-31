import React from 'react';
import { Link } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';

export default function Chapter2() {
  return (
    <div className="glass-panel chapter-content delay-2 animate-slide-up">
      <Link to="/" className="back-link">← Back to Modules</Link>
      
      <h2 className="chapter-title" style={{ color: 'var(--navy)' }}>Chapter 2: Watch & Connect</h2>
      
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <h3 className="title-sub" style={{ color: 'var(--navy)' }}>Independence Day Stories</h3>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '2rem' }}>
        <div>
          <h4 style={{ color: 'var(--navy)', marginBottom: '0.5rem' }}>Story 1: I'm Independent</h4>
          <VideoPlayer videoId="elvx-mi-WaU" start={0} end={0} />
        </div>
        
        <div>
          <h4 style={{ color: 'var(--green)', marginBottom: '0.5rem' }}>Story 2: Freedom Fighters of India</h4>
          <VideoPlayer videoId="QlaYLOHl3bQ" start={0} end={0} />
        </div>
      </div>

      <div className="discussion-points" style={{ marginTop: '2rem' }}>
        <h4>Discussion:</h4>
        <ul>
          <li>Who fought for our freedom?</li>
          <li>Was it easy or difficult?</li>
          <li>How do we feel today because of them?</li>
        </ul>
        <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>Keep it quick & interactive</p>
      </div>
    </div>
  );
}
