// export default function Navbar() {
//   return (
//     <nav className="bg-blue-900 text-white p-4">
//       <div className="container mx-auto flex justify-between">
//         <h1 className="text-xl font-bold">Smt. S R Patel Engineering College</h1>

//         <ul className="flex gap-6">
//           <li><a href="/">Home</a></li>
//           <li><a href="/about">About</a></li>
//           <li><a href="/departments">Departments</a></li>
//           <li><a href="/admissions">Admissions</a></li>
//           <li><a href="/placements">Placements</a></li>
//           <li><a href="/contact">Contact</a></li>
//         </ul>
//       </div>
//     </nav>
//   );
// }












// "use client";

// import Link from "next/link";
// import { Menu } from "lucide-react";
// import { useState } from "react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="sticky top-0 z-50 bg-white shadow-md">
//       <div className="container mx-auto flex items-center justify-between px-4 py-4">

//         <div>
//           <h1 className="text-xl font-bold text-blue-900">
//             Smt. S R Patel Engineering College
//           </h1>
//         </div>

//         <div className="hidden md:flex gap-6 font-medium">

//           {/* <Link href="/">Home</Link> */}
//           <Link href="/about">About US</Link>
//           <Link href="/collegeinfo">College Info</Link>
//           <Link href="/People">People</Link>
//           <Link href="/Resources">Resources</Link>
//           <Link href="/Academics">Academics</Link>
//           <Link href="/departments">Departments</Link>
//           <Link href="/admissions">Admissions</Link>
//           <Link href="/placements">Placements</Link>
//           <Link href="/Event">Event</Link>
//           <Link href="/Result">Result</Link>
//           <Link href="/contact">Contact</Link>      

//         </div>

//         <button
//           onClick={() => setOpen(!open)}
//           className="md:hidden"
//         >
//           <Menu />
//         </button>
//       </div>

//       {open && (
//         <div className="md:hidden bg-white border-t">

//           <div className="flex flex-col p-4 gap-3">

//           {/* <Link href="/">Home</Link> */}
//           <Link href="/about">About US</Link>
//           <Link href="/collegeinfo">College Info</Link>
//           <Link href="/People">People</Link>
//           <Link href="/Resources">Resources</Link>
//           <Link href="/Academics">Academics</Link>
//           <Link href="/departments">Departments</Link>
//           <Link href="/admissions">Admissions</Link>
//           <Link href="/placements">Placements</Link>
//           <Link href="/Event">Event</Link>
//           <Link href="/Result">Result</Link>
//           <Link href="/contact">Contact</Link>  

//           </div>

//         </div>
//       )}
//     </nav>
//   );
// }











"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    // <nav className="sticky top-0 z-50 bg-white text-slate-800 shadow-md border-b border-slate-200">
      <nav className="sticky top-0 z-50 bg-white border-b-4 border-red-700 shadow-md">
      {/* Navbar */}
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">

        {/* College Name */}
        {/* <div>
          <h1 className="text-sm md:text-base lg:text-lg font-bold leading-tight">
            SMT. S.R. PATEL ENGINEERING COLLEGE
          </h1>
        </div> */}

        <div className="flex items-center">
          <Image
            src="/logo1.png"
            alt="SRPEC Logo"
            width={80}
            height={25}
            className="object-contain"
            priority
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 text-[14px] font-medium">

          {/* ABOUT US */}
          <div className="relative group">

        <button className="font-semibold text-slate-800 py-6 hover:text-blue-600 transition">
          ABOUT US
        </button>

        <div
          className="
            absolute
            left-0
            top-full
            w-56
            bg-red-800
            shadow-xl
            hidden
            group-hover:block
            z-50
          "
        >
          <Link
            href="/about?tab=trust"
            className="block px-4 py-3 text-white hover:bg-blue-800"
          >
            ABOUT TRUST
          </Link>

          <Link
            href="/about?tab=college"
            className="block px-4 py-3 text-white hover:bg-blue-800"
          >
            ABOUT COLLEGE
          </Link>

          <Link
            href="/about?tab=chairman"
            className="block px-4 py-3 text-white hover:bg-blue-800"
          >
            CHAIRMAN
          </Link>

          <Link
            href="/about?tab=principal"
            className="block px-4 py-3 text-white hover:bg-blue-800"
          >
            PRINCIPAL
          </Link>

          <Link
            href="/about?tab=governance"
            className="block px-4 py-3 text-white hover:bg-blue-800"
          >
            GOVERNANCE
          </Link>
        </div>

      </div>

          {/* COLLEGE INFO */}
