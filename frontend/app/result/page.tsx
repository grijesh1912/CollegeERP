// "use client";

// const winterResults = [
//   {
//     title: "Winter 1 Sem",
//     link: "/results/winter-1-sem.pdf",
//   },
//   {
//     title: "Winter 3 Sem",
//     link: "/results/winter-3-sem.pdf",
//   },
//   {
//     title: "Winter 5 Sem",
//     link: "/results/winter-5-sem.pdf",
//   },
//   {
//     title: "Winter 7 Sem",
//     link: "/results/winter-7-sem.pdf",
//   },
// ];

// const summerResults = [
//   {
//     title: "Summer 2 Sem",
//     link: "/results/summer-2-sem.pdf",
//   },
//   {
//     title: "Summer 4 Sem",
//     link: "/results/summer-4-sem.pdf",
//   },
//   {
//     title: "Summer 6 Sem",
//     link: "/results/summer-6-sem.pdf",
//   },
//   {
//     title: "Summer 8 Sem",
//     link: "/results/summer-8-sem.pdf",
//   },
// ];

// export default function ResultPage() {
//   return (
//     <section className="bg-gray-50 min-h-screen py-16">
//       <div className="container mx-auto px-6 max-w-6xl">

//         {/* Year */}
//         <h1 className="text-4xl font-bold text-blue-900 text-center mb-12">
//           2026
//         </h1>

//         {/* ================= WINTER ================= */}

//         <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">
//           Winter Semester
//         </h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">

//           {winterResults.map((result, index) => (
//             <a
//               key={index}
//               href={result.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="
//                 bg-white
//                 border
//                 border-gray-200
//                 rounded-xl
//                 shadow-md
//                 p-8
//                 text-center
//                 font-semibold
//                 text-gray-800
//                 hover:bg-blue-900
//                 hover:text-white
//                 hover:scale-105
//                 transition-all
//                 duration-300
//               "
//             >
//               {result.title}
//             </a>
//           ))}

//         </div>

//         {/* ================= SUMMER ================= */}

//         <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">
//           Summer Semester
//         </h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

//           {summerResults.map((result, index) => (
//             <a
//               key={index}
//               href={result.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="
//                 bg-white
//                 border
//                 border-gray-200
//                 rounded-xl
//                 shadow-md
//                 p-8
//                 text-center
//                 font-semibold
//                 text-gray-800
//                 hover:bg-blue-900
//                 hover:text-white
//                 hover:scale-105
//                 transition-all
//                 duration-300
//               "
//             >
//               {result.title}
//             </a>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }


"use client";

const years = Array.from({ length: 10 }, (_, i) => 2026 - i);

const winterSemesters = [
  "Winter 1 Sem",
  "Winter 3 Sem",
  "Winter 5 Sem",
  "Winter 7 Sem",
];

const summerSemesters = [
  "Summer 2 Sem",
  "Summer 4 Sem",
  "Summer 6 Sem",
  "Summer 8 Sem",
];

export default function ResultPage() {
  return (
    <section className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-6xl">

        {years.map((year) => (
          <div key={year} className="mb-8">

            {/* YEAR */}
            <h1 className="text-3xl font-bold text-blue-900 text-center mb-4">
              {year}
            </h1>

            {/* WINTER */}
            <h2 className="text-xl font-bold text-blue-900 mb-3">
              Winter Semester
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
              {winterSemesters.map((semester) => (
                <a
                  key={semester}
                  href={`/results/${year}-${semester
                    .toLowerCase()
                    .replaceAll(" ", "-")}.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    bg-red-700
                    border
                    border-gray-200
                    rounded-lg
                    shadow-sm
                    px-4
                    py-4
                    text-center
                    text-sm
                    font-semibold
                    text-gray-800
                    hover:bg-blue-900
                    hover:text-white
                    hover:scale-[1.02]
                    transition-all
                    duration-200
                  "
                >
                  {semester}
                </a>
              ))}
            </div>

            {/* SUMMER */}
            <h2 className="text-xl font-bold text-blue-900 mb-3">
              Summer Semester
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {summerSemesters.map((semester) => (
                <a
                  key={semester}
                  href={`/results/${year}-${semester
                    .toLowerCase()
                    .replaceAll(" ", "-")}.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    bg-red-700
                    border
                    border-gray-200
                    rounded-lg
                    shadow-sm
                    px-4
                    py-4
                    text-center
                    text-sm
                    font-semibold
                    text-gray-800
                    hover:bg-blue-900
                    hover:text-white
                    hover:scale-[1.02]
                    transition-all
                    duration-200
                  "
                >
                  {semester}
                </a>
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}