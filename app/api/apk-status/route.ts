import { NextResponse } from 'next/server';
import { apkTarget, siteConfig } from '@/lib/config';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  const origin = new URL(req.url).origin;
  const target = apkTarget(origin);
  let available = false;
  let sizeBytes: number | null = null;
  let updatedAt: string | null = null;

  if (target.external) {
    available = true; // lien externe configuré : on lui fait confiance
  } else {
    try {
      const r = await fetch(target.url, { method: 'HEAD', cache: 'no-store' });
      const type = r.headers.get('content-type') ?? '';
      available = r.ok && !type.includes('text/html');
      const len = r.headers.get('content-length');
      sizeBytes = len ? Number(len) : null;
      updatedAt = r.headers.get('last-modified');
    } catch {
      available = false;
    }
  }

  return NextResponse.json(
    { available, sizeBytes, updatedAt, version: siteConfig.version, sha256: siteConfig.sha256 || null },
    { headers: { 'Cache-Control': 'no-store' } },
  );
}
