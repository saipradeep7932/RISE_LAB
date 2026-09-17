import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Use import.meta.glob to dynamically load images from assets
// This ensures the build process knows about them and hashes them correctly.
const teamImages = import.meta.glob('../assets/team/*.{png,jpg,jpeg,svg}', { eager: true, as: 'url' });

const getImagePath = (filename) => {
  if (!filename) return null;

  // 1. Try an exact match first (fastest)
  const exactKey = `../assets/team/${filename}`;
  if (teamImages[exactKey]) {
    return teamImages[exactKey];
  }

  // 2. Extension-Agnostic Fallback
  // If data says "Kolli.jpg" but file is "Kolli.png", this finds it by matching just "kolli"
  const baseNameRequested = filename.split('.')[0].toLowerCase();

  const foundKey = Object.keys(teamImages).find(k => {
    // Extract the filename from the path, then chop off its extension
    const fileBaseName = k.split('/').pop().split('.')[0].toLowerCase();
    return fileBaseName === baseNameRequested;
  });

  return foundKey ? teamImages[foundKey] : null;
};

// Fallback image path (Now safely uses the function so placeholder.png works too!)
const PLACEHOLDER_IMG = getImagePath('placeholder') || null;

import { groupHead, researchStaff, phdStudents, btechStudents, alumni } from '../data/teamData';

