import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const galleryPath = path.join(process.cwd(), "public", "gallery");

    const files = fs.readdirSync(galleryPath);

    const images = files
      .filter((file) => {
        const ext = path.extname(file).toLowerCase();

        return [".jpg", ".jpeg", ".png", ".webp"].includes(ext);
      })
      .sort((a, b) =>
        a.localeCompare(b, undefined, {
          numeric: true,
          sensitivity: "base",
        })
      )
      .map((file) => `/gallery/${file}`);

    return NextResponse.json(images);
  } catch (error) {
    console.error("Gallery Error:", error);

    return NextResponse.json(
      { error: "Unable to load gallery images" },
      { status: 500 }
    );
  }
}