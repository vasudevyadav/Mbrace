import Image from "next/image";
import { asset } from "./content";

export default function Photo({
  n,
  src,
  alt,
  className = "",
  priority = false
}: {
  n?: number;
  src?: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return <div className={`mb-photo relative overflow-hidden rounded-[14px] min-w-0 [&_img]:object-cover ${className}`}><Image src={src ?? asset(n!)} alt={alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 600px" priority={priority} /></div>;
}
