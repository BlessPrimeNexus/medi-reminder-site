import { Logo } from './Logo';
import { Ecg } from './Ecg';
import { socials, company } from '@/lib/socials';

const links = [
  { href: socials.whatsapp, src: '/brand/whatsapp.png', label: 'WhatsApp' },
  { href: socials.instagram, src: '/brand/instagram.png', label: 'Instagram' },
  { href: socials.facebook, src: '/brand/facebook.png', label: 'Facebook' },
  { href: socials.telegram, src: '/brand/telegram.png', label: 'Telegram' },
  { href: socials.youtube, src: '/brand/youtube.png', label: 'YouTube' },
  { href: socials.email, src: '/brand/email.png', label: 'E-mail' },
];

export function Footer() {
  return (
    <footer className="ftr">
      <Ecg className="ftr-ecg" />
      <div className="container ftr-in">
        <div className="ftr-brand">
          <div className="brand"><Logo size={40} /><span>Medi Reminder</span></div>
          <p>Un rappel intelligent pour vos médicaments. Alarme qui sonne vraiment, hors ligne, sans compte.</p>
          <div className="ftr-mayelia">
            <img src="/brand/mayelia.png" alt="" width={36} height={36} />
            <span><b>{company.name}</b><small>{company.tagline}</small></span>
          </div>
        </div>
        <div className="ftr-col">
          <b>L&apos;application</b>
          <a href="/#pourquoi">Pourquoi Medi Reminder</a>
          <a href="/#fonctions">Fonctions</a>
          <a href="/#assistant">Assistant Medi (IA)</a>
          <a href="/#faq">Questions fréquentes</a>
        </div>
        <div className="ftr-col">
          <b>Télécharger</b>
          <a href="/#telechargement">Télécharger pour Android</a>
          <a href="/installer">Guide d&apos;installation</a>
          <a href="/confidentialite">Confidentialité</a>
        </div>
      </div>
      <div className="container">
        <div className="ftr-social" aria-label="Contacts et réseaux">
          {links.map((l) => (
            <a key={l.label} href={l.href} aria-label={l.label} title={l.label} target="_blank" rel="noopener noreferrer">
              <img src={l.src} alt="" width={44} height={44} />
            </a>
          ))}
        </div>
      </div>
      <div className="container ftr-legal">
        <p>
          Medi Reminder est un outil de rappel. Il ne pose aucun diagnostic, ne prescrit aucun médicament et ne propose aucune dose : il ne remplace ni un médecin ni un pharmacien.
          En cas d&apos;urgence, allez aux urgences ou appelez les secours.
        </p>
        <p>© {new Date().getFullYear()} Mayelia. Tous droits réservés.</p>
        <p>Medi Reminder est un produit Mayelia · Conçu par {company.developer} ({company.tag}).</p>
      </div>
    </footer>
  );
}
