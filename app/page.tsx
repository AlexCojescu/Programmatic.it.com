import AIServicesSection from "@/components/features/AIServicesSection";
import ContactForm from "@/components/features/contactme";
import Navbar from "@/components/features/Navbar";
import PartnerSection from "@/components/features/PartnerSection";
import PricingSection from "@/components/features/PricingSection";
import ProcessSection from "@/components/features/ProcessSection";
import QuoteSection from "@/components/features/QuoteSection";
import { Separator } from "@/components/features/Seperator";
import CalendlyWidget from "@/components/features/CalendlyWidget";
import HeroSection from "@/components/features/HeroSection";
import { TypingAnimation } from "@/components/magicui/typing-animation"; // Assuming this is the correct path

export default function Page() {
  return (
    <div className="w-full">
      <Navbar />

      <HeroSection />

      {/* Main content container that scrolls OVER the hero */}
      <div className="relative z-10 bg-white">
        {/*
          This grid container is now responsible for its own background.
        */}
        <div className="relative grid lg:grid-cols-2 gap-0 min-h-screen overflow-hidden">
          {/* The gradient is now INSIDE and scoped only to this grid */}
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,_white_0%,_white_40%,_#EFF6FF_60%,_#DBEAFE_100%)]" />

          {/* Grid Content */}
          <div className="flex items-center justify-center p-4 lg:p-8">
            <div className="w-full max-w-4xl lg:-mr-20">
              <ProcessSection />
            </div>
          </div>
          <div
            id="contact-me"
            className="flex items-center justify-center p-4 lg:p-8"
          >
            <div className="w-full max-w-xl lg:-ml-20">
              <ContactForm />
            </div>
          </div>
        </div>

        {/* These sections are now siblings to the grid container above. */}
        <QuoteSection />
        <div className="py-8" />
        <div id="services">
          <AIServicesSection />
        </div>
        <Separator />
        <PartnerSection />
        <Separator />
        <div id="pricing">
          <PricingSection />
        </div>

        {/* --- CONTAINER FOR CENTERING HEADING AND WIDGET --- */}
        <div className="flex flex-col items-center gap-8 py-12 px-4">
          <TypingAnimation
            as="h2"
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center"
            startOnView={true} // Animation starts when visible
            delay={200} // A slight delay before starting
            duration={50} // Speed of typing in ms
          >
            Book Your Free Consultation
          </TypingAnimation>

          {/* Calendly Widget is now wrapped to control its width independently */}
          <div className="w-full max-w-5xl">
             <CalendlyWidget />
          </div>
        </div>
      </div>
    </div>
  );
}