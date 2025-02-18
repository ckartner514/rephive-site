document.addEventListener("DOMContentLoaded", function () {
    function getBasePath() {
        console.log("location.pathname:", window.location.pathname);
        // Si le chemin contient '/pages/', on retourne "../", sinon "./"
        if (window.location.pathname.includes("/pages/")) {
            console.log("Using '../' as basePath");
            return "../";
        } else {
            console.log("Using './' as basePath");
            return "./";
        }
    }

    function loadComponent(id, file) {
        let basePath = getBasePath();
        let fullPath = basePath + "components/" + file;
        console.log("Fetching component from:", fullPath);
        return fetch(fullPath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                document.getElementById(id).innerHTML = data;
                // Correction des chemins d'images dans le composant injecté
                document.querySelectorAll("#" + id + " img").forEach(img => {
                    let imgPath = img.getAttribute("src");
                    if (!img.src.includes("http") && imgPath.startsWith("../")) {
                        img.src = basePath + imgPath.replace("../", "");
                    }
                    console.log(`Fixed image path: ${img.src}`);
                });
            })
            .catch(error => console.error(`Error loading ${file}:`, error));
    }

    Promise.all([
        loadComponent("header-placeholder", "header.html"),
        loadComponent("footer-placeholder", "footer.html")
    ]).then(() => {
        const navLinks = document.getElementById("navLinks");
        if (navLinks) {
            let hamburger = document.createElement("div");
            hamburger.className = "hamburger";
            hamburger.innerHTML = "&#9776;"; // Icône hamburger
            const nav = document.querySelector("nav.nav");
            if (nav) {
                nav.insertBefore(hamburger, navLinks);
            }
            hamburger.addEventListener("click", function () {
                navLinks.classList.toggle("active");
            });
        }
    });
});
