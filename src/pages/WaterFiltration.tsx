import { ServicePageLayout } from '@/src/components/ServicePageLayout';

export default function WaterFiltration() {
  return (
    <ServicePageLayout
      title="Water Filtration"
      subtitle="Advanced systems for safe, clean, and great-tasting water."
      description="Don't settle for anything less than pure water. Our advanced filtration solutions remove contaminants, minerals, and odors, ensuring your family has access to the highest quality water for drinking, cooking, and bathing."
      image="https://picsum.photos/seed/waterfilter/800/800"
      features={[
        "Whole-House Filtration Systems",
        "Reverse Osmosis Installation",
        "Water Softener Systems",
        "Iron & Sulfur Removal",
        "UV Sterilization Units"
      ]}
      benefits={[
        "Healthier Drinking Water",
        "Better Tasting Food & Drinks",
        "Protected Plumbing & Appliances",
        "Softer Skin & Hair",
        "Reduced Plastic Waste"
      ]}
    />
  );
}
