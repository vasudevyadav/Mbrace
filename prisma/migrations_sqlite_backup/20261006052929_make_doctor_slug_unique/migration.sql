-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Doctor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "qualifications" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "yearsExperience" TEXT NOT NULL,
    "languages" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "order" INTEGER NOT NULL DEFAULT 0,
    "designation" TEXT NOT NULL DEFAULT '',
    "bio" TEXT NOT NULL DEFAULT '',
    "timing" TEXT NOT NULL DEFAULT '',
    "phone" TEXT NOT NULL DEFAULT '',
    "email" TEXT NOT NULL DEFAULT '',
    "fullAddress" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_Doctor" ("bio", "designation", "email", "fullAddress", "id", "image", "isFeatured", "languages", "location", "name", "order", "phone", "qualifications", "role", "slug", "timing", "yearsExperience") SELECT "bio", "designation", "email", "fullAddress", "id", "image", "isFeatured", "languages", "location", "name", "order", "phone", "qualifications", "role", "slug", "timing", "yearsExperience" FROM "Doctor";
DROP TABLE "Doctor";
ALTER TABLE "new_Doctor" RENAME TO "Doctor";
CREATE UNIQUE INDEX "Doctor_slug_key" ON "Doctor"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