<div className="relative group">

  <button className="font-semibold text-slate-800 py-6 uppercase hover:text-blue-600 transition">
    COLLEGE INFO
  </button>

  {/* Invisible bridge */}
  <div className="absolute left-0 top-full h-3 w-full"></div>

  <div
    className="
      absolute
      left-0
      top-full
      bg-red-800
      min-w-[180px]
      shadow-xl
      hidden
      group-hover:block
      z-50
    "
  >

    <Link
      href="/college-info?tab=surjan"
      className="block px-3 py-2 text-sm text-white border-b border-blue-800 hover:bg-blue-800"
    >
      <span className="font-semibold">SURJAN</span>
      <br />
      <span className="text-sm">THE INSTITUTE SOUVENIR</span>
    </Link>

    <Link
      href="/college-info?tab=prabhas"
      className="block px-3 py-2 text-sm text-white border-b border-blue-800 hover:bg-blue-800"
    >
      <span className="font-semibold">PRABHAS</span>
      <br />
      <span className="text-sm">THE MONTHLY NEWS LETTER</span>
    </Link>

    <Link
      href="/college-info?tab=calendar"
      className="block px-3 py-2 text-sm text-white border-b border-blue-800 hover:bg-blue-800"
    >
      ACADEMIC CALENDAR
    </Link>

    <Link
      href="/college-info?tab=gallery"
      className="block px-3 py-2 text-sm text-white border-b border-blue-800 hover:bg-blue-800"
    >
      PHOTO GALLERY
    </Link>

    {/* REVIEW */}
    <div className="relative group/review">

      <div className="flex justify-between items-center px-3 py-2 text-sm text-white hover:bg-blue-800 cursor-pointer border-t border-blue-800">
        REVIEW
        <span>▶</span>
      </div>

      {/* Submenu bridge */}
      <div className="absolute left-full top-0 w-3 h-full"></div>

      <div
        className="
          absolute
          left-full
          top-0
          bg-red-800
          min-w-[180px]
          shadow-xl
          hidden
          group-hover/review:block
          z-50
        "
      >

        <Link
          href="/college-info?tab=alumni"
          className="block px-3 py-2 text-sm text-white border-b border-blue-800 hover:bg-blue-800"
        >
          ALUMNI REVIEW
        </Link>

        <Link
          href="/college-info?tab=student"
          className="block px-3 py-2 text-sm text-white border-b border-blue-800 hover:bg-blue-800"
        >
          STUDENT REVIEW
        </Link>

        <Link
          href="/college-info?tab=parents"
          className="block px-3 py-2 text-sm text-white border-b border-blue-800 hover:bg-blue-800"
        >
          PARENTS REVIEW
        </Link>

        <Link
          href="/college-info?tab=industry"
          className="block px-3 py-2 text-sm text-white hover:bg-blue-800"
        >
          INDUSTRY REVIEW
        </Link>

      </div>

    </div>

  </div>

</div>

          {/* <button className="font-semibold text-slate-800 py-6 uppercase hover:text-blue-600 transition">
            PEOPLE
          </button> */}

          {/* <button className="font-semibold text-slate-800 py-6 uppercase hover:text-blue-600 transition">
            RESOURCES
          </button> */}
          {/* RESOURCES MEGA MENU */}
