3// Sélection des éléments
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupText = document.getElementById("popup-text");
const closeButton = document.querySelector(".close");

// Ajouter un événement à chaque compétence
document.querySelectorAll(".skill").forEach(skill => {
    skill.addEventListener("click", anna);
});

function anna(){
    const title = this.querySelector("h3").textContent;
    const description = this.getAttribute("data-description");

    // Mettre à jour le contenu du popup
    popupTitle.textContent = title;
    popupText.textContent = description;
    popup.style.display = "flex";

}

// Fermer la popup en cliquant sur "×"
closeButton.addEventListener("click", () => {
    popup.style.display = "none";
});

// Fermer en cliquant en dehors de la popup
window.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});

// garder la popup fermer des la page chargée

window.addEventListener("load", () => {
    popup.style.display = "none";
}
);

// fermer la popup avec la touche "echap"

window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        popup.style.display = "none";
    }
});


// Fonction pour afficher la popup avec des informations dynamiques
function showPopup(popupId, info) {
    var popup = document.getElementById(popupId);
    var popupText = document.getElementById('popup-description');
    
    // Insérer le contenu HTML de l'attribut 'data-info'
    popupText.innerHTML = info; // Utilisation de innerHTML pour insérer le HTML directement
    
    popup.classList.add('active');  // Afficher la popup
}

// Fonction pour fermer la popup
function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.classList.remove('active');  // Cacher la popup
}

// Ajouter un événement de clic sur chaque bouton "En savoir plus"
document.querySelectorAll('.card-button').forEach(function(button) {
    button.addEventListener('click', function() {
        // Récupérer l'information stockée dans l'attribut 'data-info'
        var info = button.getAttribute('data-info');
        
        // Afficher la popup avec l'information spécifique
        showPopup('popup-lateral', info);
    });
});

