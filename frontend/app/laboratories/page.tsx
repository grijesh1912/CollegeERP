// // "use client";

// // import { useSearchParams } from "next/navigation";
// // import Image from "next/image";

// // export default function LaboratoryPage() {
// //   const searchParams = useSearchParams();

// //   const dept = searchParams.get("dept") || "computer";
// //   const lab = searchParams.get("lab") || "programming";

// //   const data = {
// //     computer: {
// //       programming: {
// //         title: "Programming Laboratory",
// //         about:
// //           "Programming Laboratory provides hands-on practice in C, C++, Java, Python and Data Structures. Students perform practical experiments and develop programming skills."
// //       },

// //       database: {
// //         title: "Database & Cloud Computing Laboratory",
// //         about:
// //           "Students learn SQL, Oracle, MySQL, MongoDB, Cloud Computing and Database Administration."
// //       },

// //       ai: {
// //         title: "AI & Machine Learning Laboratory",
// //         about:
// //           "Students work on Machine Learning, Deep Learning, Python, TensorFlow and Artificial Intelligence projects."
// //       },

// //       network: {
// //         title: "Networking & Cybersecurity Laboratory",
// //         about:
// //           "Students perform experiments on Computer Networks, Cisco Devices, Linux Servers and Cyber Security."
// //       }
// //     },

// //     civil: {

// //       surveying: {
// //         title: "Surveying Laboratory",
// //         about:
// //           "Students perform practical work using Total Station, GPS, Theodolite and Levelling Instruments."
// //       },

// //       concrete: {
// //         title: "Concrete Technology Laboratory",
// //         about:
// //           "Experiments related to cement, concrete mix design and strength testing."
// //       }

// //     },

// //     mechanical: {

// //       cadcam: {
// //         title: "CAD CAM Laboratory",
// //         about:
// //           "Students learn AutoCAD, SolidWorks, CNC Programming and Manufacturing."
// //       },

// //       thermal: {
// //         title: "Thermal Engineering Laboratory",
// //         about:
// //           "Experiments on Boilers, Refrigeration, IC Engines and Heat Transfer."
// //       }

// //     },

// //     ec: {

// //       communication: {
// //         title: "Communication Laboratory",
// //         about:
// //           "Practical experiments on Analog, Digital and Wireless Communication."
// //       },

// //       vlsi: {
// //         title: "VLSI Laboratory",
// //         about:
// //           "Students learn FPGA, VHDL, Embedded Systems and Chip Design."
// //       }

// //     }

// //   };

// //   const current =
// //     data[dept as keyof typeof data]?.[
// //       lab as keyof (typeof data)[keyof typeof data]
// //     ];

// //   if (!current) {
// //     return <h1 className="text-center text-3xl mt-20">Laboratory Not Found</h1>;
// //   }

// //   return (
// //     <>
// //       {/* Hero */}

// //       <div className="relative h-[250px]">

// //         <Image
// //           src="/campus.jpg"
// //           alt="Lab"
// //           fill
// //           className="object-cover"
// //         />

// //         <div className="absolute inset-0 bg-black/60 flex items-center justify-center">

// //           <h1 className="text-5xl font-bold text-white">
// //             {current.title}
// //           </h1>

// //         </div>

// //       </div>

// //       {/* Content */}

// //       <section className="container mx-auto py-16 px-6">

// //         <div className="bg-white rounded-xl shadow-lg p-10">

// //           <h2 className="text-3xl font-bold text-blue-900 mb-8">
// //             About Laboratory
// //           </h2>

// //           <p className="text-lg leading-9 text-gray-700">
// //             {current.about}
// //           </p>

// //         </div>

// //       </section>
// //     </>
// //   );
// // }










// "use client";

// import { useSearchParams } from "next/navigation";

// export default function LaboratoryPage() {

//   const searchParams = useSearchParams();

//   const dept = searchParams.get("dept");

//   const lab = searchParams.get("lab");

//   return (

//     <div className="container mx-auto py-16">

//       <h1 className="text-4xl font-bold text-blue-900 mb-8">

//         {dept?.toUpperCase()} Department

//       </h1>

//       <div className="bg-white shadow-xl rounded-xl p-10">

//         <h2 className="text-3xl font-bold mb-6">

//           {lab?.replace("-", " ").toUpperCase()}

//         </h2>

//         <p>

//           Write complete laboratory information here.

//         </p>

//       </div>

//     </div>

//   );

// }