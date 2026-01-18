import React from 'react';

// Use import.meta.glob to dynamically load images from assets
// This ensures the build process knows about them and hashes them correctly.
const teamImages = import.meta.glob('../assets/team/*.{png,jpg,jpeg,svg}', { eager: true, as: 'url' });

const getImagePath = (filename) => {
  const key = `../assets/team/${filename}`;

  if (teamImages[key]) {
    return teamImages[key];
  }

  // Silent fallback for case-insensitivity
  const lowerKey = key.toLowerCase();
  const foundKey = Object.keys(teamImages).find(k => k.toLowerCase() === lowerKey);

  return foundKey ? teamImages[foundKey] : null;
};

// Fallback image path (make sure this exists or use a robust fallback)
const PLACEHOLDER_IMG = teamImages['../assets/team/placeholder.jpg'] || null;

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
    { name: "Prerana", batch: "2022–2026 [MME]", area: "Brazing of dissimilar Metals", image: "prerana.jpg" },
    { name: "Paidi Sathwika", batch: "2022–2026 [MME]", area: "Role of retained austenite in Medium Mn steels", image: "paidi_sathwika.jpg" },
    { name: "Mudu Narendra Nayak", batch: "2022–2026 [MME]", area: "Archeometallurgical Investigation of Ancient Sword: Microstructure and Manufacturing", image: "mudu_narendra_nayak.jpg" },
    { name: "Banoth Deepak Teja", batch: "2022–2026 [MME]", area: "Comparative Study of Mechanical Performance of Gray and Ductile Cast iron Components Manufactured Via Lost Foam and Sand Mould Castings", image: "banoth_deepak_teja.jpg" }
  ];

  const alumni = [
    { name: "Mr. Vishnu Prasad (Intern)", place: "Current place: IIT Madras", image: "vishnu_prasad.jpg" },
    { name: "Mr. Shashi Shekhar Prajapati (Intern)", place: "Current place: UNO Minda, Gujarat", image: "shashi_shekhar_prajapati.jpg" },
    { name: "Ms. Sejal Tandekar (Intern)", place: "Current place: O.P. Jindal University", image: "sejal_tandekar.jpg" },
    { name: "Mr. Rahul Kumar Sahu (Intern)", place: "Current place: O.P. Jindal University", image: "rahul_kumar_sahu.jpg" }
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

        {/* --- GROUP PHOTO (New) --- */}
        <section className="w-full">
          <div className="w-full h-auto md:h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-200 relative">
            <img
              src={getImagePath('group.jpg') || PLACEHOLDER_IMG || "https://placehold.co/1200x500?text=Team+Group+Photo"}
              alt="RISE Lab Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h2 className="text-white text-2xl font-bold">RISE Lab Team</h2>
            </div>
          </div>
        </section>

        {/* --- SECTION 1: GROUP HEAD --- */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-3 mb-8 uppercase">Group Head</h2>
          <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden flex flex-col md:flex-row">
            {/* 1:1 Aspect Ratio or properly contained */}
            <div className="md:w-1/3 flex-shrink-0 bg-gray-200 relative">
              <div className="w-full h-full min-h-[300px] md:min-h-full">
                <img
                  src={getImagePath(groupHead.image) || PLACEHOLDER_IMG}
                  alt={groupHead.name}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>
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
              <div key={idx} className="bg-white rounded-xl shadow-md border border-gray-100 p-8 flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3 flex-shrink-0 flex justify-center md:justify-start">
                  {/* Large Avatar 1:1 */}
                  <div className="w-64 h-64 bg-gray-200 rounded-lg overflow-hidden border-4 border-gray-50 shadow-sm relative">
                    <img
                      src={getImagePath(staff.image) || PLACEHOLDER_IMG}
                      alt={staff.name}
                      className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
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
              <div key={idx} className="bg-white rounded-xl shadow-md border border-gray-100 p-8 flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3 flex-shrink-0 flex justify-center md:justify-start">
                  <div className="w-64 h-64 bg-gray-200 rounded-lg overflow-hidden border-4 border-gray-50 shadow-sm relative">
                    <img
                      src={getImagePath(student.image) || PLACEHOLDER_IMG}
                      alt={student.name}
                      className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
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
          {/* Grid Layout - Larger Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {btechStudents.map((student, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-lg transition">
                {/* Image Area - Larger (Aspect Square or 4:3) */}
                <div className="w-full aspect-square bg-gray-100 relative">
                  <img
                    src={getImagePath(student.image) || PLACEHOLDER_IMG}
                    alt={student.name}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-bold text-blue-900 text-lg mb-1">{student.name}</h3>
                  <p className="text-sm font-semibold text-gray-500 mb-3">{student.batch}</p>
                  <div className="mt-auto pt-3 border-t border-gray-100">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Research area</span>
                    <p className="text-sm text-gray-700 mt-1 leading-snug">{student.area}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION 5: ALUMINI / ASSOCIATED MEMBERS --- */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-3 mb-8 uppercase">Alumni / Associated Members</h2>
          {/* Using similar Grid Layout as B.Tech for consistent visual size */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {alumni.map((member, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-md transition">
                {/* Size: 1:1 Aspect ratio image */}
                <div className="w-full aspect-square bg-gray-100 relative">
                  <img
                    src={getImagePath(member.image) || PLACEHOLDER_IMG}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow bg-gray-50/50">
                  <span className="text-base font-bold text-blue-900 mb-1">{member.name}</span>
                  <span className="text-sm text-gray-600 italic mt-auto">{member.place}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Team;
