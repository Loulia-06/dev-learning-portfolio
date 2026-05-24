# 📚 Exo 2 — API REST Bibliothèque avec Node.js
> Deuxième exercice — Module API REST — réalisé en autonomie complète
> Réalisé le 17/05/2026

**Langage** : JavaScript / Node.js
**Niveau** : 🟡 Moyen

---
## 🎯 Objectif
Créer de A à Z une API REST de gestion de livres en autonomie, en appliquant
les notions vues pendant l'exercice 1 sur l'API Notes.

---
## 📚 Notions abordées
- Structure complète d'un server.js en 6 étapes
- Verbes HTTP : GET, POST, PUT, DELETE
- Paramètres d'URL (:id) et req.params
- Body (req.body) et quand l'utiliser
- Modèle Mongoose avec validation (required)
- Différence entre `livres` (pluriel) et `livre` (singulier)
- Utilisation de $set pour modifier uniquement les champs envoyés
- Codes de statut HTTP : 200, 201, 404
- Test complet avec Thunder Client

---
## 🗂️ Structure du projet
```
exo2-bibliotheque/
├── server.js    → serveur Express + modèle + routes CRUD
├── .env         → variables sensibles (non versionné)
├── package.json → dépendances du projet
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
cd exo2-bibliotheque

# 2. Installer les dépendances
npm install

# 3. Créer le fichier .env
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/api-bibliotheque
PORT=3000

# 4. Lancer le serveur
node server.js
```

---
## 🚀 Routes disponibles
| Verbe | URL | Action | Body requis |
|-------|-----|--------|-------------|
| GET | /livres | Récupérer tous les livres | ❌ |
| GET | /livres/:id | Récupérer un livre par id | ❌ |
| POST | /livres | Créer un livre | ✅ |
| PUT | /livres/:id | Modifier un livre (champs ciblés) | ✅ |
| DELETE | /livres/:id | Supprimer un livre | ❌ |

---
## 🧪 Exemples de test

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

### Modifier uniquement le titre (PUT)
```
URL  : http://localhost:3000/livres/ID_DU_LIVRE
Body : { "titre": "Nouveau titre" }
```

### Supprimer un livre (DELETE)
```
URL : http://localhost:3000/livres/ID_DU_LIVRE
```

---
## 🗄️ Base de données
- **Type** : MongoDB (NoSQL)
- **Hébergement** : MongoDB Atlas (cloud)
- **Collection** : livres

```javascript
{
    titre:  String  // obligatoire
    auteur: String  // obligatoire
    annee:  Date    // obligatoire (format : YYYY-MM-DD)
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
| `Livre is not defined` | Modèle déclaré avec minuscule `livre` | Mettre une majuscule `Livre` |
| `404 Not Found` | URL `/livre` sans le s | Utiliser `/livres` |
| `500 Internal Server Error` | Serveur pas redémarré | `Ctrl+C` puis `node server.js` |
| Données effacées après PUT | Pas de `$set` | Ajouter `{ $set: req.body }` |

---
## 🖼️ Captures d'écran
<!-- Optionnel — ajoute tes captures ici : ![description](screenshots/nom.png) -->

## 🎥 Démo vidéo
<!-- Optionnel — colle ton lien YouTube non-listé ici : https://youtube.com/watch?v=XXXXX -->

---
*Projet réalisé dans le cadre du parcours de formation dev — Module Node.js / API REST*
