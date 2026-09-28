# Architecture du portfolio

Ce repo est un portfolio d'apprentissage en développement logiciel. Il regroupe des exercices, des projets complets, et de la documentation organisés par domaine technologique.

---

## Structure globale

```
dev-learning-portfolio/
├── frontend/               → exercices HTML/CSS, JavaScript, Tailwind
├── backend/                → exercices Node.js, PHP, API REST
│   └── api-rest/
│       ├── exo1-decouverte/    → API Notes (Node.js + MongoDB)
│       └── exo2-bibliotheque/  → API Livres (Node.js + MongoDB)
├── base-de-donnees/
│   └── sql/                → exercices SQL
├── programmation/          → exercices Python, Java, C#, Go
├── projets-complets/       → projets finalisés avec README détaillé
│   ├── Projet PHP/         → site e-commerce MVC (groupe)
│   ├── Projet SQL/         → BDD PostgreSQL cIAra Mobility
│   └── recette-du-monde/   → API REST full-stack (Next.js + MongoDB)
├── README.md               → vue d'ensemble du parcours
└── RECAP.md                → récapitulatif de progression
```

---

## Convention d'organisation

Chaque dossier suit la même logique :
- les **exercices** vivent dans leur domaine (`frontend/`, `backend/`, etc.)
- les **projets aboutis** sont dans `projets-complets/` avec un README complet
- chaque projet ou exercice a son propre `README.md` qui documente : objectif, notions abordées, structure, installation, difficultés rencontrées

---

## Projets complets

### Projet PHP — Site e-commerce vêtements
- **Stack** : PHP, MySQL, HTML/CSS
- **Architecture** : MVC (Modèle-Vue-Contrôleur)
- **Contexte** : projet de groupe (3 personnes), module PHP B2
- **Périmètre personnel** : vues PHP, intégration CSS, interfaces utilisateur
- **Repo** : [neotxt/projet-php-b2](https://github.com/neotxt/projet-php-b2)

```
src/
├── config/         → connexion PDO
├── controllers/    → logique + routage
├── models/         → entités
├── Repositories/   → requêtes SQL
├── Services/       → logique métier avancée
├── views/          → pages PHP dynamiques
public/             → CSS, images
index.php           → point d'entrée (routeur)
```

---

### Projet SQL — cIAra Mobility
- **Stack** : PostgreSQL, pgAdmin
- **Contexte** : module SQL B2, 01/2026
- **Sujet** : BDD de gestion de flotte de véhicules électriques partagés
- **Repo** : [Loulia-06/projet_SQL_b2](https://github.com/Loulia-06/projet_SQL_b2)

Schéma relationnel (10 tables) :
```
station ──────────── vehicule ──────── type_vehicule
   │                    │
   └── borne_recharge   ├── reservation ── client
                        ├── location
                        ├── paiement
                        └── maintenance ── technicien
```

---

### Recette du Monde — API REST full-stack
- **Stack** : TypeScript, Next.js, MongoDB, JWT, Tailwind CSS
- **Contexte** : projet individuel de fin de module, 20/05/2026
- **Architecture** : Client → API REST (Next.js App Router) → MongoDB
- **Repo** : [Loulia-06/Projet_YBOOST](https://github.com/Loulia-06/Projet_YBOOST)

Le front (React/Next.js) ne parle jamais directement à MongoDB — toutes les requêtes passent par les routes API Next.js, qui seules accèdent à la base.

---

## Exercices API REST (backend/api-rest/)

| Exercice | Sujet | Technologies | Niveau |
|----------|-------|-------------|--------|
| exo1-decouverte | CRUD de notes | Node.js, Express, Mongoose | Débutant |
| exo2-bibliotheque | CRUD de livres (autonomie) | Node.js, Express, Mongoose | Moyen |

Les deux exercices partagent la même stack et la même structure : un `server.js` unique qui contient le serveur Express, le modèle Mongoose et les routes, plus un `.env` pour les variables sensibles.

---

## Domaines en cours (dossiers vides)

Ces dossiers existent et seront alimentés au fil des cours :

| Dossier | Technologie |
|---------|-------------|
| `frontend/html-css/` | HTML, CSS |
| `frontend/javascript/` | JavaScript |
| `frontend/tailwind/` | Tailwind CSS |
| `backend/nodejs/` | Node.js |
| `backend/php/` | PHP |
| `base-de-donnees/sql/` | SQL |
| `programmation/python/` | Python |
| `programmation/java/` | Java |
| `programmation/csharp/` | C# |
| `programmation/go/` | Go |
