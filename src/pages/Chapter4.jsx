import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Chapter4() {
  const [speech, setSpeech] = useState('');

  return (
    <div className="glass-panel chapter-content delay-4 animate-slide-up">
      <Link to="/" className="back-link">← Back to Modules</Link>
      
      <h2 className="chapter-title" style={{ color: 'var(--navy)' }}>Chapter 2: Speak Like a Leader</h2>
      
      <div className="img-container" style={{ maxWidth: '400px', margin: '0 auto 2rem' }}>
        <img src="https://login.skillizee.io/s/articles/69cb807a0d556400b7229cbf/images/image-20260331133625-7.jpeg" alt="Speak like a leader" />
      </div>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h3 className="title-sub" style={{ color: 'var(--navy)' }}>Activity: Students speak 2-3 lines</h3>
        <p style={{ color: '#555', marginTop: '0.5rem' }}>About freedom OR about their role model</p>
      </div>

      <div className="role-statement animate-fade-in" style={{ borderColor: 'var(--saffron)' }}>
        <h4 style={{ marginBottom: '1rem', color: '#555' }}>Draft your speech:</h4>
        <div style={{ fontSize: '1.5rem', fontFamily: 'Baloo 2', color: 'var(--navy)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span>"I am proud to be an Indian because...</span>
          <textarea 
            placeholder="write your thoughts here..." 
            value={speech} 
            onChange={e => setSpeech(e.target.value)} 
            style={{ 
              width: '80%', 
              maxWidth: '500px', 
              marginTop: '1rem', 
              fontFamily: 'inherit', 
              fontSize: '1.2rem', 
              padding: '1rem', 
              borderRadius: '12px', 
              border: '2px dashed var(--navy)',
              minHeight: '100px',
              backgroundColor: 'rgba(255,255,255,0.5)'
            }} 
          />
          <span style={{ alignSelf: 'flex-end', marginTop: '0.5rem', marginRight: '10%' }}>"</span>
        </div>
      </div>

      <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(255,255,255,0.7)', borderRadius: '16px', borderLeft: '6px solid var(--navy)' }}>
        <h3 style={{ color: 'var(--navy)', marginBottom: '1rem' }}>Outcome</h3>
        <ul style={{ paddingLeft: '1.5rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
          <li>Understand Independence Day</li>
          <li>Appreciate freedom fighters</li>
          <li>Express thoughts confidently</li>
          <li>Feel proud to be Indian</li>
        </ul>
      </div>
    </div>
  );
}
