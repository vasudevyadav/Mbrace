import { config } from "dotenv";
import { defineConfig } from "prisma/config";

// Match Next.js local-development precedence: local secrets override `.env`.
config({ path: ".env.local" });
config();

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    seed: "tsx prisma/seed.ts",
  },
});
