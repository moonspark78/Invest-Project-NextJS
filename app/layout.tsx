import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const font = Poppins({
    weight: ["100","200","300","400","500","600","700","800","900"],
    subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Investment Website",
  description: "Investment platform creation tool.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
          {children}
      </body>
    </html>
  );
}
