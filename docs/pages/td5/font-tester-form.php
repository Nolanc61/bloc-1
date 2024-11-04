<?php

$msg = $_POST['msg'] ?? "Erreur ! Le message n'est pas spécifié.";
$size = $_POST['size'] ?? 12;
$color = $_POST['color'] ?? "black";

echo '
    <form method="POST" style="margin-top: 20px;">
        <label for="msg">Message :</label><br>
        <textarea id="msg" name="msg" rows="4" cols="30" placeholder="Entrez votre message ici"></textarea><br><br>

        <label for="size">Taille du texte :</label>
        <input type="number" id="size" name="size" placeholder="Entrez une taille (ex : 12)" min="1" style="margin-top: 5px;"><br><br>

        <label for="color">Couleur :</label>
        <input type="color" id="color" name="color" style="margin-top: 5px;"><br><br>

        <button type="submit">Afficher le message</button>
    </form>
';

// Afficher le message stylisé selon les paramètres
echo "<div style='color: $color; font-size: ${size}px; margin-top: 20px;'>$msg</div>";

?>
