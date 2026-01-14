import React from 'react';

const Gallery = () => {
  // Placeholder logic for images - in real implementation, this would load from a folder
  const images = [1, 2, 3, 4, 5, 6];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-900 mb-8">Gallery</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((item) => (
            <div key={item} className="aspect-w-4 aspect-h-3 bg-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Image {item}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
