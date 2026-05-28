# 🗄️ Projet SQL — Système de gestion cIAra Mobility

> Projet réalisé dans le cadre du module SQL B2
> Réalisé le 01/2026

**Langage** : SQL / PostgreSQL

---

## 🎯 Objectif

Concevoir et implémenter une base de données PostgreSQL complète pour cIAra Mobility, une start-up de location de véhicules électriques partagés (voitures, trottinettes, scooters, vélos).

La base de données gère : la flotte de véhicules, les stations et bornes de recharge, les clients, les réservations, les paiements et la maintenance.

---

## 📚 Notions abordées

- Modélisation Merise (MCD et MLD)
- Création de tables avec contraintes (PRIMARY KEY, FOREIGN KEY, CHECK, NOT NULL)
- Requêtes SQL avancées : SELECT, JOIN, sous-requêtes, agrégations
- Vues, triggers et fonctions PostgreSQL
- Import de données CSV via pgAdmin
- Gestion de versions avec GitHub

---

## 💡 Ce que j'ai appris

Concevoir une base de données relationnelle de A à Z en partant d'un besoin métier réel. J'ai appris à modéliser avec Merise avant d'écrire une seule ligne de SQL, ce qui m'a aidée à structurer ma pensée. Les triggers et fonctions PostgreSQL m'ont montré qu'une base de données peut contenir de la logique métier, pas seulement des données.

---

## 🗂️ Structure du projet

```
projet-sql-ciara-mobility/
├── create_tables.sql     → structure de la base + données test
├── queries.sql           → 10+ requêtes documentées
├── data/                 → fichiers CSV pour l'import
│   ├── station.csv
│   ├── type_vehicule.csv
│   ├── client.csv
│   ├── technicien.csv
│   ├── vehicule.csv
│   ├── borne_recharge.csv
│   ├── reservation.csv
│   ├── location.csv
│   ├── paiement.csv
│   └── maintenance.csv
└── README.md
```

---

## 🗺️ Schéma de la base

```
station ──────────── vehicule ──────── type_vehicule
   │                    │
   └── borne_recharge   ├── reservation ── client
                        ├── location
                        ├── paiement
                        └── maintenance ── technicien
```

10 tables reliées par clés étrangères :
`station` · `type_vehicule` · `vehicule` · `borne_recharge` · `client` · `technicien` · `reservation` · `location` · `paiement` · `maintenance`

---

## 🔗 Repos du projet

| Partie | Repo | Description |
|--------|------|-------------|
| Base de données | [projet_SQL_b2](https://github.com/Loulia-06/projet_SQL_b2) | Scripts SQL + données CSV |

---

## ⚙️ Installation

### Prérequis
- PostgreSQL installé
- pgAdmin 4

### Étapes

```sql
-- 1. Créer la base dans pgAdmin
-- 2. Ouvrir Query Tool → exécuter create_tables.sql
-- 3. Importer les CSV dans cet ordre :
--    station → type_vehicule → client → technicien
--    → vehicule → borne_recharge → reservation
--    → location → paiement → maintenance
-- 4. Tester avec queries.sql
```

---

## 🚀 Exemples de requêtes

```sql
-- Véhicules disponibles par station
SELECT s.nom_station, COUNT(v.id_vehicule) AS nb_disponibles
FROM station s
JOIN vehicule v ON v.id_station = s.id_station
WHERE v.statut = 'disponible'
GROUP BY s.nom_station;

-- Chiffre d'affaires par type de véhicule
SELECT tv.type, SUM(p.montant) AS ca_total
FROM type_vehicule tv
JOIN vehicule v ON v.id_type = tv.id_type
JOIN location l ON l.id_vehicule = v.id_vehicule
JOIN paiement p ON p.id_location = l.id_location
GROUP BY tv.type
ORDER BY ca_total DESC;
```

---

## 📦 Technologies

| Outil | Rôle |
|-------|------|
| PostgreSQL | SGBD relationnel |
| pgAdmin 4 | Interface graphique |
| GitHub | Gestion de versions |

---

## 🐛 Erreurs rencontrées et solutions

| Erreur | Cause | Solution |
|--------|-------|----------|
| Violation de clé étrangère à l'import | Mauvais ordre d'import CSV | Respecter l'ordre défini ci-dessus |
| `null value in column` | Colonne NOT NULL sans valeur | Vérifier les données CSV |
| Trigger ne se déclenche pas | Mauvaise syntaxe PL/pgSQL | Relire la doc PostgreSQL |

---

## 🖼️ Captures d'écran
<!-- ![Schéma MCD](screenshots/mcd.png) -->
<!-- ![pgAdmin tables](screenshots/pgadmin.png) -->

---

*Projet réalisé dans le cadre du module SQL B2 — Formation informatique*