import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://movie-night-rtk-next.vercel.app/"),
  title: {
    template: "%s | TV Shows",
    default: "TV Show",
  },
  openGraph: {
    type: "website",
    siteName: "TV Show",
    url: "https://movie-night-rtk-next.vercel.app/",
    images: [
      {
        url: "https://i.ibb.co/fvzKpdz/opengraph-image.jpg",
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};
const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <div className="min-h-screen">{children}</div>;
};

export default layout;
