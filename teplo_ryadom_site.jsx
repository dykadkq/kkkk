import React from "react";

export default function TeploRyadom() {
  const contacts = [
    { name: "Дочь — Алия", icon: "👩", phone: "+7 (700) 123-45-67" },
    { name: "Сын — Марат", icon: "👨", phone: "+7 (701) 555-20-20" },
    { name: "Внуки", icon: "🧒", phone: "+7 (777) 888-11-22" },
  ];

  const reminders = [
    { time: "09:00", text: "Принять лекарства", icon: "💊" },
    { time: "11:00", text: "Выпить воды", icon: "💧" },
    { time: "16:00", text: "Прогулка", icon: "🚶" },
  ];

  const activities = [
    { title: "Игры", icon: "🧩", text: "Простые игры для памяти и настроения" },
    { title: "Музыка", icon: "🎵", text: "Любимые песни и спокойная музыка" },
    { title: "Упражнения", icon: "🧘", text: "Лёгкие движения для хорошего самочувствия" },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const callNumber = (phone) => {
    window.location.href = `tel:${phone.replace(/[^\d+]/g, "")}`;
  };

  const assistantReply = (message) => {
    const text = message.toLowerCase();
    if (text.includes("лекар") || text.includes("таблет")) {
      return "Не забудьте принять лекарства вовремя. Можно открыть раздел «Напоминания» и проверить расписание.";
    }
    if (text.includes("позвон") || text.includes("сын") || text.includes("дочь") || text.includes("вну")) {
      return "Конечно. Нажмите на большую кнопку «Позвонить близким» и выберите нужный контакт.";
    }
    if (text.includes("скуч") || text.includes("одиноко")) {
      return "Я рядом 💛 Попробуйте включить музыку или позвонить близким. Это может поднять настроение.";
    }
    if (text.includes("помощ") || text.includes("плохо") || text.includes("боль")) {
      return "Если вам срочно нужна помощь, нажмите красную кнопку в разделе «Экстренная помощь».";
    }
    return "Здравствуйте 💛 Я помогу вам. Вы можете позвонить близким, посмотреть напоминания, выбрать активность или вызвать помощь.";
  };

  const [newReminder, setNewReminder] = React.useState("");
  const [extraReminders, setExtraReminders] = React.useState([]);
  const [chatInput, setChatInput] = React.useState("");
  const [messages, setMessages] = React.useState([
    {
      role: "assistant",
      text: "Здравствуйте! Я ваш помощник. Напишите, что вам нужно: позвонить, посмотреть напоминания или вызвать помощь.",
    },
  ]);

  const addReminder = () => {
    if (!newReminder.trim()) return;
    setExtraReminders((prev) => [...prev, { time: "Сегодня", text: newReminder.trim(), icon: "📝" }]);
    setNewReminder("");
  };

  const sendMessage = () => {
    if (!chatInput.trim()) return;
    const userText = chatInput.trim();
    const reply = assistantReply(userText);
    setMessages((prev) => [
      ...prev,
      { role: "user", text: userText },
      { role: "assistant", text: reply },
    ]);
    setChatInput("");
  };

  return (
    <div className="min-h-screen bg-[#f8f2e8] text-[#3f3a34]">
      <header className="sticky top-0 z-20 border-b-4 border-[#d7e8ea] bg-[#fffaf3] px-4 py-4 shadow-sm">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-3xl font-bold md:text-4xl">Тепло рядом</h1>
            <p className="mt-2 text-lg md:text-xl">Сайт для заботы, общения и спокойствия</p>
          </div>
          <nav className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {[
              ["Главная", "home"],
              ["Позвонить", "call"],
              ["Напоминания", "reminders"],
              ["Активности", "activities"],
              ["Помощь", "help"],
            ].map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="rounded-2xl border-2 border-[#c9dfc5] bg-[#eef8ea] px-4 py-3 text-lg font-semibold shadow-sm transition hover:scale-[1.02]"
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-6 md:px-6 md:py-8">
        <section id="home" className="rounded-[2rem] bg-[#fffaf3] p-6 shadow-md md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-3 inline-block rounded-full bg-[#dff0d8] px-4 py-2 text-lg font-semibold">Добро пожаловать 💛</p>
              <h2 className="text-4xl font-bold leading-tight md:text-5xl">Здесь всё просто, понятно и удобно</h2>
              <p className="mt-4 max-w-2xl text-xl leading-relaxed md:text-2xl">
                Этот сайт помогает пожилым людям чувствовать заботу, быть на связи с близкими и легче справляться с повседневной жизнью.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {[
                  ["📞", "Позвонить близким", "call", "bg-[#d8eef4]"],
                  ["⏰", "Напоминания", "reminders", "bg-[#eef8ea]"],
                  ["🎵", "Активности", "activities", "bg-[#f8eed8]"],
                  ["🆘", "Экстренная помощь", "help", "bg-[#fde3e3]"],
                ].map(([icon, label, id, bg]) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`${bg} rounded-[2rem] border-2 border-white px-6 py-8 text-left shadow-md transition hover:scale-[1.02]`}
                  >
                    <div className="text-5xl">{icon}</div>
                    <div className="mt-4 text-2xl font-bold md:text-3xl">{label}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#eaf4f5] p-6 shadow-inner">
              <div className="mb-4 text-7xl text-center">🏡</div>
              <p className="text-center text-2xl font-semibold leading-relaxed">
                Тёплый и спокойный помощник для каждого дня
              </p>
              <p className="mt-4 text-center text-lg leading-relaxed">
                Всё доступно в 1–2 клика. Крупный текст, большие кнопки и понятные разделы.
              </p>
            </div>
          </div>
        </section>

        <section id="call" className="rounded-[2rem] bg-[#f5fbfc] p-6 shadow-md md:p-8">
          <h2 className="text-3xl font-bold md:text-4xl">Позвонить близким</h2>
          <p className="mt-3 text-xl">Выберите человека и нажмите на кнопку звонка.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {contacts.map((contact) => (
              <div key={contact.name} className="rounded-[2rem] bg-white p-6 shadow-sm">
                <div className="text-6xl">{contact.icon}</div>
                <h3 className="mt-4 text-2xl font-bold">{contact.name}</h3>
                <p className="mt-2 text-lg">{contact.phone}</p>
                <button
                  onClick={() => callNumber(contact.phone)}
                  className="mt-6 w-full rounded-2xl bg-[#cfe8ff] px-5 py-4 text-2xl font-bold shadow-sm transition hover:scale-[1.02]"
                >
                  📞 Позвонить
                </button>
              </div>
            ))}
          </div>
        </section>

        <section id="reminders" className="rounded-[2rem] bg-[#f5fbf2] p-6 shadow-md md:p-8">
          <h2 className="text-3xl font-bold md:text-4xl">Напоминания</h2>
          <p className="mt-3 text-xl">Ваши важные дела на сегодня.</p>

          <div className="mt-6 grid gap-4">
            {[...reminders, ...extraReminders].map((item, index) => (
              <div key={`${item.text}-${index}`} className="flex items-center justify-between rounded-[1.5rem] bg-white p-5 shadow-sm">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{item.icon}</span>
                  <div>
                    <div className="text-2xl font-bold">{item.text}</div>
                    <div className="text-lg">{item.time}</div>
                  </div>
                </div>
                <span className="rounded-full bg-[#e7f6e3] px-4 py-2 text-lg font-semibold">Важно</span>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[2rem] bg-white p-5 shadow-sm">
            <h3 className="text-2xl font-bold">Добавить напоминание</h3>
            <div className="mt-4 flex flex-col gap-3 md:flex-row">
              <input
                value={newReminder}
                onChange={(e) => setNewReminder(e.target.value)}
                placeholder="Например: позвонить дочери"
                className="w-full rounded-2xl border-2 border-[#d6e6d2] px-5 py-4 text-xl outline-none"
              />
              <button
                onClick={addReminder}
                className="rounded-2xl bg-[#dff0d8] px-6 py-4 text-2xl font-bold shadow-sm transition hover:scale-[1.02]"
              >
                ＋ Добавить
              </button>
            </div>
          </div>
        </section>

        <section id="activities" className="rounded-[2rem] bg-[#fffaf2] p-6 shadow-md md:p-8">
          <h2 className="text-3xl font-bold md:text-4xl">Активности</h2>
          <p className="mt-3 text-xl">Простые занятия для хорошего настроения.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {activities.map((item) => (
              <div key={item.title} className="rounded-[2rem] bg-white p-6 shadow-sm">
                <div className="text-6xl">{item.icon}</div>
                <h3 className="mt-4 text-2xl font-bold">{item.title}</h3>
                <p className="mt-3 text-xl leading-relaxed">{item.text}</p>
                <button className="mt-6 w-full rounded-2xl bg-[#f3ead0] px-5 py-4 text-2xl font-bold transition hover:scale-[1.02]">
                  Открыть
                </button>
              </div>
            ))}
          </div>
        </section>

        <section id="help" className="rounded-[2rem] bg-[#fff5f5] p-6 shadow-md md:p-8">
          <h2 className="text-3xl font-bold md:text-4xl">Экстренная помощь</h2>
          <p className="mt-3 text-xl">Если вам нужна срочная помощь, нажмите кнопку ниже.</p>
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => alert("Сигнал о помощи отправлен сотрудникам.")}
              className="min-h-[180px] w-full max-w-3xl rounded-[2rem] border-4 border-red-200 bg-red-500 px-8 py-10 text-4xl font-bold text-white shadow-lg transition hover:scale-[1.02] md:text-5xl"
            >
              🆘 Вызвать помощь
            </button>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <section className="rounded-[2rem] bg-[#f4fbf8] p-6 shadow-md md:p-8">
            <h2 className="text-3xl font-bold md:text-4xl">ИИ-помощник</h2>
            <p className="mt-3 text-xl">Можно написать простой вопрос.</p>
            <div className="mt-6 flex max-h-[360px] flex-col gap-3 overflow-y-auto rounded-[1.5rem] bg-white p-4 shadow-inner">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`max-w-[90%] rounded-[1.5rem] px-4 py-3 text-xl leading-relaxed ${
                    msg.role === "assistant"
                      ? "bg-[#e8f4ea] self-start"
                      : "bg-[#dceef8] self-end"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-3 md:flex-row">
              <input
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Например: хочу позвонить дочери"
                className="w-full rounded-2xl border-2 border-[#d6e6d2] px-5 py-4 text-xl outline-none"
              />
              <button
                onClick={sendMessage}
                className="rounded-2xl bg-[#d8eef4] px-6 py-4 text-2xl font-bold transition hover:scale-[1.02]"
              >
                Отправить
              </button>
            </div>
          </section>

          <section id="about" className="rounded-[2rem] bg-[#fffaf3] p-6 shadow-md md:p-8">
            <h2 className="text-3xl font-bold md:text-4xl">О проекте</h2>
            <p className="mt-4 text-xl leading-relaxed md:text-2xl">
              «Тепло рядом» — это простой и добрый сайт, который помогает пожилым людям чувствовать заботу,
              общаться с близкими и легче справляться с повседневной жизнью.
            </p>
            <div className="mt-6 rounded-[1.5rem] bg-[#edf6ff] p-5 text-xl leading-relaxed">
              Здесь нет сложных меню, мелкого текста и лишних действий. Всё сделано так, чтобы человек мог быстро найти нужную функцию и чувствовать себя спокойно и уверенно.
            </div>
            <div className="mt-6 text-7xl text-center">💛🌿☁️</div>
          </section>
        </section>
      </main>
    </div>
  );
}
