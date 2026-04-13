import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#051d30] py-12 border-t border-white/5 text-slate-400">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-8 h-8 bg-brand-primary rounded flex items-center justify-center text-white font-bold text-sm">
            GC
          </div>
          <span className="font-heading font-bold text-white tracking-widest text-sm">GULF COAST WELL WORKS</span>
        </div>
        <p className="mb-8 max-w-md mx-auto">
          Providing South Mississippi with reliable water solutions for over 40 years. Licensed, certified, and ready to help.
        </p>
        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="hover:text-brand-secondary transition-colors">Facebook</a>
          <a href="#" className="hover:text-brand-secondary transition-colors">Twitter</a>
          <a href="#" className="hover:text-brand-secondary transition-colors">LinkedIn</a>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} Gulf Coast Well Works. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
