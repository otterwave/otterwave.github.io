import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Otterwave",
  description: "One stop shop for your marketing automation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-poppins bg-gradient-to-br from-teal-500 from-40% to-ternary">
        <main className="flex flex-col justify-between min-h-[calc(100dvh)] w-full md:w-full sm:w-full lg:w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
