export function Ecg({ className = '' }: { className?: string }) {
  // Tracé d'électrocardiogramme décoratif (même motif que dans l'application).
  let d = 'M0 30';
  for (let x = 10; x < 1400; x += 130) {
    d += ` L${x + 20} 30 L${x + 28} 24 L${x + 34} 34 L${x + 42} 6 L${x + 52} 48 L${x + 60} 30 L${x + 78} 30 L${x + 84} 22 L${x + 92} 30`;
  }
  return (
    <svg className={className} viewBox="0 0 1400 60" preserveAspectRatio="none" aria-hidden="true">
      <path d={d} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
