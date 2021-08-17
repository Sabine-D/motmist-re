// Tous les éléments ciblés dans le HTML
let guessPrice = document.getElementById("guess");
let validationButton = document.getElementById("validation");
let paragrapheMessage = document.getElementById("message");

// Gestion des évènements
validationButton.onclick = checkGuess;

// Variables
let userGuess;
let randomPrice;

// Générer un nombre aléatoire
initGame();


// FONCTIONS

function checkGuess() {
    
    // Récupérer la saisie
    userGuess = guessPrice.value;

    // Vérifier la donnée
    if (userGuess < randomPrice) {
        paragrapheMessage.innerHTML = "+ GRAND";
    } else if (userGuess > randomPrice) {
        paragrapheMessage.innerHTML = "+ PETIT";
    } else {
        paragrapheMessage.innerHTML = "BRAVO";
        initGame();
    }
    
}

function initGame() {
    // 1 - Nouveau tirage
    randomPrice = Math.floor(Math.random() * 100);
    console.log(randomPrice);

    // 2 - enlever le paragraphe
    paragrapheMessage.innerHTML = "BONNE CHANCE !";    
}