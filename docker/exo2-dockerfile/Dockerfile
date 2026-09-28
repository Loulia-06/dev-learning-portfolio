# ETAPE 1 — FROM
# On part d'une image Node.js au lieu d'Ubuntu
# Pourquoi ? Parce que Node.js est déjà installé dedans — pas besoin de RUN apt-get install
FROM node:18

# ETAPE 2 — LABEL
# Des informations sur cette image — qui l'a créée, à quoi elle sert
# Optionnel mais bonne pratique
LABEL auteur="Loulia" description="Mon premier serveur web Docker"

# ETAPE 3 — ENV
# On définit une variable d'environnement pour le port
# Comme ça si on veut changer le port, on change juste ici
ENV PORT=3000

# ETAPE 4 — WORKDIR
# On crée et on se place dans le dossier /app à l'intérieur du conteneur
# Toutes les instructions suivantes s'exécutent depuis ce dossier
WORKDIR /app

# ETAPE 5 — COPY
# On copie notre fichier app.js depuis notre Mac vers /app dans l'image
# Le point "." signifie "tout le dossier actuel"
COPY . .

# ETAPE 6 — RUN
# Ici on n'a pas besoin d'installer Node.js, il est déjà là grâce au FROM node:18
# Mais si on avait des dépendances on ferait : RUN npm install
# On l'écrit quand même pour montrer l'exemple
RUN echo "Image construite avec succès !"

# ETAPE 7 — EXPOSE
# On indique que notre programme écoute sur le port 3000
# C'est informatif — comme mettre un panneau "entrée par ici"
EXPOSE 3000

# ETAPE 8 — CMD
# Au démarrage du conteneur, on lance notre serveur Node.js
# Toujours en dernier !
CMD ["node", "app.js"]