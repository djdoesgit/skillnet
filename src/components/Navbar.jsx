import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { 
  Compass, 
  Inbox, 
  User, 
  Plus, 
  Menu, 
  X, 
  LogOut,
  Building2,
  CheckCircle2
} from 'lucide-react';

export default function Navbar({ 
  collegeName = 'NIT Trichy', 
  collegeCode = 'NIT-T', 
  pendingRequestsCount = 0,
  onLogout 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMobileNavClick = (path) => {
    setMobileMenuOpen(false);
    navigate(path);
  };

  const handleLogoutClick = () => {
    setMobileMenuOpen(false);
    if (onLogout) onLogout();
  };

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        {/* Brand Logo & Campus Badge */}
        <div className="navbar-brand-group">
          <Link to="/" className="brand-logo" onClick={() => setMobileMenuOpen(false)}>
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
          </Link>

          {/* Campus Indicator Badge */}
          <div className="navbar-campus-indicator" title={`Isolated Campus Network: ${collegeName} (${collegeCode})`}>
            <span className="campus-indicator-dot" />
            <span className="campus-code-tag">{collegeCode}</span>
            <span className="campus-name-tag">{collegeName}</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav-links" aria-label="Main Navigation">
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
            end
          >
            <Compass size={16} />
            <span>Discover</span>
          </NavLink>

          <NavLink 
            to="/requests" 
            className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
          >
            <Inbox size={16} />
            <span>Requests</span>
            {pendingRequestsCount > 0 && (
              <span className="nav-badge-count animate-slide-down">
                {pendingRequestsCount}
              </span>
            )}
          </NavLink>

          <NavLink 
            to="/profile" 
            className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
          >
            <User size={16} />
            <span>My Profile</span>
          </NavLink>
        </nav>

        {/* Right Actions: Post Gig & Logout */}
        <div className="navbar-actions-right">
          <Link to="/create-gig" className="btn btn-primary btn-sm btn-post-gig">
            <Plus size={15} />
            <span>Post a Gig</span>
          </Link>

          {/* Logout Button */}
          <button
            type="button"
            className="btn btn-secondary btn-sm btn-logout"
            onClick={handleLogoutClick}
            title="Switch campus or log out"
            aria-label="Logout from campus"
          >
            <LogOut size={14} />
            <span className="logout-text">Logout</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer animate-slide-down">
          <div className="mobile-nav-inner">
            {/* Campus badge in mobile menu */}
            <div className="mobile-campus-header">
              <span className="campus-indicator-dot" />
              <span>Campus: <strong>{collegeName}</strong> ({collegeCode})</span>
            </div>

            <button
              type="button"
              className="mobile-nav-item"
              onClick={() => handleMobileNavClick('/')}
            >
              <Compass size={18} className="text-accent" />
              <span>Discover Talent</span>
            </button>

            <button
              type="button"
              className="mobile-nav-item"
              onClick={() => handleMobileNavClick('/requests')}
            >
              <div className="mobile-nav-item-left">
                <Inbox size={18} className="text-accent" />
                <span>Requests</span>
              </div>
              {pendingRequestsCount > 0 && (
                <span className="nav-badge-count">{pendingRequestsCount}</span>
              )}
            </button>

            <button
              type="button"
              className="mobile-nav-item"
              onClick={() => handleMobileNavClick('/profile')}
            >
              <User size={18} className="text-accent" />
              <span>My Profile & Saved</span>
            </button>

            <div className="mobile-drawer-cta">
              <button
                type="button"
                className="btn btn-primary btn-block mb-2"
                onClick={() => handleMobileNavClick('/create-gig')}
              >
                <Plus size={16} />
                <span>Post a Skill / Gig</span>
              </button>

              <button
                type="button"
                className="btn btn-secondary btn-block"
                onClick={handleLogoutClick}
              >
                <LogOut size={15} />
                <span>Logout / Switch Campus</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
