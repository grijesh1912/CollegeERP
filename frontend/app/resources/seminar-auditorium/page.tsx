import Image from "next/image";

export default function SeminarAuditorium() {
  const images = [
    "/images/auditorium1.JPG",
    "/images/auditorium2.JPG",
    "/images/auditorium3.JPG",
    "/images/auditorium4.JPG",
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* ================= CONTENT ================= */}

        <div className="mb-12">

          {/* Main Heading */}
          <h2 className="text-3xl font-bold text-blue-900 mb-8">
            Seminar & Auditorium Hall
          </h2>

          {/* Auditorium Hall */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Auditorium Hall
            </h3>

            <p className="text-gray-700 text-base leading-8 text-justify">
              The auditorium is fully media equipped with LCD Projector and HD
              Sound System. It has a capacity of 300 viewer seats and 25 stage
              seats. The hall is fully air conditioned.
            </p>
          </div>

          {/* Seminar Hall */}
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Seminar Hall
            </h3>

            <p className="text-gray-700 text-base leading-8 text-justify">
              The institute encompasses two seminar halls, which are designed
              in a way to accelerate the teaching learning process using modern
              technological aids. It is normally used to give the presentations,
              seminars, etc. The halls are fully air conditioned.
            </p>
          </div>

        </div>

        {/* ================= PHOTOS ================= */}

        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-8">
            Seminar & Auditorium Gallery
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {images.map((image, index) => (
              <div
                key={image}
                className="relative w-full h-[250px] overflow-hidden rounded-lg border-4 border-blue-900"
              >
                <Image
                  src={image}
                  alt={`Seminar Auditorium ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}