import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Phone, Menu, X, ChevronDown, Droplets, Filter, Wrench, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const serviceLinks = [
    { title: "Well Services", href: "/services/well-services", icon: <Droplets className="w-4 h-4 mr-2" /> },
    { title: "Water Filtration", href: "/services/water-filtration", icon: <Filter className="w-4 h-4 mr-2" /> },
    { title: "Pump Systems", href: "/services/pump-systems", icon: <Wrench className="w-4 h-4 mr-2" /> },
    { title: "Emergency Service", href: "/emergency", icon: <AlertTriangle className="w-4 h-4 mr-2 text-red-500" /> },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/gc-logo.png" alt="Gulf Coast Well Works Logo" className="h-12" />
          <div className="flex flex-col">
            <span className="font-heading font-bold text-brand-primary leading-tight text-lg uppercase">Gulf Coast</span>
            <span className="font-heading font-medium text-brand-bg leading-tight text-sm tracking-widest uppercase">Well Works</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium hover:text-brand-primary transition-colors">Home</Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-brand-primary transition-colors focus:outline-none">
              Services <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56 p-2">
              {serviceLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link to={link.href} className="flex items-center w-full cursor-pointer py-2">
                    {link.icon}
                    {link.title}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link to="/about" className="text-sm font-medium hover:text-brand-primary transition-colors">About Us</Link>
          <Link to="/#reviews" className="text-sm font-medium hover:text-brand-primary transition-colors">Reviews</Link>
          <Link to="/contact" className="text-sm font-medium hover:text-brand-primary transition-colors">Contact</Link>
          
          <div className="flex items-center gap-4 border-l pl-8">
            <a href="tel:228-265-2019" className="flex items-center gap-2 font-bold text-brand-primary hover:text-brand-primary/80 transition-colors">
              <Phone className="w-4 h-4" />
              228-265-2019
            </a>
            <Button asChild className="bg-brand-secondary hover:bg-brand-secondary/90 text-white font-bold shadow-lg shadow-brand-secondary/20">
              <Link to="/emergency">Emergency Service</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 w-full bg-white border-b p-4 flex flex-col gap-4 shadow-xl"
        >
          <div className="flex flex-col gap-3">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Home</Link>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Services</p>
            {serviceLinks.map((link) => (
              <Link 
                key={link.href} 
                to={link.href} 
                onClick={() => setIsMenuOpen(false)} 
                className="text-lg font-medium pl-4 border-l-2 border-brand-primary/20 hover:border-brand-primary transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <hr />
          <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">About Us</Link>
          <Link to="/#reviews" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Reviews</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Contact</Link>
          <hr />
          <a href="tel:228-265-2019" className="flex items-center gap-2 font-bold text-brand-primary">
            <Phone className="w-5 h-5" />
            228-265-2019
          </a>
          <Button asChild className="bg-brand-secondary hover:bg-brand-secondary/90 text-white font-bold w-full">
            <Link to="/emergency">Emergency Service</Link>
          </Button>
        </motion.div>
      )}
    </header>
  );
}
