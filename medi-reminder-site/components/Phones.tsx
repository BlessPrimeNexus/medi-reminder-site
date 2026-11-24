import type { ReactNode } from 'react';
import { Icon } from './Icon';
import { Ecg } from './Ecg';
import { Logo } from './Logo';

/** Cadre de téléphone : reproduit à l'identique les écrans de l'application (taille logique 272 × 572). */
export function Phone({ children, className = '', label }: { children: ReactNode; className?: string; label?: string }) {
  return (
    <div className={`phone-wrap ${className}`} role="img" aria-label={label}>
      <div className="phone">
        <div className="phone-notch" />
        <div className="phone-screen">{children}</div>
      </div>
    </div>
  );
}

function Status({ time = '08:41', light = true }: { time?: string; light?: boolean }) {
  return (
    <div className={`ph-status ${light ? 'light' : ''}`}>
      <span>{time}</span>
      <span className="ph-bars"><i /><i /><i /><i /></span>
    </div>
  );
}

function Ring({ v, size = 74, label, sub }: { v: number; size?: number; label: string; sub?: string }) {
  const r = (size - 10) / 2;
  const c = 2 * Math.PI * r;
  return (
    <svg className="ph-ring" width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,.28)" strokeWidth="8" />
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#fff" strokeWidth="8" strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - v)} transform={`rotate(-90 ${size / 2} ${size / 2})`} />
      <text x="50%" y={sub ? '47%' : '54%'} textAnchor="middle" fill="#fff" fontSize="17" fontWeight="800">{label}</text>
      {sub && <text x="50%" y="66%" textAnchor="middle" fill="rgba(255,255,255,.75)" fontSize="9">{sub}</text>}
    </svg>
  );
}

function Nav({ active = 0 }: { active?: number }) {
  const items: ('pill' | 'calendar' | 'history' | 'user')[] = ['pill', 'calendar', 'history', 'user'];
  const labels = ["Aujourd'hui", 'Planning', 'Historique', 'Profil'];
  const slot = (i: number) => (
    <div key={i} className={`ph-nav-i ${active === i ? 'on' : ''}`}>
      <span><Icon name={items[i]} size={17} /></span>
      <small>{labels[i]}</small>
    </div>
  );
  return (
    <div className="ph-nav">
      {slot(0)}{slot(1)}
      <div className="ph-nav-plus"><Icon name="plus" size={22} strokeWidth={2.6} /></div>
      {slot(2)}{slot(3)}
    </div>
  );
}

function Dose({ time, color, name, sub, state, actions = false }: { time: string; color: 'y' | 'p' | 'm'; name: string; sub: string; state: 'taken' | 'due' | 'soon'; actions?: boolean }) {
  const pill = state === 'taken' ? ['Pris', 'ok'] : state === 'due' ? ["C'est l'heure", 'warn'] : ['À venir', 'idle'];
  return (
    <div className="ph-tl">
      <div className="ph-tl-time">{time}</div>
      <div className={`ph-tl-dot ${state}`} />
      <div className={`ph-card ${color} ${state === 'due' ? 'hl' : ''}`}>
        <div className="ph-card-top">
          <div className="ph-card-ico"><Icon name="pill" size={17} /></div>
          <div className="ph-card-t"><b>{name}</b><small>{sub}</small></div>
          <span className={`ph-pill ${pill[1]}`}>{pill[0]}</span>
        </div>
        {actions && (
          <div className="ph-card-act">
            <span className="no"><Icon name="x" size={12} strokeWidth={3} /> Manqué</span>
            <span className="yes"><Icon name="check" size={12} strokeWidth={3} /> Pris</span>
          </div>
        )}
      </div>
    </div>
  );
}

export function TodayScreen() {
  return (
    <div className="ph ph-today">
      <div className="ph-head">
        <Status />
        <div className="ph-row">
          <div className="ph-avatar">B</div>
          <div className="ph-grow"><b>Bonjour, Blessing</b><small>Jeudi 20 novembre</small></div>
          <div className="ph-streak"><Icon name="flame" size={13} /> 5 j</div>
        </div>
        <div className="ph-row ph-ringrow">
          <Ring v={0.34} label="1/3" sub="prises" />
          <div className="ph-next"><Icon name="alarm" size={16} /><span>Prochaine prise : <b>Paracétamol</b> à 08:43 (dans 2 min)</span></div>
        </div>
        <Ecg className="ph-ecg" />
      </div>
      <div className="ph-body">
        <div className="ph-ai"><span className="ph-ai-ico"><Icon name="sparkles" size={16} /></span><div><b>Assistant Medi</b><small>Posez vos questions sur vos médicaments</small></div></div>
        <div className="ph-title">Vos médicaments pour <em>aujourd&apos;hui</em></div>
        <Dose time="08:43" color="y" name="PARACÉTAMOL" sub="500 mg · 1 comprimé" state="due" actions />
        <Dose time="14:00" color="p" name="VITAMINE C" sub="1 comprimé · après le repas" state="soon" />
      </div>
      <Nav active={0} />
    </div>
  );
}

