export default function Stats() {
  const stats = [
    { title: "Students", value: "5000+" },
    { title: "Faculty", value: "250+" },
    { title: "Courses", value: "20+" },
    { title: "Placement", value: "95%" },
  ];

  return (
    <section className="py-16 bg-slate-100">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 text-center"
            >
              <h2 className="text-4xl font-bold text-blue-900">
                {item.value}
              </h2>
              <p className="mt-2">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}