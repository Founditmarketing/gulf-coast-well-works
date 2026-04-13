import { motion } from 'motion/react';
import { 
  Droplets, 
  Wrench, 
  Filter, 
  Clock, 
  ShieldCheck, 
  MapPin, 
  Mail, 
  Phone,
  ArrowRight,
  CheckCircle2,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';

export default function Home() {
  const services = [
    {
      title: "Well Services",
      description: "Complete well drilling, repair, and maintenance services for residential properties.",
      icon: <Droplets className="w-10 h-10" />,
      href: "/services/well-services"
    },
    {
      title: "Water Filtration",
      description: "Advanced filtration systems to ensure your water is safe, clean, and great-tasting.",
      icon: <Filter className="w-10 h-10" />,
      href: "/services/water-filtration"
    },
    {
      title: "Pump Systems",
      description: "Installation and repair of high-efficiency pump systems for reliable water pressure.",
      icon: <Wrench className="w-10 h-10" />,
      href: "/services/pump-systems"
    }
  ];

  const trustPoints = [
    { text: "Licensed & Certified", icon: <ShieldCheck className="w-5 h-5" /> },
    { text: "24/7 Response", icon: <Clock className="w-5 h-5" /> },
    { text: "Serving Gulfport & Lyman", icon: <MapPin className="w-5 h-5" /> }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-brand-bg text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://picsum.photos/seed/wellwater/1920/1080" 
            alt="Well Water Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-brand-primary/20 border border-brand-primary/30 px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-brand-secondary rounded-full animate-pulse" />
                <span className="text-sm font-semibold tracking-wide uppercase">24/7 Emergency Response Available</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold font-heading leading-[1.1] mb-6">
                Safe. Clean. Reliable Water — <span className="text-brand-secondary">Restored When You Need It Most.</span>
              </h1>
              <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
                With 40 years of certified experience, we provide South Mississippi homeowners with dependable well services and preventative maintenance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-brand-secondary hover:bg-brand-secondary/90 text-white font-bold text-lg px-8 h-14 shadow-xl shadow-brand-secondary/20">
                  Free Well Inspection
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="bg-white border-white text-brand-bg hover:bg-brand-primary hover:text-white font-bold text-lg px-8 h-14 transition-all duration-300">
                  View Our Services
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-brand-primary py-8 text-white border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between gap-8 items-center">
            {trustPoints.map((point, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  {point.icon}
                </div>
                <span className="font-semibold text-lg tracking-tight">{point.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-brand-primary uppercase tracking-[0.2em] mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-heading text-brand-bg mb-6">Professional Well Solutions</h3>
            <p className="text-slate-600 text-lg">
              We specialize in residential water supply systems, ensuring your family has access to the highest quality water year-round.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full border-none shadow-xl shadow-slate-200/50 overflow-hidden group">
                  <CardHeader className="pb-4">
                    <div className="mb-6 p-4 bg-brand-primary/5 text-brand-primary rounded-2xl w-fit group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl font-heading font-bold text-brand-bg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 text-lg leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <Button variant="link" asChild className="mt-6 p-0 text-brand-primary font-bold group-hover:translate-x-2 transition-transform">
                      <Link to={service.href}>
                        Learn More <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/wellwork-team/800/1000" 
                  alt="Professional Well Service Team" 
                  className="w-full aspect-[4/5] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 z-20 bg-brand-secondary text-white p-8 rounded-2xl shadow-xl max-w-[240px]">
                <p className="text-4xl font-bold mb-1">40+</p>
                <p className="font-semibold leading-tight">Years of Certified Experience in MS</p>
              </div>
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -z-0" />
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-sm font-bold text-brand-primary uppercase tracking-[0.2em] mb-4">Our Story</h2>
              <h3 className="text-4xl md:text-5xl font-bold font-heading text-brand-bg mb-8">A Legacy of Excellence in Water Supply</h3>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Gulf Coast Well Works has been the trusted name for residential water supply in South Mississippi for four decades. We understand that water is the lifeblood of your home, and when systems fail, you need a response that is both fast and professional.
                </p>
                <p>
                  Our mission is simple: to provide safe, clean, and reliable water to our neighbors in Gulfport, Lyman, and beyond. We combine traditional craftsmanship with modern technology to ensure every job is a <span className="text-brand-secondary font-extrabold italic underline underline-offset-4">"Job WELL Done."</span>
                </p>
                <ul className="space-y-4 pt-4">
                  {[
                    "Fully Licensed & Insured Professionals",
                    "State-of-the-Art Diagnostic Equipment",
                    "Preventative Maintenance Programs",
                    "Transparent Pricing & Honest Advice"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-brand-secondary flex-shrink-0" />
                      <span className="font-medium text-brand-bg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Slider */}
      <section id="reviews" className="py-20 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-brand-secondary text-brand-secondary" />
              ))}
            </div>
            <h3 className="text-3xl font-bold font-heading text-brand-bg">What Our Neighbors Say</h3>
            <p className="text-slate-500 mt-2">Rated 5.0 stars based on 150+ Google Reviews</p>
          </div>

          <div className="relative">
            <motion.div 
              className="flex gap-6"
              animate={{ x: [0, -1000] }}
              transition={{ 
                duration: 30, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {[
                { name: "Robert Miller", text: "Fastest service I've ever had. My pump died on a Sunday and they were here in 2 hours.", rating: 5 },
                { name: "Sarah Jenkins", text: "The water filtration system they installed changed our lives. No more sulfur smell!", rating: 5 },
                { name: "David Thompson", text: "Professional, honest, and fair. They explained everything clearly. Highly recommend.", rating: 5 },
                { name: "Linda Garcia", text: "40 years of experience really shows. They fixed a problem two other companies couldn't.", rating: 5 },
                { name: "James Wilson", text: "Excellent communication and top-notch work. Best well service on the Gulf Coast.", rating: 5 },
                // Duplicate for seamless loop
                { name: "Robert Miller", text: "Fastest service I've ever had. My pump died on a Sunday and they were here in 2 hours.", rating: 5 },
                { name: "Sarah Jenkins", text: "The water filtration system they installed changed our lives. No more sulfur smell!", rating: 5 },
                { name: "David Thompson", text: "Professional, honest, and fair. They explained everything clearly. Highly recommend.", rating: 5 },
              ].map((review, i) => (
                <Card key={i} className="min-w-[350px] p-8 border-none shadow-lg shadow-slate-200/50 bg-white rounded-3xl shrink-0">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-secondary text-brand-secondary" />
                    ))}
                  </div>
                  <p className="text-slate-600 italic mb-6">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary font-bold">
                      {review.name[0]}
                    </div>
                    <span className="font-bold text-brand-bg">{review.name}</span>
                  </div>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-brand-bg text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-sm font-bold text-brand-secondary uppercase tracking-[0.2em] mb-4">Get In Touch</h2>
              <h3 className="text-4xl md:text-5xl font-bold font-heading mb-8">Restoring Your Water Is Just a Call Away</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-white/10 p-4 rounded-xl">
                    <Phone className="w-6 h-6 text-brand-secondary" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Call 24/7 For Emergency Service</p>
                    <a href="tel:228-265-2019" className="text-3xl font-bold hover:text-brand-secondary transition-colors">228-265-2019</a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-white/10 p-4 rounded-xl">
                    <MapPin className="w-6 h-6 text-brand-secondary" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Our Location</p>
                    <p className="text-xl font-medium">18180 Tiffany Renee Drive<br />Gulfport, MS 39503</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-white/10 p-4 rounded-xl">
                    <Mail className="w-6 h-6 text-brand-secondary" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Email Us</p>
                    <a href="mailto:info@gcwellworks.com" className="text-xl font-medium hover:text-brand-secondary transition-colors">info@gcwellworks.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <Card className="bg-white text-brand-bg p-8 md:p-10 rounded-3xl shadow-2xl">
                <h4 className="text-2xl font-bold font-heading mb-6">Request a Free Inspection</h4>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Smith" className="bg-slate-50 border-slate-200 h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="(228) 000-0000" className="bg-slate-50 border-slate-200 h-12" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="bg-slate-50 border-slate-200 h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Needed</Label>
                    <select id="service" className="w-full h-12 px-3 rounded-md border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50">
                      <option>Well Repair</option>
                      <option>Water Filtration</option>
                      <option>Pump System</option>
                      <option>Emergency Service</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="How can we help you?" className="bg-slate-50 border-slate-200 min-h-[120px]" />
                  </div>
                  <Button className="w-full bg-brand-secondary hover:bg-brand-secondary/90 text-white font-bold h-14 text-lg shadow-xl shadow-brand-secondary/20">
                    Send Request
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
