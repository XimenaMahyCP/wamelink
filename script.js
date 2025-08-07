// Este evento se asegura de que el código se ejecute solo cuando todo el contenido de la página se haya cargado.
document.addEventListener('DOMContentLoaded', function() {

    // --- Actualización automática del año en el footer ---
    // Busca el elemento en el HTML que tiene el id "current-year".
    const yearSpan = document.getElementById('current-year');
    
    // Si encuentra el elemento, le pone el año actual como texto.
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Aquí puedes agregar más funcionalidades en el futuro.
    // Por ejemplo: animaciones al hacer scroll, validaciones de formularios, etc.

});
