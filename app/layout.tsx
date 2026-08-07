import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "@/components/navigation";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Namit Bhandula | Senior Technical Recruiter & Operations Specialist",
  description:
    "Senior Technical Recruiter specializing in US/Canadian staffing, global talent sourcing, and recruitment operations. Fortune 500 partnerships. 29 placements, $194/hr margin efficiency.",
  keywords: [
    "Technical Recruiter",
    "Staffing",
    "Talent Sourcing",
    "Recruitment Operations",
    "US Staffing",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${plusJakarta.variable} font-inter bg-slate-950 text-slate-100`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
