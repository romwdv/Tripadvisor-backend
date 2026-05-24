# 🗄️ TripAdvisor Backend — Exercice Node.js / Express

> Serveur backend de l'exercice TripAdvisor, chargé de réceptionner les données du formulaire de contact et d'envoyer un email via une API transactionnelle.

> Projet réalisé dans le cadre d'une formation chez **Le Reacteur**.

---

## 📋 Présentation

Ce serveur Express reçoit les soumissions du formulaire de contact du [frontend TripAdvisor](https://github.com/romwdv/Tripadvisor-Exercice) et les transmet par email via les services **Brevo** et/ou **MailerSend**.

Il est déployé et hébergé sur **NorthFlank**.

---

## 🛠️ Technologies utilisées

| Technologie                                                               | Usage                                                     |
| ------------------------------------------------------------------------- | --------------------------------------------------------- |
| [Node.js](https://nodejs.org/)                                            | Environnement d'exécution                                 |
| [Express](https://expressjs.com/) `^5.2.1`                                | Framework HTTP                                            |
| [CORS](https://www.npmjs.com/package/cors) `^2.8.6`                       | Gestion des autorisations cross-origin (frontend Netlify) |
| [dotenv](https://www.npmjs.com/package/dotenv) `^17.4.2`                  | Gestion des variables d'environnement                     |
| [@getbrevo/brevo](https://www.npmjs.com/package/@getbrevo/brevo) `^5.0.4` | SDK officiel Brevo pour l'envoi d'emails transactionnels  |
| [mailersend](https://www.npmjs.com/package/mailersend) `^3.0.0`           | SDK MailerSend (alternative d'envoi d'email)              |
| NorthFlank                                                                | Hébergement et déploiement du serveur                     |

> Le projet utilise la syntaxe **ES Modules** (`"type": "module"` dans `package.json`).

---

## 🗂️ Structure du projet

```
📁 Tripadvisor-backend/
├── index.js          # Point d'entrée : serveur Express et routes
├── package.json
├── package-lock.json
└── .gitignore        # Exclut .env et node_modules/
```

---

## ⚙️ Fonctionnement

Le serveur expose une route `POST` qui reçoit les données du formulaire de contact (prénom, nom, email, message) envoyées par Axios depuis le frontend, puis déclenche l'envoi d'un email via l'API Brevo ou MailerSend.

Le middleware CORS est configuré pour autoriser les requêtes provenant du frontend hébergé sur Netlify.

---

## 🔐 Variables d'environnement

Le fichier `.env` (non versionné) doit être créé à la racine du projet avec les clés API nécessaires :

```env
BREVO_API_KEY=votre_clé_api_brevo
MAILERSEND_API_KEY=votre_clé_api_mailersend
PORT=3000
```

> Sur NorthFlank, ces variables sont configurées directement dans l'interface du projet.

---

## 🚀 Lancer le projet en local

```bash
# Cloner le dépôt
git clone https://github.com/romwdv/Tripadvisor-backend.git
cd Tripadvisor-backend

# Installer les dépendances
npm install

# Créer le fichier .env et y renseigner les clés API
cp .env.example .env  # ou créer le fichier manuellement

# Démarrer le serveur
node index.js
```

---

## 🔗 Dépôts liés

| Repo                                                       | Description                                       |
| ---------------------------------------------------------- | ------------------------------------------------- |
| [Frontend](https://github.com/romwdv/Tripadvisor-Exercice) | Page d'accueil HTML/CSS/JS — déployée sur Netlify |
| Ce dépôt                                                   | Backend Node.js/Express — déployé sur NorthFlank  |

---

## 👤 Auteur

Exercice réalisé par **Romain** dans le cadre de la formation **[Le Reacteur](https://www.lereacteur.io/)**.
