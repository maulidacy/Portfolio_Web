import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/sections/hero"), { ssr: false });

export const metadata = {
  title: "Maulida Cahya Kurnia — Home",
  description: "AI/ML Engineer. Intro landing page.",
};

export default function HomePage() {
  return <Hero />;
}
