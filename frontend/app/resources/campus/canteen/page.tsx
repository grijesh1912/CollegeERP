import Image from "next/image";

export default function Canteen() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 max-w-6xl">

        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* Classroom Image - LEFT */}
          <div className="w-full md:w-1/2">
            <Image
              src="/images/canteen.JPG"
              alt="Canteen"
              width={700}
              height={450}
              className="w-full h-[350px] object-cover border-4 border-blue-900"
            />
          </div>

          {/* Content - RIGHT */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-blue-900 mb-5">
              Canteen
            </h2>

            <p className="text-gray-700 text-base leading-7 text-justify">
              The college canteen is well equipped with modern steam cooking and utensils. Large Canteen hall with a facility for 100 members to dine at a time enables all students and staff to have their breakfast and lunch. A separate dining hall for hostellers with television is also provided in the canteen.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}