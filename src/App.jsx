import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Discover from './pages/Discover';
import StudentProfile from './pages/StudentProfile';
import RequestsDashboard from './pages/RequestsDashboard';
import CreateGig from './pages/CreateGig';
import MyProfile from './pages/MyProfile';
import Login from './pages/Login';
import { getCurrentSession, logoutSession, getRequests } from './utils/storage';
import { CheckCircle2, X } from 'lucide-react';
import './App.css';

function MainApp() {
  const navigate = useNavigate();
  const [session, setSession] = useState(getCurrentSession());
  const [toastMessage, setToastMessage] = useState(null);
  const [pendingRequestsCount, setPendingRequestsCount] = useState(0);

  const collegeId = session?.collegeId;
  const collegeName = session?.collegeName || collegeId;

  const updateBadgeCount = () => {
    if (!collegeId) return;
    const list = getRequests(collegeId);
    const count = list.filter(r => r.type === 'incoming' && r.status === 'pending').length;
    setPendingRequestsCount(count);
  };

  useEffect(() => {
    if (session && collegeId) {
      updateBadgeCount();
    }
  }, [session, collegeId]);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((curr) => (curr === message ? null : curr));
    }, 3200);
  };

  const handleLoginSuccess = (newSession) => {
    setSession(newSession);
    showToast(`Welcome to ${newSession.collegeName} SkillNet!`);
  };

  const handleLogout = () => {
    logoutSession();
    setSession(null);
    navigate('/login');
    showToast('Logged out of campus session.');
  };

  // If not logged in, only allow /login route, redirect any other route to /login
  if (!session) {
    return (
      <div className="app-shell" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Routes>
          <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
        
        {toastMessage && (
          <div className="toast-container">
            <div className="toast">
              <CheckCircle2 size={16} className="text-success" style={{ color: '#4ADE80' }} />
              <span>{toastMessage}</span>
              <button 
                type="button" 
                onClick={() => setToastMessage(null)}
                style={{ marginLeft: '0.5rem', opacity: 0.6, color: '#fff', cursor: 'pointer' }}
                aria-label="Close notification"
              >
                <X size={14} />
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="app-shell" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar 
        collegeName={collegeName}
        collegeCode={collegeId}
        pendingRequestsCount={pendingRequestsCount}
        onLogout={handleLogout}
      />

      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Discover onShowToast={showToast} />} />
          <Route path="/search" element={<Discover onShowToast={showToast} />} />
          <Route path="/student/:id" element={<StudentProfile onShowToast={showToast} />} />
          <Route 
            path="/requests" 
            element={
              <RequestsDashboard 
                onShowToast={showToast} 
                onRequestsUpdated={() => updateBadgeCount()} 
              />
            } 
          />
          <Route path="/create-gig" element={<CreateGig onShowToast={showToast} />} />
          <Route path="/profile" element={<MyProfile onShowToast={showToast} />} />
          <Route path="/login" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />

      {/* Global Toast Notification */}
      {toastMessage && (
        <div className="toast-container">
          <div className="toast">
            <CheckCircle2 size={16} className="text-success" style={{ color: '#4ADE80' }} />
            <span>{toastMessage}</span>
            <button 
              type="button" 
              onClick={() => setToastMessage(null)}
              style={{ marginLeft: '0.5rem', opacity: 0.6, color: '#fff', cursor: 'pointer' }}
              aria-label="Close notification"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}
