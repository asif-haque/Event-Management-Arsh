import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import { EventsContextProvider } from "@/lib/EventsContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-tr from-white to-slate-100 bg-no-repeat`}
      >
        <EventsContextProvider>
          <nav>
            <Navbar />
          </nav>
          {children}
        </EventsContextProvider>
      </body>
    </html>
  );
}
