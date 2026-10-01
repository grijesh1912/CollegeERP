import Image from "next/image";

export default function Transportation() {
  const routes = [
    {
      no: 1,
      route:
        "Mehasana To College Campus (Modhera / Radhanpur / Ramosana Cross Road)",
      amount: "18000/-",
    },
    {
      no: 2,
      route:
        "Patan To College Campus (Padambath Chokdi, S.K. Tower, T.B. Three Road, University Road, Siddhpur Char Rasta, Unjha Tree Road, Balisna)",
      amount: "18000/-",
    },
    {
      no: 3,
      route:
        "Palanpur To College Campus (Palanpur Kirti-Sthambh, Lal Banglows, S.T. Colony, Aroma Circle, Green Park, Jagana, Chappi, Kanodar)",
      amount: "30000/-",
    },
    {
      no: 4,
      route:
        "Deesa To College Campus (Gaytri Mandir, Jalaram Mandir, Sardar Patel Garden Circle, Bataka Circle)",
      amount: "35000/-",
    },
    {
      no: 5,
      route: "Siddhpur Highway To College Campus",
      amount: "25000/-",
    },
    {
      no: 6,
      route:
        "Unjha to College Campus (Visnager Cross Road, Umiya Mata, Gandhi Chowk, APMC Circle)",
      amount: "10000/-",
    },
    {
      no: 7,
      route:
        "Visnagar to College Campus (Visnagar Bus Stop, Kansa Chokdi, Valam)",
      amount: "19000/-",
    },
    {
      no: 8,
      route:
        "Chansama to College Campus (Chansama Bus Stop, Dhinoj, Lannva)",
      amount: "20000/-",
    },
    {
      no: 9,
      route: "Khralu to College Campus (Khralu Bus Stop, Khoda)",
      amount: "30000/-",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-blue-900 mb-10">
          Transportation
        </h1>

        {/* Image + Description */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-12">

          {/* LEFT SIDE IMAGE */}
          <div className="w-full md:w-1/2">
            <Image
              src="/images/bus.jpg"
              alt="Transportation"
              width={700}
              height={450}
              className="w-full h-[300px] md:h-[380px] object-cover rounded-xl border-4 border-blue-900"
            />
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="w-full md:w-1/2">
            <p className="text-gray-700 text-base leading-7 text-justify">
              Transportation facility from Unjha and nearby places to college
              campus is made available to students. College also provides free
              transport facilities during various occasions like industrial
              visits, technical events, participation in sports or cultural
              competitions etc.
            </p>
          </div>

        </div>

        {/* Transportation Table */}
        <div className="overflow-x-auto">

          <table className="w-full border-collapse border border-gray-300">

            <thead>
              <tr className="bg-red-900 text-white">

                <th className="border border-gray-300 px-4 py-3 text-center">
                  Sr. No.
                </th>

                <th className="border border-gray-300 px-4 py-3 text-left">
                  Bus Route (Round Trip)
                </th>

                <th className="border border-gray-300 px-4 py-3 text-center">
                  Amount (Rs) Per Year
                </th>

              </tr>
            </thead>

            <tbody>
              {routes.map((item) => (
                <tr
                  key={item.no}
                  className="hover:bg-blue-50 transition"
                >

                  <td className="border border-gray-300 px-4 py-3 text-center">
                    {item.no}
                  </td>

                  <td className="border border-gray-300 px-4 py-3 text-gray-700">
                    {item.route}
                  </td>

                  <td className="border border-gray-300 px-4 py-3 text-center font-semibold">
                    {item.amount}
                  </td>

                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </div>
    </section>
  );
}