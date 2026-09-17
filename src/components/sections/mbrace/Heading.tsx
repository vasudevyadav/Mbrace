import type { ReactNode } from "react";

export default function Heading({
  label,
  children,
  description
}: {
  label: string;
  children: ReactNode;
  description?: string;
}) {
  return <div className="mb-heading mb-5 max-[701px]:[&_h2]:text-[30px] max-[701px]:[&_h2]:tracking-[-.7px] min-[701px]:max-[1001px]:[&_h2]:text-[31px] min-[1001px]:max-[1201px]:[&_h2]:text-[35px] min-[1201px]:[&_h2]:text-[42px] [&_h2]:leading-[1.35] [&_h2]:font-semibold [&_h2]:text-care-navy min-[701px]:[&_h2]:tracking-[-1.1px] [&>p:last-child:not(.mb-eyebrow)]:mt-4.5"><p className="mb-eyebrow max-[701px]:text-[12px] min-[701px]:text-[14px] font-semibold text-care-gold mb-3.5">{label}</p><h2>{children}</h2>{description && <p>{description}</p>}</div>;
}
