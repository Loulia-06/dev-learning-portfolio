# Recap — Dev Learning Portfolio

Synthèse de l'avancement du portfolio au 01/06/2026.

---

## Structure du repo

```
dev-learning-portfolio/
├── backend/
│   ├── api-rest/          → exercices API REST (Node.js + Express + MongoDB)
│   ├── nodejs/            → exercices Node.js (vide)
│   └── php/               → exercices PHP (vide)
├── frontend/
│   ├── html-css/          → exercices HTML/CSS (vide)
│   ├── javascript/        → exercices JavaScript (vide)
│   └── tailwind/          → exercices Tailwind (vide)
├── programmation/
│   ├── python/            → exercices Python (vide)
│   ├── java/              → exercices Java (vide)
│   ├── csharp/            → exercices C# (vide)
│   └── go/                → exercices Go (vide)
├── base-de-donnees/
│   └── sql/               → exercices SQL (vide)
└── projets-complets/      → projets finis documentés
    ├── Projet PHP/
    ├── Projet SQL/
    └── recette-du-monde/
```

---

## Projets complets

### Projet PHP — VestiSwap (site e-commerce vêtements)
> Projet de groupe (3 personnes) — Module PHP B2

- **Stack** : PHP (MVC), MySQL, HTML/CSS, XAMPP
- **Périmètre personnel** : front-end — vues PHP, CSS, toutes les interfaces utilisateur
- **Notions clés** : architecture MVC, sessions, PDO, validation serveur, génération de factures, GitHub en équipe
- **Difficulté** : comprendre le flux de données dans une archi MVC sans avoir codé le back-end
- **Repo** : [neotxt/projet-php-b2](https://github.com/neotxt/projet-php-b2)
- **Captures** : accueil, liste articles, filtres, panier

---

### Projet SQL — cIAra Mobility (location de véhicules électriques)
> Module SQL B2 — Janvier 2026

- **Stack** : PostgreSQL, pgAdmin 4, drawDB
- **Notions clés** : modélisation Merise (MCD/MLD), contraintes SQL, JOINs, sous-requêtes, agrégations, vues, triggers, fonctions PL/pgSQL, import CSV
- **Schéma** : 10 tables (`station`, `vehicule`, `type_vehicule`, `borne_recharge`, `client`, `technicien`, `reservation`, `location`, `paiement`, `maintenance`)
- **Difficulté** : ordre d'import des CSV (clés étrangères), syntaxe PL/pgSQL des triggers
- **Note perso** : premier projet SQL et premiers pas sur GitHub — structure du repo et commits auraient pu être mieux organisés
- **Repo** : [Loulia-06/projet_SQL_b2](https://github.com/Loulia-06/projet_SQL_b2)

---

### Recette du Monde (API REST full-stack)
> Projet individuel de fin de module — 20/05/2026

- **Stack** : TypeScript, Next.js (App Router), MongoDB, Tailwind CSS, JWT, bcryptjs
- **Notions clés** : API REST (CRUD complet), auth JWT, middleware de token, hashage mot de passe, React (useState/useEffect/fetch), routes API Next.js, filtrage MongoDB ($regex)
- **Architecture** : Client → API REST (Next.js routes) → MongoDB
- **Difficultés** : logique de structuration des routes REST, flux JWT de bout en bout, comprendre pourquoi le front ne parle jamais directement à la BDD
- **Démo** : déploiement Vercel prévu
- **Repo** : [Loulia-06/Projet_YBOOST](https://github.com/Loulia-06/Projet_YBOOST)
- **Captures** : accueil, connexion, création recette, détails recette

---

## Exercices réalisés

### API REST — Exo 1 : Découverte (15/05/2026)
> Niveau : Débutant

- API de gestion de notes en Node.js + Express + MongoDB Atlas
- Notions : verbes HTTP, Express, Mongoose, paramètres URL, .env, Thunder Client
- [backend/api-rest/exo1-decouverte/](backend/api-rest/exo1-decouverte/)

### API REST — Exo 2 : Bibliothèque (17/05/2026)
> Niveau : Moyen — réalisé en autonomie complète

- API de gestion de livres construite de A à Z sans aide
- Notions : `$set` pour PUT partiel, codes HTTP 200/201/404, validation Mongoose (required), routes RESTful correctement nommées
- [backend/api-rest/exo2-bibliotheque/](backend/api-rest/exo2-bibliotheque/)

---

## Technologies abordées

| Domaine | Technologie | Statut |
|---------|------------|--------|
| Backend | PHP (MVC) | Projet complet |
| Base de données | SQL / PostgreSQL | Projet complet |
| Backend | Node.js + Express | Exercices + projet |
| Base de données | MongoDB (Mongoose) | Exercices + projet |
| Full-stack | Next.js (TypeScript) | Projet complet |
| Auth | JWT + bcryptjs | Projet complet |
| Frontend | Tailwind CSS | Projet complet |
| Frontend | React | Projet complet |
| Programmation | Python | En cours |
| Frontend | HTML/CSS | En cours |
| Frontend | JavaScript | En cours |
| Programmation | Java | En cours |
| Programmation | C# | En cours |
| Programmation | Go | En cours |

---

## Progression globale

- **3 projets complets documentés** avec captures d'écran et READMEs détaillés
- **2 exercices API REST** progressifs (guidé → autonomie)
- **Dossiers vides** : nodejs, php (exercices), html-css, javascript, tailwind, python, java, csharp, go, sql (exercices) — à alimenter
- **Point fort** : documentation soignée dès le départ (READMEs avec notions, difficultés, installation, captures)
- **Axe d'amélioration identifié** : commits plus réguliers, organisation dossiers en amont (noté sur le projet SQL)
