import React from 'react';

export default function UserDetails({ user, onSignOut }) {
  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', textAlign: 'center' }}>
      <h2>User Profile Details</h2>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', marginBottom: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '10px' }}>Sr. No.</th>
            <th style={{ border: '1px solid #ddd', padding: '10px' }}>Email ID</th>
            <th style={{ border: '1px solid #ddd', padding: '10px' }}>Mobile No</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '10px' }}>1</td>
            <td style={{ border: '1px solid #ddd', padding: '10px' }}>{user?.email}</td>
            <td style={{ border: '1px solid #ddd', padding: '10px' }}>{user?.mobile}</td>
          </tr>
        </tbody>
      </table>

      <button
        onClick={onSignOut}
        style={{ padding: '10px 20px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Sign Out / Back to Home
      </button>
    </div>
  );
}