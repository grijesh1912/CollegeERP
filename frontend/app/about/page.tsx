// export default function About() {
//   return (
//     <div className="container mx-auto py-16">
//       <h1 className="text-4xl font-bold">
//         About Our College
//       </h1>

//       <p className="mt-6">
//         Smt. S R Patel Engineering College is committed to
//         providing quality education and research.
//       </p>
//     </div>
//   );
// }






"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function AboutPage() {
  const searchParams = useSearchParams();

const [activeTab, setActiveTab] = useState("trust");

useEffect(() => {
  const tab = searchParams.get("tab");

  if (tab) {
    setActiveTab(tab);
  }
}, [searchParams]);

  const content = {
    trust: {
      title: "About Trust",
      text: `
      Smt. Sushilaben Rameshbhai Patel Charitable Trust (SRPCT) was established in the year 2008 for the purpose of carrying out various social services and establishing educational institutes to uplift the knowledge and skills of the students to build their career. The trust organizes various social activities to give back to the society.
With this noble aim of helping the poor and needy, the trust initiated new step ahead as "Rameshdada Nu Bhantar" for promoting and uplifting the current primary education for the developing regions.

Trust successfully handles the activity named "JIVIBA NU RASODU". It is named in the sweet memory of grandmother of honourable Chairman Shri Rameshbhai Patel. It provides free of cost tiffin services on daily basis to the old, physically handicapped people and needy children around Maktupur village. More than 12,850 tiffins are served every year.

Moreover, in 2015 during flood 10,000 students of more than 84 schools of B. K. district were generously given the set of 5 Note books that were badly affected and compelled to drop out from schools due to the lack of primary facility of education.

During flood in 2017 B.K. and Patan district’s 107 schools; which are badly affected needy school students kindly given the set of Notebooks and Study kits (Total 53,500 Notebooks and 14663 Study kit distributed among the students) and impelled to drop out from schools due to the lack of primary facility of education.

During the cold winter time, the trust donates more than 1000 nutritious dry fruit packets of 500 gram to the students of Anganvadi, Orphan Houses, Old Age Homes and needy people around the North Gujarat region.

Trust known for its generosity because of that, it has adopted five schools at initial level for the enhancement and awareness of modern education in the remote village area students. The trust should also organize cultural program like MEGHDHANUS to give platform to inheretance students.

To conserve environment and redevelop lake in Maktupur village, it has spent Rs. 5 to 6 Crore on the theme of Sabarmati River Front and named “Hirabha Dutt Sarovar” (on the name of his respected father).

The trust provides the Education Kit to the children of slum, village area and trible area to initiate their education and increase their interest in education. The Education kit contains the all study material (Note book, Sketch Book, Color box, Compass etc). The kit is freely available for all the children those who wants to start their primary education.

Not only Iivelihood needs are given prior importance but also imparting quality education and providing better facility to the needy students of nearby region is our prime concern. We have been helping the village students by teaching them computer and basic knowledge of technology at our trust managed Institute named Smt. S. R. Patel Engineering College. We arrange fruitful classes for the 6th to 8th standard students of nearby schools of different villages. More than 320 students were benefitted by the noble mission of computer Literacy program at our institute.
      `,
    },

    college: {
      title: "About College",
      text: `
      Smt. S. R. Patel Engineering College is committed to
      excellence in technical education and innovation.
      `,
    },

    chairman: {
      title: "Chairman ",
      text: `
      Shri Rameshbhai H. Patel is a reputed Civil Engineer with 35 years of distinguished professional career in the field of construction engineering and is a dedicated social worker.

Among many social activities that he has been doing, the establishment of Smt. S. R. Patel Charitable Trust, Mehsana is the monumental one. Under the aegis of Smt. Sushilaben Rameshbhai Patel Charitable Trust, a degree engineering college Smt. S. R. Patel Engineering College was established in the year 2009. The institute spreads over about 12 acres lush green campus at village Dabhi, which is in complete harmony with nature.

He has contributed by giving donation in construction of building and other infrastructural requirements of a primary school in his village Maktupur, near Unjha. He used to organize the Group Marriage (samooh-lagna) for his community in North Gujarat. He is always positive and conscious about the developments and growth of the institution. His approach of working instills confidence in our young and vibrant team to take up the challenge with great enthusiasm.

He firmly believes that education enables a human being to apply his conscience to plan, execute, grow and innovate.
      `,
    },

    principal: {
      title: "Principal",
      text: `
      Dr. Ami H. Shah has graduated as Bachelor of Engineering in Civil Engg. from DDIT, Nadiad in year 1996. She has completed her post graduation with Master of Technology in Remote Sensing from IIT Bombay in the year 2004. She was awarded with the degree of Doctorate of Philosophy in Transportation Engineering from IIT Roorkee in 2011. She got first rank in the discipline and institute with 9.84 CPI in M.Tech at IIT-Bombay.

She has professional experience including 24 years of teaching and research and 2 years of working with industry. She has worked for 8 years with SVIT, Vasad. She has published more than 15 national/ international journals and national/ international technical papers in conference proceedings. She has been heading the insitution since February 2011.

She was awarded with best teacher award. She has visited different countries such as China, Singapore, USA and Hong Kong.
      `,
    },

    governance: {
      title: "Governance",
      text: ` `,
    },
  };

  return (
    <>
      {/* Hero Section */}

      <div
        className="h-[200px] bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/campus.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold text-center px-4">
            {content[activeTab as keyof typeof content].title}
          </h1>
        </div>
      </div>

      {/* Content Section */}

      <div className="w-full py-12 px-0">

        <div className="w-full">

          {/* Left Menu */}

          {/* <div>

            <div className="bg-blue-950 text-white rounded overflow-hidden">

              <button
                onClick={() => setActiveTab("trust")}
                className="w-full text-left px-5 py-4 border-b hover:bg-blue-800"
              >
                ABOUT TRUST
              </button>

              <button
                onClick={() => setActiveTab("college")}
                className="w-full text-left px-5 py-4 border-b hover:bg-blue-800"
              >
                ABOUT COLLEGE
              </button>

              <button
                onClick={() => setActiveTab("chairman")}
                className="w-full text-left px-5 py-4 border-b hover:bg-blue-800"
              >
                CHAIRMAN
              </button>

              <button
                onClick={() => setActiveTab("principal")}
                className="w-full text-left px-5 py-4 border-b hover:bg-blue-800"
              >
                PRINCIPAL
              </button>

              <button
                onClick={() => setActiveTab("governance")}
                className="w-full text-left px-5 py-4 hover:bg-blue-800"
              >
                GOVERNANCE
              </button>

            </div>

          </div> */}

          {/* Right Content */}

          {/* <div className="md:col-span-3">

            <h2 className="text-4xl font-bold mb-6">
              {content[activeTab as keyof typeof content].title}
            </h2>

            <p className="text-lg leading-8 text-gray-700">
              {content[activeTab as keyof typeof content].text}
            </p>

          </div> */}

          
          <div className="bg-white rounded-xl shadow-lg p-8">

  {activeTab === "college" ? (

  <div className="max-w-6xl mx-auto">

    <h2 className="text-4xl font-bold text-center text-blue-950 mb-12">
      We Have A Friendly & Familiar Campus For You
    </h2>

    <div className="text-gray-700 text-justify leading-8 space-y-6">

      <p>
        The institute Smt. S. R. Patel Engineering College was established
        in the year 2009 at Dabhi village. The lush green campus is spread
        over 12 acres area. The beautiful landscaping gardens and peaceful
        environment provide a true feeling of closeness to nature.
      </p>

      <p>
        The institute offers undergraduate and postgraduate programs in
        Mechanical Engineering, Computer Engineering, Electronics &
        Communication Engineering and Civil Engineering. The institute is
        approved by AICTE and affiliated to GTU.
      </p>

      <p>
        The institute has adequate infrastructure viz. spacious classrooms,
        laboratories and library with more than 8000 books and journals.
      </p>

    </div>

    <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">

      <div className="bg-blue-100 p-8 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="font-semibold">
          Electronics & Communication
        </h3>
        <p>30 Seats</p>
      </div>

      <div className="bg-blue-100 p-8 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="font-semibold">
          Computer Engineering
        </h3>
        <p>30 Seats</p>
      </div>

      <div className="bg-blue-100 p-8 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="font-semibold">
          Civil Engineering
        </h3>
        <p>30 Seats</p>
      </div>

      <div className="bg-blue-100 p-8 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="font-semibold">
          Mechanical Engineering
        </h3>
        <p>30 Seats</p>
      </div>

      {/* <div className="bg-gray-100 p-6 rounded-lg shadow">
        <h3 className="font-semibold">
          ME Thermal Engineering
        </h3>
        <p>24 Seats</p>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow">
        <h3 className="font-semibold">
          ME Computer Engineering
        </h3>
        <p>24 Seats</p>
      </div> */}

    </div>

  </div>

// ) : activeTab !== "governance" ? (

//   <>
//     <h2 className="text-3xl font-bold text-blue-950 border-b pb-4 mb-8">
//       {content[activeTab as keyof typeof content].title}
//     </h2>

//     <div className="text-[16px] leading-9 text-justify text-gray-700 whitespace-pre-line">
//       {content[activeTab as keyof typeof content].text}
//     </div>
//   </>

//   ) : (
) : activeTab !== "governance" ? (

  <>
    {activeTab === "chairman" ? (

      /* ================= CHAIRMAN ================= */
      <div className="flex flex-col md:flex-row gap-10 items-start">

        {/* LEFT - TEXT */}
        <div className="w-full md:w-4/5">

          <h2 className="text-3xl font-bold text-blue-950 border-b pb-4 mb-8">
            {content[activeTab as keyof typeof content].title}
          </h2>

          <div className="text-[16px] leading-7 text-justify text-gray-700 whitespace-pre-line">
            {content[activeTab as keyof typeof content].text}
          </div>

        </div>

        {/* RIGHT - PHOTO */}
        <div className="w-full md:w-1/5 flex flex-col items-center">

          <Image
            src="/images/chairman.jpg"
            alt="Shri Rameshbhai Patel"
            width={180}
            height={220}
            className="w-[150px] h-[180px] object-cover"
          />

          <p className="text-gray-700 text-center mt-4">
            Shri Rameshbhai Patel
          </p>

        </div>

      </div>

    ) : activeTab === "principal" ? (

      /* ================= PRINCIPAL ================= */
      <div className="flex flex-col md:flex-row gap-10 items-start">

        {/* LEFT - TEXT */}
        <div className="w-full md:w-4/5">

          <h2 className="text-3xl font-bold text-blue-950 border-b pb-4 mb-8">
            {content[activeTab as keyof typeof content].title}
          </h2>

          <div className="text-[16px] leading-7 text-justify text-gray-700 whitespace-pre-line">
            {content[activeTab as keyof typeof content].text}
          </div>

        </div>

        {/* RIGHT - PHOTO */}
        <div className="w-full md:w-1/5 flex flex-col items-center">

          <Image
            src="/images/principal.jpg"
            alt="Dr. Ami H. Shah"
            width={180}
            height={220}
            className="w-[150px] h-[180px] object-cover"
          />

          <p className="text-gray-700 text-center mt-4">
            Dr. Ami H. Shah
          </p>

        </div>

      </div>

    ) : (

      /* ================= OTHER TABS ================= */
      <>
        <h2 className="text-3xl font-bold text-blue-950 border-b pb-4 mb-8">
          {content[activeTab as keyof typeof content].title}
        </h2>

        <div className="text-[16px] leading-9 text-justify text-gray-700 whitespace-pre-line">
          {content[activeTab as keyof typeof content].text}
        </div>
      </>

    )}

  </>

  ) : (
    <>
      <h2 className="text-5xl font-bold text-center text-blue-950 mb-10">
        Board of Governance
      </h2>

      <div className="text-center mb-12">
        <h3 className="text-3xl font-semibold">
          Shri Rameshbhai H. Patel
        </h3>
        <p className="text-xl mt-2">
          Chairman
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 text-center mb-12">

        <div>
          <h3 className="text-2xl font-medium">
            Shri Chiragkumar R. Patel
          </h3>
          <p>Vice Chairman</p>
        </div>

        <div>
          <h3 className="text-2xl font-medium">
            Shri Kalpeshkumar R. Patel
          </h3>
          <p>Executive Director</p>
        </div>

      </div>

      <h3 className="text-3xl font-bold text-center mb-10">
        Member
      </h3>

      <div className="grid md:grid-cols-2 gap-y-10 gap-x-20 text-center">

        <div>
          <h4 className="text-xl font-medium">Prof. M. N. Patel</h4>
          <p>V.C., Gujarat University</p>
        </div>

        <div>
          <h4 className="text-xl font-medium">Shri Nayanbhai Parikh</h4>
          <p>Chairman, Multimedia Consul Pvt. Ltd.</p>
        </div>

        <div>
          <h4 className="text-xl font-medium">Dr. K. C. Thakar</h4>
          <p>Chairman, KCT Consultancy Services</p>
        </div>

        <div>
          <h4 className="text-xl font-medium">Shri M. M. Salvi</h4>
          <p>Chartered Accountant</p>
        </div>

        <div>
          <h4 className="text-xl font-medium">Shri B. J. Patel</h4>
          <p>Chairman, Premier Engineering Pvt. Ltd.</p>
        </div>

        <div>
          <h4 className="text-xl font-medium">Prof. H. G. Rajput</h4>
          <p>Academic Adviser, SRPEC</p>
        </div>

        <div>
          <h4 className="text-xl font-medium">Dr. Ami H. Shah</h4>
          <p>Principal, Smt. S. R. Patel Engineering College</p>
        </div>

        <div>
          <h4 className="text-xl font-medium">Shri Janak Khandwala</h4>
          <p>President, Asso. of SFI Inst.</p>
        </div>

      </div>
    </>
  )}

</div>
          
          
          {/* <div className="md:col-span-3">

          <div className="bg-white rounded-xl shadow-lg p-8">

            <h2 className="text-3xl font-bold text-blue-950 border-b pb-4 mb-8">
              {content[activeTab as keyof typeof content].title}
            </h2>

            <div className="text-[16px] leading-9 text-justify text-gray-700 whitespace-pre-line">
              {content[activeTab as keyof typeof content].text}
            </div>

          </div>

        </div> */}

        </div>

      </div>
    </>
  );
}