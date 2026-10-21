import Image from "next/image";
import { asset } from "./content";

export default function Photo({
  n,
  src,
  alt,
  className = "",
  priority = false,
}: {
  n?: number;
  src?: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  const resolvedSrc = src || (n !== undefined ? asset(n) : "");

  if (!resolvedSrc) {
    return <div className={`mb-photo min-w-0 overflow-hidden rounded-[14px] bg-[#f5f1f7] ${className}`} role="img" aria-label={`${alt} photo not available`} />;
  }

  return (
    <div
      className={`mb-photo relative overflow-hidden rounded-[14px] min-w-0 [&_img]:object-cover ${className}`}
    >
      <Image
        src={resolvedSrc}
        alt={alt}
        fill
        sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 600px"
        priority={priority}
      />
    </div>
  );
}
