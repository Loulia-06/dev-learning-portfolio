# Le Dockerfile c'est la recette de notre image.
# On écrit ici toutes les étapes pour construire notre programme.

# ETAPE 1 : On choisit notre point de départ (comme un ordi vierge avec Ubuntu)
FROM ubuntu

# ETAPE 2 : On installe ce dont on a besoin (ici le programme cowsay)
# Cette étape se fait UNE SEULE FOIS quand on construit l'image avec "docker build"
RUN apt-get update && apt-get install -y cowsay

# ETAPE 3 : On dit quoi faire quand le programme démarre
# Cette ligne s'exécute à chaque fois qu'on fait "docker run"
CMD ["/usr/games/cowsay", "Bonjour depuis mon premier conteneur !"]