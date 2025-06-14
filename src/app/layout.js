import {Public_Sans, Inter} from "next/font/google";
import "./globals.css";

const public_sans = Public_Sans({
  variable: "--font-public_sans",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
export const metadata = {
  title: "Clicon App",
  description: "Clicon App project done by Md. Imran Hossain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${public_sans.variable} ${inter.variable} font-public_sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
