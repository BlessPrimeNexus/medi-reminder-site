'use client';
import { Icon } from './Icon';
import { fmtSize, useApk } from './useApk';

export function DownloadButton({ variant = 'white', big = false, label = "Télécharger l'application" }: { variant?: 'white' | 'green'; big?: boolean; label?: string }) {
  const apk = useApk();
  const unavailable = apk !== null && !apk.available;
  if (unavailable) {
    return (
      <a href="#telechargement" className={`btn ${variant} ${big ? 'big' : ''} soon`}>
        <Icon name="download" size={big ? 22 : 18} />
        <span>Bientôt disponible</span>
      </a>
    );
  }
  const size = apk?.sizeBytes ? fmtSize(apk.sizeBytes) : '';
  return (
    <a href="/download" rel="nofollow" className={`btn ${variant} ${big ? 'big' : ''}`}>
      <Icon name="download" size={big ? 22 : 18} />
      <span>{label}</span>
      {size && big && <small>APK · {size}</small>}
    </a>
  );
}
