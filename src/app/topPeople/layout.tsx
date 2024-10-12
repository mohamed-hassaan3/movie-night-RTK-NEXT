import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://movie-night-rtk-next.vercel.app/"),
  title: {
    default: "Top Persons",
    template: "%s | Top Person",
  },
  description:
    "A Next.js movie database application built with React, Redux Toolkit, and Axios. It offers real-time movie, TV show, and actor search and filtering capabilities. The app uses server-side actions for dynamic data updates and leverages responsive design for an optimized experience across devices. Features include API integration, global state management, and seamless UI interactions.",
  alternates: {
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    siteName: "Movie Night",
    type: "website",
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
