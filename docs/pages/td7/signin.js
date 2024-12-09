// Sélection des éléments
const form = document.getElementById("signupForm");
const emailInput = document.getElementById("mail");
const emailError = document.getElementById("mailError");
const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("passwordError");
const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");
const confirmPasswordInput = document.getElementById("confirm");
const confirmError = document.getElementById("confirmError");

// Validation email
emailInput.addEventListener("input", () => {
    if (!emailInput.value) {
        emailError.textContent = "Veuillez renseigner ce champ.";
        emailError.style.display = "block";
    } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
        emailError.textContent = "Veuillez entrer une adresse email valide.";
        emailError.style.display = "block";
    } else {
        emailError.textContent = "";
        emailError.style.display = "none";
    }
});

// Validation mot de passe
passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;

    // Critères de validation
    const criteria = [
        password.length >= 8, // Taille
        /[A-Z]/.test(password), // Majuscule
        /\d/.test(password), // Nombre
        /[@$!%*?&#]/.test(password) // Caractère spécial
    ];

    const strength = criteria.filter(Boolean).length; // Nombre de critères remplis
    const percentages = [15, 30, 55, 70, 100]; // Valeurs en %
    const colors = ["red", "orange", "yellow", "#7cb518", "green"]; // Couleurs associées

    // Mise à jour de la barre
    strengthBar.style.width = `${percentages[strength]}%`;
    strengthBar.style.backgroundColor = colors[strength];

    // Texte descriptif
    const descriptions = ["Aucune", "Faible", "Moyenne", "Bonne", "Excellente"];
    strengthText.textContent = `Force : ${descriptions[strength]}`;
});


// Validation confirmation du mot de passe
confirmPasswordInput.addEventListener("input", () => {
    if (confirmPasswordInput.value !== passwordInput.value) {
        confirmError.textContent = "Les deux mots de passe ne correspondent pas.";
        confirmError.style.display = "block";
    } else {
        confirmError.textContent = "";
        confirmError.style.display = "none";
    }
});

// Validation lors de la soumission
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Vérifie si tous les champs sont valides
    if (!emailInput.value || emailError.textContent || passwordError.textContent || confirmError.textContent) {
        alert("Veuillez corriger les erreurs avant de soumettre.");
    } else {
        alert("Formulaire soumis avec succès !");
    }
});
