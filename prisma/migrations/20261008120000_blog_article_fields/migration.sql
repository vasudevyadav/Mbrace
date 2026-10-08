-- Add full-article fields to Blog so posts can be authored from the admin
-- and rendered at /blog and /blog/[slug], not just as homepage teasers.
ALTER TABLE "Blog" ADD COLUMN "slug" TEXT;
ALTER TABLE "Blog" ADD COLUMN "category" TEXT NOT NULL DEFAULT '';
ALTER TABLE "Blog" ADD COLUMN "summary" TEXT NOT NULL DEFAULT '';
ALTER TABLE "Blog" ADD COLUMN "intro" TEXT NOT NULL DEFAULT '';
ALTER TABLE "Blog" ADD COLUMN "blocks" JSONB NOT NULL DEFAULT '[]';

-- Backfill a slug for any existing rows (derived from the title, with the
-- row id appended to guarantee uniqueness) before the column is required.
UPDATE "Blog"
SET "slug" = lower(regexp_replace(regexp_replace(trim(title), '[^a-zA-Z0-9]+', '-', 'g'), '(^-+|-+$)', '', 'g')) || '-' || id::text
WHERE "slug" IS NULL;

ALTER TABLE "Blog" ALTER COLUMN "slug" SET NOT NULL;
CREATE UNIQUE INDEX "Blog_slug_key" ON "Blog"("slug");
