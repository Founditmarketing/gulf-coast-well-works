import { ServicePageLayout } from '@/src/components/ServicePageLayout';

export default function WellServices() {
  return (
    <ServicePageLayout
      title="Well Services"
      subtitle="Expert drilling, repair, and maintenance for residential water wells."
      description="At Gulf Coast Well Works, we provide comprehensive well services designed to keep your water flowing reliably. From initial drilling to complex repairs and routine maintenance, our certified team has the experience to handle any well-related challenge."
      image="https://picsum.photos/seed/welldrilling/800/800"
      features={[
        "New Well Drilling & Installation",
        "Well Deepening & Rehabilitation",
        "Casing Repair & Replacement",
        "Well Abandonment Services",
        "Water Quality Testing"
      ]}
      benefits={[
        "Reliable Water Supply",
        "Long-Term System Durability",
        "Compliance with MS Regulations",
        "Improved Water Yield",
        "Peace of Mind"
      ]}
    />
  );
}
