import Link from "next/link";
import { useRouter } from "next/router";

const LocaleSwitcher = () => {
  const router = useRouter();

  const { locales, locale: activeLocale } = router;

  const otherLocales = locales?.filter(
    (locale) => locale !== activeLocale && locale !== "default"
  );

  return (
    <span className="text-muted cursor-pointer">
      {otherLocales?.map((locale) => {
        const { pathname, query, asPath } = router;
        return (
          <span key={"locale-" + locale}>
            <Link href={{ pathname, query }} as={asPath} locale={locale}>
              {locale === "en" ? "English" : locale === "fa" ? "فارسی" : null}
            </Link>
          </span>
        );
      })}
    </span>
  );
};

export default LocaleSwitcher;
