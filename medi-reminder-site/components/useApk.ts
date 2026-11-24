'use client';
import { useEffect, useState } from 'react';

export type ApkStatus = { available: boolean; sizeBytes: number | null; updatedAt: string | null; version: string; sha256: string | null };

export function useApk(): ApkStatus | null {
  const [s, setS] = useState<ApkStatus | null>(null);
  useEffect(() => {
    let alive = true;
    fetch('/api/apk-status', { cache: 'no-store' })
      .then((r) => r.json())
      .then((j: ApkStatus) => alive && setS(j))
      .catch(() => alive && setS({ available: false, sizeBytes: null, updatedAt: null, version: '', sha256: null }));
    return () => { alive = false; };
  }, []);
  return s;
}

export function fmtSize(b: number | null): string {
  if (!b) return '';
  return `${(b / 1048576).toFixed(1).replace('.', ',')} Mo`;
}
