import localFont from "next/font/local";
import "./globals.css";
import { Card } from "@/components/ui/card";
import { ColorProvider } from "@/context/ColorContext";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ColorProvider>
        <body className={`font-sans antialiased`}>
          <header className="fixed top-4 left-4">
            <Card className="py-2 px-4 rounded-xl backdrop-blur-sm w-fit bg-black shadow-none border-0 text-white">
              <h1 className="font-semibold text-[13px] tracking-tighter text-s font-mono">
                Color tester 0.0.1
              </h1>
            </Card>
          </header>
          {children}
        </body>
      </ColorProvider>
    </html>
  );
}