<div className="relative group">

  <button className="font-semibold text-slate-800 py-6 uppercase hover:text-blue-600 transition">
    RESOURCES
  </button>

  {/* Mega Menu */}
  <div
    className="
      absolute
      left-1/2
      -translate-x-1/2
      top-full
      hidden
      group-hover:block
      z-50
      w-[850px]
      bg-white
      shadow-2xl
      border-t-4
      border-red-700
    "
  >

    <div className="grid grid-cols-3">

      {/* COLUMN 1 */}
      <div className="border-r border-gray-200">

        <Link
          href="/resources/library"
          className="
            block
            px-6
            py-5
            bg-red-700
            text-white
            font-bold
            hover:bg-blue-800
            transition
          "
        >
          LIBRARY & KNOWLEDGE CENTER
        </Link>

        <Link
          href="/resources/seminar-auditorium"
          className="
            block
            px-6
            py-5
            bg-red-700
            text-white
            font-bold
            hover:bg-blue-800
            border-t
            border-blue-900
            transition
          "
        >
          SEMINAR & AUDITORIUM
        </Link>

      </div>


      {/* COLUMN 2 */}
      <div className="border-r border-gray-200">

        <div className="px-6 py-4 bg-red-700 text-white font-bold">
          STUDENT CORNER
        </div>

        <Link
          href="/resources/student/beyond-classroom"
          className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-700 transition"
        >
          Beyond Classroom
        </Link>

        <Link
          href="/resources/student/motivational-training"
          className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-700 transition"
        >
          Motivational Training
        </Link>

        <Link
          href="/resources/student/personal-counselling"
          className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-700 transition"
        >
          Personal Counselling
        </Link>

        <Link
          href="/resources/student/cdc-activities"
          className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-700 transition"
        >
          CDC Activities
        </Link>

        <Link
          href="/resources/student/training-placement"
          className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-700 transition"
        >
          Training & Placement Activities
        </Link>

        <Link
          href="/resources/student/gate-classes"
          className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-700 transition"
        >
          GATE Classes
        </Link>

        <Link
          href="/resources/student/competitive-examinations"
          className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-700 transition"
        >
          Competitive Examinations
        </Link>

      </div>


      {/* COLUMN 3 */}
      <div>

        <div className="px-6 py-4 bg-red-700 text-white font-bold">
          CAMPUS SERVICES
        </div>
        
        <Link
          href="/resources/campus/classroom"
          className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-700 transition"
        >
          Classroom
        </Link>
        <Link
          href="/resources/campus/hostel"
          className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-700 transition"
        >
          Hostel
        </Link>
        <Link
          href="/resources/campus/canteen"
          className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-700 transition"
        >
          Canteen
        </Link>
        <Link
          href="/resources/campus/transportation"
          className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-700 transition"
        >
          Transportation
        </Link>

        <Link
          href="/resources/campus/scholarships"
          className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-700 transition"
        >
          Scholarships
        </Link>

        <Link
          href="/resources/campus/anti-ragging"
          className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-700 transition"
        >
          Anti-Ragging Cell
        </Link>

        {/* <Link
          href="/resources/campus/grievance"
          className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-700 transition"
        >
          Grievance Cell
        </Link> */}
        <Link
          href="/resources/campus/student-store"
          className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-700 transition"
        >
          Student Store
        </Link>
        <Link
        href="/resources/campus/sports-ground"
          className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-700 transition"
        >
          Sports Ground
        </Link>

        <Link
          href="/resources/campus/womens-development"
          className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-700 transition"
        >
          Women's Development
        </Link>
        <Link
          href="/resources/campus/guesthouse"
          className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-700 transition"
        >
          Guest House
        </Link>

      </div>

    </div>
  </div>

</div>

          <div className="relative group">

  <button className="font-semibold text-slate-800 py-6 uppercase hover:text-blue-600 transition">
    ACADEMICS
  </button>

  <div
    className="
      absolute
      left-0
      top-full
      bg-red-800
      min-w-[260px]
      shadow-xl
      hidden
      group-hover:block
      z-50
    "
  >

    <Link
      href="/academics?tab=be"
      className="block px-5 py-4 text-white border-b border-blue-800 hover:bg-blue-800 font-semibold"
    >
      BACHELOR OF ENGINEERING
    </Link>

    {/* <Link
      href="/academics?tab=me"
      className="block px-5 py-4 text-white hover:bg-blue-800 font-semibold"
    >
      MASTER OF ENGINEERING
    </Link> */}

  </div>

</div>

          {/* <button className="font-semibold text-slate-800 py-6 uppercase hover:text-blue-600 transition">
            DEPARTMENTS
          </button> */}
          {/* DEPARTMENTS */}
          {/* DEPARTMENTS */}
<Link
  href="/departments"
  className="font-semibold text-slate-800 py-6 uppercase hover:text-blue-600 transition"
>
  DEPARTMENTS
