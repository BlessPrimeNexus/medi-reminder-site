import type { Metadata } from 'next';
import { DownloadButton } from '@/components/DownloadButton';
import { Icon } from '@/components/Icon';

export const metadata: Metadata = {
  title: "Installer l'application Android",
  description: "Guide pas à pas pour installer Medi Reminder sur votre téléphone Android : téléchargement, autorisation, réglages des alarmes.",
  alternates: { canonical: '/installer' },
};

export default function Installer() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow"><Icon name="download" size={16} /> Guide d&apos;installation</span>
          <h1>Installer Medi Reminder</h1>
          <p>Trois étapes, environ deux minutes. Ensuite, pensez aux réglages qui garantissent que l&apos;alarme sonne vraiment.</p>
        </div>
      </section>
      <div className="container">
        <div className="doc">
          <div className="steps-big">
            <div className="stepcard"><b>1</b><div><h3>Téléchargez le fichier</h3><p>Touchez le bouton ci-dessous depuis votre téléphone. Le fichier MediReminder.apk (environ 9 Mo) se télécharge dans le dossier Téléchargements.</p><div style={{ marginTop: 14 }}><DownloadButton label="Télécharger le fichier APK" /></div></div></div>
            <div className="stepcard"><b>2</b><div><h3>Autorisez l&apos;installation</h3><p>Ouvrez le fichier. Si Android affiche « Installation bloquée », touchez <b>Paramètres</b>, activez <b>Autoriser depuis cette source</b>, puis revenez en arrière et touchez <b>Installer</b>. Cet avertissement est normal pour une application qui ne vient pas du Play Store.</p></div></div>
            <div className="stepcard"><b>3</b><div><h3>Ouvrez et autorisez les notifications</h3><p>Au premier lancement, acceptez les notifications : c&apos;est ce qui permet à l&apos;alarme de sonner. Puis ajoutez votre premier médicament.</p></div></div>
          </div>

          <h2>Réglages pour une alarme fiable</h2>
          <p>Certains téléphones (Tecno, Infinix, Xiaomi, Samsung, Oppo…) bloquent les applications en arrière-plan pour économiser la batterie. Dans Medi Reminder, ouvrez <b>Profil &gt; Diagnostic des alarmes</b> : l&apos;écran détecte ce qui bloque et propose de le corriger.</p>
          <ul>
            <li>Autorisez l&apos;application à fonctionner <b>sans restriction</b> de batterie.</li>
            <li>Activez le <b>démarrage automatique</b> si votre téléphone le propose.</li>
            <li>Montez le volume <b>« Alarme »</b> dans les réglages du son.</li>
            <li>Sur Android 14 et plus, autorisez les notifications <b>en plein écran</b>.</li>
          </ul>
          <div className="warn"><b>Test conseillé :</b> dans le Diagnostic, touchez « Alarme de test dans 20 secondes », verrouillez le téléphone, puis attendez.</div>

          <h2>Un problème ?</h2>
          <p>Consultez les <a href="/#faq">questions fréquentes</a>. Si le téléchargement ne fonctionne pas, revenez plus tard : le fichier est mis à jour régulièrement.</p>
        </div>
      </div>
    </>
  );
}
