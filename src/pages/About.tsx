import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Clock, 
  Award, 
  Users, 
  CheckCircle2,
  Heart,
  Target,
  History
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function About() {
  const values = [
    {
      title: "Integrity First",
      description: "We believe in honest assessments and fair pricing. We only recommend what you actually need.",
      icon: <ShieldCheck className="w-8 h-8 text-brand-secondary" />
    },
    {
      title: "24/7 Reliability",
      description: "Water emergencies don't wait for business hours, and neither do we. We're here when you need us.",
      icon: <Clock className="w-8 h-8 text-brand-secondary" />
    },
    {
      title: "Expert Craftsmanship",
      description: "With 40 years of experience, we bring a level of precision and knowledge that is unmatched.",
      icon: <Award className="w-8 h-8 text-brand-secondary" />
    },
    {
      title: "Community Focused",
      description: "We're not just a business; we're your neighbors. We care about the health of our local water supply.",
      icon: <Users className="w-8 h-8 text-brand-secondary" />
    }
  ];

  const timeline = [
    { year: "1986", event: "Gulf Coast Well Works founded in Gulfport, MS." },
    { year: "1995", event: "Expanded services to include advanced water filtration." },
    { year: "2008", event: "Reached milestone of 5,000 successful residential installations." },
    { year: "2020", event: "Modernized fleet with state-of-the-art diagnostic technology." },
    { year: "Today", event: "Continuing 40 years of excellence in South Mississippi." }
  ];

  return (
    <div className="pt-10">
      {/* Hero Section */}
      <section className="bg-brand-bg text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://picsum.photos/seed/about-hero/1920/1080" 
            alt="About Us Hero" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer" 
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6">Our Legacy of <span className="text-brand-secondary">Excellence</span></h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Serving South Mississippi with integrity, expertise, and a commitment to clean water since 1986.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-brand-primary uppercase tracking-[0.2em] mb-4">Who We Are</h2>
              <h3 className="text-4xl font-bold font-heading text-brand-bg mb-8">More Than Just a Well Service</h3>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Gulf Coast Well Works was born out of a simple necessity: the need for reliable, clean water in our local communities. What started as a small family operation has grown into South Mississippi's premier residential water supply specialist.
                </p>
                <p>
                  We don't just drill wells; we build systems that sustain families. Our team of certified professionals combines decades of hands-on experience with the latest in water science and technology.
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <div className="bg-brand-primary/10 p-4 rounded-2xl">
                    <Target className="w-8 h-8 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-bg text-xl">Our Mission</h4>
                    <p className="text-slate-500">To ensure every home in our community has access to safe, reliable, and clean water through expert service and honest advice.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/about-team/800/600" 
                alt="Our Team at Work" 
                className="rounded-3xl shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-secondary rounded-full -z-0 opacity-20 blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-brand-primary rounded-full -z-0 opacity-10 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-brand-primary uppercase tracking-[0.2em] mb-4">Our Values</h2>
            <h3 className="text-4xl font-bold font-heading text-brand-bg mb-6">The Principles That Guide Us</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100"
              >
                <div className="mb-6">{value.icon}</div>
                <h4 className="text-xl font-bold font-heading text-brand-bg mb-4">{value.title}</h4>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <div className="bg-brand-primary/10 p-4 rounded-2xl w-fit mb-6">
                  <History className="w-8 h-8 text-brand-primary" />
                </div>
                <h2 className="text-4xl font-bold font-heading text-brand-bg mb-6">Our Journey</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Forty years of dedicated service to the Gulf Coast. See how we've grown and evolved to better serve you.
                </p>
              </div>
            </div>
            <div className="lg:w-2/3">
              <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                {timeline.map((item, i) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 group-[.is-active]:bg-brand-primary text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50">
                      <div className="flex items-center justify-between space-x-2 mb-1">
                        <div className="font-bold text-brand-primary text-xl">{item.year}</div>
                      </div>
                      <div className="text-slate-600 font-medium">{item.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-brand-bg rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-8">Ready to Experience the <span className="text-brand-secondary italic">"Job WELL Done"</span> Difference?</h2>
              <p className="text-xl text-slate-300 mb-10">
                Join the thousands of South Mississippi families who trust Gulf Coast Well Works for their water supply needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/#contact">
                  <Button size="lg" className="bg-brand-secondary hover:bg-brand-secondary/90 text-white font-bold px-10 h-14 text-lg">
                    Request a Free Inspection
                  </Button>
                </Link>
                <a href="tel:228-265-2019">
                  <Button size="lg" variant="outline" className="bg-white border-white text-brand-bg hover:bg-brand-primary hover:text-white font-bold px-10 h-14 text-lg transition-all duration-300">
                    Call 228-265-2019
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
