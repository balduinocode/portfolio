import Header from "@/components/sections/header";
import AboutSection from "@/components/sections/about";
import Currently from "@/components/sections/currently";
import WorkSection from "@/components/sections/work";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="max-w-xl mx-auto space-y-12 min-h-screen py-24 px-8">
      <Header />
      <AboutSection />
      <Currently />
      <WorkSection />
      <Footer />
    </main>
  );
}
