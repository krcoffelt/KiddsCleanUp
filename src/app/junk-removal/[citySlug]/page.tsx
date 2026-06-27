import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CityServiceLandingPage from "@/components/CityServiceLandingPage";
import { buildPageMetadata } from "@/lib/metadata";
import { CITY_SERVICE_PAGES, getCityServicePage } from "@/lib/seo-pages";

export function generateStaticParams() {
  return CITY_SERVICE_PAGES
    .filter((page) => page.service === "junk-removal")
    .map((page) => ({ citySlug: page.citySlug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ citySlug: string }>;
}): Promise<Metadata> {
  return params.then(({ citySlug }) => {
    const page = getCityServicePage("junk-removal", citySlug);

    if (!page) {
      return {};
    }

    return buildPageMetadata({
      title: page.title,
      description: page.description,
      path: `/junk-removal/${page.citySlug}`,
    });
  });
}

export default async function JunkRemovalCityPage({
  params,
}: {
  params: Promise<{ citySlug: string }>;
}) {
  const { citySlug } = await params;
  const page = getCityServicePage("junk-removal", citySlug);

  if (!page) {
    notFound();
  }

  return <CityServiceLandingPage page={page} />;
}
