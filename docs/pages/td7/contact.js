document.getElementById("contactForm").addEventListener("submit", function (e) {
    let isValid = true;

    // Sélection des champs
    const name = document.getElementById("name");
    const lastname = document.getElementById("lastname");
    const email = document.getElementById("mail");
    const message = document.getElementById("msg");

    // Messages d'erreur
    const errorName = document.getElementById("error-name");
    const errorLastname = document.getElementById("error-lastname");
    const errorMail = document.getElementById("error-mail");
    const errorMessage = document.getElementById("error-message");

    // Regex pour les noms/prénoms
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/;

    // Réinitialiser les messages d'erreur
    [errorName, errorLastname, errorMail, errorMessage].forEach((el) => {
        el.style.display = "none";
    });

    // Validation du prénom
    if (!name.value.trim() || !nameRegex.test(name.value)) {
        isValid = false;
        errorName.textContent = "Le prénom doit contenir uniquement des lettres.";
        errorName.style.display = "block";
    }

    // Validation du nom
    if (!lastname.value.trim() || !nameRegex.test(lastname.value)) {
        isValid = false;
        errorLastname.textContent = "Le nom doit contenir uniquement des lettres.";
        errorLastname.style.display = "block";
    }

    // Validation de l'e-mail
    if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        isValid = false;
        errorMail.textContent = "Veuillez entrer une adresse e-mail valide.";
        errorMail.style.display = "block";
    }

    // Validation du message
    if (!message.value.trim()) {
        isValid = false;
        errorMessage.textContent = "Le message ne peut pas être vide.";
        errorMessage.style.display = "block";
    }

    // Empêche l'envoi si des erreurs sont présentes
    if (!isValid) {
        e.preventDefault();
    }
});
