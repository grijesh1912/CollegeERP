// "use client";

// import Image from "next/image";
// import { useState } from "react";

// export default function ComputerDepartmentPage() {

//   const [selectedLab, setSelectedLab] = useState<any>(null);

//   const department = {
//     title: "Computer Engineering",

//     about:
//       "The Computer Engineering department offers Undergraduate Programs in Computer Engineering. Graduates of the computer engineering program can make their careers in the field of Information & Communication Technology, Electronics Industry, Academics and R & D. The Computer Department has a computer center with more than 300 computers with latest software and internet connectivity.",

//     vision:
//       "Our vision is to build a research identity around the information sciences and computation, and data analytics and to build an educational identity through leading degree programs based on curricular innovation and research.",

//     mission: [
//       "Provide excellent graduate education in strong environment for preparing students to be self motivated, creative researcher, entrepreneurship and knowledge transformer to industry and society.",
//     ],

//     peo: [
//       "To excel in professional career and/or higher education by acquiring knowledge in mathematical, computing and engineering principles.",
//       "To exibit professionalism, ethical attitude, team work in their profession and adapt to current trends by engaging in life long learning.",
//       "To develop communication and managerial skills, leadership skills, professional ethics, and creative thinking.",
//     ],

//     pso: [
//       "Program Outcomes are narrower statements that describe what the students are expected to know and be able to do upon the graduation.",

//       "PO1. Ability to apply Mathematics, Science and Engineering.",

//       "PO2. Ability to design and conduct experiments; as well as to analyze and interpret data",

//       "PO3. Ability to design a system, component or process to meet desired needs within realistic constraints.",

//       "PO4. Ability to function in multidisciplinary teams",

//       "PO5. Ability to identify, formulate and solve engineering problems",

//       "PO6. Understanding of professional and ethical responsibility",

//       "PO7. Ability to communicate effectively",

//       "PO8. Understanding the impact of engineering solutions in a global, economic, environmental and societal context",

//       "PO9. Recognizing the need and having the ability to engage in lifelong learning",

//       "PO10. Knowledge of contemporary issues",

//       "PO11. Ability to use techniques, skills and modern engineering tools necessary for engineering practice",
//     ],

//     labs: [
//       {
//         title: "Programming Lab",
//         image: "/labs/programming.jpg",
//         experiments: [
//           "C Programming",
//           "Data Structures",
//           "Stack Implementation",
//           "Queue Implementation",
//           "Linked List",
//           "Searching Algorithms",
//           "Sorting Algorithms",
//         ],
//       },

//       {
//         title: "Database & Cloud Computing Lab",
//         image: "/labs/database.jpg",
//         experiments: [
//           "SQL Queries",
//           "Normalization",
//           "Joins",
//           "Stored Procedures",
//           "Cloud Storage",
//         ],
//       },

//       {
//         title: "AI & Machine Learning Lab",
//         image: "/labs/ai.jpg",
//         experiments: [
//           "Linear Regression",
//           "Decision Tree",
//           "Random Forest",
//           "KNN",
//           "Neural Network",
//         ],
//       },

//       {
//         title: "Networking & Cybersecurity Lab",
//         image: "/labs/network.jpg",
//         experiments: [
//           "IP Addressing",
//           "Subnetting",
//           "Wireshark",
//           "Firewall",
//           "Packet Analysis",
//         ],
//       },
//     ],

//     faculty: [
//       {
//         name: "Prof. Amit Prakash Tiwari",
//         post: "Assistant Professor",
//       },
//       {
//         name: "Prof. Shirin Patel",
//         post: "Assistant Professor",
//       },
//       {
//         name: "Prof. Grijesh Nemiwal",
//         post: "Assistant Professor",
//       },
//       {
//         name: "Prof. Piyush Kumar",
//         post: "Assistant Professor",
//       },
//     ],
//   };

//   return (
//     <>
//       {/* Hero */}
//       <div className="relative h-[250px]">

//         <Image
//           src="/campus.jpg"
//           alt="Computer Engineering Department"
//           fill
//           className="object-cover"
//         />

//         <div className="absolute inset-0 bg-black/60 flex items-center justify-center">

