document.addEventListener("DOMContentLoaded", function () {
    function getBasePath() {
        if (window.location.pathname.includes("/rephive-site/")) {
            return "/rephive-site/";
        } else {
            return "./"; 
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
                    let imgPath = img.getAttribute("src");

                    if (!img.src.includes("http") && imgPath.startsWith("../")) {
                        img.src = basePath + imgPath.replace("../", ""); // Supprime proprement le '../'
                    }

                    console.log(`Fixed image path: ${img.src}`); // Debugging
                });
            })
            .catch(error => console.error(`Error loading ${file}:`, error));
    }

    loadComponent("header-placeholder", "header.html");
    loadComponent("footer-placeholder", "footer.html");
});