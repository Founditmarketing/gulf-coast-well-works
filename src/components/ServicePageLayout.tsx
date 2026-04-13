import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  benefits: string[];
}

export function ServicePageLayout({ title, subtitle, description, image, features, benefits }: ServicePageLayoutProps) {
  return (
    <div className="pt-10">
      {/* Hero Section */}
      <section className="bg-brand-bg text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={image} alt={title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">{title}</h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">{subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-brand-secondary hover:bg-brand-secondary/90 text-white font-bold">
                <Link to="/contact">
                  Get a Free Quote
                </Link>
              </Button>
              <a href="tel:228-265-2019">
                <Button size="lg" variant="outline" className="bg-white border-white text-brand-bg hover:bg-brand-primary hover:text-white font-bold transition-all duration-300">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold font-heading text-brand-bg mb-6">Service Overview</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">{description}</p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-slate-50 p-8 rounded-3xl">
                  <h3 className="text-xl font-bold font-heading text-brand-bg mb-6">What's Included</h3>
                  <ul className="space-y-4">
                    {features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-brand-primary/5 p-8 rounded-3xl">
                  <h3 className="text-xl font-bold font-heading text-brand-bg mb-6">Key Benefits</h3>
                  <ul className="space-y-4">
                    {benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-secondary mt-1 flex-shrink-0" />
                        <span className="text-slate-700 font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-brand-bg text-white p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="text-2xl font-bold font-heading mb-2">Need Emergency Assistance?</h3>
                  <p className="text-slate-300">Our team is available 24/7 for urgent well and pump repairs.</p>
                </div>
                <Button size="lg" className="bg-brand-secondary hover:bg-brand-secondary/90 text-white font-bold whitespace-nowrap">
                  Contact Emergency Team
                </Button>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="sticky top-32 space-y-8">
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <img src={image} alt={title} className="w-full aspect-square object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                  <h3 className="text-xl font-bold font-heading text-brand-bg mb-4 text-center">Ready to Start?</h3>
                  <p className="text-slate-600 text-center mb-6">Schedule your inspection today and ensure your water supply is in top condition.</p>
                  <Link to="/#contact">
                    <Button className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white font-bold h-12">
                      Book Inspection
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
