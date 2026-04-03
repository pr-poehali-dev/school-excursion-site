import { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from '@/components/Navbar';
import HomePage from '@/pages/HomePage';
import HeroesPage from '@/pages/HeroesPage';
import PalaginPage from '@/pages/PalaginPage';
import SongPage from '@/pages/SongPage';
import EchoPage from '@/pages/EchoPage';

const App = () => {
  const [activePage, setActivePage] = useState('home');

  const navigate = (page: string) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <HomePage onNavigate={navigate} />;
      case 'heroes': return <HeroesPage />;
      case 'palagin': return <PalaginPage />;
      case 'song': return <SongPage />;
      case 'echo': return <EchoPage />;
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
              © 2024 Выставка «Герои и подвиги»
            </div>
            <div className="font-display text-sm text-gold italic">
              Помним. Гордимся. Передаём.
            </div>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  );
};

export default App;
