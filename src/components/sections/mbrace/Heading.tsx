import type { ReactNode } from "react";

export default function Heading({
  label,
  children,
  description,
  className = "",
  headingClassName = "",
  eyebrowClassName = "",
  descriptionClassName = "",
}: {
  label: string;
  children: ReactNode;
  description?: string;
  className?: string;
  headingClassName?: string;
  eyebrowClassName?: string;
  descriptionClassName?: string;
}) {
  return (
    <div className={`mb-heading mb-5 ${className}`}>
      <p className={`mb-eyebrow mb-3.5 text-[12px] font-semibold text-care-gold md:text-[20px] ${eyebrowClassName}`}>
        {label}
      </p>
      <h2 className={`text-[30px] font-semibold leading-[1.35] tracking-[-.7px] text-care-navy md:text-[31px] md:tracking-[-1.1px] lg:text-[35px] xl:text-[41px] [&_em]:not-italic [&_em]:font-extrabold [&_em]:text-care-gold ${headingClassName}`}>
        {children}
      </h2>
      {description && (
        <p className={`mt-4.5 leading-[1.65] ${descriptionClassName}`}>
          {description}
        </p>
      )}
    </div>
  );
}
