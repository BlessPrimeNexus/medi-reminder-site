import { Icon } from './Icon';

export function ChatDemo() {
  return (
    <div className="chat" role="img" aria-label="Exemple de conversation avec Assistant Medi">
      <div className="chat-bar">
        <span className="chat-dot" />
        <b>Assistant Medi</b>
        <small>IA · informations générales</small>
      </div>
      <div className="chat-body">
        <div className="msg user d1">J&apos;ai oublié ma dose de ce matin. Que dois-je faire ?</div>
        <div className="msg bot d2">
          <p>Je ne peux pas décider à votre place, mais voici l&apos;essentiel :</p>
          <ul>
            <li>Regardez d&apos;abord la <b>notice</b> : elle indique en général quoi faire en cas d&apos;oubli.</li>
            <li>Ne <b>doublez pas</b> la prochaine dose sans l&apos;avis d&apos;un pharmacien ou d&apos;un médecin : cela dépend du médicament.</li>
            <li>Un doute ? Appelez votre pharmacien.</li>
          </ul>
          <small>Ceci ne remplace pas l&apos;avis d&apos;un médecin ou d&apos;un pharmacien.</small>
        </div>
        <div className="msg user d3">Ajoute Vitamine C, 1 comprimé à 14h</div>
        <div className="msg bot d4">
          <p>Voulez-vous que j&apos;ajoute ce médicament ?</p>
          <div className="chat-act">
            <b><Icon name="sparkles" size={15} /> Ajouter ce médicament ?</b>
            <span>Vitamine C · 1 comprimé</span>
            <span>14:00 · tous les jours</span>
            <div><i>Ajouter</i><u>Ignorer</u></div>
          </div>
          <small>Rien n&apos;est ajouté sans votre confirmation.</small>
        </div>
      </div>
    </div>
  );
}
