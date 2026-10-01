import Image from "next/image";

export default function LibraryPage() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-blue-950 mb-10">
          Library & Knowledge Center
        </h1>

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT - Introduction */}
          <div className="text-gray-700 text-[16px] leading-8 text-justify">

            <h2 className="text-3xl font-bold text-blue-900 mb-5">
              Welcome to Smt. S. R. Patel Engineering College Library
              and Knowledge Center, Dabhi, Unjha.
            </h2>

            <p className="mb-5">
              A variety of services is available and a cadre of professional
              staff is always ready to assist you for completing projects,
              assignments and research.
            </p>

            <p className="mb-5">
              One of our goals is to fully computerize all services and we
              are currently working on this.
            </p>

            <p>
              Please remember that it is your library and knowledge center,
              so use it, care it and participate in its development.
            </p>

          </div>


          {/* RIGHT - Library Photos */}
          <div className="grid grid-cols-2 gap-5">

            {/* Main Image */}
            <div className="col-span-2">
              <Image
                src="/images/library1.JPG"
                alt="Library"
                width={800}
                height={500}
                className="w-full h-[350px] object-cover rounded-lg border-4 border-blue-900"
              />
            </div>

            {/* Second Image */}
            <div>
              <Image
                src="/images/library2.JPG"
                alt="Library Knowledge Center"
                width={500}
                height={350}
                className="w-full h-[220px] object-cover rounded-lg border-4 border-blue-900"
              />
            </div>

            {/* Third Image */}
            <div>
              <Image
                src="/images/library3.JPG"
                alt="Library Reading Area"
                width={500}
                height={350}
                className="w-full h-[220px] object-cover rounded-lg border-4 border-blue-900"
              />
            </div>

          </div>

        </div>


        {/* Activities */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold text-blue-900 border-b-2 border-blue-900 pb-3 mb-6">
            Activities (Celebration)
          </h2>

          <ul className="grid md:grid-cols-2 gap-x-10 gap-y-3 list-disc pl-6 text-gray-700 leading-7">

            <li>Book Exhibition</li>
            <li>Competitive Exam Related Seminar</li>
            <li>Books Lover Day</li>
            <li>Celebration of Librarian Day 12-Aug</li>
            <li>Celebration of Library Week 14-20 Nov</li>
            <li>Organization Best User Reading Award</li>
            <li>Organize The Story Telling Award</li>
            <li>Book Front Page Making Competition</li>
            <li>Book Review Competition</li>
            <li>Website Review Competition</li>
            <li>Essay Competition</li>
            <li>Motivational Lecture (mind power, speed reading)</li>
            <li>Article/Journal Paper Writing</li>
            <li>Group Discussion</li>
            <li>Software application developing (workshop)</li>
            <li>Weekly career guidance</li>
            <li>Read - SRPEC</li>

          </ul>

        </div>


        {/* Library Services */}
        <div className="mt-14">

          <h2 className="text-3xl font-bold text-blue-900 border-b-2 border-blue-900 pb-3 mb-8">
            Library and Knowledge Center Services
          </h2>


          <div className="space-y-8">


            {/* Library Automation */}
            <div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">
                Library Automation
              </h3>

              <p className="text-gray-700 leading-8 text-justify">
                Library is fully computerized with using SOUL2.0 software.
                All in house activities like circulation, cataloguing, serial
                control, OPAC etc. are being done with the use of software.
                Barcode reader and software helps to make entire house keeping
                activities very fast and accurate.
              </p>
            </div>


            {/* Reference */}
            <div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">
                Reference
              </h3>

              <p className="text-gray-700 leading-8 text-justify">
                There are various books that are the sources of information
                about different subjects. They include Encyclopedias,
                Dictionaries, Guides, books, Handbooks etc.
              </p>
            </div>


            {/* Circulation */}
            <div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">
                Circulation
              </h3>

              <p className="text-gray-700 leading-8 text-justify">
                Remote Login, Status Check, OPAC Access, Reminder to user
                requests, Inter Library Loan, Direct Borrowing facility etc.
              </p>
            </div>


            {/* OPAC */}
            <div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">
                OPAC
              </h3>

              <p className="text-gray-700 leading-8 text-justify">
                Online Public Access Catalogue is an online database of
                reading materials available in library. User can search a
                library catalogue principally to locate books and other
                reading materials which are physically located at library.
              </p>
            </div>


            {/* Inter Library Loan */}
            <div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">
                Inter Library Loan
              </h3>

              <p className="text-gray-700 leading-8 text-justify">
                Inter Library Loan Facility is provided to the students and
                facility with the use of DELNET.
              </p>
            </div>


            {/* Current Awareness Service */}
            <div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">
                Current Awareness Service
              </h3>

              <p className="text-gray-700 leading-8 text-justify">
                We have made special notice board for this service. Here we
                display the good academic, scientific articles from news
                paper. Also display such non technical value added article.
                When a new article comes; old cutting is being filed subject
                wise in reference department for ready reference.
              </p>
            </div>


            {/* Question Papers */}
            <div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">
                Question Papers
              </h3>

              <p className="text-gray-700 leading-8 text-justify">
                Branch wise and semester wise question paper files are
                available physically as well on college FTP for the reference
                purpose of students.
              </p>
            </div>


            {/* Reading Facilities */}
            <div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">
                Reading Facilities
              </h3>

              <p className="text-gray-700 leading-8 text-justify">
                Reading area consists with air-condition and light. At a time
                more than 120 students can read in comfortable reading area.
              </p>
            </div>


            {/* Web OPAC */}
            <div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">
                Web OPAC
              </h3>

              <p className="text-gray-700 leading-8 text-justify">
                In which students can search the entire library holdings at
                their own home, own place. Students and staff can see their
                current status of transaction. Each student and staff has got
                their own username and password for access the Web OPAC.
              </p>

              <a
                href="http://192.168.6.7/libraryopac"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-blue-700 hover:text-blue-900 font-semibold"
              >
                Open Web OPAC →
              </a>
            </div>


            {/* New Arrival Display */}
            <div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">
                New Arrival Display
              </h3>

              <p className="text-gray-700 leading-8 text-justify">
                New arrived books are displayed on regular intervals.
              </p>
            </div>


            {/* Reprography */}
            <div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">
                Reprography
              </h3>

              <p className="text-gray-700 leading-8 text-justify">
                Xerox facility is available near to library at the rate of
                no profits no loss.
              </p>
            </div>


            {/* Press Media */}
            <div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">
                Press Media and Publicity Section
              </h3>

              <p className="text-gray-700 leading-8 text-justify">
                We manage the file of all the technical, cultural, sports,
                events, functions and other programs organized by the College.
                We have each and every photographs, press notes and
                press-cuttings of all the function organized in our college
                in physical form as well digital.
              </p>
            </div>


            {/* Classification System */}
            <div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">
                Classification System
              </h3>

              <p className="text-gray-700 leading-8 text-justify">
                We are using DDC 23rd edition for classification. All the
                collection is classified as per DDC. We have also put the
                display of classification details (i.e. class number, subject
                heading, raw wise and column wise) at the every cupboard of
                stack area for ready reference of the students.
              </p>
            </div>


            {/* Non Technical Books */}
            <div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">
                Non Technical (Value Added) Books
              </h3>

              <p className="text-gray-700 leading-8 text-justify">
                We do orientation program on the first day of new admitted
                student of the college.
              </p>
            </div>


            {/* Notice Board */}
            <div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">
                Notice Board
              </h3>

              <p className="text-gray-700 leading-8 text-justify">
                We displayed all the library rules, facilities and student
                related notice on our notice board and update it regularly.
              </p>
            </div>


            {/* Suggestion Box */}
            <div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">
                Suggestion Box
              </h3>

              <p className="text-gray-700 leading-8 text-justify">
                We have put the suggestion box in library. All library users
                can put their valuable suggestion at any time.
              </p>
            </div>


          </div>

        </div>

      </div>
    </section>
  );
}