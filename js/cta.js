document.addEventListener("DOMContentLoaded", function () {
    console.log("CTA script loaded"); // ✅ Vérification Console

    // Vérifie que ce n'est PAS la page contact avant d'ajouter le bouton
    if (!document.body.classList.contains("contact-page")) {
        let ctaButton = document.createElement("a");
        ctaButton.href = "#"; // ✅ Change ça si tu veux une vraie URL
        ctaButton.className = "cta-button";
        ctaButton.textContent = "Book a Meeting";

        document.body.appendChild(ctaButton);
        console.log("CTA button added"); // ✅ Vérification Console
    }
});
