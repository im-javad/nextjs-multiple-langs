import LocaleSwitcher from "./lang-switcher";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useEffect } from "react";

const Navigation = () => {
  const router = useRouter();

  const { t } = useTranslation();

  useEffect(() => {
    let dir = router.locale == "fa" ? "rtl" : "ltr";
    let lang = router.locale == "fa" ? "fa" : "en";
    document.querySelector("html")?.setAttribute("dir", dir);
    document.querySelector("html")?.setAttribute("lang", lang);
  }, [router.locale]);

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <div className="navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <LocaleSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
