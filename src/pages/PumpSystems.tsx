import { ServicePageLayout } from '@/src/components/ServicePageLayout';

export default function PumpSystems() {
  return (
    <ServicePageLayout
      title="Pump Systems"
      subtitle="High-efficiency pumps and pressure tanks for consistent water flow."
      description="A reliable pump is the heart of your well system. We install and repair high-performance pump systems that provide consistent pressure and efficient operation, tailored to the specific needs of your property."
      image="/gc3.jpg"
      features={[
        "Submersible Pump Installation",
        "Jet Pump Repair & Service",
        "Pressure Tank Replacement",
        "Variable Speed Drive Systems",
        "Pump Control Box Repair"
      ]}
      benefits={[
        "Consistent Water Pressure",
        "Energy-Efficient Operation",
        "Quiet System Performance",
        "Reduced Maintenance Costs",
        "Extended System Lifespan"
      ]}
    />
  );
}
