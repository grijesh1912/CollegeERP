// export default function Hero() {
//   return (
//     <section className="bg-blue-100 py-24">
//       <div className="container mx-auto text-center">
//         <h1 className="text-5xl font-bold text-blue-900">
//           Welcome to Smt. S R Patel Engineering College
//         </h1>

//         <p className="mt-6 text-xl">
//           Excellence in Engineering Education
//         </p>

//         <button className="mt-8 bg-blue-900 text-white px-6 py-3 rounded-lg">
//           Apply Now
//         </button>
//       </div>
//     </section>
//   );
// }











// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section className="relative h-[80vh]">

//       <Image
//         src="/campus.jpg"
//         alt="Campus"
//         fill
//         className="object-cover"
//       />

//       <div className="absolute inset-0 bg-black/60" />

//       <div className="absolute inset-0 flex items-center justify-center">

//         <div className="text-center text-white">

//           <h1 className="text-5xl md:text-7xl font-bold">
//             Welcome To
//           </h1>

//           <h2 className="text-3xl md:text-5xl mt-4">
//             Smt. S R Patel Engineering College
//           </h2>

//           <p className="mt-6 text-xl">
//             Excellence In Education, Research & Innovation
//           </p>

//           <button className="mt-8 bg-yellow-500 px-8 py-3 rounded-lg font-semibold">
//             Apply Now
//           </button>

//         </div>

//       </div>

//     </section>
//   );
// }


















"use client";

import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <section className="relative h-[50vh]">

        <Image
          src="/campus.jpg"
          alt="Campus"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute inset-0 flex items-center justify-center">

          <div className="text-center text-white">

            <h1 className="text-5xl md:text-7xl font-bold">
              Welcome To
            </h1>

            <h2 className="text-3xl md:text-5xl mt-4">
              Smt. S. R. Patel Engineering College
            </h2>

            <p className="mt-6 text-xl">
              Excellence In Education, Research & Innovation
            </p>

            <button
              onClick={() => setShowForm(true)}
              className="mt-8 bg-red-700 hover:bg-blue-600 text-black px-8 py-3 rounded-lg font-semibold transition"
            >
              Apply Now
            </button>

          </div>

        </div>

      </section>

      {/* Apply Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">

          <div className="bg-white w-full max-w-lg rounded-xl overflow-hidden shadow-2xl relative">

            {/* Header */}
            <div className="bg-red-600 text-white text-center py-5">

              <button
                onClick={() => setShowForm(false)}
                className="absolute right-4 top-3 text-3xl font-bold"
              >
                ×
              </button>

              <h2 className="text-3xl font-bold">
                Apply Now
              </h2>

              <p className="mt-2 text-lg">
                Up to 25% Early Bird Discount on Programme Fee
              </p>

            </div>

            {/* Form */}
            <form className="p-6 space-y-4">

              <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-300 rounded-lg p-3"
              />

              <input
                type="email"
                placeholder="Email Id"
                className="w-full border border-gray-300 rounded-lg p-3"
              />

              <input
                type="text"
                placeholder="Mobile No."
                className="w-full border border-gray-300 rounded-lg p-3"
              />

              <select className="w-full border border-gray-300 rounded-lg p-3">
                <option>Select Highest Qualification</option>
                <option>12th Science</option>
                <option>Diploma</option>
              </select>

              <select className="w-full border border-gray-300 rounded-lg p-3">
                <option>Select Course</option>
                <option>B.E. Computer Engineering</option>
                <option>B.E. Mechanical Engineering</option>
                <option>B.E. Civil Engineering</option>
                <option>B.E. EC Engineering</option>
              </select>

              <div className="flex items-start gap-3">

                <input
                  type="checkbox"
                  className="mt-1"
                />

                <p className="text-sm text-gray-600">
                  By clicking on submit I allow Smt. S. R. Patel Engineering
                  College to send programme communication on email, SMS and
                  WhatsApp.
                </p>

              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold text-lg"
              >
                Submit
              </button>

            </form>

          </div>

        </div>
      )}
    </>
  );
}