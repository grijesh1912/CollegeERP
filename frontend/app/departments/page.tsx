// export default function Departments() {
//   const departments = [
//     "Computer Engineering",
//     // "Information Technology",
//     "Civil Engineering",
//     "Mechanical Engineering",
//     "Electronics and Communication Engineering",
//     // "AI & Data Science",
//   ];

//   return (
//     <section className="py-20">

//       <div className="container mx-auto">

//         <h2 className="text-4xl font-bold text-center mb-12">
//           Our Departments
//         </h2>

//         <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">

//           {departments.map((dept) => (

//             <div
//               key={dept}
//               className="bg-blue-600 text-white shadow-lg p-6 rounded-xl text-center font-semibold hover:bg-blue-700 hover:scale-105 transition-all duration-300 cursor-pointer"
//             >
//               <h3 className="text-xl font-semibold">
//                 {dept}
//               </h3>
//             </div>

//           ))}

//         </div>

//       </div>

//     </section>
//   );
// }









// import Link from "next/link";

// const departments = [
//   {
//     name: "Computer Engineering",
//     slug: "computer-engineering",
//   },
//   {
//     name: "Civil Engineering",
//     slug: "civil-engineering",
//   },
//   {
//     name: "Mechanical Engineering",
//     slug: "mechanical-engineering",
//   },
//   {
//     name: "Electronics & Communication Engineering",
//     slug: "electronics-communication",
//   },
// ];

// export default function DepartmentsPage() {
//   return (
//     <div className="max-w-7xl mx-auto py-16 px-6">

//       <h1 className="text-5xl font-bold text-center mb-12">
//         Departments
//       </h1>

//       <div className="grid md:grid-cols-2 gap-8">

//         {departments.map((dept) => (

//           <Link
//             key={dept.slug}
//             href={`/departments/${dept.slug}`}
//           >
//             <div className="bg-blue-600 text-white rounded-xl p-8 shadow-lg hover:bg-blue-700 transition cursor-pointer">

//               <h2 className="text-2xl font-bold">
//                 {dept.name}
//               </h2>

//             </div>

//           </Link>

//         ))}

//       </div>

//     </div>
//   );
// }






// "use client";

// import { useSearchParams } from "next/navigation";
// import Image from "next/image";

// export default function DepartmentsPage() {
//   const searchParams = useSearchParams();

//   const dept = searchParams.get("dept") || "computer";

//   const departments = {
//     computer: {
//       title: "Computer Engineering",
//       about:
//         "The Department of Computer Engineering is committed to providing quality education in programming, software engineering, artificial intelligence, cloud computing, networking and cybersecurity. Students are encouraged to participate in projects, internships, hackathons and research activities.",
//     },

//     civil: {
//       title: "Civil Engineering",
//       about:
//         "The Department of Civil Engineering provides excellent education in structural engineering, transportation engineering, environmental engineering, surveying and construction management. Students gain practical exposure through laboratory work and field visits.",
//     },

//     mechanical: {
//       title: "Mechanical Engineering",
//       about:
//         "The Department of Mechanical Engineering offers education in manufacturing, design engineering, thermal engineering, CAD/CAM, robotics and industrial automation. Students receive strong practical and industrial exposure.",
//     },

//     ec: {
//       title: "Electronics & Communication Engineering",
//       about:
//         "The Department of Electronics & Communication Engineering focuses on embedded systems, VLSI, communication systems, IoT, signal processing and wireless technologies with modern laboratories and industry-oriented learning.",
//     },
//   };

//   const current =
//     departments[dept as keyof typeof departments] || departments.computer;

//   return (
//     <>
//       {/* Hero */}

//       <div className="relative h-[250px]">

//         <Image
//           src="/campus.jpg"
//           alt="Department"
//           fill
//           className="object-cover"
//         />

//         <div className="absolute inset-0 bg-black/60 flex items-center justify-center">

//           <h1 className="text-5xl font-bold text-white">
//             {current.title}
//           </h1>

//         </div>

//       </div>

//       {/* Content */}

//       <section className="py-16">

//         <div className="container mx-auto px-6">

//           <div className="bg-white rounded-xl shadow-xl p-10">

