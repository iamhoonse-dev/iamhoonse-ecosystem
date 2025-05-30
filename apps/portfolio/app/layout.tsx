import type { Metadata } from "next";
import localFont from "next/font/local";
import { isInNodeRuntime } from "@iamhoonse-js/node-utils/misc";
import { ls } from "@iamhoonse-js/node-utils/fs";
import { USE_MSW } from "../configs/mocks";
import ApplyMSW from "../containers/ApplyMSW";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

if (process.env.NODE_ENV === "development") {
  // check if we are in node runtime
  console.log("isInNodeRuntime", isInNodeRuntime());

  // see files in the current directory
  console.log("ls", JSON.stringify(ls(), null, 2));
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {!USE_MSW ? children : <ApplyMSW>{children}</ApplyMSW>}
      </body>
    </html>
  );
}
