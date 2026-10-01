import Image from "next/image";

export default function Classroom() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 max-w-6xl">

        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* Classroom Image - LEFT */}
          <div className="w-full md:w-1/2">
            <Image
              src="/images/classroom.JPG"
              alt="Classrooms"
              width={700}
              height={450}
              className="w-full h-[350px] object-cover border-4 border-blue-900"
            />
          </div>

          {/* Content - RIGHT */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-blue-900 mb-5">
              Classrooms
            </h2>

            <p className="text-gray-700 text-base leading-7 text-justify">
              All the classrooms are spacious, well illuminated with natural
              light and properly ventilated to make environment more
              refreshing. They are also equipped with modern amenities like
              projectors, speakers etc.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}