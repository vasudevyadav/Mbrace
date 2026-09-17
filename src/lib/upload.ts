import { randomUUID } from "crypto";
import { mkdir, writeFile } from "fs/promises";
import path from "path";

const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads");
const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);

function extensionFor(file: File) {
  const fromName = path.extname(file.name);
  if (fromName) return fromName;
  const fromType = file.type.split("/")[1];
  return fromType ? `.${fromType}` : "";
}

/** Saves an uploaded image to /public/uploads and returns its public URL path. */
export async function saveUploadedImage(file: File): Promise<string> {
  if (!ALLOWED_TYPES.has(file.type)) {
    throw new Error(`Unsupported image type: ${file.type || "unknown"}`);
  }
  await mkdir(UPLOAD_DIR, { recursive: true });
  const filename = `${randomUUID()}${extensionFor(file)}`;
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
