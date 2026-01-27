import React from 'react';

// Use import.meta.glob to dynamically load images from assets
// This ensures the build process knows about them and hashes them correctly.
const teamImages = import.meta.glob('../assets/team/*.{png,jpg,jpeg,svg}', { eager: true, as: 'url' });

const getImagePath = (filename) => {
  const key = `../assets/team/${filename}`;

  if (teamImages[key]) {
    return teamImages[key];
  }

  // Silent fallback for case-insensitivity
  const lowerKey = key.toLowerCase();
  const foundKey = Object.keys(teamImages).find(k => k.toLowerCase() === lowerKey);

  return foundKey ? teamImages[foundKey] : null;
};

// Fallback image path (make sure this exists or use a robust fallback)
const PLACEHOLDER_IMG = teamImages['../assets/team/placeholder.jpg'] || null;

import { groupHead, researchStaff, phdStudents, btechStudents, alumni } from '../data/teamData';

const Team = () => {
  // --- Data imported from @/data/teamData.js ---

  return (
    <div className="min-h-screen bg-rise-mist font-sans text-rise-deep">
      {/* Header */}
      <div className="bg-rise-deep border-b border-rise-ocean py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white tracking-tight">Our Team</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* --- GROUP PHOTO (New) --- */}
        <section className="w-full">
          <div className="w-full h-auto md:h-[500px] rounded-xl overflow-hidden shadow-lg border border-rise-ocean relative">
            <img
              src={getImagePath('group.jpg') || PLACEHOLDER_IMG || "https://placehold.co/1200x500?text=Team+Group+Photo"}
              alt="RISE Lab Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
              <h2 className="text-white text-2xl font-bold">RISE Lab Team</h2>
            </div>
          </div>
        </section>

        {/* --- SECTION 1: GROUP HEAD --- */}
        <section>
          <h2 className="text-2xl font-bold text-rise-deep border-l-4 border-rise-ocean pl-3 mb-8 uppercase">Group Head</h2>
          <div className="bg-rise-frost rounded-xl shadow-md border border-rise-ocean/30 overflow-hidden flex flex-col md:flex-row text-rise-deep">
            {/* 1:1 Aspect Ratio or properly contained */}
            <div className="md:w-1/3 flex-shrink-0 bg-rise-deep/10 relative">
              <div className="w-full h-full min-h-[300px] md:min-h-full">
                <img
                  src={getImagePath(groupHead.image) || PLACEHOLDER_IMG}
                  alt={groupHead.name}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <div className="md:w-2/3 p-8 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-rise-deep mb-2">{groupHead.name}</h3>
              <p className="text-xl font-medium text-rise-ocean mb-1">{groupHead.title}</p>
              <p className="text-rise-deep/80 mb-6">{groupHead.dept}</p>

              <div>
                <h4 className="text-sm font-bold text-rise-deep uppercase tracking-wide mb-2">Research Interest</h4>
                <p className="text-rise-deep leading-relaxed">{groupHead.interest}</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: RESEARCH STAFF --- */}
        <section>
          <h2 className="text-2xl font-bold text-rise-deep border-l-4 border-rise-ocean pl-3 mb-8 uppercase">Research Staff</h2>
          <div className="flex flex-col gap-8">
            {researchStaff.map((staff, idx) => (
              <div key={idx} className="bg-rise-frost rounded-xl shadow-md border border-rise-ocean/30 p-8 flex flex-col md:flex-row gap-8 items-start text-rise-deep">
                <div className="md:w-1/3 flex-shrink-0 flex justify-center md:justify-start">
                  {/* Large Avatar 1:1 */}
                  <div className="w-64 h-64 bg-rise-deep/10 rounded-lg overflow-hidden border-4 border-white/20 shadow-sm relative">
                    <img
                      src={getImagePath(staff.image) || PLACEHOLDER_IMG}
                      alt={staff.name}
                      className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-rise-deep mb-1">{staff.name}</h3>
                  <p className="text-lg font-medium text-rise-ocean mb-2">{staff.role}</p>
                  <div className="mb-4">
                    <span className="font-bold text-rise-deep">Research area:</span>
                    <p className="text-rise-deep inline ml-2">{staff.area}</p>
                  </div>
                  <p className="text-rise-deep leading-relaxed text-justify">{staff.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION 3: Ph.D. STUDENTS --- */}
        <section>
          <h2 className="text-2xl font-bold text-rise-deep border-l-4 border-rise-ocean pl-3 mb-8 uppercase">Ph.D. Students</h2>
          <div className="flex flex-col gap-10">
            {phdStudents.map((student, idx) => (
              <div key={idx} className="bg-rise-frost rounded-xl shadow-md border border-rise-ocean/30 p-8 flex flex-col md:flex-row gap-8 items-start text-rise-deep">
                <div className="md:w-1/3 flex-shrink-0 flex justify-center md:justify-start">
                  <div className="w-64 h-64 bg-rise-deep/10 rounded-lg overflow-hidden border-4 border-white/20 shadow-sm relative">
                    <img
                      src={getImagePath(student.image) || PLACEHOLDER_IMG}
                      alt={student.name}
                      className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-rise-deep mb-1">{student.name}</h3>
                  <p className="text-lg font-medium text-rise-ocean mb-2">{student.role}</p>
                  <div className="mb-4">
                    <span className="font-bold text-rise-deep">Research area:</span>
                    <p className="text-rise-deep block mt-1">{student.area}</p>
                  </div>
                  <p className="text-rise-deep leading-relaxed text-justify">{student.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION 4: B.Tech. STUDENTS --- */}
        <section>
          <h2 className="text-2xl font-bold text-rise-deep border-l-4 border-rise-ocean pl-3 mb-8 uppercase">B.Tech. Students</h2>
          {/* Grid Layout - Larger Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {btechStudents.map((student, idx) => (
              <div key={idx} className="bg-rise-frost rounded-xl shadow-md border border-rise-ocean/30 overflow-hidden flex flex-col h-full hover:shadow-lg transition">
                {/* Image Area - Larger (Aspect Square or 4:3) */}
                <div className="w-full aspect-square bg-rise-deep/10 relative">
                  <img
                    src={getImagePath(student.image) || PLACEHOLDER_IMG}
                    alt={student.name}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-bold text-rise-deep text-lg mb-1">{student.name}</h3>
                  <p className="text-sm font-semibold text-rise-deep/70 mb-3">{student.batch}</p>
                  <div className="mt-auto pt-3 border-t border-rise-deep/10">
                    <span className="text-xs font-bold text-rise-ocean uppercase tracking-wide">Research area</span>
                    <p className="text-sm text-rise-deep mt-1 leading-snug">{student.area}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION 5: ALUMINI / ASSOCIATED MEMBERS --- */}
        <section>
          <h2 className="text-2xl font-bold text-rise-deep border-l-4 border-rise-ocean pl-3 mb-8 uppercase">Alumni / Associated Members</h2>
          {/* Using similar Grid Layout as B.Tech for consistent visual size */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {alumni.map((member, idx) => (
              <div key={idx} className="bg-rise-frost rounded-xl shadow-sm border border-rise-ocean/30 overflow-hidden flex flex-col h-full hover:shadow-md transition">
                {/* Size: 1:1 Aspect ratio image */}
                <div className="w-full aspect-square bg-rise-deep/10 relative">
                  <img
                    src={getImagePath(member.image) || PLACEHOLDER_IMG}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow bg-white/50">
                  <span className="text-base font-bold text-rise-deep mb-1">{member.name}</span>
                  <span className="text-sm text-rise-deep/70 italic mt-auto">{member.place}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Team;
