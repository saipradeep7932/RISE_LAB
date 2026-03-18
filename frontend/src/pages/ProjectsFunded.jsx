import React from 'react';

const ProjectsFunded = () => {
  // --- OLD DATA (Fully Restored) ---
  const oldSponsoredProjects = [
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

  const oldConsultancyProjects = [
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

  // --- NEW DATA (Appended) ---
  const newSponsoredProjects = [
    {
      title: "In-situ/ex-situ TEM investigation of dislocation activity in complex concentrated alloys: Redefining Alloy Design via Misfit Volume",
      agency: "ARG-Anusandhan National Research Foundation (ANRF), Gov. of India",
      amount: "Sanctioned",
      duration: "Yet to be announced",
      isPI: true
    },
    {
      title: "A novel sustainable approach for recovery of zinc and iron from electric arc furnace dust and conjugated tool",
      agency: "Ministry of Steel, Gov. of India",
      amount: "Yet to be announced",
      duration: "October 2025 – September 2027",
      roleOverwrite: "Co-PI"
    },
    {
      title: "Solid state recycling of copper scrap: A sustainable approach for producing high strength, high conductivity copper wire",
      agency: "Science and Technology Scheme of Ministry of Mines, Gov. of India",
      amount: "Yet to be announced",
      duration: "October 2024 – March 2026",
      isPI: true
    },
    {
      title: "Carbon Footprint & Mechanical Performance of Gray and Ductile Cast Irons: Lost Foam Vs Green Sand Mould Casting",
      agency: "Pritika Auto Industries Limited, Punjab, India",
      amount: "Yet to be announced",
      duration: "September 2025 – November 2025",
      isPI: true
    },
    {
      title: "Development of Bi-Metallic Blade for Petrochemical Industry",
      agency: "SGT Associates, Haryana, India",
      amount: "Yet to be announced",
      duration: "September 2024 – March 2025",
      isPI: true
    },
    {
      title: "Energy-efficient and Eco-friendly Automotive steels: Design strategy based on science of deformation",
      agency: "ISIRD Grant, IIT Ropar",
      amount: "Yet to be announced",
      duration: "June 2024 – May 2026",
      isPI: true
    },
    {
      title: "Understanding the transformation induced plasticity effect in automotive steels",
      agency: "IRIS Grant, IIT Ropar",
      amount: "Yet to be announced",
      duration: "April 2024 – March 2025",
      isPI: true
    },
    {
      title: "In-situ S/TEM investigation on nature and consequence of mechanically induced martensite in metallic materials",
      agency: "JSPS KAKENHI Grant",
      amount: "Yet to be announced",
      duration: "April 2023 – December 2023",
      isPI: true
    },
    {
      title: "In-situ observation of crack growth behavior in BCC, FCC, and HCP metals",
      agency: "Kyushu University, Japan",
      amount: "Yet to be announced",
      duration: "October 2022 – March 2023",
      isPI: true
    }
  ];

  const newConsultancyProjects = [
    {
      title: "Stealth Technologies Using Metallic Materials",
      agency: "Agneevasthra Pvt. Ltd",
      amount: "₹10 Lakhs",
      duration: "March 2026 – May 2026",
      isPI: true
    }
  ];

  const sponsoredProjects = [...oldSponsoredProjects, ...newSponsoredProjects];
  const consultancyProjects = [...oldConsultancyProjects, ...newConsultancyProjects];

  const ProjectCard = ({ project }) => {
    // 1. Process Fields for Old Data Compatibility
    let displayTitle = project.title;
    let displayRole = "Principal Investigator (P.I)";
    if (displayTitle.endsWith("(P.I)")) {
      displayTitle = displayTitle.replace("(P.I)", "").trim();
    }
    if (project.roleOverwrite) {
      displayRole = project.roleOverwrite;
    }

    let displayAgency = project.agency;
    if (displayAgency.startsWith("(") && displayAgency.endsWith(")")) {
      displayAgency = displayAgency.slice(1, -1);
    }

    let displayAmount = project.amount || "N/A";
    let displayDuration = project.duration || "N/A";

    // Re-use logic from original implementation for old array
    if (project.details) {
      displayAmount = project.details.match(/₹[^)]+/)?.[0] || "N/A";
      displayDuration = project.details.match(/\[([^\]]+)\]/)?.[1] || "N/A";
    }

    return (
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        {/* Title / Research Area */}
        <h3 className="text-normal font-bold text-gray-900 mb-4 leading-snug">
          <span className="text-[#FF6600]">Research Area:</span> {displayTitle}
        </h3>

        {/* PI & Organization Row */}
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <div className="font-medium text-[#0B5472] text-left text-lg">
            {displayRole}
          </div>
          <span className="text-gray-400 hidden sm:inline">|</span>
          <div className="bg-[#CCCCCC] text-[#FF6600] px-3 py-1.5 rounded-md inline-block text-sm font-semibold">
            {displayAgency}
          </div>
        </div>

        {/* Details Row */}
        <div className="flex flex-col sm:flex-row gap-6 border-t border-gray-100 pt-5">
          <div className="flex flex-col">
            <span className="text-sm text-gray-500 uppercase tracking-wide font-semibold mb-1">Amount</span>
            <span className="text-lg font-bold text-[#0B5472]">{displayAmount}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500 uppercase tracking-wide font-semibold mb-1">Duration</span>
            <span className="text-base font-medium text-gray-800">{displayDuration}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">

          {/* Section 1: Sponsored Projects */}
          <section className="bg-[#F5F5F5] rounded-2xl shadow-[inset_0_0_20px_rgba(0,0,0,0.08)] p-6 md:p-8">
            <h2 className="text-3xl font-bold text-[#FF6600] mb-8 border-b-2 border-[#FF6600] inline-block pb-2">
              Sponsored Projects
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {sponsoredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </section>

          {/* Section 2: Consultancy Projects */}
          <section className="bg-[#F5F5F5] rounded-2xl shadow-[inset_0_0_20px_rgba(0,0,0,0.08)] p-6 md:p-8">
            <h2 className="text-3xl font-bold text-[#FF6600] mb-8 border-b-2 border-[#FF6600] inline-block pb-2">
              Consultancy Projects
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {consultancyProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default ProjectsFunded;
