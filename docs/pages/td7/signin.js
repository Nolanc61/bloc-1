// Sélection des éléments
const form = document.getElementById("signupForm");
const emailInput = document.getElementById("mail");
const emailError = document.getElementById("mailError");
const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("passwordError");
const strengthBar = document.getElementById("strengthBar");
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
    let strength = 0;

    // Vérification des critères de force
    if (password.length >= 8) strength++; // Longueur minimale
    if (/[A-Z]/.test(password)) strength++; // Contient une majuscule
    if (/[0-9]/.test(password)) strength++; // Contient un chiffre
    if (/[@$!%*?&#]/.test(password)) strength++; // Contient un caractère spécial

    // Mise à jour de la barre et du texte
    strengthBar.style.width = `${strength * 26.3}%`;

    const strengthText = document.getElementById("strengthText");
    if (strength === 1) {
        strengthBar.style.backgroundColor = "red";
        strengthText.textContent = "Force : Faible";
    } else if (strength === 2) {
        strengthBar.style.backgroundColor = "orange";
        strengthText.textContent = "Force : Moyenne";
    } else if (strength === 3) {
        strengthBar.style.backgroundColor = "yellow";
        strengthText.textContent = "Force : Bonne";
    } else if (strength === 4) {
        strengthBar.style.backgroundColor = "green";
        strengthText.textContent = "Force : Excellente";
    } else {
        strengthText.textContent = "Force : Faible";
    }
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
