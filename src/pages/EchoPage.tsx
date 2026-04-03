import Icon from '@/components/ui/icon';

const ECHO_STAND = 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/3f2756b1-d1fb-47e4-9b7b-0d7f70d1d4ed.jpeg';
const AFGHAN_STAND = 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/56bc4acc-97f1-46bf-9b27-57390ea78f86.jpeg';
const ARTIFACTS = 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/d6bf502e-69e4-4347-b986-fd43d156c0d1.jpeg';

const heroNames = [
  { name: 'Сизоненко Евгений Николаевич', conflict: 'Чечня' },
  { name: 'Наточий Сергей Алексеевич', conflict: 'Чечня' },
  { name: 'Дорофеев Дмитрий Юрьевич', conflict: 'Чечня' },
  { name: 'Власов Владимир Александрович', conflict: 'Чечня' },
  { name: 'Булов Евгений Александрович', conflict: 'Чечня' },
  { name: 'Александр Аверкиев', conflict: 'Улица города' },
  { name: 'Игорь Яцков', conflict: 'Школа города' },
  { name: 'Геннадий Трошев', conflict: 'Улица города' },
  { name: 'Владимир Сарабеев', conflict: 'Улица города' },
  { name: 'Владислав Посадский', conflict: 'Улица города' },
];

const stands = [
  {
    title: 'Эхо мужества: имена, которые не забыть',
    subtitle: 'Герои чеченских войн 1994–2000 гг.',
    image: ECHO_STAND,
    desc: 'Стенд посвящён героям, павшим в чеченских войнах. «Гордое имя героя — улицам и школам города».',
  },
  {
    title: 'Нет героев от рожденья — они рождаются в боях!',
    subtitle: 'Война в Афганистане',
    image: AFGHAN_STAND,
    desc: 'Стенд о войне в Афганистане 1979–1989 гг., боевых задачах ССО и ветеранах Краснодарского края.',
  },
  {
    title: 'Экспонаты выставки',
    subtitle: 'Витрина с боевыми трофеями',
    image: ARTIFACTS,
    desc: 'Витрина с подлинными экспонатами: беспилотник, каска, ночной прицел, боеприпасы.',
  },
];

const EchoPage = () => {
  return (
    <div className="min-h-screen pt-20 pb-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 pt-8">
          <div className="font-body text-xs text-gold uppercase tracking-widest mb-4">Раздел выставки</div>
          <h1 className="font-display text-5xl md:text-6xl font-light text-foreground mb-4">
            Эхо мужества:
            <br />
            <span className="italic text-gold">имена, которые не забыть</span>
          </h1>
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
            Память о героях, отдавших жизни за Родину в Афганистане и Чечне. 
            Их именами названы улицы и школы нашего города.
          </p>
        </div>

        {/* Stands */}
        <div className="space-y-8 mb-16">
          {stands.map((stand, i) => (
            <div key={i} className="group">
              <div
                className="relative rounded-xl overflow-hidden border border-border cursor-pointer"
                onClick={() => window.open(stand.image, '_blank')}
              >
                <img
                  src={stand.image}
                  alt={stand.title}
                  className="w-full object-cover object-top transition-transform duration-700 group-hover:scale-102"
                  style={{ maxHeight: 460, objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-8 right-8">
                  <div className="font-body text-xs text-gold uppercase tracking-widest mb-1">{stand.subtitle}</div>
                  <div className="font-display text-xl md:text-2xl text-white">{stand.title}</div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/60 rounded-full p-2">
                    <Icon name="ZoomIn" size={18} className="text-gold" />
                  </div>
                </div>
              </div>
              <div className="mt-4 px-2">
                <p className="font-body text-sm text-muted-foreground">{stand.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Heroes list */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="font-body text-xs text-gold uppercase tracking-widest mb-2">Имена героев</div>
            <h2 className="font-display text-3xl font-light text-foreground">
              Гордое имя героя —
              <span className="italic text-gold"> улицам и школам города</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {heroNames.map((hero, i) => (
              <div key={i} className="museum-card rounded-lg px-5 py-4 flex items-center gap-4">
                <span className="text-yellow-400 text-lg flex-shrink-0">★</span>
                <div>
                  <div className="font-body text-sm text-foreground font-medium">{hero.name}</div>
                  <div className="font-body text-xs text-muted-foreground mt-0.5">{hero.conflict}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div
          className="rounded-2xl p-10 md:p-14 text-center"
          style={{ background: 'linear-gradient(135deg, hsl(20,12%,12%), hsl(20,10%,8%))' }}
        >
          <div className="font-display text-2xl md:text-3xl font-light italic text-foreground leading-relaxed mb-4">
            «Сколько раз, когда бывало трудно,
            <br />
            вспоминая мамин нежный взгляд,
            <br />
            сжав кулак и свято веря в чудо,
            <br />
            <span className="text-gold">делал невозможное солдат…»</span>
          </div>
          <div className="font-body text-xs text-muted-foreground uppercase tracking-widest mt-6">
            Надпись со стенда «Эхо мужества»
          </div>
        </div>

      </div>
    </div>
  );
};

export default EchoPage;
