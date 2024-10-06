import { AppProps } from "next/app";
import "./globals.css";
import { appWithTranslation } from "next-i18next";
import "bootstrap/dist/css/bootstrap.min.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default appWithTranslation(MyApp);
