import { motion } from 'motion/react';
import { Phone, Clock, ShieldCheck, Zap, Wrench, Droplets, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function Emergency() {
  const emergencyServices = [
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "No Water / Loss of Pressure",
      description: "Sudden water loss or severe pressure drops affecting your home.",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Pump Failure",
      description: "Submersible or jet pump stopped working — we'll get it running fast.",
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Well Contamination",
      description: "Discolored, cloudy, or foul-smelling water requiring urgent attention.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Electrical Issues",
      description: "Tripped breakers, wiring faults, or control box failures.",
    },
  ];

  const guarantees = [
    "Response within 2 hours — day or night",
    "Licensed & certified technicians on every call",
    "No hidden emergency fees — transparent pricing",
    "Servicing Gulfport, Lyman & surrounding areas",
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-red-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/gc1.jpg"
            alt="Emergency Well Service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-red-900/80 to-red-900" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-red-500/30 border border-red-400/40 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
              <span className="text-sm font-semibold tracking-wide uppercase">24/7 Emergency Response</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-heading leading-[1.1] mb-6">
              Well Emergency? <span className="text-red-300">We're On The Way.</span>
            </h1>
            <p className="text-xl text-red-100 mb-10 max-w-2xl leading-relaxed">
              Don't wait for your water supply to fail. Gulf Coast Well Works dispatches certified technicians around the clock — including nights, weekends, and holidays.
            </p>
            <a href="tel:228-265-2019">
              <Button
                size="lg"
                className="bg-white text-red-900 hover:bg-red-100 font-bold text-xl px-10 h-16 shadow-2xl shadow-red-900/30 animate-pulse"
              >
                <Phone className="mr-3 w-6 h-6" />
                Call Now: 228-265-2019
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Guarantees Bar */}
      <section className="bg-red-700 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between gap-6 items-center">
            {guarantees.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-200 flex-shrink-0" />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-red-600 uppercase tracking-[0.2em] mb-4">What We Handle</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-heading text-brand-bg mb-6">
              Common Well Emergencies
            </h3>
            <p className="text-slate-600 text-lg">
              Our team is trained to diagnose and resolve the most critical well system failures — quickly and correctly the first time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {emergencyServices.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full border-none shadow-xl shadow-slate-200/50 overflow-hidden group">
                  <CardContent className="pt-8 pb-8">
                    <div className="mb-5 p-4 bg-red-50 text-red-600 rounded-2xl w-fit group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                      {service.icon}
                    </div>
                    <h4 className="text-lg font-bold text-brand-bg mb-3 font-heading">{service.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Guarantees */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Clock className="w-10 h-10" />, title: "Rapid Response", desc: "Our dispatch team is always on standby. We aim to have a technician at your door within 2 hours of your call." },
              { icon: <ShieldCheck className="w-10 h-10" />, title: "Certified Experts", desc: "Every technician is fully licensed, insured, and trained to handle even the most complex emergency repairs." },
              { icon: <Phone className="w-10 h-10" />, title: "Always Available", desc: "Our emergency line is staffed 24 hours a day, 7 days a week — including all major holidays." }
            ].map((item, i) => (
              <div key={i} className="text-center p-8 bg-white rounded-3xl shadow-lg shadow-slate-100">
                <div className="mx-auto mb-6 p-4 bg-brand-primary/5 text-brand-primary rounded-2xl w-fit">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold font-heading text-brand-bg mb-3">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Request Form */}
      <section className="py-24 bg-brand-bg text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2">
              <h2 className="text-sm font-bold text-red-400 uppercase tracking-[0.2em] mb-4">Request Help Now</h2>
              <h3 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                Submit an Emergency Request
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Fill out this form and our team will call you back immediately. For the fastest response, please call us directly.
              </p>
              <a href="tel:228-265-2019">
                <Button size="lg" className="bg-red-600 hover:bg-red-500 text-white font-bold text-xl px-10 h-14 shadow-xl mb-6">
                  <Phone className="mr-3 w-5 h-5" />
                  228-265-2019
                </Button>
              </a>
              <div className="flex items-start gap-4 text-slate-400">
                <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm">For life-threatening situations involving flooding or electrical hazards, call 911 first.</p>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <Card className="bg-white text-brand-bg p-8 md:p-10 rounded-3xl shadow-2xl">
                <h4 className="text-2xl font-bold font-heading mb-6">Emergency Service Request</h4>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="emergency-name">Full Name</Label>
                      <Input id="emergency-name" placeholder="John Smith" className="bg-slate-50 border-slate-200 h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="emergency-phone">Phone Number</Label>
                      <Input id="emergency-phone" placeholder="(228) 000-0000" className="bg-slate-50 border-slate-200 h-12" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergency-address">Service Address</Label>
                    <Input id="emergency-address" placeholder="123 Main St, Gulfport, MS" className="bg-slate-50 border-slate-200 h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergency-type">Type of Emergency</Label>
                    <select id="emergency-type" className="w-full h-12 px-3 rounded-md border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50">
                      <option>No Water / Loss of Pressure</option>
                      <option>Pump Failure</option>
                      <option>Well Contamination</option>
                      <option>Electrical Issue</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergency-description">Describe the Issue</Label>
                    <Textarea id="emergency-description" placeholder="Please describe what's happening..." className="bg-slate-50 border-slate-200 min-h-[100px]" />
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-500 text-white font-bold h-14 text-lg shadow-xl shadow-red-600/20">
                    Submit Emergency Request
                    <ArrowRight className="ml-2 w-5 h-5" />
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
