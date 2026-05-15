// ① IMPORTS
const express    = require('express')
const mongoose   = require('mongoose')
const dotenv     = require('dotenv')

// ② CONFIGURATION
dotenv.config()           // lit le fichier .env
const app = express()
app.use(express.json())   // pour lire le JSON reçu

// ③ CONNEXION MONGODB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ Connecté à MongoDB Atlas'))
    .catch((err) => console.log('❌ Erreur de connexion :', err))

// ④ MODÈLE
const noteSchema = new mongoose.Schema({
    titre:   { type: String, required: true },
    contenu: { type: String },
    date:    { type: Date, default: Date.now }
})
const Note = mongoose.model('Note', noteSchema)

// ⑤ ROUTES

// GET — récupérer toutes les notes
app.get('/notes', async (req, res) => {
    const notes = await Note.find()
    res.status(200).json(notes)
})

// GET — récupérer une note par son id
app.get('/notes/:id', async (req, res) => {
    const note = await Note.findById(req.params.id)
    if (!note) return res.status(404).json({ message: 'Note introuvable' })
    res.status(200).json(note)
})

// POST — créer une note
app.post('/notes', async (req, res) => {
    const note = new Note({
        titre:   req.body.titre,
        contenu: req.body.contenu
    })
    await note.save()
    res.status(201).json(note)
})

// PUT — modifier une note
app.put('/notes/:id', async (req, res) => {
    const note = await Note.findByIdAndUpdate(
        req.params.id,
        { titre: req.body.titre, contenu: req.body.contenu },
        { new: true }   // renvoie la note modifiée
    )
    if (!note) return res.status(404).json({ message: 'Note introuvable' })
    res.status(200).json(note)
})

// DELETE — supprimer une note
app.delete('/notes/:id', async (req, res) => {
    const note = await Note.findByIdAndDelete(req.params.id)
    if (!note) return res.status(404).json({ message: 'Note introuvable' })
    res.status(200).json({ message: 'Note supprimée' })
})

// ⑥ DÉMARRAGE
app.listen(process.env.PORT, () => {
    console.log(`🚀 Serveur démarré sur http://localhost:${process.env.PORT}`)
})