export const COLLEGES = [
  {
    code: 'NIT-T',
    name: 'NIT Trichy',
    fullName: 'National Institute of Technology, Tiruchirappalli',
    city: 'Tiruchirappalli, Tamil Nadu'
  },
  {
    code: 'IITM',
    name: 'IIT Madras',
    fullName: 'Indian Institute of Technology, Madras',
    city: 'Chennai, Tamil Nadu'
  },
  {
    code: 'VIT-C',
    name: 'VIT Chennai',
    fullName: 'Vellore Institute of Technology, Chennai Campus',
    city: 'Chennai, Tamil Nadu'
  },
  {
    code: 'SRM-KTR',
    name: 'SRM Kattankulathur',
    fullName: 'SRM Institute of Science and Technology, KTR Campus',
    city: 'Kattankulathur, Tamil Nadu'
  }
];

export function getCollegeByCode(code) {
  if (!code) return null;
  const normalized = code.trim().toUpperCase();
  const found = COLLEGES.find(c => c.code.toUpperCase() === normalized);
  if (found) return found;
  
  // Dynamic fallback for any custom college code
  return {
    code: normalized,
    name: `${normalized} Campus`,
    fullName: `${normalized} Student Network`,
    city: 'Campus Network'
  };
}
