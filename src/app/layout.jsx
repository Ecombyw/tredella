import MUIThemeProvider from "@/components/layout/provider/mui-theme-provider";
import "./globals.css";
import Head from "next/head";
import ReduxProvider from "@/lib/redux/redux-provider";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import MainWrapper from "@/components/common/wrappers/main-wrapper";

export const metadata = {
  title: "Tradella",
  description: "Generated by ECommerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <MUIThemeProvider>
        <ReduxProvider>
          <body
            style={{
              backgroundColor: "rgba(236, 240, 244, 1)",
              padding:"0px !important"
            }}
          >
            <MainWrapper>{children}</MainWrapper>
          </body>
        </ReduxProvider>
      </MUIThemeProvider>
    </html>
  );
}