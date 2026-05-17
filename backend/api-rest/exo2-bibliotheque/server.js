// etape 1 : importer les outils
const express = require('express') // "Je crée une variable qui s'appelle express et dedans je mets les outils Express"
const mongoose = require('mongoose') // "Je crée une variable qui s'appelle mongoose et dedans je mets les outils pour parler à MongoDB"
const dotenv = require('dotenv') // "Je crée une variable qui s'appelle dotenv et dedans je mets les outils pour lire mon fichier .env"

// etape 2 : configuration (prépare l'appli)
dotenv.config() // "Prends la boîte à outils dotenv et exécute l'action config : c'est-à-dire lis mon fichier .env"
const app = express() // on crée une variable qui s'appelle app avec l'outil express et qui sera utilisée plus tard pour nos routes
app.use(express.json()) // "Dis à mon application qu'elle doit savoir lire le JSON qu'elle reçoit"

// etape 3 : connexion Mongodb (BDD)
mongoose.connect(process.env.MONGO_URI) // contecte toi à mongoose avec le lien qui ce trouve dans le fichier .env et plus précisément dans .Mongo_uri
.then(() => console.log('Connecté à MongoDB')) // si ça fonctionne, affiche cette phrase
.catch((err) => console.log('Erreur :', err)) // si ça ne fonctionne pas , affiche erreur et le message d'erreur enregistré dans la variable err

// etape 4 : le modèle 
const livreSchema = new mongoose.Schema({  // Crée un nouveau moule appelé livreSchema qui définit à quoi ressemble un livre
    titre: { type: String, required: true},
    auteur: { type: String, required: true},
    annee: { type: Date, required: true}
})
const Livre = mongoose.model('Livre', livreSchema)

// etape 5 : les routes CRUD
// GET tous les livres
app.get('/livres', async (req, res) => {
    const livres = await Livre.find()
    res.status(200).json(livres)
})

// GET un livre par id
app.get('/livres/:id', async (req, res) => {
    const livre = await Livre.findById(req.params.id)
    if (!livre) return res.status(404).json({ message: 'Introuvable' })
    res.status(200).json(livre)
})

// POST créer un livre
app.post('/livres', async (req, res) => {
    const livre = new Livre({
        titre:  req.body.titre,
        auteur: req.body.auteur,
        annee:  req.body.annee
    })
    await livre.save()
    res.status(201).json(livre)
})

app.put('/livres/:id', async (req, res) => {
    const livre = await Livre.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true}
    )

    if (!livre) return res.status(404).json({ message: 'Introuvable'})
    res.status(200).json(livre)
})
    


app.delete('/livres/:id', async (req, res) => {
    const livre = await Livre.findByIdAndDelete(req.params.id)
    if (!livre) return res.status(404).json( {message: 'Introuvable'})
    res.status(200).json({ message: 'Livre supprimé'})
})

// etape 6 : démarrage
app.listen(process.env.PORT, () => {
    console.log('Serveur démarré !')
})