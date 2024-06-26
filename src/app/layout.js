import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header/Header";
import Footer from "@/components/Layout/Footer/Footer";
import ReduxProvider from "@/redux/reduxProvider";

const poppin = Poppins({ subsets: ["latin"], weight: ["400", "600", "500"] });

export const metadata = {
  title: "Tredella",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppin.className}>
        <ReduxProvider>
          <Header />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