//             <h2 className="text-4xl font-bold text-blue-900 mb-8">
//               About Department
//             </h2>

//             <p className="text-lg text-gray-700 leading-9 text-justify">
//               {current.about}
//             </p>

//             <hr className="my-10" />

//             <h2 className="text-3xl font-bold text-blue-900 mb-5">
//               Vision
//             </h2>

//             <p className="text-lg leading-9 text-gray-700">
//               To become a centre of excellence in technical education,
//               innovation, research and entrepreneurship for producing globally
//               competent engineers.
//             </p>

//             <hr className="my-10" />

//             <h2 className="text-3xl font-bold text-blue-900 mb-5">
//               Mission
//             </h2>

//             <ul className="list-disc ml-8 text-lg leading-9 text-gray-700">

//               <li>Provide quality technical education.</li>

//               <li>
//                 Encourage research, innovation and entrepreneurship.
//               </li>

//               <li>
//                 Develop ethical, professional and leadership qualities.
//               </li>

//               <li>
//                 Strengthen industry interaction and practical learning.
//               </li>

//             </ul>

//             <hr className="my-10" />

//             <h2 className="text-3xl font-bold text-blue-900 mb-5">
//               Program Educational Objectives (PEO)
//             </h2>

//             <ul className="list-disc ml-8 text-lg leading-9 text-gray-700">

//               <li>Develop strong engineering fundamentals.</li>

//               <li>Prepare students for higher studies.</li>

//               <li>Promote lifelong learning.</li>

//               <li>Build professional ethics and teamwork.</li>

//             </ul>

//             <hr className="my-10" />

//             <h2 className="text-3xl font-bold text-blue-900 mb-5">
//               Program Specific Outcomes (PSO)
//             </h2>

//             <ul className="list-disc ml-8 text-lg leading-9 text-gray-700">

//               <li>Apply engineering knowledge to solve real-world problems.</li>

//               <li>
//                 Design innovative solutions using modern engineering tools.
//               </li>

//               <li>Work effectively in multidisciplinary teams.</li>

//             </ul>

//             <hr className="my-10" />

//             <h2 className="text-3xl font-bold text-blue-900 mb-5">
//               Laboratories
//             </h2>

//             <div className="grid md:grid-cols-2 gap-6">

//               <div className="border rounded-lg p-5 shadow">
//                 Programming Lab
//               </div>

//               <div className="border rounded-lg p-5 shadow">
//                 Hardware Lab
//               </div>

//               <div className="border rounded-lg p-5 shadow">
//                 Research Lab
//               </div>

//               <div className="border rounded-lg p-5 shadow">
//                 Project Lab
//               </div>

//             </div>

//             <hr className="my-10" />

//             <h2 className="text-3xl font-bold text-blue-900 mb-5">
//               Faculty
//             </h2>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

//               <div className="border rounded-xl p-6 shadow text-center">

//                 <h3 className="font-bold text-xl">
//                   Dr. ABC XYZ
//                 </h3>

//                 <p>Professor & HOD</p>

//               </div>

//               <div className="border rounded-xl p-6 shadow text-center">

//                 <h3 className="font-bold text-xl">
//                   Prof. XYZ ABC
//                 </h3>

//                 <p>Assistant Professor</p>

//               </div>

//               <div className="border rounded-xl p-6 shadow text-center">

//                 <h3 className="font-bold text-xl">
//                   Prof. PQR LMN
//                 </h3>

//                 <p>Assistant Professor</p>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>
//     </>
//   );
// }






// "use client";

// import { useSearchParams } from "next/navigation";
// import Image from "next/image";
// import { useState } from "react";

// export default function DepartmentsPage() {
//   const searchParams = useSearchParams();

//   const dept = searchParams.get("dept") || "computer";

