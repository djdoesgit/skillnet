// Campus-Scoped LocalStorage helper
import { getCollegeByCode } from '../data/colleges.js';

const SESSION_KEY = 'skillnet_current_session_v1';

export function getCurrentSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

export function setCurrentSession(sessionData) {
  try {
    localStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));
  } catch (e) {
    console.error('Failed to save current session', e);
  }
}

export function logoutSession() {
  try {
    localStorage.removeItem(SESSION_KEY);
  } catch (e) {
    console.error('Failed to logout', e);
  }
}

function resolveCollegeId(collegeId) {
  if (collegeId) return collegeId.trim().toUpperCase();
  const session = getCurrentSession();
  return session?.collegeId ? session.collegeId.trim().toUpperCase() : 'NIT-T';
}

function getStorageKeys(collegeId) {
  const cid = resolveCollegeId(collegeId);
  return {
    cid,
    REQUESTS: `skillnet_${cid}_requests_v1`,
    SAVED_PROFILES: `skillnet_${cid}_saved_profiles_v1`,
    CREATED_GIGS: `skillnet_${cid}_created_gigs_v1`,
    MY_PROFILE: `skillnet_${cid}_my_profile_v1`
  };
}

// College Seed Data Generators
function getSeedRequests(collegeId) {
  const cid = resolveCollegeId(collegeId);

  if (cid === 'NIT-T') {
    return [
      {
        id: 'req-nitt-1',
        collegeId: 'NIT-T',
        type: 'incoming',
        studentId: 'nitt-2',
        studentName: 'Sneha Patel',
        studentDept: 'IT · 2nd Year',
        studentAvatarColor: '#EC4899',
        taskTitle: 'Hackathon UI/UX Design Partner',
        skill: 'UI/UX & Frontend',
        collabType: 'Hackathon Team',
        urgency: 'This Weekend',
        compensation: 'Prize Split (50/50)',
        message: 'Hey! Saw your project background. We are building a smart campus navigation app for the Pragyan hackathon this Saturday. We have wireframes ready and need a solid builder to partner with. Are you down?',
        createdAt: '2 hours ago',
        status: 'pending'
      },
      {
        id: 'req-nitt-2',
        collegeId: 'NIT-T',
        type: 'incoming',
        studentId: 'nitt-7',
        studentName: 'Tanvi Kulkarni',
        studentDept: 'AI & DS · 2nd Year',
        studentAvatarColor: '#9333EA',
        taskTitle: 'E-Cell Seed Pitch Architecture Slide',
        skill: 'Technical Architecture Review',
        collabType: 'Quick Consultation',
        urgency: 'Next 2 Days',
        compensation: 'Campus Coffee & Shoutout',
        message: 'Hi! We are pitching to alumni on Thursday. Could you spend 30 mins reviewing our system diagram slide to make sure it looks bulletproof?',
        createdAt: 'Yesterday',
        status: 'pending'
      },
      {
        id: 'req-nitt-3',
        collegeId: 'NIT-T',
        type: 'matched',
        studentId: 'nitt-3',
        studentName: 'Aditya Verma',
        studentDept: 'CSE · 3rd Year',
        studentAvatarColor: '#0284C7',
        taskTitle: 'TrichyCab Search Integration',
        skill: 'Web Development',
        collabType: 'Project Collaboration',
        urgency: 'Flexible',
        compensation: 'Skill Swap / Peer Learning',
        message: 'Hey! Loved your past build. Let us connect to integrate vector search into NotesHub together.',
        createdAt: '3 days ago',
        status: 'accepted',
        matchedAt: '2 days ago',
        contact: {
          email: 'aditya.verma@nitt.edu',
          whatsapp: '+91 98451 22334',
          discord: 'adityav#1337'
        }
      }
    ];
  } else if (cid === 'IITM') {
    return [
      {
        id: 'req-iitm-1',
        collegeId: 'IITM',
        type: 'incoming',
        studentId: 'iitm-5',
        studentName: 'Harish Balaji',
        studentDept: 'ED · 3rd Year',
        studentAvatarColor: '#DB2777',
        taskTitle: 'Shaastra Design & Web Co-builder',
        skill: 'UI/UX & Frontend',
        collabType: 'Hackathon Team',
        urgency: 'This Weekend',
        compensation: 'Fest Credits',
        message: 'Hey! We are polishing the companion web app for Shaastra workshops. Need someone with strong frontend skills to team up.',
        createdAt: '3 hours ago',
        status: 'pending'
      }
    ];
  } else if (cid === 'VIT-C') {
    return [
      {
        id: 'req-vitc-1',
        collegeId: 'VIT-C',
        type: 'incoming',
        studentId: 'vitc-4',
        studentName: 'Shreya Bose',
        studentDept: 'V-SIGN · 4th Year',
        studentAvatarColor: '#9333EA',
        taskTitle: 'Vibrance Fest UI Sprint',
        skill: 'Design & Frontend',
        collabType: 'Project Collaboration',
        urgency: 'This Week',
        compensation: 'Skill Swap',
        message: 'Hi! Looking for a technical collaborator to build out interactive prototype components for our design sprint.',
        createdAt: '1 day ago',
        status: 'pending'
      }
    ];
  } else {
    return [
      {
        id: `req-${cid}-1`,
        collegeId: cid,
        type: 'incoming',
        studentId: 'srm-2',
        studentName: 'Samyuktha V',
        studentDept: 'IT · 2nd Year',
        studentAvatarColor: '#EC4899',
        taskTitle: 'Campus Hackathon Co-Builder',
        skill: 'UI/UX & Web Dev',
        collabType: 'Hackathon Team',
        urgency: 'This Weekend',
        compensation: 'Prize Split (50/50)',
        message: 'Hey! Want to team up for this weekend’s campus hackathon? We need a solid builder for the frontend.',
        createdAt: '4 hours ago',
        status: 'pending'
      }
    ];
  }
}

