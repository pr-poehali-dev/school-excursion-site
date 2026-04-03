import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface Hero {
  id: string;
  name: string;
  image: string;
  standImage: string;
  title: string;
  awards: string;
  description: string;
  medals: number;
}

const heroes: Hero[] = [
  {
    id: 'epifanov',
    name: 'Вадим Епифанов',
    image: 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/53307783-f189-42d5-94c7-0eac9cd3ebc8.jpeg',
    standImage: 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/53307783-f189-42d5-94c7-0eac9cd3ebc8.jpeg',
    title: 'Герой России',
    awards: 'Герой Российской Федерации',
    description: 'Вадим Епифанов — Герой Российской Федерации, удостоенный высшей государственной награды за мужество и героизм, проявленные при выполнении воинского долга.',
    medals: 1,
  },
  {
    id: 'zhuravlev',
    name: 'Борис Журавлёв',
    image: 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/cc36bdbf-acf6-4308-b9ec-cb955af6a79e.jpeg',
    standImage: 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/cc36bdbf-acf6-4308-b9ec-cb955af6a79e.jpeg',
    title: 'Герой России',
    awards: 'Герой Российской Федерации, ордена и медали',
    description: 'Борис Журавлёв — Герой Российской Федерации. На стенде выставки представлены фотографии из его жизни, боевого пути и служения Родине.',
    medals: 2,
  },
  {
    id: 'maltsev',
    name: 'Александр Мальцев',
    image: 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/24433956-196e-4a0d-99ad-4e16d2f68803.jpeg',
    standImage: 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/24433956-196e-4a0d-99ad-4e16d2f68803.jpeg',
    title: 'Герой России',
    awards: 'Герой Российской Федерации, ордена Мужества',
    description: 'Александр Мальцев — Герой Российской Федерации. На стенде выставки — фотографии из мирной и боевой жизни, свидетельства подвига и любви к Родине.',
    medals: 1,
  },
  {
    id: 'torokhov',
    name: 'Роман Торохов',
    image: 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/71afe86e-6ba0-4b0d-9cf8-306f2bb88813.jpeg',
    standImage: 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/71afe86e-6ba0-4b0d-9cf8-306f2bb88813.jpeg',
    title: 'Герой России',
    awards: 'Герой Российской Федерации, два ордена',
    description: 'Роман Торохов — Герой Российской Федерации. Его история — пример стойкости, отваги и верности присяге.',
    medals: 2,
  },
];

const introStand = {
  image: 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/5d5ac26d-9f33-46f0-bf85-c76a7920ab91.jpeg',
  text: 'Выставка «Герои и подвиги» — это дань уважения и благодарности всем героям нашей страны.',
};

