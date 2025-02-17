document.addEventListener("DOMContentLoaded", function () {
    function loadComponent(id, file) {
        let pathPrefix = window.location.pathname.includes("/pages/") ? "../" : ""; // Vérifie si on est dans /pages/
        fetch(pathPrefix + "components/" + file)  // Corrige le chemin ici
            .then(response => response.text())
            .then(data => document.getElementById(id).innerHTML = data)
            .catch(error => console.error(`Error loading ${file}:`, error));
    }

    loadComponent("header-placeholder", "header.html");
    loadComponent("footer-placeholder", "footer.html");
});
