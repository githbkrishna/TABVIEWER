import { Geist, Geist_Mono } from "next/font/google";
// import "./global.css";
import "./main.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TABVIEWER | All Important tabs in one place",
  description: "TabViewer helps you to view your browser tabs with ease & efficient content navigation . Discover a simple and efficient way to boost productivity.",
  keywords: "tabs, viewer, content, navigation, TabViewer, browser tabs, productivity",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="favicon" href="/static/1.png" type="image/png" sizes="32x32" />
        {/* Add Font Awesome CDN link */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