//   const departments = {
//     computer: {
//       title: "Computer Engineering",
//       about:
//         "The Computer Engineering department offers Undergraduate Programs in Computer Engineering. Graduates of the computer engineering program can make their careers in the field of Information & Communication Technology, Electronics Industry, Academics and R & D. The Computer Department has a computer center with more than 300 computers with latest software and internet connectivity.",
//       vision:
//         "Our vision is to build a research identity around the information sciences and computation, and data analytics and to build an educational identity through leading degree programs based on curricular innovation and research. Our educational approach emphasizes a solid technical base combined with critical thinking, emotional intelligence and experiential learning while encouraging entrepreneurship through open innovation with quality, high-impact service.",
//       mission: [
//         // "Provide quality education in computer science and engineering.",
//         // "Encourage research and innovation in emerging technologies.",
//         // "Develop industry-ready skills through hands-on training.",
//         // "Promote ethical and professional values among students.",
//         "Provide excellent graduate education in strong environment for preparing students to be self motivated, creative researcher, entrepreneurship and knowledge transformer to industry and society. The department promotes excellence in teaching, curriculum activities and real time platforms for students to discover themselves",
//       ],
//       peo: [
//         // "Develop strong fundamentals in programming and computing.",
//         // "Prepare students for higher studies and research in CS/IT.",
//         // "Promote lifelong learning in evolving technologies.",
//         // "Build professional ethics and teamwork ability.",
//         "To excel in professional career and/or higher education by acquiring knowledge in mathematical, computing and engineering principles.",

//         "To exibit professionalism, ethical attitude, team work in their profession and adapt to current trends by engaging in life long learning.",

//         "To develop communication and managerial skills, leadership skills, professional ethics, and creative thinking.",
//       ],
//       pso: [
//         // "Develop software solutions using modern tools and frameworks.",
//         // "Apply AI, cloud and networking concepts to real-world problems.",
//         // "Work effectively in multidisciplinary software teams.",
//         "Program Outcomes are narrower statements that describe what the students are expected to know and be able to do upon the graduation. These relate to the knowledge, skills and behavior the students acquire through the program. They are specific to the program and are consistent with the Graduate Attributes and facilitate the attainment of PEOs. The graduate of BE program in Computer Engineering should be able to",

// "PO1. Ability to apply Mathematics, Science and Engineering.",

// "PO2. Ability to design and conduct experiments; as well as to analyze and interpret data",

// "PO3. Ability to design a system, component or process to meet desired needs within realistic constraints such as economic, environmental, social, political, ethical, health and safety, manufacturability and sustainability",

// "PO4. Ability to function in multidisciplinary teams",

// "PO5. Ability to identify, formulate and solve engineering problems",

// "PO6. Understanding of professional and ethical responsibility",

// "PO7. Ability to communicate effectively",

// "PO8. Understanding the impact of engineering solutions in a global, economic, environmental and societal context",

// "PO9. Recognizing the need and having the ability to engage in lifelong learning",

// "PO10. Knowledge of contemporary issues",

// "PO11. Ability to use techniques, skills and modern engineering tools necessary for engineering practice",
//       ],
//       // labs: [
//       //   "Programming Lab",
//       //   "Database & Cloud Computing Lab",
//       //   "AI & Machine Learning Lab",
//       //   "Networking & Cybersecurity Lab",
//       // ],
//       labs: [
//   {
//     title: "Programming Lab",
//     image: "/labs/programming.jpg",
//     experiments: [
//       "C Programming",
//       "Data Structures",
//       "Stack Implementation",
//       "Queue Implementation",
//       "Linked List",
//       "Searching Algorithms",
//       "Sorting Algorithms"
//     ]
//   },

//   {
//     title: "Database & Cloud Computing Lab",
//     image: "/labs/database.jpg",
//     experiments: [
//       "SQL Queries",
//       "Normalization",
//       "Joins",
//       "Stored Procedures",
//       "Cloud Storage"
//     ]
//   },

//   {
//     title: "AI & Machine Learning Lab",
//     image: "/labs/ai.jpg",
//     experiments: [
//       "Linear Regression",
//       "Decision Tree",
//       "Random Forest",
//       "KNN",
//       "Neural Network"
//     ]
//   },

//   {
//     title: "Networking & Cybersecurity Lab",
//     image: "/labs/network.jpg",
//     experiments: [
//       "IP Addressing",
//       "Subnetting",
//       "Wireshark",
//       "Firewall",
//       "Packet Analysis"
//     ]
//   }
// ],
//       faculty: [
//         { name: "Prof. Amit Prakash Tiwari", post: "Assistant Professor" },
//         { name: "Prof. Shirin Patel", post: "Assistant Professor" },
//         { name: "Prof. Grijesh Nemiwal", post: "Assistant Professor" },
//         { name: "Prof. Piyush Kumar", post: "Assistant Professor" },
//       ],
//     },

