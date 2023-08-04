import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CodeToImg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {process.env.NODE_ENV === "production" && (
          <script
            defer
            src="https://unpkg.com/@tinybirdco/flock.js"
            data-host="https://api.us-east.tinybird.co"
            data-token="p.eyJ1IjogIjFjMzk3M2IzLTMwMTQtNDAyOS04MzQ5LThiMDY0ZDY0NDljMiIsICJpZCI6ICIyZmE4NTFhYS1mNzhmLTQ3ZjEtYTQ1YS02ZDIxZWU3MGFiYWUiLCAiaG9zdCI6ICJ1c19lYXN0In0.vFFS3LTMAqCSHDRaOwCpZTCDdR_BGQNahOrgCA87XR8"
          />
        )}
      </head>
      <body>{children}</body>
    </html>
  );
}