</Link>
{/* <div className="relative group">

  <button className="font-semibold text-slate-800 py-6 uppercase hover:text-blue-600 transition">
    DEPARTMENTS
  </button>

  <div
    className="
      absolute
      left-0
      top-full
      w-72
      bg-blue-950
      shadow-xl
      hidden
      group-hover:block
      z-50
    "
  >

    <Link
      href="/departments?dept=computer"
      className="block px-4 py-3 text-white hover:bg-blue-800 border-b"
    >
      Computer Engineering
    </Link>

    <Link
      href="/departments?dept=civil"
      className="block px-4 py-3 text-white hover:bg-blue-800 border-b"
    >
      Civil Engineering
    </Link>

    <Link
      href="/departments?dept=mechanical"
      className="block px-4 py-3 text-white hover:bg-blue-800 border-b"
    >
      Mechanical Engineering
    </Link>

    <Link
      href="/departments?dept=ec"
      className="block px-4 py-3 text-white hover:bg-blue-800"
    >
      Electronics & Communication Engineering
    </Link> */}
   {/* </div> */}

{/* </div> */}




    {/* <Link href="/departments?dept=computer">
  Computer Engineering
</Link>

<Link href="/departments?dept=civil">
  Civil Engineering
</Link>

<Link href="/departments?dept=mechanical">
  Mechanical Engineering
</Link>

<Link href="/departments?dept=ec">
  Electronics & Communication Engineering
</Link> */}

  

          {/* <button className="font-semibold text-slate-800 py-6 uppercase hover:text-blue-600 transition">
            ADMISSIONS
          </button> */}

          {/* <button className="font-semibold text-slate-800 py-6 uppercase hover:text-blue-600 transition">
            PLACEMENTS
          </button> */}
          {/* PLACEMENT DROPDOWN */}
<div className="relative group">

  {/* PLACEMENT */}
  <button className="font-semibold hover:text-blue-600 transition">
    PLACEMENT
  </button>

  {/* Dropdown Wrapper */}
  <div
    className="
      absolute
      top-full
      right-0
      pt-4
      w-[850px]
      z-50
      hidden
      group-hover:block
    "
  >

    {/* Actual Dropdown */}
    <div className="bg-white shadow-2xl border-t-4 border-red-700 grid grid-cols-[285px_285px_280px]">

      {/* ================= LEFT ================= */}
      <div className="border-r border-gray-300">

        {/* MOU */}
        <div className="bg-red-700 text-white px-6 py-5">
          <h3 className="font-bold text-sm">
            MOU COMPANIES
          </h3>
          <a
            href="/placement/mou-companies.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3 text-white hover:text-blue-300 transition"
          >
            See More →
          </a>
          {/* <a
            href="/placement/mou-companies.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-sm font-semibold hover:text-blue-600 hover:underline transition"
          >
            See More →
          </a> */}
        </div>


        {/* PLACEMENT ACTIVITIES */}
        <div className="bg-red-700 text-white px-6 py-5 border-t border-red-600">
          <h3 className="font-bold text-sm">
            PLACEMENT ACTIVITIES
          </h3>
            <a
              href="/placement/placement-activities.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-3 text-white hover:text-blue-300 transition"
            >
              See More →
            </a>
          {/* <a
            href="/placement/placement-activities.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-sm font-semibold hover:text-blue-600 hover:underline transition"
          >
            See More →
          </a> */}
        </div>


        {/* OUR RECRUITERS */}
        <div className="bg-red-700 text-white px-6 py-5 border-t border-red-600">
          <h3 className="font-bold text-sm">
            OUR RECRUITERS
          </h3>
            <a
              href="/placement/our-recruiters.JPG"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-3 text-white hover:text-blue-300 transition"
            >
              See More →
            </a>
          {/* <a
            href="/placement/our-recruiters.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-sm font-semibold hover:text-blue-600 hover:underline transition"
          >
            See More →
          </a> */}
        </div>

      </div>


      {/* ================= MIDDLE ================= */}
      <div className="border-r border-gray-300">

        <div className="bg-red-700 text-white px-6 py-5">
          <h3 className="font-bold text-sm">
            INDUSTRIAL INTERACTIONS
          </h3>
        </div>

        <div className="bg-white">

          <a
            href="/placement/industrial/computer-engineering.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-6 py-5 text-gray-700 hover:bg-gray-100"
          >
            <Link
            href="/placements/industrial-interactions/computer-engineering"
            className="block px-6 py-3 text-gray-700 hover:text-blue-700 transition"
          >
            Computer Engineering
          </Link>
          </a>

          <a
            href="/placement/industrial/civil-engineering.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-6 py-5 text-gray-700 hover:bg-gray-100"
          >
            <Link
            href="/placements/industrial-interactions/civil-engineering"
            className="block px-6 py-3 text-gray-700 hover:text-blue-700 transition"
          >
            Civil Engineering
          </Link>
          </a>

          <a
            href="/placement/industrial/mechanical-engineering.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-6 py-5 text-gray-700 hover:bg-gray-100"
          >
            
            <Link
              href="/placements/industrial-interactions/mechanical-engineering"
              className="block px-6 py-3 text-gray-700 hover:text-blue-700 transition"
            >
              Mechanical Engineering
            </Link>
          </a>

          <a
            href="/placement/industrial/electronics-communication-engineering.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-6 py-5 text-gray-700 hover:bg-gray-100"
          >
            
            <Link
            href="/placements/industrial-interactions/electronics & communication-engineering"
            className="block px-6 py-3 text-gray-700 hover:text-blue-700 transition"
          >
            Electronics & Communication Engineering
          </Link>
          </a>

        </div>

      </div>


      {/* ================= RIGHT ================= */}
      <div>

        <div className="bg-red-700 text-white px-6 py-5">
          <h3 className="font-bold text-sm">
            PLACEMENT INFORMATION
          </h3>
        </div>

        <div className="bg-white">

          <a
            href="/placement/placement-policy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-6 py-5 text-gray-700 hover:bg-gray-100"
          >
            Placement Policy
          </a>

          <a
            href="/placement/placement-statistics.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-6 py-5 text-gray-700 hover:bg-gray-100"
          >
            Placement Statistics
          </a>

          <a
            href="/placement/placement-brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-6 py-5 text-gray-700 hover:bg-gray-100"
          >
            Placement Brochure
          </a>

          <a
            href="/placement/placement-brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-6 py-5 text-gray-700 hover:bg-gray-100"
          >
            <Link
            href="/placements/students"
            className="block px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-700 transition"
          >
            Placed Students
          </Link>
          </a>

        </div>

      </div>

    </div>

  </div>

