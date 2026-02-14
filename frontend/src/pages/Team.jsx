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
    <div className="min-h-screen bg-white font-sans text-black">
      {/* Header */}
      {/* <div className="bg-white border-b border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[#0B5472] tracking-tight">Our Team</h1>
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* --- GROUP PHOTO (New) --- */}
        <section className="w-full">
          <div className="w-full h-auto md:h-[500px] rounded-xl overflow-hidden shadow-lg border border-[#F5F5F5] relative">
            <img
              src={getImagePath('group.jpg') || PLACEHOLDER_IMG || "https://placehold.co/1200x500?text=Team+Group+Photo"}
              alt="RISE Lab Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h2 className="text-white text-2xl font-bold">RISE Lab Team</h2>
            </div>
          </div>
        </section>

        {/* --- SECTION 1: GROUP HEAD --- */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B5472] border-l-4 border-rise-ocean pl-3 mb-8 uppercase">Group Head</h2>
          <div className="bg-[#F5F5F5] rounded-xl shadow-[inset_0_0_20px_rgba(0,0,0,0.08)] border border-[#F5F5F5] overflow-hidden flex flex-col md:flex-row">
            {/* 1:1 Aspect Ratio or properly contained */}
            <div className="md:w-1/3 flex-shrink-0 bg-gray-200 relative">
              <div className="w-full h-full min-h-[300px] md:min-h-full">
                <img
                  src={getImagePath(groupHead.image) || PLACEHOLDER_IMG}
                  alt={groupHead.name}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <div className="md:w-2/3 px-6 py-5 flex flex-col justify-center border-l-4 border-[#FF6600]">
              <h3 className="text-3xl font-bold text-[#0B5472] mb-2">{groupHead.name}</h3>
              <p className="text-xl font-medium text-[#0B5472] mb-1">{groupHead.title}</p>
              <p className="text-black mb-6">{groupHead.dept}</p>

              <div>
                <h4 className="text-sm font-bold text-[#FF6600] uppercase tracking-wide mb-2">Research Interest</h4>
                <p className="text-black leading-relaxed text-sm">{groupHead.interest}</p>
              </div>

              {/* BOTTOM ACCENT WAVE */}
              <div className="w-full mt-6 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
                <svg className="w-full h-3 text-orange-400 fill-none stroke-current stroke-[3]" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0,6 C30,12 70,0 100,6" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: RESEARCH STAFF --- */}
        <section className="bg-white rounded-3xl">
          <h2 className="text-2xl font-bold text-[#0B5472] border-l-4 border-rise-ocean pl-3 mb-8 uppercase">Research Staff</h2>
          <div className="flex flex-col gap-8">
            {researchStaff.map((staff, idx) => (
              <div key={idx} className="bg-[#F5F5F5] rounded-xl shadow-[inset_0_0_20px_rgba(0,0,0,0.08)] border border-[#F5F5F5] px-6 py-5 flex flex-col md:flex-row gap-8 items-start border-l-4 border-l-[#FF6600]">
                <div className="md:w-1/3 flex-shrink-0 flex justify-center md:justify-start">
                  {/* Large Avatar 1:1 */}
                  <div className="w-64 h-64 bg-gray-200 rounded-lg overflow-hidden border-4 border-white shadow-sm relative">
                    <img
                      src={getImagePath(staff.image) || PLACEHOLDER_IMG}
                      alt={staff.name}
                      className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-[#0B5472] mb-1">{staff.name}</h3>
                  <p className="text-lg font-medium text-[#0B5472] mb-4">{staff.role}</p>

                  <div className="mb-4">
                    <span className="font-bold text-[#FF6600]">Research area:</span>
                    <p className="text-black inline ml-2 text-sm">{staff.area}</p>
                  </div>
                  <p className="text-black leading-relaxed text-justify text-sm">{staff.bio}</p>

                  {/* BOTTOM ACCENT WAVE */}
                  <div className="w-full mt-4 opacity-40 group-hover:opacity-70 transition-opacity duration-500">
                    <svg className="w-full h-3 text-orange-400 fill-none stroke-current stroke-[3]" viewBox="0 0 100 12" preserveAspectRatio="none">
                      <path d="M0,6 C30,12 70,0 100,6" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION 3: Ph.D. STUDENTS (ALTERNATING LAYOUT) --- */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B5472] border-l-4 border-rise-ocean pl-3 mb-8 uppercase">Ph.D. Students</h2>
          <div className="flex flex-col gap-12">
            {phdStudents.map((student, idx) => {
              // 1st (idx 0) -> Left (self-start), 2nd (idx 1) -> Right (self-end)
              const alignmentClass = idx % 2 === 0 ? 'self-start' : 'self-end';

              return (
                <div
                  key={idx}
                  className={`w-full md:w-[85%] bg-[#F5F5F5] rounded-xl shadow-[inset_0_0_20px_rgba(0,0,0,0.08)] border-l-4 border-l-[#FF6600] flex flex-col md:flex-row gap-8 items-center px-6 py-5 ${alignmentClass}`}
                >
                  {/* Photo Side */}
                  <div className="w-full md:w-1/3 flex-shrink-0 flex justify-center">
                    <div className="w-64 h-64 bg-gray-200 rounded-lg overflow-hidden shadow-sm relative border border-gray-100">
                      <img
                        src={getImagePath(student.image) || PLACEHOLDER_IMG}
                        alt={student.name}
                        className="absolute inset-0 w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full md:w-2/3 flex flex-col justify-center text-left">
                    <h3 className="text-3xl font-bold text-[#0B5472] mb-1">{student.name}</h3>
                    <p className="text-xl font-medium text-[#0B5472] mb-6">{student.role}</p>

                    <div className="mb-4 bg-white/50 px-4 py-2 rounded-lg border-l-4 border-[#FF6600] w-full">
                      <span className="font-bold text-[#FF6600] text-sm uppercase tracking-wide">Research Area</span>
                      <p className="text-black mt-1 text-sm">{student.area}</p>
                    </div>

                    <p className="text-black leading-relaxed text-justify text-sm">
                      {student.bio}
                    </p>

                    {/* BOTTOM ACCENT WAVE */}
                    <div className="w-full mt-6 opacity-40 group-hover:opacity-70 transition-opacity duration-500">
                      <svg className="w-full h-3 text-orange-400 fill-none stroke-current stroke-[3]" viewBox="0 0 100 12" preserveAspectRatio="none">
                        <path d="M0,6 C30,12 70,0 100,6" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* --- SECTION 4: B.Tech. STUDENTS --- */}
        <section className="bg-white rounded-3xl">
          <h2 className="text-2xl font-bold text-[#0B5472] border-l-4 border-rise-ocean pl-3 mb-8 uppercase">B.Tech. Students</h2>
          {/* Grid Layout - Larger Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {btechStudents.map((student, idx) => (
              <div key={idx} className="bg-[#F5F5F5] rounded-xl shadow-[inset_0_0_20px_rgba(0,0,0,0.08)] border border-[#F5F5F5] border-l-4 border-l-[#FF6600] overflow-hidden flex flex-col h-full hover:shadow-md transition group">
                {/* Image Area */}
                <div className="w-full aspect-square bg-gray-200 relative">
                  <img
                    src={getImagePath(student.image) || PLACEHOLDER_IMG}
                    alt={student.name}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-bold text-[#0B5472] text-lg mb-1">{student.name}</h3>
                  <p className="text-sm font-semibold text-gray-700 mb-3">{student.batch}</p>

                  <div className="mt-auto pt-3 border-t border-gray-300">
                    <span className="text-xs font-bold text-[#FF6600] uppercase tracking-wide">Research area</span>
                    <p className="text-sm text-black mt-1 leading-snug">{student.area}</p>
                  </div>

                  {/* BOTTOM ACCENT WAVE */}
                  <div className="w-full mt-3 opacity-40 group-hover:opacity-70 transition-opacity duration-500">
                    <svg className="w-full h-2 text-orange-400 fill-none stroke-current stroke-[3]" viewBox="0 0 100 12" preserveAspectRatio="none">
                      <path d="M0,6 C30,12 70,0 100,6" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION 5: ALUMINI --- */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B5472] border-l-4 border-rise-ocean pl-3 mb-8 uppercase">Alumni / Associated Members</h2>
          {/* Using similar Grid Layout as B.Tech for consistent visual size */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {alumni.map((member, idx) => (
              <div key={idx} className="bg-[#F5F5F5] rounded-xl shadow-[inset_0_0_20px_rgba(0,0,0,0.08)] border border-[#F5F5F5] border-l-4 border-l-[#FF6600] overflow-hidden flex flex-col h-full hover:shadow-md transition group">
                {/* Size: 1:1 Aspect ratio image */}
                <div className="w-full aspect-square bg-gray-200 relative">
                  <img
                    src={getImagePath(member.image) || PLACEHOLDER_IMG}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow bg-[#F5F5F5]">
                  <span className="text-base font-bold text-[#0B5472] mb-1">{member.name}</span>
                  <span className="text-sm text-black italic mt-auto">{member.place}</span>

                  {/* BOTTOM ACCENT WAVE */}
                  <div className="w-full mt-2 opacity-40 group-hover:opacity-70 transition-opacity duration-500">
                    <svg className="w-full h-2 text-orange-400 fill-none stroke-current stroke-[3]" viewBox="0 0 100 12" preserveAspectRatio="none">
                      <path d="M0,6 C30,12 70,0 100,6" strokeLinecap="round" />
                    </svg>
                  </div>
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
