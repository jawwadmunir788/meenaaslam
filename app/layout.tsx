import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Meena Aslam - International Cargo Services",
  description:
    "Fast, Reliable Cargo Delivered to Your Doorstep. From China to anywhere in the world, we ensure safe, timely and cost effective delivery through air and sea.",
  icons: {
    icon: "/images/logo.png",
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          enableColorScheme
          disableTransitionOnChange={false}
          storageKey="meena-aslam-theme"
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