//     civil: {
//       title: "Civil Engineering",
//       about:
//         "The Department of Civil Engineering provides excellent education in structural engineering, transportation engineering, environmental engineering, surveying and construction management. Students gain practical exposure through laboratory work and field visits.",
//       vision:
//         "To be a leading department in civil engineering education, fostering sustainable infrastructure development through innovation and research.",
//       mission: [
//         "Impart quality education in core civil engineering disciplines.",
//         "Promote sustainable and eco-friendly construction practices.",
//         "Provide practical exposure through field visits and projects.",
//         "Inculcate professional ethics and safety awareness.",
//       ],
//       peo: [
//         "Develop strong fundamentals in structural and construction engineering.",
//         "Prepare students for higher studies and government services.",
//         "Promote awareness of sustainability and environmental impact.",
//         "Build professional ethics and site management skills.",
//       ],
//       pso: [
//         "Design and analyze structures using modern software tools.",
//         "Apply surveying and geotechnical knowledge to real projects.",
//         "Manage construction projects efficiently and safely.",
//       ],
//       // labs: [
//       //   "Surveying Lab",
//       //   "Concrete Technology Lab",
//       //   "Structural Engineering Lab",
//       //   "Environmental Engineering Lab",
//       // ],
//       labs: [
//   {
//     title: "Basics of Civil Engineering & Advanced Surveying",
//     image: "/labs/Surveying.jpg",
//     experiments: [
//       "C Programming",
//       "Data Structures",
//       "Stack Implementation",
//       "Queue Implementation",
//       "Linked List",
//       "Searching Algorithms",
//       "Sorting Algorithms"
//     ]
//   },

//   {
//     title: "Mechanics of Solid",
//     image: "/labs/Concrete.jpg",
//     experiments: [
//       "SQL Queries",
//       "Normalization",
//       "Joins",
//       "Stored Procedures",
//       "Cloud Storage"
//     ]
//   },

//   {
//     title: "Concrete Technology",
//     image: "/labs/Structural.jpg",
//     experiments: [
//       "Linear Regression",
//       "Decision Tree",
//       "Random Forest",
//       "KNN",
//       "Neural Network"
//     ]
//   },

//   {
//     title: "Engineering Geology",
//     image: "/labs/Environmental.jpg",
//     experiments: [
//       "IP Addressing",
//       "Subnetting",
//       "Wireshark",
//       "Firewall",
//       "Packet Analysis"
//     ]
//   },
//   {
//     title: "Highway Engineering",
//     image: "/labs/Environmental.jpg",
//     experiments: [
//       "IP Addressing",
//       "Subnetting",
//       "Wireshark",
//       "Firewall",
//       "Packet Analysis"
//     ]
//   },
//   {
//     title: "Geotechnical Engineering",
//     image: "/labs/Environmental.jpg",
//     experiments: [
//       "IP Addressing",
//       "Subnetting",
//       "Wireshark",
//       "Firewall",
//       "Packet Analysis"
//     ]
//   },
//   {
//     title: "Environment Engineering",
//     image: "/labs/Environmental.jpg",
//     experiments: [
//       "IP Addressing",
//       "Subnetting",
//       "Wireshark",
//       "Firewall",
//       "Packet Analysis"
//     ]
//   },
//   {
//     title: "Fluid Mechanics",
//     image: "/labs/Environmental.jpg",
//     experiments: [
//       "IP Addressing",
//       "Subnetting",
//       "Wireshark",
//       "Firewall",
//       "Packet Analysis"
//     ]
//   },
//   {
//     title: "Applied Fluid Mechanics",
//     image: "/labs/Environmental.jpg",
//     experiments: [
//       "IP Addressing",
//       "Subnetting",
//       "Wireshark",
//       "Firewall",
//       "Packet Analysis"
//     ]
//   },
//   {
//     title: "Earhquake Engineering",
//     image: "/labs/Environmental.jpg",
//     experiments: [
//       "IP Addressing",
//       "Subnetting",
//       "Wireshark",
//       "Firewall",
//       "Packet Analysis"
//     ]
//   }
// ],
//       faculty: [
//         { name: "Prof. Vikram Gupta", post: "HOD" },
//         { name: "Prof. Hiren V Patel", post: "Assistant Professor" },
//         { name: "Prof. Tushar Mistri", post: "Assistant Professor" },
//         { name: "Prof. Priya Sharma", post: "Assistant Professor" },
//         { name: "Prof. Jitendra Poddar", post: "Assistant Professor" },
//       ],
//     },

