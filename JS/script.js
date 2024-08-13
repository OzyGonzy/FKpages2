const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Alterna la clase 'active' en el menú
});


let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;
    
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    
    document.querySelector('.carousel-images').style.transform = `translateX(-${currentSlide * 100}%)`;
}


document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario
    document.getElementById('contact-form').style.display = 'none'; // Oculta el formulario
    document.getElementById('confirmation-message').style.display = 'block'; // Muestra el mensaje de confirmación
});

document.getElementById('contact-again').addEventListener('click', function() {
    document.getElementById('confirmation-message').style.display = 'none'; // Oculta el mensaje de confirmación
    document.getElementById('contact-form').style.display = 'block'; // Muestra el formulario nuevamente
});