function getSeedGigs(collegeId) {
  const cid = resolveCollegeId(collegeId);

  if (cid === 'NIT-T') {
    return [
      {
        id: 'gig-nitt-1',
        collegeId: 'NIT-T',
        authorId: 'nitt-1',
        authorName: 'Rahul Sharma',
        authorDept: 'CSE · 3rd Year',
        authorAvatarColor: '#2563EB',
        title: 'High-energy 60s Video Teaser or Reel Editing',
        category: 'Video & Photo',
        skill: 'Video Editing',
        description: 'Will turn your raw hackathon screencasts or club event clips into a punchy, Apple-style teaser with sound effects and motion graphics. 48-hr turnaround.',
        type: 'Offering Skill',
        availability: 'Available This Week',
        experience: '3+ years / 60+ videos',
        hours: '~5-8 hrs/gig',
        openToCollab: true,
        tags: ['Premiere Pro', 'After Effects', 'Reels', 'Motion'],
        createdAt: '1 day ago'
      },
      {
        id: 'gig-nitt-2',
        collegeId: 'NIT-T',
        authorId: 'nitt-2',
        authorName: 'Sneha Patel',
        authorDept: 'IT · 2nd Year',
        authorAvatarColor: '#EC4899',
        title: 'Figma UI Wireframing & Design Audit for Student MVPs',
        category: 'Design & UI/UX',
        skill: 'UI/UX',
        description: 'Have a backend or crude prototype? I will create a clean, modern Figma component library and interactive prototype ready for frontend development.',
        type: 'Offering Skill',
        availability: 'Available This Week',
        experience: 'Winner DesignSprint 2024',
        hours: '~10 hrs/gig',
        openToCollab: true,
        tags: ['Figma', 'UI/UX', 'Design Systems', 'Mobile App'],
        createdAt: '2 days ago'
      },
      {
        id: 'gig-nitt-3',
        collegeId: 'NIT-T',
        authorId: 'nitt-4',
        authorName: 'Karthik Nair',
        authorDept: 'Mechanical · 4th Year',
        authorAvatarColor: '#EA580C',
        title: '3D CAD Modeling & 3D Print Preparation',
        category: 'Engineering & CAD',
        skill: 'CAD',
        description: 'Offering custom 3D enclosures, robot chassis parts, and mechanical mounts modeled in SolidWorks. Can also calibrate for the campus 3D printer.',
        type: 'Offering Skill',
        availability: 'Available This Week',
        experience: 'Formula Student Chassis Lead',
        hours: '~6 hrs/gig',
        openToCollab: true,
        tags: ['SolidWorks', 'CAD', '3D Printing', 'Hardware'],
        createdAt: '3 days ago'
      }
    ];
  } else if (cid === 'IITM') {
    return [
      {
        id: 'gig-iitm-1',
        collegeId: 'IITM',
        authorId: 'iitm-1',
        authorName: 'Vikram Ramanathan',
        authorDept: 'CSE · 3rd Year',
        authorAvatarColor: '#1D4ED8',
        title: 'PyTorch Model Optimization & Edge Deployment',
        category: 'Data & AI',
        skill: 'Machine Learning',
        description: 'Assisting campus teams in model pruning, quantization, and TensorRT deployment for low-power edge devices.',
        type: 'Offering Skill',
        availability: 'Available This Week',
        experience: 'CVPR Workshop Author',
        hours: '~8 hrs/gig',
        openToCollab: true,
        tags: ['PyTorch', 'TensorRT', 'Computer Vision'],
        createdAt: '1 day ago'
      }
    ];
  } else if (cid === 'VIT-C') {
    return [
      {
        id: 'gig-vitc-1',
        collegeId: 'VIT-C',
        authorId: 'vitc-1',
        authorName: 'Ashwin Kumar',
        authorDept: 'CSE · 3rd Year',
        authorAvatarColor: '#2563EB',
        title: 'Next.js & Supabase Web App Prototype Setup',
        category: 'Development',
        skill: 'Web Development',
        description: 'Can build you a production-ready Next.js frontend with responsive layout and clean component tokens in 48 hours.',
        type: 'Offering Skill',
        availability: 'Available This Week',
        experience: 'HackVIT Winner',
        hours: '~10 hrs/gig',
        openToCollab: true,
        tags: ['Next.js', 'React', 'Tailwind', 'PostgreSQL'],
        createdAt: '2 days ago'
      }
    ];
  } else {
    return [
      {
        id: `gig-${cid}-1`,
        collegeId: cid,
        authorId: 'srm-1',
        authorName: 'Tarun Reddy',
        authorDept: 'CSE · 3rd Year',
        authorAvatarColor: '#2563EB',
        title: 'MERN Stack Web Development & API Integration',
        category: 'Development',
        skill: 'Web Development',
        description: 'Will help setup your Express backend and React dashboard with user auth and MongoDB schema.',
        type: 'Offering Skill',
        availability: 'Available This Week',
        experience: 'Milan Fest Web Coordinator',
        hours: '~8 hrs/gig',
        openToCollab: true,
        tags: ['React', 'Node.js', 'MongoDB'],
        createdAt: '1 day ago'
      }
    ];
  }
}

