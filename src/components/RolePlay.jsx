import React, { useState } from 'react';

export default function RolePlay() {
  const [activeRole, setActiveRole] = useState(null);
  const [name, setName] = useState('');
  const [action, setAction] = useState('');

  const roles = [
    { id: 'freedom-fighter', title: 'Freedom Fighter' },
    { id: 'soldier', title: 'Soldier' },
    { id: 'citizen', title: 'Responsible Citizen' }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div className="role-cards">
        {roles.map(role => (
          <div 
            key={role.id}
            className={`role-card ${activeRole === role.id ? 'active' : ''}`}
            onClick={() => setActiveRole(role.id)}
          >
            <h4>{role.title}</h4>
            <p>Select role</p>
          </div>
        ))}
      </div>

      {activeRole && (
        <div className="role-statement animate-fade-in">
          "I am <input type="text" placeholder="your name" value={name} onChange={e => setName(e.target.value)} />,<br />
          I did <input type="text" placeholder="your action" value={action} onChange={e => setAction(e.target.value)} style={{ width: '250px' }} /> for India."
        </div>
      )}

      <div className="chant-section">
        <h3 style={{ color: 'var(--navy)', marginBottom: '1rem' }}>Whole class chant:</h3>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem' }}>
          
          <div className="chant" onClick={(e) => {
            const el = e.currentTarget.querySelector('.chant-response');
            if (el.style.opacity === '1') {
              el.style.opacity = '0';
              setTimeout(() => { el.style.opacity = '1'; }, 50);
            } else {
              el.style.opacity = '1';
            }
          }}>
            "Bharat Mata ki..."
            <span className="chant-response" style={{ opacity: 0 }}>JAI!</span>
          </div>

          <div className="chant" onClick={(e) => {
            const el = e.currentTarget.querySelector('.chant-response');
            if (el.style.opacity === '1') {
              el.style.opacity = '0';
              setTimeout(() => { el.style.opacity = '1'; }, 50);
            } else {
              el.style.opacity = '1';
            }
          }}>
            "Vande..."
            <span className="chant-response green" style={{ opacity: 0 }}>MATARAM!</span>
          </div>

        </div>
        <p style={{ marginTop: '2rem', fontStyle: 'italic', color: '#555' }}>Click the chant to reveal the response! High-energy patriotic ending.</p>
      </div>

    </div>
  );
}
