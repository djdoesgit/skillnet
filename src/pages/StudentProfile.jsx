import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Bookmark, 
  Send, 
  Share2, 
  Clock, 
  CheckCircle2, 
  Star, 
  Briefcase, 
  Award, 
  Layers, 
  ShieldCheck,
  Calendar
} from 'lucide-react';
import SkillTag from '../components/SkillTag';
import RequestModal from '../components/RequestModal';
import EmptyState from '../components/EmptyState';
import { STUDENTS, getStudentsByCollege } from '../data/students';
import { getSavedProfiles, toggleSaveProfile, getCurrentSession } from '../utils/storage';

export default function StudentProfile({ onShowToast }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentSession = getCurrentSession();
  const collegeId = currentSession?.collegeId || 'NIT-T';

  const [student, setStudent] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSkillForModal, setSelectedSkillForModal] = useState('');

  useEffect(() => {
    // Only search within students of current college
    const collegeStudents = getStudentsByCollege(collegeId);
    const found = collegeStudents.find((s) => s.id === id);
    if (found) {
      setStudent(found);
      const saved = getSavedProfiles(collegeId);
      setIsSaved(saved.includes(found.id));
    } else {
      setStudent(null);
    }
  }, [id, collegeId]);

  if (!student) {
    return (
      <div className="container py-8">
        <EmptyState
          icon="users"
          title="Student not found in your campus network"
          message={`This student profile does not exist in the ${collegeId} campus network. SkillNet strictly isolates each college.`}
          actionLabel="Back to Discover"
          onAction={() => navigate('/')}
        />
      </div>
    );
  }

  const handleToggleSave = () => {
    const updated = toggleSaveProfile(student.id, collegeId);
    const saved = updated.includes(student.id);
    setIsSaved(saved);
    if (onShowToast) {
      onShowToast(saved ? 'Student saved to your bookmarked list!' : 'Removed from bookmarks.');
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      if (onShowToast) onShowToast('Profile link copied to clipboard!');
    }
  };

  const handleOpenCollabModal = (skillName = '') => {
    setSelectedSkillForModal(skillName || student.skills[0]);
    setIsModalOpen(true);
  };

  let availBadgeClass = 'badge-green';
  if (student.availability === 'Weekend Only') availBadgeClass = 'badge-amber';
  else if (student.availability === 'Open to Projects') availBadgeClass = 'badge-blue';

  return (
    <div className="student-profile-root">
      {/* Top Breadcrumb Nav */}
      <div className="profile-top-breadcrumb">
        <div className="container">
          <button 
            type="button" 
            className="breadcrumb-back-btn"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={16} />
            <span>Back to Discovery</span>
          </button>
        </div>
      </div>

      <div className="container profile-main-container">
        {/* Profile Hero Header Card */}
        <div className="profile-header-card card">
          <div className="profile-header-content">
            {/* Left: Avatar & Meta */}
            <div className="profile-identity-section">
              <div className="profile-avatar-wrapper">
                <div 
                  className="profile-avatar-large" 
                  style={{ backgroundColor: student.avatarColor || '#2563EB' }}
                >
                  <span>{student.initials}</span>
                </div>
                <span 
                  className={`avatar-presence-indicator ${student.availability === 'Available This Week' ? 'presence-active' : 'presence-busy'}`} 
                  title={student.availability}
                />
              </div>

              <div className="profile-identity-meta">
                <div className="profile-name-title-row">
                  <h1 className="profile-display-name">{student.name}</h1>
                  <span className="verified-campus-badge" title="Verified Campus Student">
                    <CheckCircle2 size={16} className="text-accent" />
                    <span>{student.collegeName} Verified</span>
                  </span>
                </div>

                <p className="profile-dept-line">
                  {student.dept} ({student.deptCode}) · <strong>{student.year}</strong>
                </p>

                <p className="profile-college-line">
                  {student.collegeName}
                </p>

                {/* Quick Info Badges */}
                <div className="profile-quick-badges">
                  <span className={`badge ${availBadgeClass}`}>
                    <Clock size={12} />
                    <span>{student.availability} ({student.hoursPerWeek} hrs/week)</span>
                  </span>

                  <span className="badge badge-gray">
                    <Star size={12} className="text-amber" fill="#F59E0B" />
                    <span>{student.rating} Campus Rating</span>
                  </span>

                  <span className="badge badge-gray">
                    <Briefcase size={12} />
                    <span>{student.completedCollabs} Collabs Finished</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Action CTAs */}
            <div className="profile-header-actions">
              <div className="profile-cta-buttons">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={() => handleOpenCollabModal()}
                  id="btn-request-collab-primary"
                >
                  <Send size={16} />
                  <span>Request Collaboration</span>
                </button>

                <div className="profile-secondary-btns-row">
                  <button
                    type="button"
                    className={`btn btn-secondary ${isSaved ? 'btn-saved-active' : ''}`}
                    onClick={handleToggleSave}
                    aria-label="Save profile"
                  >
                    <Bookmark size={15} fill={isSaved ? '#2563EB' : 'none'} color={isSaved ? '#2563EB' : 'currentColor'} />
                    <span>{isSaved ? 'Saved' : 'Save Profile'}</span>
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleShare}
                    title="Share profile link"
                    aria-label="Share profile"
                  >
                    <Share2 size={15} />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Body Layout */}
        <div className="profile-columns-layout">
          {/* Main Left Column */}
          <div className="profile-column-main">
            {/* About Section */}
            <div className="profile-card card">
              <h3 className="section-title">About</h3>
              <p className="profile-bio-text">{student.bio}</p>
            </div>

            {/* Skills Showcase Section */}
            <div className="profile-card card">
              <div className="section-header-row">
                <h3 className="section-title">Verified Skills & Capabilities</h3>
                <span className="text-secondary text-sm">Click a skill to request task</span>
              </div>
              <div className="profile-skills-cloud">
                {student.skills.map((skill) => (
                  <SkillTag 
                    key={skill} 
                    skill={skill} 
                    onClick={() => handleOpenCollabModal(skill)} 
                    size="md" 
                  />
                ))}
              </div>
            </div>

            {/* Featured Projects Section */}
            <div className="profile-card card">
              <div className="section-header-row">
                <h3 className="section-title">Featured Campus Projects</h3>
                <span className="badge badge-gray">{student.projects?.length || 0} Showcased</span>
              </div>

              <div className="projects-list">
                {student.projects?.map((proj) => (
                  <div key={proj.id} className="project-item-card">
                    <div className="project-top-row">
                      <h4 className="project-title">{proj.title}</h4>
                      {proj.role && (
                        <span className="badge badge-blue">{proj.role}</span>
                      )}
                    </div>
                    <p className="project-desc">{proj.description}</p>
                    <div className="project-tech-stack">
                      {proj.tech?.map((t) => (
                        <span key={t} className="tech-badge">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience & Achievements */}
            <div className="profile-card card">
              <h3 className="section-title">Track Record & Campus Leadership</h3>
              <div className="experience-box">
                <Award size={18} className="text-accent exp-icon" />
                <p className="experience-text">{student.experienceSummary}</p>
              </div>
            </div>
          </div>

          {/* Sidebar Right Column */}
          <div className="profile-column-sidebar">
            {/* Preferred Collaboration Types */}
            <div className="profile-sidebar-card card">
              <h4 className="sidebar-title">
                <Layers size={16} className="text-accent" />
                <span>Collaboration Preferences</span>
              </h4>
              <p className="sidebar-subtext">
                {student.name.split(' ')[0]} is actively open to these formats:
              </p>
              <ul className="collab-preferences-list">
                {student.collaborationPreferences?.map((pref) => (
                  <li key={pref} className="collab-preference-item">
                    <CheckCircle2 size={14} className="text-success" />
                    <span>{pref}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Availability Box */}
            <div className="profile-sidebar-card card">
              <h4 className="sidebar-title">
                <Calendar size={16} className="text-accent" />
                <span>Weekly Availability</span>
              </h4>
              <div className="availability-detail-box">
                <div className="avail-row">
                  <span className="avail-label">Status:</span>
                  <span className="avail-value text-accent font-medium">{student.availability}</span>
                </div>
                <div className="avail-row">
                  <span className="avail-label">Dedicated Time:</span>
                  <span className="avail-value font-medium">~{student.hoursPerWeek} hours/week</span>
                </div>
                <div className="avail-row">
                  <span className="avail-label">Response Time:</span>
                  <span className="avail-value font-medium">Usually within 2–4 hours</span>
                </div>
              </div>
            </div>

            {/* Campus Trust Card */}
            <div className="profile-sidebar-card card campus-verified-side-card">
              <div className="side-trust-header">
                <ShieldCheck size={18} className="text-accent" />
                <span className="side-trust-title">SkillNet Campus Verified</span>
              </div>
              <p className="side-trust-desc">
                Enrolled student with verified department credentials at {student.collegeName}.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Collaboration Modal */}
      {isModalOpen && (
        <RequestModal 
          student={student}
          prefilledSkill={selectedSkillForModal}
          onClose={() => setIsModalOpen(false)}
          onSuccess={() => {
            if (onShowToast) onShowToast('Collaboration request sent!');
          }}
        />
      )}
    </div>
  );
}
