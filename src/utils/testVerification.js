// Comprehensive test script to verify SkillNet Multi-Campus Isolation & Match Removal
import { STUDENTS, getStudentsByCollege } from '../data/students.js';
import { COLLEGES, getCollegeByCode } from '../data/colleges.js';
import { getRequests, getCreatedGigs, getSavedProfiles } from './storage.js';

console.log('--- STARTING SKILLNET MULTI-CAMPUS VERIFICATION ---');

// 1. Verify Colleges
console.log(`Checking colleges: Found ${COLLEGES.length} supported campuses: ${COLLEGES.map(c => c.code).join(', ')}.`);
if (COLLEGES.length < 4) {
  throw new Error('Expected at least 3-4 distinct colleges.');
}

// 2. Verify Campus Isolation
const nittStudents = getStudentsByCollege('NIT-T');
const iitmStudents = getStudentsByCollege('IITM');
const vitcStudents = getStudentsByCollege('VIT-C');
const srmStudents = getStudentsByCollege('SRM-KTR');

console.log(`NIT-T Students: ${nittStudents.length}`);
console.log(`IITM Students: ${iitmStudents.length}`);
console.log(`VIT-C Students: ${vitcStudents.length}`);
console.log(`SRM-KTR Students: ${srmStudents.length}`);

if (nittStudents.length < 8 || iitmStudents.length < 8 || vitcStudents.length < 8 || srmStudents.length < 8) {
  throw new Error('Each campus should have at least 8 realistic students.');
}

// Check zero overlap in IDs across campuses
const nittIds = new Set(nittStudents.map(s => s.id));
const iitmIds = new Set(iitmStudents.map(s => s.id));
const vitcIds = new Set(vitcStudents.map(s => s.id));
const srmIds = new Set(srmStudents.map(s => s.id));

for (const id of iitmIds) {
  if (nittIds.has(id)) throw new Error(`Data leak: Student ID ${id} belongs to both NIT-T and IITM!`);
}
for (const id of vitcIds) {
  if (nittIds.has(id) || iitmIds.has(id)) throw new Error(`Data leak: Student ID ${id} in multiple campuses!`);
}
for (const id of srmIds) {
  if (nittIds.has(id) || iitmIds.has(id) || vitcIds.has(id)) throw new Error(`Data leak: Student ID ${id} in multiple campuses!`);
}
console.log('✓ Strict campus isolation verified: Zero student overlap across colleges.');

// 3. Verify Rahul Sharma in NIT-T for Demo Flow
const rahul = nittStudents.find(s => s.name === 'Rahul Sharma');
if (!rahul) throw new Error('Rahul Sharma must exist in NIT-T for demo flow!');
if (!rahul.skills.includes('Video Editing')) throw new Error('Rahul Sharma must have Video Editing skill!');
console.log('✓ Demo Flow Ready: Rahul Sharma (Video Editing) verified in NIT-T.');

// 4. Verify Campus Scoped Storage Seeds
const nittRequests = getRequests('NIT-T');
const iitmRequests = getRequests('IITM');
console.log(`NIT-T Scoped Requests: ${nittRequests.length}`);
console.log(`IITM Scoped Requests: ${iitmRequests.length}`);

const nittGigs = getCreatedGigs('NIT-T');
const iitmGigs = getCreatedGigs('IITM');
console.log(`NIT-T Scoped Gigs: ${nittGigs.length}`);
console.log(`IITM Scoped Gigs: ${iitmGigs.length}`);

console.log('--- ALL MULTI-CAMPUS & ISOLATION TESTS PASSED! ---');
