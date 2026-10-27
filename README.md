# Atlas Strategic Advisory — Cabinet de Conseil en Stratégie & Finance

Site web d'entreprise institutionnel pour un cabinet de conseil en stratégie, ingénierie financière, M&A et transformation digitale à Casablanca Finance City.

## Présentation du Projet
Atlas Strategic Advisory est un site web d'entreprise moderne et statutaire destiné aux dirigeants d'entreprises, conseils d'administration et investisseurs. Il met en valeur les pôles d'expertise du cabinet, intègre un outil interactif d'évaluation de maturité stratégique ("Diagnostic Flash") calculant un score d'opportunité en temps réel, présente des études de cas chiffrées et propose un formulaire sécurisé de demande d'audit sous accord de confidentialité (NDA).

### Fonctionnalités Clés
- **Identité Visuelle Prestige & Institutionnelle** : Fond sombre bleuté (`#0A1118`), nuances vert émeraude (`#10B981`) et platine, conforme aux standards des cabinets d'affaires internationaux.
- **Outil Interactif "Diagnostic Flash"** : Questionnarie d'évaluation en 4 dimensions (tranche de CA, priorités stratégiques, degré de digitalisation, horizon temporel) avec calcul immédiat du score de potentiel et recommandations personnalisées.
- **Présentation des Pôles d'Expertise & Livrables** : Fusions-acquisitions, transformation digitale, restructuration opérationnelle et conformité ESG.
- **Études de Cas & Impacts Mesurés** : Présentation chiffrée de missions réalisées au Maroc avec gains financiers et opérationnels concrets.

## Technologies Utilisées
- **Framework** : [Next.js](https://nextjs.org/) (App Router)
- **UI & Rendu** : [React](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
- **Styles** : [Tailwind CSS](https://tailwindcss.com/)
- **Icônes** : [Lucide React](https://lucide.dev/)

---

## Installation & Démarrage Local

### Prérequis
- Node.js version 18.18+ ou 20+
- npm version 9+

### 1. Installation des Dépendances
```bash
npm install
```

### 2. Démarrer le Serveur Local
```bash
npm run dev
```
Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### 3. Compiler pour la Production
```bash
npm run build
```

### 4. Lancer la Version Compilée
```bash
npm run start
```

---

## Déploiement Indépendant

### Option A : Dépôt GitHub Séparé (Recommandé)

1. Initialisez un nouveau dépôt Git dans ce dossier :
   ```bash
   cd business-website
   git init
   git add .
   git commit -m "feat: initial commit of Atlas Strategic Advisory project"
   ```
2. Créez un nouveau dépôt public ou privé sur GitHub nommé `business-website` :
   ```bash
   git remote add origin https://github.com/VOTRE_NOM_UTILISATEUR/business-website.git
   git branch -M main
   git push -u origin main
   ```
3. Connectez-vous sur [Vercel](https://vercel.com/) :
   - Cliquez sur **Add New...** > **Project**
   - Importez le dépôt `business-website`
   - Le framework Next.js est automatiquement détecté
   - Cliquez sur **Deploy**

### Option B : Déploiement Monorepo (depuis le dossier racine)
Si vous conservez tous les projets dans un seul dépôt :
- Sur Vercel, définissez **Root Directory** sur `business-website`.
- Les scripts de build et d'installation fonctionneront automatiquement.

---

## Variables d'Environnement
Ce projet ne requiert aucune variable d'environnement obligatoire pour fonctionner en mode vitrine.

Variables optionnelles :
- `NEXT_PUBLIC_ADVISORY_PHONE` (Optionnel) : Numéro de téléphone direct du standard.
- `NEXT_PUBLIC_ADVISORY_EMAIL` (Optionnel) : Adresse email de réception des demandes.

---

## Auteur & Copyright
Développé par [**Tariq Abala**](https://tariqabala.com) — Web Development & Digital Solutions.
*Professional Websites • Business Applications • Custom Admin Panels*

© 2026 TARIQ ABALA. Tous droits réservés.
