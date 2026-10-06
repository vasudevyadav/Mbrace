-- CreateTable
CREATE TABLE "SiteSettings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT DEFAULT 1,
    "phone" TEXT NOT NULL,
    "phoneHref" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "lbNagarAddress" TEXT NOT NULL,
    "kingKotiAddress" TEXT NOT NULL,
    "instagramUrl" TEXT NOT NULL DEFAULT '',
    "facebookUrl" TEXT NOT NULL DEFAULT '',
    "linkedinUrl" TEXT NOT NULL DEFAULT '',
    "youtubeUrl" TEXT NOT NULL DEFAULT '',
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "HeroContent" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT DEFAULT 1,
    "badgePrefix" TEXT NOT NULL,
    "headingPlain" TEXT NOT NULL,
    "headingHighlight" TEXT NOT NULL,
    "subheading" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Stat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "CareCategory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "key" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "ServiceCategory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "key" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "ServiceItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "categoryId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "ServiceItem_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ServiceCategory" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FaqItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "categoryKey" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "FaqItem_categoryKey_fkey" FOREIGN KEY ("categoryKey") REFERENCES "CareCategory" ("key") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Doctor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "qualifications" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "image" INTEGER NOT NULL,
    "yearsExperience" TEXT NOT NULL,
    "languages" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "order" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "Testimonial" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "quote" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "Blog" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "image" INTEGER NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0
);

-- CreateIndex
CREATE UNIQUE INDEX "Stat_slug_key" ON "Stat"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "CareCategory_key_key" ON "CareCategory"("key");

-- CreateIndex
CREATE UNIQUE INDEX "ServiceCategory_key_key" ON "ServiceCategory"("key");