export function AlarmScreen() {
  return (
    <div className="ph ph-alarm">
      <Status light />
      <div className="ph-al-ring"><i /><i /><div className="ph-al-ico"><Icon name="alarm" size={40} strokeWidth={2.2} /></div></div>
      <div className="ph-al-time">08:43</div>
      <div className="ph-al-sub">C&apos;est l&apos;heure de votre médicament</div>
      <div className="ph-al-card">
        <div className="ph-card-ico big"><Icon name="pill" size={22} /></div>
        <div><b>PARACÉTAMOL</b><small>500 mg · 1 comprimé</small><em>Après le repas</em></div>
      </div>
      <div className="ph-al-btn main"><Icon name="check" size={16} strokeWidth={3} /> J&apos;ai pris mon médicament</div>
      <div className="ph-al-btn ghost">Reporter de 10 minutes</div>
      <div className="ph-al-link">Je ne le prendrai pas</div>
    </div>
  );
}

export function AssistantScreen() {
  return (
    <div className="ph ph-ai-s">
      <div className="ph-glow" />
      <Status light time="12:26" />
      <div className="ph-ai-top">
        <span className="glass"><Icon name="arrow" size={15} /></span>
        <span className="glass pillw"><Logo size={20} /> Assistant Medi</span>
        <span className="glass"><Icon name="chat" size={15} /></span>
      </div>
      <div className="ph-ai-hello">Bonjour Blessing,</div>
      <div className="ph-ai-h">Que voulez-vous savoir aujourd&apos;hui ?</div>
      <div className="ph-ai-card"><b>Parlez à votre assistant</b><small>Posez votre question sur un médicament ou sur l&apos;application : réponses claires, sans remplacer votre médecin.</small></div>
      <div className="ph-ai-chips"><span>Que faire si j&apos;oublie une prise ?</span><span>Pourquoi mon alarme…</span></div>
      <div className="ph-ai-comp">
        <div className="ph-ai-in">Posez votre question…</div>
        <div className="ph-ai-tools"><span><Icon name="plus" size={14} /></span><span><Icon name="pill" size={14} /></span><span><Icon name="sparkles" size={14} /></span><i /><em><Icon name="arrow" size={15} strokeWidth={2.6} /></em></div>
      </div>
    </div>
  );
}

export function PlanningScreen() {
  const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
  return (
    <div className="ph ph-plan">
      <div className="ph-head">
        <Status />
        <div className="ph-h1">Programmer la <em>prise</em></div>
        <div className="ph-week">
          {days.map((d, i) => (
            <div key={d}><small>{d}</small><span className={i === 3 ? 'sel' : i === 4 ? 'today' : ''}>{17 + i}</span></div>
          ))}
        </div>
        <Ecg className="ph-ecg" />
      </div>
      <div className="ph-body">
        <div className="ph-date">Jeudi 20 novembre</div>
        <div className="ph-card y plain"><div className="ph-card-top"><span className="ph-sun"><Icon name="alarm" size={13} /></span><b>Matin · 08:43</b><span className="ph-pill ok">Pris</span></div><b className="nm">PARACÉTAMOL 500 mg</b><div className="ph-card-act two"><span className="no">Modifier</span><span className="yes">Annuler</span></div></div>
        <div className="ph-card p plain"><div className="ph-card-top"><span className="ph-sun"><Icon name="alarm" size={13} /></span><b>Après-midi · 14:00</b></div><b className="nm">VITAMINE C 1 comprimé</b><div className="ph-card-act two"><span className="no">Modifier</span><span className="yes">Terminé</span></div></div>
        <div className="ph-add"><span><Icon name="plus" size={16} /></span>Ajouter un médicament</div>
      </div>
      <Nav active={1} />
    </div>
  );
}

export function HistoryScreen() {
  const cells = [2, 2, 2, 1, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3];
  return (
    <div className="ph ph-hist">
      <div className="ph-head">
        <Status />
        <div className="ph-h1">Historique des <em>traitements</em></div>
        <div className="ph-row ph-ringrow">
          <Ring v={0.86} size={70} label="86%" />
          <div className="ph-next flat">de prises effectuées sur les 7 derniers jours</div>
        </div>
        <Ecg className="ph-ecg" />
      </div>
      <div className="ph-body">
        <div className="ph-hbox">
          <div className="ph-hrow"><span className="fl"><Icon name="flame" size={16} /></span><b>Série en cours : 5 jours</b><small>Record : 12</small></div>
          <div className="ph-medals"><i className="on b" /><i className="on s" /><i className="g" /><i /></div>
          <small className="ph-cap">Les 4 dernières semaines</small>
          <div className="ph-heat">{cells.map((c, i) => <i key={i} className={`c${c}`}>{i + 1}</i>)}</div>
        </div>
      </div>
      <Nav active={2} />
    </div>
  );
}
