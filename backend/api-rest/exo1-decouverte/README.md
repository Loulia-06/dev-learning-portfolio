# 📝 Exo 1 — Découverte API REST avec Node.js
> Premier exercice de découverte — Module API REST
> Réalisé le 15/05/2026

**Langage** : JavaScript / Node.js
**Niveau** : 🟢 Débutant

---
## 🎯 Objectif
Découvrir et comprendre le fonctionnement d'une API REST en construisant
une API de gestion de notes connectée à une base de données MongoDB Atlas.

---
## 📚 Notions abordées
- C'est quoi une API et un serveur
- Les verbes HTTP : GET, POST, PUT, DELETE
- La structure d'un fichier server.js
- Le framework Express.js
- Les paramètres d'URL (:id) et le body (req.body)
- La connexion à MongoDB Atlas via Mongoose
- Le modèle de données (Schema)
- Les variables d'environnement avec .env
- Tester une API avec Thunder Client

---
## 🗂️ Structure du projet
```
exo1-decouverte/
├── server.js    → point d'entrée — serveur Express + routes CRUD
├── .env         → variables sensibles (non versionné)
└── README.md    → ce fichier
```

---
## ⚙️ Installation
### Prérequis
- Node.js installé
- Un compte MongoDB Atlas

### Étapes
```bash
# 1. Aller dans le dossier
cd exo1-decouverte

# 2. Installer les dépendances
npm install express mongoose dotenv

# 3. Créer le fichier .env
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/api-notes
PORT=3000

# 4. Lancer le serveur
node server.js
```

---
## 🚀 Routes disponibles
| Verbe | URL | Action |
|-------|-----|--------|
| GET | /notes | Récupérer toutes les notes |
| GET | /notes/:id | Récupérer une note par id |
| POST | /notes | Créer une note |
| PUT | /notes/:id | Modifier une note |
| DELETE | /notes/:id | Supprimer une note |

---
## 🧪 Exemples de test

### Créer une note (POST)
```
URL  : http://localhost:3000/notes
Body : { "titre": "Ma note", "contenu": "Mon texte" }
```

### Lire toutes les notes (GET)
```
URL : http://localhost:3000/notes
```

---
## 🗄️ Base de données
- **Type** : MongoDB (NoSQL)
- **Hébergement** : MongoDB Atlas (cloud)
- **Collection** : notes

```javascript
{
  titre:   String  // obligatoire
  contenu: String  // optionnel
  date:    Date    // automatique
}
```

---
## 📦 Dépendances
| Package | Rôle |
|---------|------|
| express | Framework HTTP pour créer le serveur et les routes |
| mongoose | Connexion et interaction avec MongoDB |
| dotenv | Lecture des variables d'environnement (.env) |

---
## ⚠️ Sécurité
Le fichier `.env` contient des informations sensibles — il est dans `.gitignore`
et **ne doit jamais être poussé sur GitHub**.

---
## 🐛 Erreurs rencontrées et solutions
| Erreur | Cause | Solution |
|--------|-------|---------|
| `Cannot find module` | Mauvais dossier dans le terminal | `cd` vers le bon dossier |
| `500 Internal Server Error` | Serveur pas redémarré | `Ctrl+C` puis `node server.js` |
| `404 Not Found` | Faute de frappe dans l'URL | Vérifier l'URL dans Thunder Client |

---
## 🖼️ Captures d'écran
<!-- Optionnel — ajoute tes captures ici : ![description](screenshots/nom.png) -->

## 🎥 Démo vidéo
<!-- Optionnel — colle ton lien YouTube non-listé ici : https://youtube.com/watch?v=XXXXX -->

---
*Projet réalisé dans le cadre du parcours de formation dev — Module Node.js / API REST*
