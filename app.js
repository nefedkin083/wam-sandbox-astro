/* ============================================================
   WAM Updates — app logic
   Renders 3 variants from window.RELEASES, handles lang toggle,
   accent swap, density, and the tweaks panel.
   ============================================================ */

const RU_UI = {
  "nav.agents": "Agents", "nav.home": "Главная", "nav.updates": "Обновления",
  "nav.pricing": "Тарифы", "nav.docs": "Гайд", "nav.status": "Статус",
  "ed.issue.suffix": "релизов",
  "ed.freq":     "Публикуется по готовности",
  "ed.title":    "Обновления",
  "ed.latest":   "Свежий релиз",
  "ed.headline": "Последний релиз",
  "ed.kv.commits":"Коммитов", "ed.kv.contrib":"Авторов",
  "ed.kv.issues":"Закрыто",  "ed.kv.size":"Дельта",
  "ed.added":    "Добавлено", "ed.changed":"Изменено", "ed.fixed":"Исправлено",
  "foot.company":"© 2026 · ИП Силенков Максим Эдуардович",
  "foot.verif":"Субпроцессоры",
  "foot.authority":"Юрисдикция",
  "foot.authority-v":"Российская Федерация",
  "foot.privacy":"Оферта и политика конфиденциальности",
  "foot.regno":"ИНН",
  "foot.authority-short":"РФ",
  "rail.label":  "Вид",
  "rail.ed":"Editorial","rail.te":"Terminal","rail.br":"Brutal",
  "rail.hint":   "Три направления одной сетки",
  "te.cmd":      "tail -f CHANGELOG.md",
  "te.more":     "загрузить более ранние →",
  "te.banner.suffix": "релизов · uptime 99.97%",
  "te.build":    "последняя сборка",
  "te.foot":     "lisacorp/superlisa · main",
  "te.added":    "ADDED", "te.changed":"CHANGED", "te.fixed":"FIXED",
  "br.log":      "Все релизы",
  "br.sort":     "По убыванию",
  "br.f1":       'Канал · <b>stable</b>',
  "br.f2":       'Формат · <b>SemVer</b>',
  "br.f3":       'Подписка · <b>RSS / JSON</b>',
  "br.f4":       'Исходник · <b>lisacorp/superlisa</b>',
  "tw.theme":"Тема", "tw.grotesk":"Гротеск", "tw.grid":"Сетка",
  "tw.aesthetic":"Стиль", "tw.accent":"Акцент", "tw.density":"Плотность",
  "tw.lang":"Язык", "tw.light":"Светлая", "tw.dark":"Тёмная",
  "tw.compact":"Плотно", "tw.comfy":"Комфорт", "tw.spacious":"Простор",
  "tw.standard":"Стандарт", "tw.wide":"Широкая",
  "tw.asym":"Асим.", "tw.dense":"Плотная", "tw.loose":"Разреж.",

  // home
  "home.eyebrow":"ДЛЯ ОДНОГО ЧЕЛОВЕКА",
  "home.title":"Персональный AI-ассистент<br />в Telegram — <em>под вашим именем.</em>",
  "home.lead":"WAM Agents запускает персонального агента на Claude прямо в Telegram. Свой бот, своё имя, свой аватар — у вас в личке и в ваших рабочих чатах. Вы приносите свой ключ Claude, мы — контейнер, память и обновления.",
  "home.cta.primary":"ЗАПУСТИТЬ В TELEGRAM →",
  "home.cta.secondary":"СМОТРЕТЬ ТАРИФ",
  "home.hero.fine":"990 ₽/мес · первый месяц по промокоду <b>SUPERLISA</b> бесплатно · отмена в один клик.",

  "home.how.eyebrow":"КАК ЭТО РАБОТАЕТ",
  "home.how.title":"От старта до первого сообщения — 3 минуты.",
  "home.how.lead":"Четыре шага. Никаких серверов, никаких настроек — всё внутри Telegram.",
  "home.how.s1.t":"Откройте бота и оплатите",
  "home.how.s1.b":"Нажмите <b>Start</b> в <a href=\"https://t.me/wamagentsbot\">@wamagentsbot</a>. Промокод <b>SUPERLISA</b> даёт первый месяц бесплатно, дальше — 990 ₽/мес через Т-Банк.",
  "home.how.s2.t":"Создайте своего бота в BotFather",
  "home.how.s2.b":"Откройте <a href=\"https://t.me/BotFather\">@BotFather</a>, команда <code>/newbot</code>, задайте имя и аватар. Токен пришлите обратно в <a href=\"https://t.me/wamagentsbot\">@wamagentsbot</a> — это и есть ваш персональный агент.",
  "home.how.s3.t":"Подключите OAuth-ключ Claude",
  "home.how.s3.b":"Пройдите по ссылке на Claude из биллинг-бота, авторизуйтесь и верните одноразовый код. Инференс идёт со счёта Anthropic по вашему ключу — мы токены не храним.",
  "home.how.s4.t":"Напишите агенту первое сообщение",
  "home.how.s4.b":"Через 1–2 минуты контейнер агента поднимается и вы пишете ему в личку — голосом, текстом, фото, документом. В группах и форум-топиках отвечает по прямому обращению.",

  "home.teams.eyebrow":"ДЛЯ КОМАНД",
  "home.teams.title":"Нужны агенты на команду? Отдельный контракт.",
  "home.teams.lead":"Общий оффер, DPA под юрлицо, несколько мест под одной подпиской, управление доступами и отчётность по использованию. Формат обсуждаем под вашу команду лично.",
  "home.teams.f1":"<b>Shared offer + DPA</b> — договор на юрлицо и соглашение об обработке данных.",
  "home.teams.f2":"<b>Multi-seat</b> — несколько сотрудников под одной подпиской, одна точка оплаты.",
  "home.teams.f3":"<b>Роли и доступы</b> — агенты в командных чатах и форум-топиках, каждый со своим scope.",
  "home.teams.f4":"<b>Отчётность</b> — использование и расход токенов по каждому участнику.",
  "home.teams.cta.primary":"НАПИСАТЬ ПО КОМАНДЕ →",
  "home.teams.cta.secondary":"ДОКУМЕНТАЦИЯ",

  // pricing
  "pricing.eyebrow":"ТАРИФ",
  "pricing.title":"Один тариф. Ваш ключ.",
  "pricing.lead":"WAM Agents работает по модели BYOK — bring your own key. Вы платите нам за подписку и провижининг, Anthropic — за токены напрямую с вашей подписки Claude.",
  "pricing.plan.kicker":"Personal · Подписка",
  "pricing.plan.unit":"₽ / мес",
  "pricing.plan.period":"Индивидуальный тариф. Один агент на одного пользователя.",
  "pricing.feat.agent":"Персональный агент в Telegram — личка, группы, форум-топики",
  "pricing.feat.voice":"Голосовые, фото, документы, видео — всё на вход и на выход",
  "pricing.feat.models":"Переключение моделей: Opus, Sonnet, Haiku, Mythos",
  "pricing.feat.mcp":"MCP-инструменты — Google, GitHub, SSH, собственные серверы",
  "pricing.feat.memory":"Долгая память в рамках проекта: скиллы, факты, предпочтения",
  "pricing.feat.updates":"Авто-обновления по мере выхода релизов Superlisa",
  "pricing.cta":"Попробовать бесплатно 30 дней →",
  "pricing.promo":"Без карты. После триала — 990 ₽/мес или отмена в один клик.",

  "pricing.trial.eyebrow":"30 ДНЕЙ БЕСПЛАТНО",
  "pricing.trial.title":"Как работает триал",
  "pricing.trial.s1.t":"Регистрация в @wamagentsbot",
  "pricing.trial.s1.b":"Откройте <a href=\"https://t.me/wamagentsbot\">@wamagentsbot</a>, нажмите <b>Start</b>. Карту привязывать не нужно — триал активируется автоматически.",
  "pricing.trial.s2.t":"30 дней полного доступа",
  "pricing.trial.s2.b":"Все функции подписки включены: модели, MCP, память, медиа. Единственное требование — ваш OAuth-ключ Claude (см. ниже).",
  "pricing.trial.s3.t":"После триала — 990 ₽/мес",
  "pricing.trial.s3.b":"На 30-й день биллинг предложит оплатить подписку картой Т-Банка. Не оплатили — контейнер останавливается, данные сохраняются 30 дней. Оплатили — продолжаем без паузы. Отмена — в один клик внутри бота.",

  "pricing.byok.eyebrow":"BYOK · ВАШ КЛЮЧ CLAUDE",
  "pricing.byok.title":"Перед стартом — аккаунт Anthropic",
  "pricing.byok.lead":"WAM Agents не перепродаёт токены Claude. Инференс списывается напрямую с вашей подписки Anthropic по OAuth-ключу. Перед запуском нужен активный аккаунт Claude (Claude Pro или выше).",
  "pricing.byok.c1.t":"Нужен аккаунт Claude",
  "pricing.byok.c1.b":"Зарегистрируйтесь на <a href=\"https://claude.ai\" target=\"_blank\" rel=\"noopener\">claude.ai</a> и активируйте подписку Pro/Max до запуска агента. Без неё инференс не пройдёт.",
  "pricing.byok.c2.t":"Одноразовый OAuth-код",
  "pricing.byok.c2.b":"Сейчас — копипаст: биллинг даёт ссылку на Anthropic, вы авторизуетесь и переносите код обратно в бот. В Phase 2 OAuth станет кнопкой в один клик.",
  "pricing.byok.c3.t":"Ключ под контролем",
  "pricing.byok.c3.b":"Ключ хранится в нашем биллинге с access control и используется только для запуска вашего агента. Отозвать можно в любой момент в Anthropic или через <code>/cancel</code> в боте.",

  "pricing.kv.tokens.k":"Токены Claude",
  "pricing.kv.tokens.v":"Инференс списывает Anthropic напрямую с вашей подписки по вашему OAuth-ключу. Ключ хранится в нашем биллинге с контролем доступа — только для запуска агента.",
  "pricing.kv.data.k":"Данные",
  "pricing.kv.data.v":"Чаты идут через ваш ключ, на стороне Anthropic не используются для обучения. Мы храним только метаданные биллинга и контейнер агента.",
  "pricing.kv.cancel.k":"Отмена",
  "pricing.kv.cancel.v":"В один клик внутри <a href=\"https://t.me/wamagentsbot\">@wamagentsbot</a>. После отмены контейнер останавливается в конце оплаченного периода.",
  "pricing.kv.legal.k":"Payment agent",
  "pricing.kv.legal.v":"ИП Силенков Максим Эдуардович (РФ, ИНН 711613398109) выступает authorized payment collection agent для рублёвых расчётов на период PMF. Оплата в рублях через Т-Банк. Договор и политика конфиденциальности — в <a href=\"/oferta\">публичной оферте</a>.",

  "pricing.teams.eyebrow":"КОМАНДАМ",
  "pricing.teams.title":"Нужно для команды?",
  "pricing.teams.lead":"Разворачиваем приватные инстансы, кастомные инструменты, интеграции с корпоративным SSO и MCP поверх внутренних систем. Ценник обсуждается под задачу — без фиксированных teams-тиров на период PMF.",
  "pricing.teams.cta":"Написать me.silenkov@gmail.com →",

  // docs — 4-step onboarding, mirrors @wamagentsbot copy
  "docs.eyebrow":"ГАЙД",
  "docs.title":"Четыре шага до своего агента",
  "docs.lead":"WAM Agents — клиент Claude Code, который работает как мост между Telegram и агентными моделями Anthropic. Онбординг проходит в <a href=\"https://t.me/wamagentsbot\">@wamagentsbot</a>: оплата, создание бота через @BotFather, подключение аккаунта Claude — и ваш агент поднимается в отдельном контейнере.",
  "docs.toc.h":"Содержание",
  "docs.toc.1":"Старт и оплата",
  "docs.toc.2":"Подтверждение оплаты или промокод",
  "docs.toc.3":"Bot token от @BotFather",
  "docs.toc.4":"Claude OAuth",
  "docs.toc.5":"Развёртывание и первое сообщение",
  "docs.toc.cmds":"Команды в биллинг-боте",
  "docs.step1.t":"Откройте @wamagentsbot и нажмите Start",
  "docs.step1.b":"Перейдите в <a href=\"https://t.me/wamagentsbot\">@wamagentsbot</a> и нажмите <b>Start</b>. Бот коротко объяснит, что WAM Agents — это клиент Claude Code для Telegram, покажет ссылку на <a href=\"/oferta\">публичную оферту</a> и даст две кнопки: <b>«Начать пользоваться за 990 ₽/мес»</b> или <b>«Попробовать бесплатно 30 дней»</b>. Подписка Claude оплачивается отдельно на claude.ai.",
  "docs.step1.hint":"Перед оплатой бот попросит подтвердить обработку данных: ваши сообщения идут через Hetzner (Германия), Telegram (ОАЭ) и Anthropic (США). Без подтверждения сервис не запустится.",
  "docs.step2.t":"Оплатите через Т-Банк или введите промокод",
  "docs.step2.b":"Кнопка «Начать пользоваться» открывает форму оплаты Т-Банка — 990 ₽ списываются картой, бот ждёт подтверждения. После успешной оплаты приходит сообщение <b>«Оплата прошла успешно!»</b> и бот сразу просит придумать имя будущему агенту. Если есть промокод (например, <b>SUPERLISA</b>) — отправьте его текстом в чат: бот ответит <b>«Промокод применён! Первый месяц бесплатно»</b> и перейдёт к шагу 3. Альтернатива — кнопка <b>«Попробовать бесплатно 30 дней»</b>: триал активируется без карты.",
  "docs.step3.t":"Создайте бота у @BotFather и пришлите токен",
  "docs.step3.b":"Сначала @wamagentsbot спросит имя будущего агента — отправьте его, и бот попробует создать аккаунт автоматически. Если автосоздание не сработает, бот покажет инструкцию вручную: откройте <a href=\"https://t.me/BotFather\">@BotFather</a>, команда <code>/newbot</code>, следуйте подсказкам, скопируйте выданный токен формата <code>1234567890:AABBccDDeeFFggHHiiJJkkLLmmNNooPP11</code> и вставьте его в чат с <a href=\"https://t.me/wamagentsbot\">@wamagentsbot</a>. Токен проверяется, после чего бот подтверждает: <b>«Бот успешно подтверждён»</b>.",
  "docs.step4.t":"Подключите аккаунт Claude",
  "docs.step4.b":"Бот готовит ссылку на авторизацию Anthropic и предлагает одну из двух веток. Основная: перейдите по ссылке, авторизуйтесь в вашем аккаунте Claude, скопируйте одноразовый код из браузера и отправьте его в чат — бот обменяет код на OAuth токен сам. Запасная ветка, если сервис автоавторизации недоступен: в терминале на вашем устройстве выполните <code>claude setup-token</code>, пройдите авторизацию, скопируйте токен вида <code>sk-ant-oat01-…</code> и вставьте в чат. Токены Claude идут со счёта Anthropic, мы храним ключ только чтобы запустить вашего агента.",
  "docs.step4.flag":"<b>Phase 2.</b> После Phase 2 шаг 4 упростится до одной кнопки: OAuth-поток завершится внутри Telegram без копипаста кода и без терминала.",
  "docs.step5.t":"Агент разворачивается — пишите ему в личку",
  "docs.step5.b":"После OAuth бот покажет статус <b>«Разворачиваю вашего агента…»</b>. За 1–2 минуты поднимается изолированный контейнер, и приходит подтверждение: <b>«Ваш агент успешно развёрнут! Теперь зайдите в бот @your_bot и задайте любой вопрос»</b>. Агент работает в личке, в группах и в форум-топиках. Если что-то пойдёт не так — команда <code>/support</code> в @wamagentsbot.",
  "docs.cmd.t":"Команды в @wamagentsbot",
  "docs.cmd.sub":"Работают после регистрации. Команды для самого агента настраиваются отдельно, внутри вашего бота.",
  "docs.cmd.start":"запустить онбординг или продолжить с места остановки",
  "docs.cmd.status":"статус подписки и дата следующего списания",
  "docs.cmd.support":"связаться с поддержкой",
  "docs.cmd.consent":"посмотреть согласие на обработку данных",
  "docs.cmd.withdraw":"отозвать согласие и удалить аккаунт",
  "docs.cmd.cancel":"отменить подписку, бот будет отключён",
  "docs.cmd.delete":"полностью удалить агента и данные",
  "docs.media.t":"Что умеет агент",
  "docs.media.b":"Голосовые, фото, документы и видео — всё на вход и на выход нативно через Telegram. Голос транскрибируется автоматически, PDF и DOCX читаются целиком. Агент работает в личке, в группах и в форум-топиках — достаточно добавить его в нужный чат.",
  "docs.memory.t":"Память и скиллы агента",
  "docs.memory.b":"Агент помнит ваши предпочтения, контакты и проекты внутри собственного контейнера. Скиллы и факты можно править разговором — попросите добавить, обновить или забыть.",
  "docs.support.t":"Поддержка",
  "docs.support.b":"Пишите в <a href=\"https://t.me/wamagentsbot\">@wamagentsbot</a> командой <code>/support</code>. Инциденты и аптайм — на странице <a href=\"/status\">статуса</a>. SLA и условия — в <a href=\"/oferta\">оферте</a>.",

  // status
  "status.eyebrow":"СТАТУС",
  "status.title":"Все системы работают",
  "status.lead":"Состояние обновляется каждые 60 секунд из публичного read-only endpoint agentslisa.",
  "status.build":"Последняя сборка",
  "status.fetched":"Данные обновлены",
  "status.fallback":"Live-метрики появятся после деплоя upstream endpoint — пока показаны демо-данные.",
  "status.metric.uptime":"UPTIME",
  "status.metric.nodes":"НОДЫ ONLINE",
  "status.metric.provisioning":"PROVISIONING · 24H",
  "status.metric.canary":"CANARY E2E",
  "status.nodes":"Ноды",
  "status.components":"Компоненты",
  "status.ok":"работает",
  "status.info":"внешний",
  "status.warn":"деградация",
  "status.down":"авария",
  "status.incidents":"Инциденты",
  "status.incidents.empty":"За последние 30 дней инцидентов не зафиксировано.",
  "status.subscribe":"Подписка на уведомления",
  "status.subscribe.body":"Критичные инциденты публикуются в канале <a href=\"https://t.me/wearemagnets\">@wearemagnets</a>. Для SLA-клиентов — отдельные уведомления по email.",
};
const EN_UI = {
  "nav.agents": "Agents", "nav.home": "Home", "nav.updates": "Updates",
  "nav.pricing": "Pricing", "nav.docs": "Guide", "nav.status": "Status",
  "ed.issue.suffix": "releases",
  "ed.freq":     "Shipped when ready",
  "ed.title":    "Updates",
  "ed.latest":   "Latest release",
  "ed.headline": "Latest release",
  "ed.kv.commits":"Commits", "ed.kv.contrib":"Authors",
  "ed.kv.issues":"Closed",   "ed.kv.size":"Delta",
  "ed.added":    "Added", "ed.changed":"Changed", "ed.fixed":"Fixed",
  "foot.company":"© 2026 · IP Silenkov Maxim E.",
  "foot.verif":"Subprocessors",
  "foot.authority":"Jurisdiction",
  "foot.authority-v":"Russian Federation",
  "foot.privacy":"Offer & Privacy Policy",
  "foot.regno":"Tax ID",
  "foot.authority-short":"RF",
  "rail.label":  "View",
  "rail.ed":"Editorial","rail.te":"Terminal","rail.br":"Brutal",
  "rail.hint":   "Three takes on the same grid",
  "te.cmd":      "tail -f CHANGELOG.md",
  "te.more":     "load older releases →",
  "te.banner.suffix": "releases · uptime 99.97%",
  "te.build":    "last build",
  "te.foot":     "lisacorp/superlisa · main",
  "te.added":    "ADDED", "te.changed":"CHANGED", "te.fixed":"FIXED",
  "br.log":      "All releases",
  "br.sort":     "Most recent",
  "br.f1":       'Channel · <b>stable</b>',
  "br.f2":       'Format · <b>SemVer</b>',
  "br.f3":       'Subscribe · <b>RSS / JSON</b>',
  "br.f4":       'Source · <b>lisacorp/superlisa</b>',
  "tw.theme":"Theme", "tw.grotesk":"Grotesk", "tw.grid":"Grid",
  "tw.aesthetic":"Aesthetic", "tw.accent":"Accent", "tw.density":"Density",
  "tw.lang":"Language", "tw.light":"Light", "tw.dark":"Dark",
  "tw.compact":"Compact", "tw.comfy":"Comfy", "tw.spacious":"Spacious",
  "tw.standard":"Standard", "tw.wide":"Wide",
  "tw.asym":"Asym", "tw.dense":"Dense", "tw.loose":"Loose",

  // home
  "home.eyebrow":"FOR AN INDIVIDUAL",
  "home.title":"A personal AI assistant<br />in Telegram — <em>under your own name.</em>",
  "home.lead":"WAM Agents spins up a personal Claude-powered agent right inside Telegram. Your bot, your name, your avatar — in your DMs and your working chats. You bring your Claude key, we bring the container, the memory, and the updates.",
  "home.cta.primary":"LAUNCH IN TELEGRAM →",
  "home.cta.secondary":"SEE PRICING",
  "home.hero.fine":"990 ₽/mo · first month free with promo code <b>SUPERLISA</b> · cancel in one click.",

  "home.how.eyebrow":"HOW IT WORKS",
  "home.how.title":"From start to first message — 3 minutes.",
  "home.how.lead":"Four steps. No servers, no setup — everything happens inside Telegram.",
  "home.how.s1.t":"Open the bot and subscribe",
  "home.how.s1.b":"Hit <b>Start</b> in <a href=\"https://t.me/wamagentsbot\">@wamagentsbot</a>. Promo code <b>SUPERLISA</b> gives you the first month free; after that it's 990 ₽/mo via T-Bank.",
  "home.how.s2.t":"Create your own bot in BotFather",
  "home.how.s2.b":"Open <a href=\"https://t.me/BotFather\">@BotFather</a>, run <code>/newbot</code>, set a name and avatar. Send the token back to <a href=\"https://t.me/wamagentsbot\">@wamagentsbot</a> — that's your personal agent.",
  "home.how.s3.t":"Connect your Claude OAuth key",
  "home.how.s3.b":"Follow the Claude link from the billing bot, authorize, and paste the one-time code back. Inference bills to your Anthropic account via your key — we don't store your tokens.",
  "home.how.s4.t":"Write the agent your first message",
  "home.how.s4.b":"Within 1–2 minutes the agent's container spins up and you DM it — by voice, text, photo or document. In groups and forum topics it answers on direct mention.",

  "home.teams.eyebrow":"FOR TEAMS",
  "home.teams.title":"Need agents for a team? Separate contract.",
  "home.teams.lead":"Shared offer, DPA to your entity, several seats under one subscription, access controls, and usage reporting. We design the format for your team in a call.",
  "home.teams.f1":"<b>Shared offer + DPA</b> — corporate contract and data-processing agreement.",
  "home.teams.f2":"<b>Multi-seat</b> — several teammates under one subscription, one billing point.",
  "home.teams.f3":"<b>Roles and access</b> — agents in team chats and forum topics, each with its own scope.",
  "home.teams.f4":"<b>Reporting</b> — usage and token spend per participant.",
  "home.teams.cta.primary":"EMAIL US ABOUT TEAMS →",
  "home.teams.cta.secondary":"DOCS",

  // pricing
  "pricing.eyebrow":"PRICING",
  "pricing.title":"One plan. Your key.",
  "pricing.lead":"WAM Agents runs on BYOK — bring your own key. You pay us for the subscription and provisioning, Anthropic bills tokens directly to your own Claude subscription.",
  "pricing.plan.kicker":"Personal · Subscription",
  "pricing.plan.unit":"₽ / month",
  "pricing.plan.period":"Individual plan. One agent per user.",
  "pricing.feat.agent":"Personal agent in Telegram — DMs, groups, forum topics",
  "pricing.feat.voice":"Voice, photos, documents, video — in and out",
  "pricing.feat.models":"Model switching: Opus, Sonnet, Haiku, Mythos",
  "pricing.feat.mcp":"MCP tools — Google, GitHub, SSH, your own servers",
  "pricing.feat.memory":"Project-scoped long memory: skills, facts, preferences",
  "pricing.feat.updates":"Auto-updates as Superlisa ships new releases",
  "pricing.cta":"Try free for 30 days →",
  "pricing.promo":"No card required. After the trial — 990 ₽/mo or cancel in one click.",

  "pricing.trial.eyebrow":"30 DAYS FREE",
  "pricing.trial.title":"How the trial works",
  "pricing.trial.s1.t":"Sign up in @wamagentsbot",
  "pricing.trial.s1.b":"Open <a href=\"https://t.me/wamagentsbot\">@wamagentsbot</a>, tap <b>Start</b>. No card required — the trial activates automatically.",
  "pricing.trial.s2.t":"30 days of full access",
  "pricing.trial.s2.b":"All subscription features are on: models, MCP, memory, media. The only requirement is your Claude OAuth key (see below).",
  "pricing.trial.s3.t":"After the trial — 990 ₽/mo",
  "pricing.trial.s3.b":"On day 30 billing will ask you to pay the subscription with a T-Bank card. Don't pay — the container stops and your data is retained for 30 days. Pay — you keep going without a pause. Cancel anytime in one click inside the bot.",

  "pricing.byok.eyebrow":"BYOK · YOUR CLAUDE KEY",
  "pricing.byok.title":"Before launch — an Anthropic account",
  "pricing.byok.lead":"WAM Agents does not resell Claude tokens. Inference is billed directly to your own Anthropic subscription via an OAuth key. You need an active Claude account (Claude Pro or higher) before you start.",
  "pricing.byok.c1.t":"Claude account required",
  "pricing.byok.c1.b":"Sign up on <a href=\"https://claude.ai\" target=\"_blank\" rel=\"noopener\">claude.ai</a> and activate a Pro/Max subscription before launching the agent. Without it inference won't go through.",
  "pricing.byok.c2.t":"One-time OAuth code",
  "pricing.byok.c2.b":"Today it's copy-paste: billing gives you an Anthropic link, you authorize and paste the code back into the bot. In Phase 2 OAuth becomes a one-click button.",
  "pricing.byok.c3.t":"Key stays under control",
  "pricing.byok.c3.b":"The key is stored in our billing with access control and is used only to spin up your agent. Revoke it anytime in Anthropic or via <code>/cancel</code> in the bot.",

  "pricing.kv.tokens.k":"Claude tokens",
  "pricing.kv.tokens.v":"Anthropic bills inference straight to your subscription through your OAuth key. The key sits in our billing with access controls and is used only to launch your agent.",
  "pricing.kv.data.k":"Data",
  "pricing.kv.data.v":"Chats flow through your key. Anthropic does not use them for training. We only store billing metadata and the agent container.",
  "pricing.kv.cancel.k":"Cancellation",
  "pricing.kv.cancel.v":"One click inside <a href=\"https://t.me/wamagentsbot\">@wamagentsbot</a>. Container stops at the end of the paid period.",
  "pricing.kv.legal.k":"Payment agent",
  "pricing.kv.legal.v":"Individual Entrepreneur Maxim Silenkov (Russia, TIN 711613398109) acts as an authorized payment collection agent for RUB settlements during the PMF period. RUB payments via T-Bank. Terms and privacy policy — in the <a href=\"/oferta\">public offer</a>.",

  "pricing.teams.eyebrow":"TEAMS",
  "pricing.teams.title":"Need it for a team?",
  "pricing.teams.lead":"We deploy private instances, custom tools, integrations with corporate SSO and MCP over internal systems. Pricing is scoped to the task — no fixed teams tiers during the PMF period.",
  "pricing.teams.cta":"Email me.silenkov@gmail.com →",

  // docs — 4-step onboarding, mirrors @wamagentsbot copy
  "docs.eyebrow":"GUIDE",
  "docs.title":"Four steps to your agent",
  "docs.lead":"WAM Agents is a Claude Code client that bridges Telegram and Anthropic's agentic models. Onboarding happens inside <a href=\"https://t.me/wamagentsbot\">@wamagentsbot</a>: payment, bot creation via @BotFather, connecting your Claude account — and your agent spins up in its own container.",
  "docs.toc.h":"Contents",
  "docs.toc.1":"Start and payment",
  "docs.toc.2":"Payment confirmation or promo",
  "docs.toc.3":"Bot token from @BotFather",
  "docs.toc.4":"Claude OAuth",
  "docs.toc.5":"Deployment and first message",
  "docs.toc.cmds":"Billing bot commands",
  "docs.step1.t":"Open @wamagentsbot and tap Start",
  "docs.step1.b":"Go to <a href=\"https://t.me/wamagentsbot\">@wamagentsbot</a> and hit <b>Start</b>. The bot briefly explains that WAM Agents is a Claude Code client for Telegram, shows a link to the <a href=\"/oferta\">terms of service</a>, and gives you two buttons: <b>“Get started for 990 ₽/mo”</b> or <b>“Try free for 30 days”</b>. Your Claude subscription is billed separately at claude.ai.",
  "docs.step1.hint":"Before payment the bot asks you to acknowledge data processing: your messages flow through Hetzner (Germany), Telegram (UAE) and Anthropic (US). Without confirmation the service won't start.",
  "docs.step2.t":"Pay via T-Bank or enter a promo code",
  "docs.step2.b":"The “Get started” button opens a T-Bank payment form — 990 ₽ is charged to your card and the bot waits for confirmation. On success you get the message <b>“Payment successful!”</b> and the bot immediately asks for your future agent's name. If you have a promo code (e.g. <b>SUPERLISA</b>), send it as plain text: the bot replies <b>“Promo code applied! First month is free”</b> and moves on to step 3. Alternative: the <b>“Try free for 30 days”</b> button activates a trial without a card.",
  "docs.step3.t":"Create a bot in @BotFather and paste the token",
  "docs.step3.b":"First @wamagentsbot asks for a name — send it and the bot will try to auto-create the account. If auto-creation fails, the bot shows manual instructions: open <a href=\"https://t.me/BotFather\">@BotFather</a>, run <code>/newbot</code>, follow the prompts, copy the token (format <code>1234567890:AABBccDDeeFFggHHiiJJkkLLmmNNooPP11</code>) and paste it into the chat with <a href=\"https://t.me/wamagentsbot\">@wamagentsbot</a>. The token is validated and the bot confirms: <b>“Bot verified successfully”</b>.",
  "docs.step4.t":"Connect your Claude account",
  "docs.step4.b":"The bot prepares an Anthropic authorization link and offers one of two branches. Primary: follow the link, sign in to your Claude account, copy the one-time code from the browser and send it back to the chat — the bot exchanges the code for an OAuth token. Fallback, if auto-auth service is unavailable: run <code>claude setup-token</code> in your terminal, authorize, copy the token (format <code>sk-ant-oat01-…</code>) and paste it. Claude tokens bill to your Anthropic account; we store the key only to run your agent.",
  "docs.step4.flag":"<b>Phase 2.</b> After Phase 2 step 4 simplifies to a single button: the OAuth flow will complete inside Telegram without copying a code and without a terminal.",
  "docs.step5.t":"Your agent deploys — DM it",
  "docs.step5.b":"After OAuth the bot shows the status <b>“Deploying your agent…”</b>. Within 1–2 minutes an isolated container comes up and you get confirmation: <b>“Your agent is deployed and running! Now open your bot @your_bot and send any message”</b>. The agent works in DMs, groups and forum topics. If anything goes wrong — use <code>/support</code> inside @wamagentsbot.",
  "docs.cmd.t":"@wamagentsbot commands",
  "docs.cmd.sub":"Available after registration. Commands for the agent itself are configured separately, inside your own bot.",
  "docs.cmd.start":"start onboarding or resume where you left off",
  "docs.cmd.status":"subscription status and next charge date",
  "docs.cmd.support":"contact support",
  "docs.cmd.consent":"view your data-processing consent",
  "docs.cmd.withdraw":"withdraw consent and delete the account",
  "docs.cmd.cancel":"cancel subscription, the bot will be disconnected",
  "docs.cmd.delete":"fully delete the agent and its data",
  "docs.media.t":"What the agent can do",
  "docs.media.b":"Voice, photos, documents and video — all in and out natively through Telegram. Voice is auto-transcribed, PDFs and DOCX files are read end-to-end. The agent works in DMs, groups and forum topics — just add it to the chat you want.",
  "docs.memory.t":"Memory and skills",
  "docs.memory.b":"The agent remembers your preferences, contacts and projects inside its own container. Skills and facts can be edited by conversation — just ask it to add, update or forget.",
  "docs.support.t":"Support",
  "docs.support.b":"Write to <a href=\"https://t.me/wamagentsbot\">@wamagentsbot</a> with <code>/support</code>. Incidents and uptime — on the <a href=\"/status\">status</a> page. SLA and terms — in the <a href=\"/oferta\">offer</a>.",

  // status
  "status.eyebrow":"STATUS",
  "status.title":"All systems operational",
  "status.lead":"State refreshes every 60 seconds from the agentslisa public read-only endpoint.",
  "status.build":"Last build",
  "status.fetched":"Data refreshed",
  "status.fallback":"Live metrics coming soon — showing mock data until the upstream endpoint ships.",
  "status.metric.uptime":"UPTIME",
  "status.metric.nodes":"NODES ONLINE",
  "status.metric.provisioning":"PROVISIONING · 24H",
  "status.metric.canary":"CANARY E2E",
  "status.nodes":"Nodes",
  "status.components":"Components",
  "status.ok":"operational",
  "status.info":"external",
  "status.warn":"degraded",
  "status.down":"outage",
  "status.incidents":"Incidents",
  "status.incidents.empty":"No incidents recorded in the last 30 days.",
  "status.subscribe":"Subscribe to notifications",
  "status.subscribe.body":"Critical incidents are posted in the <a href=\"https://t.me/wearemagnets\">@wearemagnets</a> channel. SLA clients get dedicated email alerts.",
};

