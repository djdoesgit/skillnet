import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Send, CheckCircle2, Clock, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { addRequest } from '../utils/storage';

export default function RequestModal({ 
  student, 
  prefilledSkill = '', 
  onClose, 
  onSuccess 
}) {
  const navigate = useNavigate();
  const [taskTitle, setTaskTitle] = useState('');
  const [skill, setSkill] = useState(prefilledSkill || (student?.skills?.[0] || 'Development'));
  const [collabType, setCollabType] = useState('Hackathon Team');
  const [urgency, setUrgency] = useState('This Week');
  const [compensation, setCompensation] = useState('Skill Swap / Free');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  if (!student) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskTitle.trim()) {
      setError('Please provide a brief title for your task or project.');
      return;
    }
    if (!message.trim()) {
      setError('Please write a short message explaining what you need help with.');
      return;
    }

    setError('');
    setIsSubmitting(true);

    setTimeout(() => {
      const newReq = addRequest({
        studentId: student.id,
        studentName: student.name,
        studentDept: `${student.deptCode} · ${student.year}`,
        studentAvatarColor: student.avatarColor,
        taskTitle: taskTitle.trim(),
        skill: skill,
        collabType: collabType,
        urgency: urgency,
        compensation: compensation,
        message: message.trim()
      }, student.collegeId);

      setIsSubmitting(false);
      setIsSent(true);
      if (onSuccess) onSuccess(newReq);
    }, 400);
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div className="modal-header-left">
            <span className="modal-eyebrow">REQUEST COLLABORATION</span>
            <h2 className="modal-title">Work with {student.name}</h2>
          </div>
          <button 
            type="button" 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {isSent ? (
          /* Success Screen */
          <div className="modal-success-state">
            <div className="success-icon-wrap">
              <CheckCircle2 size={48} className="text-success" />
            </div>
            <h3 className="success-heading">Request Sent Successfully!</h3>
            <p className="success-subtext">
              Your collaboration request has been delivered to <strong>{student.name}</strong>. 
              You can track the response status or cancel anytime in your Requests Dashboard.
            </p>

            <div className="success-summary-box">
              <div className="summary-row">
                <span className="summary-label">Project:</span>
                <span className="summary-value">{taskTitle}</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Skill Requested:</span>
                <span className="summary-value">{skill}</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Timeline:</span>
                <span className="summary-value">{urgency}</span>
              </div>
            </div>

            <div className="modal-success-actions">
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={() => {
                  onClose();
                  navigate('/requests');
                }}
              >
                <span>Go to Requests Dashboard</span>
                <ArrowRight size={16} />
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Close & Keep Exploring
              </button>
            </div>
          </div>
        ) : (
          /* Request Form */
          <form onSubmit={handleSubmit} className="modal-form">
            {/* Student Preview Snippet */}
            <div className="modal-student-snippet">
              <div 
                className="snippet-avatar" 
                style={{ backgroundColor: student.avatarColor || '#2563EB' }}
              >
                {student.initials}
              </div>
              <div className="snippet-info">
                <div className="snippet-name-row">
                  <span className="snippet-name">{student.name}</span>
                  <span className="badge badge-green">
                    <Clock size={10} />
                    <span>{student.availability}</span>
                  </span>
                </div>
                <span className="snippet-dept">{student.dept} · {student.year}</span>
              </div>
            </div>

            {error && (
              <div className="form-error-alert animate-slide-down">
                {error}
              </div>
            )}

            {/* Task Title */}
            <div className="form-group">
              <label className="form-label" htmlFor="taskTitle">
                Task / Project Title <span className="text-accent">*</span>
              </label>
              <input
                id="taskTitle"
                type="text"
                className="form-input"
                placeholder="e.g. Hackathon Demo Video Edit or Smart Campus Mobile UI"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                autoFocus
              />
            </div>

            {/* Two Column Row: Skill & Collab Type */}
            <div className="form-grid-2">
              <div className="form-group">
                <label className="form-label" htmlFor="skillSelect">Skill Needed</label>
                <select
                  id="skillSelect"
                  className="form-select"
                  value={skill}
                  onChange={(e) => setSkill(e.target.value)}
                >
                  {student.skills.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                  <option value="General Collaboration">Other / General Collaboration</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="collabType">Collaboration Type</label>
                <select
                  id="collabType"
                  className="form-select"
                  value={collabType}
                  onChange={(e) => setCollabType(e.target.value)}
                >
                  <option value="Hackathon Team">Hackathon Team</option>
                  <option value="Short Task / Gig">Short Task / Gig</option>
                  <option value="Startup MVP">Startup MVP</option>
                  <option value="Peer Mentorship">Peer Mentorship / Code Review</option>
                  <option value="Campus Club Project">Campus Club Project</option>
                </select>
              </div>
            </div>

            {/* Two Column Row: Timeline & Compensation */}
            <div className="form-grid-2">
              <div className="form-group">
                <label className="form-label" htmlFor="urgencySelect">Timeline / Urgency</label>
                <select
                  id="urgencySelect"
                  className="form-select"
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value)}
                >
                  <option value="This Week (Urgent)">This Week (Urgent)</option>
                  <option value="This Weekend">This Weekend</option>
                  <option value="Next 2 Weeks">Next 2 Weeks</option>
                  <option value="Flexible Timeline">Flexible Timeline</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="compSelect">Compensation / Credit</label>
                <select
                  id="compSelect"
                  className="form-select"
                  value={compensation}
                  onChange={(e) => setCompensation(e.target.value)}
                >
                  <option value="Skill Swap / Free">Skill Swap / Mutual Help</option>
                  <option value="Cash Stipend (₹500 - ₹3000)">Cash Stipend</option>
                  <option value="Hackathon Prize Split (50/50)">Hackathon Prize Split</option>
                  <option value="Fest Credits / Certificate">Fest Credits / Certificate</option>
                  <option value="Treat / Campus Coffee">Treat / Campus Coffee</option>
                </select>
              </div>
            </div>

            {/* Message Area */}
            <div className="form-group">
              <div className="label-with-hint">
                <label className="form-label" htmlFor="collabMessage">
                  Message <span className="text-accent">*</span>
                </label>
                <span className="field-hint">Be specific about what you need</span>
              </div>
              <textarea
                id="collabMessage"
                className="form-textarea"
                rows={4}
                placeholder={`Hi ${student.name.split(' ')[0]}, I saw your experience in ${skill}. We are working on a project and would love to collaborate...`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <div className="modal-trust-note">
              <ShieldCheck size={14} className="text-accent" />
              <span>Campus Trust: Requests are saved to your student network dashboard. No spam policy.</span>
            </div>

            {/* Footer Buttons */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                <Send size={14} />
                <span>{isSubmitting ? 'Sending Request...' : 'Send Request'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
