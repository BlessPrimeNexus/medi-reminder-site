import { Logo } from './Logo';
import { Ecg } from './Ecg';

export function Footer() {
  return (
    <footer className="ftr">
      <Ecg className="ftr-ecg" />
      <div className="container ftr-in">
        <div className="ftr-brand">
          <div className="brand"><Logo size={40} /><span>Medi Reminder</span></div>
          <p>Un rappel intelligent pour vos médicaments. Alarme qui sonne vraiment, hors ligne, sans compte.</p>
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
      <div className="container ftr-legal">
        <p>
          Medi Reminder est un outil de rappel. Il ne pose aucun diagnostic, ne prescrit aucun médicament et ne propose aucune dose : il ne remplace ni un médecin ni un pharmacien.
          En cas d&apos;urgence, allez aux urgences ou appelez les secours.
        </p>
        <p>© {new Date().getFullYear()} Medi Reminder.</p>
      </div>
    </footer>
  );
}
