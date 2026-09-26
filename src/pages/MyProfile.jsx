import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, 
  Edit3, 
  Save, 
  Plus, 
  Trash2, 
  Bookmark, 
  Sparkles, 
  Briefcase, 
  Eye, 
  CheckCircle2, 
  Star, 
  Clock, 
  ExternalLink,
  Layers,
  ArrowRight
} from 'lucide-react';
import SkillTag from '../components/SkillTag';
import TalentCard from '../components/TalentCard';
import GigCard from '../components/GigCard';
import EmptyState from '../components/EmptyState';
import { STUDENTS, getStudentsByCollege } from '../data/students';
import { 
  getMyProfile, 
  saveMyProfile, 
  getSavedProfiles, 
  toggleSaveProfile,
  getCreatedGigs,
  getCurrentSession 
} from '../utils/storage';

export default function MyProfile({ onShowToast }) {
  const navigate = useNavigate();
  const currentSession = getCurrentSession();
  const collegeId = currentSession?.collegeId || 'NIT-T';

  const [profile, setProfile] = useState(() => getMyProfile(collegeId));
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('details'); // 'details' | 'saved' | 'my-gigs'
  
  // Edit State
  const [formData, setFormData] = useState({ ...profile });
  const [newSkillInput, setNewSkillInput] = useState('');
  const [savedProfilesList, setSavedProfilesList] = useState([]);
  const [myGigs, setMyGigs] = useState([]);

  useEffect(() => {
    const loaded = getMyProfile(collegeId);
    setProfile(loaded);
    setFormData(loaded);
    refreshSavedProfiles();
    refreshMyGigs();
  }, [collegeId]);

  const refreshSavedProfiles = () => {
    const savedIds = getSavedProfiles(collegeId);
    const collegeStudents = getStudentsByCollege(collegeId);
    const list = collegeStudents.filter(s => savedIds.includes(s.id));
    setSavedProfilesList(list);
  };

  const refreshMyGigs = () => {
    const allGigs = getCreatedGigs(collegeId);
    const mine = allGigs.filter(g => g.authorId === profile.id || g.authorId === 'me' || g.authorId?.startsWith('user-'));
    setMyGigs(mine);
  };

  const handleSaveProfile = (e) => {
    if (e) e.preventDefault();
    saveMyProfile(formData, collegeId);
    setProfile({ ...formData });
    setIsEditing(false);
    if (onShowToast) {
      onShowToast('Profile updated and saved to campus network!');
    }
  };

  const handleAddSkill = () => {
    if (!newSkillInput.trim()) return;
    const exists = formData.skills.some(
      s => (typeof s === 'string' ? s : s.name).toLowerCase() === newSkillInput.trim().toLowerCase()
    );
    if (!exists) {
      const updatedSkills = [...formData.skills, { name: newSkillInput.trim(), level: 'Intermediate' }];
      setFormData({ ...formData, skills: updatedSkills });
    }
    setNewSkillInput('');
  };

  const handleRemoveSkill = (skillToRemove) => {
    const targetName = typeof skillToRemove === 'string' ? skillToRemove : skillToRemove.name;
    const updatedSkills = formData.skills.filter(s => {
      const name = typeof s === 'string' ? s : s.name;
      return name !== targetName;
    });
    setFormData({ ...formData, skills: updatedSkills });
  };

  const handleToggleSaved = (studentId) => {
    toggleSaveProfile(studentId, collegeId);
    refreshSavedProfiles();
    if (onShowToast) {
      onShowToast('Saved list updated.');
    }
  };

  return (
    <div className="my-profile-root">
      {/* Profile Header Banner */}
      <div className="my-profile-banner">
        <div className="container">
          <div className="my-profile-header-content">
            <div className="my-profile-identity">
              <div 
                className="my-profile-avatar" 
                style={{ backgroundColor: profile.avatarColor || '#2563EB' }}
              >
                <span>{profile.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <div className="my-profile-meta">
                <div className="my-profile-name-row">
                  <h1 className="my-profile-name">{profile.name}</h1>
                  <span className="verified-campus-badge">
                    <CheckCircle2 size={14} className="text-accent" />
                    <span>Verified Student</span>
                  </span>
                </div>
                <p className="my-profile-dept">
                  {profile.dept} ({profile.deptCode}) · {profile.year} · {profile.college}
                </p>
                <div className="my-profile-tags-row">
                  <span className="badge badge-green">
                    <Clock size={11} />
                    <span>{profile.availability}</span>
                  </span>
                  <span className="badge badge-gray">
                    <span>~{profile.hoursPerWeek} hrs/week</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="my-profile-actions">
              {isEditing ? (
                <div className="edit-action-btns">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      setFormData({ ...profile });
                      setIsEditing(false);
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSaveProfile}
                  >
                    <Save size={15} />
                    <span>Save Changes</span>
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setIsEditing(true)}
                >
                  <Edit3 size={15} />
                  <span>Edit Profile</span>
                </button>
              )}
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="profile-stats-grid">
            <div className="stat-card">
              <div className="stat-top">
                <span className="stat-label">Profile Views</span>
                <Eye size={15} className="text-secondary" />
              </div>
              <span className="stat-value">{profile.stats?.views || 148}</span>
              <span className="stat-hint">This month</span>
            </div>

            <div className="stat-card">
              <div className="stat-top">
                <span className="stat-label">Requests</span>
                <Briefcase size={15} className="text-secondary" />
              </div>
              <span className="stat-value">{profile.stats?.requestsCount || 7}</span>
              <span className="stat-hint">Total collabs</span>
            </div>

            <div className="stat-card">
              <div className="stat-top">
                <span className="stat-label">Matches</span>
                <Sparkles size={15} className="text-accent" />
              </div>
              <span className="stat-value">{profile.stats?.matches || 4}</span>
              <span className="stat-hint">Active partners</span>
            </div>

            <div className="stat-card">
              <div className="stat-top">
                <span className="stat-label">Campus Rating</span>
                <Star size={15} className="text-amber" fill="#F59E0B" />
              </div>
              <span className="stat-value">{profile.stats?.rating || 4.9}</span>
              <span className="stat-hint">Verified peer reviews</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="profile-tabs-bar" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'details'}
              className={`profile-tab-btn ${activeTab === 'details' ? 'tab-btn-active' : ''}`}
              onClick={() => setActiveTab('details')}
            >
              <User size={15} />
              <span>Profile & Skills</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'saved'}
              className={`profile-tab-btn ${activeTab === 'saved' ? 'tab-btn-active' : ''}`}
              onClick={() => setActiveTab('saved')}
            >
              <Bookmark size={15} />
              <span>Saved Students ({savedProfilesList.length})</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'my-gigs'}
              className={`profile-tab-btn ${activeTab === 'my-gigs' ? 'tab-btn-active' : ''}`}
              onClick={() => setActiveTab('my-gigs')}
            >
              <Briefcase size={15} />
              <span>My Campus Gigs ({myGigs.length})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container py-6">
        {/* DETAILS TAB */}
        {activeTab === 'details' && (
          <div className="profile-details-view">
            {isEditing ? (
              /* Edit Mode Form */
              <form onSubmit={handleSaveProfile} className="card profile-edit-form">
                <h3 className="section-title mb-4">Edit Student Details</h3>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="edit-name">Full Name</label>
                    <input
                      id="edit-name"
                      type="text"
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-grid-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="edit-dept">Department Code</label>
                      <input
                        id="edit-dept"
                        type="text"
                        className="form-input"
                        value={formData.deptCode}
                        onChange={(e) => setFormData({ ...formData, deptCode: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="edit-year">Year</label>
                      <input
                        id="edit-year"
                        type="text"
                        className="form-input"
                        value={formData.year}
                        onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className="form-group">
                  <label className="form-label" htmlFor="edit-bio">Campus Bio & Headline</label>
                  <textarea
                    id="edit-bio"
                    className="form-textarea"
                    rows={3}
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  />
                </div>

                {/* Availability Row */}
                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="edit-avail">Availability Status</label>
                    <select
                      id="edit-avail"
                      className="form-select"
                      value={formData.availability}
                      onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                    >
                      <option value="Available This Week">Available This Week</option>
                      <option value="Weekend Only">Weekend Only</option>
                      <option value="Open to Projects">Open to Projects</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="edit-hours">Hours per week</label>
                    <input
                      id="edit-hours"
                      type="number"
                      className="form-input"
                      value={formData.hoursPerWeek}
                      onChange={(e) => setFormData({ ...formData, hoursPerWeek: Number(e.target.value) })}
                    />
                  </div>
                </div>

                {/* Skills Manager */}
                <div className="form-group">
                  <label className="form-label">Manage Your Skills</label>
                  <div className="skills-manager-chips">
                    {formData.skills.map((skill) => {
                      const skillName = typeof skill === 'string' ? skill : skill.name;
                      return (
                        <SkillTag
                          key={skillName}
                          skill={skillName}
                          removable={true}
                          onRemove={handleRemoveSkill}
                        />
                      );
                    })}
                  </div>

                  <div className="add-skill-row mt-2">
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Add a new skill (e.g. Flutter, PyTorch, Figma)"
                      value={newSkillInput}
                      onChange={(e) => setNewSkillInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleAddSkill();
                        }
                      }}
                    />
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={handleAddSkill}
                    >
                      <Plus size={14} />
                      <span>Add</span>
                    </button>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="edit-email">Campus Email</label>
                    <input
                      id="edit-email"
                      type="email"
                      className="form-input"
                      value={formData.contact?.email || ''}
                      onChange={(e) => setFormData({
                        ...formData,
                        contact: { ...formData.contact, email: e.target.value }
                      })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="edit-wa">WhatsApp / Phone</label>
                    <input
                      id="edit-wa"
                      type="text"
                      className="form-input"
                      value={formData.contact?.whatsapp || ''}
                      onChange={(e) => setFormData({
                        ...formData,
                        contact: { ...formData.contact, whatsapp: e.target.value }
                      })}
                    />
                  </div>
                </div>

                <div className="form-submit-row">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    <Save size={15} />
                    <span>Save Profile</span>
                  </button>
                </div>
              </form>
            ) : (
              /* View Mode */
              <div className="profile-overview-grid">
                {/* About & Skills */}
                <div className="card profile-card">
                  <h3 className="section-title">About Me</h3>
                  <p className="profile-bio-text">{profile.bio}</p>

                  <h4 className="sub-title mt-4 mb-2">My Verified Skills</h4>
                  <div className="profile-skills-cloud">
                    {profile.skills.map((skill) => {
                      const skillName = typeof skill === 'string' ? skill : skill.name;
                      return <SkillTag key={skillName} skill={skillName} size="md" />;
                    })}
                  </div>
                </div>

                {/* Projects Showcase */}
                <div className="card profile-card">
                  <div className="section-header-row">
                    <h3 className="section-title">Showcased Projects</h3>
                    <span className="badge badge-gray">{profile.projects?.length || 0} Projects</span>
                  </div>

                  <div className="projects-list">
                    {profile.projects?.map((proj) => (
                      <div key={proj.id} className="project-item-card">
                        <h4 className="project-title">{proj.title}</h4>
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

                {/* Direct Contact Handles */}
                <div className="card profile-card">
                  <h3 className="section-title">Direct Campus Contacts</h3>
                  <div className="contacts-view-list">
                    <div className="contact-row">
                      <span className="contact-label">Campus Email:</span>
                      <span className="contact-val">{profile.contact?.email}</span>
                    </div>
                    <div className="contact-row">
                      <span className="contact-label">WhatsApp:</span>
                      <span className="contact-val">{profile.contact?.whatsapp}</span>
                    </div>
                    <div className="contact-row">
                      <span className="contact-label">Discord:</span>
                      <span className="contact-val">{profile.contact?.discord}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* SAVED PROFILES TAB */}
        {activeTab === 'saved' && (
          <div className="saved-profiles-view">
            <div className="pane-header-row mb-4">
              <h2 className="pane-title">Bookmarked Campus Peers</h2>
              <span className="text-secondary text-sm">
                Students you have saved for future hackathons and projects
              </span>
            </div>

            {savedProfilesList.length > 0 ? (
              <div className="talent-cards-grid">
                {savedProfilesList.map((student) => (
                  <TalentCard
                    key={student.id}
                    student={student}
                    isSaved={true}
                    onToggleSave={() => handleToggleSaved(student.id)}
                    onRequestCollab={() => navigate(`/student/${student.id}`)}
                  />
                ))}
              </div>
            ) : (
              <EmptyState
                icon="users"
                title="No saved student profiles yet"
                message="Click the bookmark icon on any student card on Discover to save their profile here."
                actionLabel="Explore Campus Talent"
                onAction={() => navigate('/')}
              />
            )}
          </div>
        )}

        {/* MY GIGS TAB */}
        {activeTab === 'my-gigs' && (
          <div className="my-gigs-view">
            <div className="pane-header-row mb-4">
              <h2 className="pane-title">My Posted Gigs & Listings</h2>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() => navigate('/create-gig')}
              >
                <Plus size={14} />
                <span>Post New Gig</span>
              </button>
            </div>

            {myGigs.length > 0 ? (
              <div className="gigs-cards-grid">
                {myGigs.map((gig) => (
                  <GigCard 
                    key={gig.id} 
                    gig={gig} 
                    onConnect={() => navigate('/requests')}
                  />
                ))}
              </div>
            ) : (
              <EmptyState
                icon="sparkles"
                title="You haven't posted any gigs yet"
                message="Offer your video editing, coding, or design skills to other students on campus."
                actionLabel="Post a Gig"
                onAction={() => navigate('/create-gig')}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
