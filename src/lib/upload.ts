import { randomUUID } from "crypto";
import { mkdir, writeFile } from "fs/promises";
import path from "path";

const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads");
// Extension is derived from this map (the validated type), never from the
// client-supplied filename — otherwise a forged `file.type: image/png` with
// `file.name: x.html` would get saved with a servable .html extension.
const ALLOWED_TYPES: Record<string, string> = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
  "image/gif": ".gif",
};
const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10 MB

/** Saves an uploaded image to /public/uploads and returns its public URL path. */
export async function saveUploadedImage(file: File): Promise<string> {
  const extension = ALLOWED_TYPES[file.type];
  if (!extension) {
    throw new Error(`Unsupported image type: ${file.type || "unknown"}`);
  }
  if (file.size > MAX_FILE_SIZE_BYTES) {
    throw new Error(`Image is too large (max ${MAX_FILE_SIZE_BYTES / (1024 * 1024)}MB).`);
  }
  await mkdir(UPLOAD_DIR, { recursive: true });
  const filename = `${randomUUID()}${extension}`;
  const buffer = Buffer.from(await file.arrayBuffer());
  await writeFile(path.join(UPLOAD_DIR, filename), buffer);
  return `/uploads/${filename}`;
}

/** Returns the new image path if a file was uploaded, otherwise the existing/fallback path. */
export async function resolveImagePath(formData: FormData, fileField: string, fallbackField: string) {
  const file = formData.get(fileField);
  if (file instanceof File && file.size > 0) {
    return saveUploadedImage(file);
  }
  return String(formData.get(fallbackField) ?? "");
}
