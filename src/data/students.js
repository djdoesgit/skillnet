export const STUDENTS = [
  // ==========================================
  // COLLEGE 1: NIT-T (National Institute of Technology, Trichy)
  // ==========================================
  {
    id: 'nitt-1',
    collegeId: 'NIT-T',
    collegeName: 'NIT Trichy',
    name: 'Rahul Sharma',
    dept: 'Computer Science & Engineering',
    deptCode: 'CSE',
    year: '3rd Year',
    category: 'video-photo',
    avatarColor: '#2563EB',
    initials: 'RS',
    bio: 'Fest media lead & freelance video editor at NIT Trichy. Specialized in high-energy event recaps, hackathon teasers, and short-form storytelling.',
    skills: ['Video Editing', 'Premiere Pro', 'After Effects', 'Motion Graphics', 'DaVinci Resolve', 'Sound Design'],
    primarySkill: 'Video Editing',
    availability: 'Available This Week',
    hoursPerWeek: 12,
    rating: 4.9,
    completedCollabs: 14,
    experienceSummary: '3 years editing experience, produced 60+ videos for Festember, Pragyan & campus hackathons.',
    collaborationPreferences: ['Hackathon Pitch Videos', 'Club Promos', 'YouTube Creators', 'Product Demos'],
    contact: {
      email: 'rahul.sharma@nitt.edu',
      whatsapp: '+91 98234 56781',
      discord: 'rahul_edits#2024'
    },
    projects: [
      {
        id: 'p-nitt-1-1',
        title: 'Festember 2025 Official Aftermovie',
        description: 'Directed and edited the 3-minute official aftermovie. Combined drone footage, speed-ramping, and custom sound design. Gained 45,000+ views.',
        tech: ['Premiere Pro', 'DaVinci Resolve', 'After Effects'],
        role: 'Lead Editor & Colorist'
      },
      {
        id: 'p-nitt-1-2',
        title: 'Pragyan TechFest Keynote Teaser',
        description: 'Kinetic typography and 3D camera projection teaser series for guest speakers across Instagram and campus LED walls.',
        tech: ['After Effects', 'Audition'],
        role: 'Motion Designer'
      }
    ]
  },
  {
    id: 'nitt-2',
    collegeId: 'NIT-T',
    collegeName: 'NIT Trichy',
    name: 'Sneha Patel',
    dept: 'Information Technology',
    deptCode: 'IT',
    year: '2nd Year',
    category: 'design',
    avatarColor: '#EC4899',
    initials: 'SP',
    bio: 'Product designer bridging psychology and interfaces. Winner of DesignSprint 2024. Can transform your crude backend into a crisp, venture-ready product.',
    skills: ['UI/UX', 'Figma', 'Design Systems', 'User Research', 'Wireframing', 'Prototyping'],
    primarySkill: 'UI/UX & Figma',
    availability: 'Open to Projects',
    hoursPerWeek: 12,
    rating: 4.8,
    completedCollabs: 11,
    experienceSummary: 'Lead Product Designer at Google Developer Student Club NIT-T. Mentored 40+ students on UX fundamentals and Figma auto-layout.',
    collaborationPreferences: ['Hackathon UI/UX', 'App Wireframing', 'Landing Page Design', 'Design Audits'],
    contact: {
      email: 'sneha.patel@nitt.edu',
      whatsapp: '+91 98321 44556',
      discord: 'sneha_ux#7720'
    },
    projects: [
      {
        id: 'p-nitt-2-1',
        title: 'Redesigning Octoview ERP',
        description: 'Conducted user interviews with 35 faculty and students. Built high-fidelity Figma components that reduced course registration time by 60%.',
        tech: ['Figma', 'User Research', 'Usability Testing'],
        role: 'Solo UX Researcher & Designer'
      },
      {
        id: 'p-nitt-2-2',
        title: 'NITT Split & Food App',
        description: 'Mobile interface designed for hostel night canteen delivery and expense splitting. Ranked #1 at State UI Jam.',
        tech: ['Figma', 'Interactive Prototyping'],
        role: 'Lead Designer'
      }
    ]
  },
  {
    id: 'nitt-3',
    collegeId: 'NIT-T',
    collegeName: 'NIT Trichy',
    name: 'Aditya Verma',
    dept: 'Computer Science & Engineering',
    deptCode: 'CSE',
    year: '3rd Year',
    category: 'development',
    avatarColor: '#0284C7',
    initials: 'AV',
    bio: 'Full-stack builder obsessed with craft, responsive layouts, and snappy micro-interactions. Built portals used by 8,000+ students on campus.',
    skills: ['React', 'Web Development', 'JavaScript', 'Node.js', 'Next.js', 'Tailwind CSS', 'PostgreSQL'],
    primarySkill: 'Web Development (React)',
    availability: 'Available This Week',
    hoursPerWeek: 15,
    rating: 4.9,
    completedCollabs: 18,
    experienceSummary: 'Freelance frontend engineer for 2 startups. Built 5 production web apps and 4 hackathon-winning prototypes.',
    collaborationPreferences: ['Hackathon Teams', 'Startup MVPs', 'Frontend Engineering', 'Peer Code Reviews'],
    contact: {
      email: 'aditya.verma@nitt.edu',
      whatsapp: '+91 98451 22334',
      discord: 'adityav#1337'
    },
    projects: [
      {
        id: 'p-nitt-3-1',
        title: 'TrichyCab — P2P Campus Ride Share',
        description: 'Carpooling platform for students heading to Trichy junction and airport during semester breaks.',
        tech: ['React', 'Node.js', 'PostgreSQL'],
        role: 'Full Stack Creator'
      },
      {
        id: 'p-nitt-3-2',
        title: 'NITT NotesHub Repository',
        description: 'Peer-to-peer repository for lecture slides, past question papers, and handwritten notes with upvoting.',
        tech: ['React', 'Vite', 'Express', 'Tailwind'],
        role: 'Frontend Lead'
      }
    ]
  },
  {
    id: 'nitt-4',
    collegeId: 'NIT-T',
    collegeName: 'NIT Trichy',
    name: 'Karthik Nair',
    dept: 'Mechanical Engineering',
    deptCode: 'MECH',
    year: '4th Year',
    category: 'engineering-cad',
    avatarColor: '#EA580C',
    initials: 'KN',
    bio: 'Chassis lead of the NIT Trichy Formula Student team. Skilled in lightweight frame modeling, FEA structural simulation, and rapid 3D printing.',
    skills: ['CAD', 'SolidWorks', '3D Printing', 'ANSYS', 'Product Design', 'Rapid Prototyping', 'Hardware'],
    primarySkill: 'CAD & SolidWorks',
    availability: 'Available This Week',
    hoursPerWeek: 10,
    rating: 4.9,
    completedCollabs: 8,
    experienceSummary: 'Formula Bharat Finalist. 200+ hours in SolidWorks and custom FDM/SLA 3D printer calibration.',
    collaborationPreferences: ['Robotics Hardware', 'Custom 3D Enclosures', 'Drone Frames', 'Mechanical Mounts'],
    contact: {
      email: 'karthik.nair@nitt.edu',
      whatsapp: '+91 98112 34455',
      discord: 'karthik_cad#4010'
    },
    projects: [
      {
        id: 'p-nitt-4-1',
        title: 'Formula Student Tubular Chassis',
        description: 'Designed AISI 4130 chromoly chassis compliant with Formula SAE rules. Reduced overall frame weight by 14%.',
        tech: ['SolidWorks', 'ANSYS Mechanical', 'FEA'],
        role: 'Lead Chassis Engineer'
      }
    ]
  },
  {
    id: 'nitt-5',
    collegeId: 'NIT-T',
    collegeName: 'NIT Trichy',
    name: 'Pooja Sundaram',
    dept: 'Electronics & Communication Engineering',
    deptCode: 'ECE',
    year: '3rd Year',
    category: 'video-photo',
    avatarColor: '#D97706',
    initials: 'PS',
    bio: 'Campus portrait and fest photographer with a Sony A7III. Captured over 25 fest events, sports meets, and graduating batch memories.',
    skills: ['Photography', 'Adobe Lightroom', 'Portrait Photography', 'Event Coverage', 'Photo Retouching'],
    primarySkill: 'Photography & Lightroom',
    availability: 'Weekend Only',
    hoursPerWeek: 6,
    rating: 5.0,
    completedCollabs: 16,
    experienceSummary: 'Official Photographer for Festember & Pragyan Media Team.',
    collaborationPreferences: ['Club Event Coverage', 'Professional LinkedIn Headshots', 'Merch Shoots'],
    contact: {
      email: 'pooja.sundaram@nitt.edu',
      whatsapp: '+91 98761 12399',
      discord: 'pooja_clicks#1024'
    },
    projects: [
      {
        id: 'p-nitt-5-1',
        title: 'Portraits of NITT Campus Life',
        description: 'Captured candid portraits of campus workers, mess staff, and security teams for the campus annual photo essay.',
        tech: ['Sony A7III', 'Adobe Lightroom'],
        role: 'Solo Photographer'
      }
    ]
  },
  {
    id: 'nitt-6',
    collegeId: 'NIT-T',
    collegeName: 'NIT Trichy',
    name: 'Rohan Dasgupta',
    dept: 'Electronics & Communication Engineering',
    deptCode: 'ECE',
    year: '2nd Year',
    category: 'engineering-cad',
    avatarColor: '#059669',
    initials: 'RD',
    bio: 'Hardware enthusiast tinkering with sensors, LoRa wireless networks, microcontrollers, and campus automation systems.',
    skills: ['IoT', 'Arduino', 'Embedded C', 'Raspberry Pi', 'PCB Design', 'Robotics'],
    primarySkill: 'IoT & Embedded Systems',
    availability: 'Open to Projects',
    hoursPerWeek: 8,
    rating: 4.7,
    completedCollabs: 6,
    experienceSummary: 'Core Member of Spider R&D Club. Winner of Regional Robotics Challenge 2024.',
    collaborationPreferences: ['Hardware Hackathons', 'Sensor Integrations', 'IoT Prototypes'],
    contact: {
      email: 'rohan.dasgupta@nitt.edu',
      whatsapp: '+91 97890 54321',
      discord: 'rohan_circuits#5500'
    },
    projects: [
      {
        id: 'p-nitt-6-1',
        title: 'Smart Hostel Water Monitor with LoRa',
        description: 'Ultrasonic depth sensor and LoRa module sending water level alerts to hostel wardens. Avoided 40+ tank overflow incidents.',
        tech: ['ESP32', 'LoRa', 'Embedded C'],
        role: 'Firmware & Circuit Designer'
      }
    ]
  },
  {
    id: 'nitt-7',
    collegeId: 'NIT-T',
    collegeName: 'NIT Trichy',
    name: 'Tanvi Kulkarni',
    dept: 'Artificial Intelligence & Data Science',
    deptCode: 'AI & DS',
    year: '2nd Year',
    category: 'marketing',
    avatarColor: '#9333EA',
    initials: 'TK',
    bio: 'Translating complex tech concepts into crisp prose and compelling pitch decks. Helped 4 campus student teams win seed grants.',
    skills: ['Content Writing', 'Pitch Decks', 'Technical Writing', 'Public Speaking', 'Storytelling'],
    primarySkill: 'Pitch Decks & Tech Writing',
    availability: 'Available This Week',
    hoursPerWeek: 12,
    rating: 5.0,
    completedCollabs: 13,
    experienceSummary: 'Head of Editorial Board at E-Cell NIT-T. Ghostwrote grant proposals and technical whitepapers.',
    collaborationPreferences: ['Hackathon Pitch Decks', 'Investor Presentations', 'Technical Documentation'],
    contact: {
      email: 'tanvi.kulkarni@nitt.edu',
      whatsapp: '+91 98220 11993',
      discord: 'tanvi_pitches#1234'
    },
    projects: [
      {
        id: 'p-nitt-7-1',
        title: 'E-Cell Seed Grant Pitch Deck',
        description: 'Structured narrative, financial slides, and value proposition for a student drone startup that secured ₹2.5L grant.',
        tech: ['Figma', 'Keynote'],
        role: 'Pitch Deck Strategist'
      }
    ]
  },
  {
    id: 'nitt-8',
    collegeId: 'NIT-T',
    collegeName: 'NIT Trichy',
    name: 'Devendra Rao',
    dept: 'Computer Science & Engineering',
    deptCode: 'CSE',
    year: '4th Year',
    category: 'development',
    avatarColor: '#4F46E5',
    initials: 'DR',
    bio: 'Backend engineer who cares about millisecond latencies, ACID transactions, and solid schemas. Scaled the campus club portal to 8k concurrent users.',
    skills: ['Python', 'FastAPI', 'Docker', 'PostgreSQL', 'Redis', 'Backend Architecture'],
    primarySkill: 'Backend & System Design',
    availability: 'Open to Projects',
    hoursPerWeek: 10,
    rating: 4.9,
    completedCollabs: 15,
    experienceSummary: 'Backend intern at a fintech company. Proficient in database indexing, caching strategies, and REST/gRPC APIs.',
    collaborationPreferences: ['Hackathon Backends', 'API Architecture', 'Database Optimization'],
    contact: {
      email: 'devendra.rao@nitt.edu',
      whatsapp: '+91 97112 88440',
      discord: 'deven_backend#8822'
    },
    projects: [
      {
        id: 'p-nitt-8-1',
        title: 'Campus Election Portal (High Concurrency)',
        description: 'Built zero-knowledge cryptographic voting system handling 8,000 simultaneous student votes without downtime.',
        tech: ['FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
        role: 'Lead Architect'
      }
    ]
  },
  {
    id: 'nitt-9',
    collegeId: 'NIT-T',
    collegeName: 'NIT Trichy',
    name: 'Meera Nambiar',
    dept: 'Civil Engineering',
    deptCode: 'CIVIL',
    year: '3rd Year',
    category: 'marketing',
    avatarColor: '#DB2777',
    initials: 'MN',
    bio: 'Grew the college cultural festival Instagram from 1.2k to 18k followers in 3 months. Analytical storyteller passionate about growth and campaigns.',
    skills: ['Digital Marketing', 'Social Media Strategy', 'Content Writing', 'SEO', 'Canva'],
    primarySkill: 'Social Media & Growth Marketing',
    availability: 'Available This Week',
    hoursPerWeek: 10,
    rating: 4.8,
    completedCollabs: 12,
    experienceSummary: 'Publicity Lead for Festember 2024. Growth marketing intern managing 50k weekly student audience.',
    collaborationPreferences: ['Campus Startup Launches', 'Fest Campaigns', 'Social Media Strategy'],
    contact: {
      email: 'meera.nambiar@nitt.edu',
      whatsapp: '+91 98450 99887',
      discord: 'meera_growth#3301'
    },
    projects: [
      {
        id: 'p-nitt-9-1',
        title: 'Viral Fest Reel Campaign',
        description: 'Orchestrated 14 viral Instagram Reels featuring campus professors doing trending audio skits, generating 1.2M collective impressions.',
        tech: ['Instagram Analytics', 'Content Strategy'],
        role: 'Campaign Lead'
      }
    ]
  },
  {
    id: 'nitt-10',
    collegeId: 'NIT-T',
    collegeName: 'NIT Trichy',
    name: 'Abhishek Sen',
    dept: 'Electrical & Electronics Engineering',
    deptCode: 'EEE',
    year: '3rd Year',
    category: 'music-audio',
    avatarColor: '#10B981',
    initials: 'AS',
    bio: 'Music producer, sound designer, and guitarist. Scored 3 short films, produced tracks for campus indie bands, and master podcast vocals.',
    skills: ['Music Production', 'Ableton Live', 'Sound Design', 'Audio Engineering', 'Mixing & Mastering'],
    primarySkill: 'Audio & Music Production',
    availability: 'Weekend Only',
    hoursPerWeek: 6,
    rating: 4.9,
    completedCollabs: 7,
    experienceSummary: '5+ years in Ableton Live. Released 2 EPs on Spotify. Built soundscapes for game jam projects.',
    collaborationPreferences: ['Game Audio & SFX', 'Podcast Audio Mastering', 'Short Film Scoring'],
    contact: {
      email: 'abhishek.sen@nitt.edu',
      whatsapp: '+91 99001 22334',
      discord: 'abhi_audio#4040'
    },
    projects: [
      {
        id: 'p-nitt-10-1',
        title: 'Pragyan Fest Official Anthem',
        description: 'Composed, recorded live instruments, and mastered the official festival theme song.',
        tech: ['Ableton Live 11', 'Guitar', 'Vocal Mixing'],
        role: 'Composer & Producer'
      }
    ]
  },

  // ==========================================
  // COLLEGE 2: IITM (Indian Institute of Technology, Madras)
  // ==========================================
  {
    id: 'iitm-1',
    collegeId: 'IITM',
    collegeName: 'IIT Madras',
    name: 'Vikram Ramanathan',
    dept: 'Computer Science & Engineering',
    deptCode: 'CSE',
    year: '3rd Year',
    category: 'data-ai',
    avatarColor: '#1D4ED8',
    initials: 'VR',
    bio: 'Undergrad researcher at Robert Bosch Centre for Data Science & AI. Focused on vision-language models and high-throughput PyTorch pipelines.',
    skills: ['Python', 'Machine Learning', 'PyTorch', 'Computer Vision', 'CUDA', 'Data Analysis'],
    primarySkill: 'Machine Learning & Python',
    availability: 'Available This Week',
    hoursPerWeek: 12,
    rating: 4.9,
    completedCollabs: 10,
    experienceSummary: 'Published at CVPR Workshop 2024. Lead AI dev for Shaastra TechFest hackathons.',
    collaborationPreferences: ['Hackathons', 'Model Fine-tuning', 'Research Papers', 'AI MVPs'],
    contact: {
      email: 'vikram.r@smail.iitm.ac.in',
      whatsapp: '+91 94441 23456',
      discord: 'vikram_iitm#9090'
    },
    projects: [
      {
        id: 'p-iitm-1-1',
        title: 'DeER: Edge-Vision Object Detector',
        description: 'Optimized YOLOv8 pipeline for low-power edge processors with 94% mAP on industrial inspection datasets.',
        tech: ['PyTorch', 'TensorRT', 'OpenCV'],
        role: 'Algorithm Lead'
      }
    ]
  },
  {
    id: 'iitm-2',
    collegeId: 'IITM',
    collegeName: 'IIT Madras',
    name: 'Deepa Krishnan',
    dept: 'Electrical Engineering',
    deptCode: 'EE',
    year: '4th Year',
    category: 'engineering-cad',
    avatarColor: '#059669',
    initials: 'DK',
    bio: 'CFI (Centre for Innovation) team lead specializing in FPGA programming, high-speed PCB layouts, and embedded RTOS systems.',
    skills: ['Embedded Systems', 'Verilog', 'FPGA', 'PCB Design', 'C++', 'Altium Designer'],
    primarySkill: 'FPGA & Embedded Systems',
    availability: 'Weekend Only',
    hoursPerWeek: 8,
    rating: 5.0,
    completedCollabs: 9,
    experienceSummary: 'Summer intern at Texas Instruments. Designed 4-layer mixed-signal boards for satellite payloads.',
    collaborationPreferences: ['Hardware Hackathons', 'Sensor Firmware', 'Custom PCB Layouts'],
    contact: {
      email: 'deepa.k@smail.iitm.ac.in',
      whatsapp: '+91 94442 34567',
      discord: 'deepa_circuits#1002'
    },
    projects: [
      {
        id: 'p-iitm-2-1',
        title: 'Ultra-low latency LiDAR Processor',
        description: 'FPGA accelerated point-cloud filter processing 100k points/second in real-time.',
        tech: ['Xilinx Zynq', 'Verilog', 'Vivado'],
        role: 'Digital Design Lead'
      }
    ]
  },
  {
    id: 'iitm-3',
    collegeId: 'IITM',
    collegeName: 'IIT Madras',
    name: 'Siddharth Menon',
    dept: 'Mechanical Engineering',
    deptCode: 'MECH',
    year: '3rd Year',
    category: 'engineering-cad',
    avatarColor: '#D97706',
    initials: 'SM',
    bio: 'Robotics builder at Team Raftar (Formula Student). Expert in kinematic simulations, carbon fiber tooling, and ROS integration.',
    skills: ['CAD', 'SolidWorks', 'ROS', 'Gazebo', 'Python', 'ANSYS Mechanical'],
    primarySkill: 'Robotics & Mechanical CAD',
    availability: 'Available This Week',
    hoursPerWeek: 14,
    rating: 4.8,
    completedCollabs: 12,
    experienceSummary: 'Captain of CFI Autonomous Mobile Robotics team. Won 1st place in Inter-IIT Tech Meet robotics challenge.',
    collaborationPreferences: ['Robotics Hackathons', 'CAD Enclosures', 'Simulation Pipelines'],
    contact: {
      email: 'siddharth.m@smail.iitm.ac.in',
      whatsapp: '+91 94443 45678',
      discord: 'sid_ros#4412'
    },
    projects: [
      {
        id: 'p-iitm-3-1',
        title: 'Quadruped Robot Locomotion Rig',
        description: 'Custom compliant legs and planetary actuators modeled in SolidWorks and validated in Gazebo simulations.',
        tech: ['SolidWorks', 'ROS 2', 'Python'],
        role: 'Mechanical Architect'
      }
    ]
  },
  {
    id: 'iitm-4',
    collegeId: 'IITM',
    collegeName: 'IIT Madras',
    name: 'Ananya Swaminathan',
    dept: 'Biotechnology',
    deptCode: 'BIO',
    year: '2nd Year',
    category: 'data-ai',
    avatarColor: '#7C3AED',
    initials: 'AS',
    bio: 'Computational biology enthusiast. Using Python and AlphaFold representations to analyze protein-ligand docking and genomic datasets.',
    skills: ['Python', 'Data Analysis', 'Bioinformatics', 'Pandas', 'Biopython', 'R'],
    primarySkill: 'Python & Data Analysis',
    availability: 'Available This Week',
    hoursPerWeek: 10,
    rating: 4.9,
    completedCollabs: 6,
    experienceSummary: 'Research collaborator with IITM Biotech Lab. Strong statistical modeling and Python visualization skills.',
    collaborationPreferences: ['Data Science Projects', 'Research Hackathons', 'Bio-Informatics Pipelines'],
    contact: {
      email: 'ananya.s@smail.iitm.ac.in',
      whatsapp: '+91 94444 56789',
      discord: 'ananya_bio#3001'
    },
    projects: [
      {
        id: 'p-iitm-4-1',
        title: 'Protein Binding Affinity Predictor',
        description: 'Gradient boosted model predicting binding affinities using structural descriptors from PDB files.',
        tech: ['Python', 'Scikit-learn', 'PyMOL'],
        role: 'Data Scientist'
      }
    ]
  },
  {
    id: 'iitm-5',
    collegeId: 'IITM',
    collegeName: 'IIT Madras',
    name: 'Harish Balaji',
    dept: 'Engineering Design',
    deptCode: 'ED',
    year: '3rd Year',
    category: 'design',
    avatarColor: '#DB2777',
    initials: 'HB',
    bio: 'Product and interaction designer crafting clean mobile experiences, physical product concepts, and 3D visual renders.',
    skills: ['UI/UX', 'Figma', 'Product Design', 'Blender', 'Wireframing', 'Design Systems'],
    primarySkill: 'Product Design & UI/UX',
    availability: 'Open to Projects',
    hoursPerWeek: 10,
    rating: 5.0,
    completedCollabs: 11,
    experienceSummary: 'Design coordinator for Saarang Cultural Festival. Created visual systems seen by 50k attendees.',
    collaborationPreferences: ['App UI/UX', 'Landing Pages', '3D Renders', 'Hardware Ergonomics'],
    contact: {
      email: 'harish.b@smail.iitm.ac.in',
      whatsapp: '+91 94445 67890',
      discord: 'harish_design#7821'
    },
    projects: [
      {
        id: 'p-iitm-5-1',
        title: 'Saarang Fest Companion App',
        description: 'Complete UI/UX design for real-time event schedules, ticket wallets, and campus stall navigation.',
        tech: ['Figma', 'Blender 3D'],
        role: 'Lead UI/UX Designer'
      }
    ]
  },
  {
    id: 'iitm-6',
    collegeId: 'IITM',
    collegeName: 'IIT Madras',
    name: 'Priya Seshadri',
    dept: 'Civil Engineering',
    deptCode: 'CIVIL',
    year: '2nd Year',
    category: 'engineering-cad',
    avatarColor: '#0284C7',
    initials: 'PS',
    bio: 'Smart infrastructure and geospatial data specialist. Skilled in AutoCAD civil drafting, GIS mapping, and urban drainage simulations.',
    skills: ['CAD', 'AutoCAD', 'GIS', 'QGIS', 'Python', 'Civil Modeling'],
    primarySkill: 'AutoCAD & Geospatial Analysis',
    availability: 'Weekend Only',
    hoursPerWeek: 6,
    rating: 4.7,
    completedCollabs: 5,
    experienceSummary: 'Worked with Chennai Smart City initiative student project on local flood mapping.',
    collaborationPreferences: ['GIS Mapping', 'Smart City Projects', 'Civil CAD Drafting'],
    contact: {
      email: 'priya.s@smail.iitm.ac.in',
      whatsapp: '+91 94446 78901',
      discord: 'priya_gis#4420'
    },
    projects: [
      {
        id: 'p-iitm-6-1',
        title: 'Adyar River Basin Runoff Mapping',
        description: 'Digital elevation model simulation highlighting bottleneck inundation zones during monsoon downpours.',
        tech: ['QGIS', 'AutoCAD', 'Python'],
        role: 'GIS Analyst'
      }
    ]
  },
  {
    id: 'iitm-7',
    collegeId: 'IITM',
    collegeName: 'IIT Madras',
    name: 'Rithvik Sundar',
    dept: 'Aerospace Engineering',
    deptCode: 'AERO',
    year: '4th Year',
    category: 'engineering-cad',
    avatarColor: '#EA580C',
    initials: 'RS',
    bio: 'Aerodynamics engineer with Avishkar Hyperloop team. Specialized in computational fluid dynamics (CFD), aerodynamic drag reduction, and meshing.',
    skills: ['CFD', 'OpenFOAM', 'ANSYS Fluent', 'CAD', 'SolidWorks', 'Python'],
    primarySkill: 'CFD & Aerodynamics',
    availability: 'Available This Week',
    hoursPerWeek: 8,
    rating: 4.9,
    completedCollabs: 7,
    experienceSummary: 'European Hyperloop Week finalist. Run over 400 CFD simulations for high-speed pod geometries.',
    collaborationPreferences: ['Aero Simulations', 'Drone Airframes', 'Thermal Analysis'],
    contact: {
      email: 'rithvik.s@smail.iitm.ac.in',
      whatsapp: '+91 94447 89012',
      discord: 'rithvik_aero#1123'
    },
    projects: [
      {
        id: 'p-iitm-7-1',
        title: 'Hyperloop Pod Aerodynamic Shell',
        description: 'Designed low-drag boundary layer ingestion nose cone achieving 22% lower drag in near-vacuum tubes.',
        tech: ['OpenFOAM', 'ANSYS Fluent', 'SolidWorks'],
        role: 'Aero Lead'
      }
    ]
  },
  {
    id: 'iitm-8',
    collegeId: 'IITM',
    collegeName: 'IIT Madras',
    name: 'Divya Chandran',
    dept: 'Computer Science & Engineering',
    deptCode: 'CSE',
    year: '1st Year',
    category: 'development',
    avatarColor: '#10B981',
    initials: 'DC',
    bio: 'Freshman full-stack developer who loves creating interactive web apps and automated Telegram scripts for campus activities.',
    skills: ['React', 'Web Development', 'JavaScript', 'Python', 'Tailwind CSS', 'Figma'],
    primarySkill: 'Web Development & React',
    availability: 'Available This Week',
    hoursPerWeek: 14,
    rating: 4.8,
    completedCollabs: 4,
    experienceSummary: 'Built Shaastra event registration utilities and freshman peer portal.',
    collaborationPreferences: ['Freshman Hackathons', 'Frontend Web Apps', 'Telegram Bots'],
    contact: {
      email: 'divya.c@smail.iitm.ac.in',
      whatsapp: '+91 94448 90123',
      discord: 'divya_code#9981'
    },
    projects: [
      {
        id: 'p-iitm-8-1',
        title: 'InstiHub Event Aggregator',
        description: 'Clean responsive dashboard displaying real-time talks, CFI workshops, and movie screenings across IITM campus.',
        tech: ['React', 'Tailwind', 'Vite'],
        role: 'Creator'
      }
    ]
  },

  // ==========================================
  // COLLEGE 3: VIT-C (Vellore Institute of Technology, Chennai)
  // ==========================================
  {
    id: 'vitc-1',
    collegeId: 'VIT-C',
    collegeName: 'VIT Chennai',
    name: 'Ashwin Kumar',
    dept: 'Computer Science & Engineering',
    deptCode: 'CSE',
    year: '3rd Year',
    category: 'development',
    avatarColor: '#2563EB',
    initials: 'AK',
    bio: 'Full-stack developer at VIT Chennai. Built 4 hackathon MVPs and served as tech lead for the Google Developer Student Club on campus.',
    skills: ['React', 'Next.js', 'Web Development', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    primarySkill: 'Next.js & Full Stack',
    availability: 'Available This Week',
    hoursPerWeek: 15,
    rating: 4.9,
    completedCollabs: 12,
    experienceSummary: 'HackVIT 2024 Winner. Freelanced for 3 Bangalore early-stage startups.',
    collaborationPreferences: ['Hackathons', 'Startup MVPs', 'Full Stack Engineering'],
    contact: {
      email: 'ashwin.kumar2022@vitstudent.ac.in',
      whatsapp: '+91 93210 11223',
      discord: 'ashwin_dev#2024'
    },
    projects: [
      {
        id: 'p-vitc-1-1',
        title: 'V-Proctor: Automated Lab Attendance',
        description: 'QR based real-time check-in system deployed during department lab exams with instant Excel sheet exports.',
        tech: ['Next.js', 'PostgreSQL', 'Tailwind'],
        role: 'Full Stack Dev'
      }
    ]
  },
  {
    id: 'vitc-2',
    collegeId: 'VIT-C',
    collegeName: 'VIT Chennai',
    name: 'Kavyashree R',
    dept: 'Electronics & Communication Engineering',
    deptCode: 'ECE',
    year: '2nd Year',
    category: 'video-photo',
    avatarColor: '#DB2777',
    initials: 'KR',
    bio: 'Campus media team lead & reel creator. Specialized in cinematic cuts, fast-paced hackathon project trailers, and motion effects.',
    skills: ['Video Editing', 'Premiere Pro', 'After Effects', 'CapCut', 'Motion Graphics'],
    primarySkill: 'Video Editing & Motion Graphics',
    availability: 'Available This Week',
    hoursPerWeek: 10,
    rating: 4.9,
    completedCollabs: 15,
    experienceSummary: 'Edited over 40 reels and videos for Vibrance Festival and VIT Chennai clubs.',
    collaborationPreferences: ['Hackathon Demo Videos', 'Reel Editing', 'Club Promos'],
    contact: {
      email: 'kavyashree.r2023@vitstudent.ac.in',
      whatsapp: '+91 93210 22334',
      discord: 'kavya_edits#1122'
    },
    projects: [
      {
        id: 'p-vitc-2-1',
        title: 'Vibrance 2025 Celebrity Reveal Trailer',
        description: 'Fast-cut kinetic teaser with custom sound design that accumulated 65,000 views on campus Instagram channels.',
        tech: ['Premiere Pro', 'After Effects'],
        role: 'Lead Video Editor'
      }
    ]
  },
  {
    id: 'vitc-3',
    collegeId: 'VIT-C',
    collegeName: 'VIT Chennai',
    name: 'Mohammed Zaid',
    dept: 'Information Technology',
    deptCode: 'IT',
    year: '3rd Year',
    category: 'development',
    avatarColor: '#059669',
    initials: 'MZ',
    bio: 'Mobile app developer specializing in cross-platform Flutter apps and serverless Firebase architecture.',
    skills: ['Flutter', 'Mobile Dev', 'Dart', 'Firebase', 'REST APIs', 'UI Design'],
    primarySkill: 'Flutter & Mobile Development',
    availability: 'Open to Projects',
    hoursPerWeek: 12,
    rating: 4.8,
    completedCollabs: 8,
    experienceSummary: 'Published 2 utility apps on Google Play Store with 5,000+ total downloads.',
    collaborationPreferences: ['Mobile Hackathons', 'Cross-Platform MVPs', 'Flutter Apps'],
    contact: {
      email: 'mohammed.zaid2022@vitstudent.ac.in',
      whatsapp: '+91 93210 33445',
      discord: 'zaid_flutter#5544'
    },
    projects: [
      {
        id: 'p-vitc-3-1',
        title: 'VIT Bus Buddy — Live Shuttle Tracker',
        description: 'Real-time GPS tracker app for Chennai campus transit buses with notification triggers.',
        tech: ['Flutter', 'Firebase', 'Google Maps API'],
        role: 'Mobile Architect'
      }
    ]
  },
  {
    id: 'vitc-4',
    collegeId: 'VIT-C',
    collegeName: 'VIT Chennai',
    name: 'Shreya Bose',
    dept: 'Fashion & Design',
    deptCode: 'V-SIGN',
    year: '4th Year',
    category: 'design',
    avatarColor: '#9333EA',
    initials: 'SB',
    bio: 'Design lead at VIT Chennai student design chapter. Passionate about user-centric design systems, accessibility, and micro-interactions.',
    skills: ['UI/UX', 'Figma', 'Design Systems', 'Wireframing', 'Prototyping', 'User Research'],
    primarySkill: 'UI/UX & Design Systems',
    availability: 'Available This Week',
    hoursPerWeek: 10,
    rating: 5.0,
    completedCollabs: 14,
    experienceSummary: 'Product design intern at an early-stage SaaS startup. Winner of Adobe Creative Jam 2024.',
    collaborationPreferences: ['Hackathon UI/UX', 'Design Audits', 'Mobile Wireframing'],
    contact: {
      email: 'shreya.bose2021@vitstudent.ac.in',
      whatsapp: '+91 93210 44556',
      discord: 'shreya_figma#9901'
    },
    projects: [
      {
        id: 'p-vitc-4-1',
        title: 'PeerMent: Campus Mentorship Platform',
        description: 'Comprehensive Figma design library with 60+ responsive components and WCAG AAA color palette.',
        tech: ['Figma', 'Prototyping', 'Design Tokens'],
        role: 'Product Designer'
      }
    ]
  },
  {
    id: 'vitc-5',
    collegeId: 'VIT-C',
    collegeName: 'VIT Chennai',
    name: 'Varun Teja',
    dept: 'Mechanical Engineering',
    deptCode: 'MECH',
    year: '2nd Year',
    category: 'engineering-cad',
    avatarColor: '#EA580C',
    initials: 'VT',
    bio: 'Drone builder and SolidWorks CAD designer. Experience in rapid prototyping, carbon fiber milling, and 3D printing custom mounts.',
    skills: ['CAD', 'SolidWorks', '3D Printing', 'ANSYS', 'Drone Tech', 'Rapid Prototyping'],
    primarySkill: 'SolidWorks CAD & Prototyping',
    availability: 'Weekend Only',
    hoursPerWeek: 8,
    rating: 4.7,
    completedCollabs: 6,
    experienceSummary: 'Core designer for Aeroclub VIT Chennai. Built 3 custom multi-rotor frames.',
    collaborationPreferences: ['Hardware Hackathons', 'Custom 3D Cases', 'Drone Builds'],
    contact: {
      email: 'varun.teja2023@vitstudent.ac.in',
      whatsapp: '+91 93210 55667',
      discord: 'varun_drones#7701'
    },
    projects: [
      {
        id: 'p-vitc-5-1',
        title: 'Hexacopter Disaster Relief Frame',
        description: 'Lightweight CAD model optimized for 3D printing with integrated payload release mechanism.',
        tech: ['SolidWorks', 'Ultimaker Cura', 'ANSYS'],
        role: 'Hardware Designer'
      }
    ]
  },
  {
    id: 'vitc-6',
    collegeId: 'VIT-C',
    collegeName: 'VIT Chennai',
    name: 'Keerthana Murali',
    dept: 'Computer Science (AI & ML)',
    deptCode: 'AI & ML',
    year: '3rd Year',
    category: 'data-ai',
    avatarColor: '#7C3AED',
    initials: 'KM',
    bio: 'Data science practitioner passionate about NLP, sentiment analysis, and interactive dashboard analytics in Python.',
    skills: ['Python', 'Machine Learning', 'Data Analysis', 'Pandas', 'FastAPI', 'Scikit-Learn'],
    primarySkill: 'Python & Data Analysis',
    availability: 'Available This Week',
    hoursPerWeek: 12,
    rating: 4.9,
    completedCollabs: 9,
    experienceSummary: 'Kaggle Notebooks Expert. Built sentiment tracker for campus fest feedback.',
    collaborationPreferences: ['Hackathons', 'Data Science Pipelines', 'NLP Prototypes'],
    contact: {
      email: 'keerthana.m2022@vitstudent.ac.in',
      whatsapp: '+91 93210 66778',
      discord: 'keerthana_ml#1212'
    },
    projects: [
      {
        id: 'p-vitc-6-1',
        title: 'Campus Food Mood Analysis',
        description: 'NLP sentiment classification scraping hostel feedback to pinpoint food improvement points.',
        tech: ['Python', 'Pandas', 'HuggingFace', 'FastAPI'],
        role: 'Data Scientist'
      }
    ]
  },
  {
    id: 'vitc-7',
    collegeId: 'VIT-C',
    collegeName: 'VIT Chennai',
    name: 'Nikhil George',
    dept: 'Electronics & Communication Engineering',
    deptCode: 'ECE',
    year: '1st Year',
    category: 'engineering-cad',
    avatarColor: '#0284C7',
    initials: 'NG',
    bio: 'Freshman IoT enthusiast building home automation prototypes with ESP32 and MQTT messaging.',
    skills: ['IoT', 'Arduino', 'Python', 'C++', 'ESP32', 'Automation'],
    primarySkill: 'IoT & ESP32 Prototyping',
    availability: 'Available This Week',
    hoursPerWeek: 14,
    rating: 4.6,
    completedCollabs: 4,
    experienceSummary: 'Self-taught hardware hacker. Built smart door lock prototype for hostel room.',
    collaborationPreferences: ['Freshman Hackathons', 'IoT Sensors', 'Arduino Projects'],
    contact: {
      email: 'nikhil.george2024@vitstudent.ac.in',
      whatsapp: '+91 93210 77889',
      discord: 'nikhil_iot#8899'
    },
    projects: [
      {
        id: 'p-vitc-7-1',
        title: 'Smart RFID Room Access Controller',
        description: 'WiFi connected lock controller logging entry timestamps to a Google Sheet.',
        tech: ['ESP32', 'C++', 'Blynk'],
        role: 'Solo Developer'
      }
    ]
  },
  {
    id: 'vitc-8',
    collegeId: 'VIT-C',
    collegeName: 'VIT Chennai',
    name: 'Aishwarya Raghavan',
    dept: 'Business & Management',
    deptCode: 'VITSOL',
    year: '2nd Year',
    category: 'marketing',
    avatarColor: '#DB2777',
    initials: 'AR',
    bio: 'Growth marketer and content writer. Experienced in structuring investor pitch decks, campus launch campaigns, and SEO copywriting.',
    skills: ['Digital Marketing', 'Pitch Decks', 'Content Writing', 'Social Media Strategy', 'Canva'],
    primarySkill: 'Pitch Decks & Growth Strategy',
    availability: 'Open to Projects',
    hoursPerWeek: 8,
    rating: 4.8,
    completedCollabs: 7,
    experienceSummary: 'Public relations coordinator for VIT E-Summit 2024.',
    collaborationPreferences: ['Startup Pitch Decks', 'Marketing Campaigns', 'Content Strategy'],
    contact: {
      email: 'aishwarya.r2023@vitstudent.ac.in',
      whatsapp: '+91 93210 88990',
      discord: 'aishu_growth#3412'
    },
    projects: [
      {
        id: 'p-vitc-8-1',
        title: 'E-Summit 2024 Campus Outreach Campaign',
        description: 'Spearheaded digital PR strategy resulting in 1,200 registrations across 25 colleges.',
        tech: ['Canva', 'Social Media', 'Mailchimp'],
        role: 'Campaign Lead'
      }
    ]
  },

  // ==========================================
  // COLLEGE 4: SRM-KTR (SRM Institute of Science & Tech, Kattankulathur)
  // ==========================================
  {
    id: 'srm-1',
    collegeId: 'SRM-KTR',
    collegeName: 'SRM Kattankulathur',
    name: 'Tarun Reddy',
    dept: 'Computer Science & Engineering',
    deptCode: 'CSE',
    year: '3rd Year',
    category: 'development',
    avatarColor: '#2563EB',
    initials: 'TR',
    bio: 'Full stack web builder and Milan Fest web coordinator at SRM KTR. Built student registration platforms handling 15,000 users.',
    skills: ['React', 'Web Development', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    primarySkill: 'MERN Stack Web Development',
    availability: 'Available This Week',
    hoursPerWeek: 12,
    rating: 4.9,
    completedCollabs: 13,
    experienceSummary: 'Lead web developer for Milan Cultural Fest 2024. Active competitive programmer.',
    collaborationPreferences: ['Hackathons', 'Full Stack Backends', 'Event Portals'],
    contact: {
      email: 'tarun.r@srmist.edu.in',
      whatsapp: '+91 98401 11223',
      discord: 'tarun_mern#4040'
    },
    projects: [
      {
        id: 'p-srm-1-1',
        title: 'Milan Fest Registration Portal',
        description: 'Scalable MERN ticketing portal with dynamic QR passes and payment receipt generator.',
        tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
        role: 'Lead Architect'
      }
    ]
  },
  {
    id: 'srm-2',
    collegeId: 'SRM-KTR',
    collegeName: 'SRM Kattankulathur',
    name: 'Samyuktha V',
    dept: 'Information Technology',
    deptCode: 'IT',
    year: '2nd Year',
    category: 'design',
    avatarColor: '#EC4899',
    initials: 'SV',
    bio: 'UI/UX and visual designer passionate about typography, student branding, and modern sleek web layouts.',
    skills: ['UI/UX', 'Figma', 'Graphic Design', 'Illustrator', 'Design Systems'],
    primarySkill: 'UI/UX & Visual Design',
    availability: 'Available This Week',
    hoursPerWeek: 10,
    rating: 4.8,
    completedCollabs: 10,
    experienceSummary: 'Designed festival merchandise and web UI for SRM student clubs.',
    collaborationPreferences: ['App UI/UX', 'Merch Design', 'Pitch Presentations'],
    contact: {
      email: 'samyuktha.v@srmist.edu.in',
      whatsapp: '+91 98402 22334',
      discord: 'sam_ui#1010'
    },
    projects: [
      {
        id: 'p-srm-2-1',
        title: 'SRM Campus Marketplace UI',
        description: 'Clean peer-to-peer student marketplace mockup for buying/selling used textbooks and bicycles.',
        tech: ['Figma', 'User Research'],
        role: 'Solo Designer'
      }
    ]
  },
  {
    id: 'srm-3',
    collegeId: 'SRM-KTR',
    collegeName: 'SRM Kattankulathur',
    name: 'Abhinav Raj',
    dept: 'Electronics & Communication Engineering',
    deptCode: 'ECE',
    year: '4th Year',
    category: 'engineering-cad',
    avatarColor: '#EA580C',
    initials: 'AR',
    bio: 'Hardware engineer with SRM UAV team. Experienced in drone telemetry, ArduPilot flight controllers, and PCB prototyping.',
    skills: ['CAD', 'SolidWorks', 'Drone Tech', 'Arduino', 'PCB Design', 'Hardware'],
    primarySkill: 'Drone Hardware & Telemetry',
    availability: 'Open to Projects',
    hoursPerWeek: 8,
    rating: 4.9,
    completedCollabs: 8,
    experienceSummary: 'Captained SRM Drone Racing team. Built 6 custom quadcopter airframes.',
    collaborationPreferences: ['Hardware Hackathons', 'Drone Projects', 'Circuit Design'],
    contact: {
      email: 'abhinav.r@srmist.edu.in',
      whatsapp: '+91 98403 33445',
      discord: 'abhinav_uav#7777'
    },
    projects: [
      {
        id: 'p-srm-3-1',
        title: 'Autonomous Agricultural Survey Drone',
        description: 'Custom carbon fiber quadcopter with GPS waypoint navigation and multispectral camera mount.',
        tech: ['ArduPilot', 'SolidWorks', 'Mission Planner'],
        role: 'Hardware Lead'
      }
    ]
  },
  {
    id: 'srm-4',
    collegeId: 'SRM-KTR',
    collegeName: 'SRM Kattankulathur',
    name: 'Niharika Sen',
    dept: 'Artificial Intelligence & Data Science',
    deptCode: 'AI & DS',
    year: '3rd Year',
    category: 'data-ai',
    avatarColor: '#7C3AED',
    initials: 'NS',
    bio: 'Data analyst turning messy campus data into clean dashboards and predictive models in Python and PowerBI.',
    skills: ['Python', 'Data Analysis', 'Machine Learning', 'PowerBI', 'SQL', 'Pandas'],
    primarySkill: 'Python & Data Analysis',
    availability: 'Available This Week',
    hoursPerWeek: 12,
    rating: 5.0,
    completedCollabs: 11,
    experienceSummary: 'Data analyst intern at analytics firm. 3x campus hackathon winner.',
    collaborationPreferences: ['Hackathons', 'Analytics Dashboards', 'Predictive ML Models'],
    contact: {
      email: 'niharika.s@srmist.edu.in',
      whatsapp: '+91 98404 44556',
      discord: 'niha_data#2233'
    },
    projects: [
      {
        id: 'p-srm-4-1',
        title: 'SRM Placement Trends Dashboard',
        description: 'Parsed 3 years of placement statistics to model high-paying recruiter skill profiles.',
        tech: ['Python', 'PowerBI', 'SQL'],
        role: 'Data Analyst'
      }
    ]
  },
  {
    id: 'srm-5',
    collegeId: 'SRM-KTR',
    collegeName: 'SRM Kattankulathur',
    name: 'Vigneshwaran K',
    dept: 'Civil Engineering',
    deptCode: 'CIVIL',
    year: '3rd Year',
    category: 'engineering-cad',
    avatarColor: '#059669',
    initials: 'VK',
    bio: 'Structural modeling and BIM draftsman. Skilled in Revit architecture, STAAD.Pro structural analysis, and AutoCAD drafting.',
    skills: ['CAD', 'AutoCAD', 'Revit', 'STAAD.Pro', 'Structural Design'],
    primarySkill: 'Revit & Structural CAD',
    availability: 'Weekend Only',
    hoursPerWeek: 6,
    rating: 4.7,
    completedCollabs: 5,
    experienceSummary: 'Completed certified Autodesk Revit training. Worked on campus green-building case study.',
    collaborationPreferences: ['BIM Modeling', 'Architectural Drafting', '3D Walkthroughs'],
    contact: {
      email: 'vigneshwaran.k@srmist.edu.in',
      whatsapp: '+91 98405 55667',
      discord: 'vicky_bim#6601'
    },
    projects: [
      {
        id: 'p-srm-5-1',
        title: 'Eco-Friendly Hostel Complex BIM Model',
        description: '3D structural model with daylight optimization and rainwater harvesting layout.',
        tech: ['Autodesk Revit', 'STAAD.Pro'],
        role: 'Structural Draftsman'
      }
    ]
  },
  {
    id: 'srm-6',
    collegeId: 'SRM-KTR',
    collegeName: 'SRM Kattankulathur',
    name: 'Shalini Menon',
    dept: 'Biotechnology',
    deptCode: 'BIO',
    year: '2nd Year',
    category: 'marketing',
    avatarColor: '#D97706',
    initials: 'SM',
    bio: 'Technical writer and science communicator. Translating complex engineering and medical algorithms into persuasive pitch decks.',
    skills: ['Content Writing', 'Technical Writing', 'Pitch Decks', 'Research Documentation'],
    primarySkill: 'Technical Writing & Pitch Decks',
    availability: 'Available This Week',
    hoursPerWeek: 10,
    rating: 4.8,
    completedCollabs: 9,
    experienceSummary: 'Editorial head at SRM Biotech Society. Winner of National Science Essay Prize.',
    collaborationPreferences: ['Hackathon Documentation', 'Grant Proposals', 'Pitch Decks'],
    contact: {
      email: 'shalini.m@srmist.edu.in',
      whatsapp: '+91 98406 66778',
      discord: 'shalini_writer#4455'
    },
    projects: [
      {
        id: 'p-srm-6-1',
        title: 'Smart Health Hackathon Submission Deck',
        description: 'Drafted 12-page presentation deck and user documentation that won 2nd prize at SRM Hack 2024.',
        tech: ['Figma', 'Markdown', 'Pitch Craft'],
        role: 'Technical Writer'
      }
    ]
  },
  {
    id: 'srm-7',
    collegeId: 'SRM-KTR',
    collegeName: 'SRM Kattankulathur',
    name: 'Darshan Gowda',
    dept: 'Automobile Engineering',
    deptCode: 'AUTO',
    year: '4th Year',
    category: 'engineering-cad',
    avatarColor: '#EA580C',
    initials: 'DG',
    bio: 'Powertrain designer for SRM 4x4 off-road buggy team. Proficient in SolidWorks gearing assemblies, CNC machining tolerances, and suspension geometry.',
    skills: ['CAD', 'SolidWorks', 'ANSYS', 'Product Design', 'Mechanical Assembly'],
    primarySkill: 'Automotive CAD & SolidWorks',
    availability: 'Available This Week',
    hoursPerWeek: 10,
    rating: 4.9,
    completedCollabs: 7,
    experienceSummary: 'BAJA SAE India participant. Over 150 hours of transmission CAD modeling.',
    collaborationPreferences: ['Automotive CAD', 'Hardware Prototypes', 'FEA Analysis'],
    contact: {
      email: 'darshan.g@srmist.edu.in',
      whatsapp: '+91 98407 77889',
      discord: 'darshan_baja#3003'
    },
    projects: [
      {
        id: 'p-srm-7-1',
        title: 'Custom Continuously Variable Transmission (CVT)',
        description: 'Engineered lightweight CVT casing reducing rotating mass by 1.8 kg.',
        tech: ['SolidWorks', 'ANSYS Mechanical'],
        role: 'Powertrain Lead'
      }
    ]
  },
  {
    id: 'srm-8',
    collegeId: 'SRM-KTR',
    collegeName: 'SRM Kattankulathur',
    name: 'Sanjana Roy',
    dept: 'Journalism & Mass Communication',
    deptCode: 'VISCOM',
    year: '1st Year',
    category: 'video-photo',
    avatarColor: '#0284C7',
    initials: 'SR',
    bio: 'Freshman videographer and photographer with Canon EOS R6. Covers student startup events, YouTube interview formats, and campus shorts.',
    skills: ['Photography', 'Video Editing', 'Adobe Premiere Pro', 'Lightroom', 'Cinematography'],
    primarySkill: 'Event Videography & Photography',
    availability: 'Available This Week',
    hoursPerWeek: 12,
    rating: 4.8,
    completedCollabs: 5,
    experienceSummary: 'Official photographer for SRM TEDx and club orientations.',
    collaborationPreferences: ['Project Demos', 'Startup Interviews', 'Club Photography'],
    contact: {
      email: 'sanjana.r@srmist.edu.in',
      whatsapp: '+91 98408 88990',
      discord: 'sanjana_cam#1199'
    },
    projects: [
      {
        id: 'p-srm-8-1',
        title: 'SRM Innovators: 60s Founder Series',
        description: 'Produced 5 short-form documentary videos highlighting student founders building startups in hostels.',
        tech: ['Canon EOS R6', 'Premiere Pro'],
        role: 'Director & Editor'
      }
    ]
  }
];

export function getStudentsByCollege(collegeId) {
  if (!collegeId) return [];
  const normalized = collegeId.trim().toUpperCase();
  const directMatches = STUDENTS.filter(s => s.collegeId.toUpperCase() === normalized);
  if (directMatches.length > 0) return directMatches;
  
  // If custom college code, return an isolated default group adapted to that college
  return STUDENTS.filter(s => s.collegeId === 'NIT-T').map(s => ({
    ...s,
    id: `${normalized.toLowerCase()}-${s.id}`,
    collegeId: normalized,
    collegeName: `${normalized} Campus`,
    contact: {
      ...s.contact,
      email: `${s.contact.email.split('@')[0]}@${normalized.toLowerCase()}.edu`
    }
  }));
}
