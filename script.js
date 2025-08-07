document.addEventListener('DOMContentLoaded', function() {
    // Actualización automática del año en el footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        // Establece el año actual basado en la fecha del sistema del visitante.
        yearSpan.textContent = new Date().getFullYear();
    }
});
