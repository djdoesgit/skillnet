import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import TalentCard from '../components/TalentCard';
import GigCard from '../components/GigCard';
import EmptyState from '../components/EmptyState';
import RequestModal from '../components/RequestModal';
import { getStudentsByCollege } from '../data/students';
import { 
  getSavedProfiles, 
  toggleSaveProfile, 
  getCreatedGigs,
  getCurrentSession 
} from '../utils/storage';

export default function Discover({ onShowToast }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';

  const currentSession = getCurrentSession();
  const collegeId = currentSession?.collegeId || 'NIT-T';
  const collegeName = currentSession?.collegeName || 'NIT Trichy';

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedAvailability, setSelectedAvailability] = useState('all');
  const [viewMode, setViewMode] = useState('talent'); // 'talent' | 'gigs'
  const [savedProfileIds, setSavedProfileIds] = useState([]);
  const [createdGigs, setCreatedGigs] = useState([]);
  
  // Request Modal State
  const [modalTargetStudent, setModalTargetStudent] = useState(null);
  const [modalPrefilledSkill, setModalPrefilledSkill] = useState('');

  // Campus isolated students
  const campusStudents = useMemo(() => {
    return getStudentsByCollege(collegeId);
  }, [collegeId]);

  // Sync state with URL if query params change externally
  useEffect(() => {
    const q = searchParams.get('q');
    if (q !== null && q !== searchQuery) {
      setSearchQuery(q);
    }
  }, [searchParams]);

  // Load saved profiles & gigs from storage scoped to college
  useEffect(() => {
    setSavedProfileIds(getSavedProfiles(collegeId));
    setCreatedGigs(getCreatedGigs(collegeId));
  }, [collegeId]);

  const handleSearchChange = (newVal) => {
    setSearchQuery(newVal);
    if (newVal.trim()) {
      setSearchParams({ q: newVal });
    } else {
      setSearchParams({});
    }
  };

  const handleSelectChip = (chip) => {
    handleSearchChange(chip);
  };

  const handleToggleSave = (studentId) => {
    const updated = toggleSaveProfile(studentId, collegeId);
    setSavedProfileIds(updated);
    const isNowSaved = updated.includes(studentId);
    if (onShowToast) {
      onShowToast(isNowSaved ? 'Profile bookmarked to your saved list!' : 'Profile removed from saved list.');
    }
  };

  const handleOpenRequest = (student, prefilledSkill = '') => {
    setModalTargetStudent(student);
    setModalPrefilledSkill(prefilledSkill);
  };

  const handleCloseModal = () => {
    setModalTargetStudent(null);
    setModalPrefilledSkill('');
  };

  const handleRequestSuccess = () => {
    if (onShowToast) {
      onShowToast('Collaboration request sent! Track it in Requests.');
    }
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedAvailability('all');
    setSearchParams({});
  };

  // Filter students based on search, category, and availability within current college
  const filteredStudents = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return campusStudents.filter((student) => {
      // 1. Search Query Match
      if (q) {
        const nameMatch = student.name.toLowerCase().includes(q);
        const deptMatch = student.dept.toLowerCase().includes(q) || student.deptCode.toLowerCase().includes(q);
        const skillMatch = student.skills.some((s) => s.toLowerCase().includes(q));
        const bioMatch = student.bio.toLowerCase().includes(q);
        const projectMatch = student.projects && student.projects.some(
          (p) => p.title.toLowerCase().includes(q) || (p.tech && p.tech.some(t => t.toLowerCase().includes(q)))
        );

        if (!nameMatch && !deptMatch && !skillMatch && !bioMatch && !projectMatch) {
          return false;
        }
      }

      // 2. Category Match
      if (selectedCategory !== 'all') {
        if (student.category !== selectedCategory) {
          return false;
        }
      }

      // 3. Availability Match
      if (selectedAvailability !== 'all') {
        if (selectedAvailability === 'this-week' && student.availability !== 'Available This Week') {
          return false;
        }
        if (selectedAvailability === 'weekend' && student.availability !== 'Weekend Only') {
          return false;
        }
        if (selectedAvailability === 'open' && student.availability !== 'Open to Projects') {
          return false;
        }
      }

      return true;
    });
  }, [campusStudents, searchQuery, selectedCategory, selectedAvailability]);

  // Filter Gigs within current college
  const filteredGigs = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return createdGigs.filter((gig) => {
      if (q) {
        const titleMatch = gig.title.toLowerCase().includes(q);
        const descMatch = gig.description.toLowerCase().includes(q);
        const skillMatch = gig.skill && gig.skill.toLowerCase().includes(q);
        const tagMatch = gig.tags && gig.tags.some(t => t.toLowerCase().includes(q));
        if (!titleMatch && !descMatch && !skillMatch && !tagMatch) return false;
      }
      return true;
    });
  }, [searchQuery, createdGigs]);

  return (
    <div className="discover-page-root">
      {/* Hero Section */}
      <section className="discover-hero-section">
        <div className="container discover-hero-container">
          <div className="hero-eyebrow-badge animate-slide-down">
            <span className="eyebrow-dot" />
            <span>{collegeName.toUpperCase()} STUDENT NETWORK</span>
          </div>

          <h1 className="hero-headline">
            Your campus has <span className="headline-accent">more talent</span> than you know.
          </h1>

          <p className="hero-subcopy">
            Find {collegeName} peers who can edit your hackathon video, design your pitch deck, 
            wireframe your MVP, or write your backend. Discover, collaborate, build.
          </p>

          {/* Large Live Search Bar */}
          <SearchBar 
            value={searchQuery}
            onChange={handleSearchChange}
            onSelectChip={handleSelectChip}
            totalResults={viewMode === 'talent' ? filteredStudents.length : filteredGigs.length}
          />
        </div>
      </section>

      {/* Main Discover Content Section */}
      <section className="discover-main-section">
        <div className="container">
          {/* Category & Availability Filters */}
          <FilterBar 
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            selectedAvailability={selectedAvailability}
            onSelectAvailability={setSelectedAvailability}
            totalResults={viewMode === 'talent' ? filteredStudents.length : filteredGigs.length}
            onResetFilters={handleResetFilters}
            viewMode={viewMode}
            onToggleViewMode={setViewMode}
          />

          {/* Section Header */}
          <div className="talent-section-header">
            <div className="section-title-wrap">
              <h2 className="talent-section-heading">
                {viewMode === 'talent' ? `People who can help you build at ${collegeName}.` : 'Campus Gigs & Tasks'}
              </h2>
              <span className="results-count-badge">
                {viewMode === 'talent' 
                  ? `${filteredStudents.length} Students` 
                  : `${filteredGigs.length} Gigs Active`}
              </span>
            </div>

            {searchQuery && (
              <div className="active-search-indicator">
                <span>Showing matches for "<strong>{searchQuery}</strong>"</span>
                <button 
                  type="button" 
                  className="clear-query-link" 
                  onClick={() => handleSearchChange('')}
                >
                  Clear query
                </button>
              </div>
            )}
          </div>

          {/* Grid View */}
          {viewMode === 'talent' ? (
            filteredStudents.length > 0 ? (
              <div className="talent-cards-grid">
                {filteredStudents.map((student) => (
                  <TalentCard
                    key={student.id}
                    student={student}
                    searchQuery={searchQuery}
                    isSaved={savedProfileIds.includes(student.id)}
                    onToggleSave={handleToggleSave}
                    onRequestCollab={(stu) => handleOpenRequest(stu)}
                  />
                ))}
              </div>
            ) : (
              <EmptyState 
                icon="search"
                title={`No students found at ${collegeName}`}
                message={`We couldn't find anyone matching "${searchQuery || 'selected filters'}" at ${collegeName}. Try searching for another skill like 'Python', 'UI/UX', or 'Video Editing'.`}
                actionLabel="Clear All Filters"
                onAction={handleResetFilters}
              />
            )
          ) : (
            /* Gigs Board View */
            filteredGigs.length > 0 ? (
              <div className="gigs-cards-grid">
                {filteredGigs.map((gig) => (
                  <GigCard 
                    key={gig.id} 
                    gig={gig} 
                    onConnect={(g) => {
                      const studentMatch = campusStudents.find(s => s.id === g.authorId) || {
                        id: g.authorId || 'temp',
                        name: g.authorName || 'Campus Peer',
                        dept: g.authorDept || 'Engineering',
                        deptCode: 'ENG',
                        year: 'Campus Builder',
                        avatarColor: g.authorAvatarColor || '#2563EB',
                        initials: 'CB',
                        availability: g.availability || 'Available This Week',
                        skills: [g.skill || 'Task Collaboration']
                      };
                      handleOpenRequest(studentMatch, g.skill || g.title);
                    }} 
                  />
                ))}
              </div>
            ) : (
              <EmptyState 
                icon="sparkles"
                title={`No campus gigs found at ${collegeName}`}
                message="Be the first to post a skill listing or project gig on your campus!"
                actionLabel="Post a Gig"
                onAction={() => window.location.href = '/create-gig'}
              />
            )
          )}
        </div>
      </section>

      {/* Request Collaboration Modal */}
      {modalTargetStudent && (
        <RequestModal 
          student={modalTargetStudent}
          prefilledSkill={modalPrefilledSkill}
          onClose={handleCloseModal}
          onSuccess={handleRequestSuccess}
        />
      )}
    </div>
  );
}
