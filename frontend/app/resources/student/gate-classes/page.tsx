export default function GateClasses() {
  return (
    <main className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-6 max-w-5xl">

        <h1 className="text-4xl font-bold text-blue-900 mb-10">
          GATE Classes
        </h1>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">

          {/* GATE Classes */}
          <section>
            <h2 className="text-2xl font-bold text-red-800 mb-4">
              GATE Classes
            </h2>

            <p className="text-gray-700 text-base leading-7 text-justify">
              GATE is one of the most difficult competitive exams of the
              nation in technological field so to make it easier for the
              students, provide them ample knowledge and required guidance
              institute has made arrangements for special preparatory classes
              for GATE. The classes are conducted by the subject experts
              specially appointed for these classes and the whole course is
              made free of cost to the interested students by college
              management.
            </p>
          </section>


          {/* Information about GATE */}
          <section>
            <h2 className="text-2xl font-bold text-red-800 mb-4">
              Information about the Graduate Aptitude Test in Engineering
              (GATE)
            </h2>

            <p className="text-gray-700 text-base leading-7 text-justify">
              The Graduate Aptitude Test in Engineering (GATE) is an All-India
              examination administered and conducted in eight zones across the
              country by the GATE Committee comprising of Faculty members from
              IISc, Bangalore and other seven IIT’s on behalf of the National
              Coordinating Board, Department of Education, Ministry of Human
              Resources Development. The GATE score/rank is used for
              admissions to Post Graduate Programmes (ME, M.Tech, MS, Direct
              Ph.D.) in institutes like IITs and IISc etc with financial
              assistance offered by MHRD. PSUs too use the GATE scores for
              recruiting candidates for various prestigious jobs with
              attractive remuneration.
            </p>
          </section>


          {/* Why GATE */}
          <section>
            <h2 className="text-2xl font-bold text-red-800 mb-4">
              Why GATE?
            </h2>

            <p className="text-gray-700 text-base leading-7 text-justify">
              GATE is considered to be the standard examination conducted not
              only for post graduation admissions but also to open the gates
              for lucrative opportunities in several public sector enterprises
              and research organizations. Based on the score achieved in GATE,
              admissions are offered in IITs, IISc, and NITs, and abundant
              opportunities for campus placements with salary packages ranging
              from Rs. 6 lakh to 30 lakh. Candidates on qualifying GATE, get a
              financial aid of 12400/- pm in the form of UGC scholarship.
            </p>

            <p className="text-gray-700 text-base leading-7 text-justify mt-4">
              Students interested in management can swing in the management
              line by pursuing a PG Diploma of 2 years in Industrial
              Engineering. Some institutes in India also offer admissions in
              the post Graduate programmes on the basis of GATE score.
            </p>
          </section>


          {/* Importance of GATE */}
          <section>
            <h2 className="text-2xl font-bold text-red-800 mb-4">
              GATE exam is important because of below mentioned factors:
            </h2>

            <ul className="list-disc ml-6 space-y-3 text-gray-700 leading-7">
              <li>
                M.Tech - Campus placements in National and International
                private or public companies
              </li>

              <li>
                Several reputed PSUs and research organizations recruits on
                basis of GATE Score. i.e. IOCL, NTPC, BHEL, PGCIL, BARC etc.
              </li>

              <li>
                Teaching: Professor, Asst. Professor at IITs, NITs, reputed
                educational institutes etc.
              </li>

              <li>
                Junior Research Fellow: ISRO, DRDO, BARC, CSIR, IITs etc.
              </li>

              <li>
                Senior Research Fellow: ISRO, DRDO, BARC, CSIR, IITs etc.
              </li>

              <li>
                Junior Research Associates/ Senior Project Associates
              </li>

              <li>
                Scientists “C” grade jobs
              </li>

              <li>
                Career in Research & Development
              </li>

              <li>
                Technical value addition
              </li>

              <li>
                Expertise in subject/domain specialization
              </li>
            </ul>
          </section>


          {/* GATE Documents */}
          <section>
            <h2 className="text-2xl font-bold text-red-800 mb-4">
              GATE Resources
            </h2>

            <div className="flex flex-col gap-3">

              <a
                href="http://srpec.org.in/GATE%20BROCHURE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 font-semibold hover:text-red-700 hover:underline"
              >
                GATE Brochure →
              </a>

              <a
                href="http://srpec.org.in/more_info_about_gate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 font-semibold hover:text-red-700 hover:underline"
              >
                More Information about GATE →
              </a>

              <a
                href="http://srpec.org.in/Subjectwise%20Analysis%20of%20Previous%20GATE%20Papers.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 font-semibold hover:text-red-700 hover:underline"
              >
                Subjectwise Analysis of Previous GATE Papers →
              </a>

            </div>
          </section>

        </div>

      </div>
    </main>
  );
}