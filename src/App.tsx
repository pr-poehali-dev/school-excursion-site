import { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from '@/components/Navbar';
import HomePage from '@/pages/HomePage';
import TourPage from '@/pages/TourPage';
import ExhibitsPage from '@/pages/ExhibitsPage';
import GalleryPage from '@/pages/GalleryPage';
import AboutPage from '@/pages/AboutPage';

const App = () => {
  const [activePage, setActivePage] = useState('home');

  const navigate = (page: string) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <HomePage onNavigate={navigate} />;
      case 'tour': return <TourPage />;
      case 'exhibits': return <ExhibitsPage />;
      case 'gallery': return <GalleryPage />;
      case 'about': return <AboutPage />;
      default: return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <TooltipProvider>
      <Toaster />
      <div className="min-h-screen bg-background">
        <Navbar activePage={activePage} onNavigate={navigate} />
        <main key={activePage} className="animate-fade-in">
          {renderPage()}
        </main>
        <footer className="border-t border-border py-8 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="font-body text-sm text-muted-foreground">
              © 2024 Школьный музей. Все права защищены.
            </div>
            <div className="font-display text-sm text-gold italic">
              Помним, храним, передаём
            </div>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  );
};

export default App;
