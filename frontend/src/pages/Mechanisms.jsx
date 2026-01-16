import React from 'react';
import tripTwipImg from '../assets/mechanisms/trip_twip.jpg';
import misfitImg from '../assets/mechanisms/misfit_volume.jpg';

const Mechanisms = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Header */}
        <div className="border-b border-gray-200 pb-4">
          <h1 className="text-4xl font-bold text-blue-900 tracking-tight">Mechanisms</h1>
        </div>

        {/* ITEM 1: SPECIAL LAYOUT (Text full width, Image full width below) */}
        <section className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden p-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Designing materials based on TRIP & TWIP mechanisms</h2>
          <p className="text-gray-700 leading-relaxed text-lg text-justify mb-8">
            Achieving high strength and ductility in structural materials is challenging, as conventional strengthening methods often lead to early plastic instability. However, certain alloys with recrystallized structures can overcome this trade-off by activating unexpected deformation modes, such as &lt;c + a&gt; dislocations in Mg alloys, nano twins in high-Mn steels, and deformation-induced martensite in metastable austenitic steels. These mechanisms enhance strain hardening, delay instability, and improve mechanical properties. Inspired by these strategies, our research applies the concept of sequential nucleation of deformation modes to medium manganese steels for automotive applications and refractory complex concentrated alloys for rocket thrust applications, aiming to optimize both strength and ductility in these advanced materials.
          </p>
          <div className="w-full bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
            <img src={tripTwipImg} alt="TRIP & TWIP mechanisms" className="w-full h-auto object-cover max-h-[600px]" />
          </div>
        </section>

        {/* ITEM 2: LEFT TEXT, RIGHT IMAGE */}
        <section className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">Understanding materials properties based on mis-fit volume</h2>
              <p className="text-gray-700 leading-relaxed text-lg text-justify">
                The effect of misfit volume on material properties plays a crucial role in strengthening mechanisms, particularly in high-entropy and complex concentrated alloys (CCAs). Solute misfit volumes influence dislocation movement, impacting yield strength by introducing local lattice distortions. While conventional strengthening theories primarily consider solute misfit effects, recent studies suggest that solute–solute interactions also contribute to additional strengthening. In our research, we are studying different combinations of alloys with varying misfit properties to explore their impact on strengthening. This understanding helps optimize alloy design by leveraging misfit-induced strengthening for improved mechanical performance.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                <img src={misfitImg} alt="Misfit Volume" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Mechanisms;
