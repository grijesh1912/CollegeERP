export default function ComputerEngineeringIndustrialInteraction() {
  const companies = [
    "Rishabh Software Pvt. Ltd., Vadodara",
    "Bisag, Gandhinagar",
    "Dots & Com, Baroda",
    "ISRO, Ahmadabad",
    "Indies Services, Bhavanagar",
    "Compindia Technologies, Ahmedabad",
    "Regional Telecome Training Centre(Bsnl)",
    "Novatrice Technologies Private Limited",
    "Web Revolution",
    "Safal Infotech, Ahmadabad",
    "Technobright Solution, Ahmedabad",
    "Hexacode Technology",
    "Aurosoft Technologies",
    "C. M. Technologies",
    "Keen Softwares",
    "Softtech Infosys",
    "HORIZON TECHNOLOGY",
    "Novetrise Technologies Navarangpura",
    "Data Soft IT-Computer Solution",
    "Fourfox Infotech Pvt. Ltd.",
    "E-Miracle Solutions",
    "Atenssa Software",
    "SamayakInfotech Pvt. Ltd.",
    "Sai Info System India Ltd.",
    "Sarjen System Pvt. Ltd.",
    "Tatvasoft",
    "Virmati Software & Telecommunications Ltd.",
    "Deal Insight Tech Pvt. Ltd.",
    "Cyberthink Info Tech Pvt. Ltd.",
    "Gateway Technolabs",
    "Fourth Media Technologies Pvt. Ltd.",
    "Verve System Pvt. Ltd.",
    "Cyberdesign Pvt. Ltd",
    "Cignex Technologies Pvt. Ltd.",
    "Byte Technosys Pvt. Ltd.",
    "Silicon Valley Info Media Ltd.",
    "Cygnet Infotech Pvt. Ltd.",
    "Digi Corp Information Systems Pvt.",
    "Silver Touch Technologies Ltd.",
    "Sanskrut Software Systems Pvt. Ltd.",
    "Innova System (India) Pvt.Ltd.",
    "Krutarth Infosys",
    "Ellite Core Technologies Ltd.",
    "Prismetric Technologies",
    "Anant softech Pvt. Ltd.",
    "High Tech IT Solution",
    "Silver Touch Technologies Pvt. Ltd.",
    "Height8 Technologies Pvt. Ltd.",
    "Nirma",
    "Intech Creative Services Pvt. Ltd",
    "Touch4support",
    "Watsar Infotech Pvt. Ltd.",
    "Crosshore",
    "Zaptech Solution",
    "E-Clinical Work",
    "Waytoweb Pvt. Ltd.",
    "Tax Tech. India Pvt. Ltd.",
    "Quarcks System",
    "Creart Solution Pvt. Ltd.",
  ];

//   return (
//     <section className="bg-white py-12">
//       <div className="container mx-auto px-6 max-w-6xl">

//         {/* Page Heading */}
//         <div className="text-center mb-10">

//           <h1 className="text-4xl font-bold text-blue-950 mb-4">
//             List of Companies
//           </h1>

//           <h2 className="text-3xl font-bold text-blue-900 mb-3">
//             Department of Computer Engineering
//           </h2>

//           <h3 className="text-xl font-semibold text-gray-700 mb-2">
//             Technology - That Touches Future Generation!
//           </h3>

//           <p className="text-lg text-gray-600">
//             Smt. S. R. Patel Engineering College- Dabhi (Unjha)
//           </p>

//         </div>

//         {/* Industrial Interaction */}
//         <div className="mt-8">

//           <h2 className="text-3xl font-bold text-blue-950 border-b-4 border-blue-900 pb-3 mb-8">
//             Industrial Interaction
//           </h2>

//           {/* Company List */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

//             {companies.map((company, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-50 border border-gray-200 rounded-lg px-5 py-4
//                            text-gray-700 shadow-sm
//                            hover:bg-blue-50 hover:border-blue-900
//                            hover:text-blue-900 transition"
//               >
//                 <div className="flex items-start gap-3">

//                   <span className="font-bold text-blue-900 min-w-[28px]">
//                     {index + 1}.
//                   </span>

//                   <span>
//                     {company}
//                   </span>

//                 </div>
//               </div>
//             ))}

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

 return (
    <main className="min-h-screen bg-white">

      {/* Header */}
      <section className="bg-blue-950 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-4xl font-bold mb-4">
            Industrial Interaction
          </h1>

          <h2 className="text-2xl font-semibold mb-3">
            Department of Computer Engineering
          </h2>

          <h3 className="text-xl mb-2">
            Technology - That Touches Future Generation!
          </h3>

          <p className="text-lg">
            Smt. S. R. Patel Engineering College - Dabhi (Unjha)
          </p>

        </div>
      </section>

      {/* Companies */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-blue-950 mb-8 border-b-4 border-red-700 pb-3">
            Industrial Interaction
          </h2>

          <div className="overflow-x-auto shadow-lg rounded-lg">

            <table className="w-full border-collapse">

              <thead>
                <tr className="bg-red-700 text-white">
                  <th className="text-left px-6 py-4 text-lg">
                    Sr. No.
                  </th>

                  <th className="text-left px-6 py-4 text-lg">
                    Company / Organization
                  </th>
                </tr>
              </thead>

              <tbody>

                {companies.map((company, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-100 transition"
                  >

                    <td className="px-6 py-3 text-gray-700 font-medium w-24">
                      {index + 1}
                    </td>

                    <td className="px-6 py-3 text-gray-700">
                      {company}
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>
      </section>

    </main>
  );
}