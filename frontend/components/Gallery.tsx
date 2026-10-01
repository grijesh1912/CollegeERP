// export default function Gallery() {
//   return (
//     <section className="py-16 bg-slate-100">

//       <div className="container mx-auto">

//         <h2 className="text-3xl font-bold mb-8">
//           Campus Gallery
//         </h2>

//         <div className="grid md:grid-cols-3 gap-6">

//           <div className="bg-gray-300 h-60 rounded-xl"></div>

//           <div className="bg-gray-300 h-60 rounded-xl"></div>

//           <div className="bg-gray-300 h-60 rounded-xl"></div>

//         </div>

//       </div>

//     </section>
//   );
// }






// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";

// const images = [
//   "/gallery/campus1.jpg",
//   "/gallery/campus2.jpg",
//   "/gallery/campus3.jpg",
//   "/gallery/campus4.jpg",
//   "/gallery/campus5.jpg",
//   "/gallery/campus6.jpg",
//   "/gallery/campus7.jpg",
//   "/gallery/campus8.jpg",
//   "/gallery/campus9.jpg",
//   "/gallery/campus10.jpg",
//   "/gallery/campus11.jpg",
//   "/gallery/campus12.jpg",
//   "/gallery/campus13.jpg",
//   "/gallery/campus14.jpg",
//   "/gallery/campus15.jpg",
//   "/gallery/campus16.jpg",
//   "/gallery/campus17.jpg",
//   "/gallery/campus18.jpg",
//   "/gallery/campus19.jpg",
//   "/gallery/campus20.jpg",
//   "/gallery/campus21.jpg",
//   "/gallery/campus22.jpg",
// ];

// const imagesPerPage = 9;

// export default function Gallery() {
//   const [currentPage, setCurrentPage] = useState(0);

//   const totalPages = Math.ceil(images.length / imagesPerPage);

//   const nextPage = () => {
//     setCurrentPage((prev) => (prev + 1) % totalPages);
//   };

//   const previousPage = () => {
//     setCurrentPage((prev) =>
//       prev === 0 ? totalPages - 1 : prev - 1
//     );
//   };

//   // Automatically change after 5 seconds
//   useEffect(() => {
//     if (totalPages <= 1) return;

//     const timer = setInterval(() => {
//       setCurrentPage((prev) => (prev + 1) % totalPages);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, [totalPages]);

//   const startIndex = currentPage * imagesPerPage;

//   const currentImages = images.slice(
//     startIndex,
//     startIndex + imagesPerPage
//   );

//   return (
//     <section className="bg-slate-100 py-16">
//       <div className="container mx-auto px-6 max-w-7xl">

//         {/* Heading */}
//         <h2 className="text-3xl font-bold text-blue-950 mb-8">
//           Campus Gallery
//         </h2>

//         {/* Gallery */}
//         <div className="relative">

//           {/* Images - 3 x 3 */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

//             {currentImages.map((image, index) => (
//               <div
//                 key={image}
//                 className="
//                   relative
//                   w-full
//                   h-[220px]
//                   overflow-hidden
//                   rounded-xl
//                   shadow-md
//                   bg-gray-300
//                 "
//               >
//                 <Image
//                   src={image}
//                   alt={`Campus Gallery ${startIndex + index + 1}`}
//                   fill
//                   className="
//                     object-cover
//                     hover:scale-105
//                     transition-transform
//                     duration-500
//                   "
//                   sizes="(max-width: 768px) 100vw,
//                          (max-width: 1024px) 50vw,
//                          33vw"
//                 />
//               </div>
//             ))}

//           </div>


//           {/* Previous Button */}
//           {totalPages > 1 && (
//             <button
//               onClick={previousPage}
//               aria-label="Previous images"
//               className="
//                 absolute
//                 left-2
//                 top-1/2
//                 -translate-y-1/2
//                 bg-black/60
//                 hover:bg-black/80
//                 text-white
//                 w-11
//                 h-11
//                 rounded-full
//                 flex
//                 items-center
//                 justify-center
//                 text-2xl
//                 transition
//               "
//             >
//               ‹
//             </button>
//           )}


//           {/* Next Button */}
//           {totalPages > 1 && (
//             <button
//               onClick={nextPage}
//               aria-label="Next images"
//               className="
//                 absolute
//                 right-2
//                 top-1/2
//                 -translate-y-1/2
//                 bg-black/60
//                 hover:bg-black/80
//                 text-white
//                 w-11
//                 h-11
//                 rounded-full
//                 flex
//                 items-center
//                 justify-center
//                 text-2xl
//                 transition
//               "
//             >
//               ›
//             </button>
//           )}

