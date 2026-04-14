import { Link } from 'react-router-dom';
import { Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#051d30] py-12 border-t border-white/5 text-slate-400">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-8">
          <img src="/gc-logo.png" alt="Gulf Coast Well Works Logo" className="h-10" />
          <span className="font-heading font-bold text-white tracking-widest text-sm">GULF COAST WELL WORKS</span>
        </div>
        <p className="mb-8 max-w-md mx-auto">
          Providing South Mississippi with reliable water solutions for over 40 years. Licensed, certified, and ready to help.
        </p>
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://www.facebook.com/profile.php?id=61579111421698"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:text-brand-secondary transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6" />
          </a>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} Gulf Coast Well Works. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
