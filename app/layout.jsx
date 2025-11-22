import "./globals.css"

const _geist = "Geist"
const _geistMono = "Geist Mono"

export const metadata = {
  title: "FloraVision - Premium Indoor Plants",
  description: "Discover our collection of premium indoor plants for your home and office",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased bg-slate-900 text-white`}>{children}</body>
    </html>
  )
}