//     mechanical: {
//       title: "Mechanical Engineering",
//       about:
//         "The Department of Mechanical Engineering offers education in manufacturing, design engineering, thermal engineering, CAD/CAM, robotics and industrial automation. Students receive strong practical and industrial exposure.",
//       vision:
//         "To be a centre of excellence producing skilled mechanical engineers capable of meeting industrial and societal needs through innovation.",
//       mission: [
//         "Provide strong theoretical and practical foundation in mechanical engineering.",
//         "Encourage innovation in design, manufacturing and automation.",
//         "Strengthen industry-institute interaction for practical exposure.",
//         "Promote ethical and professional conduct.",
//       ],
//       peo: [
//         "Develop expertise in design, thermal and manufacturing engineering.",
//         "Prepare students for higher studies and core industry roles.",
//         "Promote adoption of modern tools like CAD/CAM and automation.",
//         "Build teamwork and professional ethics.",
//       ],
//       pso: [
//         "Design and analyze mechanical systems using CAD/CAM tools.",
//         "Apply thermal and manufacturing principles to industrial problems.",
//         "Work effectively in cross-functional engineering teams.",
//       ],
//       // labs: [
//       //   "Manufacturing Lab",
//       //   "Thermal Engineering Lab",
//       //   "CAD/CAM Lab",
//       //   "Robotics & Automation Lab",
//       // ],
//       labs: [
//   {
//     title: "Manufacturing Lab",
//     image: "/labs/Manufacturing.jpg",
//     experiments: [
//       "C Programming",
//       "Data Structures",
//       "Stack Implementation",
//       "Queue Implementation",
//       "Linked List",
//       "Searching Algorithms",
//       "Sorting Algorithms"
//     ]
//   },

//   {
//     title: "Thermal Engineering Lab",
//     image: "/labs/Thermal.jpg",
//     experiments: [
//       "SQL Queries",
//       "Normalization",
//       "Joins",
//       "Stored Procedures",
//       "Cloud Storage"
//     ]
//   },

//   {
//     title: "CAD/CAM Lab",
//     image: "/labs/CAD/CAM.jpg",
//     experiments: [
//       "Linear Regression",
//       "Decision Tree",
//       "Random Forest",
//       "KNN",
//       "Neural Network"
//     ]
//   },

//   {
//     title: "Robotics & Automation Lab",
//     image: "/labs/Robotics.jpg",
//     experiments: [
//       "IP Addressing",
//       "Subnetting",
//       "Wireshark",
//       "Firewall",
//       "Packet Analysis"
//     ]
//   }
// ],
//       faculty: [
//         { name: "Prof. Urvesh Patel", post: "HOD" },
//         { name: "Prof. ", post: "Assistant Professor" },
//         { name: "Prof. ", post: "Assistant Professor" },
//       ],
//     },

