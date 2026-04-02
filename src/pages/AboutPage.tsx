const IMG_HELI = 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/files/85c5bbe1-0716-47c0-be11-ceb9dad6bab8.jpg';
const IMG_MEDAL = 'https://cdn.poehali.dev/projects/751efa10-fa50-45c3-a39f-f130456d386e/files/59525366-53c6-49f3-8f7a-4569f4594fd9.jpg';

const timeline = [
  { year: '26.03.1968', title: 'Рождение', desc: 'Родился в Саратове. Семья часто переезжала в связи с работой отца-нефтяника. Вскоре семья переехала в Ашхабад (Туркмения).' },
  { year: '1985', title: 'Призыв в армию', desc: 'Призван в Вооружённые Силы СССР Пролетарским райвоенкоматом Ашхабада.' },
  { year: '1989', title: 'Окончание лётного училища', desc: 'Окончил Саратовское высшее военное авиационное училище лётчиков. Начало службы в авиационных вертолётных частях Группы советских войск в Германии.' },
  { year: '1992–1993', title: 'Осетино-ингушский конфликт', desc: 'Участие в ликвидации осетино-ингушского конфликта. С 1993 года — служба в 487-м отдельном вертолётном полку в Будённовске.' },
  { year: '1994–1996', title: 'Первая чеченская война', desc: 'Участие в боевых действиях в Чечне. Начало долгого пути боевых вылетов на Ми-8 МТВ-2.' },
  { year: '1999', title: 'Дагестан', desc: 'Участие в антитеррористической операции в Дагестане, август–сентябрь 1999 года.' },
  { year: '2000', title: 'Эвакуация десантников', desc: 'Лето 2000, Чечня. Под огнём автоматического оружия и гранатомётов экипаж «Братишки» эвакуировал раненых десантников ВДВ и доставил их на базу.' },
  { year: '2002', title: 'Подвиг у Шали', desc: 'Июнь 2002. Эвакуация 16 разведчиков с минного поля. Вертолёт 17 минут висел над пропастью, ломая ветви деревьев фюзеляжем. Все бойцы спасены.' },
  { year: '06.04.2004', title: 'Герой Российской Федерации', desc: 'Указом Президента РФ майору Палагину присвоено звание Героя Российской Федерации за мужество и героизм в Северо-Кавказском регионе. К этому времени — 2 512 боевых вылетов.' },
  { year: '2008', title: 'Южная Осетия', desc: 'Участие в вооружённом конфликте в Южной Осетии. Последняя боевая командировка.' },
  { year: '2011', title: 'Образование', desc: 'Окончил институт «Дружбы народов Кавказа» в Ставрополе по специальности психолог-преподаватель.' },
  { year: '2014', title: 'Выход в запас', desc: 'Полковник С.В. Палагин вышел в запас. Активная общественная и патриотическая деятельность в Краснодаре.' },
  { year: '2019', title: 'Уроки мужества', desc: 'Проводил уроки мужества в школе №103. Являлся заместителем председателя Краснодарской краевой организации Героев Отечества.' },
  { year: '06.11.2020', title: 'Уход из жизни', desc: 'Сергей Вячеславович Палагин скончался в возрасте 52 лет в результате хронического заболевания.' },
  { year: '2022', title: 'Школе присвоено имя Героя', desc: 'Решением городской Думы Краснодара школе №103 присвоено имя Героя Российской Федерации Сергея Палагина.' },
  { year: '2023', title: 'Открытие музея', desc: 'В школе №103 создан музей им. С.В. Палагина. Фонд продолжает пополняться новыми экспонатами.' },
];

