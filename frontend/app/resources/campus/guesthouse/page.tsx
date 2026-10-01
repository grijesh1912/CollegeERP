import Image from "next/image";

export default function GuestHouse() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 max-w-6xl">

        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* Guest House Image - LEFT */}
          <div className="w-full md:w-1/2">
            <Image
              src="/images/guesthouse.JPG"
              alt="Guest House"
              width={700}
              height={450}
              className="w-full h-[350px] object-cover border-4 border-blue-900 rounded-xl"
            />
          </div>

          {/* Content - RIGHT */}
          <div className="w-full md:w-1/2">

            <h2 className="text-3xl font-bold text-blue-900 mb-5">
              Guest House "Ichhaba no Visamo"
            </h2>

            <p className="text-gray-700 text-base leading-7 text-justify">
              “Ichhaba No Visamo” is the in house sophisticated residential
              farm house facility to stay for the expert and eminent scholars
              invited at the institute. It has all the modern amenities of
              comfort and luxury in lush green peaceful environment. All the
              employees of the institute can stay with their family members
              at weekends to enjoy their leisure time pleasantly.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}