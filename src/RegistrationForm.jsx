import { useState } from 'react';

export default function RegistrationForm({ onAuthSuccess, onNavigate }) {
  const [formData, setFormData] = useState({
    email: '',
    mobile: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleButtonClick = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.mobile || !formData.password || !formData.confirmPassword) {
      alert('Please fill in all fields');
      return;
    }

    if (formData.password.length < 8) {
      alert('Password must be at least 8 characters long');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          mobile: formData.mobile,
          password: formData.password
        })
      });

      const data = await res.json();

      if (res.ok) {
        alert('Registered successfully!');
        const userToPass = (data && data.user) ? data.user : { email: formData.email, mobile: formData.mobile };

        setFormData({ email: '', mobile: '', password: '', confirmPassword: '' });
        onAuthSuccess(userToPass);
      } else {
        alert(data.error || 'Registration failed');
      }
    } catch (err) {
      console.error("Fetch Error:", err);
      alert('Backend connection error! Check if "npm run dev" is running in the backend folder.');
    }
  };

  return (
    <div style={{ maxWidth: '350px', margin: '40px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Sign Up</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input type="email" name="email" placeholder="Email ID" value={formData.email} onChange={handleChange} style={{ padding: '8px' }} />
        <input type="tel" name="mobile" placeholder="Mobile No" value={formData.mobile} onChange={handleChange} style={{ padding: '8px' }} />
        <input type="password" name="password" placeholder="Password (min 8 characters)" value={formData.password} onChange={handleChange} style={{ padding: '8px' }} />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} style={{ padding: '8px' }} />

        <button
          type="button"
          onClick={handleButtonClick}
          style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Register
        </button>
      </div>

      <button onClick={() => onNavigate('zero')} style={{ marginTop: '15px', background: 'none', border: 'none', color: '#007bff', cursor: 'pointer' }}>
        Back to Home
      </button>
    </div>
  );
}