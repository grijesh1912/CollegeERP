export default function AntiRagging() {
  const committeeMembers = [
    {
      name: "Dr. Ami H. Shah",
      designation: "Principal",
      contact: "9727703817",
      email: "principal@srpec.org",
    },
    {
      name: "Mr. Sanjay Bhavsar",
      designation: "NGO, Viswagram",
      contact: "9426388234",
      email: "sanjaytula_viswagram@gmail.com",
    },
    {
      name: "Prof. Grijesh Nemiwal",
      designation: "Asst. Prof.",
      contact: "9352519669",
      email: "grijesh.comp@srpec.org",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-blue-900 mb-8">
          Anti Ragging Committee
        </h1>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full border-collapse border border-gray-300">

            <thead>
              <tr className="bg-red-900 text-white">

                <th className="border border-gray-300 px-4 py-3 text-left">
                  Name
                </th>

                <th className="border border-gray-300 px-4 py-3 text-left">
                  Designation
                </th>

                <th className="border border-gray-300 px-4 py-3 text-left">
                  Contact
                </th>

                <th className="border border-gray-300 px-4 py-3 text-left">
                  Email
                </th>

              </tr>
            </thead>

            <tbody>
              {committeeMembers.map((member, index) => (
                <tr
                  key={index}
                  className="hover:bg-blue-50 transition"
                >

                  <td className="border border-gray-300 px-4 py-4">
                    {member.name}
                  </td>

                  <td className="border border-gray-300 px-4 py-4">
                    {member.designation}
                  </td>

                  <td className="border border-gray-300 px-4 py-4">
                    <a
                      href={`tel:${member.contact}`}
                      className="text-blue-700 hover:text-red-700"
                    >
                      {member.contact}
                    </a>
                  </td>

                  <td className="border border-gray-300 px-4 py-4">
                    <a
                      href={`mailto:${member.email}`}
                      className="text-blue-700 hover:text-red-700 break-all"
                    >
                      {member.email}
                    </a>
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