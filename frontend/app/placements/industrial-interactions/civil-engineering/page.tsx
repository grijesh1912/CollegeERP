export default function CivilEngineeringIndustrialInteraction() {
  const companies = [
    "M.S.Khurana Engineering, Ambavadi, Ahmedabad",
    "Ranjeet Buildcon Ltd, Ahmedabad",
    "KCT Consultancy Ltd., Ahmedabad",
    'Gujarat Water Supply Sewerage Board, "Jal Seva Bhavan", Gandhinagar',
    "Godrej Garden City, Ahmedabad",
    "Narmada Dem, Kevdiya Colony",
    "Indira Bridge, Ahmedabad",
    "Hot Mix Plant, Coba Circle, Ahmedabad",
    "Adani Port, Mundra",
    "J.K. Laxmi Cement Plant, Shirohi",
    "Gujarat Engineering Research Institute (GERI), Baroda",
    "Gujarat Water Supply Sewerage Board, Baroda",
    "Kandla Port, Gandhidham",
    "Radhe Galexy Pvt. Ltd, Patan",
    "State Water Data Centre, Gandhinagar",
    "Appolo Construction Co. Ltd., Ahmedabad",
    "Tirupati Sarjan Pvt. Ltd",
    "AJAY CONSTRUCTION PVT. LTD.",
    "Hardawar & Tools Machinery Project Pvt. Ltd.",
    "Vijay Gehlot & Associates, Deesa",
    "Rachna Construction Co., Ankleshwar",
    "Shree Umiya Construction Co., Mehsana",
    "Guru Developers, Palanpur",
    "Vikash Construction & Co, Patan",
    "Pyramid Design, Patan",
    "Nidhi Construction Co., Ahmedabad",
    "Maa Amba Developers, Patan",
    "Bhagwati Infrastructure, Ahmedabad",
    "Multimedia Consultant Pvt. Limited, Ahmedabad",
    "Ajay Engi-Infrastructure Pvt. Ltd., Mehsana",
    "Asian Tubes Limited, Ahmedabad",
    "Tecon Buildcon Pvt. Ltd., Ahmedabad",
    "Cengries Tiles Ltd, Ahmedabad",
    "Rajkamal Builders Infrastructure Pvt. Ltd, Ahmedabad",
    "Vijay M Mistry Construction Pvt. Ltd.",
    "KCT Consultancy Services",
    "Ashish Infrastructure & Estates Ltd.",
    "Sadbhav House",
    "Natraj Construction Company, Ahmedabad",
    "PSP Projects Pvt. Ltd., Ahmedabad",
    "Multimedia Pvt. Ltd.",
    "Avdhoot Construction Company, Ahmedabad",
    "Patel Infrastructure Pvt. Ltd., Ahmedabad",
  ];
return (
    <main className="min-h-screen bg-white">

      {/* Header */}
      <section className="bg-blue-950 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-4xl font-bold mb-4">
            Industrial Interaction
          </h1>

          <h2 className="text-2xl font-semibold mb-3">
            Department of Civil Engineering
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
//   return (
//     <section className="bg-white py-12">
//       <div className="container mx-auto px-6 max-w-6xl">

//         {/* ================= PAGE HEADER ================= */}

//         <div className="text-center mb-10">

//           <h1 className="text-4xl font-bold text-blue-950 mb-4">
//             Industrial Interaction
//           </h1>

//           <h2 className="text-3xl font-bold text-blue-900 mb-3">
//             Department of Civil Engineering
//           </h2>

//           <h3 className="text-xl font-semibold text-gray-700 mb-2">
//             Technology - That Builds future World!
//           </h3>

//           <p className="text-lg text-gray-600">
//             Smt. S. R. Patel Engineering College- Dabhi (Unjha)
//           </p>

//         </div>

//         {/* ================= INDUSTRIAL INTERACTION ================= */}

//         <div className="mt-8">

//           <h2 className="text-3xl font-bold text-blue-950 border-b-4 border-blue-900 pb-3 mb-8">
//             Industrial Interaction
//           </h2>

//           {/* Company List */}

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

//             {companies.map((company, index) => (
//               <div
//                 key={index}
//                 className="
//                   bg-gray-50
//                   border border-gray-200
//                   rounded-lg
//                   px-5 py-4
//                   text-gray-700
//                   shadow-sm
//                   hover:bg-blue-50
//                   hover:border-blue-900
//                   hover:text-blue-900
//                   transition
//                 "
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