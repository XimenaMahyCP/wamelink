document.addEventListener('DOMContentLoaded', function() {
    // Actualización automática del año en el footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
