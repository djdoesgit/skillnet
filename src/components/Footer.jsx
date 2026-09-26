import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Shield, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer-root">
      <div className="container footer-container">
        <div className="footer-main-grid">
          <div className="footer-brand-col">
            <div className="brand-logo footer-logo">
              <div className="brand-network-mark" aria-hidden="true">
                <span className="network-dot dot-1" />
                <span className="network-dot dot-2" />
                <span className="network-dot dot-3" />
              </div>
              <div className="brand-text">
                <span className="brand-skill">Skill</span>
                <span className="brand-net">Net</span>
              </div>
            </div>
            <p className="footer-tagline">
              Your campus has more talent than you know.
            </p>
            <p className="footer-subtext">
              The student-to-student network to showcase skills, find hackathon teammates, and build real projects.
            </p>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><Link to="/">Discover Talent</Link></li>
              <li><Link to="/requests">Requests Dashboard</Link></li>
              <li><Link to="/create-gig">Post a Campus Gig</Link></li>
              <li><Link to="/profile">My Student Profile</Link></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-title">Popular Skills</h4>
            <ul className="footer-links-list">
              <li><Link to="/?q=Video+Editing">Video Editing</Link></li>
              <li><Link to="/?q=UI%2FUX">UI/UX & Figma</Link></li>
              <li><Link to="/?q=Python">Python & AI</Link></li>
              <li><Link to="/?q=Web+Development">Web Development</Link></li>
            </ul>
          </div>

          <div className="footer-badge-col">
            <div className="campus-trust-card">
              <div className="trust-card-top">
                <Shield size={16} className="text-accent" />
                <span className="trust-card-title">Campus Verified Network</span>
              </div>
              <p className="trust-card-desc">
                Peer-to-peer student collaboration. Transparent match scoring, no middleman fees.
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copy">
            © {new Date().getFullYear()} SkillNet. Designed for student builders.
          </p>
          <div className="footer-hackathon-pill">
            <Sparkles size={12} className="text-accent" />
            <span>Hackathon MVP Prototype</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
