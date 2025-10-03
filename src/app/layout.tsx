import type { Metadata } from "next";
import "./globals.css";
import TelegramInit from "@/component/TelegramInit";
import {ReactNode} from "react";

export const metadata: Metadata = {
  title: "VuzHelpList",
  description: "VuzHelpList",
};

export default function RootLayout({children}: Readonly<{ children: ReactNode; }>) {
  return (
    <html lang="en">
      <body>
      <TelegramInit>
        {children}
      </TelegramInit>
      </body>
    </html>
  );
}
