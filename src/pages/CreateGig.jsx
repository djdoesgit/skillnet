import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Plus, 
  Sparkles, 
  ArrowLeft, 
  CheckCircle2, 
  Eye, 
  HelpCircle,
  Clock,
  Layers,
  Check
} from 'lucide-react';
import { CATEGORIES, AVAILABILITY_OPTIONS } from '../data/categories';
import { addCreatedGig, getMyProfile, getCurrentSession } from '../utils/storage';
import GigCard from '../components/GigCard';

export default function CreateGig({ onShowToast }) {
  const navigate = useNavigate();
  const currentSession = getCurrentSession();
  const collegeId = currentSession?.collegeId || 'NIT-T';
  const collegeName = currentSession?.collegeName || 'NIT Trichy';
  const myProfile = getMyProfile(collegeId);

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('video-photo');
  const [skill, setSkill] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const [type, setType] = useState('Offering Skill'); // 'Offering Skill' | 'Seeking Partner'
  const [description, setDescription] = useState('');
  const [availability, setAvailability] = useState('Available This Week');
  const [experience, setExperience] = useState('2+ years / Active Builder');
  const [hours, setHours] = useState('~5-10 hrs/task');
  const [openToCollab, setOpenToCollab] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Please provide a title for your skill listing.');
      return;
    }
    if (!skill.trim()) {
      setError('Please specify the primary skill.');
      return;
    }
    if (!description.trim()) {
      setError('Please add a short description of what you can deliver.');
      return;
    }

    setError('');
    setIsSubmitting(true);

    const parsedTags = tagsInput
      ? tagsInput.split(',').map(t => t.trim()).filter(Boolean)
      : [skill.trim()];

    setTimeout(() => {
      const selectedCatObj = CATEGORIES.find(c => c.id === category);

      addCreatedGig({
        authorId: myProfile.id || 'me',
        authorName: myProfile.name,
        authorDept: `${myProfile.deptCode} · ${myProfile.year}`,
        authorAvatarColor: myProfile.avatarColor || '#2563EB',
        title: title.trim(),
        category: selectedCatObj ? selectedCatObj.label : 'General',
        skill: skill.trim(),
        description: description.trim(),
        type: type,
        availability: availability,
        experience: experience,
        hours: hours,
        openToCollab: openToCollab,
        tags: parsedTags
      }, collegeId);

      setIsSubmitting(false);
      if (onShowToast) {
        onShowToast(`Gig published! It is now live in ${collegeName} Discover.`);
      }
      navigate('/?mode=gigs');
    }, 350);
  };

  // Preview Object
  const previewGig = {
    id: 'preview',
    authorId: myProfile.id,
    authorName: myProfile.name,
    authorDept: `${myProfile.deptCode} · ${myProfile.year}`,
    authorAvatarColor: myProfile.avatarColor || '#2563EB',
    title: title || 'Title of your skill offering or task',
    category: category,
    skill: skill || 'Selected Skill',
    description: description || 'Describe what you can build, your experience, turnaround time, or what you are looking for in a teammate...',
    type: type,
    availability: availability,
    experience: experience,
    hours: hours,
    openToCollab: openToCollab,
    tags: tagsInput ? tagsInput.split(',').map(t => t.trim()).filter(Boolean) : ['Skill', 'Campus']
  };

  return (
    <div className="create-gig-root">
      <div className="container py-8">
        {/* Top Back Nav */}
        <div className="mb-6">
          <button
            type="button"
            className="breadcrumb-back-btn"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={16} />
            <span>Back</span>
          </button>
        </div>

        <div className="create-gig-header">
          <span className="hero-eyebrow-badge">{collegeName.toUpperCase()} CAMPUS LISTINGS</span>
          <h1 className="page-title">Post a Skill or Project Gig</h1>
          <p className="page-subtitle">
            Offer your specialized skills to peers at {collegeName}, or post a task to find teammates for your upcoming project.
          </p>
        </div>

        <div className="create-gig-layout">
          {/* Form Column */}
          <div className="create-gig-form-col">
            <form onSubmit={handleSubmit} className="card create-gig-card">
              {error && (
                <div className="form-error-alert animate-slide-down">
                  {error}
                </div>
              )}

              {/* Type Toggle */}
              <div className="form-group">
                <label className="form-label">Listing Format</label>
                <div className="listing-type-toggle">
                  <button
                    type="button"
                    className={`toggle-option ${type === 'Offering Skill' ? 'toggle-active' : ''}`}
                    onClick={() => setType('Offering Skill')}
                  >
                    <span>I am Offering a Skill</span>
                  </button>
                  <button
                    type="button"
                    className={`toggle-option ${type === 'Seeking Partner' ? 'toggle-active' : ''}`}
                    onClick={() => setType('Seeking Partner')}
                  >
                    <span>Seeking Skill / Partner</span>
                  </button>
                </div>
              </div>

              {/* Title */}
              <div className="form-group">
                <label className="form-label" htmlFor="gig-title">
                  Listing Title <span className="text-accent">*</span>
                </label>
                <input
                  id="gig-title"
                  type="text"
                  className="form-input"
                  placeholder="e.g. 60s High-Energy Reel Editing & Color Grading"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  autoFocus
                />
              </div>

              {/* Category & Skill Row */}
              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="gig-cat">Category</label>
                  <select
                    id="gig-cat"
                    className="form-select"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    {CATEGORIES.filter(c => c.id !== 'all').map((c) => (
                      <option key={c.id} value={c.id}>{c.label}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="gig-primary-skill">
                    Primary Skill <span className="text-accent">*</span>
                  </label>
                  <input
                    id="gig-primary-skill"
                    type="text"
                    className="form-input"
                    placeholder="e.g. Video Editing, UI/UX, Python"
                    value={skill}
                    onChange={(e) => setSkill(e.target.value)}
                  />
                </div>
              </div>

              {/* Tags */}
              <div className="form-group">
                <label className="form-label" htmlFor="gig-tags">
                  Skill Tags (comma separated)
                </label>
                <input
                  id="gig-tags"
                  type="text"
                  className="form-input"
                  placeholder="e.g. Premiere Pro, After Effects, DaVinci, Sound Design"
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                />
              </div>

              {/* Description */}
              <div className="form-group">
                <div className="label-with-hint">
                  <label className="form-label" htmlFor="gig-desc">
                    Description & Scope <span className="text-accent">*</span>
                  </label>
                  <span className="field-hint">What can you deliver or help with?</span>
                </div>
                <textarea
                  id="gig-desc"
                  className="form-textarea"
                  rows={4}
                  placeholder="Explain what you can build, past campus experience, typical turnaround time, or equipment you use..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              {/* Two Column: Availability & Experience */}
              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="gig-avail">Availability</label>
                  <select
                    id="gig-avail"
                    className="form-select"
                    value={availability}
                    onChange={(e) => setAvailability(e.target.value)}
                  >
                    <option value="Available This Week">Available This Week</option>
                    <option value="Weekend Only">Weekend Only</option>
                    <option value="Open to Projects">Open to Projects</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="gig-hours">Hours per task</label>
                  <input
                    id="gig-hours"
                    type="text"
                    className="form-input"
                    placeholder="e.g. ~5-10 hrs/task"
                    value={hours}
                    onChange={(e) => setHours(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="gig-exp">Experience Highlight</label>
                <input
                  id="gig-exp"
                  type="text"
                  className="form-input"
                  placeholder="e.g. 2 years experience / Fest Media Lead"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                />
              </div>

              {/* Open to Collab Checkbox */}
              <div className="checkbox-form-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={openToCollab}
                    onChange={(e) => setOpenToCollab(e.target.checked)}
                    className="checkbox-input"
                  />
                  <span>Open to non-monetary skill swaps and hackathon partnerships</span>
                </label>
              </div>

              {/* Submit Buttons */}
              <div className="form-submit-row">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => navigate('/')}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  disabled={isSubmitting}
                >
                  <Sparkles size={16} />
                  <span>{isSubmitting ? 'Publishing...' : 'Publish to Campus'}</span>
                </button>
              </div>
            </form>
          </div>

          {/* Live Preview Column */}
          <div className="create-gig-preview-col">
            <div className="preview-sticky-wrap">
              <div className="preview-header-bar">
                <Eye size={14} className="text-secondary" />
                <span className="preview-label">Live Card Preview</span>
              </div>
              <GigCard gig={previewGig} />
              <p className="preview-note text-secondary text-sm mt-3">
                This is how your gig card will look to other students browsing on SkillNet Discover.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
