document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.testimonial-slider');
    const dots = document.querySelectorAll('.dot');

    let currentIndex = 0;
    const totalSlides = dots.length; // 3 slides + 1 copie pour la boucle

    function updateDots(index) {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index % totalSlides].classList.add('active'); // Garde l'index valide
    }

    function autoSlide() {
        currentIndex++;  // Passe au slide suivant

        if (currentIndex >= totalSlides) {  
            setTimeout(() => {
                slider.style.transition = "none";  // Supprime la transition pour éviter le "jump"
                slider.style.transform = "translateX(0%)"; // Remet au début instantanément
                currentIndex = 0;  // Réinitialise l'index
                updateDots(currentIndex); // Mets à jour les dots
            }, 600);  // Délai avant le reset pour que ça paraisse fluide
        } else {
            slider.style.transition = "transform 0.5s ease-in-out"; // Transition douce
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
            updateDots(currentIndex);
        }
    }

    setInterval(autoSlide, 5000); // Défilement toutes les 5 secondes
});
