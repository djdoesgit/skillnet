import React from 'react';

export default function SkillTag({ 
  skill, 
  isMatch = false, 
  onClick, 
  size = 'md',
  removable = false,
  onRemove
}) {
  const isClickable = !!onClick;

  return (
    <span 
      onClick={onClick}
      className={`skill-tag ${isMatch ? 'skill-tag-match' : ''} ${isClickable ? 'skill-tag-clickable' : ''} skill-tag-${size}`}
      title={isMatch ? `Matching skill for your search: ${skill}` : skill}
    >
      {isMatch && <span className="match-dot" aria-hidden="true" />}
      <span className="skill-name">{skill}</span>
      {removable && (
        <button 
          type="button" 
          onClick={(e) => { e.stopPropagation(); onRemove && onRemove(skill); }}
          className="skill-remove-btn"
          aria-label={`Remove ${skill}`}
        >
          &times;
        </button>
      )}
    </span>
  );
}
