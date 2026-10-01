export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Header */}
      <section className="bg-red-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg">
            Get in touch with Smt. S.R. Patel Engineering College
          </p>
        </div>
      </section>

      {/* Contact Information + Form */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Details */}
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-red-900">
              Information
            </h2>

            <div className="space-y-4 text-lg">
              <p>
                📍 Unjha Patan Road, Unjha - 384170, Gujarat
              </p>

              <p>
                📞 +91 9825048617, +91 9099063078
              </p>

              <p>
                ✉️ info@srpec.org
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-semibold mb-4">
                Contact With Us
              </h3>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border p-3 rounded-lg"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border p-3 rounded-lg"
                />

                <textarea
                  placeholder="Message"
                  rows={5}
                  className="w-full border p-3 rounded-lg"
                />

                <button
                  className="bg-red-900 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Important Contacts */}
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-red-900">
              Important Contacts
            </h2>

            <div className="space-y-6">

              <div>
                <h3 className="font-semibold">
                  Dr. A. H. Shah (Principal)
                </h3>
                <p>+91 9727703817</p>
                <p>principal@srpec.org</p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Mr. Vikram Gupta (HOD Civil)
                </h3>
                <p>+91 8764297687</p>
                <p>hodcl@srpec.org</p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Mr. Amit Prakash Tiwari (HOD Computer)
                </h3>
                <p>+91 8577063959</p>
                <p>hodce@srpec.org</p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Mr. Urvesh Patel (HOD Mechanical)
                </h3>
                <p>+91 8160592389</p>
                <p>hodmech@srpec.org</p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Mr. S. J. Patel (Admission Officer)
                </h3>
                <p>+91 9904334252</p>
                <p>shirin@srpec.org</p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Mr. H. V. Patel (GTU Coordinator)
                </h3>
                <p>+91 9099063078</p>
                <p>hvpatel.civil@srpec.org</p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Mr. Grijesh Nemiwal (Placement Officer)
                <p>+91 9352519669</p>
                </h3>
                <p>placement@srpec.org</p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Mr. Jignesh Patel (Account Section)
                </h3>
                <p>+91 9824962824</p>
                <p>jignesh.adm@srpec.org</p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Mr. Sakir Ali (Student Section)
                </h3>
                <p>+91 7777915906</p>
                <p>studentsection@srpec.org</p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Mrs. Khushboo Patel (HR Section / Student Counselor)
                </h3>
                <p>+91 6351002490</p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Bottom Contact Card
      <section className="bg-red-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">

          <h2 className="text-3xl font-bold mb-6">
            CONTACT US
          </h2>

          <p className="text-lg">
            Unjha Patan Road, Unjha - 384170, Gujarat
          </p>

          <p className="mt-3 text-lg">
            📞 +91 9825048617
          </p>

          <p className="mt-3 text-lg">
            ✉️ info@srpec.org
          </p>

        </div>
      </section> */}

    </div>
  );
}