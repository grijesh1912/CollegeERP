"use client";

import { useSearchParams } from "next/navigation";

export default function AcademicsPage() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  return (
    <div className="p-10">

      {tab === "be" && (
        <>
          <h1 className="text-4xl font-bold mb-6 text-center">
            Bachelor of Engineering
          </h1>
        </>
      )}

      <div className="max-w-6xl mx-auto px-4 py-10">

  <div className="space-y-8 text-gray-700 leading-8 text-justify text-lg">

    <p>
      Urbanization is growing in India at an increasing pace requiring large basic amenities and infrastructure. A massive input of resources is required to strengthen, improve and enlarge the amenities and infrastructure.
    </p>

    <p>
      This calls for development of new technologies and judicious use of existing ones and where necessary, appropriate technology. Competent technocrats to plan, design, construct and maintain the constructions will also be required.
    </p>

    <p>
      It offers four years Graduate programs (UG) in Computer Engineering, Mechanical Engineering, Electronics & Communication Engineering & Civil Engineering .
    </p>

    <p>
      The Bachelor of Engineering programs offered by the institute are:
    </p>

    <div className="grid md:grid-cols-2 gap-6 mt-8">

      <div className="bg-blue-100 p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-blue-950">
          Computer Engineering
        </h3>
      </div>

      <div className="bg-blue-100 p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-blue-950">
          Civil Engineering
        </h3>
      </div>

      <div className="bg-blue-100 p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-blue-950">
          Mechanical Engineering
        </h3>
      </div>

      <div className="bg-blue-100 p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-blue-950">
          Electronics & Communication Engineering
        </h3>
      </div>

    </div>

  </div>

</div>

    </div>
  );
}