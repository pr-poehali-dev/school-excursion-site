import { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from '@/context/LanguageContext';
import { useLang } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import HomePage from '@/pages/HomePage';
import HeroesPage from '@/pages/HeroesPage';
import PalaginPage from '@/pages/PalaginPage';
import SongPage from '@/pages/SongPage';
import EchoPage from '@/pages/EchoPage';
import Hall2Page from '@/pages/Hall2Page';

const AppInner = () => {
  const [activePage, setActivePage] = useState('home');
  const { t } = useLang();

  const navigate = (page: string) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <HomePage onNavigate={navigate} />;
      case 'heroes': return <HeroesPage />;
      case 'hall2': return <Hall2Page />;
      case 'palagin': return <PalaginPage />;
      case 'song': return <SongPage />;
      case 'echo': return <EchoPage />;
      default: return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar activePage={activePage} onNavigate={navigate} />
      <main key={activePage} className="animate-fade-in">
        {renderPage()}
      </main>
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-body text-sm text-muted-foreground">
            {t('footer.copy')}
          </div>
          <div className="font-display text-sm text-gold italic">
            {t('footer.motto')}
          </div>
        </div>
      </footer>
    </div>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <AppInner />
      </TooltipProvider>
    </LanguageProvider>
  );
};

export default App;