import React from 'react';
import { Search, Sparkles, Inbox, Users, PlusCircle } from 'lucide-react';

export default function EmptyState({ 
  icon = 'search', 
  title = 'No results found', 
  message = 'Try adjusting your search terms or clearing your filters to see more students.',
  actionLabel, 
  onAction 
}) {
  const renderIcon = () => {
    switch (icon) {
      case 'inbox':
        return <Inbox size={36} className="empty-icon text-secondary" />;
      case 'users':
        return <Users size={36} className="empty-icon text-secondary" />;
      case 'sparkles':
        return <Sparkles size={36} className="empty-icon text-accent" />;
      case 'plus':
        return <PlusCircle size={36} className="empty-icon text-accent" />;
      case 'search':
      default:
        return <Search size={36} className="empty-icon text-secondary" />;
    }
  };

  return (
    <div className="empty-state-card card">
      <div className="empty-state-icon-box">
        {renderIcon()}
      </div>
      <h3 className="empty-state-title">{title}</h3>
      <p className="empty-state-message">{message}</p>
      {actionLabel && onAction && (
        <button 
          type="button" 
          className="btn btn-primary btn-sm empty-state-btn"
          onClick={onAction}
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}
