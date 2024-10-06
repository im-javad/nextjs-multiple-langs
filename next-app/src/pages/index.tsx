import Navigation from "@/components/navigation";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Index = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navigation />
      <div className="mt-5">
        <h1>{t("Eliot")}</h1>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default Index;
