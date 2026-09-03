export default function SectionHeading({
  label,
  title,
  description,
  align = "left",
  tone = "default",
}: {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "inverted";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {label ? (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.14em] ${
            tone === "inverted" ? "text-accent-300" : "text-accent-600"
          }`}
        >
          {label}
        </p>
      ) : null}
      <h2
        className={`text-3xl font-display font-medium tracking-tight sm:text-4xl ${
          tone === "inverted" ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-relaxed ${
            tone === "inverted" ? "text-brand-100" : "text-ink-500"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
