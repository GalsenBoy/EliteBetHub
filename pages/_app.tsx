// pages/_app.tsx
import { useStore } from "@/lib/historique-store";
import type { AppProps } from "next/app";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const { loadTickets }: any = useStore();

  useEffect(() => {
    loadTickets();
  }, [loadTickets]);

  return <Component {...pageProps} />;
}

export default MyApp;
