import type { Metadata } from 'next';
import { Icon } from '@/components/Icon';

export const metadata: Metadata = {
  title: 'Confidentialité',
  description: 'Comment Medi Reminder protège vos données de santé : tout reste sur votre téléphone.',
  alternates: { canonical: '/confidentialite' },
};

export default function Confidentialite() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow"><Icon name="lock" size={16} /> Vos données</span>
          <h1>Confidentialité</h1>
          <p>Vos informations de santé vous appartiennent. Voici exactement ce qui est stocké, et où.</p>
        </div>
      </section>
      <div className="container">
        <div className="doc">
          <h2>Ce qui reste sur votre téléphone</h2>
          <ul>
            <li>Vos médicaments, horaires, stock et historique de prises.</li>
            <li>Vos rendez-vous, vos mesures (tension, glycémie…), votre carte santé et votre proche aidant.</li>
            <li>Votre prénom et la conversation avec l&apos;assistant.</li>
          </ul>
          <p>Aucun compte n&apos;est créé. Aucun serveur de Medi Reminder ne reçoit ces informations.</p>

          <h2>Ce qui sort de votre téléphone</h2>
          <p>Uniquement si vous utilisez l&apos;assistant IA : votre question est envoyée à un service d&apos;intelligence artificielle pour produire la réponse. Si vous l&apos;autorisez, la liste de vos traitements et vos allergies sont envoyées avec. Vous pouvez refuser ce partage à tout moment dans l&apos;application.</p>
          <p>Les messages WhatsApp et SMS (rapport, alerte au proche aidant) ne sont envoyés que lorsque vous les validez vous-même.</p>

          <h2>Autorisations demandées</h2>
          <ul>
            <li><b>Notifications et alarmes</b> : pour faire sonner les rappels.</li>
            <li><b>Vibration et maintien de l&apos;écran allumé</b> : pour que l&apos;alarme soit remarquée.</li>
            <li><b>Internet</b> : uniquement pour l&apos;assistant IA.</li>
          </ul>
          <p>L&apos;application ne demande ni vos contacts, ni votre position, ni votre caméra.</p>

          <h2>Supprimer vos données</h2>
          <p>Dans l&apos;application : <b>Profil &gt; Supprimer toutes mes données</b>. Désinstaller l&apos;application efface également tout.</p>

          <div className="warn"><b>Données de santé :</b> une sauvegarde (Profil &gt; Sauvegarde et restauration) contient vos informations de santé. Ne la partagez qu&apos;avec une personne de confiance.</div>

          <h2>Ce que l&apos;application ne fait pas</h2>
          <ul>
            <li>Elle ne pose aucun diagnostic et ne prescrit aucun médicament.</li>
            <li>Elle ne vend ni ne transmet vos données à des tiers.</li>
            <li>Elle n&apos;affiche aucune publicité.</li>
          </ul>

          <p><small>Dernière mise à jour : novembre 2026. Ce texte doit être relu par un conseiller juridique avant publication, notamment au regard de la réglementation applicable en République démocratique du Congo.</small></p>
        </div>
      </div>
    </>
  );
}
