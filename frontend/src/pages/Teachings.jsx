import React from 'react';
import { Eye, Download } from 'lucide-react';

const Teachings = () => {

  // --- Data ---
  const physicalMetallurgy = [
    {
      title: "1. Introduction",
      view: "https://drive.google.com/file/d/1BjecqmLPXVmsSTwwYMYfQIysBUM1ee0W/view?usp=drive_link",
      download: "https://drive.google.com/uc?export=download&id=1BjecqmLPXVmsSTwwYMYfQIysBUM1ee0W"
    },
    {
      title: "2. Atomic structure",
      view: "https://drive.google.com/file/d/1lYPlAZ2uAc8T2-zZLSJXrzo8rHTXZUcc/view?usp=drive_link",
      download: "https://drive.google.com/uc?export=download&id=1lYPlAZ2uAc8T2-zZLSJXrzo8rHTXZUcc"
    },
    {
      title: "3. Crystal structure",
      view: "https://drive.google.com/file/d/1_FGrxoE0NX9GFMq54rUxABI0lAcbQM0F/view?usp=drive_link",
      download: "https://drive.google.com/uc?export=download&id=1_FGrxoE0NX9GFMq54rUxABI0lAcbQM0F"
    },
    {
      title: "4. Solidification",
      view: "https://drive.google.com/file/d/1ifhRfy7C6PDoxAfyxVhGiNeUPVOv1r7h/view?usp=drive_link",
      download: "https://drive.google.com/uc?export=download&id=1ifhRfy7C6PDoxAfyxVhGiNeUPVOv1r7h"
    },
    {
      title: "5.1 Crystal imperfections",
      view: "https://drive.google.com/file/d/1FvswcNTc0qblMOvkdVXd7-xDvkiim0Y1/view?usp=drive_link",
      download: "https://drive.google.com/uc?export=download&id=1FvswcNTc0qblMOvkdVXd7-xDvkiim0Y1"
    },
    {
      title: "5.2 Mechanical properties",
      view: "https://drive.google.com/file/d/1edfQ8Vn04NMIPuBaGp_ETNGpL6tEL1pv/view?usp=drive_link",
      download: "https://drive.google.com/uc?export=download&id=1edfQ8Vn04NMIPuBaGp_ETNGpL6tEL1pv"
    },
    {
      title: "6. Concept of alloy",
      view: "https://drive.google.com/file/d/1bISbkDGga-bpG65BktP7kdO3d0dv0zza/view?usp=drive_link",
      download: "https://drive.google.com/uc?export=download&id=1bISbkDGga-bpG65BktP7kdO3d0dv0zza"
    },
    {
      title: "7. Phase diagrams",
      view: "https://drive.google.com/file/d/1FOaDuIz1tBOKiesQgIT5WvOk4OihBkMT/view?usp=drive_link",
      download: "https://drive.google.com/uc?export=download&id=1FOaDuIz1tBOKiesQgIT5WvOk4OihBkMT"
    },
    {
      title: "8.1 Iron-cementite phase diagram",
      view: "https://drive.google.com/file/d/10qEL1IrHsRn7fXcK_tHHJvcYBWtKqc4X/view?usp=drive_link",
      download: "https://drive.google.com/uc?export=download&id=10qEL1IrHsRn7fXcK_tHHJvcYBWtKqc4X"
    },
    {
      title: "8.2 Iron-graphite phase diagram",
      view: "https://drive.google.com/file/d/144l9QUHR6afDVdQs_wXg0q9k_vRVyA5R/view?usp=drive_link",
      download: "https://drive.google.com/uc?export=download&id=144l9QUHR6afDVdQs_wXg0q9k_vRVyA5R"
    },
    {
      title: "9.1 Heat treatment",
      view: "https://drive.google.com/file/d/1_frfHJvtb36Zk4YYhLZ0hN5ma4S2S_MH/view?usp=drive_link",
      download: "https://drive.google.com/uc?export=download&id=1_frfHJvtb36Zk4YYhLZ0hN5ma4S2S_MH"
    },
    {
      title: "9.2 Diffusion",
      view: "https://drive.google.com/file/d/1SNmdDSoAoJSOTOKnm-LQKX7Wr7IR7sLu/view?usp=drive_link",
      download: "https://drive.google.com/uc?export=download&id=1SNmdDSoAoJSOTOKnm-LQKX7Wr7IR7sLu"
    },
    {
      title: "10. Common alloy steels & common non-ferrous alloys",
      view: "https://drive.google.com/file/d/1nMIfH5jkioLQV_mi-910kAQPzApwjrVs/view?usp=drive_link",
      download: "https://drive.google.com/uc?export=download&id=1nMIfH5jkioLQV_mi-910kAQPzApwjrVs"
    }
  ];

  const heatTreatment = [
    {
      title: "1. Foundation",
      view: "https://drive.google.com/file/d/1bBcIdVW-5Q6_MPsx2E3PSeJPcP9Um7wm/view?usp=drive_link",
      download: "https://drive.google.com/uc?export=download&id=1bBcIdVW-5Q6_MPsx2E3PSeJPcP9Um7wm"
    },
    {
      title: "2. Principles of heat treatment of steels",
      view: "https://drive.google.com/file/d/1K05jxuxY9B57iMCmTEwq18qoBMzZylJD/view?usp=drive_link",
      download: "https://drive.google.com/uc?export=download&id=1K05jxuxY9B57iMCmTEwq18qoBMzZylJD"
    },
    {
      title: "3. Heat treatment processes for steels",
      view: "https://drive.google.com/file/d/1audOEe5r_Yoe1qYZRlnfrU4xMn6jxsK_/view?usp=drive_link",
      download: "https://drive.google.com/uc?export=download&id=1audOEe5r_Yoe1qYZRlnfrU4xMn6jxsK_"
    },
    {
      title: "4. Hardenability",
      view: "https://drive.google.com/file/d/1XXmUmJ3sJuiJjXBZHsfw_VAAUk5JuBwU/view?usp=drive_link",
      download: "https://drive.google.com/uc?export=download&id=1XXmUmJ3sJuiJjXBZHsfw_VAAUk5JuBwU"
    },
    {
      title: "5. Quenching technology",
      view: "https://drive.google.com/file/d/19hmtAtvh5kxFFSOnkkS1r-4rvZh5YLi8/view?usp=drive_link",
      download: "https://drive.google.com/uc?export=download&id=19hmtAtvh5kxFFSOnkkS1r-4rvZh5YLi8"
    },
    {
      title: "6. Surface hardening treatment of steels",
      view: "https://drive.google.com/file/d/1qT6VJaMu192lRZB-7jhsumgw7LUANTLr/view?usp=drive_link",
      download: "https://drive.google.com/uc?export=download&id=1qT6VJaMu192lRZB-7jhsumgw7LUANTLr"
    },
    {
      title: "7. Thermo chemical treatments of steels",
      view: "https://drive.google.com/file/d/1Nipat0ab_3Gpe1-3QwfTOleRgUh_X8is/view?usp=drive_link",
      download: "https://drive.google.com/uc?export=download&id=1Nipat0ab_3Gpe1-3QwfTOleRgUh_X8is"
    },
    {
      title: "8. Thermo mechanical treatment",
      view: "https://drive.google.com/file/d/1MDIsa6NGBPhRSoQ-sNzLb9r0n53WXXv2/view?usp=drive_link",
      download: "https://drive.google.com/uc?export=download&id=1MDIsa6NGBPhRSoQ-sNzLb9r0n53WXXv2"
    },
    {
      title: "9. Cast irons",
      view: "https://drive.google.com/file/d/1dLVXIaABiTMocLTDURHtltvHDopHZKB1/view?usp=drive_link",
      download: "https://drive.google.com/uc?export=download&id=1dLVXIaABiTMocLTDURHtltvHDopHZKB1"
    },
    {
      title: "10. Heat treatment of selected steels",
      view: "https://drive.google.com/file/d/1Zy8M3vdkBtFOQzXPwXKLj8OD0o3jAbec/view?usp=drive_link",
      download: "https://drive.google.com/uc?export=download&id=1Zy8M3vdkBtFOQzXPwXKLj8OD0o3jAbec"
    },
    {
      title: "11. Heat treatment of non-ferrous alloys",
      view: "https://drive.google.com/file/d/1IzwlpCKCbKnOsIj2eB1UwCglgthgbpVW/view?usp=drive_link",
      download: "https://drive.google.com/uc?export=download&id=1IzwlpCKCbKnOsIj2eB1UwCglgthgbpVW"
    }
  ];

  const phaseTransformations = [
    {
      title: "1. Introduction",
      view: "https://drive.google.com/file/d/1nBsZNm1B_YSbuZ7nZcv-RvLVdutArbQZ/view?usp=drive_link",
      download: "https://drive.google.com/uc?export=download&id=1nBsZNm1B_YSbuZ7nZcv-RvLVdutArbQZ"
    },
    {
      title: "2. Thermodynamics & Kinetics",
      view: "https://drive.google.com/file/d/1r0vnvM2H-E7tDvN8zLNWux_jQ9cFPDVE/view?usp=drive_link",
      download: "https://drive.google.com/uc?export=download&id=1r0vnvM2H-E7tDvN8zLNWux_jQ9cFPDVE"
    },
    {
      title: "3. Diffusion",
      view: "https://drive.google.com/file/d/1156cUJSI4V5QopjxeOlT4wQPyOfTuIbH/view?usp=drive_link",
      download: "https://drive.google.com/uc?export=download&id=1156cUJSI4V5QopjxeOlT4wQPyOfTuIbH"
    },
    {
      title: "4. Interfaces in materials",
      view: "https://drive.google.com/file/d/1G2STtDUwr1EnV4uqGBEsqymlWUZat5ki/view?usp=drive_link",
      download: "https://drive.google.com/uc?export=download&id=1G2STtDUwr1EnV4uqGBEsqymlWUZat5ki"
    },
    {
      title: "5. Solidification",
      view: "https://drive.google.com/file/d/1v5jWyQBcckQSjw_kUuzozT93_7dmogFX/view?usp=drive_link",
      download: "https://drive.google.com/uc?export=download&id=1v5jWyQBcckQSjw_kUuzozT93_7dmogFX"
    },
    {
      title: "6.1 Diffusional transformations",
      view: "https://drive.google.com/file/d/1jl-Tmq5JMysrSv0VEsGOJSE7k185NTow/view?usp=drive_link",
      download: "https://drive.google.com/uc?export=download&id=1jl-Tmq5JMysrSv0VEsGOJSE7k185NTow"
    },
    {
      title: "6.2 Precipitation hardening",
      view: "https://drive.google.com/file/d/1VakB0PI0zWMaxWQYleFW0s3KA3tmx4HG/view?usp=drive_link",
      download: "https://drive.google.com/uc?export=download&id=1VakB0PI0zWMaxWQYleFW0s3KA3tmx4HG"
    },
    {
      title: <span>7. Diffusionless transformations <br /> <span className="text-sm font-normal text-gray-500">(martensitic transformations)</span></span>,
      view: "https://drive.google.com/file/d/1Co0iw2j8GfWeQMS123CnCdHvRMaTZuaL/view?usp=drive_link",
      download: "https://drive.google.com/uc?export=download&id=1Co0iw2j8GfWeQMS123CnCdHvRMaTZuaL"
    },
    {
      title: "8. Role of Alloying Elements – Steels",
      view: "https://drive.google.com/file/d/1ZLQERd5-Y4Bsc12thudj7VvZZgM5rmFK/view?usp=drive_link",
      download: "https://drive.google.com/uc?export=download&id=1ZLQERd5-Y4Bsc12thudj7VvZZgM5rmFK"
    }
  ];

  const electronMicroscopy = [
    {
      title: "1.1 Introduction to \"structures\"",
      view: "https://drive.google.com/file/d/1fagCjr5Nu5Dyyz0qP41H5W1rdj8Kycrh/view?usp=drive_link",
      download: "https://drive.google.com/uc?export=download&id=1fagCjr5Nu5Dyyz0qP41H5W1rdj8Kycrh"
    },
    {
      title: "1.2 Basic concepts of Crystal structures",
      view: "https://drive.google.com/file/d/1hCSCWObqg5RH0c_Y5vwTLS13p2uuTnhB/view?usp=sharing",
      download: "https://drive.google.com/uc?export=download&id=1hCSCWObqg5RH0c_Y5vwTLS13p2uuTnhB"
    },
    {
      title: "2. Optical Microscopy",
      view: "https://drive.google.com/file/d/1_P0GFN3vRpSANVAYVUWXMZ0Jr3Zqjeb7/view?usp=drive_link",
      download: "https://drive.google.com/uc?export=download&id=1_P0GFN3vRpSANVAYVUWXMZ0Jr3Zqjeb7"
    }
  ];

  const labWorkbooks = [
    {
      title: "Physical Metallurgy Laboratory",
      view: "https://drive.google.com/file/d/1iN_o7WnNZQXy82DQTSoochoOBmPxblTM/view",
      download: "https://drive.google.com/uc?export=download&id=1iN_o7WnNZQXy82DQTSoochoOBmPxblTM"
    }
  ];

  // --- Component ---
  const TeachingSection = ({ title, subtitle, items }) => (
    <section className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-10">
      <div className="bg-gray-50/80 px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-bold text-slate-800 border-l-4 border-blue-800 pl-3 leading-tight">{title}</h2>
        {subtitle && <p className="text-sm text-slate-600 font-medium mt-1 pl-4">{subtitle}</p>}
      </div>
      <div className="divide-y divide-gray-100">
        {items.length > 0 ? (
          items.map((item, idx) => (
            <div
              key={idx}
              className={`px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors duration-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-blue-50/60`}
            >
              <span className="text-base font-medium text-slate-700 leading-snug pr-4">
                {item.title}
              </span>
              <div className="flex gap-3 flex-shrink-0 self-start md:self-center">
                <a
                  href={item.view}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 border border-blue-600 text-blue-700 rounded-md text-sm font-semibold hover:bg-blue-50 transition-colors shadow-sm"
                >
                  <Eye size={16} /> View
                </a>
                <a
                  href={item.download}
                  className="flex items-center gap-1.5 px-4 py-2 bg-blue-800 text-white rounded-md text-sm font-semibold hover:bg-blue-900 transition-colors shadow-sm"
                >
                  <Download size={16} /> Download
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="p-8 text-slate-400 italic text-center text-sm">
            No materials listed.
          </div>
        )}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-12 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Lecture Notes</h1>
          <p className="mt-2 text-lg text-slate-600 max-w-2xl">Access course materials, presentations, and reference documents.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        {/* Section 1 */}
        <TeachingSection
          title="Physical Metallurgy"
          subtitle="Materials Science & Engineering"
          items={physicalMetallurgy}
        />

        {/* Section 2 */}
        <TeachingSection
          title="Heat Treatment"
          items={heatTreatment}
        />

        {/* Section 3 */}
        <TeachingSection
          title="Phase Transformations"
          items={phaseTransformations}
        />

        {/* Section 4 */}
        <TeachingSection
          title="Electron Microscopy and Microanalysis"
          items={electronMicroscopy}
        />

        {/* Section 5 */}
        <TeachingSection
          title="Laboratory Workbooks"
          items={labWorkbooks}
        />
      </div>
    </div>
  );
};

export default Teachings;
