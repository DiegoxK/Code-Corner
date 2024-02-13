import "@/styles/globals.css";

import { Metadata } from "next";
import { Atkinson } from "@/components/ui/fonts";
import { cn } from "@/lib/utils";
import Header from "@/components/ui/header";

export const metadata: Metadata = {
  title: "Code Corner",
  description: "Code Snipping and Sharing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background text-foreground font-sans antialiased",
          Atkinson.className
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
