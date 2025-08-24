import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Saurabh Yadav - Full Stack Web Developer | React.js, Next.js, Node.js Expert",
  description: "Full Stack Web Developer with 1.6 years of experience in React.js, Next.js, Node.js, TypeScript, and modern web technologies. View portfolio projects and get in touch for web development opportunities.",
  keywords: [
    "Full Stack Developer",
    "React.js Developer",
    "Next.js Developer", 
    "Node.js Developer",
    "Web Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "Web Development",
    "React Developer",
    "Next.js Portfolio",
    "Node.js Portfolio"
  ],
  authors: [{ name: "Saurabh Yadav" }],
  creator: "Saurabh Yadav",
  publisher: "Saurabh Yadav",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://saurabhyadav.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Saurabh Yadav - Full Stack Web Developer",
    description: "Full Stack Web Developer with 1.6 years of experience in React.js, Next.js, Node.js, and modern web technologies. View portfolio projects and get in touch for web development opportunities.",
    url: 'https://saurabhyadav.dev',
    siteName: 'Saurabh Yadav Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Saurabh Yadav - Full Stack Web Developer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saurabh Yadav - Full Stack Web Developer',
    description: 'Full Stack Web Developer with 1.6 years of experience in React.js, Next.js, Node.js, and modern web technologies.',
    images: ['/og-image.png'],
    creator: '@saurabhyadav',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://saurabhyadav.dev" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        
        {/* Enhanced Structured Data */}
        <StructuredData />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
