import { useState } from 'react';

export default function LoginForm({ onLoginSuccess, onNavigate }) {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert('Please fill in both email and password');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (res.ok) {
        alert('Sign in successful!');
        const userToPass = (data && data.user) ? data.user : { email: formData.email, mobile: 'N/A' };
        onLoginSuccess(userToPass);
      } else {
        alert(data.error || 'Invalid credentials');
      }
    } catch {
      alert('Server connection failed. Make sure the backend (npm run dev) is running.');
    }
  };

  return (
    <div style={{ maxWidth: '350px', margin: '40px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Sign In</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input type="email" name="email" placeholder="Email ID" value={formData.email} onChange={handleChange} style={{ padding: '8px' }} />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} style={{ padding: '8px' }} />
        <button type="button" onClick={handleLogin} style={{ padding: '10px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Sign In</button>
      </div>
      <button onClick={() => onNavigate('zero')} style={{ marginTop: '15px', background: 'none', border: 'none', color: '#007bff', cursor: 'pointer' }}>Back to Home</button>
    </div>
  );
}