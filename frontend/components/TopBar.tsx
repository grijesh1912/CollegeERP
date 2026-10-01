// export default function TopBar() {
//   return (
//     <div className="bg-blue-900 text-white">

//       <div className="container mx-auto flex justify-between px-4 py-2 text-sm">

//         <div>
//           Approved by AICTE | Affiliated to GTU
//         </div>

//         <div>
//           admissions@college.edu
//         </div>

//       </div>

//     </div>
//   );
// }











// export default function TopBar() {
// return ( <div className="bg-blue-900 text-white"> <div className="container mx-auto flex justify-between px-4 py-2 text-sm"> <div>
// Approved by AICTE | Affiliated to GTU </div>

//     <div>
//       admissions@college.edu
//     </div>
//   </div>
// </div>

// );
// }








// export default function TopBar() {
//   return (
//     <div className="bg-blue-900 text-white">
//       <div className="container mx-auto grid grid-cols-3 items-center px-4 py-3 text-sm">
        
//         <div className="text-left">
//           Approved by AICTE | Affiliated to GTU
//         </div>

//         <div className="text-center text-2xl font-bold text-yellow-300">
//           Smt. S R Patel Engineering College
//         </div>

//         <div className="text-right">
//           admissions@college.edu
//         </div>

//       </div>
//     </div>
//   );
// }



















export default function TopBar() {
  return (
    <div className="h-[28px] bg-red-800 text-white text-[12px]">
      <div className="container mx-auto h-full px-5 flex items-center justify-between">
    {/* <div className="bg-slate-900 text-white border-b border-slate-700">
      <div className="container mx-auto grid grid-cols-3 items-center px-6 py-4"> */}

        {/* Left Side */}
        <div className="text-sm font-medium">
          Approved by AICTE | Affiliated to GTU
        </div>

        {/* College Name */}
        <div className="text-center">
          {/* <div className="text-2xl font-bold text-amber-400">
            Smt. S R Patel Engineering College
          </div> */}
         
          {/* <p className="text-xs text-slate-300 mt-1">
            Dabhi, Unjha Road, Visnagar, Gujarat
          </p> */}
        </div>

        {/* Right Side */}
        {/* <div className="text-right text-sm">
          <p>📧 admissions@college.edu   📞 +91 98765 43210</p>
        </div> */}
          <div className="text-right text-sm">
          <p className="flex justify-end items-center gap-6">
            <span>📧 admissions@college.edu</span>
            <span>📞 +91 9825048617</span>
          </p>
        </div>

      </div>
    </div>
  );
}