//     ec: {
//       title: "Electronics & Communication Engineering",
//       about:
//         "The Department of Electronics & Communication Engineering focuses on embedded systems, VLSI, communication systems, IoT, signal processing and wireless technologies with modern laboratories and industry-oriented learning.",
//       vision:
//         "To excel in electronics and communication engineering education, fostering innovation in embedded systems, communication and IoT technologies.",
//       mission: [
//         "Provide quality education in electronics and communication engineering.",
//         "Encourage research in VLSI, embedded systems and IoT.",
//         "Promote practical learning through modern laboratories.",
//         "Develop ethical and industry-ready professionals.",
//       ],
//       peo: [
//         "Develop strong fundamentals in electronics and communication systems.",
//         "Prepare students for higher studies and research in ECE.",
//         "Promote knowledge of emerging fields like IoT and VLSI.",
//         "Build professional ethics and teamwork.",
//       ],
//       pso: [
//         "Design and analyze embedded and communication systems.",
//         "Apply signal processing and VLSI concepts to real applications.",
//         "Develop IoT-based solutions for real-world problems.",
//       ],
//       // labs: [
//       //   "Embedded Systems Lab",
//       //   "VLSI Design Lab",
//       //   "Communication Systems Lab",
//       //   "IoT & Signal Processing Lab",
//       // ],
//       labs: [
//   {
//     title: "Embedded Systems Lab",
//     image: "/labs/Embedded.jpg",
//     experiments: [
//       "C Programming",
//       "Data Structures",
//       "Stack Implementation",
//       "Queue Implementation",
//       "Linked List",
//       "Searching Algorithms",
//       "Sorting Algorithms"
//     ]
//   },

//   {
//     title: "VLSI Design Lab",
//     image: "/labs/VLSI.jpg",
//     experiments: [
//       "SQL Queries",
//       "Normalization",
//       "Joins",
//       "Stored Procedures",
//       "Cloud Storage"
//     ]
//   },

//   {
//     title: "Communication Systems Lab",
//     image: "/labs/Communication.jpg",
//     experiments: [
//       "Linear Regression",
//       "Decision Tree",
//       "Random Forest",
//       "KNN",
//       "Neural Network"
//     ]
//   },

//   {
//     title: "IoT & Signal Processing Lab",
//     image: "/labs/IoT.jpg",
//     experiments: [
//       "IP Addressing",
//       "Subnetting",
//       "Wireshark",
//       "Firewall",
//       "Packet Analysis"
//     ]
//   }
// ],
//       faculty: [
        
//         { name: "Prof. Parth Panchal", post: "Assistant Professor" },
//         { name: "Prof. Ankush", post: "Assistant Professor" },
//       ],
//     },
//   };

//   const current =
//     departments[dept as keyof typeof departments] || departments.computer;
//   const [selectedLab, setSelectedLab] = useState<any>(null);

//   return (
//     <>
//       {/* Hero */}

//       <div className="relative h-[250px]">

//         <Image
//           src="/campus.jpg"
//           alt="Department"
//           fill
//           className="object-cover"
//         />

//         <div className="absolute inset-0 bg-black/60 flex items-center justify-center">

//           <h1 className="text-5xl font-bold text-white">
//             {current.title}
//           </h1>

//         </div>

//       </div>

//       {/* Content */}

//       <section className="py-16">

//         <div className="container mx-auto px-6">

//           <div className="bg-white rounded-xl shadow-xl p-10">

//             <h2 className="text-4xl font-bold text-blue-900 mb-8">
//               About Department
//             </h2>

//             <p className="text-lg text-gray-700 leading-9 text-justify">
//               {current.about}
//             </p>

//             <hr className="my-10" />

//             <h2 className="text-3xl font-bold text-blue-900 mb-5">
//               Vision
//             </h2>

//             <p className="text-lg leading-9 text-gray-700">
//               {current.vision}
//             </p>

//             <hr className="my-10" />

//             <h2 className="text-3xl font-bold text-blue-900 mb-5">
//               Mission
//             </h2>

//             <ul className="list-disc ml-8 text-lg leading-9 text-gray-700">
//               {current.mission.map((item, idx) => (
//                 <li key={idx}>{item}</li>
//               ))}
//             </ul>

//             <hr className="my-10" />

//             <h2 className="text-3xl font-bold text-blue-900 mb-5">
//               Program Educational Objectives (PEO)
//             </h2>

//             <ul className="list-disc ml-8 text-lg leading-9 text-gray-700">
//               {current.peo.map((item, idx) => (
//                 <li key={idx}>{item}</li>
//               ))}
//             </ul>

//             <hr className="my-10" />

//             <h2 className="text-3xl font-bold text-blue-900 mb-5">
//               Program Specific Outcomes (PSO)
//             </h2>

