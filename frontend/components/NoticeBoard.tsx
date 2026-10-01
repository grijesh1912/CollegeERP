// export default function NoticeBoard() {
//   const notices = [
//     "Admission Open 2026-27",
//     "GTU Exam Form Started",
//     "Hackathon Registration Open",
//     "Semester Result Declared",
//   ];

//   return (
//     <section className="py-16">
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-bold mb-6">
//           Latest Notices
//         </h2>

//         <div className="bg-white shadow-lg rounded-xl p-6">
//           {notices.map((notice, index) => (
//             <p
//               key={index}
//               className="border-b py-3"
//             >
//               {notice}
//             </p>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }











// "use client";

// import { useEffect, useState } from "react";
// import { getNotices } from "@/services/noticeService";

// export default function NoticeBoard() {
//   const [notices, setNotices] = useState([]);

//   useEffect(() => {
//     loadNotices();
//   }, []);

//   const loadNotices = async () => {
//     const data = await getNotices();
//     setNotices(data);
//   };

//   return (
//     <section className="py-16">
//       <div className="container mx-auto">

//         <h2 className="text-3xl font-bold mb-8">
//           Latest Notices
//         </h2>

//         <div className="bg-white shadow-lg rounded-xl p-6">

//           {notices.map((notice: any) => (
//             <div
//               key={notice.id}
//               className="border-b py-3"
//             >
//               <h3 className="font-semibold">
//                 {notice.title}
//               </h3>

//               <p>{notice.content}</p>
//             </div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }














// "use client";

// import { useEffect, useState } from "react";
// import { getNotices } from "@/services/noticeService";

// export default function NoticeBoard() {
//   const [notices, setNotices] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     loadNotices();
//   }, []);

//   const loadNotices = async () => {
//     try {
//       const data = await getNotices();

//       console.log("Notices:", data);

//       if (Array.isArray(data)) {
//         setNotices(data);
//       } else {
//         setNotices([]);
//       }
//     } catch (error) {
//       console.error("Notice Error:", error);
//       setNotices([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return <div className="p-4">Loading Notices...</div>;
//   }

//   return (
//     <section className="py-16">
//       <div className="container mx-auto">

//         <h2 className="text-3xl font-bold mb-8">
//           Latest Notices
//         </h2>

//         <div className="bg-white shadow-lg rounded-xl p-6">

//           {notices.length === 0 ? (
//             <p>No notices available.</p>
//           ) : (
//             notices.map((notice) => (
//               <div
//                 key={notice.id}
//                 className="border-b py-3"
//               >
//                 <h3 className="font-semibold">
//                   {notice.title}
//                 </h3>

//                 <p>{notice.content}</p>
//               </div>
//             ))
//           )}

//         </div>

//       </div>
//     </section>
//   );
// }






// "use client";

// const notices = [
//   {
//     title: "B.Tech Admission 2026-27",
//     file: "/notices/admission-2026.pdf",
//   },
//   {
//     title: "GTU Examination Notice",
//     file: "/notices/gtu-exam.pdf",
//   },
//   {
//     title: "College Holiday Notice",
//     file: "/notices/holiday.pdf",
//   },
//   {
//     title: "Internal Examination Schedule",
//     file: "/notices/internal-exam.pdf",
//   },
// ];

// export default function NoticeBoard() {
//   return (
//     <section className="bg-slate-50 py-10">

//       <div className="container mx-auto px-4">

//         {/* Heading */}
//         <h2 className="text-3xl font-bold text-slate-900 mb-7">
//           Latest Notices
//         </h2>

//         {/* Notice Box */}
//         <div className="bg-white rounded-2xl shadow-md overflow-hidden">

//           <div className="relative overflow-hidden">

//             {/* Scrolling Notices */}
//             <div className="flex w-max animate-notice-scroll hover:[animation-play-state:paused]">

//               {/* First set */}
//               {notices.map((notice, index) => (
//                 <a
//                   key={`first-${index}`}
//                   href={notice.file}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center px-8 py-5 text-blue-900 font-medium hover:text-red-700 whitespace-nowrap"
//                 >
//                   <span className="mr-3 text-red-700">
//                     ●
//                   </span>

//                   {notice.title}
//                 </a>
//               ))}

//               {/* Duplicate set for continuous scrolling */}
//               {notices.map((notice, index) => (
//                 <a
//                   key={`second-${index}`}
//                   href={notice.file}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center px-8 py-5 text-blue-900 font-medium hover:text-red-700 whitespace-nowrap"
//                 >
//                   <span className="mr-3 text-red-700">
//                     ●
//                   </span>

//                   {notice.title}
//                 </a>
//               ))}

//             </div>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }




// "use client";

// const notices = [
//   {
//     title: "B.Tech Admission 2026-27",
//     file: "/notices/admission-2026.pdf",
//   },
//   {
//     title: "GTU Examination Notice",
//     file: "/notices/gtu-exam.pdf",
//   },
//   {
//     title: "College Holiday Notice",
//     file: "/notices/holiday.pdf",
//   },
//   {
//     title: "Internal Examination Schedule",
//     file: "/notices/internal-exam.pdf",
//   },
// ];

