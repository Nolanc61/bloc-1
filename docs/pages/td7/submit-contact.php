<?php
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $name = trim($_POST['name']);
        $lastname = trim($_POST['lastname']);
        $email = trim($_POST['mail']);
        $message = trim($_POST['message']);

        // Regex pour les noms et prénoms
        $nameRegex = "/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/";

        // Vérifications
        if (!preg_match($nameRegex, $name)) {
            die("Erreur : Le prénom est invalide.");
        }

        if (!preg_match($nameRegex, $lastname)) {
            die("Erreur : Le nom est invalide.");
        }

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            die("Erreur : L'e-mail est invalide.");
        }

        if (empty($message)) {
            die("Erreur : Le message est vide.");
        }

        echo "Voici les informations saisies :<br>";
        echo "<p><strong>Prénom :</strong> " . htmlspecialchars($name) . "</p>";
        echo "<p><strong>Nom :</strong> " . htmlspecialchars($lastname) . "</p>";
        echo "<p><strong>Email :</strong> " . htmlspecialchars($email) . "</p>";
        echo "<p><strong>Message :</strong> " . nl2br(htmlspecialchars($message)) . "</p>";
    }
?>
