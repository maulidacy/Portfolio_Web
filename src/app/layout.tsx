import PageTransition from "@/components/layout/page-transition";
import { MotionProvider } from "@/components/layout/motion";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { VercelAnalytics } from "@/components/providers/vercel-analytics";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MotionProvider>
            <Navbar />
            <PageTransition>
              <main>{children}</main>
            </PageTransition>
            <Footer />
            <VercelAnalytics />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
