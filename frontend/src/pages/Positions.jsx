import React, { useState } from 'react';
import JoinLabModal from '../components/forms/JoinLabModal';
import { ArrowRight } from 'lucide-react';

const Positions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState('Ph.D. Student');

  const handleApply = (position) => {
    setModalPosition(position);
    setIsModalOpen(true);
  };

  const PositionSection = ({ title, themeColor, children, onApply }) => {
    // ... (theme mapping same as before)
    // Simplified Strict Theme
    const t = {
      border: 'border-rise-ocean',
      bg: 'bg-rise-ocean/10',
      headerText: 'text-rise-deep',
      bodyText: 'text-rise-deep',
      accentBg: 'bg-rise-deep/5',
      btn: 'bg-rise-ocean hover:bg-rise-deep',
    };

    return (
      <section className={`bg-rise-frost rounded-xl shadow-md border-t-4 ${t.border} overflow-hidden hover:shadow-lg transition-shadow duration-300`}>
        <div className={`${t.bg} px-8 py-4 border-b border-rise-ocean/20 flex justify-between items-center flex-wrap gap-4`}>
          <h2 className={`text-2xl font-bold ${t.headerText}`}>{title}</h2>
          {onApply && (
            <button
              onClick={onApply}
              className={`${t.btn} text-white px-5 py-2 rounded-lg font-semibold text-sm flex items-center gap-2 transition-transform active:scale-95 shadow-md`}
            >
              Apply Now <ArrowRight size={16} />
            </button>
          )}
        </div>
        <div className="p-8 space-y-4">
          {children}
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-rise-mist font-sans text-rise-deep">
      {/* Header */}
      <div className="bg-rise-deep border-b border-rise-ocean py-12 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white tracking-tight">Positions</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">

        {/* INTRODUCTION */}
        <div className="bg-rise-frost border border-rise-ocean p-8 rounded-2xl shadow-sm text-center">
          <p className="text-xl md:text-2xl font-medium text-rise-deep italic leading-relaxed">
            "We are looking for bright minds with a passion for both science and engineering. If you're eager to learn, solve problems, and turn cutting-edge research into real-world solutions, explore the opportunities below and join our innovative team."
          </p>
        </div>

        {/* SECTION 1: Post-Doctoral Positions */}
        <PositionSection
          title="Post-Doctoral Positions"
          onApply={() => handleApply("Post-Doctoral Fellow")}
        >
          <p className="text-lg leading-relaxed mb-4">
            Our lab welcomes highly motivated and enthusiastic postdoctoral students interested in working in Physical and Mechanical Metallurgy.
          </p>
          <p className="font-medium text-rise-ocean mb-2">
            We encourage applications preferably through national funding schemes.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6 marker:text-rise-ocean">
            <li>SERB National Postdoctoral Fellowship (NPDF)</li>
            <li>IIT Postdoctoral Fellowships</li>
            <li>CSIR Postdoctoral Fellowship</li>
            <li>UGC Postdoctoral Fellowship for Women</li>
          </ul>
          <div className="bg-rise-deep/5 p-4 rounded-lg border border-rise-ocean/20">
            <p className="text-rise-deep font-medium">
              Interested students may write to <a href="mailto:lava@iitrpr.ac.in" className="text-rise-ocean underline hover:text-rise-deep">lava@iitrpr.ac.in</a> with a detailed Curriculum Vitae, a research proposal (at least two pages), and a motivation letter.
            </p>
          </div>
        </PositionSection>

        {/* SECTION 2: Ph.D. Students */}
        <PositionSection
          title="Ph.D. Students"
          onApply={() => handleApply("Ph.D. Student")}
        >
          <p className="text-lg leading-relaxed mb-4">
            Our lab has openings for motivated and enthusiastic Ph.D. students interested in working in Physical Metallurgy / Mechanical Metallurgy.
          </p>
          <div className="space-y-4">
            <div className="bg-rise-deep/5 p-4 rounded-lg border border-rise-ocean/20">
              <p className="text-rise-deep font-medium">
                Interested students may write to <a href="mailto:lava@iitrpr.ac.in" className="text-rise-ocean underline hover:text-rise-deep">lava@iitrpr.ac.in</a> with a detailed Curriculum Vitae and motivation letter.
              </p>
            </div>
            <p className="text-rise-deep/80">
              If you would like more information about the application process, you can visit the IIT Ropar Ph.D. program (<a href="http://www.iitrpr.ac.in/admissions" target="_blank" rel="noopener noreferrer" className="text-rise-ocean underline hover:text-rise-deep">http://www.iitrpr.ac.in/admissions</a>).
            </p>
          </div>
        </PositionSection>

        {/* SECTION 3: M.Tech. Thesis */}
        <PositionSection
          title="M.Tech. Thesis"
          onApply={() => handleApply("M.Tech. Thesis")}
        >
          <p className="text-lg leading-relaxed mb-6 font-medium text-rise-ocean">
            The RISE lab welcomes highly motivated M.Tech. students to engage in cutting-edge research.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-rise-deep/5 p-5 rounded-lg border border-rise-ocean/20">
              <h3 className="font-bold text-rise-deep mb-2">IIT Ropar Students:</h3>
              <p className="text-rise-deep/80 text-sm leading-relaxed">
                Conduct your M.Tech. thesis research within the RISE lab. Collaborate with our researchers and contribute to impactful projects.
              </p>
            </div>
            <div className="bg-rise-deep/5 p-5 rounded-lg border border-rise-ocean/20">
              <h3 className="font-bold text-rise-deep mb-2">Students from Other Institutions:</h3>
              <p className="text-rise-deep/80 text-sm leading-relaxed">
                Gain valuable research experience and enhance your M.Tech. studies with a research internship (minimum 6-month commitment).
              </p>
            </div>
          </div>

          <div className="bg-rise-deep/5 p-4 rounded-lg border border-rise-ocean/20">
            <p className="text-rise-deep font-medium">
              <span className="font-bold">Application: </span>
              Email <a href="mailto:lava@iitrpr.ac.in" className="text-rise-ocean underline hover:text-rise-deep">lava@iitrpr.ac.in</a> to share your research interests and discuss available projects.
            </p>
          </div>
        </PositionSection>

        {/* SECTION 4: B.Tech. Thesis */}
        <PositionSection
          title="B.Tech. Thesis"
          onApply={() => handleApply("B.Tech. Thesis")}
        >
          <p className="text-lg leading-relaxed mb-6 font-medium text-rise-ocean">
            The RISE lab invites motivated B.Tech. students to contribute to ongoing research projects.
          </p>

          <div className="space-y-4 mb-6">
            <div className="border-l-4 border-rise-ocean pl-4 py-1">
              <h3 className="font-bold text-rise-deep">IIT Ropar Students:</h3>
              <p className="text-rise-deep/80">
                Pursue your B.Tech. thesis in the RISE lab (minimum 1-year commitment). Contact the lab supervisor to discuss potential projects.
              </p>
            </div>
            <div className="border-l-4 border-rise-ocean pl-4 py-1">
              <h3 className="font-bold text-rise-deep">Students from Other Institutions (National/International):</h3>
              <p className="text-rise-deep/80">
                Gain research experience with a minimum 6-month commitment.
              </p>
            </div>
          </div>

          <div className="bg-rise-deep/5 p-4 rounded-lg border border-rise-ocean/20">
            <p className="text-rise-deep font-medium">
              <span className="font-bold">Application: </span>
              Email <a href="mailto:lava@iitrpr.ac.in" className="text-rise-ocean underline hover:text-rise-deep">lava@iitrpr.ac.in</a> to share your interest and discuss available projects.
            </p>
          </div>
        </PositionSection>

        {/* SECTION 5: Summer Trainee */}
        <PositionSection
          title="Summer Trainee"
          onApply={() => handleApply("Summer Trainee")}
        >
          <div className="flex items-center gap-3 mb-6 bg-rise-deep/5 w-fit px-4 py-2 rounded-full border border-rise-ocean/20">
            <span className="font-bold text-rise-ocean">Duration:</span>
            <span className="text-rise-deep font-medium">2 months (minimum)</span>
          </div>

          <p className="leading-relaxed text-rise-deep mb-6">
            Interested students may write to <a href="mailto:lava@iitrpr.ac.in" className="text-rise-ocean font-semibold underline hover:text-rise-deep">lava@iitrpr.ac.in</a> with a detailed Curriculum Vitae and motivation letter, along with the duly filled-out application form from the IIT Ropar website.
          </p>

          <div className="border-t border-rise-ocean/20 pt-4">
            <p className="text-rise-deep/80">
              For more details, visit: <br />
              <a href="http://www.iitrpr.ac.in/summer-internship" target="_blank" rel="noopener noreferrer" className="text-rise-ocean underline hover:text-rise-deep break-all">
                http://www.iitrpr.ac.in/summer-internship
              </a>
            </p>
          </div>
        </PositionSection>

      </div>

      <JoinLabModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultPosition={modalPosition}
      />
    </div>
  );
};

export default Positions;
