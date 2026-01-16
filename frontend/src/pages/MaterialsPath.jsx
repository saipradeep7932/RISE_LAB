import React from 'react';
import archaeoImg from '../assets/materials/archaeometallurgy.jpg';
import steelImg from '../assets/materials/univariant_steels.jpg';
import copperImg from '../assets/materials/copper_wire.jpg';

const MaterialsPath = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Header */}
        <div className="border-b border-gray-200 pb-4">
          <h1 className="text-4xl font-bold text-blue-900 tracking-tight">Materials</h1>
        </div>

        {/* ITEM 1 */}
        <section className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">Archaeometallurgy – Ancient Materials</h2>
              <p className="text-gray-700 leading-relaxed text-lg text-justify">
                Archaeometallurgy is crucial for understanding India's rich metallurgical history, especially wootz steel. Analyzing artifacts like the Kondapalli sword reveals sophisticated ancient manufacturing processes, including crucible melting and lamination, and how material properties are tailored, like the hardness of sword blades. India's innovations, like Wootz steel (1–2% C), influenced global metalworking. Studying slag and elemental compositions illuminates early iron production (e.g., bloomery process) and raw materials. These investigations highlight the advanced skills of ancient Indian metallurgists and connect technological advancements with cultural and historical contexts, enriching our understanding of civilization.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                <img src={archaeoImg} alt="Archaeometallurgy" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* ITEM 2 */}
        <section className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">Univariant Steels</h2>
              <p className="text-gray-700 leading-relaxed text-lg text-justify">
                Manufacturing of steel car bodies has evolved significantly since the 1960s, transitioning from mild steel to advanced high-strength steel (AHSS) for improved crash safety and fuel efficiency. However, the complexity of using multiple steel grades poses challenges in joining, processing, and recycling. This research introduces a novel concept: using a single compositional (unified) steel for body-in-white (BIW) manufacturing. By leveraging phase transformations through controlled alloying and thermomechanical processing, a single steel composition can achieve diverse mechanical properties, simplifying production while maintaining strength, toughness, and sustainability.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                <img src={steelImg} alt="Univariant Steels" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* ITEM 3 */}
        <section className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">High Strength & High Conductivity Copper</h2>
              <p className="text-gray-700 leading-relaxed text-lg text-justify">
                Copper is widely used in electrical applications, requiring alloys with both high strength and conductivity. However, the strength–conductivity paradox remains a major challenge, as traditional strengthening methods degrade conductivity. Current strategies, like gradient and bimodal structures, offer compromises rather than true solutions. Inspired by nature, our approach optimizes ultrafine-grained (UFG) structures along the wire axis, potentially enhancing both strength and conductivity simultaneously.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                <img src={copperImg} alt="High Strength & High Conductivity Copper" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default MaterialsPath;
