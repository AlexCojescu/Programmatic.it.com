import AIServicesSection from "@/components/features/AIServicesSection";

import ContactForm from "@/components/features/contactme";
import Navbar from "@/components/features/Navbar";
import PartnerSection from "@/components/features/PartnerSection";
import PricingSection from "@/components/features/PricingSection";
import ProcessSection from "@/components/features/ProcessSection";
import QuoteSection from "@/components/features/QuoteSection";


export default function Page() {
  return (
    <div className="w-full">
      {/* Combined Layout Section - Full width, no extra spacing */}
      <div className="min-h-screen bg-white">
        <div className="grid lg:grid-cols-2 gap-0 min-h-screen">
          {/* Left side - Process Section */}
          <div className="flex items-center justify-center p-4 lg:p-8">
            <div className="w-full max-w-4xl">
              <ProcessSection />
            </div>
          </div>
          
          {/* Right side - Contact Form */}
          <div className="flex items-center justify-center bg-white p-4 lg:pl-8 lg:pr-8">
            <div className="w-full max-w-md">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* Other sections with proper spacing */}
      <div className="w-full">
        <Navbar />
        
        <QuoteSection />
        
        {/* Added spacing between Quote and Services sections */}
        <div className="py-8"></div>
        
        <AIServicesSection />
        <PartnerSection />
        <PricingSection />
   
      </div>
    </div>
  );
}