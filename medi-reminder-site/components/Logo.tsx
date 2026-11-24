export function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 108 108" role="img" aria-label="Medi Reminder">
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3DD0A5" />
          <stop offset="1" stopColor="#0A8A6C" />
        </linearGradient>
      </defs>
      <rect width="108" height="108" rx="24" fill="url(#lg)" />
      <g transform="rotate(-45 48 60)">
        <path d="M48,48H37A12,12 0 0 0 37,72H48Z" fill="#fff" />
        <path d="M48,48H59A12,12 0 0 1 59,72H48Z" fill="#B8F5E0" />
      </g>
      <rect x="38.7" y="62.8" width="3" height="10" fill="#0E9F7E" />
      <rect x="35.2" y="66.3" width="10" height="3" fill="#0E9F7E" />
      <circle cx="72" cy="36" r="16.5" fill="#0A8A6C" />
      <circle cx="72" cy="36" r="14" fill="#fff" />
      <rect x="71" y="27" width="2.4" height="10" fill="#0E9F7E" />
      <rect x="72" y="34.8" width="6.5" height="2.4" fill="#0E9F7E" />
    </svg>
  );
}
