<?php

echo '
    <form method="POST">
        <label for="num_rows">Nombre de lignes :</label>
        <input type="number" id="num_rows" name="num_rows" min="1" required>
        
        <label for="num_cols">Nombre de colonnes :</label>
        <input type="number" id="num_cols" name="num_cols" min="1" required>
        
        <button type="submit">Générer</button>
    </form>';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Récupérer et convertir les valeurs de lignes et colonnes
    $num_rows = (int)$_POST['num_rows'];
    $num_cols = (int)$_POST['num_cols'];
    
    echo '<table border="1" style="margin-top: 20px; border-collapse: collapse;">';

    for ($i = 0; $i < $num_rows; $i++) {
        echo '<tr>';
        
        for ($x = 0; $x < $num_cols; $x++) {
            echo '<td>Ligne ' . ($i + 1) . ', Colonne ' . ($x + 1) . '</td>';
        }
        
        echo '</tr>';
    }
    
    echo '</table>';
}
?>