//             <ul className="list-disc ml-8 text-lg leading-9 text-gray-700">
//               {current.pso.map((item, idx) => (
//                 <li key={idx}>{item}</li>
//               ))}
//             </ul>

//             <hr className="my-10" />

//             <h2 className="text-3xl font-bold text-blue-900 mb-5">
//               Laboratories
//             </h2>

//             {/* <div className="grid md:grid-cols-2 gap-6">
//               {current.labs.map((lab, idx) => (
//                 <div key={idx} className="border rounded-lg p-5 shadow">
//                   {lab}
//                 </div>
//               ))}
//             </div> */}
//             <div className="grid md:grid-cols-2 gap-6">

//   {current.labs.map((lab: any) => (

//     <div
//       key={lab.title}
//       onClick={() => setSelectedLab(lab)}
//       className="border rounded-xl p-5 shadow hover:bg-blue-600 hover:text-white cursor-pointer transition"
//     >
//       {lab.title}
//     </div>

//   ))}

// </div>

// {selectedLab && (

// <div className="mt-12 border rounded-xl shadow-lg p-8">

// <h2 className="text-3xl font-bold text-blue-900 mb-6">
//   {selectedLab.title}
// </h2>

// <Image
//     src={selectedLab.image}
//     alt={selectedLab.title}
//     width={900}
//     height={450}
//     className="rounded-xl mb-8 w-full h-[420px] object-cover"
// />

// <h3 className="text-2xl font-semibold mb-4">
//   Laboratory Experiments
// </h3>

// <ul className="list-disc ml-8 space-y-2">

// {selectedLab.experiments.map((exp:any,index:number)=>(

// <li key={index}>
//    {exp}
// </li>

// ))}

// </ul>

// </div>

// )}

//             <hr className="my-10" />

//             <h2 className="text-3xl font-bold text-blue-900 mb-5">
//               Faculty
//             </h2>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {current.faculty.map((f, idx) => (
//                 <div
//                   key={idx}
//                   className="border rounded-xl p-6 shadow text-center"
//                 >
//                   <h3 className="font-bold text-xl">{f.name}</h3>
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




















// import Link from "next/link";

// export default function DepartmentsPage() {
//   const departments = [
//     {
//       name: "Computer Engineering",
//       path: "/departments/computer",
//     },
//     {
//       name: "Civil Engineering",
//       path: "/departments/civil",
//     },
//     {
//       name: "Mechanical Engineering",
//       path: "/departments/mechanical",
//     },
//     {
//       name: "Electronics & Communication Engineering",
//       path: "/departments/ec",
//     },
//   ];

//   return (
//     <section className="py-16">

//       <div className="container mx-auto px-6">

//         <h1 className="text-4xl font-bold text-blue-900 mb-8">
//           Departments
//         </h1>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

//           {departments.map((dept) => (

//             <Link
//               key={dept.path}
//               href={dept.path}
//               className="border rounded-xl p-6 shadow hover:bg-blue-900 hover:text-white transition"
//             >
//               <h2 className="text-xl font-semibold">
//                 {dept.name}
//               </h2>
//             </Link>

//           ))}

//         </div>

//       </div>

//     </section>
//   );
// }







import Link from "next/link";

const departments = [
  {
    name: "Computer Engineering",
    path: "/departments/computer",
  },

  {
    name: "Civil Engineering",
    path: "/departments/civil",
  },

  {
    name: "Mechanical Engineering",
    path: "/departments/mechanical",
  },

  {
    name: "Electronics & Communication Engineering",
    path: "/departments/ec",
  },
];

export default function DepartmentsPage() {
  return (
    <section className="py-16">

      <div className="container mx-auto px-6">

        {/* Heading */}

        <h1 className="text-4xl font-bold text-blue-900 mb-10">
          Departments
        </h1>


        {/* Department Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

          {departments.map((department) => (

            <Link
              key={department.path}
              href={department.path}
              className="
                border
                rounded-xl
                p-6
                shadow
                hover:bg-blue-900
                hover:text-white
                transition
                duration-300
              "
            >

              <h2 className="text-xl font-semibold">
                {department.name}
              </h2>

              <p className="mt-3 text-sm opacity-80">
                View Department Details →
              </p>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}