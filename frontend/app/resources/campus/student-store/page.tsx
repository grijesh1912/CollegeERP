import Image from "next/image";

export default function StudentStore() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 max-w-6xl">

        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* Image - LEFT */}
          <div className="w-full md:w-1/2">
            <Image
              src="/images/student-store.JPG"
              alt="Student Store"
              width={700}
              height={450}
              className="w-full h-[350px] object-cover border-4 border-blue-900"
            />
          </div>

          {/* Content - RIGHT */}
          <div className="w-full md:w-1/2">

            <h2 className="text-3xl font-bold text-blue-900 mb-5">
              Student Store
            </h2>

            <p className="text-gray-700 text-base leading-7 text-justify">
              A self-sufficient students' store is provided by the institute
              where apart from all sorts of stationary goods, books, EG-Drawing
              sheets, Lab-Manuals, calculator etc. are available at genuine
              price. It also houses photocopying and desktop printing
              facilities.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}