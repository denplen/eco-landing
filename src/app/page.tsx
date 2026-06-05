import { AudienceSolutionsSection } from "@/components/sections/AudienceSolutionsSection";
import { CredentialsSection } from "@/components/sections/CredentialsSection";
import { ExpertiseSupportSection } from "@/components/sections/ExpertiseSupportSection";
import { FaqContactSection } from "@/components/sections/FaqContactSection";
import { FieldWorkGallerySection } from "@/components/sections/FieldWorkGallerySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessAndPricingSection } from "@/components/sections/ProcessAndPricingSection";
import { ScopeAndDeliverablesSection } from "@/components/sections/ScopeAndDeliverablesSection";
import { TrustStatsSection } from "@/components/sections/TrustStatsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustStatsSection />
      <AudienceSolutionsSection />
      <ScopeAndDeliverablesSection />
      <FieldWorkGallerySection />
      <ExpertiseSupportSection />
      <ProcessAndPricingSection />
      <CredentialsSection />
      <FaqContactSection />
    </main>
  );
}
