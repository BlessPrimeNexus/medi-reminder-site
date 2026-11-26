import { Logo } from './Logo';
import { DownloadButton } from './DownloadButton';

export function Header() {
  return (
    <header className="hdr">
      <div className="container hdr-in">
        <a href="/" className="brand" aria-label="Medi Reminder, accueil">
          <Logo size={36} />
          <span>
            Medi Reminder
            <small>un produit Mayelia</small>
          </span>
        </a>
        <nav className="nav" aria-label="Navigation principale">
          <a href="/#pourquoi">Pourquoi</a>
          <a href="/#fonctions">Fonctions</a>
          <a href="/#assistant">Assistant IA</a>
          <a href="/#mayelia">Mayelia</a>
          <a href="/installer">Installer</a>
          <a href="/#faq">FAQ</a>
        </nav>
        <DownloadButton variant="white" label="Télécharger" />
      </div>
    </header>
  );
}
