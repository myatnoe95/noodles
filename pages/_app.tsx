import React from "react";
import type { AppProps } from "next/app";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import { RegisterProvider } from "@/contexts/RegisterContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <NavBar />
      <RegisterProvider>
        <Component {...pageProps} />
      </RegisterProvider>
      <Footer />
    </React.Fragment>
  );
}