const TeamPortrait = ({ primaryImage, hoverImage, alt, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const activeImage = isHovered ? hoverImage || primaryImage : primaryImage;

  return (
    <div
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={activeImage || 'team-portrait'}
          src={activeImage || PLACEHOLDER_IMG}
          alt={alt}
          initial={{ opacity: 0, scale: 1.18 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="absolute inset-0 w-full h-full"
          style={{
            objectFit: isHovered ? 'contain' : 'cover',
            objectPosition: isHovered ? 'center center' : 'center 18%',
            backgroundColor: '#fff',
            padding: isHovered ? '8%' : '0'
          }}
        />
      </AnimatePresence>
    </div>
  );
};

const Team = () => {
  // Slideshow Logic
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Lightbox for zooming images
  const [lightboxSrc, setLightboxSrc] = useState(null);

  const groupImages = Object.keys(teamImages)
    .filter((key) => /group/i.test(key) && !/placeholder/i.test(key))
    .map((key) => key.split('/').pop().replace(/\.[^/.]+$/, ''))
    .filter((name) => name && name.toLowerCase() !== 'group')
    .sort((a, b) => {
      const groupNumber = (name) => {
        const match = name.match(/group(\d+)/i);
        return match ? Number(match[1]) : 0;
      };
      return groupNumber(b) - groupNumber(a);
    });

  useEffect(() => {
    if (groupImages.length <= 1) return undefined;

    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % groupImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [groupImages]);

  const activeGroupImage = groupImages[currentImageIndex] || null;

  return (
    <div className="min-h-screen bg-white font-sans text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* --- GROUP PHOTO SLIDESHOW --- */}
        <section className="w-full">
          <div className="w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden border border-white/60 bg-gray-100 relative shadow-[0_30px_60px_rgba(0,0,0,0.16)] ring-1 ring-gray-200">
            {groupImages.length > 0 ? (
              <AnimatePresence>
                <motion.div
                  key={activeGroupImage}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                  className="absolute inset-0 p-2 md:p-3"
                >
                  <img
                    src={getImagePath(activeGroupImage) || PLACEHOLDER_IMG || `https://placehold.co/1200x500?text=Team+Photo+${currentImageIndex + 1}`}
                    alt={`RISE Lab Team ${currentImageIndex + 1}`}
                    className="w-full h-full rounded-xl block"
                    style={{
                      objectFit: 'contain',
                      objectPosition: 'center center',
                      backgroundColor: '#f3f4f6',
                      boxShadow: '0 18px 36px rgba(15, 23, 42, 0.18)',
                      filter: 'drop-shadow(0 12px 20px rgba(0, 0, 0, 0.14))'
                    }}
                  />
                </motion.div>
              </AnimatePresence>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500">
                No team group photo available
              </div>
            )}

            {groupImages.length > 0 && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-16 pointer-events-none">
                <h2 className="text-white text-2xl font-bold mb-4">RISE Lab Team</h2>

                <div className="flex gap-2">
                  {groupImages.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentImageIndex ? 'w-8 bg-[#FF6600]' : 'w-2 bg-white/50'}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* --- SECTION 1: GROUP HEAD --- */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B5472] border-l-4 border-rise-ocean pl-3 mb-8 uppercase">Group Head</h2>
          <div className="bg-[#F5F5F5] rounded-xl shadow-[inset_0_0_20px_rgba(0,0,0,0.08)] border border-[#F5F5F5] overflow-hidden flex flex-col md:flex-row">
            {/* 1:1 Aspect Ratio or properly contained */}
            <div className="md:w-1/3 flex-shrink-0 flex items-center justify-center bg-white p-6">
              <div className="w-full max-w-[320px] aspect-square bg-white rounded-lg overflow-hidden border-4 border-white shadow-sm relative">
                <TeamPortrait
                  primaryImage={getImagePath(groupHead.image) || PLACEHOLDER_IMG}
                  hoverImage={getImagePath(groupHead.hoverImage) || getImagePath(groupHead.image) || PLACEHOLDER_IMG}
                  alt={groupHead.name}
                  className="absolute inset-0"
                />
              </div>
            </div>
            <div className="md:w-2/3 px-6 py-5 flex flex-col justify-center border-l-4 border-[#FF6600]">
              <h3 className="text-3xl font-bold text-[#FF6600] mb-2">{groupHead.name}</h3>
              <p className="text-xl font-medium text-[#0B5472] mb-1">{groupHead.title}</p>
              <p className="text-black mb-6">{groupHead.dept}</p>

              <div>
                <h4 className="text-sm font-bold text-[#0B5472] uppercase tracking-wide mb-2">Research Interest</h4>
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
          <div className="flex flex-col gap-12">
            {researchStaff.map((staff, idx) => {
              // 1st (idx 0) -> Left (self-start), 2nd (idx 1) -> Right (self-end)
              const alignmentClass = idx % 2 === 0 ? 'self-start' : 'self-end';

              return (
                <div key={idx} className={`w-full md:w-[85%] bg-[#F5F5F5] rounded-xl shadow-[inset_0_0_20px_rgba(0,0,0,0.08)] border border-[#F5F5F5] px-6 py-5 flex flex-col md:flex-row gap-8 items-center border-l-4 border-l-[#FF6600] ${alignmentClass}`}>
                  <div className="w-full md:w-1/3 flex-shrink-0 flex justify-center">
                    {/* Large Avatar 1:1 */}
                    <div className="w-64 h-64 bg-white rounded-lg overflow-hidden border-4 border-white shadow-sm relative">
                      <TeamPortrait
                        primaryImage={getImagePath(staff.image) || PLACEHOLDER_IMG}
                        hoverImage={getImagePath(staff.hoverImage) || getImagePath(staff.image) || PLACEHOLDER_IMG}
                        alt={staff.name}
                        className="absolute inset-0"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3 flex flex-col justify-center text-left">
                    <h3 className="text-3xl font-bold text-[#FF6600] mb-1">{staff.name}</h3>
                    <p className="text-xl font-medium text-[#0B5472] mb-4">{staff.role}</p>

                    <div className="mb-4 bg-white/50 px-4 py-2 rounded-lg border-l-4 border-[#FF6600] w-full">
                      <span className="font-bold text-[#0B5472] text-sm uppercase tracking-wide">Research Area</span>
                      <p className="text-black mt-1 text-sm">{staff.area}</p>
                    </div>
                    <p className="text-black leading-relaxed text-justify text-sm">{staff.bio}</p>

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

        {/* --- SECTION 3: Ph.D. STUDENTS (ALTERNATING LAYOUT) --- */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B5472] border-l-4 border-rise-ocean pl-3 mb-8 uppercase">Ph.D. Students</h2>
          <div className="flex flex-col gap-12">
            {phdStudents.map((student, idx) => {
              // 1st (idx 0) -> Left (self-start), 2nd (idx 1) -> Right (self-end)
              const alignmentClass = idx % 2 === 0 ? 'self-start' : 'self-end';
              const isSushree = student.name.toLowerCase().includes('sushree');

              return (
                <div
                  key={idx}
                  className={`w-full md:w-[85%] rounded-xl shadow-[inset_0_0_20px_rgba(0,0,0,0.08)] border-l-4 border-l-[#FF6600] flex flex-col md:flex-row gap-8 items-center px-6 py-5 ${alignmentClass}`}
                  style={{ backgroundColor: isSushree ? '#ffffff' : '#F5F5F5' }}
                >
                  {/* Photo Side */}
                  <div className="w-full md:w-1/3 flex-shrink-0 flex justify-center">
                    <div
                      className="w-64 h-64 rounded-lg overflow-hidden shadow-sm relative border border-gray-100"
                      style={{ backgroundColor: '#fff' }}
                    >
                      <TeamPortrait
                        primaryImage={getImagePath(student.image) || PLACEHOLDER_IMG}
                        hoverImage={getImagePath(student.hoverImage) || getImagePath(student.image) || PLACEHOLDER_IMG}
                        alt={student.name}
                        className="absolute inset-0"
                      />
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full md:w-2/3 flex flex-col justify-center text-left">
                    <h3 className="text-3xl font-bold text-[#FF6600] mb-1">{student.name}</h3>
                    <p className="text-xl font-medium text-[#0B5472] mb-6">{student.role}</p>

                    <div className="mb-4 bg-white/50 px-4 py-2 rounded-lg border-l-4 border-[#FF6600] w-full">
                      <span className="font-bold text-[#0B5472] text-sm uppercase tracking-wide">Research Area</span>
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
                <div className="w-full aspect-square bg-gray-200 p-4 relative">
                  <img
                    src={getImagePath(student.image) || PLACEHOLDER_IMG}
                    alt={student.name}
                    className="w-full h-full object-contain rounded-lg bg-[#f5f5f5]"
                    style={{ objectPosition: 'center center' }}
                  />
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-bold text-[#FF6600] text-lg mb-1">{student.name}</h3>
                  <p className="text-sm font-semibold text-gray-700">{student.timeline}</p>

                  {/* BOTTOM ACCENT WAVE */}
                  <div className="w-full mt-auto pt-4 opacity-40 group-hover:opacity-70 transition-opacity duration-500">
                    <svg className="w-full h-2 text-orange-400 fill-none stroke-current stroke-[3]" viewBox="0 0 100 12" preserveAspectRatio="none">
                      <path d="M0,6 C30,12 70,0 100,6" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION 5: ALUMNI --- */}
        <section>
          <h2 className="text-2xl font-bold text-[#0B5472] border-l-4 border-rise-ocean pl-3 mb-8 uppercase">Alumni / Associated Members</h2>
          {/* Match B.Tech grid and card framing for uniform size */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {alumni.map((member, idx) => {
              const isRahul = (member.image || '').toLowerCase().includes('rahul_kumar_sahu');
              const imgSrc = getImagePath(member.image) || PLACEHOLDER_IMG;
              const imgClass = isRahul
                ? 'w-full h-full object-cover rounded-lg bg-[#f5f5f5] transform transition-transform duration-300 group-hover:scale-105'
                : 'w-full h-full object-contain rounded-lg bg-[#f5f5f5] transform transition-transform duration-300 group-hover:scale-105';
              const imgStyle = isRahul ? { objectPosition: 'center 30%' } : { objectPosition: 'center center' };

              return (
                <div key={idx} className="bg-[#F5F5F5] rounded-xl shadow-[inset_0_0_20px_rgba(0,0,0,0.08)] border border-[#F5F5F5] border-l-4 border-l-[#FF6600] overflow-hidden flex flex-col h-full hover:shadow-md transition group">
                  {/* Image area matches B.Tech card: square aspect, padded, and contain */}
                  <div className="w-full aspect-square bg-gray-200 p-4 relative cursor-zoom-in" onClick={() => setLightboxSrc(imgSrc)}>
                    <img src={imgSrc} alt={member.name} className={imgClass} style={imgStyle} />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="text-base font-bold text-[#FF6600] mb-1">{member.name}</span>
                    <span className="text-sm text-black italic">{member.timeline}</span>

                    {/* BOTTOM ACCENT WAVE */}
                    <div className="w-full mt-auto pt-4 opacity-40 group-hover:opacity-70 transition-opacity duration-500">
                      <svg className="w-full h-2 text-orange-400 fill-none stroke-current stroke-[3]" viewBox="0 0 100 12" preserveAspectRatio="none">
                        <path d="M0,6 C30,12 70,0 100,6" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>
      {/* Lightbox modal for zoomed image */}
      {lightboxSrc && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center" onClick={() => setLightboxSrc(null)}>
          <div className="max-w-[90%] max-h-[90%]" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxSrc} alt="zoomed" className="w-full h-auto max-h-[90vh] rounded-lg shadow-2xl object-contain" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;
