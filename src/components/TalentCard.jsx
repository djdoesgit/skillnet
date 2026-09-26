import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bookmark, Clock, ArrowRight, CheckCircle2, Send } from 'lucide-react';
import SkillTag from './SkillTag';

export default function TalentCard({ 
  student, 
  searchQuery = '', 
  isSaved = false, 
  onToggleSave,
  onRequestCollab 
}) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/student/${student.id}`);
  };

  const q = searchQuery.toLowerCase().trim();

  // Availability badge styling
  let availClass = 'badge-green';
  if (student.availability === 'Weekend Only') availClass = 'badge-amber';
  else if (student.availability === 'Open to Projects') availClass = 'badge-blue';

  return (
    <div 
      className="talent-card card card-hoverable"
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') handleCardClick(); }}
    >
      {/* Top Bar: Dept/Year & Bookmark */}
      <div className="talent-card-header">
        <div className="talent-avatar-wrap">
          <div 
            className="talent-avatar" 
            style={{ backgroundColor: student.avatarColor || '#2563EB' }}
          >
            <span>{student.initials}</span>
          </div>
          <span 
            className={`status-indicator ${student.availability === 'Available This Week' ? 'status-online' : 'status-busy'}`} 
            title={student.availability}
          />
        </div>

        <div className="talent-header-meta">
          <div className="talent-name-row">
            <h3 className="talent-name">{student.name}</h3>
            <span className="verified-badge" title="Verified Campus Student">
              <CheckCircle2 size={13} className="text-accent" />
            </span>
          </div>
          <p className="talent-dept">
            {student.deptCode} · {student.year}
          </p>
        </div>

        <div className="talent-card-actions-top">
          <button
            type="button"
            className={`save-btn ${isSaved ? 'save-btn-active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleSave && onToggleSave(student.id);
            }}
            title={isSaved ? 'Remove from saved' : 'Save student profile'}
            aria-label="Save profile"
          >
            <Bookmark size={16} fill={isSaved ? '#2563EB' : 'none'} color={isSaved ? '#2563EB' : '#94A3B8'} />
          </button>
        </div>
      </div>

      {/* Bio */}
      <p className="talent-bio">
        {student.bio}
      </p>

      {/* Skills Showcase */}
      <div className="talent-skills-wrap">
        {student.skills.slice(0, 4).map((skill, idx) => {
          const isMatch = q ? skill.toLowerCase().includes(q) : idx === 0;
          return (
            <SkillTag 
              key={skill} 
              skill={skill} 
              isMatch={isMatch} 
              size="sm" 
            />
          );
        })}
        {student.skills.length > 4 && (
          <span className="skills-more-tag">+{student.skills.length - 4}</span>
        )}
      </div>

      {/* Footer: Availability & Actions */}
      <div className="talent-card-footer">
        <div className="talent-footer-left">
          <span className={`badge ${availClass}`}>
            <Clock size={11} />
            <span>{student.availability}</span>
          </span>
        </div>

        <div className="talent-footer-buttons">
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/student/${student.id}`);
            }}
          >
            <span>View Profile</span>
            <ArrowRight size={13} />
          </button>
          
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={(e) => {
              e.stopPropagation();
              onRequestCollab && onRequestCollab(student);
            }}
            title="Request collaboration with this student"
          >
            <Send size={12} />
            <span>Request</span>
          </button>
        </div>
      </div>
    </div>
  );
}
