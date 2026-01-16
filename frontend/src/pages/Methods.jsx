import React from 'react';

// Import images - Ensure these files exist in src/assets/methods/
// Fallback to a placeholder if import fails is handled by build tools usually erroring, 
// so we assume existence based on previous steps.
import tensileImg from '../assets/methods/tensile_stage.jpg';
import recyclingImg from '../assets/methods/recycling_machine.jpg';

const Methods = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Header */}
        <div className="border-b border-gray-200 pb-4">
          <h1 className="text-4xl font-bold text-blue-900 tracking-tight">Methods</h1>
        </div>

        {/* ITEM 1 */}
        <section className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">Tensile and Compression Stage for Scanning Electron Microscopy</h2>
              <p className="text-gray-700 leading-relaxed text-lg text-justify">
                The "Tensile and Compression Stage for Scanning Electron Microscopy" is a specialized device designed to perform mechanical testing, such as tensile and compressive loading, within the confines of a scanning electron microscope (SEM). This innovative apparatus allows for precise manipulation of small-scale test specimens under load while maintaining stability and alignment to facilitate high-resolution imaging and analysis of deformation processes at the microscale.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                <img src={tensileImg} alt="Tensile and Compression Stage" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* ITEM 2 */}
        <section className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">Solid State Recycling Machine</h2>
              <p className="text-gray-700 leading-relaxed text-lg text-justify">
                The newly designed recycling machine is engineered for continuous operation and can efficiently process non-ferrous metal scrap into high-quality bulk materials such as wires, rods, and plates. This innovative machine works based on the principle of Friction stir process and extrusion, and ensures minimal energy consumption and environmental impact while maintaining consistent output quality.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                <img src={recyclingImg} alt="Solid State Recycling Machine" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Methods;
