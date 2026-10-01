"use client";

import { useState } from "react";
import Image from "next/image";

export default function Popup() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4">

      {/* Popup Box */}
      <div className="relative">

        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="
            absolute
            -right-3
            -top-3
            z-10
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-red-700
            text-2xl
            font-bold
            text-white
            shadow-lg
            hover:bg-red-900
            transition
          "
          aria-label="Close"
        >
          ×
        </button>

        {/* Admission Poster */}
        <Image
          src="/admission.png"
          alt="Admission Open"
          width={600}
          height={600}
          className="max-h-[90vh] w-auto rounded-lg object-contain shadow-2xl"
          priority
        />

      </div>
    </div>
  );
}