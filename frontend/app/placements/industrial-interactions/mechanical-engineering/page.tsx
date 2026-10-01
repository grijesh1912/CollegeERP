export default function MechanicalIndustrialInteraction() {
  const companies = [
    "Apollo Construction Equipments Pvt. Ltd., Mehsana",
    "Gujarat Apollo, Mehsana",
    "Anup Industries Ltd., Ahmedabad",
    "Pawan Cement Co. Ltd., Palanpur",
    "AMW, Kutchh",
    "J.H.Engineering Works., Ahmedabad",
    "Windsor Machines Limited, Ahmedabad",
    "Gujarat State Electricity Corporation Ltd., Thermal Power Station, Gandhinagar",
    "Indo German Tool Room, Ahmedabad",
    "Wanakbori Thermal Power Plant, Kheda",
    "Elecon EPC Projects Ltd., V.V.Nagar",
    "Solar Power Park Charanka",
    "Apollo",
    "Elecon Engineering Company Ltd.",
    "J&H, Engineering Lid., Vatva Gidc, Ahmedabad",
    "Nova Petrochemicals Limited",
    "Kohinoor Products, At. Po. Dhinoj",
    "Welspun Steel Ltd.",
    "Laxmi Enterprises, 304/6/5 Makarpura Gidc, Vadodara",
    "Jyoti Limited, Baroda",
    "Bhavya Machine Tool, Ahmedabad",
    "Hitachi Home & Life Solutions (India) Ltd.",
    "Gajanand Motor Pvt. Ltd., Aburoad Highway, Palanpur",
    "Neptune Industries Limited",
    "Windsor Machines Ltd., 6&7, Gidc, Chhatral, Kalol",
    "Indo German Tool Room",
    "Ahmedabad Engineers Pvt. Ltd., Vatva, Ahmedabad",
    "Vindi Vak Pump Pvt. Ltd. 1905/1906 Phase 4, Behind Cipet",
    "Indo German Ltd., Gidc, Vatva, Ahmedabad",
    "La-Gajjar Machinerise Pvt.Ltd Rakhiyal Ahmedabad",
    "Nirma Soda Ash Plant, Kalatalav, Bhavnagar",
    "Mazda Limited, Mazda House, 2nd Lane, Panchavati, Ambavadi, Ahmedabad",
    "Sagar Rubber Pvt. Ltd., 143, Ediyasan Gidc, Mehsana",
    "Windsor Machinery Ltd. 6-7 Gidc, Chhatral, Ta: Kalol",
    "Thermal Power Station, Wanakbori",
    "Parth Equipments Ltd., Vatva, Ahmedabad",
    "Maxim Tubes Company Pvt. Ltd., 105, Near 66kv Substation, Pansar Road, Chhatral",
    "Appex Engg. Works, Makarpura, Gidc, Baroda",
    "Welspun Corp. Ltd., Versamedi, Anjar, Kutcch",
    "Vintech Industries Pvt. Ltd, Gidc, Naroda",
    "Jindal Saw Ltd., Samaghogha, Mandvi-Mundra Road, Kutcch",
    "Aeroma Pvt Ltd, Palanpur",
    "Orbit Intelligent Company, Dediyasan",
    "TLT Engg. India Ltd., Kadi",
    "IFFCCO, KALOL",
    "Perfect Hydralic Engg. Co. Gidc, Makarpura, Vadodara",
    "Leak Proof Engineering Pvt. Ltd., Near Chhapi, Vadgam",
    "Aroma Hightech Ltd., Near Ladbinala, Palanpur",
    "IOCL, Gas Refinary, Baroda",
    "Audi Workshop, S.G.Highway, Ahmedabad",
    "Essar Steel India Ltd.",
    "TIM Engineering Technologies",
    "Sundek India Ltd. Mehsana",
    "Jekson Hydraulic",
    "Lancer Reinforcement Pvt Ltd, Maharashtra",
    "Transformers & Fertilizers Ltd.",
    "Milton Industries Ltd. Navrangpura, Ahmedabad, Gujarat",
    "AIA Engineering, Bodakdev, Ahmedabad",
    "Ambuja",
    "Mamta machinery",
    "Sandvik coroment",
    "Real Strips Ahmedabad",
    "Sejasmi Industries (India) Pvt. Kadi",
    "Asian Mills Privet Limited Chhatral INA(GIDC), Gujarat",
    "Paras Bhavan Steel Mehsana, Gujarat",
    "Metal Tech CNC Pvt.Ltd.",
    "Heavy Metal & Tubes Unit-I Mehsana, Gujarat",
    "Asian Tubes Limited Ahmedabad, Gujarat",
    "La-Gajjar Machinerise Pvt. Ltd. Amraiwadi, Ahmedabad",
    "Somani ceramics, Kadi Gujarat",
    "Mazda Limited, Ahmedabad, Gujarat",
    "Cil Nova Petrochemicals Ltd., Ahmedabad, Gujarat",
    "Anup Industries Ltd., Ahmedabad",
    "Techno industries Pvt. Ltd.",
    "Cms Infosystems Pvt. Ltd.",
    "Safex Industries Ltd., Ahmedabad, Gujarat",
    "John Energy Jagudan Mehsana, Gujarat",
    "Fluidline Valves Co Pvt Ltd., GIDC Vatwa",
    "Neptune Industries Ltd Mehsana, Gujarat",
    "Angiplast Private Limited Vatwa",
    "Ammann Apollo India Pvt. Ltd., Khatraj, Gujarat",
    "BOMAFA Armaturen GmbH Germany",
    "McCain Foods India Ltd., Baliyasan, Gujarat",
    "KHS Machinery Private Ltd. Ahmedabad, Gujarat.",
    "Nirma ltd. Ahmedabad, Gujarat",
    "Jupiter Ceramics Ahmedabad, Gujarat",
    "Decent Laminates Private Limited Ahmedabad, Gujarat",
    "Solid (India) Limited Ahmedabad, India G.I.D.C., Ahmedabad",
    "Swastik Tile Ahmedabad, Gujarat",
    "DIC India Ltd. G I D C, Vatva, Ahmedabad, Gujarat",
    "Cengres Tiles Ahmedabad, Gujarat",
    "C Doctor & Co Private Limited Vatva",
    "Kanak Castor Products Pvt. Ltd. Kadi, Mehsana, Gujarat",
    "Wetratech",
    "Global Special Springs Pvt. Ltd Chandarda Tal. Kadi",
    "Cadmach Machinery Co. Private Limited GIDC Industrial Estate, Vatva",
    "Raajratna Ventures Ltd. Ahmedabad, Gujarat",
    "Asian Tubes",
    "RatnaDeep Metal Tubes Mehsana, Gujarat",
    "Oswal Industries Ltd. Gandhinagar, Gujarat",
    "Shako Flexipack Pvt Ltd. Kadi, Gujarat",
    "Citizen Metaalloys Ltd. Ahmedabad, Gujarat",
    "Sagar Rubber Products Pvt. Ltd. Mehsana, Gujarat",
    "Kesar Pharma (P) LTD. Bileshvarpura, Gujarat",
    "IMI Machine Tools Pvt. Ltd. Ahmedabad, Gujarat",
    "Gayatri Dairy Products Pvt. Ltd.",
    "Torrant Instruments Ahmedabad, Gujarat",
    "Ratnamani Metals & Tubes Ltd. Chadasna, Gujarat",
    "Plastene India Ltd. Ahmedabad, Gujarat",
    "Rajratna Electrodes",
    "Apollo Infra Tech",
    "DPS Bearings",
    "Scoda Tubes",
    "Raj Ratna Food Private Limited Deesa",
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
            Department of Mechanical Engineering
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