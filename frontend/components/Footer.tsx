// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white p-8 mt-10">
//       <div className="text-center">
//         <h2 className="text-lg font-semibold">
//           Smt. S R Patel Engineering College
//         </h2>

//         <p>Affiliated to GTU | Approved by AICTE</p>

//         <p className="mt-2">
//           © 2026 All Rights Reserved
//         </p>
//       </div>
//     </footer>
//   );
// }



"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const isContactPage = pathname === "/contact";

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-8">

        <div
          className={
            isContactPage
              ? "flex flex-col md:flex-row items-center md:items-start justify-between gap-8"
              : "text-center"
          }
        >

          {/* CONTACT DETAILS - ONLY CONTACT PAGE */}
          {isContactPage && (
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-3">
                CONTACT US
              </h3>

              <p className="text-sm mb-2">
                Unjha Patan Road, Unjha - 384170, Gujarat
              </p>

              <p className="text-sm mb-2">
                ☎ +91 9825048617
              </p>

              <p className="text-sm">
                ✉ info@srpec.org
              </p>
            </div>
          )}

          {/* EXISTING FOOTER CONTENT */}
          <div
            className={
              isContactPage
                // ? "text-center md:text-right"
                ? "text-center absolute left-1/2 -translate-x-1/2"
                : "text-center"
            }
          >
            <p className="font-bold">
              Smt. S R Patel Engineering College
            </p>

            <p>
              Affiliated to GTU | Approved by AICTE
            </p>

            <p className="mt-2">
              © 2026 All Rights Reserved
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}