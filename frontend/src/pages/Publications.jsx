import React from 'react';
import scholarLogo from '../assets/publications/scholar.png';
import orcidLogo from '../assets/publications/orcid.png';
import researchgateLogo from '../assets/publications/researchgate.png';

// Helper to style authors
// "bold all black but bold Lavakumar with diff colouyr"
const AuthorParams = ({ text }) => {
  // Regex for Lavakumar variants
  const lavaPattern = /(Avala Lavakumar|A\. Lavakumar|L\. Avala)/g;
  const parts = text.split(lavaPattern);

  return (
    <span className="font-bold text-gray-900">
      {parts.map((part, index) => {
        if (part.match(lavaPattern)) {
          return <span key={index} className="text-blue-700">{part}</span>;
        }
        return part;
      })}
    </span>
  );
};

// Helper for clickable title
const PublicationEntry = ({ id, authors, title, journalInfo, link }) => (
  <div className="flex gap-2">
    {/* Numbering: Fixed 20 -> 1 as requested */}
    {id && <span className="font-bold min-w-[30px]">{id}.</span>}
    <div>
      <AuthorParams text={authors} />{' '}
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="italic text-blue-700 hover:underline cursor-pointer"
        >
          {title}
        </a>
      ) : (
        <span className="italic">{title}</span>
      )}
      {' '}{journalInfo}
    </div>
  </div>
);

