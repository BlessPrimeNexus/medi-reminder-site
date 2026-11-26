'use client';
import { useState, type ReactNode } from 'react';
import { Icon, type IconName } from './Icon';
import { Phone, TodayScreen, AlarmScreen, PlanningScreen, HistoryScreen, AssistantScreen } from './Phones';

type Tab = { id: string; icon: IconName; label: string; title: string; text: string; points: string[]; screen: ReactNode };

const TABS: Tab[] = [
  {
    id: 'today', icon: 'pill', label: "Aujourd'hui", title: "Votre journée de prises, en un coup d'œil",
    text: "Chaque médicament de la journée apparaît sur une frise claire, avec des couleurs selon le moment : jaune le matin, rose l'après-midi, menthe le soir.",
    points: ['Boutons « Pris » et « Manqué » en un appui', 'Anneau de progression et prochaine prise annoncée', 'Rappel quand il reste environ 3 jours de stock'],
    screen: <TodayScreen />,
  },
  {
    id: 'alarm', icon: 'alarm', label: 'Alarme', title: 'Une vraie alarme, pas une notification discrète',
    text: "À l'heure de la prise, l'écran d'alarme s'ouvre, même téléphone verrouillé. Le son retentit en continu jusqu'à 5 minutes, sur le volume « Alarme » du téléphone.",
    points: ['Pris, Reporter de 10 minutes ou Je ne le prendrai pas', 'Vibration et écran maintenu allumé', 'Prévenir un proche par SMS ou WhatsApp si une prise est manquée'],
    screen: <AlarmScreen />,
  },
  {
    id: 'planning', icon: 'calendar', label: 'Planning', title: 'Planifiez la semaine sans effort',
    text: "Plusieurs heures par jour, jours précis, durée limitée avec date de fin, moment du repas : chaque traitement se règle comme votre médecin vous l'a indiqué.",
    points: ['Aperçu en direct de la carte pendant la saisie', 'Rendez-vous médicaux avec rappel la veille et 2 h avant', 'Journal de tension, glycémie, poids, température, pouls'],
    screen: <PlanningScreen />,
  },
  {
    id: 'history', icon: 'history', label: 'Historique', title: 'Gardez le rythme, preuves à l\'appui',
    text: "Taux de prises sur 7 jours, série de jours sans oubli, médailles et carte de chaleur des 4 dernières semaines : le suivi motive et rassure.",
    points: ['Rapport de 30 jours à envoyer à votre médecin par WhatsApp', 'Carte santé : groupe sanguin, allergies, proche aidant', 'Sauvegarde pour changer de téléphone sans rien perdre'],
    screen: <HistoryScreen />,
  },
  {
    id: 'assistant', icon: 'sparkles', label: 'Assistant IA', title: 'Une question ? Demandez à Assistant Medi',
    text: "Écrivez dans vos mots : l'assistant explique l'application et donne des informations générales sur vos médicaments, sans jamais remplacer un professionnel.",
    points: ['Informations générales, jamais de diagnostic ni de prescription', 'Peut proposer d\'ajouter un médicament, toujours avec votre confirmation', 'Vous choisissez de partager ou non vos traitements'],
    screen: <AssistantScreen />,
  },
];

export function Showcase() {
  const [i, setI] = useState(0);
  const t = TABS[i];
  return (
    <div className="show">
      <div className="show-tabs" role="tablist" aria-label="Aperçu de l'application">
        {TABS.map((x, k) => (
          <button key={x.id} role="tab" aria-selected={k === i} className={`show-tab ${k === i ? 'on' : ''}`} onClick={() => setI(k)}>
            <Icon name={x.icon} size={18} />
            <span>{x.label}</span>
          </button>
        ))}
      </div>
      <div className="show-main">
        <div className="show-text" key={t.id}>
          <h3>{t.title}</h3>
          <p>{t.text}</p>
          <ul>
            {t.points.map((p) => (
              <li key={p}><span><Icon name="check" size={14} strokeWidth={3} /></span>{p}</li>
            ))}
          </ul>
        </div>
        <div className="show-phone" key={`p-${t.id}`}>
          <Phone label={`Écran ${t.label} de l'application`}>{t.screen}</Phone>
        </div>
      </div>
    </div>
  );
}
