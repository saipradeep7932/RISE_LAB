import React, { useState, useEffect } from 'react';
import { Folder, Image as ImageIcon, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Dynamically load images
const galleryImages = import.meta.glob('../assets/gallery/*.{png,jpg,jpeg,svg}', { eager: true, as: 'url' });

const getGalleryImage = (filename) => {
  if (!filename) return null;
  const key = `../assets/gallery/${filename}`;
  if (galleryImages[key]) return galleryImages[key];

  // Fallback: try to find any matched key that ends with the filename
  const found = Object.keys(galleryImages).find(k => k.endsWith(`/${filename}`) || k.endsWith(filename));
  return found ? galleryImages[found] : null;
};

// --- DATA STRUCTURE ---
const CATEGORIES = [
  { id: 'conferences_lectures_talks', title: 'Conferences, Lectures & Talks', description: 'Presentations, gatherings at top venues, and invited sharing sessions.' },
  { id: 'rise_lab_activities', title: 'RISE Lab Activities', description: 'People working inside lab environment.' },
  { id: 'events_ceremonies', title: 'Events & Ceremonies', description: 'Awards, grants, and celebrations.' },
  { id: 'rise_discussions_meetings', title: 'RISE Discussions & Meetings', description: 'Discussing research and sharing ideas.' },
  { id: 'life_at_rise', title: 'Life at RISE', description: 'Casual team moments, retreats, and student life.' },
  { id: 'industrial_visit', title: 'Industrial Visit', description: 'Snapshots from industrial visits and partner facility tours.' },
  { id: 'mile_stones', title: 'RISE lab Mile stones', description: 'Major milestones, thesis proposals, and key events.' },
];

const GALLERY_ITEMS = [
  { id: 1, category: 'events_ceremonies', image: "gallery1.jpg", caption: "Receiving Project Grant by the Honourable ministers at the launch of Critical Mineral Blocks auction, Delhi (June 2024)" },
  { id: 2, category: 'conferences_lectures_talks', image: "gallery2.jpg", caption: "Dr. Avala Lavakumar presenting at the IIM conference" },
  { id: 3, category: 'conferences_lectures_talks', image: "gallery3.jpg", caption: "With Prof. T. Suji" },
  { id: 4, category: 'conferences_lectures_talks', image: "gallery4.jpg", caption: "RISE Lab researchers at IIM-ATM 2024" },
  { id: 5, category: 'conferences_lectures_talks', image: "gallery5.jpg", caption: "Invited Lecture at the 20th IMC, Republic of Korea" },
  { id: 6, category: 'life_at_rise', image: "gallery6.jpg", caption: "Interns Academic Retreat - A day of learning and fun" },
  { id: 7, category: 'conferences_lectures_talks', image: "gallery7.jpg", caption: "ICAMSD 2025, MNIT Jaipur participation" },
  { id: 8, category: 'conferences_lectures_talks', image: "gallery8.jpg", caption: "IMRC 2025 Conference Highlights" },
  { id: 9, category: 'conferences_lectures_talks', image: "gallery9.jpg", caption: "Sharing RISE Lab teaching material with Professor Rajesh Prasad" },
  { id: 10, category: 'life_at_rise', image: "gallery10.jpg", caption: "Farewell to Mr. Arun - Wishing him the best!" },
  

  // NCM4-2026 Keynote at VSSUT
  { id: 17, category: 'conferences_lectures_talks', image: "vssut_keynote_1.jpeg", caption: "Dr. Avala Lavakumar delivering engaging insights during a panel discussion following his keynote address at the NCM4-2026 Conference, VSSUT Burla, highlighting the evolving landscape of contemporary materials science." },
  { id: 18, category: 'conferences_lectures_talks', image: "vssut_keynote_2.jpeg", caption: "A commemorative group photograph capturing the vibrant industry-academia interaction at the NCM4-2026 Conference at VSSUT, Burla, joined by fellow researchers, academicians, and industry professionals." },
  { id: 19, category: 'conferences_lectures_talks', image: "vssut_keynote_3.jpeg", caption: "Receiving a memento of appreciation for the keynote address on advanced materials and sustainable manufacturing at the NCM4-2026 Conference hosted by VSSUT, Burla." },
  { id: 20, category: 'industrial_visit', image: "industrial_visit_1.jpg", caption: "Industrial visit to a partner facility with team members inspecting high-temperature equipment." },

  // Lab Activities
  { id: 11, category: 'rise_lab_activities', image: "gallery_lab_1.jpg", caption: "Researchers conducting experiments in the lab" },
  { id: 12, category: 'rise_lab_activities', image: "gallery_lab_2.jpg", caption: "Researcher with TEM" },

  // Group Discussions
  { id: 13, category: 'rise_discussions_meetings', image: "gallery_discussion_1.jpg", caption: "Weekly research group meeting and updates" },
  { id: 14, category: 'rise_discussions_meetings', image: "gallery_discussion_2.jpg", caption: "Presentation on recent findings" },

  // Team Culture
  { id: 15, category: 'life_at_rise', image: "gallery_culture_1.jpg", caption: "Celebrating team milestones together" },
  { id: 16, category: 'life_at_rise', image: "gallery_culture_2.jpg", caption: "Informal team gathering" }
  ,
  // Milestones - entries
  { id: 30, category: 'mile_stones', images: ["S1.jpeg","S2.jpeg"], caption: "Santhosh Kumar TPS  14-07-2026" },
  { id: 31, category: 'mile_stones', images: ["Sus1.jpeg","Sus2.jpeg"], caption: "Shusree TPS 25-08-2026" }
   ,
  // Teachers Day celebration slideshow
 { id: 32, category: 'life_at_rise', images: ["Teachersday1.jpeg","Teachersday2.jpeg"], caption: "Teachers Day celebrations" },
  // Birthday celebrations
  { id: 33, category: 'life_at_rise', images: ["Birthday.jpeg"], caption: "Birthday celebrations" }
];

const Gallery = () => {
  // Logic: Set of expanded category IDs
  const [expandedCategories, setExpandedCategories] = useState([]);

  // Toggle Function
  const toggleCategory = (catId) => {
    setExpandedCategories(prev => {
      if (prev.includes(catId)) {
        return prev.filter(id => id !== catId); // Collapse
      } else {
        return [...prev, catId]; // Expand (keep others open)
      }
    });
  };

  const isExpanded = (catId) => expandedCategories.includes(catId);

  // Get preview image for category
  const getCategoryPreview = (catId) => {
    // Use specific logo for milestones
    if (catId === 'mile_stones') return '4387887.png';

    const item = GALLERY_ITEMS.find(i => i.category === catId);
    if (!item) return null;
    if (item.image) return item.image;
    if (item.images && item.images.length) return item.images[0];
    return null;
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F5F5F5] rounded-2xl shadow-md p-8 md:p-12 min-h-[600px]">

          <div className="flex flex-col gap-6">
            {CATEGORIES.map(cat => {
              const isOpen = isExpanded(cat.id);
              const catItems = GALLERY_ITEMS.filter(item => item.category === cat.id);
              const hasItems = catItems.length > 0;

              return (
                <div
                  key={cat.id}
                  className={`bg-white rounded-xl shadow-md border ${isOpen ? 'border-[#FF6600]' : 'border-gray-100'} overflow-hidden transition-all duration-300`}
                >
                  <div
                    onClick={() => toggleCategory(cat.id)}
                    className="cursor-pointer p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    role="button"
                    aria-expanded={isOpen}
                    tabIndex={0}
                  >
                    <div className="flex items-center gap-4">
                      {/* Small Preview Thumbnail */}
                      <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200">
                        {getCategoryPreview(cat.id) ? (
                          <img
                            src={getGalleryImage(getCategoryPreview(cat.id))}
                            alt="Preview"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="flex items-center justify-center h-full text-gray-400">
                            <ImageIcon size={20} />
                          </div>
                        )}
                      </div>

                      <div>
                        <h3 className={`text-xl font-bold ${isOpen ? 'text-[#FF6600]' : 'text-[#0B5472]'}`}>{cat.title}</h3>
                        <p className="text-sm text-gray-500">{cat.description}</p>
                      </div>
                    </div>

                    <div className="text-gray-400">
                      {isOpen ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
                    </div>
                  </div>

                  {/* Collapsible Content */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-100"
                      >
                        <div className="p-6 bg-gray-50/50">
                          {hasItems ? (
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {catItems.map(item => (
                                  <div key={item.id} className="group break-inside-avoid bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                                    {item.images && item.images.length > 0 ? (
                                      <InlineSlideshow images={item.images} getImage={getGalleryImage} caption={item.caption} />
                                    ) : (
                                      <>
                                        <div className="relative overflow-hidden h-72 bg-gray-200">
                                          <img
                                            src={getGalleryImage(item.image)}
                                            alt={item.caption}
                                            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                                            style={{maxHeight: '100%'}}
                                            onError={(e) => { e.target.style.display = 'none'; }}
                                          />
                                        </div>
                                        <div className="p-5">
                                          <p className="text-base text-gray-800 font-medium leading-relaxed text-left">
                                            {item.caption}
                                          </p>
                                        </div>
                                      </>
                                    )}
                                  </div>
                                ))}
                              </div>
                          ) : (
                            <div className="text-center py-8 text-gray-400 italic">No images in this category yet.</div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Gallery;

// Inline slideshow used inside a card when `images` array is provided
const InlineSlideshow = ({ images, getImage, caption }) => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;
    const t = setInterval(() => setIdx(i => (i + 1) % images.length), 3500);
    return () => clearInterval(t);
  }, [images]);

  const prev = (e) => { e.stopPropagation(); setIdx(i => (i - 1 + images.length) % images.length); };
  const next = (e) => { e.stopPropagation(); setIdx(i => (i + 1) % images.length); };

  const imgUrl = getImage(images[idx]);

  return (
    <>
      <div className="relative overflow-hidden h-72 bg-gray-200 flex items-center justify-center">
        {images && images.length > 0 ? (
          images.map((src, i) => {
            const url = getImage(src);
            return url ? (
              <img
                key={src}
                src={url}
                alt={`${caption} ${i + 1}`}
                className={`absolute inset-0 m-auto max-h-full max-w-full transition-opacity duration-700 ease-in-out ${i === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                style={{ objectFit: 'contain' }}
              />
            ) : null;
          })
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">Image not found</div>
        )}

        {/* controls */}
        <button onClick={prev} className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md z-20">
          ‹
        </button>
        <button onClick={next} className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md z-20">
          ›
        </button>
      </div>
      <div className="p-5">
        <p className="text-base text-gray-800 font-medium leading-relaxed text-left">{caption}</p>
        <div className="text-sm text-gray-500 mt-2">{idx + 1} / {images.length}</div>
      </div>
    </>
  );
};

