"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState, type DragEvent } from "react";

export default function ImageUploadField({
  label,
  currentImage,
  required,
  fileFieldName = "imageFile",
  currentFieldName = "currentImage",
  helpText = "PNG, JPG or WebP. Use a clear, high-resolution image.",
}: {
  label: string;
  currentImage?: string;
  required?: boolean;
  fileFieldName?: string;
  currentFieldName?: string;
  helpText?: string;
}) {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const objectUrlRef = useRef<string | null>(null);
  const [preview, setPreview] = useState<string | null>(currentImage || null);
  const [selectedName, setSelectedName] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [savedImage, setSavedImage] = useState(currentImage ?? "");

  useEffect(() => () => {
    if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
  }, []);

  function chooseFile(file?: File) {
    if (!file || !file.type.startsWith("image/")) return;
    if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
    const nextPreview = URL.createObjectURL(file);
    objectUrlRef.current = nextPreview;
    setPreview(nextPreview);
    setSelectedName(file.name);
  }

  function dropFile(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files?.[0];
    if (!file || !file.type.startsWith("image/") || !inputRef.current) return;
    const transfer = new DataTransfer();
    transfer.items.add(file);
    inputRef.current.files = transfer.files;
    chooseFile(file);
  }

  function clearImage() {
    if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
    objectUrlRef.current = null;
    if (inputRef.current) inputRef.current.value = "";
    setPreview(null);
    setSelectedName("");
    setSavedImage("");
  }

  return (
    <div className="admin-image-field min-w-0">
      <div className="mb-2.5 flex items-start justify-between gap-3">
        <div>
          <label htmlFor={inputId} className="block text-sm font-semibold text-slate-800">{label}</label>
          <p className="mt-1 text-[11px] leading-5 text-slate-500">{helpText}</p>
        </div>
        {required && <span className="shrink-0 rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[.08em] text-amber-700 ring-1 ring-amber-200">Required</span>}
      </div>

      <div
        onDragEnter={event => { event.preventDefault(); setIsDragging(true); }}
        onDragOver={event => event.preventDefault()}
        onDragLeave={event => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setIsDragging(false); }}
        onDrop={dropFile}
        className={`group relative overflow-hidden rounded-2xl border-2 border-dashed bg-white transition-all ${isDragging ? "border-brand-500 bg-brand-50 shadow-[0_0_0_4px_rgba(116,81,143,.1)]" : "border-slate-200 hover:border-brand-300 hover:bg-brand-50/30"}`}
      >
        <div className="relative aspect-[16/8.5] min-h-40 w-full bg-[linear-gradient(135deg,#f8f5fb,#f3eef7)]">
          {preview ? (
            <Image src={preview} alt={`${label} preview`} fill sizes="(max-width: 768px) 100vw, 520px" className="object-cover" unoptimized={preview.startsWith("blob:")} />
          ) : (
            <div className="absolute inset-0 grid place-items-center px-6 text-center">
              <div>
                <span className="mx-auto grid size-12 place-items-center rounded-2xl bg-white text-brand-600 shadow-sm ring-1 ring-brand-100" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" className="size-6"><path d="M12 16V5m0 0L8 9m4-4 4 4M5 14v4.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <p className="mt-3 text-sm font-semibold text-slate-700">Drop an image here</p>
                <p className="mt-1 text-xs text-slate-400">or browse from your computer</p>
              </div>
            </div>
          )}
          {preview && <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-slate-950/65 to-transparent px-4 pb-3 pt-10 text-white"><span className="truncate text-xs font-medium">{selectedName || "Current image"}</span><span className="rounded-full bg-white/15 px-2 py-1 text-[10px] font-semibold backdrop-blur">Preview</span></div>}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 bg-white px-4 py-3">
          <p className="text-[11px] text-slate-400">Drag &amp; drop supported</p>
          <div className="flex items-center gap-2">
            {preview && !required && <button type="button" onClick={clearImage} className="rounded-lg px-3 py-2 text-xs font-semibold text-rose-600 transition hover:bg-rose-50">Remove</button>}
            <label htmlFor={inputId} className="inline-flex min-h-9 cursor-pointer items-center justify-center rounded-lg bg-brand-600 px-3.5 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-brand-700">{preview ? "Replace image" : "Choose image"}</label>
          </div>
        </div>
      </div>

      <input ref={inputRef} id={inputId} type="file" name={fileFieldName} accept="image/png,image/jpeg,image/webp,image/gif" required={required && !preview} className="sr-only" onChange={event => chooseFile(event.target.files?.[0])} />
      <input type="hidden" name={currentFieldName} value={savedImage} />
    </div>
  );
}
