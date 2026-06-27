import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";

const DEFAULT_IMAGE = "/images/Screenshot_Homepage_Kidds.png";

export function buildPageMetadata({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
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
          width: 3338,
          height: 1410,
          alt: `${COMPANY.name} service page`,
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

