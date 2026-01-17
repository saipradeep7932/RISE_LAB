import React from 'react';

const Positions = () => {

  const PositionSection = ({ title, themeColor, children }) => {
    // Theme mapping
    const themes = {
      indigo: {
        border: 'border-indigo-600',
        bg: 'bg-indigo-50',
        headerText: 'text-indigo-900',
        bodyText: 'text-slate-700',
        accentBg: 'bg-indigo-100',
      },
      teal: {
        border: 'border-teal-600',
        bg: 'bg-teal-50',
        headerText: 'text-teal-900',
        bodyText: 'text-slate-700',
        accentBg: 'bg-teal-100',
      },
      emerald: {
        border: 'border-emerald-600',
        bg: 'bg-emerald-50',
        headerText: 'text-emerald-900',
        bodyText: 'text-slate-700',
        accentBg: 'bg-emerald-100',
      },
      amber: {
        border: 'border-amber-500',
        bg: 'bg-amber-50',
        headerText: 'text-amber-900',
        bodyText: 'text-slate-700',
        accentBg: 'bg-amber-100',
      },
      cyan: {
        border: 'border-cyan-600',
        bg: 'bg-cyan-50',
        headerText: 'text-cyan-900',
        bodyText: 'text-slate-700',
        accentBg: 'bg-cyan-100',
      }
    };

    const t = themes[themeColor] || themes.indigo;

    return (
      <section className={`bg-white rounded-xl shadow-md border-t-4 ${t.border} overflow-hidden hover:shadow-lg transition-shadow duration-300`}>
        <div className={`${t.bg} px-8 py-4 border-b border-gray-100`}>
          <h2 className={`text-2xl font-bold ${t.headerText}`}>{title}</h2>
        </div>
        <div className="p-8 space-y-4">
          {children}
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-12 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Positions</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">

        {/* INTRODUCTION */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 p-8 rounded-2xl shadow-sm text-center">
          <p className="text-xl md:text-2xl font-medium text-slate-800 italic leading-relaxed">
            "We are looking for bright minds with a passion for both science and engineering. If you're eager to learn, solve problems, and turn cutting-edge research into real-world solutions, explore the opportunities below and join our innovative team."
          </p>
        </div>

        {/* SECTION 1: Post-Doctoral Positions */}
        <PositionSection title="Post-Doctoral Positions" themeColor="indigo">
          <p className="text-lg leading-relaxed mb-4">
            Our lab welcomes highly motivated and enthusiastic postdoctoral students interested in working in Physical and Mechanical Metallurgy.
          </p>
          <p className="font-medium text-indigo-900 mb-2">
            We encourage applications preferably through national funding schemes.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6 marker:text-indigo-500">
            <li>SERB National Postdoctoral Fellowship (NPDF)</li>
            <li>IIT Postdoctoral Fellowships</li>
            <li>CSIR Postdoctoral Fellowship</li>
            <li>UGC Postdoctoral Fellowship for Women</li>
          </ul>
          <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
            <p className="text-slate-800 font-medium">
              Interested students may write to <a href="mailto:lava@iitrpr.ac.in" className="text-blue-600 underline hover:text-blue-800">lava@iitrpr.ac.in</a> with a detailed Curriculum Vitae, a research proposal (at least two pages), and a motivation letter.
            </p>
          </div>
        </PositionSection>

        {/* SECTION 2: Ph.D. Students */}
        <PositionSection title="Ph.D. Students" themeColor="teal">
          <p className="text-lg leading-relaxed mb-4">
            Our lab has openings for motivated and enthusiastic Ph.D. students interested in working in Physical Metallurgy / Mechanical Metallurgy.
          </p>
          <div className="space-y-4">
            <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
              <p className="text-slate-800 font-medium">
                Interested students may write to <a href="mailto:lava@iitrpr.ac.in" className="text-teal-700 underline hover:text-teal-900">lava@iitrpr.ac.in</a> with a detailed Curriculum Vitae and motivation letter.
              </p>
            </div>
            <p className="text-slate-600">
              If you would like more information about the application process, you can visit the IIT Ropar Ph.D. program (<a href="http://www.iitrpr.ac.in/admissions" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline hover:text-teal-800">http://www.iitrpr.ac.in/admissions</a>).
            </p>
          </div>
        </PositionSection>

        {/* SECTION 3: M.Tech. Thesis */}
        <PositionSection title="M.Tech. Thesis" themeColor="emerald">
          <p className="text-lg leading-relaxed mb-6 font-medium text-emerald-900">
            The RISE lab welcomes highly motivated M.Tech. students to engage in cutting-edge research.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-emerald-50/50 p-5 rounded-lg border border-emerald-100">
              <h3 className="font-bold text-emerald-800 mb-2">IIT Ropar Students:</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Conduct your M.Tech. thesis research within the RISE lab. Collaborate with our researchers and contribute to impactful projects.
              </p>
            </div>
            <div className="bg-emerald-50/50 p-5 rounded-lg border border-emerald-100">
              <h3 className="font-bold text-emerald-800 mb-2">Students from Other Institutions:</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Gain valuable research experience and enhance your M.Tech. studies with a research internship (minimum 6-month commitment).
              </p>
            </div>
          </div>

          <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
            <p className="text-slate-800 font-medium">
              <span className="font-bold">Application: </span>
              Email <a href="mailto:lava@iitrpr.ac.in" className="text-emerald-700 underline hover:text-emerald-900">lava@iitrpr.ac.in</a> to share your research interests and discuss available projects.
            </p>
          </div>
        </PositionSection>

        {/* SECTION 4: B.Tech. Thesis */}
        <PositionSection title="B.Tech. Thesis" themeColor="amber">
          <p className="text-lg leading-relaxed mb-6 font-medium text-amber-900">
            The RISE lab invites motivated B.Tech. students to contribute to ongoing research projects.
          </p>

          <div className="space-y-4 mb-6">
            <div className="border-l-4 border-amber-400 pl-4 py-1">
              <h3 className="font-bold text-slate-800">IIT Ropar Students:</h3>
              <p className="text-slate-700">
                Pursue your B.Tech. thesis in the RISE lab (minimum 1-year commitment). Contact the lab supervisor to discuss potential projects.
              </p>
            </div>
            <div className="border-l-4 border-amber-400 pl-4 py-1">
              <h3 className="font-bold text-slate-800">Students from Other Institutions (National/International):</h3>
              <p className="text-slate-700">
                Gain research experience with a minimum 6-month commitment.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
            <p className="text-slate-800 font-medium">
              <span className="font-bold">Application: </span>
              Email <a href="mailto:lava@iitrpr.ac.in" className="text-amber-700 underline hover:text-amber-900">lava@iitrpr.ac.in</a> to share your interest and discuss available projects.
            </p>
          </div>
        </PositionSection>

        {/* SECTION 5: Summer Trainee */}
        <PositionSection title="Summer Trainee" themeColor="cyan">
          <div className="flex items-center gap-3 mb-6 bg-cyan-50/50 w-fit px-4 py-2 rounded-full border border-cyan-100">
            <span className="font-bold text-cyan-800">Duration:</span>
            <span className="text-slate-700 font-medium">2 months (minimum)</span>
          </div>

          <p className="leading-relaxed text-slate-700 mb-6">
            Interested students may write to <a href="mailto:lava@iitrpr.ac.in" className="text-cyan-700 font-semibold underline hover:text-cyan-900">lava@iitrpr.ac.in</a> with a detailed Curriculum Vitae and motivation letter, along with the duly filled-out application form from the IIT Ropar website.
          </p>

          <div className="border-t border-cyan-100 pt-4">
            <p className="text-slate-600">
              For more details, visit: <br />
              <a href="http://www.iitrpr.ac.in/summer-internship" target="_blank" rel="noopener noreferrer" className="text-cyan-600 underline hover:text-cyan-800 break-all">
                http://www.iitrpr.ac.in/summer-internship
              </a>
            </p>
          </div>
        </PositionSection>

      </div>
    </div>
  );
};

export default Positions;
