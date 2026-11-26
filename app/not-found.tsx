import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="sec" style={{ textAlign: 'center' }}>
      <div className="container">
        <h1 style={{ fontSize: 48 }}>Page introuvable</h1>
        <p style={{ color: 'var(--muted)', margin: '16px 0 28px' }}>Cette page n&apos;existe pas. Retournez à l&apos;accueil pour télécharger l&apos;application.</p>
        <Link className="btn green" href="/">Retour à l&apos;accueil</Link>
      </div>
    </section>
  );
}
