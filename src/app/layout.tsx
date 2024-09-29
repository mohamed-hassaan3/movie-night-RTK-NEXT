import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import StoreProvider from "@/lib/redux/StoreProvider";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://movie-night-rtk-next.vercel.app/"),
  title: {
    default: "Movie Night",
    template: "%s | Movie Night"
  },
  description: "A Next.js movie database application built with React, Redux Toolkit, and Axios. It offers real-time movie, TV show, and actor search and filtering capabilities. The app uses server-side actions for dynamic data updates and leverages responsive design for an optimized experience across devices. Features include API integration, global state management, and seamless UI interactions.",
  alternates: {
    languages: {
      'en-US': '/en-US'
    }
  },
  openGraph: {
    siteName: "Movie Night",
    type: "website",
    url: "https://movie-night-rtk-next.vercel.app/",
    images: [
      {
        url: "https://i.ibb.co/fvzKpdz/opengraph-image.jpg",
        width: 800,
        height: 600
      }
    ]
  },
  twitter: { 
    card: "summary_large_image"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
        suppressHydrationWarning={true}
      >
        <NextTopLoader
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        <StoreProvider>
          <header className="bg-darkBlue text-white font-medium p-4 w-full">
            <Header />
          </header>
          {children}
          <footer className="bg-darkBlue text-white py-6">
            <Footer />
          </footer>
        </StoreProvider>
      </body>
    </html>
  );
}
