export default function Placement() {
  return (
    <section className="py-20 bg-red-900 text-white">
      <div className="container mx-auto text-center">

        <h2 className="text-4xl font-bold">
          Placement Highlights
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10">

          <div>
            <h3 className="text-4xl font-bold">
              12 LPA
            </h3>
            <p>Highest Package</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">
              5.5 LPA
            </h3>
            <p>Average Package</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">
              150+
            </h3>
            <p>Recruiters</p>
          </div>

        </div>
      </div>
    </section>
  );
}