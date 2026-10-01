import Image from "next/image";

export default function SportsGround() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 max-w-6xl">

        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* Sports Ground Image - LEFT */}
          <div className="w-full md:w-1/2">
            <Image
              src="/images/sports.JPG"
              alt="Sports Ground"
              width={700}
              height={450}
              className="w-full h-[350px] object-cover border-4 border-blue-900"
            />
          </div>

          {/* Content - RIGHT */}
          <div className="w-full md:w-1/2">

            <h2 className="text-3xl font-bold text-blue-900 mb-5">
              Sports Ground
            </h2>

            <p className="text-gray-700 text-base leading-7 text-justify">
              The college has provided grounds of different sports with
              equipments. The institute has well managed outdoor grounds and
              facilities of football, volleyball, kho-kho, cricket, kabaddi,
              basketball. College also has facilities to play indoor games
              like table tennis, chess, carom, badminton. We are also dedicated
              to provide coaching in main stream game to improve performance
              in competition.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}