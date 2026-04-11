import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { useLang, type Lang } from '@/context/LanguageContext';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const Navbar = ({ activePage, onNavigate }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: 'home', label: t('nav.home') },
    { id: 'heroes', label: t('nav.heroes') },
    { id: 'hall2', label: t('nav.hall2') },
    { id: 'palagin', label: t('nav.palagin') },
    { id: 'echo', label: t('nav.echo') },
    { id: 'song', label: t('nav.song') },
  ];

  const toggleLang = () => setLang(lang === 'ru' ? 'en' : 'ru');
  const otherLang: Lang = lang === 'ru' ? 'en' : 'ru';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'glass border-b border-white/5 py-3' : 'py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 group"
        >
          <div className="w-8 h-8 rounded-sm gold-gradient flex items-center justify-center">
            <span className="text-[hsl(20,14%,6%)] text-base">★</span>
          </div>
          <div className="text-left">
            <div className="font-display text-base leading-none text-gold">{t('nav.brand')}</div>
            <div className="font-body text-[10px] text-muted-foreground uppercase tracking-widest mt-0.5">{t('nav.subtitle')}</div>
          </div>
        </button>

        <div className="hidden md:flex items-center gap-6">
          {links.map(link => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`nav-link font-body text-sm tracking-wide ${activePage === link.id ? 'active' : ''}`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-white/15 text-muted-foreground text-xs font-body hover:border-gold/40 hover:text-gold transition-all duration-300 uppercase tracking-widest"
            title={lang === 'ru' ? 'Switch to English' : 'Переключить на русский'}
          >
            <Icon name="Globe" size={12} />
            {otherLang}
          </button>

          <button
            className="flex items-center gap-2 px-4 py-2 rounded border border-gold/40 text-gold text-sm font-body hover:bg-gold/10 transition-all duration-300"
            onClick={() => onNavigate('heroes')}
          >
            <Icon name="Star" size={14} />
            {t('nav.enter')}
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 px-2 py-1 rounded border border-white/15 text-muted-foreground text-xs font-body hover:text-gold transition-colors uppercase tracking-widest"
          >
            <Icon name="Globe" size={11} />
            {otherLang}
          </button>

          <button
            className="text-muted-foreground hover:text-gold transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden glass border-t border-white/5 mt-2">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {links.map(link => (
              <button
                key={link.id}
                onClick={() => { onNavigate(link.id); setMenuOpen(false); }}
                className={`nav-link font-body text-sm text-left ${activePage === link.id ? 'active' : ''}`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;