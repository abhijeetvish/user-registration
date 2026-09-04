import React from 'react';

export default function ZeroPage({ onNavigate }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to Zero Page</h1>
      <p>Select an option to proceed:</p>
      <div style={{ marginTop: '20px' }}>
        <button
          onClick={() => onNavigate('signin')}
          style={{ padding: '12px 24px', marginRight: '15px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Sign In
        </button>
        <button
          onClick={() => onNavigate('signup')}
          style={{ padding: '12px 24px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}