// export default function NoticeBoard() {
//   return (
//     <section className="bg-slate-50 py-10">

//       <div className="container mx-auto px-4">

//         {/* Heading */}
//         <h2 className="text-3xl font-bold text-slate-900 mb-7">
//           Latest Notices
//         </h2>

//         {/* Notice Box */}
//         <div className="bg-white rounded-2xl shadow-md overflow-hidden">

//           {/* Fixed Height Notice Area */}
//           <div className="h-96 overflow-hidden">

//             <div className="animate-notice-vertical">

//               {/* First List */}
//               {notices.map((notice, index) => (
//                 <a
//                   key={`first-${index}`}
//                   href={notice.file}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center px-6 py-4 text-blue-900 font-medium hover:text-red-700"
//                 >
//                   <span className="mr-3 text-red-700">
//                     ●
//                   </span>

//                   {notice.title}
//                 </a>
//               ))}

//               {/* Duplicate List - Continuous Scrolling */}
//               {notices.map((notice, index) => (
//                 <a
//                   key={`second-${index}`}
//                   href={notice.file}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center px-6 py-4 text-blue-900 font-medium hover:text-red-700"
//                 >
//                   <span className="mr-3 text-red-700">
//                     ●
//                   </span>

//                   {notice.title}
//                 </a>
//               ))}

//             </div>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }

"use client";

const notices = [
  {
    title: "B.Tech Admission 2026-27",
    file: "/notices/admission-2026.png",
  },
  {
    title: "GTU Examination Notice",
    file: "/notices/gtu-exam.pdf",
  },
  {
    title: "College Holiday Notice",
    file: "/notices/holiday.pdf",
  },
  {
    title: "Internal Examination Schedule",
    file: "/notices/internal-exam.pdf",
  },
  {
    title: "Workshop Notice",
    file: "/notices/workshop.pdf",
  },
  {
    title: "Seminar Notice",
    file: "/notices/seminar.pdf",
  },
  {
    title: "Industrial Visit Notice",
    file: "/notices/industrial-visit.pdf",
  },
  {
    title: "Placement Drive Notice",
    file: "/notices/placement.pdf",
  },
  {
    title: "Scholarship Notice",
    file: "/notices/scholarship.pdf",
  },
  {
    title: "Internal Assessment Notice",
    file: "/notices/assessment.pdf",
  },
];

export default function NoticeBoard() {
  return (
    <section className="bg-slate-50 py-10">

      <div className="container mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-15">

          {/* ================= LATEST NOTICES ================= */}

          <div>

            <h2 className="text-3xl font-bold text-slate-900 mb-7">
              Latest Notices
            </h2>

            <div className="bg-white rounded-2xl shadow-md overflow-hidden">

              <div className="h-96 overflow-hidden">

                <div className="animate-notice-vertical">

                  {notices.map((notice, index) => (
                    <a
                      key={`notice-1-${index}`}
                      href={notice.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-6 py-3 text-blue-900 font-medium hover:text-red-700"
                    >
                      <span className="mr-3 text-red-700">
                        ●
                      </span>

                      {notice.title}
                    </a>
                  ))}

                  {/* Duplicate */}
                  {notices.map((notice, index) => (
                    <a
                      key={`notice-2-${index}`}
                      href={notice.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-6 py-3 text-blue-900 font-medium hover:text-red-700"
                    >
                      <span className="mr-3 text-red-700">
                        ●
                      </span>

                      {notice.title}
                    </a>
                  ))}

                </div>

              </div>

            </div>

          </div>


          {/* ================= UPCOMING EVENTS ================= */}

          <div>

            <h2 className="text-3xl font-bold text-slate-900 mb-7">
              Upcoming Events
            </h2>

            <div className="bg-white rounded-2xl shadow-md overflow-hidden">

              <div className="h-96 overflow-hidden">

                <div className="animate-event-vertical">

                  {[
                    "AI Workshop",
                    "National Hackathon",
                    "Sports Week",
                    "Tech Fest",
                    "Coding Competition",
                    "Industrial Visit",
                    "Annual Function",
                    "Alumni Meet",
                    "Robotics Workshop",
                    "Career Guidance Seminar",
                  ].map((event, index) => (
                    <div
                      key={`event-1-${index}`}
                      className="flex items-center px-6 py-3 text-blue-900 font-medium hover:text-red-700"
                    >
                      <span className="mr-3 text-red-700">
                        ●
                      </span>

                      {event}
                    </div>
                  ))}


                  {/* Duplicate */}
                  {[
                    "AI Workshop",
                    "National Hackathon",
                    "Sports Week",
                    "Tech Fest",
                    "Coding Competition",
                    "Industrial Visit",
                    "Annual Function",
                    "Alumni Meet",
                    "Robotics Workshop",
                    "Career Guidance Seminar",
                  ].map((event, index) => (
                    <div
                      key={`event-2-${index}`}
                      className="flex items-center px-6 py-3 text-blue-900 font-medium hover:text-red-700"
                    >
                      <span className="mr-3 text-red-700">
                        ●
                      </span>

                      {event}
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}