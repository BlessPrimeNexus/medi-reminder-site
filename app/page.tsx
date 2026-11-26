import { DownloadButton } from '@/components/DownloadButton';
import { Phone, TodayScreen, AlarmScreen, AssistantScreen } from '@/components/Phones';
import { Showcase } from '@/components/Showcase';
import { ChatDemo } from '@/components/ChatDemo';
import { Faq } from '@/components/Faq';
import { QrCode } from '@/components/QrCode';
import { Reveal } from '@/components/Reveal';
import { Icon } from '@/components/Icon';
import { Ecg } from '@/components/Ecg';
import { siteConfig } from '@/lib/config';
import { Logo } from '@/components/Logo';
import { company } from '@/lib/socials';

export default function Home() {
  return (
    <>
      {/* ---------- HÉRO ---------- */}
      <section className="hero">
        <div className="container hero-grid">
          <Reveal>
            <span className="eyebrow"><Icon name="bell" size={16} /> Un produit Mayelia · Android gratuit</span>
            <h1>Ne ratez plus <span>aucune prise</span> de médicament.</h1>
            <p className="lead">
              Medi Reminder fait sonner une vraie alarme à l&apos;heure de chaque traitement, même téléphone verrouillé et sans Internet.
              Simple, en français, pensée pour la vie quotidienne en RDC.
            </p>
            <div className="hero-cta">
              <DownloadButton variant="white" big label="Télécharger gratuitement" />
              <a className="btn ghost" href="#pourquoi">Pourquoi l&apos;utiliser ?</a>
            </div>
            <div className="hero-proof">
              <span><Icon name="shield" size={17} /> Sans compte</span>
              <span><Icon name="wifioff" size={17} /> Fonctionne hors ligne</span>
              <span><Icon name="lock" size={17} /> Données sur votre téléphone</span>
            </div>
          </Reveal>
          <Reveal delay={150} className="hero-phones">
            <Phone className="pw-a" label="Écran Aujourd'hui"><TodayScreen /></Phone>
            <Phone className="pw-b" label="Écran Alarme"><AlarmScreen /></Phone>
            <Phone className="pw-c" label="Assistant Medi"><AssistantScreen /></Phone>
          </Reveal>
        </div>
      </section>

      {/* ---------- CHIFFRES ---------- */}
      <section className="sec soft">
        <div className="container">
          <Reveal className="sec-head">
            <span className="kicker">Le problème</span>
            <h2>Oublier une prise, c&apos;est fréquent. Et ça coûte cher.</h2>
            <p>Un traitement qui n&apos;est pas suivi ne fait pas son effet, même avec les meilleurs médicaments.</p>
          </Reveal>
          <div className="stats">
            <Reveal><div className="stat"><b>5 min</b><span>de sonnerie continue à l&apos;heure de chaque prise, même téléphone verrouillé</span></div></Reveal>
            <Reveal delay={120}><div className="stat"><b>0</b><span>connexion Internet nécessaire pour que les alarmes sonnent</span></div></Reveal>
            <Reveal delay={240}><div className="stat"><b>0 CDF</b><span>pour utiliser Medi Reminder : pas d&apos;abonnement, pas de publicité, pas de compte</span></div></Reveal>
          </div>
                  </div>
      </section>

      {/* ---------- POURQUOI (RDC) ---------- */}
      <section className="sec" id="pourquoi">
        <div className="container why">
          <Reveal>
            <span className="kicker">Pourquoi Medi Reminder</span>
            <h2>Un rappel qui marche là où vous vivez.</h2>
            <p style={{ color: 'var(--muted)', fontSize: 18 }}>
              Pas besoin de réseau, pas besoin de compte, pas besoin d&apos;un téléphone haut de gamme : l&apos;application est pensée pour un usage quotidien simple, avec ou sans connexion.
            </p>
            <ul>
              <li><span><Icon name="wifioff" size={18} /></span><div><b>Sans Internet</b><small>Les alarmes sonnent même en coupure. Seul l&apos;assistant IA a besoin d&apos;une connexion.</small></div></li>
              <li><span><Icon name="language" size={18} /></span><div><b>En français</b><small>Des mots simples. L&apos;anglais et le lingala sont prévus.</small></div></li>
              <li><span><Icon name="heart" size={18} /></span><div><b>Un proche aidant</b><small>Un parent, un conjoint ou un enfant est prévenu par SMS ou WhatsApp si une prise est manquée.</small></div></li>
              <li><span><Icon name="package" size={18} /></span><div><b>Votre stock sous contrôle</b><small>Une alerte avant la fin de la boîte, pour ne pas se retrouver sans rien.</small></div></li>
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <div className="why-art">
              <h3>Pour qui ?</h3>
              <p>Pour vous, pour un parent qui oublie, pour un enfant qui suit un traitement, pour une personne qui vit avec une maladie chronique.</p>
              <div className="why-chips">
                <span>Hypertension</span><span>Diabète</span><span>Paludisme</span><span>Antirétroviraux</span><span>Asthme</span><span>Traitements prolongés</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- VITRINE ---------- */}
      <section className="sec soft" id="fonctions">
        <div className="container">
          <Reveal className="sec-head">
            <span className="kicker">L&apos;application</span>
            <h2>Voyez-la de vos propres yeux.</h2>
            <p>Cliquez sur chaque onglet : voici les vrais écrans de Medi Reminder.</p>
          </Reveal>
          <Reveal><Showcase /></Reveal>
        </div>
      </section>

      {/* ---------- BÉNÉFICES ---------- */}
      <section className="sec">
        <div className="container">
          <Reveal className="sec-head">
            <span className="kicker">Pourquoi elle aide</span>
            <h2>Ce qu&apos;elle change au quotidien</h2>
          </Reveal>
          <div className="grid3">
            <Reveal><div className="card"><div className="ico g"><Icon name="alarm" size={26} /></div><h3>Une alarme qui s&apos;entend</h3><p>Le son retentit sur le volume « Alarme » pendant 5 minutes. Vous ne pouvez pas l&apos;ignorer en faisant autre chose.</p></div></Reveal>
            <Reveal delay={120}><div className="card"><div className="ico y"><Icon name="flame" size={26} /></div><h3>La motivation d&apos;une série</h3><p>Chaque jour sans oubli compte. Médailles à 3, 7, 14 et 30 jours et carte de chaleur des 4 dernières semaines.</p></div></Reveal>
            <Reveal delay={240}><div className="card"><div className="ico m"><Icon name="file" size={26} /></div><h3>Un rapport pour le médecin</h3><p>Votre taux de prises sur 30 jours, prêt à envoyer par WhatsApp lors de la consultation.</p></div></Reveal>
            <Reveal><div className="card"><div className="ico p"><Icon name="activity" size={26} /></div><h3>Vos mesures, en courbe</h3><p>Tension, glycémie, poids, température, pouls : notez-les et suivez leur évolution. L&apos;application ne les interprète pas.</p></div></Reveal>
            <Reveal delay={120}><div className="card"><div className="ico g"><Icon name="calendar" size={26} /></div><h3>Vos rendez-vous</h3><p>Consultations, analyses, renouvellements d&apos;ordonnance : un rappel la veille et deux heures avant.</p></div></Reveal>
            <Reveal delay={240}><div className="card"><div className="ico y"><Icon name="package" size={26} /></div><h3>Sauvegarde facile</h3><p>Changez de téléphone sans rien perdre : copiez une sauvegarde et restaurez-la en un instant.</p></div></Reveal>
          </div>
        </div>
      </section>

      {/* ---------- ASSISTANT ---------- */}
      <section className="sec soft" id="assistant">
        <div className="container chat-wrap">
          <Reveal>
            <ChatDemo />
          </Reveal>
          <Reveal delay={120} className="chat-txt">
            <span className="kicker">Assistant Medi</span>
            <h3>Une question sur un médicament ? Posez-la.</h3>
            <p>Un assistant intelligent répond dans vos mots, en langage simple, à toute question sur vos traitements ou sur l&apos;application.</p>
            <ul>
              <li><Icon name="check" size={18} strokeWidth={3} /> Informations générales sur vos médicaments</li>
              <li><Icon name="check" size={18} strokeWidth={3} /> Aide pour utiliser l&apos;application</li>
              <li><Icon name="check" size={18} strokeWidth={3} /> Il vous oriente vers votre médecin ou pharmacien pour toute décision</li>
              <li><Icon name="check" size={18} strokeWidth={3} /> Il ne pose jamais de diagnostic et ne prescrit rien</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ---------- TÉLÉCHARGEMENT ---------- */}
      <section className="sec" id="telechargement">
        <div className="container">
          <Reveal>
            <div className="dl">
              <div className="dl-grid">
                <div>
                  <h2>Installez-la en deux minutes.</h2>
                  <p>Téléchargez le fichier depuis ce site et installez-le sur votre téléphone Android. Aucun compte à créer.</p>
                  <div className="dl-meta">
                    <span><Icon name="shield" size={16} /> Gratuite</span>
                    <span><Icon name="phone" size={16} /> {siteConfig.minAndroid}</span>
                    <span><Icon name="package" size={16} /> Version {siteConfig.version}</span>
                  </div>
                  <DownloadButton variant="white" big label="Télécharger l'application" />
                  <div className="steps">
                    <div className="step"><b>1</b><span>Touchez « Télécharger » ci-dessus.</span></div>
                    <div className="step"><b>2</b><span>Ouvrez le fichier et autorisez l&apos;installation si Android le demande.</span></div>
                    <div className="step"><b>3</b><span>Autorisez les notifications : c&apos;est ce qui fait sonner les alarmes.</span></div>
                  </div>
                </div>
                <div className="dl-qr">
                  <QrCode />
                  <p>Depuis un ordinateur ? Scannez ce QR code avec votre téléphone.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="sec soft" id="faq">
        <div className="container">
          <Reveal className="sec-head">
            <span className="kicker">Questions fréquentes</span>
            <h2>Vous vous posez sûrement ces questions.</h2>
          </Reveal>
          <Reveal><Faq /></Reveal>
        </div>
      </section>

      {/* ---------- MAYELIA ---------- */}
      <section className="sec" id="mayelia">
        <div className="container">
          <Reveal className="sec-head">
            <span className="kicker">Mayelia</span>
            <h2>Une bibliothèque d&apos;applications utiles, simples et soignées.</h2>
            <p>Mayelia conçoit une vingtaine d&apos;applications, publiées ensemble comme une même bibliothèque. Medi Reminder en est le premier produit.</p>
          </Reveal>
          <div className="lib">
            <Reveal>
              <div className="lib-card">
                <div className="lib-logo"><Logo size={64} /></div>
                <h3>Medi Reminder</h3>
                <p>Rappels de médicaments avec alarme. Cette application.</p>
                <span className="lib-tag">Disponible</span>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="lib-card">
                <div className="lib-logo"><img src="/brand/statuscraft.png" alt="Logo STATUSCRAFT" width={64} height={64} /></div>
                <h3>STATUSCRAFT</h3>
                <p>Creative Status Studio · Un produit Mayelia.</p>
                <span className="lib-tag">Version 1.0.0</span>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div className="lib-card lib-card-soon">
                <div className="lib-logo"><img src="/brand/mayelia.png" alt="Logo Mayelia" width={64} height={64} /></div>
                <h3>Et bien d&apos;autres</h3>
                <p>Une vingtaine d&apos;applications prévues, publiées sous la marque Mayelia.</p>
                <span className="lib-tag">À venir</span>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <div className="dev-card">
              <div className="dev-avatar">B</div>
              <div>
                <b>{company.developer}</b>
                <small>{company.tag} · Créateur de Mayelia · Développeur</small>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- APPEL FINAL ---------- */}
      <section className="sec">
        <div className="container">
          <Reveal>
            <div className="dl" style={{ textAlign: 'center' }}>
              <h2>Une prise oubliée peut tout changer.</h2>
              <p style={{ margin: '0 auto 30px', maxWidth: 640 }}>Installez Medi Reminder maintenant et laissez l&apos;alarme faire le reste.</p>
              <div style={{ display: 'flex', justifyContent: 'center' }}><DownloadButton variant="white" big label="Télécharger gratuitement" /></div>
              <Ecg className="final-ecg" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
