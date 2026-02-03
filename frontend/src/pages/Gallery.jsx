import React, { useState } from 'react';
import { ArrowLeft, Folder, Image as ImageIcon, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Dynamically load images
const galleryImages = import.meta.glob('../assets/gallery/*.{png,jpg,jpeg,svg}', { eager: true, as: 'url' });

const getGalleryImage = (filename) => {
  const key = `../assets/gallery/${filename}`;
  return galleryImages[key] || null;
};

// --- DATA STRUCTURE ---
const CATEGORIES = [
  { id: 'conferences', title: 'Conferences', description: 'Presentations and gatherings at top venues.' },
  { id: 'lectures', title: 'Lecture & Talks', description: 'Invited talks and knowledge sharing sessions.' },
  { id: 'lab', title: 'Lab Activities', description: 'Daily life, experiments, and teaching moments.' },
  { id: 'events', title: 'Events & Ceremonies', description: 'Awards, grants, and celebrations.' },
  { id: 'interns', title: 'Interns & Students', description: 'Retreats, farewells, and student life.' },
];

const GALLERY_ITEMS = [
  { id: 1, category: 'events', image: "gallery1.jpg", caption: "Receiving Project Grant by the Honourable ministers at the launch of Critical Mineral Blocks auction, Delhi (June 2024)" },
  { id: 2, category: 'conferences', image: "gallery2.jpg", caption: "Dr. Avala Lavakumar presenting at the IIM conference" },
  { id: 3, category: 'lab', image: "gallery3.jpg", caption: "Discussion with Prof. T. Suji in the lab" },
  { id: 4, category: 'conferences', image: "gallery4.jpg", caption: "RISE Lab researchers at IIM-ATM 2024" },
  { id: 5, category: 'lectures', image: "gallery5.jpg", caption: "Invited Lecture at the 20th IMC, Republic of Korea" },
  { id: 6, category: 'interns', image: "gallery6.jpg", caption: "Interns Academic Retreat - A day of learning and fun" },
  { id: 7, category: 'conferences', image: "gallery7.jpg", caption: "ICAMSD 2025, MNIT Jaipur participation" },
  { id: 8, category: 'conferences', image: "gallery8.jpg", caption: "IMRC 2025 Conference Highlights" },
  { id: 9, category: 'lab', image: "gallery9.jpg", caption: "Sharing RISE Lab teaching material with Professor Rajesh Prasad" },
  { id: 10, category: 'interns', image: "gallery10.jpg", caption: "Farewell to Mr. Arun - Wishing him the best!" }
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
    const item = GALLERY_ITEMS.find(i => i.category === catId);
    return item ? item.image : null;
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Header */}
      <div className="bg-white border-b border-rise-frost py-12 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-rise-deep tracking-tight">Gallery</h1>
          <p className="mt-2 text-lg text-gray-600">Moments from our research journey, events, and academic life.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-6">

        {CATEGORIES.map(cat => {
          const isOpen = isExpanded(cat.id);
          const catItems = GALLERY_ITEMS.filter(item => item.category === cat.id);
          const hasItems = catItems.length > 0;

          return (
            <div
              key={cat.id}
              className={`bg-white rounded-xl shadow-md border ${isOpen ? 'border-rise-surf' : 'border-gray-100'} overflow-hidden transition-all duration-300`}
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
                    <h3 className={`text-xl font-bold ${isOpen ? 'text-rise-ocean' : 'text-rise-deep'}`}>{cat.title}</h3>
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
                              <div className="relative overflow-hidden h-72 bg-gray-200">
                                <img
                                  src={getGalleryImage(item.image)}
                                  alt={item.caption}
                                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                  onError={(e) => { e.target.style.display = 'none'; }}
                                />
                              </div>
                              <div className="p-5">
                                <p className="text-base text-gray-800 font-medium leading-relaxed text-left">
                                  {item.caption}
                                </p>
                              </div>
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
  );
};

export default Gallery;
