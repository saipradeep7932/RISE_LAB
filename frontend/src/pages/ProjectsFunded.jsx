import React from 'react';

const ProjectsFunded = () => {
  // Exact content strings provided by user
  const sponsoredProjects = [
    {
      title: "Energy efficient and Eco-friendly Automotive steels: Design strategy based on the science of deformation (P.I)",
      agency: "(Institute Scheme for Innovative Research and Development (ISIRD), IIT Ropar)",
      details: "(₹ 20.5 Lakhs) [July 2024 – August 2026]"
    },
    {
      title: "Solid state recycling of copper scrap: A sustainable approach for producing high strength, high conductivity copper wire (P.I)",
      agency: "(Ministry of Mines, Government of India)",
      details: "(₹ 53.76 Lakhs) [October 2024 – March 2026]"
    }
  ];

  const consultancyProjects = [
    {
      title: "Development of Bi-Metallic Blade for Petrochemical Industry (P.I)",
      agency: "(SGT Associates, Haryana)",
      details: "(₹ 8.5 Lakhs) [September 2024 – March 2025]"
    },
    {
      title: "Carbon Footprint & Mechanical Performance of Gray and Ductile Cast Irons: Lost Foam Vs Green Sand Mould Casting (P.I)",
      agency: "(Pritika Auto Industries Limited, Punjab)",
      details: "(₹ 10 Lakhs) [September 2025 – November 2025]"
    }
  ];

  /* Updated Project Card for Boxed Layout */
  const ProjectCard = ({ project }) => (
    <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <h3 className="text-xl font-bold text-rise-deep mb-3 leading-snug">
        {project.title}
      </h3>

      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3 text-sm font-medium mb-3">
        <span className="bg-rise-mist text-rise-ocean px-2 py-1 rounded border border-rise-frost">
          Principal Investigator (P.I)
        </span>
        <span className="text-gray-500 hidden sm:inline">•</span>
        <span className="text-gray-700">{project.agency}</span>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-4 pt-4 border-t border-gray-100 text-gray-700">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-900">Amount:</span> {project.details.match(/₹[^)]+/)?.[0] || "N/A"}
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-900">Duration:</span> {project.details.match(/\[([^\]]+)\]/)?.[1] || "N/A"}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Header */}
      <div className="bg-white border-b border-rise-frost py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-rise-deep tracking-tight">Projects Funded</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        {/* Section 1: Sponsored Projects */}
        <section>
          <h2 className="text-2xl font-bold text-rise-deep border-l-4 border-rise-ocean pl-3 mb-6 uppercase">
            Sponsored Projects
          </h2>
          <div className="flex flex-col gap-6">
            {sponsoredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        {/* Section 2: Consultancy Projects */}
        <section>
          <h2 className="text-2xl font-bold text-rise-deep border-l-4 border-rise-ocean pl-3 mb-6 uppercase">
            Consultancy Projects
          </h2>
          <div className="flex flex-col gap-6">
            {consultancyProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default ProjectsFunded;
