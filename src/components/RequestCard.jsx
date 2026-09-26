import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Check, 
  X, 
  Clock, 
  Mail, 
  MessageSquare, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Share2,
  Calendar,
  DollarSign
} from 'lucide-react';

export default function RequestCard({ 
  request, 
  type = 'incoming', // 'incoming' | 'sent' | 'matched'
  onAccept, 
  onDecline 
}) {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    if (request.studentId) {
      navigate(`/student/${request.studentId}`);
    }
  };

  return (
    <div className={`request-card card ${type === 'matched' ? 'request-card-matched' : ''}`}>
      {/* Matched Header Banner */}
      {type === 'matched' && (
        <div className="matched-header-banner">
          <div className="matched-banner-left">
            <Sparkles size={14} className="text-accent" />
            <span className="matched-banner-text">Connected on Campus</span>
          </div>
          <span className="matched-timestamp">{request.matchedAt || 'Recently'}</span>
        </div>
      )}

      <div className="request-card-body">
        {/* Top Info Row */}
        <div className="request-info-row">
          <div className="request-user-info">
            <div 
              className="request-avatar"
              style={{ backgroundColor: request.studentAvatarColor || '#2563EB' }}
            >
              {request.studentName ? request.studentName.split(' ').map(n => n[0]).join('') : 'ST'}
            </div>
            <div className="request-meta">
              <div className="request-name-line">
                <span className="request-student-name">{request.studentName}</span>
                {type === 'matched' && (
                  <span className="badge badge-green">
                    <CheckCircle2 size={11} />
                    <span>Matched</span>
                  </span>
                )}
                {type === 'sent' && (
                  <span className="badge badge-amber">
                    <Clock size={11} />
                    <span>Pending Response</span>
                  </span>
                )}
                {type === 'incoming' && (
                  <span className="badge badge-blue">
                    <span>New Request</span>
                  </span>
                )}
              </div>
              <span className="request-dept">{request.studentDept}</span>
            </div>
          </div>

          <span className="request-date">{request.createdAt}</span>
        </div>

        {/* Task Details */}
        <div className="request-task-box">
          <h4 className="request-task-title">{request.taskTitle}</h4>
          
          <div className="request-meta-tags">
            {request.skill && (
              <span className="badge badge-gray">
                Skill: <strong>{request.skill}</strong>
              </span>
            )}
            {request.collabType && (
              <span className="badge badge-gray">
                {request.collabType}
              </span>
            )}
            {request.urgency && (
              <span className="badge badge-amber">
                <Clock size={10} />
                <span>{request.urgency}</span>
              </span>
            )}
            {request.compensation && (
              <span className="badge badge-green">
                <DollarSign size={10} />
                <span>{request.compensation}</span>
              </span>
            )}
          </div>

          {request.message && (
            <div className="request-message-quote">
              <p>"{request.message}"</p>
            </div>
          )}
        </div>

        {/* Matched Contact Info Box */}
        {type === 'matched' && request.contact && (
          <div className="matched-contact-card">
            <h5 className="contact-title">Direct Campus Contact Info:</h5>
            <div className="contact-grid">
              {request.contact.email && (
                <a 
                  href={`mailto:${request.contact.email}`} 
                  className="contact-item"
                  title="Send email"
                >
                  <Mail size={14} className="text-accent" />
                  <span>{request.contact.email}</span>
                </a>
              )}
              {request.contact.whatsapp && (
                <a 
                  href={`https://wa.me/${request.contact.whatsapp.replace(/[^0-9]/g, '')}`} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="contact-item"
                  title="WhatsApp chat"
                >
                  <MessageSquare size={14} className="text-success" />
                  <span>{request.contact.whatsapp}</span>
                </a>
              )}
              {request.contact.discord && (
                <div className="contact-item" title="Discord">
                  <span className="contact-badge-discord">Discord</span>
                  <span>{request.contact.discord}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Action Controls */}
        <div className="request-card-actions">
          {type === 'incoming' && (
            <div className="incoming-buttons">
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => onDecline && onDecline(request.id)}
              >
                <X size={14} />
                <span>Decline</span>
              </button>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() => onAccept && onAccept(request.id)}
              >
                <Check size={14} />
                <span>Accept & Connect</span>
              </button>
            </div>
          )}

          {type === 'sent' && (
            <div className="sent-actions">
              <span className="sent-hint text-secondary">
                Sent to {request.studentName}. You will be notified when they accept.
              </span>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={handleViewProfile}
              >
                <span>View Profile</span>
                <ArrowRight size={13} />
              </button>
            </div>
          )}

          {type === 'matched' && (
            <div className="matched-actions">
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={handleViewProfile}
              >
                <span>View Full Profile</span>
                <ArrowRight size={13} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
