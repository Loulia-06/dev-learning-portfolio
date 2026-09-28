// On importe le module fs (filesystem) pour écrire des fichiers
const fs = require('fs');

// On crée le dossier /data s'il n'existe pas déjà
if (!fs.existsSync('/data')) {
  fs.mkdirSync('/data');
}

// On récupère la date et l'heure actuelles
const date = new Date().toLocaleString();

// On écrit une ligne dans un fichier
fs.appendFileSync('/data/journal.txt', `Conteneur lancé le : ${date}\n`);

console.log('Ligne ajoutée dans le journal !');