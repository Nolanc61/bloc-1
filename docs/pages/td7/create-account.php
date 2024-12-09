<?php
// Récupérer les données du formulaire
$mail = $_POST['mail'] ?? '';
$password = $_POST['password'] ?? '';
$confirm = $_POST['confirm'] ?? '';

// Vérifier si les mots de passe correspondent
$match = $password === $confirm ? "Oui" : "Non";

// Afficher les données
echo "<h1>Compte créé</h1>";
echo "<p><strong>Adresse mail :</strong> " . htmlspecialchars($mail) . "</p>";
echo "<p><strong>Mot de passe :</strong> " . htmlspecialchars($password) . "</p>";
echo "<p><strong>Confirmation identique :</strong> " . $match . "</p>";
?>