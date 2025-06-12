// page.tsx
import AIServicesSection from "@/components/features/AIServicesSection";
import ContactForm from "@/components/features/contactme";
import Navbar from "@/components/features/Navbar";
import PartnerSection from "@/components/features/PartnerSection";
import PricingSection from "@/components/features/PricingSection";
import ProcessSection from "@/components/features/ProcessSection";
import QuoteSection from "@/components/features/QuoteSection";
import { Separator } from "@/components/features/Seperator";

export default function Page() {
  return (
    <div className="w-full">
      <Navbar />

      <div className="relative overflow-hidden pt-24 lg:pt-0 mb-16 lg:mb-0">
        {/* The gradient background element, filling this entire container */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,_white_0%,_white_40%,_#EFF6FF_60%,_#DBEAFE_100%)]" />
        
        {/* Hero Content grid
            - 'mb-16' adds bottom margin on mobile.
            - 'lg:mb-0' REMOVES the bottom margin on large screens.
        */}
        <div className="grid lg:grid-cols-2 gap-0 min-h-screen relative mb-16 lg:mb-0">
          <div className="flex items-center justify-center p-4 lg:p-8">
            <div className="w-full max-w-4xl lg:-mr-20">
              <ProcessSection />
            </div>
          </div>
          <div id="contact-me" className="flex items-center justify-center p-4 lg:p-8">
            <div className="w-full max-w-xl lg:-ml-20">
              <ContactForm />
            </div>
          </div>
        </div>

        {/* QuoteSection now has space above it only on mobile view. */}
        <QuoteSection />
      </div>

      {/* The rest of the page sections, starting after the gradient container */}
      <div className="py-8"></div>
      <div id="services">
        <AIServicesSection />
      </div>
      <Separator />
      <PartnerSection />
      <Separator />
      <div id="pricing">
        <PricingSection />
      </div>
    </div>
  );
}