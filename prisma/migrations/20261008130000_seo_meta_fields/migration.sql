-- Optional per-page SEO overrides (blank falls back to the existing
-- name/title + description/summary already shown on the page).
ALTER TABLE "ServiceItem" ADD COLUMN "metaTitle" TEXT NOT NULL DEFAULT '';
ALTER TABLE "ServiceItem" ADD COLUMN "metaDescription" TEXT NOT NULL DEFAULT '';

ALTER TABLE "Blog" ADD COLUMN "metaTitle" TEXT NOT NULL DEFAULT '';
ALTER TABLE "Blog" ADD COLUMN "metaDescription" TEXT NOT NULL DEFAULT '';

ALTER TABLE "Location" ADD COLUMN "metaTitle" TEXT NOT NULL DEFAULT '';
ALTER TABLE "Location" ADD COLUMN "metaDescription" TEXT NOT NULL DEFAULT '';
