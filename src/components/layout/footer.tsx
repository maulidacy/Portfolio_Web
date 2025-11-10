import Link from "next/link";
import SocialLinks from "../shared/social-links";
import Container from "./container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <Container className="py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built with{" "}
              <Link
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-4"
              >
                Next.js
              </Link>{" "}
              and{" "}
              <Link
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-4"
              >
                Tailwind CSS
              </Link>
              .
            </p>
          </div>
          <div className="flex items-center gap-4">
            <SocialLinks />
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-muted-foreground">
          © {currentYear} Cahya Maulida. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
