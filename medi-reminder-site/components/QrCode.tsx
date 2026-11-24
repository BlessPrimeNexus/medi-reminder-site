'use client';
import { useEffect, useState } from 'react';

/** QR code vers la page de téléchargement, à scanner depuis un ordinateur avec le téléphone. */
export function QrCode({ path = '/download', size = 168 }: { path?: string; size?: number }) {
  const [svg, setSvg] = useState('');
  useEffect(() => {
    let alive = true;
    import('qrcode')
      .then((Q) => Q.toString(window.location.origin + path, { type: 'svg', margin: 1, color: { dark: '#0A6B54', light: '#00000000' } }))
      .then((s) => alive && setSvg(s))
      .catch(() => alive && setSvg(''));
    return () => { alive = false; };
  }, [path]);
  if (!svg) return <div className="qr qr-empty" style={{ width: size, height: size }} aria-hidden="true" />;
  return <div className="qr" style={{ width: size, height: size }} role="img" aria-label="QR code de téléchargement" dangerouslySetInnerHTML={{ __html: svg }} />;
}
