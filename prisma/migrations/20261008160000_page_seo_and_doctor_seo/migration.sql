CREATE TABLE "PageSeo" (
  "slug" TEXT NOT NULL,
  "label" TEXT NOT NULL,
  "metaTitle" TEXT NOT NULL DEFAULT '',
  "metaDescription" TEXT NOT NULL DEFAULT '',
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "PageSeo_pkey" PRIMARY KEY ("slug")
);

ALTER TABLE "Doctor" ADD COLUMN "metaTitle" TEXT NOT NULL DEFAULT '';
ALTER TABLE "Doctor" ADD COLUMN "metaDescription" TEXT NOT NULL DEFAULT '';
