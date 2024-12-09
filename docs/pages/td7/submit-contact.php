<?php
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $name = trim($_POST['name']);
        $lastname = trim($_POST['lastname']);
        $email = trim($_POST['mail']);
        $message = trim($_POST['message']);

        echo "Voici les informations saisies :<br>";
        echo "<p><strong>Prénom :</strong> " . htmlspecialchars($name) . "</p>";
        echo "<p><strong>Nom :</strong> " . htmlspecialchars($lastname) . "</p>";
        echo "<p><strong>Email :</strong> " . htmlspecialchars($email) . "</p>";
        echo "<p><strong>Message :</strong> " . nl2br(htmlspecialchars($message)) . "</p>";
    }
?>
