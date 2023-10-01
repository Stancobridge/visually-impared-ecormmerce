import { NextUIProvider } from "@nextui-org/react";
import "@radix-ui/themes/styles.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { MainLayout } from "../components";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <div className={inter.className}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </div>
    </NextUIProvider>
  );
}
