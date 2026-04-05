import Icon from '@/components/ui/icon';
import { useLang } from '@/context/LanguageContext';

const ECHO_STAND = 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/3f2756b1-d1fb-47e4-9b7b-0d7f70d1d4ed.jpeg';
const AFGHAN_STAND = 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/56bc4acc-97f1-46bf-9b27-57390ea78f86.jpeg';
const ARTIFACTS = 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/bucket/d6bf502e-69e4-4347-b986-fd43d156c0d1.jpeg';

const heroNames = [
  { name: 'Сизоненко Евгений Николаевич', nameEn: 'Sizonenko Evgeny Nikolaevich', conflict: 'Чечня', conflictEn: 'Chechnya' },
  { name: 'Наточий Сергей Алексеевич', nameEn: 'Natochiy Sergey Alekseevich', conflict: 'Чечня', conflictEn: 'Chechnya' },
  { name: 'Дорофеев Дмитрий Юрьевич', nameEn: 'Dorofeev Dmitry Yuryevich', conflict: 'Чечня', conflictEn: 'Chechnya' },
  { name: 'Власов Владимир Александрович', nameEn: 'Vlasov Vladimir Alexandrovich', conflict: 'Чечня', conflictEn: 'Chechnya' },
  { name: 'Булов Евгений Александрович', nameEn: 'Bulov Evgeny Alexandrovich', conflict: 'Чечня', conflictEn: 'Chechnya' },
  { name: 'Александр Аверкиев', nameEn: 'Alexander Averkiev', conflict: 'Улица города', conflictEn: 'City Street' },
  { name: 'Игорь Яцков', nameEn: 'Igor Yatskov', conflict: 'Школа города', conflictEn: 'City School' },
  { name: 'Геннадий Трошев', nameEn: 'Gennady Troshev', conflict: 'Улица города', conflictEn: 'City Street' },
  { name: 'Владимир Сарабеев', nameEn: 'Vladimir Sarabeev', conflict: 'Улица города', conflictEn: 'City Street' },
  { name: 'Владислав Посадский', nameEn: 'Vladislav Posadsky', conflict: 'Улица города', conflictEn: 'City Street' },
];

const EchoPage = () => {
  const { lang, t } = useLang();

  const stands = [
    {
      title: t('echo.stand1.title'),
      subtitle: t('echo.stand1.subtitle'),
      image: ECHO_STAND,
      desc: t('echo.stand1.desc'),
    },
    {
      title: t('echo.stand2.title'),
      subtitle: t('echo.stand2.subtitle'),
      image: AFGHAN_STAND,
      desc: t('echo.stand2.desc'),
    },
    {
      title: t('echo.stand3.title'),
      subtitle: t('echo.stand3.subtitle'),
      image: ARTIFACTS,
      desc: t('echo.stand3.desc'),
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 pt-8">
          <div className="font-body text-xs text-gold uppercase tracking-widest mb-4">{t('echo.label')}</div>
          <h1 className="font-display text-5xl md:text-6xl font-light text-foreground mb-4">
            {t('echo.h1.top')}
            <br />
            <span className="italic text-gold">{t('echo.h1.bottom')}</span>
          </h1>
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
            {t('echo.subtitle')}
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
            <div className="font-body text-xs text-gold uppercase tracking-widest mb-2">{t('echo.names.label')}</div>
            <h2 className="font-display text-3xl font-light text-foreground">
              {t('echo.names.h2')}
              <span className="italic text-gold"> {t('echo.names.h2.italic')}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {heroNames.map((hero, i) => (
              <div key={i} className="museum-card rounded-lg px-5 py-4 flex items-center gap-4">
                <span className="text-yellow-400 text-lg flex-shrink-0">★</span>
                <div>
                  <div className="font-body text-sm text-foreground font-medium">
                    {lang === 'ru' ? hero.name : hero.nameEn}
                  </div>
                  <div className="font-body text-xs text-muted-foreground mt-0.5">
                    {lang === 'ru' ? hero.conflict : hero.conflictEn}
                  </div>
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
            <span className="text-gold">{t('echo.quote')}</span>
          </div>
          <div className="font-body text-xs text-muted-foreground uppercase tracking-widest mt-6">
            {t('echo.quote.attr')}
          </div>
        </div>

      </div>
    </div>
  );
};

export default EchoPage;
