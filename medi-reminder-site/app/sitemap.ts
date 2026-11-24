import type { MetadataRoute } from 'next';
import { baseUrl } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const b = baseUrl();
  const now = new Date();
  return [
    { url: b, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${b}/installer`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${b}/confidentialite`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
