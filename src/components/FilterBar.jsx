import React from 'react';
import { 
  Sparkles, 
  Code, 
  Palette, 
  Video, 
  Cpu, 
  Megaphone, 
  Database, 
  Music,
  Filter,
  Check,
  RotateCcw
} from 'lucide-react';
import { CATEGORIES, AVAILABILITY_OPTIONS } from '../data/categories';

const ICON_MAP = {
  Sparkles: Sparkles,
  Code: Code,
  Palette: Palette,
  Video: Video,
  Cpu: Cpu,
  Megaphone: Megaphone,
  Database: Database,
  Music: Music
};

export default function FilterBar({
  selectedCategory,
  onSelectCategory,
  selectedAvailability,
  onSelectAvailability,
  totalResults,
  onResetFilters,
  viewMode = 'talent', // 'talent' | 'gigs'
  onToggleViewMode
}) {
  const hasActiveFilters = selectedCategory !== 'all' || selectedAvailability !== 'all';

  return (
    <div className="filter-bar-container">
      {/* Category Tabs */}
      <div className="category-scroll-container">
        <div className="category-pills" role="tablist">
          {CATEGORIES.map((cat) => {
            const IconComponent = ICON_MAP[cat.icon] || Sparkles;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                className={`category-pill ${isSelected ? 'category-pill-active' : ''}`}
                onClick={() => onSelectCategory(cat.id)}
              >
                <IconComponent size={14} className="cat-icon" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sub-bar: Availability + Mode Toggle + Active Filters */}
      <div className="filter-controls-row">
        <div className="filter-controls-left">
          <div className="availability-filter-wrap">
            <span className="availability-label">
              <Filter size={13} className="text-secondary" />
              <span>Availability:</span>
            </span>
            <div className="availability-pills">
              {AVAILABILITY_OPTIONS.map((opt) => {
                const isSelected = selectedAvailability === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    className={`avail-btn ${isSelected ? 'avail-btn-active' : ''}`}
                    onClick={() => onSelectAvailability(opt.id)}
                  >
                    {isSelected && <Check size={11} />}
                    <span>{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="filter-controls-right">
          {/* Mode Switcher */}
          <div className="view-mode-switcher">
            <button
              type="button"
              className={`view-mode-btn ${viewMode === 'talent' ? 'view-mode-active' : ''}`}
              onClick={() => onToggleViewMode && onToggleViewMode('talent')}
            >
              <span>Students</span>
            </button>
            <button
              type="button"
              className={`view-mode-btn ${viewMode === 'gigs' ? 'view-mode-active' : ''}`}
              onClick={() => onToggleViewMode && onToggleViewMode('gigs')}
            >
              <span>Campus Gigs</span>
            </button>
          </div>

          {hasActiveFilters && (
            <button
              type="button"
              className="btn btn-subtle btn-sm reset-filter-btn"
              onClick={onResetFilters}
              title="Reset all filters"
            >
              <RotateCcw size={12} />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
