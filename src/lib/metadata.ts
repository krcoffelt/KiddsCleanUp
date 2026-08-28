import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";

const DEFAULT_IMAGE = "/images/Screenshot_Homepage_Kidds.png";

export function buildPageMetadata({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  imageAlt = `${COMPANY.name} service page`,
  imageWidth = 3338,
  imageHeight = 1410,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: COMPANY.name,
      images: [
        {
          url: image,
          width: imageWidth,
          height: imageHeight,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
