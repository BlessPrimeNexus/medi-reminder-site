import { NextResponse } from 'next/server';
import { apkTarget } from '@/lib/config';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const target = apkTarget(url.origin);

  if (!target.external) {
    let ok = false;
    try {
      const r = await fetch(target.url, { method: 'HEAD', cache: 'no-store' });
      ok = r.ok && !(r.headers.get('content-type') ?? '').includes('text/html');
    } catch {
      ok = false;
    }
    if (!ok) return NextResponse.redirect(new URL('/?apk=indisponible#telechargement', url), 302);
  }
  return NextResponse.redirect(target.url, 302);
}
