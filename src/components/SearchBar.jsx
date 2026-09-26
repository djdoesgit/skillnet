import React from 'react';
import { Search, X, Sparkles } from 'lucide-react';
import { SUGGESTED_SEARCH_CHIPS } from '../data/categories';

export default function SearchBar({ 
  value, 
  onChange, 
  onSelectChip, 
  totalResults, 
  placeholder = "What skill are you looking for? (e.g. Video Editing, UI/UX, Python)" 
}) {
  return (
    <div className="search-section">
      <div className="search-bar-wrapper">
        <div className="search-icon-box">
          <Search size={20} className="search-icon" />
        </div>
        
        <input
          type="text"
          className="search-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          aria-label="Search campus talent by skill, name, or tech"
          id="main-talent-search"
        />

        {value && (
          <button 
            type="button"
            className="search-clear-btn" 
            onClick={() => onChange('')}
            aria-label="Clear search"
          >
            <X size={16} />
          </button>
        )}

        <div className="search-badge-hint">
          {value ? (
            <span className="results-count-pill">{totalResults} matches</span>
          ) : (
            <span className="shortcut-badge">Press / to search</span>
          )}
        </div>
      </div>

      {/* Suggested Chips */}
      <div className="suggested-chips-container">
        <span className="suggested-label">
          <Sparkles size={12} className="text-accent" />
          <span>Popular on campus:</span>
        </span>
        <div className="suggested-chips-list">
          {SUGGESTED_SEARCH_CHIPS.map((chip) => {
            const isActive = value.toLowerCase().trim() === chip.toLowerCase().trim();
            return (
              <button
                key={chip}
                type="button"
                className={`chip-btn ${isActive ? 'chip-btn-active' : ''}`}
                onClick={() => onSelectChip(isActive ? '' : chip)}
              >
                {chip}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
