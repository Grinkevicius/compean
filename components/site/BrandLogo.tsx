import Image from "next/image";
import Link from "next/link";
import { company, images } from "@/lib/site/constants";

type BrandLogoProps = {
  size?: number;
  preload?: boolean;
};

export function BrandLogo({ size = 76, preload = false }: BrandLogoProps) {
  return (
    <Link className="brand" href="/" aria-label={`${company.name} home`}>
      <Image
        src={images.logo}
        alt={`${company.name} logo`}
        width={532}
        height={484}
        preload={preload}
        style={{ height: size, width: "auto" }}
      />
    </Link>
  );
}
