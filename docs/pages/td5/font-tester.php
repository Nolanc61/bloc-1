<?php

// Différents messages avec couleurs et tailles différentes
echo "<div><a href='?msg=Message%20premier&color=red&size=15'>Ceci est le premier message</a></div>";
echo "<div><a href='?msg=Message%20second&color=green&size=30'>Ceci est le second message</a></div>";
echo "<div><a href='?msg=Message%20tercio&color=blue&size=50'>Ceci est le troisième message</a></div>";

//Formulaire méthode GET
echo '
    <form method="GET" style="margin-top: 20px;">
        <label for="msg">Message :</label>
        <input type="text" id="msg" name="msg" placeholder="Entrez un message">
        
        <label for="color">Couleur :</label>
        <input type="text" id="color" name="color" placeholder="Entrez une couleur (ex : red)">

        <label for="size">Taille :</label>
        <input type="number" id="size" name="size" placeholder="Entrez une taille (ex : 12)">
        
        <button type="submit">Afficher le message</button>
    </form>
';

// variables avec méthode GET
$msg = $_GET['msg']??"Erreur ! Le message n'est pas spécifé. ";
$color = $_GET['color']??"black";
$size = $_GET['size']??12;

// change la taille du message en encodant car $msg et $color
// peuvent être compliqués (espaces ou &)
echo "<div style='margin-top: 10px;'>
        <a href='?msg=" . urlencode($msg) . "&color=" . urlencode($color) . "&size=" . ($size + 5) . "'>+</a>
        <a href='?msg=" . urlencode($msg) . "&color=" . urlencode($color) . "&size=" . ($size - 5) . "'>-</a>
      </div>";


// Défini la couleur et taille dans une div avec 'style' grâce aux variables
echo "<div style='color: $color; font-size: '$size'px; margin-top: 20px;'>$msg</div>";

?>
