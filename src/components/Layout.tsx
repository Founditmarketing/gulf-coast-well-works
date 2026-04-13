import { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  const isContactPage = pathname === '/contact';

  return (
    <div className="min-h-screen bg-white selection:bg-brand-secondary/30 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      {!isContactPage && <Footer />}
    </div>
  );
}
