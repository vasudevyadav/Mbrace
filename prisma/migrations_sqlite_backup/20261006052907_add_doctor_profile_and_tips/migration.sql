-- CreateTable
CREATE TABLE "DoctorTip" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "doctorName" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "videoUrl" TEXT NOT NULL DEFAULT '',
    "order" INTEGER NOT NULL DEFAULT 0
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Doctor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL DEFAULT '',
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
INSERT INTO "new_Doctor" ("id", "image", "isFeatured", "languages", "location", "name", "order", "qualifications", "role", "yearsExperience") SELECT "id", "image", "isFeatured", "languages", "location", "name", "order", "qualifications", "role", "yearsExperience" FROM "Doctor";
DROP TABLE "Doctor";
ALTER TABLE "new_Doctor" RENAME TO "Doctor";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
