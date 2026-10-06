-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ServiceItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "categoryId" INTEGER NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "detail" TEXT NOT NULL DEFAULT '',
    "heroImage" TEXT NOT NULL DEFAULT '',
    CONSTRAINT "ServiceItem_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ServiceCategory" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_ServiceItem" ("categoryId", "description", "detail", "heroImage", "id", "name", "order", "slug") SELECT "categoryId", "description", "detail", "heroImage", "id", "name", "order", "slug" FROM "ServiceItem";
DROP TABLE "ServiceItem";
ALTER TABLE "new_ServiceItem" RENAME TO "ServiceItem";
CREATE UNIQUE INDEX "ServiceItem_slug_key" ON "ServiceItem"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
