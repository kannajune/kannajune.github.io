import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kannan Dharmalingam - Chief Technology Officer & Technology Leader",
  description: "Hands-on technology leader with 15+ years of experience, specializing in UI and cloud-native architectures, scalable data pipelines, and distributed systems. AWS certified CTO driving digital transformation.",
  keywords: ["CTO", "Chief Technology Officer", "technology leader", "cloud architecture", "react", "angular", "node.js", "python", "azure", "kubernetes", "AWS certified", "system design", "team leadership"],
  authors: [{ name: "Kannan Dharmalingam" }],
  creator: "Kannan Dharmalingam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
