"use client";

import Image from "next/image";
import { useState } from "react";

import type { Department, Lab } from "./data";

type Props = {
  department: Department;
};

export default function DepartmentPage({ department }: Props) {

  const [selectedLab, setSelectedLab] = useState<Lab | null>(null);

  return (
    <>
      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <div className="relative h-[250px]">

        <Image
          src="/campus.jpg"
          alt={department.title}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">

          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
            {department.title}
          </h1>

        </div>

      </div>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <section className="py-16">

        <div className="container mx-auto px-6">

          <div className="bg-white rounded-xl shadow-xl p-6 md:p-10">


            {/* =================================================
                ABOUT DEPARTMENT
            ================================================= */}

            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
              About Department
            </h2>

            <p className="text-lg text-gray-700 leading-9 text-justify">
              {department.about}
            </p>


            <hr className="my-10" />


            {/* =================================================
                VISION
            ================================================= */}

            <h2 className="text-3xl font-bold text-blue-900 mb-5">
              Vision
            </h2>

            <p className="text-lg leading-9 text-gray-700 text-justify">
              {department.vision}
            </p>


            <hr className="my-10" />


            {/* =================================================
                MISSION
            ================================================= */}

            <h2 className="text-3xl font-bold text-blue-900 mb-5">
              Mission
            </h2>

            <ul className="list-disc ml-8 text-lg leading-9 text-gray-700">

              {department.mission.map((item, idx) => (

                <li key={idx}>
                  {item}
                </li>

              ))}

            </ul>


            <hr className="my-10" />


            {/* =================================================
                PEO
            ================================================= */}

            <h2 className="text-3xl font-bold text-blue-900 mb-5">
              Program Educational Objectives (PEO)
            </h2>

            <ul className="list-disc ml-8 text-lg leading-9 text-gray-700">

              {department.peo.map((item, idx) => (

                <li key={idx}>
                  {item}
                </li>

              ))}

            </ul>


            <hr className="my-10" />


            {/* =================================================
                PSO
            ================================================= */}

            <h2 className="text-3xl font-bold text-blue-900 mb-5">
              Program Specific Outcomes (PSO)
            </h2>

            <ul className="list-disc ml-8 text-lg leading-9 text-gray-700">

              {department.pso.map((item, idx) => (

                <li key={idx}>
                  {item}
                </li>

              ))}

            </ul>


            <hr className="my-10" />


            {/* =================================================
                LABORATORIES
            ================================================= */}

            <h2 className="text-3xl font-bold text-blue-900 mb-5">
              Laboratories
            </h2>


            {/* 3 LABS IN ONE ROW ON DESKTOP */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {department.labs.map((lab) => (

                <div
                  key={lab.title}
                  onClick={() => setSelectedLab(lab)}
                  // className="
                  //   border
                  //   rounded-xl
                  //   p-5
                  //   shadow
                  //   hover:bg-blue-600
                  //   hover:text-white
                  //   cursor-pointer
                  //   transition
                  //   duration-300
                  // "
                  className="
                    bg-red-700
                    text-white
                    hover:bg-blue-600
                    transition
                    duration-300
                    p-6
                    rounded-xl
                    shadow-md
                    text-left
                  "
                >

                  {lab.title}

                </div>

              ))}

            </div>


            {/* =================================================
                SELECTED LAB DETAILS
            ================================================= */}

            {selectedLab && (

              <div className="mt-12 border rounded-xl shadow-lg p-6 md:p-8">

                <h2 className="text-3xl font-bold text-blue-900 mb-6">
                  {selectedLab.title}
                </h2>


                <Image
                  src={selectedLab.image}
                  alt={selectedLab.title}
                  width={900}
                  height={450}
                  className="
                    rounded-xl
                    mb-8
                    w-full
                    h-[300px]
                    md:h-[420px]
                    object-cover
                  "
                />


                <h3 className="text-2xl font-semibold mb-4">
                  Laboratory Experiments
                </h3>
                <p className="text-gray-700 text-base leading-7 text-justify mb-6 whitespace-pre-line">
                   {selectedLab.description}
                </p>

                <ul className="list-disc ml-8 space-y-2">

                  {selectedLab.experiments.map(
                    (exp, index) => (

                      <li key={index}>
                        {exp}
                      </li>

                    )
                  )}

                </ul>

              </div>

            )}


            <hr className="my-10" />


                    {/* =================================================
            FACULTY
        ================================================= */}

        <h2 className="text-3xl font-bold text-blue-900 mb-5">
          Faculty
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {department.faculty.map((f, idx) => (

            <div
              key={idx}
              className="
                bg-white
                rounded-xl
                p-5
                shadow-md
                hover:shadow-lg
                transition
                text-center
              "
            >

      {/* Faculty Photo */}
      <div className="flex justify-center mb-4">

        <img
          src={f.image}
          alt={f.name}
          className="
            w-28
            h-28
            rounded-full
            object-cover
            border-2
            border-red-200
          "
        />

      </div>

      {/* Faculty Name */}
      <h3 className="font-bold text-lg text-red-800">
        {f.name}
      </h3>

      {/* Post */}
      <p className="text-gray-500 mt-2">
        {f.post}
      </p>

      {/* Qualification */}
      {f.qualification && (
        <p className="text-gray-500 mt-2">
          {f.qualification}
        </p>
      )}

      {/* Email */}
      {f.email && (
        <p className="text-red-700 text-sm mt-2 break-all">
          {f.email}
        </p>
      )}

      {/* Branch */}
      <div className="mt-4">

        <span
          className="
            inline-block
            bg-gray-100
            text-gray-600
            text-xs
            font-semibold
            px-3
            py-1
            rounded-md
          "
        >
          {f.branch || department.title}
        </span>

      </div>

    </div>

  ))}

</div>


          </div>

        </div>

      </section>
    </>
  );
}