import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Shield, Building2, User, BookOpen, GraduationCap, ArrowRight, Check } from 'lucide-react';
import { COLLEGES, getCollegeByCode } from '../data/colleges';
import { setCurrentSession, getMyProfile } from '../utils/storage';

export default function Login({ onLoginSuccess }) {
  const navigate = useNavigate();

  const [collegeCode, setCollegeCode] = useState('NIT-T');
  const [fullName, setFullName] = useState('Arjun Mehta');
  const [dept, setDept] = useState('Computer Science & Engineering');
  const [year, setYear] = useState('3rd Year');
  const [error, setError] = useState('');

  const selectedCollegeMeta = getCollegeByCode(collegeCode);

  const handleSelectCollegePreset = (code) => {
    setCollegeCode(code);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!collegeCode.trim()) {
      setError('Please provide your College Code (e.g. NIT-T, IITM, VIT-C, SRM-KTR).');
      return;
    }
    if (!fullName.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!dept.trim()) {
      setError('Please specify your department.');
      return;
    }

    const cleanCode = collegeCode.trim().toUpperCase();
    const collegeMeta = getCollegeByCode(cleanCode);

    // Extract dept code like "CSE" or "ECE"
    const deptMatch = dept.match(/\(([^)]+)\)/);
    const deptCode = deptMatch ? deptMatch[1] : (dept.length <= 4 ? dept.toUpperCase() : dept.split(' ').map(w => w[0]).join('').toUpperCase());

    const userProfile = {
      id: `user-${cleanCode.toLowerCase()}-${Date.now()}`,
      name: fullName.trim(),
      collegeId: cleanCode,
      collegeName: collegeMeta.name,
      collegeFullName: collegeMeta.fullName,
      dept: dept.trim(),
      deptCode: deptCode.slice(0, 5),
      year: year,
      avatarColor: '#2563EB',
      bio: `Student builder at ${collegeMeta.name}. Looking to collaborate on upcoming hackathons, projects, and campus initiatives.`,
      skills: ['React', 'Python', 'Web Dev'],
      availability: 'Available This Week',
      hoursPerWeek: 12,
      contact: {
        email: `${fullName.toLowerCase().replace(/\s+/g, '.')}@${cleanCode.toLowerCase()}.edu`,
        whatsapp: '+91 98765 43210',
        discord: `${fullName.toLowerCase().replace(/\s+/g, '')}#${cleanCode.toLowerCase()}`
      },
      stats: { views: 48, requestsCount: 2, matches: 1, rating: 5.0 }
    };

    const sessionData = {
      collegeId: cleanCode,
      collegeName: collegeMeta.name,
      user: userProfile,
      loginTimestamp: Date.now()
    };

    setCurrentSession(sessionData);

    if (onLoginSuccess) {
      onLoginSuccess(sessionData);
    }

    navigate('/');
  };

  return (
    <div className="login-page-root">
      <div className="login-backdrop-glow" aria-hidden="true" />
      
      <div className="container login-container">
        {/* Branding Header */}
        <div className="login-brand-header">
          <div className="brand-logo login-logo">
            <div className="brand-network-mark" aria-hidden="true">
              <span className="network-dot dot-1" />
              <span className="network-dot dot-2" />
              <span className="network-dot dot-3" />
              <svg className="network-lines" viewBox="0 0 24 24" fill="none">
                <line x1="6" y1="6" x2="18" y2="6" stroke="#2563EB" strokeWidth="1.5" />
                <line x1="6" y1="6" x2="12" y2="18" stroke="#2563EB" strokeWidth="1.5" />
                <line x1="18" y1="6" x2="12" y2="18" stroke="#2563EB" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="brand-text">
              <span className="brand-skill">Skill</span>
              <span className="brand-net">Net</span>
            </div>
          </div>

          <div className="login-eyebrow">
            <span className="eyebrow-dot" />
            <span>CAMPUS TALENT NETWORK</span>
          </div>

          <h1 className="login-title">Enter Your Campus Network</h1>
          <p className="login-subtitle">
            Every college has its own isolated platform. Enter your college code to discover students,
            post gigs, and collaborate with peers on your campus.
          </p>
        </div>

        {/* Login Form Card */}
        <div className="login-card-wrap">
          <form onSubmit={handleSubmit} className="login-card card">
            {error && (
              <div className="form-error-alert animate-slide-down">
                {error}
              </div>
            )}

            {/* College Code Input */}
            <div className="form-group">
              <div className="label-with-hint">
                <label className="form-label" htmlFor="collegeCode">
                  <Building2 size={14} className="text-accent" />
                  <span>College Code <span className="text-accent">*</span></span>
                </label>
                <span className="field-hint">e.g. NIT-T, IITM, VIT-C, SRM-KTR</span>
              </div>
              <input
                id="collegeCode"
                type="text"
                className="form-input text-uppercase font-semibold tracking-wide"
                placeholder="NIT-T"
                value={collegeCode}
                onChange={(e) => setCollegeCode(e.target.value.toUpperCase())}
                autoFocus
              />

              {/* College Preset Buttons */}
              <div className="college-presets-row">
                <span className="presets-label">Popular Campuses:</span>
                <div className="presets-list">
                  {COLLEGES.map((col) => {
                    const isSelected = collegeCode.toUpperCase().trim() === col.code;
                    return (
                      <button
                        key={col.code}
                        type="button"
                        className={`preset-college-btn ${isSelected ? 'preset-college-active' : ''}`}
                        onClick={() => handleSelectCollegePreset(col.code)}
                        title={col.fullName}
                      >
                        {isSelected && <Check size={11} />}
                        <span>{col.code}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* College Preview Note */}
              {selectedCollegeMeta && (
                <div className="selected-college-preview animate-slide-down">
                  <span className="preview-college-name">{selectedCollegeMeta.fullName}</span>
                  <span className="preview-college-city">{selectedCollegeMeta.city}</span>
                </div>
              )}
            </div>

            {/* Full Name */}
            <div className="form-group">
              <label className="form-label" htmlFor="fullName">
                <User size={14} className="text-secondary" />
                <span>Full Name <span className="text-accent">*</span></span>
              </label>
              <input
                id="fullName"
                type="text"
                className="form-input"
                placeholder="e.g. Rahul Sharma or Sneha Patel"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            {/* Department & Year Row */}
            <div className="form-grid-2">
              <div className="form-group">
                <label className="form-label" htmlFor="dept">
                  <BookOpen size={14} className="text-secondary" />
                  <span>Department <span className="text-accent">*</span></span>
                </label>
                <input
                  id="dept"
                  type="text"
                  className="form-input"
                  placeholder="e.g. Computer Science (CSE)"
                  value={dept}
                  onChange={(e) => setDept(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="year">
                  <GraduationCap size={14} className="text-secondary" />
                  <span>Year of Study</span>
                </label>
                <select
                  id="year"
                  className="form-select"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                >
                  <option value="1st Year">1st Year (Freshman)</option>
                  <option value="2nd Year">2nd Year (Sophomore)</option>
                  <option value="3rd Year">3rd Year (Junior)</option>
                  <option value="4th Year">4th Year (Senior)</option>
                  <option value="Postgraduate">Postgraduate</option>
                </select>
              </div>
            </div>

            {/* Privacy & Isolation Notice */}
            <div className="login-isolation-notice">
              <Shield size={16} className="text-accent flex-shrink-0" />
              <p>
                <strong>Campus Isolated:</strong> You will only see and collaborate with students enrolled at <strong>{selectedCollegeMeta?.name || collegeCode}</strong>. Students from other colleges cannot view your profile or listings.
              </p>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="btn btn-primary btn-lg btn-enter-campus"
            >
              <span>Enter {selectedCollegeMeta?.name || collegeCode} SkillNet</span>
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
