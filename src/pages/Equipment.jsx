import React from 'react';
import { Mail, ArrowRight, ExternalLink } from 'lucide-react';
import { equipmentList } from '../data/equipmentData';

// Dynamically import equipment images (if they exist)
const equipmentImages = import.meta.glob('../assets/equipment/*.{png,jpg,jpeg,svg}', { eager: true, as: 'url' });

const getImagePath = (filename) => {
  if (!filename) return null;
  const baseNameRequested = filename.split('.')[0].toLowerCase();
  const foundKey = Object.keys(equipmentImages).find(k => {
    const fileBaseName = k.split('/').pop().split('.')[0].toLowerCase();
    return fileBaseName === baseNameRequested;
  });
  return foundKey ? equipmentImages[foundKey] : null;
};

const Equipment = () => {

  const handleApply = (eqName) => {
    const recipient = "lava@iitrpr.ac.in";
    const subject = `Request for ${eqName}`;
    
    // Using \r\n for precise line breaks in the browser draft
    const body = `Hello Sir,\r\n\r\nI would like to request access to the following equipment:\r\n\r\nEquipment Name: ${eqName}\r\n\r\nPurpose:\r\n\r\nPreferred Date:\r\n\r\nThank you.`;

    // Forces Gmail to open a new draft in the browser
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the Gmail draft safely in a new tab
    window.open(gmailLink, '_blank');
  };

  const EquipmentSection = ({ equipment, index, onApply }) => {
    const isBlue = index % 2 === 0;
    const tBorder = isBlue ? 'border-[#0B5472]' : 'border-[#FF6600]';
    // Match Position layout header background style minimally if needed, or use white for the top strip inner div
    const topStripBg = "bg-white/50"; 

    const getImg = (name) => {
      const safeName = name.replace(/\s+/g, '_').toLowerCase();
      // Placeholder with dimensions to enforce proper display if image is missing
      return getImagePath(safeName) || `https://placehold.co/400x300/ffffff/0B5472?text=${encodeURIComponent(name.substring(0, 15))}`;
    };

    return (
      <section className={`bg-[#CCCCCC] rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] border-t-4 ${tBorder} overflow-hidden hover:shadow-lg transition-shadow duration-300`}>
        
        {/* TOP COLORED STRIP / HEADER (Like Positions px-8 py-4 border-b) */}
        <div className={`${topStripBg} px-8 py-4 border-b border-gray-300 flex justify-between items-center flex-wrap gap-4`}>
          <h2 className={`text-2xl font-bold text-[#0B5472]`}>
            {equipment.category || "Equipments"}
          </h2>
          {equipment.externalLink ? (
            <a
              href={equipment.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-[#FF6600] hover:bg-[#CC5200] text-white px-5 py-2 rounded-lg font-semibold text-sm flex items-center gap-2 transition-transform active:scale-95 shadow-md`}
            >
              Book via CRF Portal <ExternalLink size={16} />
            </a>
          ) : (
            <button
              onClick={() => onApply(equipment.name)}
              className={`bg-[#FF6600] hover:bg-[#CC5200] text-white px-5 py-2 rounded-lg font-semibold text-sm flex items-center gap-2 transition-transform active:scale-95 shadow-md`}
            >
              Request Equipment <ArrowRight size={16} />
            </button>
          )}
        </div>

        {/* CARD CONTENT BODY */}
        <div className="p-5 md:p-8">
          {equipment.type === 'special_parallel' ? (
            // 3-IMAGE PARALLEL LAYOUT
            <div className="flex flex-col md:flex-row gap-6 justify-between items-stretch w-full">
              {equipment.images.map((imgName, idx) => (
                <div key={idx} className="flex flex-col items-center w-full md:w-1/3">
                  <div className="bg-white rounded-lg p-2 flex items-center justify-center w-full h-48 md:h-56 shadow-sm mb-4 border border-gray-100">
                    <img src={getImg(imgName)} alt={equipment.imageLabels[idx]} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B5472] text-center">
                    {equipment.imageLabels[idx]}
                  </h3>
                </div>
              ))}
            </div>
          ) : (
            // STANDARD LAYOUT (Left Image, Right Content)
            <div className="flex flex-col md:flex-row gap-8 items-center w-full">
              <div className="w-full md:w-1/3 flex-shrink-0 bg-white rounded-lg p-3 flex items-center justify-center shadow-sm h-56 border border-gray-100">
                <img src={getImg(equipment.images[0])} alt={equipment.name} className="w-full h-full object-contain" />
              </div>
              <div className="w-full md:w-2/3 flex flex-col justify-center space-y-4">
                <h3 className="text-2xl font-bold text-[#0B5472]">
                  {equipment.name}
                </h3>
                {equipment.description && (
                  <p className="text-black text-lg leading-relaxed whitespace-pre-wrap">
                    {equipment.description}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#F5F5F5] rounded-2xl shadow-md p-8 md:p-12 mb-12">
            <div className="max-w-5xl mx-auto space-y-10">
                <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#0B5472] mb-4">Equipment Inventory</h1>
                    <p className="text-xl font-medium text-slate-800 italic leading-relaxed">
                        "Browse our state-of-the-art laboratory equipment. Click 'Request Equipment' to send an email inquiry for access or collaboration details."
                    </p>
                </div>
            </div>
        </div>

        <div className="space-y-10 max-w-5xl mx-auto">
          {equipmentList.map((item, index) => (
            <EquipmentSection key={item.id} equipment={item} index={index} onApply={handleApply} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Equipment;