//         </div>


//         {/* Page Indicators */}
//         {totalPages > 1 && (
//           <div className="flex justify-center gap-2 mt-6">

//             {Array.from({ length: totalPages }).map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentPage(index)}
//                 aria-label={`Go to gallery page ${index + 1}`}
//                 className={`
//                   w-3
//                   h-3
//                   rounded-full
//                   transition
//                   ${
//                     currentPage === index
//                       ? "bg-blue-900"
//                       : "bg-gray-400"
//                   }
//                 `}
//               />
//             ))}

//           </div>
//         )}

//       </div>
//     </section>
//   );
// }








"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const imagesPerPage = 9;

export default function Gallery() {
  const [images, setImages] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);

  // Load all images automatically
  useEffect(() => {
    const loadImages = async () => {
      try {
        const response = await fetch("/api/gallery");

        if (!response.ok) {
          throw new Error("Failed to load gallery");
        }

        const data = await response.json();

        setImages(data);
      } catch (error) {
        console.error("Gallery loading error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  // Total pages
  const totalPages = Math.ceil(images.length / imagesPerPage);

  // Next page
  const nextPage = () => {
    if (totalPages <= 1) return;

    setCurrentPage((prev) => {
      if (prev >= totalPages - 1) {
        return 0;
      }

      return prev + 1;
    });
  };

  // Previous page
  const previousPage = () => {
    if (totalPages <= 1) return;

    setCurrentPage((prev) => {
      if (prev === 0) {
        return totalPages - 1;
      }

      return prev - 1;
    });
  };

  // Automatically change page after 5 seconds
  useEffect(() => {
    if (totalPages <= 1) return;

    const timer = setInterval(() => {
      setCurrentPage((prev) => {
        if (prev >= totalPages - 1) {
          return 0;
        }

        return prev + 1;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [totalPages]);

  // Current 9 images
  const startIndex = currentPage * imagesPerPage;

  const currentImages = images.slice(
    startIndex,
    startIndex + imagesPerPage
  );

  return (
    <section className="bg-slate-100 py-16">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-blue-950 mb-8">
          Campus Gallery
        </h2>

        {/* Loading */}
        {loading && (
          <div className="text-center py-10 text-gray-600">
            Loading gallery...
          </div>
        )}

        {/* No images */}
        {!loading && images.length === 0 && (
          <div className="text-center py-10 text-gray-600">
            No images available.
          </div>
        )}

        {/* Gallery */}
        {!loading && images.length > 0 && (
          <div className="relative">

            {/* 3 x 3 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {currentImages.map((image, index) => (
                <div
                  key={image}
                  className="
                    relative
                    w-full
                    h-[220px]
                    overflow-hidden
                    rounded-xl
                    shadow-md
                    bg-gray-300
                  "
                >
                  <Image
                    src={image}
                    alt={`Campus Gallery ${startIndex + index + 1}`}
                    fill
                    className="
                      object-cover
                      hover:scale-105
                      transition-transform
                      duration-500
                    "
                    sizes="
                      (max-width: 768px) 100vw,
                      (max-width: 1024px) 50vw,
                      33vw
                    "
                  />
                </div>
              ))}

            </div>

            {/* Previous Button */}
            {totalPages > 1 && (
              <button
                onClick={previousPage}
                aria-label="Previous images"
                className="
                  absolute
                  left-2
                  top-1/2
                  -translate-y-1/2
                  bg-black/60
                  hover:bg-black/80
                  text-white
                  w-11
                  h-11
                  rounded-full
                  flex
                  items-center
                  justify-center
                  text-3xl
                  transition
                  z-10
                "
              >
                ‹
              </button>
            )}

            {/* Next Button */}
            {totalPages > 1 && (
              <button
                onClick={nextPage}
                aria-label="Next images"
                className="
                  absolute
                  right-2
                  top-1/2
                  -translate-y-1/2
                  bg-black/60
                  hover:bg-black/80
                  text-white
                  w-11
                  h-11
                  rounded-full
                  flex
                  items-center
                  justify-center
                  text-3xl
                  transition
                  z-10
                "
              >
                ›
              </button>
            )}

          </div>
        )}

        {/* Page Indicators */}
        {!loading && totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-6">

            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                aria-label={`Go to gallery page ${index + 1}`}
                className={`
                  w-3
                  h-3
                  rounded-full
                  transition
                  ${
                    currentPage === index
                      ? "bg-blue-900"
                      : "bg-gray-400"
                  }
                `}
              />
            ))}

          </div>
        )}

      </div>
    </section>
  );
}