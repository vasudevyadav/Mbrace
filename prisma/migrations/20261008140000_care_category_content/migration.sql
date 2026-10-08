-- Admin-editable copy for the four care-category landing pages
-- (/womens-care, /child-care, /pregnancy-birth-support, /fertility-care).
-- Rows are seeded by prisma/seed.ts from the previous static content file.
CREATE TABLE "CareCategoryContent" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "heroBadge" TEXT NOT NULL DEFAULT '',
    "heroHeadingLine1" TEXT NOT NULL DEFAULT '',
    "heroHeadingHighlight1" TEXT NOT NULL DEFAULT '',
    "heroHeadingHighlight2" TEXT NOT NULL DEFAULT '',
    "heroHeadingLine2" TEXT NOT NULL DEFAULT '',
    "heroDescription" TEXT NOT NULL DEFAULT '',
    "heroImage" TEXT NOT NULL DEFAULT '',
    "journeyHeading" TEXT NOT NULL DEFAULT '',
    "journeyHighlight" TEXT NOT NULL DEFAULT '',
    "journey" JSONB NOT NULL DEFAULT '[]',
    "talkToExpertsHeading" TEXT NOT NULL DEFAULT '',
    "talkToExpertsBody" TEXT NOT NULL DEFAULT '',
    "whyChooseHeading" TEXT NOT NULL DEFAULT '',
    "whyChooseHighlight" TEXT NOT NULL DEFAULT '',
    "whyChooseBody" TEXT NOT NULL DEFAULT '',
    "excellenceEyebrow" TEXT NOT NULL DEFAULT '',
    "excellenceHeading" TEXT NOT NULL DEFAULT '',
    "excellenceHighlight" TEXT NOT NULL DEFAULT '',
    "excellenceBody" TEXT NOT NULL DEFAULT '',
    "metaTitle" TEXT NOT NULL DEFAULT '',
    "metaDescription" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "CareCategoryContent_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "CareCategoryContent_slug_key" ON "CareCategoryContent"("slug");
