function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
      // Calcul de la position de la section par rapport au haut de la page
      const topOffset = section.getBoundingClientRect().top + window.scrollY;
      // Défilement vers la section avec une transition fluide
      window.scrollTo({
          top: topOffset,
          behavior: 'smooth'
      });
  }
}

document.addEventListener("DOMContentLoaded", function() {
  // Récupération de tous les liens du menu
  const menuLinks = document.querySelectorAll('.menu a');

  // Ajout d'un écouteur d'événement pour chaque lien du menu
  menuLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          // Récupération de l'identifiant de la section à laquelle le lien pointe
          const sectionId = link.getAttribute('href').substring(1);
          // Appel de la fonction pour défilement vers la section avec une transition
          scrollToSection(sectionId);
      });
  });
});