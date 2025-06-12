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
      {/* Gradient Background Container */}
      <div className="min-h-screen relative overflow-hidden">
        {/* Custom gradient with white hold and smooth blue-100 transition */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,_white_0%,_white_40%,_#EFF6FF_60%,_#DBEAFE_100%)]">
          {/* Alternative syntax that works in all browsers: */}
          {/* <div className="absolute inset-0 -z-10" style={{
            background: 'linear-gradient(90deg, white 0%, white 40%, #EFF6FF 60%, #DBEAFE 100%)'
          }}> */}
        </div>
        
        {/* Content container with grid layout */}
        <div className="grid lg:grid-cols-2 gap-0 min-h-screen relative">
          {/* Left side - Process Section (sits on white -> light blue transition) */}
          <div className="flex items-center justify-center p-4 lg:p-8">
            {/* Added a negative right margin on large screens to pull it closer to the center */}
            <div className="w-full max-w-4xl lg:-mr-20">
              <ProcessSection />
            </div>
          </div>
                     
          {/* Right side - Contact Form (sits on blue-100) */}
          <div id="contact-me" className="flex items-center justify-center p-4 lg:p-8">
            {/* Added a negative left margin on large screens to pull it closer to the center */}
            <div className="w-full max-w-xl lg:-ml-20">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* Other sections with proper spacing */}
      <div className="w-full bg-white">
        <Navbar />
        <QuoteSection />
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
    </div>
  );
}