const ACCENTS = {
  blue:  { accent: "#0080FF", dim: "rgba(0,128,255,0.15)" },
  red:   { accent: "#EE5353", dim: "rgba(238,83,83,0.15)" },
  green: { accent: "#3FD16F", dim: "rgba(63,209,111,0.15)" },
  amber: { accent: "#E0A93A", dim: "rgba(224,169,58,0.15)" },
  white: { accent: "#FAFAFA", dim: "rgba(255,255,255,0.15)" },
};

const MONTHS_RU = ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];
const MONTHS_EN = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
function fmtDate(iso, lang) {
  const d = new Date(iso);
  if (lang === "en") return `${MONTHS_EN[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  return `${d.getDate()} ${MONTHS_RU[d.getMonth()]} ${d.getFullYear()}`;
}
function splitVer(v) {
  const parts = v.split(".");
  return { major: parts[0], minor: parts[1], patch: parts[2] };
}

/* ---------- state ---------- */
// Lang is driven by the URL (SSR sets <html lang>). LocalStorage is a
// leftover from client-side-only i18n and is deliberately ignored so the
// language always matches the current route (/ vs /en/*).
const state = {
  lang: document.documentElement.lang === "en" ? "en" : "ru",
  variant: localStorage.getItem("wam.variant") || "editorial",
  accent: localStorage.getItem("wam.accent") || "blue",
  density: localStorage.getItem("wam.density") || "comfortable",
  theme: localStorage.getItem("wam.theme") || "dark",
  font: localStorage.getItem("wam.font") || "geist",
  grid: localStorage.getItem("wam.grid") || "standard",
};

/* ---------- renderers ---------- */
function loc(r) { return r[state.lang] || r.ru; }

function displayTitle(tr, version) {
  const t = (tr.title || "").trim();
  if (!t || t === `v${version}` || t === version) return "";
  return t;
}

function renderEditorial() {
  const [hero, ...rest] = window.RELEASES;
  const t = loc(hero);

  const heroTitle = displayTitle(t, hero.version) || `v${hero.version}`;
  document.getElementById("ed-h2").textContent = heroTitle;
  document.getElementById("ed-intro").textContent = t.intro;

  const cols = document.getElementById("ed-cols");
  if (cols) {
    const UI = state.lang === "en" ? EN_UI : RU_UI;
    cols.innerHTML = "";
    const sections = [
      ["added",   UI["ed.added"],   t.added],
      ["changed", UI["ed.changed"], t.changed],
      ["fixed",   UI["ed.fixed"],   t.fixed],
    ];
    for (const [k, h, items] of sections) {
      if (!items || !items.length) continue;
      const sec = document.createElement("div");
      sec.className = "ed__section";
      sec.innerHTML = `
        <div class="ed__section-title"><span>${h}</span><span>${items.length}</span></div>
        ${items.map(li => `<div class="ed__li"><span>${li}</span></div>`).join("")}`;
      cols.appendChild(sec);
    }
  }

  const UI = state.lang === "en" ? EN_UI : RU_UI;

  const grid = document.getElementById("ed-grid");
  grid.innerHTML = rest.map(r => {
    const tr = loc(r);
    const v = splitVer(r.version);
    const counts = ["added","changed","fixed"]
      .map(k => tr[k] ? { k, n: tr[k].length } : null).filter(Boolean);
    const ct = displayTitle(tr, r.version);
    return `
      <article class="ed__card">
        <div class="ed__card-top">
          <span class="ed__v-small">v${v.major}.<b>${v.minor}</b>.${v.patch}</span>
          <span>${fmtDate(r.date, state.lang)} · ${r.tag.toUpperCase()}</span>
        </div>
        ${ct ? `<h3>${ct}</h3>` : ""}
        <p>${tr.intro}</p>
        <div class="ed__pills">
          ${counts.map(c => `<span class="ed__pill"><b>${c.n}</b>${UI["ed." + c.k]}</span>`).join("")}
        </div>
      </article>`;
  }).join("");
}

function renderTerminal() {
  const UI = state.lang === "en" ? EN_UI : RU_UI;
  const list = document.getElementById("te-list");
  list.innerHTML = window.RELEASES.map((r, i) => {
    const t = loc(r);
    const v = splitVer(r.version);
    const blocks = [
      ["added",   UI["te.added"],   t.added,   "+"],
      ["changed", UI["te.changed"], t.changed, "~"],
      ["fixed",   UI["te.fixed"],   t.fixed,   "-"],
    ].filter(([,,items]) => items && items.length);

    return `
      <section class="term__release ${i === 0 ? "term__release--first" : ""}">
        <div class="term__gutter">
          <div class="term__vbig">${v.major}.<b>${v.minor}</b>.${v.patch}</div>
          <div class="term__date">${fmtDate(r.date, state.lang)}</div>
          <span class="term__tag term__tag--${r.tag === "minor" ? "minor" : ""}">${r.tag}</span>
          ${r.codename ? `<div style="color:var(--faint)">« ${r.codename} »</div>` : ""}
        </div>
        <div class="term__body">
          ${displayTitle(t, r.version) ? `<h3>${displayTitle(t, r.version)}</h3>` : ""}
          <p class="term__intro">${t.intro}</p>
          ${blocks.map(([k, h, items, mk]) => `
            <div class="term__block term__block--${k}">
              <div class="term__block-h">
                <span class="term__pfx">${mk} ${h}</span>
                <span>${items.length}</span>
              </div>
              ${items.map(li => `<div class="term__li"><span class="term__li-mk">${mk}</span><span>${li}</span></div>`).join("")}
            </div>`).join("")}
        </div>
      </section>`;
  }).join("");
}

function renderBrutal() {
  const UI = state.lang === "en" ? EN_UI : RU_UI;
  const [hero, ...rest] = window.RELEASES;
  const t = loc(hero);
  const v = splitVer(hero.version);

  const blocks = [
    ["add", UI["te.added"],   t.added],
    ["chg", UI["te.changed"], t.changed],
    ["fix", UI["te.fixed"],   t.fixed],
  ].filter(([,,items]) => items && items.length);

  document.getElementById("br-hero").innerHTML = `
    <div class="br__hero-num">${v.major}.<b>${v.minor}</b>.${v.patch}</div>
    <div class="br__hero-right">
      <h2>${displayTitle(t, hero.version) || `v${hero.version}`}</h2>
      <p>${t.intro}</p>
      <div class="br__hero-meta">
        <div>${hero.tag.toUpperCase()}</div>
        <div><b>${fmtDate(hero.date, state.lang)}</b></div>
        ${hero.codename ? `<div>« <b>${hero.codename}</b> »</div>` : ""}
      </div>
    </div>
    <div class="br__hero-blocks">
      ${blocks.map(([cls, h, items]) => `
        <div class="br__block br__block--${cls}">
          <div class="br__block-h"><b>${h}</b><span>${items.length}</span></div>
          <ul>${items.map(li => `<li>${li}</li>`).join("")}</ul>
        </div>`).join("")}
    </div>`;

  document.getElementById("br-rows").innerHTML = rest.map(r => {
    const tr = loc(r);
    const vr = splitVer(r.version);
    const counts = {
      add: tr.added ? tr.added.length : 0,
      chg: tr.changed ? tr.changed.length : 0,
      fix: tr.fixed ? tr.fixed.length : 0,
    };
    return `
      <article class="br__row">
        <div class="br__row-v">
          <div>${vr.major}.<b>${vr.minor}</b>.${vr.patch}</div>
          <div class="br__row-meta">
            <span>${fmtDate(r.date, state.lang)}</span>
            <span>${r.tag.toUpperCase()}</span>
          </div>
        </div>
        <div class="br__row-main">
          ${displayTitle(tr, r.version) ? `<h3>${displayTitle(tr, r.version)}</h3>` : ""}
          <p>${tr.intro}</p>
        </div>
        <div class="br__row-stats">
          ${counts.add ? `<div class="br__stat br__stat--add"><span>+ ${UI["te.added"]}</span><b>${counts.add}</b></div>` : ""}
          ${counts.chg ? `<div class="br__stat br__stat--chg"><span>~ ${UI["te.changed"]}</span><b>${counts.chg}</b></div>` : ""}
          ${counts.fix ? `<div class="br__stat br__stat--fix"><span>− ${UI["te.fixed"]}</span><b>${counts.fix}</b></div>` : ""}
        </div>
      </article>`;
  }).join("");
}

/* ---------- view switcher ---------- */
function showVariant(v) {
  state.variant = v;
  localStorage.setItem("wam.variant", v);
  document.body.dataset.variant = v;
  document.querySelectorAll(".view").forEach(el => el.hidden = true);
  const target = document.getElementById("v-" + (v === "brutal" ? "brutal" : v));
  if (target) target.hidden = false;
  document.querySelectorAll(".variant-rail__opt").forEach(b =>
    b.setAttribute("aria-pressed", b.dataset.variant === v ? "true" : "false"));
  document.querySelectorAll("[data-tweak='variant'] button").forEach(b =>
    b.setAttribute("aria-pressed", b.dataset.value === v ? "true" : "false"));
}

/* ---------- i18n apply ---------- */
function applyLang() {
  document.documentElement.lang = state.lang;
  document.body.dataset.lang = state.lang;
  const UI = state.lang === "en" ? EN_UI : RU_UI;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const k = el.getAttribute("data-i18n");
    if (UI[k] != null) el.innerHTML = UI[k];
  });
  document.querySelectorAll("[data-ed-latest-ver]").forEach(el => {
    const v = el.getAttribute("data-" + state.lang);
    if (v) el.textContent = v;
  });
  document.querySelectorAll(".nav__lang button, .nav__lang a").forEach(b =>
    b.setAttribute("aria-pressed", b.dataset.lang === state.lang ? "true" : "false"));
  document.querySelectorAll("[data-tweak='lang'] button").forEach(b =>
    b.setAttribute("aria-pressed", b.dataset.value === state.lang ? "true" : "false"));
  renderAll();
}
function applyAccent() {
  const a = ACCENTS[state.accent] || ACCENTS.blue;
  document.documentElement.style.setProperty("--accent", a.accent);
  document.documentElement.style.setProperty("--accent-dim", a.dim);
  document.querySelectorAll("[data-tweak='accent'] button").forEach(b =>
    b.setAttribute("aria-pressed", b.dataset.value === state.accent ? "true" : "false"));
  localStorage.setItem("wam.accent", state.accent);
}
function applyTheme() {
  document.documentElement.setAttribute("data-theme", state.theme);
  document.body.dataset.theme = state.theme;
  const meta = document.getElementById("meta-theme-color");
  if (meta) meta.setAttribute("content", state.theme === "light" ? "#f2f2f4" : "#09090b");
  document.querySelectorAll("[data-tweak='theme'] button").forEach(b =>
    b.setAttribute("aria-pressed", b.dataset.value === state.theme ? "true" : "false"));
  localStorage.setItem("wam.theme", state.theme);
}
function applyFont() {
  document.documentElement.setAttribute("data-font", state.font);
  document.body.dataset.font = state.font;
  document.querySelectorAll("[data-tweak='font'] button").forEach(b =>
    b.setAttribute("aria-pressed", b.dataset.value === state.font ? "true" : "false"));
  localStorage.setItem("wam.font", state.font);
}
function applyGrid() {
  document.documentElement.setAttribute("data-grid", state.grid);
  document.body.dataset.grid = state.grid;
  document.querySelectorAll("[data-tweak='grid'] button").forEach(b =>
    b.setAttribute("aria-pressed", b.dataset.value === state.grid ? "true" : "false"));
  localStorage.setItem("wam.grid", state.grid);
}
function applyDensity() {
  const map = { compact: "16px", comfortable: "28px", spacious: "44px" };
  document.documentElement.style.setProperty("--shell-pad", map[state.density] || "28px");
  document.querySelectorAll("[data-tweak='density'] button").forEach(b =>
    b.setAttribute("aria-pressed", b.dataset.value === state.density ? "true" : "false"));
  localStorage.setItem("wam.density", state.density);
}

function renderAll() {
  renderEditorial();
  renderTerminal();
  renderBrutal();
}

/* ---------- event wiring ---------- */
document.querySelectorAll(".variant-rail__opt").forEach(b => {
  b.addEventListener("click", () => showVariant(b.dataset.variant));
});
/* Nav theme is now a single toggle button — cycles dark<->light.
   Nav lang is a single <a> that links directly to the other locale, so no
   click handler is needed (the browser navigates). */
const navThemeBtn = document.querySelector("button.nav__theme");
if (navThemeBtn) {
  const syncThemeAria = () => {
    navThemeBtn.setAttribute("aria-pressed", state.theme === "light" ? "true" : "false");
    const other = state.theme === "dark" ? (state.lang === "en" ? "Switch to light theme" : "Переключить на светлую тему")
                                         : (state.lang === "en" ? "Switch to dark theme"  : "Переключить на тёмную тему");
    navThemeBtn.setAttribute("aria-label", other);
    navThemeBtn.setAttribute("title", other);
  };
  syncThemeAria();
  navThemeBtn.addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    applyTheme();
    syncThemeAria();
  });
}
document.querySelectorAll("[data-tweak]").forEach(group => {
  const kind = group.getAttribute("data-tweak");
  group.querySelectorAll("button").forEach(b => {
    b.addEventListener("click", () => {
      const v = b.dataset.value;
      if (kind === "variant")  showVariant(v);
      if (kind === "accent")  { state.accent = v; applyAccent(); }
      if (kind === "density") { state.density = v; applyDensity(); }
      if (kind === "lang")    { state.lang = v; applyLang(); }
      if (kind === "theme")   { state.theme = v; applyTheme(); }
      if (kind === "font")    { state.font = v; applyFont(); }
      if (kind === "grid")    { state.grid = v; applyGrid(); }
    });
  });
});

/* ---------- tweaks host protocol ---------- */
window.addEventListener("message", e => {
  if (!e.data || typeof e.data !== "object") return;
  if (e.data.type === "__activate_edit_mode") document.getElementById("tweaks")?.classList.add("open");
  if (e.data.type === "__deactivate_edit_mode") document.getElementById("tweaks")?.classList.remove("open");
});
document.getElementById("tweaks-close")?.addEventListener("click", () => {
  document.getElementById("tweaks")?.classList.remove("open");
});
try { window.parent.postMessage({ type: "__edit_mode_available" }, "*"); } catch (e) {}

/* ---------- init ---------- */
applyTheme();
applyFont();
applyGrid();
applyAccent();
applyDensity();
applyLang();           // also triggers renderAll()
showVariant(state.variant);
