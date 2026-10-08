-- Optional patient photo and video testimonial.
ALTER TABLE "Testimonial" ADD COLUMN "image" TEXT NOT NULL DEFAULT '';
ALTER TABLE "Testimonial" ADD COLUMN "videoUrl" TEXT NOT NULL DEFAULT '';
