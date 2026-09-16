import React from 'react';

const ProjectsFunded = () => {
  // Projects loaded from CSV provided by user (Sponsored + Consultancy)
  const sponsoredProjects = [
    {
      title: "AI/ML Driven design of TiC–Ni/Steel Brazed Tool Inserts for High-Wear Mining Rock Bits",
      agency: "TEXMiN, Technology Innovation Hub sponsored by DST, Govt of India, IIT (ISM) Dhanabad",
      amount: "₹35,25,400/-",
      duration: "March 2026 – Nov 2027",
      role: "Principal Investigator (P.I)",
      remark: "Approved"
    },
    {
      title: "In-situ/ex-situ TEM investigation of dislocation activity in complex concentrated alloys: Redefining Alloy Design via Misfit Volume",
      agency: "ANRF",
      amount: "₹99,07,440/-",
      duration: "Jun-26 – May-29",
      role: "Principal Investigator (P.I)",
      remark: "Active"
    },
    {
      title: "A novel sustainable approach for recovery of zinc and iron from electric arc furnace dust and conjugated tool",
      agency: "Ministry of Steel, Gov. of India",
      amount: "₹405,25,872/-",
      duration: "Oct-25 – Sept-27",
      role: "Co-Principal Investigator (Co-P.I)",
      remark: "Active"
    },
    {
      title: "Solid state recycling of copper scrap: A sustainable approach for producing high strength, high conductivity copper wire",
      agency: "Ministry of Mines, Government of India",
      amount: "₹53,76,200/-",
      duration: "Oct-24 – Sep-26",
      role: "Principal Investigator (P.I)",
      remark: "Active"
    },
    {
      title: "Energy efficient and Eco-friendly Automotive steels: Design strategy based on the science of deformation",
      agency: "Institute Scheme for Innovative Research and Development (ISIRD), IIT Ropar",
      amount: "₹20,50,000/-",
      duration: "Jul-24 – Aug-26",
      role: "Principal Investigator (P.I)",
      remark: "Complete"
    },
    {
      title: "Understanding the transformation induced plasticity effect in automotive steels",
      agency: "IRIS Grant, IIT Ropar",
      amount: "₹4,88,400/-",
      duration: "Apr-24 – Mar-25",
      role: "Principal Investigator (P.I)",
      remark: "Complete"
    }
  ];

  const consultancyProjects = [
    {
      title: "Stealth Technologies Using Metallic Materials",
      agency: "Agneevasthra Pvt. Ltd",
      amount: "₹10,00,000/-",
      duration: "Mar-26 – May-26",
      role: "Principal Investigator (P.I)",
      remark: "Complete"
    },
    {
      title: "Carbon Footprint & Mechanical Performance of Gray and Ductile Cast Irons: Lost Foam Vs Green Sand Mould Casting",
      agency: "Pritika Auto Industries Limited, Punjab",
      amount: "₹10,00,000/-",
      duration: "Sep-25 – Nov-25",
      role: "Principal Investigator (P.I)",
      remark: "Complete"
    },
    {
      title: "Development of Bi-Metallic Blade for Petrochemical Industry",
      agency: "SGT Associates, Haryana",
      amount: "₹8,50,000/-",
      duration: "Sep-24 – Mar-25",
      role: "Principal Investigator (P.I)",
      remark: "Complete"
    }
  ];

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
