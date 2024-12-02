<!doctype html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>Formulaire soumis</title>
</head>
<body>
    <h1>Voici les informations saisies :</h1>
    <p><strong>Prénom :</strong> <?php echo htmlspecialchars($_POST['name']); ?></p>
    <p><strong>Nom :</strong> <?php echo htmlspecialchars($_POST['lastname']); ?></p>
    <p><strong>Email :</strong> <?php echo htmlspecialchars($_POST['mail']); ?></p>
    <p><strong>Message :</strong> <?php echo nl2br(htmlspecialchars($_POST['message'])); ?></p>
</body>
</html>
