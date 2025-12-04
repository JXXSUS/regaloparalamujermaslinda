document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener el botón
    const button = document.getElementById('surprise-button');

    // 2. Añadir el 'event listener' al botón
    button.addEventListener('click', () => {
        // Redirigir a la página de sorpresa
        window.location.href = 'sorpresa.html';
        // 3. Comprobar si el mensaje está oculto (si tiene la clase 'hidden')
        if (hiddenMessage.classList.contains('hidden')) {
            // Si está oculto, lo mostramos
            hiddenMessage.classList.remove('hidden');
            hiddenMessage.classList.add('visible');
            
            // Opcional: Deshabilitar el botón para que solo se use una vez
            button.textContent = "¡Sorpresa Abierta! 🥳";
            button.disabled = true;
            button.style.backgroundColor = 'var(--secondary-color)';

        } else {
            // Si ya está visible, no hacemos nada o lo ocultamos (depende de lo que prefieras)
            // En este caso, lo dejamos visible y deshabilitamos el botón.
        }
    });
});