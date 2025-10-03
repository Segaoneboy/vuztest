"use client"
import { ReactNode } from "react";
import { SDKProvider } from "@telegram-apps/sdk-react";
import { AppRoot, ThemeProvider } from "@telegram-apps/telegram-ui";

export default function TelegramInit({ children }:{ children: ReactNode; }) {
    return(
        <SDKProvider>
            <ThemeProvider>
                <AppRoot>{children}</AppRoot>
            </ThemeProvider>
        </SDKProvider>
    )
}