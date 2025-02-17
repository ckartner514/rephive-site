document.addEventListener("DOMContentLoaded", function () {
    function getBasePath() {
        // Vérifie si on est sur GitHub Pages (chemin contient /rephive-site/)
        if (window.location.pathname.includes("/rephive-site/")) {
            return "/rephive-site/";
        } else {
            return "./"; // Chemin relatif en local
        }
    }

    function loadComponent(id, file) {
        let basePath = getBasePath();
        fetch(basePath + "components/" + file)
            .then(response => response.text())
            .then(data => {
                document.getElementById(id).innerHTML = data;

                // Corriger les chemins d'images après l'injection
                document.querySelectorAll("#" + id + " img").forEach(img => {
                    if (!img.src.includes("http")) {
                        img.src = basePath + img.getAttribute("src").replace("../", "");
                    }
                });
            })
            .catch(error => console.error(`Error loading ${file}:`, error));
    }

    loadComponent("header-placeholder", "header.html");
    loadComponent("footer-placeholder", "footer.html");
});