const feats = [
  {
    year: 'Лето 2000',
    title: 'Спасение десантников',
    text: 'В горном районе Чечни группа десантников попала под огонь. По прибывшему Ми-8 Палагина противник открыл огонь из автоматического оружия и выпустил несколько гранатомётных выстрелов. Слаженная работа экипажа позволила быстро произвести погрузку раненых, а мастерство командира — вывести машину из-под огня. Все раненые доставлены на базу.',
  },
  {
    year: 'Июнь 2002',
    title: 'Шали: 17 минут над пропастью',
    text: 'Превосходящие силы боевиков оттеснили 16 разведчиков на минное поле. Трое получили тяжёлые ранения. Палагин обнаружил, что группа находится в лесной местности. Он принял решение снижаться, ломая ветви деревьев фюзеляжем. Боевая машина 17 минут «висела» над пропастью. Эвакуация прошла успешно — все бойцы были спасены.',
  },
  {
    year: 'Лето 2002',
    title: 'Наводнение на Северном Кавказе',
    text: 'Участие в спасении людей в период катастрофического наводнения в регионах Северного Кавказа. Экипаж «Братишки» помогал эвакуировать мирных жителей из зон затопления.',
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden mb-16">
        <div className="relative h-72">
          <img src={IMG_HELI} alt="Герой Палагин" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[hsl(20,14%,6%)]" />
          <div className="relative z-10 h-full flex items-end px-6 pb-10">
            <div className="max-w-7xl mx-auto w-full">
              <div className="font-body text-xs text-gold uppercase tracking-widest mb-2">Биография</div>
              <h1 className="font-display text-5xl md:text-6xl font-light text-white">
                Сергей Вячеславович<br />
                <span className="italic text-gold">Палагин</span>
              </h1>
              <p className="font-body text-white/60 text-sm mt-2">26 марта 1968 — 6 ноября 2020</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        {/* Bio intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="font-display text-3xl text-foreground mb-6">
              Российский военный<br />
              <span className="italic text-gold">лётчик и Герой</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Подполковник Сергей Вячеславович Палагин — российский военный лётчик, участник осетино-ингушского конфликта, Первой и Второй чеченских войн, антитеррористической операции в Дагестане и конфликта в Южной Осетии.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              В 1989 году окончил Саратовское высшее военное авиационное училище лётчиков. С 1993 года служил в 487-м отдельном вертолётном полку в Будённовске. Командовал вертолётом Ми-8 МТВ-2, получившим имя «Братишка».
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Неоднократно рисковал жизнью, эвакуируя раненых бойцов под огнём противника. К 2004 году совершил 2 512 боевых вылетов. Активно занимался общественной и патриотическо-воспитательной работой в Краснодаре вплоть до последних лет жизни.
            </p>
          </div>
          <div>
            <img
              src={IMG_MEDAL}
              alt="Награды Героя"
              className="w-full rounded-xl object-cover aspect-[4/3] museum-card"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { n: '2 512', l: 'Боевых вылетов' },
            { n: '15+', l: 'Лет в горячих точках' },
            { n: '4', l: 'Конфликта и войны' },
            { n: '2004', l: 'Год звания Героя РФ' },
          ].map((s, i) => (
            <div key={i} className="museum-card rounded-xl p-6 text-center">
              <div className="font-display text-3xl md:text-4xl font-light text-gold mb-2">{s.n}</div>
              <div className="font-body text-xs text-muted-foreground uppercase tracking-wider">{s.l}</div>
            </div>
          ))}
        </div>

        {/* Feats */}
        <div className="mb-20">
          <div className="font-body text-xs text-gold uppercase tracking-widest mb-4">Подвиги</div>
          <h2 className="font-display text-4xl font-light text-foreground mb-10">
            Как «Братишка»<br />
            <span className="italic text-gold">спасал жизни</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {feats.map((feat, i) => (
              <div key={i} className="museum-card rounded-xl p-7">
                <div className="font-body text-xs text-gold uppercase tracking-widest mb-3">{feat.year}</div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{feat.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{feat.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="font-body text-xs text-gold uppercase tracking-widest mb-4">Хроника</div>
          <h2 className="font-display text-4xl font-light text-foreground mb-10">
            Жизненный путь
          </h2>
          <div className="relative">
            <div className="absolute left-20 top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="flex flex-col">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="hidden md:flex flex-col items-end w-20 flex-shrink-0 pt-6">
                    <div className="font-body text-xs text-muted-foreground group-hover:text-gold transition-colors duration-300 text-right leading-tight">{item.year}</div>
                  </div>
                  <div className="hidden md:flex flex-col items-center flex-shrink-0 pt-7">
                    <div className="w-2.5 h-2.5 rounded-full bg-border group-hover:bg-gold transition-colors duration-300 z-10 relative -translate-x-0.5" />
                  </div>
                  <div className="flex-1 pb-7 pt-5 border-b border-border/40 last:border-0">
                    <div className="md:hidden font-body text-xs text-gold mb-1">{item.year}</div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1 group-hover:text-gold transition-colors duration-300">{item.title}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Museum info */}
        <div className="museum-card rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <div className="font-body text-xs text-gold uppercase tracking-widest mb-4">Музей</div>
              <h2 className="font-display text-3xl font-light text-foreground mb-6">
                Как нас найти
              </h2>
              <div className="flex flex-col gap-5">
                {[
                  { icon: '📍', label: 'Адрес', value: 'ул. Байбакова, 17, Краснодар' },
                  { icon: '🏫', label: 'Учреждение', value: 'Школа №103 им. Героя РФ С.В. Палагина' },
                  { icon: '🕐', label: 'Часы работы', value: 'По предварительной записи в учебные дни' },
                  { icon: '📅', label: 'Год открытия музея', value: '2023' },
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
              <div className="font-body text-xs text-gold uppercase tracking-widest mb-4">О фонде</div>
              <p className="font-body text-muted-foreground leading-relaxed mb-4 text-sm">
                Фонд музея имеет военно-патриотическую и краеведческую направленность. Включает основной фонд (подлинные предметы, документы, наградные листы) и научно-вспомогательный (макеты, карты, работы учащихся).
              </p>
              <p className="font-body text-muted-foreground leading-relaxed text-sm">
                Фонд пополняется работами победителей школьных конкурсов и новыми материалами, передаваемыми ветеранскими организациями.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
