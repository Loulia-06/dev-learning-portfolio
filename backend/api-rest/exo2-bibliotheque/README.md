# 📚 Exo 2 — API REST Bibliothèque avec Node.js

> Deuxième exercice — Module API REST  
> Réalisé le 17/05/2026

---

## 🎯 Objectif

Créer de A à Z une **API REST de gestion de livres** en autonomie, en appliquant les notions vues pendant le cours sur l'API Notes.

---

## 📚 Notions appliquées

- Structure complète d'un `server.js` (6 étapes)
- Verbes HTTP : `GET`, `POST`, `PUT`, `DELETE`
- Paramètres d'URL (`:id`) et `req.params`
- Body (`req.body`) et quand l'utiliser
- Modèle Mongoose avec validation (`required`)
- Différence entre `livres` (pluriel) et `livre` (singulier)
- Utilisation de `$set` pour modifier uniquement les champs envoyés
- Codes de statut : `200`, `201`, `404`
- Test complet avec **Thunder Client**

---

## 🗂️ Structure du projet

```
exo2-bibliotheque/
├── server.js       → serveur Express + modèle + routes CRUD
├── .env            → variables sensibles (non versionné)
├── package.json    → dépendances du projet
└── README.md       → ce fichier
```

---

## ⚙️ Installation

### Prérequis
- Node.js installé
- Un compte MongoDB Atlas

### Étapes

```bash
# 1. Aller dans le dossier
cd exo2-bibliotheque

# 2. Installer les dépendances
npm install

# 3. Configurer le .env
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/api-bibliotheque
PORT=3000

# 4. Lancer le serveur
node server.js
```

---

## 🚀 Routes disponibles

| Verbe | URL | Action | Body requis |
|-------|-----|--------|-------------|
| `GET` | `/livres` | Récupérer tous les livres | ❌ |
| `GET` | `/livres/:id` | Récupérer un livre par id | ❌ |
| `POST` | `/livres` | Créer un livre | ✅ |
| `PUT` | `/livres/:id` | Modifier un livre (champs ciblés) | ✅ |
| `DELETE` | `/livres/:id` | Supprimer un livre | ❌ |

---

## 🧪 Exemples de tests (Thunder Client)

### Créer un livre (POST)
```
URL  : http://localhost:3000/livres
Body :
{
    "titre": "Harry Potter",
    "auteur": "J.K. Rowling",
    "annee": "1997-01-01"
}
```

### Lire tous les livres (GET)
```
URL : http://localhost:3000/livres
```

### Modifier uniquement le titre (PUT)
```
URL  : http://localhost:3000/livres/ID_DU_LIVRE
Body :
{
    "titre": "Nouveau titre"
}
```

### Supprimer un livre (DELETE)
```
URL : http://localhost:3000/livres/ID_DU_LIVRE
```

---

## 🗄️ Base de données

- **Type** : MongoDB (NoSQL)
- **Hébergement** : MongoDB Atlas (cloud)
- **Collection** : `livres`

### Modèle de données
```javascript
{
    titre:  String  // obligatoire
    auteur: String  // obligatoire
    annee:  Date    // obligatoire (format : YYYY-MM-DD)
}
```

---

## 💡 Points clés appris

- `Livre` avec **majuscule** → le modèle Mongoose (convention obligatoire)
- `livres` au **pluriel** → quand `find()` renvoie plusieurs résultats
- `livre` au **singulier** → quand on travaille avec un seul résultat
- `$set` dans le PUT → modifie **uniquement** les champs envoyés sans écraser les autres
- `await` → obligatoire devant chaque appel Mongoose

---

## 📦 Dépendances

| Package | Rôle |
|---------|------|
| `express` | Framework HTTP pour créer le serveur et les routes |
| `mongoose` | Connexion et interaction avec MongoDB |
| `dotenv` | Lecture des variables d'environnement (.env) |

---

## ⚠️ Sécurité

- Le fichier `.env` contient des informations sensibles — il est dans `.gitignore` et **ne doit jamais être poussé sur GitHub**

---

## 🐛 Erreurs rencontrées et solutions

| Erreur | Cause | Solution |
|--------|-------|---------|
| `Livre is not defined` | Modèle déclaré avec minuscule `livre` | Mettre une majuscule `Livre` |
| `404 Not Found` | URL `/livre` sans le **s** | Utiliser `/livres` |
| `500 Internal Server Error` | Serveur pas redémarré après modification | `Ctrl+C` puis `node server.js` |
| Données effacées après PUT | Pas de `$set` | Ajouter `{ $set: req.body }` |

---

*Projet réalisé dans le cadre du parcours de formation dev — Module Node.js / API REST*