const Publications = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* --- SECTION 1: PROFILE LINKS ROW (FIXED ASSETS) --- */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://scholar.google.com/citations?user=H_WhrEIAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg shadow-sm hover:shadow-md transition-all h-40 flex items-center justify-center p-6 group"
            >
              <img src={scholarLogo} alt="Google Scholar" className="max-h-full max-w-full object-contain" />
            </a>

            <a
              href="https://orcid.org/0000-0001-8287-8607"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg shadow-sm hover:shadow-md transition-all h-40 flex items-center justify-center p-6 group"
            >
              <img src={orcidLogo} alt="ORCID" className="max-h-full max-w-full object-contain" />
            </a>

            <a
              href="https://www.researchgate.net/profile/Avala-Lavakumar"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg shadow-sm hover:shadow-md transition-all h-40 flex items-center justify-center p-6 group"
            >
              <img src={researchgateLogo} alt="ResearchGate" className="max-h-full max-w-full object-contain" />
            </a>
          </div>
        </section>


        {/* --- SECTION 2: BOOK(S) --- */}
        <section>
          <div className="border-b-2 border-gray-200 mb-6 pb-2">
            <h2 className="text-2xl font-bold text-blue-900 tracking-wide uppercase">BOOK(S)</h2>
          </div>
          <div className="space-y-8 pl-4 text-lg">
            <div>
              <AuthorParams text="Avala Lavakumar" /> Divisional Editor for the topic <span className="italic">"Testing, Characterization, and Quality Assurance of Renewable Materials"</span> in the ASM Handbook: Volume 27 - Renewable Materials (Expected in 2027)
            </div>

            <div>
              <AuthorParams text="Avala Lavakumar," />{' '}
              <a
                href="https://doi.org/10.1088/978-1-6817-4473-5"
                target="_blank"
                rel="noopener noreferrer"
                className="italic text-blue-700 hover:underline"
              >
                Concepts in Physical Metallurgy: Concise Lecture Notes,
              </a>{' '}
              Morgan & Claypool Publishers, San Rafael, CA, 2017.
            </div>
          </div>
        </section>


        {/* --- SECTION 3: JOURNAL PUBLICATIONS (NUMBERING 20 -> 1) --- */}
        <section>
          <div className="border-b-2 border-gray-200 mb-6 pb-2">
            <h2 className="text-2xl font-bold text-blue-900 tracking-wide uppercase">JOURNAL PUBLICATIONS</h2>
          </div>
          <div className="space-y-6 pl-4 text-lg">

            <PublicationEntry
              id="20"
              authors="Lokesh K. Singh, Avala Lavakumar, Rajeshwar R. Eleti"
              title="“Coarse slip bands and non-Schmid’s translational slip lead to shear bands formation in body-centered cubic HfNbTaTiZr high-entropy alloy”"
              journalInfo={<><span className="italic">Scientific Report</span> (Accepted)</>}
            />

            <PublicationEntry
              id="19"
              authors="Kolli Venkatesh, Sushree P. Mohapatra, Trinath Talapaneni, Santosh Kumar, Prvan Kumar Katiyar, Prince Kumar Singh, Avala Lavakumar"
              title="“Comparative study of ancient and modern Indian metallurgical practices: evolution and continuity”"
              journalInfo={<><span className="italic">Proc.Indian Natl. Sci. Acad.</span> (2025).</>}
            />

            <PublicationEntry
              id="18"
              authors="Avala Lavakumar, L.S.R.Kumara"
              title="Partitioning-time dependent evolution of retained austenite and its impact on microstructure and mechanical properties in lean TRIP-assisted steel,"
              journalInfo={<><span className="italic">Journal of Alloys and Metallurgical Systems</span> 12, (2025) 100214.</>}
            />

            <PublicationEntry
              id="17"
              authors="Sukyoung Hwang, Myeong-heom Park, Yu Baia, Takumi Suzumura, Ryo Asada, Avala Lavakumar, Jesada Punyafu, Akinobu Shibataa, Hiroki Adachi, Toshiyuki Fujii, Nobuhiro Tsuji"
              title="“Dynamics of Portevin-Le Chatelier banding revealed through grain refinement in high-Mn austenitic steel: sequential overcoming of necking”"
              journalInfo={<><span className="italic">Journal of Materials Science & Technology</span> (2025)</>}
              link="https://doi.org/10.1016/j.jmst.2025.08.017"
            />

            <PublicationEntry
              id="16"
              authors="Arun Kumar Patro, Kolli Venkatesh, Shashishekhar Prajapati, Trinath Talapaneni, Prince Kumar Singh, Avala Lavakumar,"
              title="Beyond the Blade: A Microstructural Investigation of an Ancient Indian Steel Sword,"
              journalInfo={<><span className="italic">Metallography, Microstructure, and Analysis</span> (2025).</>}
              link="https://doi.org/10.1007/s13632-025-01226-x"
            />

            <PublicationEntry
              id="15"
              authors="S.S. Chandel, A. Lavakumar, N.S. Randhawa, P.K. Singh,"
              title="Unique hot stage modification technique to enhance cementitious properties of electric arc furnace steel slag,"
              journalInfo={<><span className="italic">Journal of Environmental Management</span> 376 (2025) 124398.</>}
              link="https://doi.org/10.1016/j.jenvman.2025.124398"
            />

            <PublicationEntry
              id="14"
              authors="A. Lavakumar, S. Hwang, K. Okada, M. Park, A.H. Chokshi, N. Tsuji,"
              title="Real-time Observation of Stress-strain Behavior beyond Necking in Martensitic Steel by in-situ Synchrotron X-ray Diffraction,"
              journalInfo={<><span className="italic">ISIJ International</span> 64 (2024) 1847–1852.</>}
              link="https://doi.org/10.2355/isijinternational.ISIJINT-2024-093"
            />

            <PublicationEntry
              id="13"
              authors="D. Narsimhachary, A. Lavakumar, P.K. Katiyar, S.M. Shariff, A. Basu,"
              title="Effect of wire deposition rate on macro and microscopic characteristics of laser weld-brazed AA5083 aluminum alloy to galvanized steel joints and their corrosion response,"
              journalInfo={<><span className="italic">Advances in Materials and Processing Technologies</span> (2024) 1–22.</>}
              link="https://doi.org/10.1080/2374068X.2024.2402964"
            />

            <PublicationEntry
              id="12"
              authors="S. Hwang, H. Kato, K. Okada, M. Park, A. Lavakumar, R. Gholizadeh, H. Adachi, M. Sato, N. Tsuji,"
              title="Exploring unusual Lüders deformation in ultrafine-grained high-Mn austenitic steel,"
              journalInfo={<><span className="italic">Materials Research Letters</span> 12 (2024) 571-579.</>}
              link="https://doi.org/10.1080/21663831.2024.2359611"
            />

            <PublicationEntry
              id="11"
              authors="S. Hwang, M.-H. Park, Y. Bai, A. Lavakumar, A. Shibata, H. Adachi, M. Sato, N. Tsuji,"
              title="Mechanism of DSA effect correlating to the macroscopic PLC banding in high-Mn austenitic steel,"
              journalInfo={<><span className="italic">Scripta Materialia</span> 249 (2024) 116183.</>}
              link="https://doi.org/10.1016/j.scriptamat.2024.116183"
            />

            <PublicationEntry
              id="10"
              authors="P.K. Katiyar, A. Lavakumar, R. Maurya, P.K. Singh,"
              title="High entropy alloys (HEAs) as a binder material for heavy tungsten alloys, tungsten carbide hardmetals, and titanium carbo-nitride based cermet composites - a comprehensive review,"
              journalInfo={<><span className="italic">Advances in Materials and Processing Technologies</span> 9 (2023) 1979–2016.</>}
              link="https://doi.org/10.1080/2374068X.2022.2142397"
            />

            <PublicationEntry
              id="9"
              authors="A. Lavakumar, S. Yoshida, J. Punyafu, S. Ihara, Y. Chong, H. Saito, N. Tsuji, M. Murayama,"
              title="Yield and flow properties of ultra-fine, fine, and coarse grain microstructures of FeCoNi equiatomic alloy at ambient and cryogenic temperatures,"
              journalInfo={<><span className="italic">Scripta Materialia</span> 230 (2023) 115392.</>}
              link="https://doi.org/10.1016/j.scriptamat.2023.115392"
            />

            <PublicationEntry
              id="8"
              authors="A. Lavakumar, M. Park, R. Gholizadeh, R.K. Ray, M. Murayama, N. Tsuji,"
              title="Unique microstructure formations during low-temperature partitioning after intercritical annealing in low alloy multi-phase TRIP steel and their mechanical behavior clarified by in-situ synchrotron X-Ray diffraction,"
              journalInfo={<><span className="italic">Materials Science and Engineering: A</span> 878 (2023) 145214.</>}
              link="https://doi.org/10.1016/j.msea.2023.145214"
            />

            <PublicationEntry
              id="7"
              authors="A. Lavakumar, M. Park, S. Hwang, H. Adachi, M. Sato, R.K. Ray, M. Murayama, N. Tsuji,"
              title="Role of surrounding phases on deformation-induced martensitic transformation of retained austenite in multi-phase TRIP steel,"
              journalInfo={<><span className="italic">Materials Science and Engineering: A</span> 874 (2023) 145089.</>}
              link="https://doi.org/10.1016/j.msea.2023.145089"
            />

            <PublicationEntry
              id="6"
              authors="S.S. Sarangi, A. Lavakumar, P.K. Singh, P.K. Katiyar, R.K. Ray,"
              title="Indentation size effect in steels with different carbon contents and microstructures,"
              journalInfo={<><span className="italic">Materials Science and Technology</span> 39 (2023) 338–346.</>}
              link="https://doi.org/10.1080/02670836.2022.2113157"
            />

            <PublicationEntry
              id="5"
              authors="S. Ihara, H. Saito, M. Yoshinaga, L. Avala, M. Murayama,"
              title="Deep learning-based noise filtering toward millisecond order imaging by using scanning transmission electron microscopy,"
              journalInfo={<><span className="italic">Scientific Reports</span> 12 (2022) 13462.</>}
              link="https://doi.org/10.1038/s41598-022-17360-3"
            />

            <PublicationEntry
              id="4"
              authors="A. Lavakumar, S.S. Sarangi, V. Chilla, D. Narsimhachary, R.K. Ray,"
              title="A “new” empirical equation to describe the strain hardening behavior of steels and other metallic materials,"
              journalInfo={<><span className="italic">Materials Science and Engineering: A</span> 802 (2021) 140641.</>}
              link="https://doi.org/10.1016/j.msea.2020.140641"
            />

            <PublicationEntry
              id="3"
              authors="P.K. Singh, A. Lavakumar, P.K. Katiyar, R. Maurya,"
              title="Agglomeration behaviour of steel plants solid waste and its effect on sintering performance,"
              journalInfo={<><span className="italic">Journal of Materials Research and Technology</span> 6 (2017) 289–296.</>}
              link="https://doi.org/10.1016/j.jmrt.2016.11.005"
            />

            <PublicationEntry
              id="2"
              authors="P.K. Katiyar, P.K. Singh, R. Singh, A. Lavakumar,"
              title="Modes of failure of cemented tungsten carbide tool bits (WC/Co): A study of wear parts,"
              journalInfo={<><span className="italic">International Journal of Refractory Metals and Hard Materials</span> 54 (2016) 27–38.</>}
              link="https://doi.org/10.1016/j.ijrmhm.2015.06.018"
            />

            <PublicationEntry
              id="1"
              authors="P.K.Singh, P.K.Katiyar, A. Lavakumar, D.K. Mishra, A. Behera"
              title="Agglomeration behavior of solid waste materials in steel plants,"
              journalInfo={<><span className="italic">Emerging Materials research</span> (2016) Vol.5: Issue 171-176.</>}
              link="https://doi.org/10.1680/jemmr.15.00014"
            />

          </div>
        </section>

        {/* --- SECTION 4: CONFERENCE PUBLICATIONS --- */}
        <section>
          <div className="border-b-2 border-gray-200 mb-6 pb-2">
            <h2 className="text-2xl font-bold text-blue-900 tracking-wide uppercase">CONFERENCE PUBLICATIONS</h2>
          </div>
          <div className="space-y-6 pl-4 text-lg">

            <PublicationEntry
              id="1"
              authors="A. Lavakumar, M. H. Park, S. Gao, A. Shibata, Y. Okitsu, W. Gong, S. Harjo and N. Tsuji,"
              title="In-situ neutron diffraction study on the deformation of a TRIP-assisted multi-phase steel composed of ferrite, austenite and martensite,"
              journalInfo={<><span className="italic">IOP Conf. Ser.: Mater. Sci. Eng.,</span> 580 (2019) 012036.</>}
              link="https://doi.org/10.1088/1757-899X/580/1/012036"
            />

            <PublicationEntry
              id="2"
              authors="S.S. Sarangi, A. Lavakumar,"
              title="Application of Rietveld refinement and Williamson Hall analysis in ultra-low carbon to high carbon steels,"
              journalInfo={<><span className="italic">Mater. Sci. Forum,</span> 969 (2019) 3-8.</>}
              link="https://doi.org/10.4028/www.scientific.net/msf.969.3"
            />

            <PublicationEntry
              id="3"
              authors="S.S. Sarangi, A. Lavakumar, D. Narsimhachary,"
              title="Wear resistance of structural steels having ultra-low carbon to high carbon concentration,"
              journalInfo={<>in: H.K. Voruganti, K.K. Kumar, P.V. Krishna, X. Jin (Eds.), <span className="italic">Advances in Applied Mechanical Engineering - Select Proceedings of ICAMER 2019, Lecture Notes in Mechanical Engineering,</span> Springer, Cham, 2020, pp. 817-822.</>}
              link="https://doi.org/10.1007/978-981-15-1201-8_87"
            />

            <PublicationEntry
              id="4"
              authors="A. Lavakumar, N. Bhargav Chaitanya, B. Shiva Kumar, Virinchi Sai Nath, P.K. Singh,"
              title="Study of tensile fracture mechanisms of a Ni-base superalloy Supercast 247A,"
              journalInfo={<><span className="italic">Procedia Mater. Sci.,</span> 5 (2014) 1090-1096.</>}
              link="https://doi.org/10.1016/j.mspro.2014.07.402"
            />

            <PublicationEntry
              id="5"
              authors="P.K. Singh, P.K. Katiyar, A. Lavakumar, B. Chaithnya, S. Pramanik,"
              title="Effect of sintering performance of the utilization of blast furnace solid wastes as pellets,"
              journalInfo={<><span className="italic">Procedia Mater. Sci.,</span> 5 (2014) 2468-2477.</>}
              link="https://doi.org/10.1016/j.mspro.2014.07.498"
            />

            <PublicationEntry
              id="6"
              authors="A. Lavakumar, P.K. Singh, S. Srivastava, S. Kori, L.A. Kumar,"
              title="Gamma prime coarsening behavior of nickel super alloy Supercast 247A after prolonged thermal exposures,"
              journalInfo={<><span className="italic">IOSR J. Mech. Civ. Eng.,</span> (2013) 37-42.</>}
              link="https://www.iosrjournals.org/iosr-jmce/papers/RDME-Volume4/RDME-36.pdf"
            />

            <PublicationEntry
              id="7"
              authors="A. Lavakumar, M. Bheema, P.K. Singh, R.K. Rai, S.K. Srivastava,"
              title="Measurement of thermo physical properties of nickel based superalloys,"
              journalInfo={<>in: Proceedings of the International Conference on Advances in Manufacturing and Materials Engineering (AMME 2013), 2013.</>}
              link="https://api.semanticscholar.org/CorpusID:212748817"
            />

            <PublicationEntry
              id="8"
              authors="A. Lavakumar, Ch.V.S. Murthy, R. Chkravorty, N. Eswara Prasad,"
              title="Effect of microstructure on the ambient tensile deformation behavior of nickel-based superalloy Supercast 247A,"
              journalInfo={<>in: Proceedings of the PSRC International Conference on Advances in Manufacturing and Materials Engineering (ICMMME'13), Johannesburg, South Africa, April 15-16, 2013</>}
            />

            <PublicationEntry
              id="9"
              authors="P.K. Singh, A. Lavakumar, R.K. Rai, S. Srivastava,"
              title="Recycling of environmental hazardous wastage of integrated steel plants,"
              journalInfo={<>in: Proceedings of the PSRC International Conference on Innovations in Civil, Water, Materials and Geo-Environmental Engineering (ICIWMGEE'13), Johannesburg, South Africa, April 15-16, 2013.</>}
            />

          </div>
        </section>

      </div>
    </div>
  );
};

export default Publications;
