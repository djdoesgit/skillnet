import React from 'react';
import { Clock, Send, Sparkles, CheckCircle2, UserCheck } from 'lucide-react';
import SkillTag from './SkillTag';

export default function GigCard({ gig, onConnect }) {
  return (
    <div className="gig-card card card-hoverable">
      <div className="gig-card-header">
        <div className="gig-type-badge">
          <Sparkles size={12} className="text-accent" />
          <span>{gig.type || 'Skill Listing'}</span>
        </div>
        <span className="badge badge-green">
          <Clock size={11} />
          <span>{gig.availability || 'Available This Week'}</span>
        </span>
      </div>

      <h3 className="gig-title">{gig.title}</h3>
      <p className="gig-desc">{gig.description}</p>

      {/* Creator Info */}
      <div className="gig-author-box">
        <div 
          className="gig-author-avatar"
          style={{ backgroundColor: gig.authorAvatarColor || '#2563EB' }}
        >
          {gig.authorName ? gig.authorName.split(' ').map(n => n[0]).join('') : 'ST'}
        </div>
        <div className="gig-author-meta">
          <div className="gig-author-name-row">
            <span className="gig-author-name">{gig.authorName}</span>
            <CheckCircle2 size={12} className="text-accent" />
          </div>
          <span className="gig-author-dept">{gig.authorDept}</span>
        </div>
      </div>

      {/* Skill Tags */}
      <div className="gig-tags-row">
        {gig.tags && gig.tags.map((tag) => (
          <SkillTag key={tag} skill={tag} size="sm" />
        ))}
      </div>

      <div className="gig-card-footer">
        <div className="gig-stats">
          {gig.hours && <span className="gig-hours-note">{gig.hours}</span>}
          {gig.experience && <span className="gig-exp-note">· {gig.experience}</span>}
        </div>

        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={() => onConnect && onConnect(gig)}
        >
          <Send size={12} />
          <span>Connect / Request</span>
        </button>
      </div>
    </div>
  );
}