</div>

          <button className="font-semibold text-slate-800 py-6 uppercase hover:text-blue-600 transition">
            EVENT
          </button>

          <button className="font-semibold text-slate-800 py-6 uppercase hover:text-blue-600 transition">
            <Link
              href="/result"
              className="font-semibold text-slate-800 hover:text-blue-600 transition"
            >
              RESULT
            </Link>
          </button>

        <Link
          href="/contact"
          className="font-semibold text-slate-800 py-6 uppercase hover:text-blue-600 transition"
        >
          CONTACT
        </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        // <div className="lg:hidden bg-blue-900 border-t border-blue-800">
        <div className="lg:hidden bg-white border-t border-slate-200">

          <div className="flex flex-col p-4 text-sm">

            <Link href="/about" className="py-2 font-semibold">
              ABOUT US
            </Link>

            <div className="pl-4">

              <Link
                href="/about/trust"
                className="block py-2"
              >
                ABOUT TRUST
              </Link>

              <Link
                href="/about/college"
                className="block py-2"
              >
                ABOUT COLLEGE
              </Link>

              <Link
                href="/about/chairman"
                className="block py-2"
              >
                CHAIRMAN
              </Link>

              <Link
                href="/about/principal"
                className="block py-2"
              >
                PRINCIPAL
              </Link>

              <Link
                href="/about/governance"
                className="block py-2"
              >
                GOVERNANCE
              </Link>

            </div>

            <Link href="/college-info" className="py-2">
              COLLEGE INFO
            </Link>

            <Link href="/people" className="py-2">
              PEOPLE
            </Link>

            <Link href="/resources" className="py-2">
              RESOURCES
            </Link>

            <Link href="/academics" className="py-2">
              ACADEMICS
            </Link>

            <Link href="/departments" className="py-2">
              DEPARTMENTS
            </Link>

            <Link href="/admissions" className="py-2">
              ADMISSIONS
            </Link>

            <Link href="/placements" className="py-2">
              PLACEMENTS
            </Link>

            <Link href="/event" className="py-2">
              EVENT
            </Link>

            <Link href="/result" className="py-2">
              RESULT
            </Link>

            <Link href="/contact" className="py-2">
              CONTACT
            </Link>

          </div>

        </div>
      )}

    </nav>
  );
}








