import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import { use } from "react";

import { env } from "@/env";

import { PageParams } from "@/types";

export default function Home({ params }: { params: PageParams }) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations();

  return (
    <div>
      <h1 className="font-dm-sans text-4xl font-semibold tracking-tight">
        {t("home.title")}
      </h1>
      <p className="font-sans text-lg">{t("home.description")}</p>
      <p className="font-mono text-sm">{env.NEXT_PUBLIC_SITE_URL}</p>
    </div>
  );
}
