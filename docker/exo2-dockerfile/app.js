// On importe le module http de Node.js pour créer un serveur web
const http = require('http');

// On crée un serveur qui répond "Bonjour depuis Docker !" à chaque requête
const server = http.createServer((req, res) => {
  res.write('Bonjour depuis Docker !');
  res.end();
});

// On dit au serveur d'écouter sur le port 3000
server.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});
