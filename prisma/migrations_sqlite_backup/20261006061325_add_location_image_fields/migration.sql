-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Location" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "phoneHref" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mapUrl" TEXT NOT NULL,
    "heroImage" TEXT NOT NULL,
    "servicesImage" TEXT NOT NULL DEFAULT '',
    "clinicImage" TEXT NOT NULL DEFAULT '',
    "introParagraph" TEXT NOT NULL DEFAULT '',
    "whatToExpectIntro" TEXT NOT NULL DEFAULT '',
    "carePromiseIntro" TEXT NOT NULL DEFAULT '',
    "whyChooseIntro" TEXT NOT NULL DEFAULT '',
    "reachIntro" TEXT NOT NULL DEFAULT '',
    "order" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_Location" ("address", "carePromiseIntro", "email", "heroImage", "id", "introParagraph", "mapUrl", "name", "order", "phone", "phoneHref", "reachIntro", "slug", "whatToExpectIntro", "whyChooseIntro") SELECT "address", "carePromiseIntro", "email", "heroImage", "id", "introParagraph", "mapUrl", "name", "order", "phone", "phoneHref", "reachIntro", "slug", "whatToExpectIntro", "whyChooseIntro" FROM "Location";
DROP TABLE "Location";
ALTER TABLE "new_Location" RENAME TO "Location";
CREATE UNIQUE INDEX "Location_slug_key" ON "Location"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
