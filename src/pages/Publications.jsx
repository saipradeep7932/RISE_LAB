import React from 'react';
import scholarLogo from '../assets/publications/scholar.png';
import orcidLogo from '../assets/publications/orcid.png';
import researchgateLogo from '../assets/publications/researchgate.png';

// Helper to style authors
const AuthorParams = ({ text }) => {
  const lavaPattern = /(Avala Lavakumar|A\. Lavakumar|L\. Avala)/g;
  const parts = text.split(lavaPattern);
  return (
    <span className="font-bold text-gray-900">
      {parts.map((part, index) => {
        if (part.match && part.match(lavaPattern)) {
          return (
            <span key={index} className="text-rise-ocean">{part}</span>
          );
        }
        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </span>
  );
};

const PublicationEntry = ({ id, authors, title, journalInfo, link }) => (
  <div className="flex gap-2">
    {id && <span className="font-bold min-w-[30px]">{id}.</span>}
    <div>
      <AuthorParams text={authors} />{' '}
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="italic text-rise-ocean hover:underline cursor-pointer">
          {title}
        </a>
      ) : (
        <span className="italic">{title}</span>
      )}{' '}
      {journalInfo}
    </div>
  </div>
);

const Publications = () => {
  // Journal publications (from CSV)
  const journalPublications = [
    { id: '20', authors: 'Sukyoung Hwang, Myeong-heom Park, Yu Baia, Takumi Suzumura, Ryo Asada, Avala Lavakumar, Jesada Punyafu, Akinobu Shibataa, Hiroki Adachi, Toshiyuki Fujii, Nobuhiro Tsuji', title: 'Dynamics of Portevin-Le Chatelier banding revealed through grain refinement in high-Mn austenitic steel: Sequential overcoming of necking', journalInfo: <><span className="italic">Journal of Materials Science &amp; Technology</span> volume 254, (2026)</>, link: 'https://doi.org/10.1016/j.jmst.2025.08.017' },
    { id: '19', authors: 'Lokesh K. Singh, Avala Lavakumar, Rajeshwar R. Eleti', title: 'Coarse slip bands and non-Schmid’s translational slip lead to shear bands formation in body-centered cubic HfNbTaTiZr high-entropy alloy', journalInfo: <><span className="italic">Scientific Report</span> volume 16, (2026)</>, link: 'https://doi.org/10.1038/s41598-025-31818-0' },
    { id: '18', authors: 'Kolli Venkatesh, Sushree P. Mohapatra, Trinath Talapaneni, Santosh Kumar, Prvan Kumar Katiyar, Prince Kumar Singh, Avala Lavakumar', title: 'Comparative study of ancient and modern Indian metallurgical practices: evolution and continuity', journalInfo: <><span className="italic">Proc.Indian Natl. Sci. Acad.</span> volume 92, (2026)</>, link: 'https://doi.org/10.1007/s43538-025-00644-3' },
    { id: '17', authors: 'Avala Lavakumar, L.S.R.Kumara', title: 'Partitioning-time dependent evolution of retained austenite and its impact on microstructure and mechanical properties in lean TRIP-assisted steel', journalInfo: <><span className="italic">Journal of Alloys and Metallurgical Systems</span> volume 12, (2025)</>, link: 'https://doi.org/10.1016/j.jalmes.2025.100214' },
    { id: '16', authors: 'Arun Kumar Patro, Kolli Venkatesh, Shashishekhar Prajapati, Trinath Talapaneni, Prince Kumar Singh, Avala Lavakumar', title: 'Beyond the Blade: A Microstructural Investigation of an Ancient Indian Steel Sword', journalInfo: <><span className="italic">Metallography, Microstructure, and Analysis</span> volume 14, (2025)</>, link: 'https://doi.org/10.1007/s13632-025-01226-x' },
    { id: '15', authors: 'S.S. Chandel, A. Lavakumar, N.S. Randhawa, P.K. Singh', title: 'Unique hot stage modification technique to enhance cementitious properties of electric arc furnace steel slag', journalInfo: <><span className="italic">Journal of Environmental Management</span> volume 376, (2025)</>, link: 'https://doi.org/10.1016/j.jenvman.2025.124398' },
    { id: '14', authors: 'A. Lavakumar, S. Hwang, K. Okada, M. Park, A.H. Chokshi, N. Tsuji', title: 'Real-time Observation of Stress-strain Behavior beyond Necking in Martensitic Steel by in-situ Synchrotron X-ray Diffraction', journalInfo: <><span className="italic">ISIJ International</span> 64 (2024) 1847–1852.</>, link: 'https://doi.org/10.2355/isijinternational.ISIJINT-2024-093' },
    { id: '13', authors: 'D. Narsimhachary, A. Lavakumar, P.K. Katiyar, S.M. Shariff, A. Basu', title: 'Effect of wire deposition rate on macro and microscopic characteristics of laser weld-brazed AA5083 aluminum alloy to galvanized steel joints and their corrosion response', journalInfo: <><span className="italic">Advances in Materials and Processing Technologies</span> (2024) 1–22.</>, link: 'https://doi.org/10.1080/2374068X.2024.2402964' },
    { id: '12', authors: 'S. Hwang, H. Kato, K. Okada, M. Park, A. Lavakumar, R. Gholizadeh, H. Adachi, M. Sato, N. Tsuji', title: 'Exploring unusual Lüders deformation in ultrafine-grained high-Mn austenitic steel', journalInfo: <><span className="italic">Materials Research Letters</span> 12 (2024) 571-579.</>, link: 'https://doi.org/10.1080/21663831.2024.2359611' },
    { id: '11', authors: 'S. Hwang, M.-H. Park, Y. Bai, A. Lavakumar, A. Shibata, H. Adachi, M. Sato, N. Tsuji', title: 'Mechanism of DSA effect correlating to the macroscopic PLC banding in high-Mn austenitic steel', journalInfo: <><span className="italic">Scripta Materialia</span> 249 (2024) 116183.</>, link: 'https://doi.org/10.1016/j.scriptamat.2024.116183' },
    { id: '10', authors: 'P.K. Katiyar, A. Lavakumar, R. Maurya, P.K. Singh', title: 'High entropy alloys (HEAs) as a binder material for heavy tungsten alloys, tungsten carbide hardmetals, and titanium carbo-nitride based cermet composites - a comprehensive review', journalInfo: <><span className="italic">Advances in Materials and Processing Technologies</span> 9 (2023) 1979–2016.</>, link: 'https://doi.org/10.1080/2374068X.2022.2142397' },
    { id: '9', authors: 'A. Lavakumar, S. Yoshida, J. Punyafu, S. Ihara, Y. Chong, H. Saito, N. Tsuji, M. Murayama', title: 'Yield and flow properties of ultra-fine, fine, and coarse grain microstructures of FeCoNi equiatomic alloy at ambient and cryogenic temperatures', journalInfo: <><span className="italic">Scripta Materialia</span> 230 (2023) 115392.</>, link: 'https://doi.org/10.1016/j.scriptamat.2023.115392' },
    { id: '8', authors: 'A. Lavakumar, M. Park, R. Gholizadeh, R.K. Ray, M. Murayama, N. Tsuji', title: 'Unique microstructure formations during low-temperature partitioning after intercritical annealing in low alloy multi-phase TRIP steel and their mechanical behavior clarified by in-situ synchrotron X-Ray diffraction', journalInfo: <><span className="italic">Materials Science and Engineering: A</span> 878 (2023) 145214.</>, link: 'https://doi.org/10.1016/j.msea.2023.145214' },
    { id: '7', authors: 'A. Lavakumar, M. Park, S. Hwang, H. Adachi, M. Sato, R.K. Ray, M. Murayama, N. Tsuji', title: 'Role of surrounding phases on deformation-induced martensitic transformation of retained austenite in multi-phase TRIP steel', journalInfo: <><span className="italic">Materials Science and Engineering: A</span> 874 (2023) 145089.</>, link: 'https://doi.org/10.1016/j.msea.2023.145089' },
    { id: '6', authors: 'S.S. Sarangi, A. Lavakumar, P.K. Singh, P.K. Katiyar, R.K. Ray', title: 'Indentation size effect in steels with different carbon contents and microstructures', journalInfo: <><span className="italic">Materials Science and Technology</span> 39 (2023) 338–346.</>, link: 'https://doi.org/10.1080/02670836.2022.2113157' },
    { id: '5', authors: 'S. Ihara, H. Saito, M. Yoshinaga, Avala Lavakumar, M. Murayama', title: 'Deep learning-based noise filtering toward millisecond order imaging by using scanning transmission electron microscopy', journalInfo: <><span className="italic">Scientific Reports</span> 12 (2022) 13462.</>, link: 'https://doi.org/10.1038/s41598-022-17360-3' },
    { id: '4', authors: 'A. Lavakumar, S.S. Sarangi, V. Chilla, D. Narsimhachary, R.K. Ray', title: 'A “new” empirical equation to describe the strain hardening behavior of steels and other metallic materials', journalInfo: <><span className="italic">Materials Science and Engineering: A</span> 802 (2021) 140641.</>, link: 'https://doi.org/10.1016/j.msea.2020.140641' },
    { id: '3', authors: 'P.K. Singh, A. Lavakumar, P.K. Katiyar, R. Maurya', title: 'Agglomeration behaviour of steel plants solid waste and its effect on sintering performance', journalInfo: <><span className="italic">Journal of Materials Research and Technology</span> 6 (2017) 289–296.</>, link: 'https://doi.org/10.1016/j.jmrt.2016.11.005' },
    { id: '2', authors: 'P.K. Katiyar, P.K. Singh, R. Singh, A. Lavakumar', title: 'Modes of failure of cemented tungsten carbide tool bits (WC/Co): A study of wear parts', journalInfo: <><span className="italic">International Journal of Refractory Metals and Hard Materials</span> 54 (2016) 27–38.</>, link: 'https://doi.org/10.1016/j.ijrmhm.2015.06.018' },
    { id: '1', authors: 'P.K.Singh, P.K.Katiyar, A. Lavakumar, D.K. Mishra, A. Behera', title: 'Agglomeration behavior of solid waste materials in steel plants', journalInfo: <><span className="italic">Emerging Materials research</span> 5 (2016)</>, link: 'https://doi.org/10.1680/jemmr.15.00014' }
  ];

  // Conference publications (from CSV)
  const conferencePublications = [
    { id: '1', authors: 'A. Lavakumar, M. H. Park, S. Gao, A. Shibata, Y. Okitsu, W. Gong, S. Harjo, N. Tsuji', title: "In-situ neutron diffraction study on the deformation of a TRIP-assisted multi-phase steel composed of ferrite, austenite and martensite", journalInfo: <><span className="italic">IOP Conf. Ser.: Mater. Sci. Eng.</span> 580, 012036 (2019)</>, link: 'https://doi.org/10.1088/1757-899X/580/1/012036' },
    { id: '2', authors: 'S.S. Sarangi, A. Lavakumar', title: 'Application of Rietveld refinement and Williamson-Hall analysis in ultra-low carbon to high carbon steels', journalInfo: <><span className="italic">Materials Science Forum</span> 969 (2019)</>, link: 'https://doi.org/10.4028/www.scientific.net/MSF.969' },
    { id: '3', authors: 'S.S. Sarangi, A. Lavakumar, D. Narsimhachary', title: 'Wear resistance of structural steels having ultra-low carbon to high carbon concentration', journalInfo: <><span className="italic">Advances in Applied Mechanical Engineering — Selected Proceedings of ICAMER</span>, Lecture Notes in Mechanical Engineering, Springer, Cham (2020)</>, link: 'https://doi.org/10.1007/978-981-15-1201-8_87' },
    { id: '4', authors: 'A. Lavakumar, N. Bhargav Chaitanya, B. Shiva Kumar, V. S. Nath, P.K. Singh', title: 'Study of Tensile Fracture Mechanisms of a Ni-base Superalloy Supercast 247A', journalInfo: <><span className="italic">Procedia Materials Science</span> 5 (2014) 1090–1096</>, link: 'https://doi.org/10.1016/j.mspro.2014.07.402' },
    { id: '5', authors: 'P.K. Singh, P.K. Katiyar, A. Lavakumar, B. Chaithnya, S. Pramanik', title: 'Effect of Sintering Performance of the Utilization of Blast Furnace Solid Wastes as Pellets', journalInfo: <><span className="italic">Procedia Materials Science</span> 5 (2014) 2468–2477</>, link: 'https://doi.org/10.1016/j.mspro.2014.07.498' },
    { id: '6', authors: 'A. Lavakumar, P.K. Singh, S. Srivastava, S. Kori, L.A. Kumar', title: 'Gamma Prime Coarsening Behavior of Nickel Super alloy Supercast 247A after Prolonged Thermal Exposures', journalInfo: <><span className="italic">IOSR Journal of Mechanical and Civil Engineering (IOSR-JMCE)</span> (2013)</>, link: 'https://api.semanticscholar.org/CorpusID:44238952' },
    { id: '7', authors: 'A. Lavakumar, M. Bheema, P.K. Singh, R.K. Rai, S.K. Srivastava', title: 'Measurement of Thermo Physical Properties of Nickel Based Superalloys', journalInfo: <><span className="italic">Proceedings of the International Conference on Advances in Manufacturing and Materials Engineering (AMME 2013)</span></>, link: 'https://api.semanticscholar.org/CorpusID:212748817' },
    { id: '8', authors: 'A. Lavakumar, Ch.V.S. Murthy, R. Chkravorty, N. Eswara Prasad', title: 'Effect of microstructure on the ambient tensile deformation behavior of nickel-based superalloy Supercast 247A', journalInfo: <><span className="italic">Proceedings of the PSRC International Conference on Advances in Manufacturing and Materials Engineering (ICMMME'13)</span>, Johannesburg, South Africa, April 15-16, 2013</>, },
    { id: '9', authors: 'P.K. Singh, A. Lavakumar, R.K. Rai, S. Srivastava', title: 'Recycling of environmental hazardous wastage of integrated steel plants', journalInfo: <><span className="italic">Proceedings of the PSRC International Conference on Innovations in Civil, Water, Materials and Geo-Environmental Engineering (ICIWMGEE'13)</span>, Johannesburg, South Africa, April 15-16, 2013</> }
  ];

  const bookChapters = [
    { authors: 'Vatsala Chaturvedi, Rahul Kumar Sahu, Avala Lavakumar, Trinath Talapaneni', title: 'Properties of Shape Memory Alloys', journalInfo: <><span className="italic">Sustainability of Alloys and Polymers of Shape Memory Materials</span>, CRC Press (Taylor Francis Group), ISBN 9781003747901</> },
    { authors: 'Trinath Talapaneni, Vatsala Chaturvedi, Rahul Kumar Sahu, Avala Lavakumar', title: 'Effect of Various Parameters on Shape Recovery of Shape Memory Alloys', journalInfo: <><span className="italic">Sustainability of Alloys and Polymers of Shape Memory Materials</span>, CRC Press (Taylor Francis Group), ISBN 9781003747901</> },
    { authors: 'Sushree P. Mohapatra, Arun Kumar Patro, Vatsala Chaturvedi, Trinath Talapaneni, Avala Lavakumar', title: 'Phase Transformation Phenomena in Shape Memory Alloys', journalInfo: <><span className="italic">Sustainability of Alloys and Polymers of Shape Memory Materials</span>, CRC Press (Taylor Francis Group), ISBN 9781003747901</> },
    { authors: 'Trinath Talapaneni, Avala Lavakumar, Vatsala Chaturvedi', title: 'Corrosion and Radiation Resistance Properties of High Entropy Alloys', journalInfo: <><span className="italic">Handbook of High Entropy Alloys: Fundamentals to Applications</span>, CRC Press (Taylor Francis Group), ISBN 9781032855578</> }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">

          {/* --- SECTION 2: BOOK(S) --- */}
          <section className="bg-[#F5F5F5] rounded-2xl shadow-[inset_0_0_20px_rgba(0,0,0,0.08)] p-6">
            <h2 className="text-3xl font-bold text-[#FF6600] mb-6 border-b-2 border-[#FF6600] inline-block pb-2">BOOK(S)</h2>
            <div className="space-y-6 pl-4 text-lg">
              <div>
                <AuthorParams text="Avala Lavakumar" /> Divisional Editor for the topic <span className="italic">"Testing, Characterization, and Quality Assurance of Renewable Materials"</span> in the ASM Handbook: Volume 27 - Renewable Materials (Expected in 2027)
              </div>

              <div>
                <AuthorParams text="Avala Lavakumar," />{' '}
                <a
                  href="https://doi.org/10.1088/978-1-6817-4473-5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="italic text-[#0B5472] hover:underline font-medium"
                >
                  Concepts in Physical Metallurgy: Concise Lecture Notes,
                </a>{' '}
                Morgan & Claypool Publishers, San Rafael, CA, 2017.
              </div>
            </div>
          </section>


          {/* --- SECTION 3: BOOK CHAPTERS --- */}
          <section className="bg-[#F5F5F5] rounded-2xl shadow-[inset_0_0_20px_rgba(0,0,0,0.08)] p-6">
            <h2 className="text-3xl font-bold text-[#FF6600] mb-6 border-b-2 border-[#FF6600] inline-block pb-2">BOOK CHAPTERS</h2>
            <div className="space-y-6 pl-4 text-lg">
              {bookChapters.map((chapter, index) => (
                <div key={index} className="flex gap-2">
                  <span className="font-bold min-w-[30px]">{index + 1}.</span>
                  <div>
                    <AuthorParams text={chapter.authors} />{' '}
                    <span className="italic">{chapter.title}</span>{', '}
                    {chapter.journalInfo}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* --- SECTION 4: JOURNAL PUBLICATIONS (NUMBERING 20 -> 1) --- */}
          <section className="bg-[#F5F5F5] rounded-2xl shadow-[inset_0_0_20px_rgba(0,0,0,0.08)] p-6">
            <h2 className="text-3xl font-bold text-[#FF6600] mb-6 border-b-2 border-[#FF6600] inline-block pb-2">JOURNAL PUBLICATIONS</h2>
            <div className="space-y-6 pl-4 text-lg">
              {journalPublications.map(pub => (
                <PublicationEntry
                  key={pub.id}
                  id={pub.id}
                  authors={pub.authors}
                  title={pub.title}
                  journalInfo={pub.journalInfo}
                  link={pub.link}
                />
              ))}
            </div>
          </section>

          {/* --- SECTION 4: CONFERENCE PUBLICATIONS --- */}
          <section className="bg-[#F5F5F5] rounded-2xl shadow-[inset_0_0_20px_rgba(0,0,0,0.08)] p-6">
            <h2 className="text-3xl font-bold text-[#FF6600] mb-6 border-b-2 border-[#FF6600] inline-block pb-2">CONFERENCE PUBLICATIONS</h2>
            <div className="space-y-6 pl-4 text-lg">
              {conferencePublications.map(pub => (
                <PublicationEntry
                  key={pub.id}
                  id={pub.id}
                  authors={pub.authors}
                  title={pub.title}
                  journalInfo={pub.journalInfo}
                  link={pub.link}
                />
              ))}
            </div>
          </section>

          {/* --- SECTION 5: PROFILES & REFERENCE LINKS --- */}
          <section className="bg-[#F5F5F5] rounded-2xl shadow-[inset_0_0_20px_rgba(0,0,0,0.08)] p-6">
            <h2 className="text-3xl font-bold text-[#FF6600] mb-6 border-b-2 border-[#FF6600] inline-block pb-2">Researcher Profiles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href="https://scholar.google.com/citations?user=H_WhrEIAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 border border-gray-200 hover:border-[#FF6600] rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-2 h-40 flex items-center justify-center p-6 group"
              >
                <img src={scholarLogo} alt="Google Scholar" className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105" />
              </a>

              <a
                href="https://orcid.org/0000-0001-8287-8607"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 border border-gray-200 hover:border-[#FF6600] rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-2 h-40 flex items-center justify-center p-6 group"
              >
                <img src={orcidLogo} alt="ORCID" className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105" />
              </a>

              <a
                href="https://www.researchgate.net/profile/Avala-Lavakumar"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 border border-gray-200 hover:border-[#FF6600] rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-2 h-40 flex items-center justify-center p-6 group"
              >
                <img src={researchgateLogo} alt="ResearchGate" className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105" />
              </a>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Publications;
