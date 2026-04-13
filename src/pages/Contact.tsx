import { motion } from 'motion/react';
import { Phone, MapPin, Mail, Clock, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function Contact() {
  return (
    <div className="pt-10 min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-brand-bg text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://picsum.photos/seed/contact-hero/1920/1080" 
            alt="Contact Us Hero" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer" 
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">Contact <span className="text-brand-secondary">Us</span></h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Whether you have an emergency or just need a routine inspection, our team is ready to help. Reach out to us today.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Info */}
            <div className="lg:w-1/3 space-y-8">
              <div>
                <h2 className="text-3xl font-bold font-heading text-brand-bg mb-6">Get in Touch</h2>
                <p className="text-slate-600 mb-8">
                  We're available 24/7 for emergency well and pump services. For non-emergencies, we'll get back to you within one business day.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-5 p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
                  <div className="bg-brand-primary/10 p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Emergency Call</p>
                    <a href="tel:228-265-2019" className="text-xl font-bold text-brand-bg hover:text-brand-primary transition-colors">228-265-2019</a>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
                  <div className="bg-brand-primary/10 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Email Address</p>
                    <a href="mailto:info@gcwellworks.com" className="text-xl font-bold text-brand-bg hover:text-brand-primary transition-colors">info@gcwellworks.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
                  <div className="bg-brand-primary/10 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Office Location</p>
                    <p className="text-xl font-bold text-brand-bg">18180 Tiffany Renee Drive<br />Gulfport, MS 39503</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
                  <div className="bg-brand-primary/10 p-3 rounded-xl">
                    <Clock className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Business Hours</p>
                    <p className="text-xl font-bold text-brand-bg">Mon - Fri: 8am - 5pm<br />Emergency: 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <Card className="p-8 md:p-12 rounded-[2.5rem] shadow-2xl border-none bg-white">
                <div className="mb-10">
                  <h3 className="text-3xl font-bold font-heading text-brand-bg mb-4">Send us a Message</h3>
                  <p className="text-slate-500">Fill out the form below and one of our specialists will contact you shortly.</p>
                </div>

                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label htmlFor="first-name" className="text-brand-bg font-bold">First Name</Label>
                      <Input id="first-name" placeholder="Jane" className="h-14 bg-slate-50 border-slate-200 focus:ring-brand-primary" />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="last-name" className="text-brand-bg font-bold">Last Name</Label>
                      <Input id="last-name" placeholder="Doe" className="h-14 bg-slate-50 border-slate-200 focus:ring-brand-primary" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-brand-bg font-bold">Email Address</Label>
                      <Input id="email" type="email" placeholder="jane@example.com" className="h-14 bg-slate-50 border-slate-200 focus:ring-brand-primary" />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="phone" className="text-brand-bg font-bold">Phone Number</Label>
                      <Input id="phone" placeholder="(228) 000-0000" className="h-14 bg-slate-50 border-slate-200 focus:ring-brand-primary" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="subject" className="text-brand-bg font-bold">Subject</Label>
                    <select id="subject" className="w-full h-14 px-4 rounded-md border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50">
                      <option>Emergency Well Repair</option>
                      <option>Water Filtration Inquiry</option>
                      <option>Pump System Service</option>
                      <option>Routine Maintenance</option>
                      <option>General Question</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-brand-bg font-bold">Your Message</Label>
                    <Textarea id="message" placeholder="Please describe your needs..." className="min-h-[180px] bg-slate-50 border-slate-200 focus:ring-brand-primary" />
                  </div>

                  <Button className="w-full h-16 bg-brand-secondary hover:bg-brand-secondary/90 text-white font-bold text-xl rounded-2xl shadow-xl shadow-brand-secondary/20 transition-all">
                    Send Message
                    <ArrowRight className="ml-2 w-6 h-6" />
                  </Button>
                </form>
              </Card>

              {/* Trust Badges */}
              <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-brand-primary" />
                  <span className="font-bold text-brand-bg">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-brand-primary" />
                  <span className="font-bold text-brand-bg">40 Years of Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-6 h-6 text-brand-primary" />
                  <span className="font-bold text-brand-bg">24/7 Availability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
