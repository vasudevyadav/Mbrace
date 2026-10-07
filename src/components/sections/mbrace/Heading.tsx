import type { ReactNode } from "react";

export default function Heading({
  label,
  children,
  description,
}: {
  label: string;
  children: ReactNode;
  description?: string;
}) {
  return (
    <div className="mb-heading mb-5 [&_h2]:text-[30px] [&_h2]:tracking-[-.7px] md:[&_h2]:text-[31px] lg:[&_h2]:text-[35px] xl:[&_h2]:text-[41px] [&_h2]:leading-[1.35] [&_h2]:font-semibold [&_h2]:text-care-navy md:[&_h2]:tracking-[-1.1px] [&>p:last-child:not(.mb-eyebrow)]:mt-4.5">
      <p className="mb-eyebrow text-[12px] md:text-[20px] font-semibold text-care-gold mb-3.5">
        {label}
      </p>
      <h2>{children}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
