import fs from "fs";
import path from "path";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default function PlacedStudents() {
  const imageFolder = path.join(
    process.cwd(),
    "public",
    "placement-students"
  );

  let images: string[] = [];

  if (fs.existsSync(imageFolder)) {
    images = fs
      .readdirSync(imageFolder)
      .filter((file) =>
        /\.(jpg|jpeg|png|webp|JPG|JPEG|PNG|WEBP)$/.test(file)
      )
      .sort((a, b) => {
        const numA = parseInt(a.split(".")[0]) || 0;
        const numB = parseInt(b.split(".")[0]) || 0;

        return numA - numB;
      });
  }

  return (
    <main className="min-h-screen bg-slate-100 py-12">

      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-blue-950 text-center mb-3">
          Placed Students
        </h1>

        <div className="w-24 h-1 bg-red-700 mx-auto mb-12"></div>

        {/* Photos */}
        {images.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {images.map((image, index) => (
              <div
                key={image}
                className="
                  relative
                  w-full
                  h-[300px]
                  overflow-hidden
                  rounded-xl
                  bg-gray-200
                  shadow-md
                  hover:shadow-xl
                  transition
                "
              >
                <Image
                  src={`/placement-students/${encodeURIComponent(image)}`}
                  alt={`Placed Student ${index + 1}`}
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
        ) : (
          <div className="text-center bg-white rounded-xl p-12 shadow">
            <p className="text-gray-600 text-lg">
              No placement student photos available.
            </p>
          </div>
        )}

      </div>

    </main>
  );
}