// Scoped Requests
export function getRequests(collegeId) {
  const keys = getStorageKeys(collegeId);
  try {
    const raw = localStorage.getItem(keys.REQUESTS);
    if (!raw) {
      const seeds = getSeedRequests(keys.cid);
      localStorage.setItem(keys.REQUESTS, JSON.stringify(seeds));
      return seeds;
    }
    return JSON.parse(raw);
  } catch (e) {
    return getSeedRequests(keys.cid);
  }
}

export function saveRequests(requests, collegeId) {
  const keys = getStorageKeys(collegeId);
  try {
    localStorage.setItem(keys.REQUESTS, JSON.stringify(requests));
  } catch (e) {
    console.error('Failed to save requests', e);
  }
}

export function addRequest(newRequest, collegeId) {
  const keys = getStorageKeys(collegeId);
  const current = getRequests(keys.cid);
  const reqWithMeta = {
    ...newRequest,
    collegeId: keys.cid,
    id: `req-${keys.cid}-${Date.now()}`,
    createdAt: 'Just now',
    status: 'pending',
    type: 'sent'
  };
  const updated = [reqWithMeta, ...current];
  saveRequests(updated, keys.cid);
  return reqWithMeta;
}

export function updateRequestStatus(requestId, status, contactInfo = null, collegeId) {
  const keys = getStorageKeys(collegeId);
  const current = getRequests(keys.cid);
  const updated = current.map(req => {
    if (req.id === requestId) {
      return {
        ...req,
        status,
        ...(status === 'accepted' ? {
          type: 'matched',
          matchedAt: 'Just now',
          contact: contactInfo || req.contact || {
            email: `${req.studentName?.toLowerCase().replace(/\s+/g, '.')}@${keys.cid.toLowerCase()}.edu`,
            whatsapp: '+91 98' + Math.floor(10000000 + Math.random() * 90000000),
            discord: `${req.studentName?.toLowerCase().replace(/\s+/g, '')}#${Math.floor(1000 + Math.random() * 9000)}`
          }
        } : {})
      };
    }
    return req;
  });
  saveRequests(updated, keys.cid);
  return updated;
}

