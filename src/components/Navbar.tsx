import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const Navbar = ({ activePage, onNavigate }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: 'home', label: 'Главная' },
    { id: 'heroes', label: 'Герои и подвиги' },
    { id: 'palagin', label: 'С.В. Палагин' },
    { id: 'echo', label: 'Эхо мужества' },
    { id: 'song', label: '«Братишка»' },
  ];

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
            <div className="font-display text-base leading-none text-gold">Герои и подвиги</div>
            <div className="font-body text-[10px] text-muted-foreground uppercase tracking-widest mt-0.5">Выставка памяти</div>
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

        <button
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded border border-gold/40 text-gold text-sm font-body hover:bg-gold/10 transition-all duration-300"
          onClick={() => onNavigate('heroes')}
        >
          <Icon name="Star" size={14} />
          В выставку
        </button>

        <button
          className="md:hidden text-muted-foreground hover:text-gold transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
        </button>
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
