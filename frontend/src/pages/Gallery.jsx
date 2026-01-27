import React from 'react';

// Dynamically load images to ensure Vite bundles them
const galleryImages = import.meta.glob('../assets/gallery/*.{png,jpg,jpeg,svg}', { eager: true, as: 'url' });

const getGalleryImage = (filename) => {
  const key = `../assets/gallery/${filename}`;
  return galleryImages[key] || null;
};

const Gallery = () => {

  const items = [
    {
      id: 1,
      image: "gallery1.jpg",
      caption: "Receiving Project Grant by the Honourable ministers at the event: Launch of 4th Tranche of auction of Critical Minimal Blocks, June 2024, Delhi"
    },
    {
      id: 2,
      image: "gallery2.jpg",
      caption: "Dr. Avala Lavakumar, Presenting at the conference, IIM"
    },
    {
      id: 3,
      image: "gallery3.jpg",
      caption: "With Prof. T. Suji"
    },
    {
      id: 4,
      image: "gallery4.jpg",
      caption: "Researchers at IIM-ATM 2024"
    },
    {
      id: 5,
      image: "gallery5.jpg",
      caption: "Dr. Avala Lavakumar giving a lecture at 20th IMC, Republic of Korea"
    },
    {
      id: 6,
      image: "gallery6.jpg",
      caption: "Interns Academic Retreat"
    },
    {
      id: 7,
      image: "gallery7.jpg",
      caption: "ICAMSD 2025, MNIT Jaipur"
    },
    {
      id: 8,
      image: "gallery8.jpg",
      caption: "IMRC 2025"
    },
    {
      id: 9,
      image: "gallery9.jpg",
      caption: "Sharing RISE Lab Teaching Material With the Teaching Icon, Professor Rajesh Prasad"
    },
    {
      id: 10,
      image: "gallery10.jpg",
      caption: "Farewell, Mr. Arun!"
    }
  ];

  // Helper to render a card
  const GalleryCard = ({ item }) => (
    <div className="group break-inside-avoid mb-6">
      <div className="relative overflow-hidden rounded-xl shadow-md border border-rise-ocean/30 bg-rise-frost">
        {/* Fallback placeholder if image missing */}
        <div className="absolute inset-0 bg-rise-mist flex items-center justify-center text-rise-ocean -z-10 h-64">
          <span className="text-sm italic">Image not found</span>
        </div>

        <img
          src={getGalleryImage(item.image)}
          alt={item.caption}
          className="w-full h-auto object-contain block transition-transform duration-500 group-hover:scale-105"
          onError={(e) => { e.target.style.display = 'none'; }} // Hide broken image to show placeholder
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-rise-deep/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>
      <p className="mt-3 text-sm text-rise-deep font-medium leading-relaxed text-center px-2">
        {item.caption}
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-rise-mist font-sans text-rise-deep">
      {/* Header */}
      <div className="bg-rise-deep border-b border-rise-ocean py-12 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white tracking-tight">Gallery</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* FEATURED ROW: First 2 Images (Larger) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12">
          {items.slice(0, 2).map(item => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>

        {/* REMAINING ITEMS: Standard 3-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {items.slice(2).map(item => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Gallery;
