import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

type Lead = {
  name: string;
  company: string;
  phone: string;
  message: string;
  createdAt: string;
};

const dbPath = path.join(process.cwd(), 'data', 'leads.json');

export async function POST(request: Request) {
  const body = await request.json();

  if (!body?.name || !body?.company || !body?.phone || !body?.message) {
    return NextResponse.json({ error: 'Заполните все поля' }, { status: 400 });
  }

  await fs.mkdir(path.dirname(dbPath), { recursive: true });

  let leads: Lead[] = [];
  try {
    const file = await fs.readFile(dbPath, 'utf8');
    leads = JSON.parse(file);
  } catch {
    leads = [];
  }

  const lead: Lead = {
    name: body.name,
    company: body.company,
    phone: body.phone,
    message: body.message,
    createdAt: new Date().toISOString(),
  };

  leads.push(lead);
  await fs.writeFile(dbPath, JSON.stringify(leads, null, 2), 'utf8');

  return NextResponse.json({ ok: true, lead });
}
