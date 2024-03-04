import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/common/Navbar/Navbar";
import ResponsiveNev from "@/common/Navbar/ResponsiveNev";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ['300','400', '700','900','500'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar/>
        <ResponsiveNev/>
        {children}
        </body>
    </html>
  );
}
