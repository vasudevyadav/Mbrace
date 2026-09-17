"use client";

import Image from "next/image";
import { useState } from "react";

export default function ImageUploadField({
  label,
  currentImage,
  required,
}: {
  label: string;
  currentImage?: string;
  required?: boolean;
}) {
  const [preview, setPreview] = useState<string | null>(currentImage ?? null);

  return (
    <div>
      <label className="block text-sm font-medium text-slate-700">{label}</label>
      <div className="mt-1.5 flex items-center gap-4">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-slate-100 ring-1 ring-slate-200">
          {preview ? (
            <Image src={preview} alt="" width={80} height={80} className="h-full w-full object-cover" unoptimized={preview.startsWith("blob:")} />
          ) : (
            <span className="text-xs text-slate-400">No photo</span>
          )}
        </div>
        <label className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 transition hover:bg-slate-50">
          {preview ? "Change photo" : "Upload photo"}
          <input
            type="file"
            name="imageFile"
            accept="image/png,image/jpeg,image/webp,image/gif"
            required={required && !currentImage}
            className="sr-only"
            onChange={event => {
              const file = event.target.files?.[0];
              if (file) setPreview(URL.createObjectURL(file));
            }}
          />
        </label>
      </div>
      <input type="hidden" name="currentImage" value={currentImage ?? ""} />
    </div>
  );
}
