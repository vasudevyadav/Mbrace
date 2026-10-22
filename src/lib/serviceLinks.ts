import { slugify } from "@/lib/slugify";

const legacyToCanonicalSlug: Record<string, string> = {
  "preventive-women-s-health-packages": "preventive-women-health-packages",
  "women-s-wellness-support": "women-wellness-support",
};

const canonicalToLegacySlug = Object.fromEntries(
  Object.entries(legacyToCanonicalSlug).map(([legacy, canonical]) => [canonical, legacy]),
);

export function getCanonicalServiceSlug(slug: string) {
  return legacyToCanonicalSlug[slug] ?? slug;
}

export function getStoredServiceSlug(slug: string) {
  return canonicalToLegacySlug[slug] ?? slug;
}

export function getServiceSlug(name: string) {
  return getCanonicalServiceSlug(slugify(name));
}

export function getServiceHref(name: string) {
  return `/services/${getServiceSlug(name)}`;
}
