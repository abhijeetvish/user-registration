import { useState } from 'react';
import ZeroPage from './ZeroPage';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import UserDetails from './UserDetails';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('zero');
  const [userData, setUserData] = useState(null);

  const handleAuthSuccess = (user) => {
    setUserData(user);
    setCurrentPage('details');
  };

  const handleSignOut = () => {
    setUserData(null);
    setCurrentPage('zero');
  };

  return (
    <div className="App">
      {currentPage === 'zero' && <ZeroPage onNavigate={setCurrentPage} />}
      {currentPage === 'signup' && (
        <RegistrationForm onAuthSuccess={handleAuthSuccess} onNavigate={setCurrentPage} />
      )}
      {currentPage === 'signin' && (
        <LoginForm onLoginSuccess={handleAuthSuccess} onNavigate={setCurrentPage} />
      )}
      {currentPage === 'details' && (
        <UserDetails user={userData} onSignOut={handleSignOut} />
      )}
    </div>
  );
}