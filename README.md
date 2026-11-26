# Medi Reminder : site de présentation et de téléchargement

Next.js (App Router) + TypeScript. Le design reprend les couleurs, les formes et les écrans de l'application Android.

## Lancer en local
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # vérification de production
```

## Mettre le fichier de l'application en ligne
Deux options, à choisir dans les variables d'environnement Vercel :

1. **Fichier dans le projet** : déposez l'APK dans `public/downloads/MediReminder.apk` (nom exact). Limite : Vercel refuse les fichiers de plus de 100 Mo, l'APK en fait environ 9.
2. **Lien externe** (recommandé pour les mises à jour) : publiez l'APK en « Release » GitHub et définissez `APK_URL=https://github.com/.../MediReminder.apk`.

Le site détecte le fichier : si absent, le bouton affiche « Bientôt disponible » au lieu d'une erreur.

## Variables d'environnement (facultatives)
- `APK_URL` : lien direct vers l'APK (prioritaire sur le fichier local).
- `APK_VERSION` : version affichée (ex. `0.2.0`).
- `APK_SHA256` : empreinte SHA-256 de l'APK, affichée pour vérification (`sha256sum MediReminder.apk`).
- `NEXT_PUBLIC_SITE_URL` : adresse publique du site (sinon déduite de Vercel).

## Points à vérifier avant publication
- Le texte de la page Confidentialité doit être relu par un conseiller juridique (réglementation RDC).
- Le chiffre de l'OMS (50 % d'adhésion) est cité avec sa source ; le confirmer avant de l'imprimer.
- Le QR code et les liens partagés pointent vers le domaine réel une fois déployé.
- Tester le téléchargement sur un vrai téléphone Android (Chrome et Samsung Internet).
