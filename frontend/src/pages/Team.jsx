import React from 'react';

// Simple image path helper - using public folder or assets logic
// Since strictly no backend, we assume images are in src/assets/team/ and we try to load them.
// For static builds, strictly importing is safer, but with dynamic names we can use a helper function 
// involving string concatenation if using Vite's dynamic import features or just assume they exist.
// Given strict instructions not to change functionality but mostly layout/content, 
// I will implement a robust image loader or fallback to a placeholder text if image is missing.

const getImagePath = (filename) => {
  try {
    // This is a direct URL construction which works if images are in 'public/assets/team'
    // If they are in src/assets/team, we need import.meta.glob data.
    // For simplicity and robustness in this specific constraints context:
    return `/assets/team/${filename}`;
  } catch (e) {
    return null;
  }
};

const Team = () => {
  // --- Data ---
  const groupHead = {
    name: "Dr. AVALA LAVAKUMAR",
    title: "Assistant Professor",
    dept: "Department of Metallurgical and Materials Engineering",
    interest: "In-situ deformation studies, Transmission Electron Microscopy (TEM), Digital Image Correlation (DIC), Synchrotron X-ray diffraction, Transformation/Twinning induced plasticity materials, Martensite, Steels, Titanium and Aluminum alloys, High/Medium entropy alloys, Heterogeneous structured materials.",
    image: "Dr_Avala_Lavakumar.jpg"
  };

  const researchStaff = [
    {
      name: "Mr. KOLLI VENKATESH",
      role: "Project Associate: 2025 May ~",
      area: "Solid state recycling of Copper and Copper alloys",
      bio: "Kolli Venkatesh, a graduate in Metallurgical and Materials Engineering, has garnered significant research experience. His work spans the utilization of metallurgical waste for foundry applications and the metallographic examination of archeological samples. He has also investigated brazing interfaces for the petrochemical sector, demonstrating strong analytical skills using Excel and Origin. Beyond his professional endeavors, Venkatesh finds enjoyment in narrating stories and actively participates in sports like cricket and badminton. This blend of technical expertise and diverse interests defines his promising early career.",
      image: "Kolli_Venkatesh.jpg"
    }
  ];

  const phdStudents = [
    {
      name: "Ms. SUSHREE PRIYADARSHINI MOHAPATRA",
      role: "Ph.D. Student: 2024 September ~",
      area: "Deformation behaviour of equiatomic/non-equiatomic alloys",
      bio: "Sushree is a highly motivated metallurgical engineer with a strong academic background and a passion for research. She is currently seeking a Ph.D. position to further her knowledge and contribute to the advancement of materials science. Sushree has demonstrated her teaching abilities as a lecturer, where she effectively communicated complex engineering concepts to undergraduate students. Her research experience includes projects focused on the development and characterization of alloys, showcasing her practical skills in materials engineering. With her diverse skillset, which includes technical proficiency, teaching experience, and research capabilities, Sushree is well-equipped to excel in a challenging and collaborative academic environment.",
      image: "Sushree_Priyadarshini_Mohapatra.jpg"
    },
    {
      name: "Mr. VIKRAM TIRUKKOVELUR",
      role: "Ph.D. Student (ERP): 2024 January ~",
      area: "Developing brazing techniques for Metal to Metal, Metal to Cermet, and Metal to Ceramics",
      bio: "Vikram is a seasoned scientist with over 15 years of experience working at the Defence Research and Development Organisation (DRDO). He holds a Master’s degree from the prestigious Indian Institute of Technology Madras (IITM) and a Bachelor’s degree from Jawaharlal Nehru Technological University Hyderabad (JNTUH). His work primarily revolves around cutting-edge defense technologies, with expertise in materials science, advanced propulsion systems, and strategic research projects that enhance national security. He is proficient in advanced research techniques, project management, and data analysis tools such as MATLAB, ANSYS, and Origin. His analytical acumen and technical insights have been instrumental in successfully completing high-impact projects. Beyond his scientific pursuits, he enjoys exploring interests like long-distance cycling, hiking, and participating in community-driven initiatives, reflecting his dynamic and well-rounded personality.",
      image: "Vikram_Tirukkovelur.jpg"
    },
    {
      name: "Mr. GEDELA SANTHOSH KUMAR",
      role: "Ph.D. Student: 2025 July ~",
      area: "Strategic design of Transformation-Induced Plasticity (TRIP) and Twinning-Induced Plasticity (TWIP) mechanisms in medium-manganese steels.",
      bio: "Santhosh completed his B.Tech in Metallurgical and Materials Engineering from the National Institute of Advanced Manufacturing Technology, Ranchi. He brings hands-on industrial experience from JSW’s Ayena Innovation, where he co-authored a granted patent and contributed to several others focused on sustainable materials. His training at Rashtriya Ispat Nigam Limited (RINL) involved leading teams and studying steel plant operations and rolling processes. His academic work includes research on heat treatment effects in F55 super duplex steel and pioneering studies on self-healing metals. Proficient in SEM, XRD, corrosion testing, and process optimization, he is passionate about applying advanced metallurgical techniques to real-world challenges. He is committed to contributing to the advancement of materials science through rigorous research and industry-aligned innovation.",
      image: "Gedela_Santhosh_Kumar.jpg"
    }
  ];

  const btechStudents = [
    { name: "Prerana", batch: "2022–2026 [MME]", area: "Brazing of dissimilar Metals" },
    { name: "Paidi Sathwika", batch: "2022–2026 [MME]", area: "Role of retained austenite in Medium Mn steels" },
    { name: "Mudu Narendra Nayak", batch: "2022–2026 [MME]", area: "Archeometallurgical Investigation of Ancient Sword: Microstructure and Manufacturing" },
    { name: "Banoth Deepak Teja", batch: "2022–2026 [MME]", area: "Comparative Study of Mechanical Performance of Gray and Ductile Cast iron Components Manufactured Via Lost Foam and Sand Mould Castings" }
  ];

  const alumni = [
    { name: "Mr. Vishnu Prasad (Intern)", place: "Current place: IIT Madras" },
    { name: "Mr. Shashi Shekhar Prajapati (Intern)", place: "Current place: UNO Minda, Gujarat" },
    { name: "Ms. Sejal Tandekar (Intern)", place: "Current place: O.P. Jindal University" },
    { name: "Mr. Rahul Kumar Sahu (Intern)", place: "Current place: O.P. Jindal University" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-blue-900 tracking-tight">Our Team</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* --- SECTION 1: GROUP HEAD --- */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-3 mb-8 uppercase">Group Head</h2>
          <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 h-96 md:h-auto bg-gray-200 relative flex items-center justify-center">
              {/* Placeholder for Image */}
              <span className="text-gray-400 font-light">Photo: {groupHead.image}</span>
              {/* In real usage: <img src={\`src/assets/team/\${groupHead.image}\`} className="absolute inset-0 w-full h-full object-cover" /> */}
            </div>
            <div className="md:w-2/3 p-8 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-blue-900 mb-2">{groupHead.name}</h3>
              <p className="text-xl font-medium text-gray-800 mb-1">{groupHead.title}</p>
              <p className="text-gray-600 mb-6">{groupHead.dept}</p>

              <div>
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-2">Research Interest</h4>
                <p className="text-gray-700 leading-relaxed">{groupHead.interest}</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: RESEARCH STAFF --- */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-3 mb-8 uppercase">Research Staff</h2>
          <div className="flex flex-col gap-8">
            {researchStaff.map((staff, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md border border-gray-100 p-8 flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4 flex-shrink-0">
                  <div className="w-40 h-40 bg-gray-200 rounded-full mx-auto md:mx-0 flex items-center justify-center overflow-hidden">
                    <span className="text-xs text-gray-400 break-all text-center p-2">{staff.image}</span>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold text-blue-900 mb-1">{staff.name}</h3>
                  <p className="text-lg font-medium text-blue-600 mb-2">{staff.role}</p>
                  <div className="mb-4">
                    <span className="font-bold text-gray-900">Research area:</span>
                    <p className="text-gray-700 inline ml-2">{staff.area}</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-justify">{staff.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION 3: Ph.D. STUDENTS --- */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-3 mb-8 uppercase">Ph.D. Students</h2>
          <div className="flex flex-col gap-10">
            {phdStudents.map((student, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md border border-gray-100 p-8 flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4 flex-shrink-0">
                  <div className="w-40 h-40 bg-gray-200 rounded-full mx-auto md:mx-0 flex items-center justify-center overflow-hidden">
                    <span className="text-xs text-gray-400 break-all text-center p-2">{student.image}</span>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold text-blue-900 mb-1">{student.name}</h3>
                  <p className="text-lg font-medium text-blue-600 mb-2">{student.role}</p>
                  <div className="mb-4">
                    <span className="font-bold text-gray-900">Research area:</span>
                    <p className="text-gray-700 block mt-1">{student.area}</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-justify">{student.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION 4: B.Tech. STUDENTS --- */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-3 mb-8 uppercase">B.Tech. Students</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {btechStudents.map((student, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition flex flex-col h-full">
                <h3 className="font-bold text-blue-900 text-lg mb-2">{student.name}</h3>
                <p className="text-sm font-semibold text-gray-600 mb-3">{student.batch}</p>
                <div className="mt-auto">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Research area</span>
                  <p className="text-sm text-gray-700 mt-1 leading-snug">{student.area}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION 5: ALUMINI / ASSOCIATED MEMBERS --- */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-3 mb-8 uppercase">Alumni / Associated Members</h2>
          <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200">
            <ul className="divide-y divide-gray-200">
              {alumni.map((member, idx) => (
                <li key={idx} className="px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between hover:bg-gray-50 transition">
                  <span className="text-base font-medium text-blue-900 mb-1 sm:mb-0">{member.name}</span>
                  <span className="text-sm text-gray-600 italic">{member.place}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Team;
