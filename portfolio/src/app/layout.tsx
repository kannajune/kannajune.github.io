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
  metadataBase: new URL("https://kannajune.github.io"),
  title: "Kannan Dharmalingam — Hands-on Engineering Leader, Enterprise AI Delivery & Team Building",
  description:
    "Hands-on engineering leader with 16+ years building and scaling cloud-native platforms, agentic AI systems, and the teams that ship them. Enterprise AI delivery, team building, and software architecture.",
  keywords: [
    "Engineering Leader",
    "Head of Engineering",
    "VP Engineering",
    "Director of Engineering",
    "Engineering Manager",
    "Team Building",
    "Enterprise AI Delivery",
    "Chief Technology Officer",
    "Cloud Solutions Architect",
    "AWS Certified Solutions Architect",
    "AWS DevOps Engineer",
    "Agentic AI",
    "Agentic Development",
    "Agentic Architecture",
    "AI Agents",
    "Multi-Agent Systems",
    "LLM Integration",
    "Generative AI",
    "RAG",
    "LangGraph",
    "IoT",
    "IoT Architecture",
    "Edge Computing",
    "System Design",
    "Microservices",
    "SaaS Architecture",
    "Data Engineering",
    "Chief Technology Officer",
    "Full-Stack Engineer",
    "React",
    "Angular",
    "Node.js",
    "Python",
    ".NET",
    "FastAPI",
    "Azure",
    "AWS",
    "Kubernetes",
    "Bengaluru",
    "India",
  ],
  authors: [{ name: "Kannan Dharmalingam", url: "https://kannajune.github.io" }],
  creator: "Kannan Dharmalingam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kannajune.github.io",
    siteName: "Kannan Dharmalingam",
    title: "Kannan Dharmalingam — Hands-on Engineering Leader, Enterprise AI Delivery & Team Building",
    description:
      "16+ years building and scaling cloud-native platforms, agentic AI systems, and the teams that ship them. Enterprise AI delivery and team building.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kannan Dharmalingam — Hands-on Engineering Leader, Enterprise AI & Team Building",
    description:
      "16+ years building and scaling cloud-native platforms, agentic AI systems, and the teams that ship them. Enterprise AI delivery and team building.",
    creator: "@kannajune",
  },
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
        suppressHydrationWarning
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