// Scoped Saved Profiles
export function getSavedProfiles(collegeId) {
  const keys = getStorageKeys(collegeId);
  try {
    const raw = localStorage.getItem(keys.SAVED_PROFILES);
    if (!raw) {
      const defaultSaved = keys.cid === 'NIT-T' ? ['nitt-1', 'nitt-2'] : [];
      localStorage.setItem(keys.SAVED_PROFILES, JSON.stringify(defaultSaved));
      return defaultSaved;
    }
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

export function toggleSaveProfile(studentId, collegeId) {
  const keys = getStorageKeys(collegeId);
  const current = getSavedProfiles(keys.cid);
  let updated;
  if (current.includes(studentId)) {
    updated = current.filter(id => id !== studentId);
  } else {
    updated = [...current, studentId];
  }
  localStorage.setItem(keys.SAVED_PROFILES, JSON.stringify(updated));
  return updated;
}

// Scoped Gigs
export function getCreatedGigs(collegeId) {
  const keys = getStorageKeys(collegeId);
  try {
    const raw = localStorage.getItem(keys.CREATED_GIGS);
    if (!raw) {
      const seeds = getSeedGigs(keys.cid);
      localStorage.setItem(keys.CREATED_GIGS, JSON.stringify(seeds));
      return seeds;
    }
    return JSON.parse(raw);
  } catch (e) {
    return getSeedGigs(keys.cid);
  }
}

export function addCreatedGig(gigData, collegeId) {
  const keys = getStorageKeys(collegeId);
  const current = getCreatedGigs(keys.cid);
  const newGig = {
    ...gigData,
    collegeId: keys.cid,
    id: `gig-${keys.cid}-${Date.now()}`,
    createdAt: 'Just now'
  };
  const updated = [newGig, ...current];
  localStorage.setItem(keys.CREATED_GIGS, JSON.stringify(updated));
  return newGig;
}

// Scoped My Profile
export function getMyProfile(collegeId) {
  const keys = getStorageKeys(collegeId);
  const session = getCurrentSession();

  try {
    const raw = localStorage.getItem(keys.MY_PROFILE);
    if (raw) return JSON.parse(raw);
  } catch (e) {}

  const collegeMeta = getCollegeByCode(keys.cid);

  const defaultProfile = {
    id: 'me',
    collegeId: keys.cid,
    collegeName: collegeMeta.name,
    name: session?.user?.name || 'Arjun Mehta',
    dept: session?.user?.dept || 'Computer Science & Engineering',
    deptCode: session?.user?.deptCode || 'CSE',
    year: session?.user?.year || '3rd Year',
    college: collegeMeta.fullName,
    avatarColor: '#2563EB',
    bio: `Student builder at ${collegeMeta.name}. Looking to collaborate on upcoming hackathons, tech projects, and campus initiatives.`,
    skills: [
      { name: 'React', level: 'Advanced' },
      { name: 'Python', level: 'Intermediate' },
      { name: 'Web Dev', level: 'Advanced' },
      { name: 'UI/UX', level: 'Intermediate' }
    ],
    availability: 'Available This Week',
    hoursPerWeek: 12,
    contact: {
      email: `${(session?.user?.name || 'arjun.mehta').toLowerCase().replace(/\s+/g, '.')}@${keys.cid.toLowerCase()}.edu`,
      whatsapp: '+91 98765 43210',
      discord: `${(session?.user?.name || 'arjun').toLowerCase().replace(/\s+/g, '')}#404`
    },
    preferences: ['Hackathons', 'Startup MVPs', 'Peer Code Reviews'],
    projects: [
      {
        id: 'p-user-1',
        title: `${keys.cid} Roommate & Team Matcher`,
        description: 'Algorithm-based teammate and roommate matching platform used by campus freshers.',
        tech: ['React', 'Node.js', 'Tailwind']
      }
    ],
    stats: {
      views: 148,
      requestsCount: 7,
      matches: 4,
      rating: 4.9
    }
  };

  try {
    localStorage.setItem(keys.MY_PROFILE, JSON.stringify(defaultProfile));
  } catch (e) {}

  return defaultProfile;
}

export function saveMyProfile(profileData, collegeId) {
  const keys = getStorageKeys(collegeId);
  try {
    localStorage.setItem(keys.MY_PROFILE, JSON.stringify(profileData));
  } catch (e) {
    console.error('Failed to save profile', e);
  }
}
