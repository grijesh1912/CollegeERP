"use client";

import { useSearchParams } from "next/navigation";

export default function CollegeInfoPage() {
  const searchParams = useSearchParams();

  const tab = searchParams.get("tab") || "surjan";

  const content: any = {
    surjan: {
      title: "SURJAN - THE INSTITUTE SOUVENIR",
      text: `
Surjan is the annual institute souvenir of Smt. S. R. Patel Engineering College. It showcases the achievements, academic activities, technical events, cultural programs, student contributions, and milestones achieved during the academic year.

The souvenir provides a platform for students and faculty members to express their creativity through articles, technical papers, poetry, photography, and innovative ideas.
      `,
    },

    prabhas: {
      title: "PRABHAS - THE MONTHLY NEWS LETTER",
      text: `
Prabhas is the monthly newsletter of the institute. It highlights important academic activities, workshops, seminars, industrial visits, placements, achievements, sports activities, and various events conducted in the college.

The newsletter keeps students, parents, alumni, and stakeholders updated about recent developments in the institute.
      `,
    },

    calendar: {
      title: "Academic Calendar",
      text: `
The Academic Calendar contains detailed information regarding semester commencement, internal examinations, practical examinations, holidays, university examinations, academic activities, workshops, seminars, and important institutional events.

Students are advised to follow the academic calendar regularly.
      `,
    },

    gallery: {
      title: "Photo Gallery",
      text: `
The Photo Gallery contains photographs of various academic, cultural, technical, sports, placement, NSS, and institutional events organized by the college throughout the year.

It reflects the vibrant campus life and achievements of students and faculty members.
      `,
    },

    alumni: {
      title: "Alumni Review",
      text: `
Our alumni are successfully working in reputed organizations across India and abroad. Alumni reviews reflect the quality education, practical exposure, placement support, and value-based learning provided by the institute.

The institute maintains strong relationships with alumni through alumni meets, mentoring activities, and professional networking.
      `,
    },

    student: {
      title: "Student Review",
      text: `
Students appreciate the excellent academic environment, experienced faculty members, modern laboratories, library facilities, placement support, and various co-curricular activities provided by the institute.

The college focuses on holistic development and industry readiness.
      `,
    },

    parents: {
      title: "Parents Review",
      text: `
Parents have expressed satisfaction regarding academic quality, discipline, transparency, safety, and overall development of students at the institute.

Regular communication between parents and the institution helps ensure student success.
      `,
    },

    industry: {
      title: "Industry Review",
      text: `
Industry experts appreciate the institute's efforts in providing skill-based education, industry interaction programs, internships, training sessions, and placement activities.

The curriculum and training initiatives help students become industry-ready professionals.
      `,
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
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4">
            {content[tab].title}
          </h1>
        </div>
      </div>

      {/* Content Section */}

      <div className="w-full py-10 px-4">

        <div className="bg-white rounded-xl shadow-lg p-8">

          <h2 className="text-3xl font-bold text-blue-950 border-b pb-4 mb-8">
            {content[tab].title}
          </h2>

          <div className="text-[16px] leading-9 text-justify text-gray-700 whitespace-pre-line">
            {content[tab].text}
          </div>

        </div>

      </div>
    </>
  );
}