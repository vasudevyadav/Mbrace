export type DynamicPageItem = {
  title: string;
  description: string;
  image: string;
};

export type DynamicPageSection = {
  kind: "content";
  eyebrow: string;
  heading: string;
  body: string;
  image: string;
  imageAlt: string;
  layout: "text" | "image-left" | "image-right" | "cards";
  ctaLabel: string;
  ctaHref: string;
  items: DynamicPageItem[];
};

