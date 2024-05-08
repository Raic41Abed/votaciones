$(document).ready(function() {
    // Mostrar la alerta de bienvenida al cargar la página
    alert("¡Bienvenido a las Elecciones Estudiantiles!");

    // Mostrar el modal al cargar la página
    $('#exampleModal').modal('show');
});

document.addEventListener("DOMContentLoaded", function() {
    const goUpButton = document.querySelector("#go-up-button");
    window.addEventListener("scroll", handleScroll);
    goUpButton.addEventListener("click", scrollToTop);
});

function handleScroll() {
    const goUpButton = document.querySelector("#go-up-button");
    if (window.scrollY > 100) {
        goUpButton.classList.add("show");
    } else {
        goUpButton.classList.remove("show");
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
