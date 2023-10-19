document.addEventListener("DOMContentLoaded", function () {
    // Récupérez l'adresse courriel du stockage local
    var emailUtilisateur = localStorage.getItem("email");

    // Sélectionnez l'élément <p> où vous souhaitez afficher l'adresse courriel
    var elementEmail = document.getElementById("emailUtilisateur");

    // Assurez-vous que l'adresse courriel existe
    if (emailUtilisateur) {
        // Affichez l'adresse courriel
        elementEmail.textContent = "Adresse courriel : " + emailUtilisateur;
    } else {
        // Gérez le cas où l'adresse courriel n'est pas disponible
        elementEmail.textContent = "Adresse courriel non disponible";
    }
});
document.addEventListener("DOMContentLoaded", function () {
    // Récupérez l'objet sélectionné depuis le stockage local
    var objetSelectionne = localStorage.getItem("objetSelectionne");

    // Sélectionnez l'élément où vous souhaitez afficher l'image
    var elementImageObjet = document.getElementById("imageObjet");

    // Vérifiez l'objet sélectionné et affichez l'image correspondante
    if (objetSelectionne === "nom_objet_1") {
        // Affichez l'image de l'objet 1
        elementImageObjet.innerHTML = '<img src="chemin_vers_image_objet_1.jpg" alt="Objet 1">';
    } else if (objetSelectionne === "nom_objet_2") {
        // Affichez l'image de l'objet 2
        elementImageObjet.innerHTML = '<img src="chemin_vers_image_objet_2.jpg" alt="Objet 2">';
    } // Ajoutez d'autres conditions pour les autres objets

    // Gérez le cas où l'objet n'est pas sélectionné
    if (!objetSelectionne) {
        elementImageObjet.textContent = "Aucun objet sélectionné";
    }
});
