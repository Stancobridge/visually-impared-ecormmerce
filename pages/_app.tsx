import { NextUIProvider } from "@nextui-org/react";
import "@radix-ui/themes/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { bootstrapQueryRequest } from "@ventlio/tanstack-query";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { MainLayout } from "../components";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

// Global queryClient
const queryClient = new QueryClient();

// do this before adding the queryClient to QueryClientProvider
bootstrapQueryRequest(queryClient);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <div className={inter.className}>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </div>
      </NextUIProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
