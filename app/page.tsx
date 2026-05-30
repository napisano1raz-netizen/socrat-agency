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
              {status === 'loading' ? 'Отправляем...' : 'Получить коммерческое предложение'}
            </button>
            {status === 'success' && <p className="text-neon">Спасибо! Заявка отправлена.</p>}
            {status === 'error' && <p className="text-rose-400">Не удалось отправить заявку. Попробуйте ещё раз.</p>}
          </form>
        </div>
      </section>
    </main>
  );
}
