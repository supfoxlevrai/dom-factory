#!/bin/bash

#=================================================================
# DOM Factory Project Generator
# Copyright (c) 2026 SupFox
#
# Licensed under the MIT License (if applicable)
#=================================================================


# Dossier racine
BASE_DIR="machines"

# Demande le nom du projet
read -p "Nom du projet : " folder

PROJECT_PATH="$BASE_DIR/$folder"

# Vérifie si le dossier machines existe
if [ ! -d "$BASE_DIR" ]; then
  echo "Création du dossier racine 'machines'..."
  mkdir -p "$BASE_DIR"
fi

# Vérifie si le projet existe dans machines
if [ ! -d "$PROJECT_PATH" ]; then
  echo "Création du projet '$folder' dans machines..."
  mkdir -p "$PROJECT_PATH"
else
  echo "Projet '$folder' déjà existant dans machines. Utilisation du dossier existant..."
fi

# Création index.html
cat > "$PROJECT_PATH/index.html" <<EOF
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>$folder</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <h1>$folder</h1>

  <script src="script.js"></script>
</body>
</html>
EOF

# Création CSS et JS
touch "$PROJECT_PATH/style.css"
touch "$PROJECT_PATH/script.js"

# Message final
echo "Projet '$folder' prêt dans machines 🚀"
echo "- machines/$folder/index.html"
echo "- machines/$folder/style.css"
echo "- machines/$folder/script.js"