//           <h1 className="text-5xl font-bold text-white">
//             {department.title}
//           </h1>

//         </div>
//       </div>

//       {/* Content */}
//       <section className="py-16">

//         <div className="container mx-auto px-6">

//           <div className="bg-white rounded-xl shadow-xl p-10">

//             {/* About */}
//             <h2 className="text-4xl font-bold text-blue-900 mb-8">
//               About Department
//             </h2>

//             <p className="text-lg text-gray-700 leading-9 text-justify">
//               {department.about}
//             </p>

//             <hr className="my-10" />

//             {/* Vision */}
//             <h2 className="text-3xl font-bold text-blue-900 mb-5">
//               Vision
//             </h2>

//             <p className="text-lg leading-9 text-gray-700">
//               {department.vision}
//             </p>

//             <hr className="my-10" />

//             {/* Mission */}
//             <h2 className="text-3xl font-bold text-blue-900 mb-5">
//               Mission
//             </h2>

//             <ul className="list-disc ml-8 text-lg leading-9 text-gray-700">
//               {department.mission.map((item, idx) => (
//                 <li key={idx}>{item}</li>
//               ))}
//             </ul>

//             <hr className="my-10" />

//             {/* PEO */}
//             <h2 className="text-3xl font-bold text-blue-900 mb-5">
//               Program Educational Objectives (PEO)
//             </h2>

//             <ul className="list-disc ml-8 text-lg leading-9 text-gray-700">
//               {department.peo.map((item, idx) => (
//                 <li key={idx}>{item}</li>
//               ))}
//             </ul>

//             <hr className="my-10" />

//             {/* PSO */}
//             <h2 className="text-3xl font-bold text-blue-900 mb-5">
//               Program Specific Outcomes (PSO)
//             </h2>

//             <ul className="list-disc ml-8 text-lg leading-9 text-gray-700">
//               {department.pso.map((item, idx) => (
//                 <li key={idx}>{item}</li>
//               ))}
//             </ul>

//             <hr className="my-10" />

//             {/* Laboratories */}
//             <h2 className="text-3xl font-bold text-blue-900 mb-5">
//               Laboratories
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

//               {department.labs.map((lab) => (

//                 <div
//                   key={lab.title}
//                   onClick={() => setSelectedLab(lab)}
//                   className="border rounded-xl p-5 shadow hover:bg-blue-600 hover:text-white cursor-pointer transition"
//                 >
//                   {lab.title}
//                 </div>

//               ))}

//             </div>

//             {/* Selected Lab */}
//             {selectedLab && (

//               <div className="mt-12 border rounded-xl shadow-lg p-8">

//                 <h2 className="text-3xl font-bold text-blue-900 mb-6">
//                   {selectedLab.title}
//                 </h2>

//                 <Image
//                   src={selectedLab.image}
//                   alt={selectedLab.title}
//                   width={900}
//                   height={450}
//                   className="rounded-xl mb-8 w-full h-[420px] object-cover"
//                 />

//                 <h3 className="text-2xl font-semibold mb-4">
//                   Laboratory Experiments
//                 </h3>

//                 <ul className="list-disc ml-8 space-y-2">

//                   {selectedLab.experiments.map(
//                     (exp: string, index: number) => (
//                       <li key={index}>
//                         {exp}
//                       </li>
//                     )
//                   )}

//                 </ul>

//               </div>

//             )}

//             <hr className="my-10" />

//             {/* Faculty */}
//             <h2 className="text-3xl font-bold text-blue-900 mb-5">
//               Faculty
//             </h2>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

//               {department.faculty.map((f, idx) => (

//                 <div
//                   key={idx}
//                   className="border rounded-xl p-6 shadow text-center"
//                 >

//                   <h3 className="font-bold text-xl">
//                     {f.name}
//                   </h3>

//                   <p>{f.post}</p>

//                 </div>

//               ))}

//             </div>

//           </div>

//         </div>

//       </section>
//     </>
//   );
// }

import DepartmentPage from "../DepartmentPage";
import { departments } from "../data";

export default function ComputerPage() {
  return (
    <DepartmentPage
      department={departments.computer}
    />
  );
}