const HeroesPage = () => {
  const [selected, setSelected] = useState<Hero | null>(null);

  return (
    <div className="min-h-screen pt-20 pb-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 pt-8">
          <div className="font-body text-xs text-gold uppercase tracking-widest mb-4">Выставка</div>
          <h1 className="font-display text-5xl md:text-6xl font-light text-foreground mb-4">
            Герои
            <span className="italic text-gold"> и Подвиги</span>
          </h1>
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
            {introStand.text}
          </p>
        </div>

        {/* Intro stand image */}
        <div className="relative rounded-xl overflow-hidden mb-16 border border-border group cursor-pointer"
          style={{ maxHeight: 420 }}
          onClick={() => window.open(introStand.image, '_blank')}
        >
          <img
            src={introStand.image}
            alt="Введение"
            className="w-full object-cover object-top transition-transform duration-700 group-hover:scale-102"
            style={{ height: 420, objectFit: 'cover' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-8">
            <div className="font-body text-xs text-gold uppercase tracking-widest mb-1">Вступление</div>
            <div className="font-display text-2xl text-white">Выставка «Герои и подвиги»</div>
          </div>
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-black/60 rounded-full p-2">
              <Icon name="ZoomIn" size={18} className="text-gold" />
            </div>
          </div>
        </div>

        {/* Heroes grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {heroes.map((hero) => (
            <div
              key={hero.id}
              className="museum-card rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => setSelected(hero)}
            >
              <div className="relative overflow-hidden" style={{ height: 320 }}>
                <img
                  src={hero.image}
                  alt={hero.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Star medals */}
                <div className="absolute bottom-4 left-4 flex gap-1">
                  {Array.from({ length: hero.medals }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-black/60 rounded-full p-2">
                    <Icon name="Expand" size={16} className="text-gold" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="font-body text-xs text-gold uppercase tracking-widest mb-1">{hero.title}</div>
                <h3 className="font-display text-2xl text-foreground mb-2 group-hover:text-gold transition-colors">
                  {hero.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {hero.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-gold text-sm font-body">
                  <Icon name="ChevronRight" size={16} />
                  Подробнее
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Echo of Courage stand */}
        <div className="mb-8">
          <div className="text-center mb-8">
            <div className="font-body text-xs text-gold uppercase tracking-widest mb-2">Стенд</div>
            <h2 className="font-display text-3xl font-light text-foreground">
              Эхо мужества: <span className="italic text-gold">имена, которые не забыть</span>
            </h2>
          </div>
          <div
            className="relative rounded-xl overflow-hidden border border-border group cursor-pointer"
            onClick={() => window.open('https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/3f2756b1-d1fb-47e4-9b7b-0d7f70d1d4ed.jpeg', '_blank')}
          >
            <img
              src="https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/3f2756b1-d1fb-47e4-9b7b-0d7f70d1d4ed.jpeg"
              alt="Эхо мужества"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-102"
              style={{ maxHeight: 500, objectFit: 'cover', objectPosition: 'top' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-8">
              <div className="font-display text-2xl text-white">«Гордое имя героя — улицам и школам города»</div>
            </div>
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-black/60 rounded-full p-2">
                <Icon name="ZoomIn" size={18} className="text-gold" />
              </div>
            </div>
          </div>
        </div>

        {/* Afghan stand */}
        <div>
          <div className="text-center mb-8">
            <div className="font-body text-xs text-gold uppercase tracking-widest mb-2">Стенд</div>
            <h2 className="font-display text-3xl font-light text-foreground">
              <span className="italic text-gold">Нет героев от рожденья</span> — они рождаются в боях
            </h2>
          </div>
          <div
            className="relative rounded-xl overflow-hidden border border-border group cursor-pointer"
            onClick={() => window.open('https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/56bc4acc-97f1-46bf-9b27-57390ea78f86.jpeg', '_blank')}
          >
            <img
              src="https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/56bc4acc-97f1-46bf-9b27-57390ea78f86.jpeg"
              alt="Нет героев от рожденья"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-102"
              style={{ maxHeight: 500, objectFit: 'cover', objectPosition: 'top' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-8">
              <div className="font-display text-2xl text-white">Войны в Афганистане и Чечне</div>
            </div>
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-black/60 rounded-full p-2">
                <Icon name="ZoomIn" size={18} className="text-gold" />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.85)' }}
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-2xl w-full rounded-2xl overflow-hidden museum-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative" style={{ height: 360 }}>
              <img
                src={selected.standImage}
                alt={selected.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 bg-black/60 rounded-full p-2 text-white hover:text-gold transition-colors"
              >
                <Icon name="X" size={20} />
              </button>
            </div>
            <div className="p-8">
              <div className="font-body text-xs text-gold uppercase tracking-widest mb-2">{selected.title}</div>
              <h2 className="font-display text-3xl text-foreground mb-3">{selected.name}</h2>
              <div className="font-body text-sm text-gold mb-4 flex items-center gap-2">
                <Icon name="Award" size={14} />
                {selected.awards}
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {selected.description}
              </p>
              <button
                onClick={() => window.open(selected.standImage, '_blank')}
                className="mt-6 flex items-center gap-2 text-sm text-gold font-body hover:underline"
              >
                <Icon name="ZoomIn" size={14} />
                Открыть стенд в полном размере
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroesPage;
