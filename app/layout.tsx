import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/UI/Sidebar/Sidebar";
import { cookies } from "next/headers";
import Notification from "@/components/UI/Notification";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jwt = cookies().get("jwt")?.value;

  // there spossed to be a notification provider to show notifications
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F7FAFC]`}>
        <div className="grid h-screen grid-cols-[auto,1fr]">
          {jwt ? (
            <>
              <Notification />
              <Sidebar />
            </>
          ) : (
            <div></div>
          )}

          {children}
        </div>
      </body>
    </html>
  );
}