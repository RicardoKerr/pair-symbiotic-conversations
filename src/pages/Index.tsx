
import BePairHero from "@/components/BePairHero";
import BePairIntro from "@/components/BePairIntro";
import DashboardDemo from "@/components/DashboardDemo";
import WhatsAppDemo from "@/components/WhatsAppDemo";
import WebDemo from "@/components/WebDemo";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <BePairHero />
      <BePairIntro />
      <DashboardDemo />
      <WhatsAppDemo />
      <WebDemo />
      <ContactSection />
    </div>
  );
};

export default Index;
