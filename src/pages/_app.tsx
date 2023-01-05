import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { AppStateProvider } from "../providers/appState";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <AppStateProvider>
        <Navbar />
        <Component {...pageProps} />
      </AppStateProvider>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
