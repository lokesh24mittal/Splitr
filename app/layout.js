import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Splitr",
  description: "The smart way to split bills with friends",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/logo-s.png" sizes="any" />
      </head>
      <body className={`${inter.className}`}>
        <main className="min-h-screen">
          <ClerkProvider>
            <ConvexClientProvider>
              <Header />
            </ConvexClientProvider>
          </ClerkProvider>
          {children}
        </main>
      </body>
    </html>
  );
}
