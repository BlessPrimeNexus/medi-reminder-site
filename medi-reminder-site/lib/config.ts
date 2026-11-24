export const siteConfig = {
  name: 'Medi Reminder',
  tagline: 'Votre médicament, à la bonne heure. Chaque jour.',
  description:
    "Medi Reminder est une application Android qui fait sonner une vraie alarme à l'heure de chaque médicament, même téléphone verrouillé et sans Internet. En français, sans compte, pensée pour la vie quotidienne en RDC.",
  version: process.env.APK_VERSION ?? '0.2.0',
  sha256: process.env.APK_SHA256 ?? '',
  apkPath: '/downloads/MediReminder.apk',
  minAndroid: 'Android 6.0 ou plus récent',
};

export function baseUrl(): string {
  const prod = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (prod) return `https://${prod}`;
  return 'http://localhost:3000';
}

/** Adresse du fichier : lien externe (APK_URL, ex. Release GitHub) ou fichier déposé dans /public/downloads. */
export function apkTarget(origin: string): { url: string; external: boolean } {
  const ext = process.env.APK_URL;
  if (ext && /^https?:\/\//.test(ext)) return { url: ext, external: true };
  return { url: origin + siteConfig.apkPath, external: false };
}
