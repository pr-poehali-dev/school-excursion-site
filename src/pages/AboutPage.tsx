const HALL_IMG = 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/files/538614c2-b1a4-4fe7-b4e1-e608b1df8cdf.jpg';

const timeline = [
  { year: '1962', title: 'Основание школы', desc: 'Открытие средней школы №1. Первый директор — Иван Петрович Смирнов. 210 учеников в первый год.' },
  { year: '1965', title: 'Первые победы', desc: 'Ученики школы побеждают на районной олимпиаде по математике. Начало традиции академических достижений.' },
  { year: '1970', title: 'Первый большой выпуск', desc: 'Выпуск 120 десятиклассников. Двое поступают в МГУ, трое — в МФТИ.' },
  { year: '1978', title: 'Открытие музея', desc: 'По инициативе учеников и педагогов открывается школьный музей. Первая экспозиция — «История нашей школы».' },
  { year: '1985', title: 'Зал памяти', desc: 'Создание зала памяти, посвящённого выпускникам — участникам Великой Отечественной войны.' },
  { year: '2024', title: 'Виртуальный музей', desc: 'Запуск онлайн-платформы для самостоятельных виртуальных экскурсий. Музей открыт для всего мира.' },
];

const team = [
  { name: 'Мария Ивановна Кузнецова', role: 'Заведующая музеем', exp: '20 лет' },
  { name: 'Алексей Петрович Волков', role: 'Исследователь-историк', exp: '15 лет' },
  { name: 'Светлана Николаевна Орлова', role: 'Хранитель фондов', exp: '12 лет' },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="relative h-64 mb-16 overflow-hidden">
        <img src={HALL_IMG} alt="О музее" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[hsl(20,14%,6%)]" />
        <div className="relative z-10 h-full flex items-end px-6 pb-10">
          <div className="max-w-7xl mx-auto w-full">
            <div className="font-body text-xs text-gold uppercase tracking-widest mb-3">Наша история</div>
            <h1 className="font-display text-5xl font-light text-white">
              О музее
            </h1>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        {/* About text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="font-display text-3xl text-foreground mb-6">
              Место, где живёт<br />
              <span className="italic text-gold">память поколений</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Школьный музей — это не просто хранилище старых вещей. Это живое пространство, где каждый экспонат несёт в себе историю реального человека: учителя, ученика, выпускника.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              С 1978 года мы собираем, храним и рассказываем истории, которые формируют идентичность нашей школы. За эти годы фонды музея выросли с нескольких десятков предметов до более чем 340 уникальных экспонатов.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Теперь с запуском виртуального музея любой ученик может пройти экскурсию самостоятельно — в любое время и из любого места.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: '340+', l: 'Экспонатов в фондах' },
              { n: '46', l: 'Лет работы музея' },
              { n: '12', l: 'Тематических залов' },
              { n: '5000+', l: 'Посетителей в год' },
            ].map((s, i) => (
              <div key={i} className="museum-card rounded-xl p-6 text-center">
                <div className="font-display text-4xl font-light text-gold mb-2">{s.n}</div>
                <div className="font-body text-xs text-muted-foreground uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="font-body text-xs text-gold uppercase tracking-widest mb-4">Хроника</div>
          <h2 className="font-display text-4xl font-light text-foreground mb-10">
            История в датах
          </h2>
          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="flex flex-col gap-0">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="hidden md:flex flex-col items-center w-32 flex-shrink-0">
                    <div className="font-display text-xl font-light text-gold group-hover:text-foreground transition-colors duration-300 pt-6">{item.year}</div>
                  </div>
                  <div className="hidden md:flex flex-col items-center flex-shrink-0 pt-7">
                    <div className="w-3 h-3 rounded-full bg-border group-hover:bg-gold transition-colors duration-300 -translate-x-0.5 z-10 relative" />
                  </div>
                  <div className="flex-1 pb-8 pt-5 border-b border-border/50 last:border-0">
                    <div className="md:hidden font-display text-lg text-gold mb-1">{item.year}</div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-gold transition-colors duration-300">{item.title}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <div className="font-body text-xs text-gold uppercase tracking-widest mb-4">Команда</div>
          <h2 className="font-display text-4xl font-light text-foreground mb-10">
            Хранители памяти
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <div key={i} className="museum-card rounded-xl p-6 text-center">
                <div className="w-16 h-16 rounded-full gold-gradient mx-auto mb-4 flex items-center justify-center text-2xl">
                  {['👩‍🏫', '👨‍🔬', '👩‍💼'][i]}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                <div className="font-body text-sm text-gold mb-2">{member.role}</div>
                <div className="font-body text-xs text-muted-foreground">Опыт: {member.exp}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Visit info */}
        <div className="museum-card rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <div className="font-body text-xs text-gold uppercase tracking-widest mb-4">Посещение</div>
              <h2 className="font-display text-3xl font-light text-foreground mb-6">
                Как нас найти
              </h2>
              <div className="flex flex-col gap-4">
                {[
                  { icon: '📍', label: 'Адрес', value: 'г. Москва, ул. Школьная, д. 1' },
                  { icon: '🕐', label: 'Часы работы', value: 'Пн–Пт: 9:00–17:00' },
                  { icon: '📞', label: 'Телефон', value: '+7 (495) 000-00-00' },
                  { icon: '✉️', label: 'Email', value: 'muzey@school1.ru' },
                ].map((info, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-lg flex-shrink-0">{info.icon}</span>
                    <div>
                      <div className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-0.5">{info.label}</div>
                      <div className="font-body text-sm text-foreground">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="font-body text-xs text-gold uppercase tracking-widest mb-4">Онлайн-тур</div>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Не можете прийти лично? Пройдите виртуальную экскурсию прямо сейчас — это бесплатно и доступно с любого устройства.
              </p>
              <button className="px-6 py-3 gold-gradient text-[hsl(20,14%,6%)] font-body font-semibold rounded hover:opacity-90 transition-all duration-300 text-center">
                Начать онлайн-экскурсию →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
