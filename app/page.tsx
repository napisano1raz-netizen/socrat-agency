'use client';

import { FormEvent, useState } from 'react';

type FormState = {
  name: string;
  company: string;
  phone: string;
  message: string;
};

const initialForm: FormState = { name: '', company: '', phone: '', message: '' };

export default function HomePage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const submitLead = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Ошибка отправки');
      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 bg-mesh text-slate-100">
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-24">
        <div className="card shadow-glow p-10 md:p-14">
          <p className="mb-4 inline-flex rounded-full border border-neon/40 px-4 py-1 text-sm text-neon">AI Web Agency</p>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">ООО СОКРАТ — сайты, которые превращают трафик в выручку</h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            Мы создаём премиальные B2B-платформы с AI-автоматизацией, глубокой аналитикой и интеграциями в ваш текущий стек.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2">
        <article className="card p-8">
          <h2 className="text-2xl font-semibold">Услуги и интеграции</h2>
          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Разработка корпоративных сайтов и лендингов с AI-персонализацией.</li>
            <li>• Интеграции с <strong>amoCRM</strong> и <strong>Битрикс24</strong> для сквозной воронки продаж.</li>
            <li>• Подключение платежей: <strong>Т-Касса</strong> и <strong>ЮKassa</strong>.</li>
            <li>• Настройка аналитики лидов, call-tracking и BI-дашбордов.</li>
          </ul>
        </article>
        <article className="card p-8">
          <h2 className="text-2xl font-semibold">Технологический стек</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-200">
            {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js API', 'PostgreSQL/JSON', 'OpenAI API', 'Vercel'].map((tech) => (
              <span key={tech} className="rounded-xl border border-white/15 bg-white/5 px-4 py-2">{tech}</span>
            ))}
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_0_80px_rgba(14,165,233,0.08)] backdrop-blur-xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-neon/40 px-4 py-1 text-sm text-neon">Наши тарифы</p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Стоимость разработки</h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-300">Премиальные тарифы для старта цифрового бизнеса — тёмный стиль, неоновая подсветка и готовое решение за несколько дней.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <article className="rounded-[2rem] border border-cyan-500/10 bg-white/5 p-8 shadow-[0_0_50px_rgba(8,145,178,0.12)] transition hover:-translate-y-1 hover:border-cyan-400/20 hover:shadow-[0_0_60px_rgba(56,189,248,0.16)]">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Лендинг</p>
              <h3 className="mt-4 text-3xl font-semibold text-white">от 15 000 руб.</h3>
              <p className="mt-3 text-slate-300">Быстрый запуск сайта с AI-дизайном и одной формой заявки.</p>
              <ul className="mt-8 space-y-3 text-slate-200">
                <li>✓ срок 3 дня</li>
                <li>✓ AI-дизайн и адаптивность</li>
                <li>✓ интеграция одной формы</li>
                <li>✓ стильный целевой лендинг</li>
              </ul>
              <button className="mt-10 w-full rounded-2xl border border-white/10 bg-gradient-to-r from-slate-900 via-cyan-700 to-slate-900 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:border-cyan-400/60 hover:bg-cyan-500/10 hover:text-cyan-100">Выбрать тариф</button>
            </article>

            <article className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-slate-900/80 p-8 shadow-[0_0_60px_rgba(34,211,238,0.20)] ring-1 ring-cyan-400/30">
              <span className="absolute right-6 top-6 rounded-full bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.45)]">Популярно</span>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Бизнес-сайт</p>
              <h3 className="mt-4 text-3xl font-semibold text-white">от 35 000 руб.</h3>
              <p className="mt-3 text-slate-300">Готовое решение для бизнеса с интеграциями и профессиональной визуализацией.</p>
              <ul className="mt-8 space-y-3 text-slate-200">
                <li>✓ срок 5 дней</li>
                <li>✓ до 5 страниц</li>
                <li>✓ интеграция amoCRM и Т-Кассы</li>
                <li>✓ адаптация под ваш бренд</li>
              </ul>
              <button className="mt-10 w-full rounded-2xl border border-cyan-400/30 bg-gradient-to-r from-cyan-400/20 via-slate-900 to-cyan-400/15 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-400/25 hover:text-cyan-100">Выбрать тариф</button>
            </article>

            <article className="rounded-[2rem] border border-violet-500/10 bg-white/5 p-8 shadow-[0_0_50px_rgba(124,58,237,0.12)] transition hover:-translate-y-1 hover:border-violet-400/20 hover:shadow-[0_0_60px_rgba(139,92,246,0.16)]">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">IT-Интеграция</p>
              <h3 className="mt-4 text-3xl font-semibold text-white">от 70 000 руб.</h3>
              <p className="mt-3 text-slate-300">Сложные сервисы, базы данных и обучение команды по лицензии.</p>
              <ul className="mt-8 space-y-3 text-slate-200">
                <li>✓ сложные сервисы и API</li>
                <li>✓ базы данных и CRM</li>
                <li>✓ корпоративное обучение</li>
                <li>✓ поддержка после запуска</li>
              </ul>
              <button className="mt-10 w-full rounded-2xl border border-white/10 bg-gradient-to-r from-slate-900 via-violet-700 to-slate-900 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:border-violet-400/60 hover:bg-violet-500/10 hover:text-violet-100">Выбрать тариф</button>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="card p-8 md:p-10">
          <h2 className="text-3xl font-semibold">Оставить заявку</h2>
          <p className="mt-2 text-slate-300">Ответим в течение 30 минут в рабочее время и предложим план запуска.</p>
          <form onSubmit={submitLead} className="mt-6 grid gap-4">
            <input required placeholder="Ваше имя" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="rounded-xl border border-white/20 bg-black/20 px-4 py-3" />
            <input required placeholder="Компания" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="rounded-xl border border-white/20 bg-black/20 px-4 py-3" />
            <input required placeholder="Телефон / Telegram" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="rounded-xl border border-white/20 bg-black/20 px-4 py-3" />
            <textarea required placeholder="Кратко о задаче" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="min-h-28 rounded-xl border border-white/20 bg-black/20 px-4 py-3" />
            <button disabled={status === 'loading'} className="rounded-xl bg-gradient-to-r from-electric to-neon px-6 py-3 font-semibold text-ink transition hover:brightness-110 disabled:opacity-70">
              {status === 'loading' ? 'Отправляем...' : 'Обсудить проект в Telegram'}
            </button>
            {status === 'success' && <p className="text-neon">Спасибо! Заявка отправлена.</p>}
            {status === 'error' && <p className="text-rose-400">Не удалось отправить заявку. Попробуйте ещё раз.</p>}
          </form>
        </div>
      </section>
    </main>
  );
}
