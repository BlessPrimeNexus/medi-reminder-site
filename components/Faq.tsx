import { Icon } from './Icon';

const FAQ: { q: string; a: string }[] = [
  { q: "L'application est-elle sur le Play Store ?", a: "Pas pour le moment : vous la téléchargez directement depuis ce site (fichier APK), comme beaucoup d'applications. Le guide d'installation vous accompagne pas à pas." },
  { q: "Est-ce sûr d'installer un fichier APK ?", a: "Android affiche un avertissement pour toute application qui ne vient pas du Play Store : c'est normal. Téléchargez uniquement depuis ce site. L'application ne demande ni vos contacts, ni votre position, ni votre caméra : seulement les notifications, les alarmes, la vibration et l'accès à Internet (pour l'assistant IA et WhatsApp)." },
  { q: "Faut-il Internet pour que les alarmes sonnent ?", a: "Non. Les médicaments, les horaires et les alarmes fonctionnent entièrement sans Internet. Seul l'assistant IA a besoin d'une connexion." },
  { q: "Que deviennent mes données ?", a: "Elles restent sur votre téléphone. Il n'y a pas de compte à créer. Si vous posez une question à l'assistant IA, votre question (et, si vous l'autorisez, la liste de vos traitements) est envoyée au service d'IA pour produire la réponse. Vous pouvez refuser ce partage." },
  { q: "L'application remplace-t-elle mon médecin ou mon pharmacien ?", a: "Non, jamais. Medi Reminder ne pose aucun diagnostic, ne prescrit rien et ne change aucune dose. Elle vous rappelle ce que votre médecin ou votre pharmacien vous a indiqué." },
  { q: "Mon alarme ne sonne pas sur mon téléphone (Tecno, Infinix, Xiaomi, Samsung…) ?", a: "Certains téléphones bloquent les applications en arrière-plan pour économiser la batterie. Dans l'application, ouvrez Profil > Diagnostic des alarmes : il détecte les blocages et propose de les corriger en un geste, avec un test d'alarme." },
  { q: "L'assistant IA peut-il se tromper ?", a: "Oui, comme toute IA. Il donne des informations générales, l'indique clairement, vous oriente vers un professionnel pour toute décision personnelle et vers les urgences en cas de signe grave. Vérifiez toujours auprès d'un pharmacien ou d'un médecin." },
  { q: "Puis-je l'utiliser pour un parent âgé ?", a: "Oui. Installez-la sur son téléphone et ajoutez-vous comme proche aidant : si une prise est manquée, un message prérempli SMS ou WhatsApp vous permet de le prévenir." },
  { q: "Existe-t-il une version iPhone ?", a: "Pas pour le moment : Medi Reminder est disponible uniquement sur Android." },
  { q: "Comment faire une mise à jour ?", a: "Téléchargez la nouvelle version depuis ce site et installez-la par-dessus : vos données sont conservées. Pensez à faire une sauvegarde (Profil > Sauvegarde et restauration) avant de changer de téléphone." },
  { q: "En quelles langues ?", a: "Français pour le moment. L'anglais et le lingala sont prévus." },
];

export function Faq() {
  return (
    <div className="faq">
      {FAQ.map((f) => (
        <details key={f.q} className="faq-i">
          <summary>
            <span>{f.q}</span>
            <Icon name="chevron" size={20} className="faq-chev" />
          </summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
